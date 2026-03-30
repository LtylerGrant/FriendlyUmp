"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserProgress } from "@/lib/types";
import { loadProgress } from "@/lib/progress";
import { ALL_QUIZZES } from "@/data/quizzes";

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) return null;

  const totalQuizzes = progress.quizResults.length;
  const avgScore =
    totalQuizzes > 0
      ? Math.round(
          progress.quizResults.reduce(
            (sum, r) => sum + (r.correctAnswers / r.totalQuestions) * 100,
            0
          ) / totalQuizzes
        )
      : 0;
  const bestScore =
    totalQuizzes > 0
      ? Math.round(
          Math.max(
            ...progress.quizResults.map(
              (r) => (r.correctAnswers / r.totalQuestions) * 100
            )
          )
        )
      : 0;
  const totalCorrect = progress.quizResults.reduce(
    (sum, r) => sum + r.correctAnswers,
    0
  );
  const totalQuestions = progress.quizResults.reduce(
    (sum, r) => sum + r.totalQuestions,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
      <p className="text-gray-600 mb-8">
        Track your quiz results and see how you&apos;re improving over time.
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-emerald-50 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-emerald-700">{totalQuizzes}</p>
          <p className="text-sm text-gray-600">Quizzes Taken</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-blue-700">{avgScore}%</p>
          <p className="text-sm text-gray-600">Average Score</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-purple-700">{bestScore}%</p>
          <p className="text-sm text-gray-600">Best Score</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-amber-700">
            {totalCorrect}/{totalQuestions}
          </p>
          <p className="text-sm text-gray-600">Total Correct</p>
        </div>
      </div>

      {/* Quiz history */}
      <h2 className="text-xl font-semibold mb-4">Quiz History</h2>
      {totalQuizzes === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500 mb-4">
            No quizzes completed yet. Take a quiz to start tracking your progress!
          </p>
          <Link
            href="/training/quiz"
            className="bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
          >
            Take a Quiz
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {[...progress.quizResults].reverse().map((result, i) => {
            const quiz = ALL_QUIZZES.find((q) => q.id === result.quizId);
            const pct = Math.round(
              (result.correctAnswers / result.totalQuestions) * 100
            );
            const date = new Date(result.date);

            return (
              <div key={i} className="border rounded-lg p-4 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                    pct >= 80
                      ? "bg-green-600"
                      : pct >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {pct}%
                </div>
                <div className="flex-1">
                  <p className="font-medium">{quiz?.title ?? result.quizId}</p>
                  <p className="text-sm text-gray-500">
                    {result.correctAnswers}/{result.totalQuestions} correct &middot;{" "}
                    {date.toLocaleDateString()}
                  </p>
                </div>
                {quiz && (
                  <Link
                    href={`/training/quiz/${quiz.id}`}
                    className="text-sm text-emerald-700 hover:underline"
                  >
                    Retry
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
