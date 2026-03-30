"use client";

import { useState } from "react";
import { ResolvedRule, RULE_CATEGORY_LABELS } from "@/lib/types";
import RuleDiffBadge from "./RuleDiffBadge";

export default function RuleCard({ rule }: { rule: ResolvedRule }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                {RULE_CATEGORY_LABELS[rule.category]}
              </span>
              <RuleDiffBadge rule={rule} />
            </div>
            <h3 className="font-semibold text-gray-900">{rule.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{rule.summary}</p>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 mt-1 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t bg-gray-50">
          <div className="pt-3 space-y-3">
            <p className="text-sm text-gray-700">{rule.details}</p>

            {rule.differences && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs font-medium text-amber-800 mb-1">Level Difference</p>
                <p className="text-sm text-amber-900">{rule.differences}</p>
              </div>
            )}

            {rule.notes && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs font-medium text-blue-800 mb-1">Note</p>
                <p className="text-sm text-blue-900">{rule.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
