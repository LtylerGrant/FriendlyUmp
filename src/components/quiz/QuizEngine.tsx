"use client";

import { useState, useCallback } from "react";
import { Quiz, QuizQuestion } from "@/lib/types";
import { shuffleQuestions, isCorrect, calculateScore } from "@/lib/quiz-engine";
import { addQuizResult } from "@/lib/progress";
import QuestionCard from "./QuestionCard";
import QuizResults from "./QuizResults";

interface QuizEngineProps {
  quiz: Quiz;
}

type QuizState = "idle" | "active" | "complete";

export default function QuizEngine({ quiz }: QuizEngineProps) {
  const [state, setState] = useState<QuizState>("idle");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());
  const [showFeedback, setShowFeedback] = useState(false);

  const startQuiz = useCallback(() => {
    setQuestions(shuffleQuestions(quiz.questions));
    setCurrentIndex(0);
    setAnswers(new Map());
    setShowFeedback(false);
    setState("active");
  }, [quiz.questions]);

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => new Map(prev).set(questionId, answerIndex));
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Quiz complete
      const result = calculateScore(quiz, answers);
      addQuizResult({
        quizId: quiz.id,
        date: new Date().toISOString(),
        score: result.correct,
        totalQuestions: result.total,
        correctAnswers: result.correct,
      });
      setState("complete");
    }
  };

  if (state === "idle") {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-3">{quiz.title}</h2>
        <p className="text-gray-600 mb-2">{quiz.description}</p>
        <p className="text-sm text-gray-500 mb-6">
          {quiz.questions.length} questions
        </p>
        <button
          onClick={startQuiz}
          className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (state === "complete") {
    const result = calculateScore(quiz, answers);
    return (
      <QuizResults
        quiz={quiz}
        questions={questions}
        answers={answers}
        result={result}
        onRetry={startQuiz}
      />
    );
  }

  const currentQuestion = questions[currentIndex];
  const userAnswer = answers.get(currentQuestion.id);

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{answers.size} answered</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        onAnswer={(answerIndex) => handleAnswer(currentQuestion.id, answerIndex)}
        userAnswer={userAnswer}
        showFeedback={showFeedback}
        isCorrect={userAnswer !== undefined ? isCorrect(currentQuestion, userAnswer) : undefined}
      />

      {showFeedback && (
        <div className="mt-6 text-center">
          <button
            onClick={handleNext}
            className="bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
          >
            {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        </div>
      )}
    </div>
  );
}
