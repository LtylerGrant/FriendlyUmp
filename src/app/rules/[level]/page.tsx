"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { UmpireLevel } from "@/lib/types";
import { getLevelMeta } from "@/data/levels";
import { getRulesForLevel, getCategoriesForLevel } from "@/data/rules";
import RuleList from "@/components/rules/RuleList";

export default function LevelRulesPage() {
  const params = useParams();
  const levelId = params.level as UmpireLevel;
  const levelMeta = getLevelMeta(levelId);
  const rules = getRulesForLevel(levelId);
  const categories = getCategoriesForLevel(levelId);

  if (!levelMeta) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Level not found</h1>
        <Link href="/rules" className="text-emerald-700 hover:underline">
          Back to Rule Reference
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/rules" className="hover:text-emerald-700">
          Rules
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{levelMeta.name}</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-3xl font-bold ${levelMeta.color}`}>{levelMeta.shortName}</span>
          <h1 className="text-3xl font-bold">{levelMeta.name} Rules</h1>
        </div>
        <p className="text-gray-600">{levelMeta.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          {rules.length} rules &middot; {rules.filter((r) => r.isOverridden).length} with level-specific differences
        </p>
      </div>

      <RuleList rules={rules} categories={categories} />
    </div>
  );
}
