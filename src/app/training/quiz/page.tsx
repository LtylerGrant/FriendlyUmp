"use client";

import Link from "next/link";
import { ALL_QUIZZES } from "@/data/quizzes";
import { RULE_CATEGORY_LABELS } from "@/lib/types";
import { loadProgress } from "@/lib/progress";
import { useEffect, useState } from "react";
import { QuizResult } from "@/lib/types";

export default function QuizSelectionPage() {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    setResults(loadProgress().quizResults);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/training" className="hover:text-emerald-700">Training</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Quizzes</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Rule Quizzes</h1>
      <p className="text-gray-600 mb-8">
        Choose a quiz to test your knowledge. Each quiz covers a different aspect of the rules.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALL_QUIZZES.map((quiz) => {
          const pastResults = results.filter((r) => r.quizId === quiz.id);
          const bestResult = pastResults.length > 0
            ? pastResults.reduce((best, r) =>
                (r.correctAnswers / r.totalQuestions) > (best.correctAnswers / best.totalQuestions) ? r : best
              )
            : null;

          return (
            <Link
              key={quiz.id}
              href={`/training/quiz/${quiz.id}`}
              className="group border rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                  {RULE_CATEGORY_LABELS[quiz.category]}
                </span>
              </div>
              <h2 className="text-lg font-semibold group-hover:text-emerald-700 transition-colors">
                {quiz.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 mb-4">{quiz.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{quiz.questions.length} questions</span>
                {bestResult && (
                  <span className="font-medium text-emerald-700">
                    Best: {Math.round((bestResult.correctAnswers / bestResult.totalQuestions) * 100)}%
                  </span>
                )}
                {!bestResult && (
                  <span className="text-gray-400">Not attempted</span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
