"use client";

import Link from "next/link";
import { Quiz, QuizQuestion } from "@/lib/types";
import { isCorrect } from "@/lib/quiz-engine";

interface QuizResultsProps {
  quiz: Quiz;
  questions: QuizQuestion[];
  answers: Map<string, number>;
  result: { score: number; total: number; correct: number; percentage: number };
  onRetry: () => void;
}

export default function QuizResults({ quiz, questions, answers, result, onRetry }: QuizResultsProps) {
  const grade =
    result.percentage >= 90
      ? { label: "Excellent!", color: "text-green-700", bg: "bg-green-50" }
      : result.percentage >= 70
      ? { label: "Good Job!", color: "text-blue-700", bg: "bg-blue-50" }
      : result.percentage >= 50
      ? { label: "Keep Practicing", color: "text-yellow-700", bg: "bg-yellow-50" }
      : { label: "Needs Work", color: "text-red-700", bg: "bg-red-50" };

  return (
    <div>
      {/* Score summary */}
      <div className={`${grade.bg} rounded-xl p-8 text-center mb-8`}>
        <p className={`text-lg font-medium ${grade.color}`}>{grade.label}</p>
        <p className="text-5xl font-bold text-gray-900 mt-2">{result.percentage}%</p>
        <p className="text-gray-600 mt-2">
          {result.correct} out of {result.total} correct
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={onRetry}
          className="bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
        >
          Retry Quiz
        </button>
        <Link
          href="/training/quiz"
          className="border border-gray-300 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          All Quizzes
        </Link>
      </div>

      {/* Question review */}
      <h3 className="text-lg font-semibold mb-4">Review Answers</h3>
      <div className="space-y-3">
        {questions.map((q, i) => {
          const userAnswer = answers.get(q.id);
          const correct = userAnswer !== undefined && isCorrect(q, userAnswer);

          return (
            <div
              key={q.id}
              className={`border rounded-lg p-4 ${correct ? "border-green-200 bg-green-50/50" : "border-red-200 bg-red-50/50"}`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                  correct ? "bg-green-600" : "bg-red-600"
                }`}>
                  {correct ? "\u2713" : "\u2717"}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-sm">
                    Q{i + 1}: {q.prompt}
                  </p>
                  {q.options && (
                    <div className="mt-1 text-sm text-gray-600">
                      <p>
                        Your answer: <span className={correct ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                          {userAnswer !== undefined ? q.options[userAnswer] : "No answer"}
                        </span>
                      </p>
                      {!correct && (
                        <p>
                          Correct answer: <span className="text-green-700 font-medium">
                            {q.options[q.correctAnswer]}
                          </span>
                        </p>
                      )}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{q.explanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
