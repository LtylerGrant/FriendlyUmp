"use client";

import Link from "next/link";
import { ALL_QUIZZES } from "@/data/quizzes";
import BaseballField from "@/components/field/BaseballField";

export default function TrainingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Training Center</h1>
      <p className="text-gray-600 mb-8">
        Sharpen your umpiring skills with interactive tools and quizzes.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Strike Zone Trainer */}
        <Link
          href="/training/strike-zone"
          className="group border rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
        >
          <h2 className="text-xl font-semibold group-hover:text-emerald-700 transition-colors mb-2">
            Strike Zone Trainer
          </h2>
          <p className="text-gray-600 mb-4">
            Practice calling balls and strikes with an interactive strike zone.
            Compare zones across all 5 playing levels.
          </p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">Interactive</span>
            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">Visual</span>
            <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Level Comparison</span>
          </div>
        </Link>

        {/* Quizzes */}
        <Link
          href="/training/quiz"
          className="group border rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
        >
          <h2 className="text-xl font-semibold group-hover:text-emerald-700 transition-colors mb-2">
            Rule Quizzes
          </h2>
          <p className="text-gray-600 mb-4">
            Test your knowledge with {ALL_QUIZZES.length} quizzes covering strike zones, balks,
            interference, and more.
          </p>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">
              {ALL_QUIZZES.reduce((sum, q) => sum + q.questions.length, 0)} Questions
            </span>
            <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-700">Scenario-Based</span>
          </div>
        </Link>
      </div>

      {/* Field diagram preview */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Baseball Field Reference</h2>
        <p className="text-gray-600 mb-4">
          The interactive field diagram is used throughout quizzes to illustrate play scenarios.
        </p>
        <div className="flex justify-center">
          <BaseballField
            width={400}
            height={380}
            runners={[
              { base: 1, label: "R1" },
              { base: 3, label: "R3" },
            ]}
            highlightZones={["infield"]}
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-3">
          Example: Runners on first and third with infield highlighted
        </p>
      </div>
    </div>
  );
}
