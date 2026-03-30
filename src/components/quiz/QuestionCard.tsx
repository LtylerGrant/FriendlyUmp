"use client";

import { QuizQuestion } from "@/lib/types";
import BaseballField from "@/components/field/BaseballField";
import StrikeZoneViewer from "@/components/strike-zone/StrikeZoneViewer";
import { useLevel } from "@/context/LevelContext";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (answerIndex: number) => void;
  userAnswer?: number;
  showFeedback: boolean;
  isCorrect?: boolean;
}

export default function QuestionCard({
  question,
  onAnswer,
  userAnswer,
  showFeedback,
  isCorrect,
}: QuestionCardProps) {
  const { level } = useLevel();
  const hasAnswered = userAnswer !== undefined;

  return (
    <div className="bg-white border rounded-xl p-6">
      {/* Difficulty badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
          question.difficulty === 1
            ? "bg-green-100 text-green-700"
            : question.difficulty === 2
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}>
          {question.difficulty === 1 ? "Easy" : question.difficulty === 2 ? "Medium" : "Hard"}
        </span>
        <span className="text-xs text-gray-400">
          {question.type.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </span>
      </div>

      {/* Prompt */}
      <h3 className="text-lg font-semibold mb-4">{question.prompt}</h3>

      {/* Visual scenario */}
      {question.scenarioConfig && (
        <div className="flex justify-center mb-6">
          {question.scenarioConfig.type === "field" ? (
            <BaseballField
              width={350}
              height={340}
              runners={question.scenarioConfig.runners}
              highlightZones={question.scenarioConfig.highlightZones}
            />
          ) : (
            <StrikeZoneViewer
              level={question.level === "all" ? level : question.level}
              interactive={false}
              width={220}
              height={280}
            />
          )}
        </div>
      )}

      {/* Answer options */}
      {question.options && (
        <div className="space-y-3">
          {question.options.map((option, i) => {
            let buttonStyle = "border-gray-200 hover:border-emerald-400 hover:bg-emerald-50";

            if (hasAnswered && showFeedback) {
              if (i === question.correctAnswer) {
                buttonStyle = "border-green-500 bg-green-50 text-green-900";
              } else if (i === userAnswer && !isCorrect) {
                buttonStyle = "border-red-500 bg-red-50 text-red-900";
              } else {
                buttonStyle = "border-gray-200 opacity-50";
              }
            } else if (i === userAnswer) {
              buttonStyle = "border-emerald-500 bg-emerald-50";
            }

            return (
              <button
                key={i}
                onClick={() => !hasAnswered && onAnswer(i)}
                disabled={hasAnswered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${buttonStyle} ${
                  hasAnswered ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-medium border-current">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{option}</span>
                  {showFeedback && i === question.correctAnswer && (
                    <svg className="w-5 h-5 text-green-600 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {showFeedback && i === userAnswer && !isCorrect && (
                    <svg className="w-5 h-5 text-red-600 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Feedback / Explanation */}
      {showFeedback && (
        <div className={`mt-4 p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className={`font-semibold mb-1 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
            {isCorrect ? "Correct!" : "Incorrect"}
          </p>
          <p className={`text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
