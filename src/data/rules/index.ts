import { UmpireLevel, ResolvedRule, RuleCategory, LevelRuleOverride } from "@/lib/types";
import { BASE_RULES } from "./base-rules";
import { LITTLE_LEAGUE_OVERRIDES } from "./little-league";
import { MIDDLE_SCHOOL_OVERRIDES } from "./middle-school";
import { HIGH_SCHOOL_OVERRIDES } from "./high-school";
import { NCAA_OVERRIDES } from "./ncaa";
import { MLB_OVERRIDES } from "./mlb";

const OVERRIDES_BY_LEVEL: Record<UmpireLevel, LevelRuleOverride[]> = {
  "little-league": LITTLE_LEAGUE_OVERRIDES,
  "middle-school": MIDDLE_SCHOOL_OVERRIDES,
  "high-school": HIGH_SCHOOL_OVERRIDES,
  ncaa: NCAA_OVERRIDES,
  mlb: MLB_OVERRIDES,
};

export function getRulesForLevel(level: UmpireLevel): ResolvedRule[] {
  const overrides = OVERRIDES_BY_LEVEL[level] || [];
  const overrideMap = new Map(overrides.map((o) => [o.ruleId, o]));

  return BASE_RULES.filter((rule) => {
    if (rule.appliesTo === "all") return true;
    return rule.appliesTo.includes(level);
  })
    .map((rule) => {
      const override = overrideMap.get(rule.id);

      if (override && override.enabled === false) {
        return null;
      }

      const resolved: ResolvedRule = {
        ...rule,
        level,
        isOverridden: !!override,
        ...(override?.summary && { summary: override.summary }),
        ...(override?.details && { details: override.details }),
        ...(override?.notes && { notes: override.notes }),
        ...(override?.differences && { differences: override.differences }),
      };

      return resolved;
    })
    .filter((r): r is ResolvedRule => r !== null);
}

export function getRulesByCategory(level: UmpireLevel, category: RuleCategory): ResolvedRule[] {
  return getRulesForLevel(level).filter((r) => r.category === category);
}

export function getRuleById(level: UmpireLevel, ruleId: string): ResolvedRule | undefined {
  return getRulesForLevel(level).find((r) => r.id === ruleId);
}

export function getCategoriesForLevel(level: UmpireLevel): RuleCategory[] {
  const rules = getRulesForLevel(level);
  const categories = new Set(rules.map((r) => r.category));
  return Array.from(categories);
}
