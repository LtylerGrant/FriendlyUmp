"use client";

import Link from "next/link";
import { useLevel } from "@/context/LevelContext";
import { getLevelMeta } from "@/data/levels";
import { getRulesForLevel } from "@/data/rules";
import { ALL_QUIZZES } from "@/data/quizzes";
import { loadProgress } from "@/lib/progress";
import { useEffect, useState } from "react";
import { UserProgress } from "@/lib/types";

const FEATURES = [
  {
    title: "Rule Reference",
    description: "Browse baseball rules organized by category. See how rules differ across playing levels.",
    href: "/rules",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Strike Zone Trainer",
    description: "Interactive strike zone visualization. Compare zones across levels and practice calling pitches.",
    href: "/training/strike-zone",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v18m6-18v18M3 9h18M3 15h18" />
      </svg>
    ),
  },
  {
    title: "Quizzes",
    description: "Test your knowledge with scenario-based questions covering strike zones, balks, and interference.",
    href: "/training/quiz",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Progress",
    description: "Track your quiz scores, rules studied, and improvement over time.",
    href: "/progress",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const { level } = useLevel();
  const levelMeta = getLevelMeta(level);
  const rules = getRulesForLevel(level);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const lastQuiz = progress?.quizResults[progress.quizResults.length - 1];
  const lastQuizData = lastQuiz ? ALL_QUIZZES.find((q) => q.id === lastQuiz.quizId) : null;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Train Like a Pro Umpire
          </h1>
          <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
            Master the rules of baseball across every playing level. Interactive visuals,
            quizzes, and rule comparisons to sharpen your calls.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/training/strike-zone"
              className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Try Strike Zone Trainer
            </Link>
            <Link
              href="/training/quiz"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Take a Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Current Level Stats */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Current Level</p>
            <h2 className="text-2xl font-bold">{levelMeta?.name}</h2>
            <p className="text-gray-600 mt-1">{levelMeta?.description}</p>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-emerald-700">{rules.length}</p>
              <p className="text-sm text-gray-500">Rules</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-700">{ALL_QUIZZES.length}</p>
              <p className="text-sm text-gray-500">Quizzes</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-700">{progress?.quizResults.length ?? 0}</p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Quiz Result */}
      {lastQuiz && lastQuizData && (
        <section className="max-w-7xl mx-auto px-4 pb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-sm text-blue-600 font-medium">Last Quiz Result</p>
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="font-semibold text-lg">{lastQuizData.title}</p>
                <p className="text-gray-600 text-sm">
                  {lastQuiz.correctAnswers} / {lastQuiz.totalQuestions} correct
                </p>
              </div>
              <div className="text-3xl font-bold text-blue-700">
                {Math.round((lastQuiz.correctAnswers / lastQuiz.totalQuestions) * 100)}%
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Get Started</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group border rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
            >
              <div className="text-emerald-700 mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
