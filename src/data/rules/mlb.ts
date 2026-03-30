import { LevelRuleOverride } from "@/lib/types";

export const MLB_OVERRIDES: LevelRuleOverride[] = [
  {
    ruleId: "sz-001",
    level: "mlb",
    notes: "The MLB zone is the standard reference. In practice, most umpires call a zone slightly wider and lower than the rulebook definition.",
    differences: "The baseline definition; other levels reference this.",
  },
  {
    ruleId: "pitch-002",
    level: "mlb",
    notes: "Strictly enforced. Faking to first while on the rubber is a balk. Pitchers must disengage the rubber first.",
    differences: "Strictly enforced at the professional level.",
  },
  {
    ruleId: "bat-002",
    level: "mlb",
    notes: "The DH is used in both the American and National Leagues as of 2022. The DH bats for the pitcher.",
    differences: "Universal DH adopted in 2022.",
  },
  {
    ruleId: "eq-001",
    level: "mlb",
    summary: "Bats must be one-piece solid wood. Max 2.61 inch barrel diameter, max 42 inches long.",
    details: "MLB requires bats to be made of a single piece of solid wood. Maximum length is 42 inches. Maximum barrel diameter is 2.61 inches. No composite, aluminum, or laminated bats are permitted. Pine tar may be applied no more than 18 inches from the handle end.",
    differences: "Wood bats only. No composite or aluminum.",
  },
  {
    ruleId: "gm-001",
    level: "mlb",
    summary: "Games are 9 innings. Extra innings use the ghost runner rule (runner on 2nd).",
    details: "MLB games are 9 innings. Since 2020, extra innings begin with a runner placed on second base (the 'ghost runner' or 'Manfred runner'). There is no time limit. Suspended games may be completed on a later date.",
    differences: "9 innings; ghost runner rule in extras since 2020.",
  },
  {
    ruleId: "gm-002",
    level: "mlb",
    enabled: false,
    notes: "MLB does not have a mercy rule. Games are played to completion regardless of the score differential.",
    differences: "No mercy rule exists at the MLB level.",
  },
  {
    ruleId: "pitch-004",
    level: "mlb",
    notes: "MLB has strict enforcement of foreign substance rules since 2021. Umpires may check pitchers at any time. Violators face automatic ejection and suspension.",
    differences: "Enhanced enforcement of foreign substance rules since 2021.",
  },
];
