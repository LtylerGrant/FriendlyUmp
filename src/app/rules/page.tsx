"use client";

import Link from "next/link";
import { LEVELS } from "@/data/levels";
import { getRulesForLevel } from "@/data/rules";

export default function RulesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Rule Reference</h1>
      <p className="text-gray-600 mb-8">
        Browse baseball rules by playing level. Each level has unique rules and variations.
        Select a level to see the full rule set.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEVELS.map((level) => {
          const rules = getRulesForLevel(level.id);
          const overridden = rules.filter((r) => r.isOverridden).length;

          return (
            <Link
              key={level.id}
              href={`/rules/${level.id}`}
              className="group border rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-2xl font-bold ${level.color}`}>{level.shortName}</span>
                <h2 className="text-lg font-semibold group-hover:text-emerald-700 transition-colors">
                  {level.name}
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">{level.description}</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-500">
                  <strong className="text-gray-900">{rules.length}</strong> rules
                </span>
                {overridden > 0 && (
                  <span className="text-amber-600">
                    <strong>{overridden}</strong> level-specific
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
