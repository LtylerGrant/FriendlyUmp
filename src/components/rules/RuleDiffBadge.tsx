import { ResolvedRule } from "@/lib/types";

export default function RuleDiffBadge({ rule }: { rule: ResolvedRule }) {
  if (!rule.isOverridden) return null;

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
      Level-specific
    </span>
  );
}
