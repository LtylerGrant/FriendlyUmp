"use client";

import { useLevel } from "@/context/LevelContext";
import { LEVELS } from "@/data/levels";
import { UmpireLevel } from "@/lib/types";

export default function LevelSelector() {
  const { level, setLevel } = useLevel();

  return (
    <div className="flex flex-wrap gap-2">
      {LEVELS.map((l) => (
        <button
          key={l.id}
          onClick={() => setLevel(l.id as UmpireLevel)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            level === l.id
              ? "bg-emerald-700 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {l.shortName}
        </button>
      ))}
    </div>
  );
}
