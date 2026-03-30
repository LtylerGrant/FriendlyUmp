import { LevelRuleOverride } from "@/lib/types";

export const HIGH_SCHOOL_OVERRIDES: LevelRuleOverride[] = [
  {
    ruleId: "sz-001",
    level: "high-school",
    notes: "NFHS defines the zone from the midpoint between the shoulders and the waist to the bottom of the knees when the batter assumes a natural batting stance.",
    differences: "Slightly higher top boundary than MLB.",
  },
  {
    ruleId: "pitch-002",
    level: "high-school",
    notes: "Under NFHS rules, a pitcher may not fake a throw to first base while on the rubber. This is enforced as a balk.",
    differences: "Same as NCAA and MLB on this rule.",
  },
  {
    ruleId: "br-001",
    level: "high-school",
    notes: "Full leading and stealing allowed. Runners may lead off as soon as the pitcher has the ball on the rubber.",
    differences: "No restrictions on leading off or stealing.",
  },
  {
    ruleId: "eq-001",
    level: "high-school",
    summary: "Bats must be BBCOR certified with a max barrel diameter of 2-5/8 inches.",
    details: "NFHS requires all non-wood bats to have BBCOR certification with the .50 BBCOR stamp. Maximum length is 36 inches. Maximum barrel diameter is 2-5/8 inches. Wood bats are permitted and do not require certification. The weight drop must be no greater than -3.",
    differences: "BBCOR certification required; -3 weight drop minimum.",
  },
  {
    ruleId: "gm-001",
    level: "high-school",
    summary: "Games are 7 innings. Extra innings played until a winner is determined.",
    details: "NFHS games are 7 innings. If tied after 7, extra innings are played. Many state associations have adopted a tiebreaker rule (runner placed on second base) starting in the 8th inning or later.",
    differences: "7 innings (vs 9 in MLB/NCAA).",
  },
  {
    ruleId: "gm-002",
    level: "high-school",
    summary: "Mercy rule: 10-run lead after 5 innings.",
    details: "Under NFHS rules, the game ends if one team has a 10-run lead after 5 complete innings (4.5 if the home team leads). Some states have adopted a 15-run rule after 3 innings as well.",
    differences: "10-run mercy rule after 5 innings.",
  },
  {
    ruleId: "bat-002",
    level: "high-school",
    enabled: false,
    notes: "The designated hitter is NOT used in high school baseball under NFHS rules. All players who bat must play a defensive position (or use the EH/extra hitter rule if adopted by the state).",
    differences: "No DH rule in NFHS.",
  },
];
