"use client";

import { useState } from "react";
import { ResolvedRule, RuleCategory, RULE_CATEGORY_LABELS } from "@/lib/types";
import RuleCard from "./RuleCard";

interface RuleListProps {
  rules: ResolvedRule[];
  categories: RuleCategory[];
}

export default function RuleList({ rules, categories }: RuleListProps) {
  const [selectedCategory, setSelectedCategory] = useState<RuleCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = rules.filter((rule) => {
    if (selectedCategory !== "all" && rule.category !== selectedCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        rule.title.toLowerCase().includes(q) ||
        rule.summary.toLowerCase().includes(q) ||
        rule.details.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search rules..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-emerald-700 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All ({rules.length})
        </button>
        {categories.map((cat) => {
          const count = rules.filter((r) => r.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {RULE_CATEGORY_LABELS[cat]} ({count})
            </button>
          );
        })}
      </div>

      {/* Rules */}
      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((rule) => <RuleCard key={rule.id} rule={rule} />)
        ) : (
          <p className="text-center text-gray-500 py-8">No rules match your search.</p>
        )}
      </div>
    </div>
  );
}
