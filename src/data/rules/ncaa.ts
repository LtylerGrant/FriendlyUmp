import { LevelRuleOverride } from "@/lib/types";

export const NCAA_OVERRIDES: LevelRuleOverride[] = [
  {
    ruleId: "sz-001",
    level: "ncaa",
    notes: "NCAA uses a similar zone definition to NFHS. Emphasis is placed on umpire consistency and use of the zone as defined, not expanded.",
    differences: "Similar to high school; emphasis on strict adherence.",
  },
  {
    ruleId: "pitch-002",
    level: "ncaa",
    notes: "Faking to first while on the rubber is a balk in NCAA play.",
    differences: "Same enforcement as MLB.",
  },
  {
    ruleId: "bat-002",
    level: "ncaa",
    notes: "The DH is used in NCAA baseball. The DH bats for the pitcher and does not play defense. If the DH enters the game defensively, the pitcher must bat in the DH's spot.",
    differences: "DH is used (unlike high school).",
  },
  {
    ruleId: "eq-001",
    level: "ncaa",
    summary: "Bats must be BBCOR certified or wood. Max 2-5/8 inch barrel, -3 drop weight.",
    details: "NCAA requires BBCOR certification for all non-wood bats. The bat must have the BBCOR .50 stamp. Maximum barrel diameter is 2-5/8 inches. The weight drop must be -3. Wood bats do not require certification.",
    differences: "Same BBCOR requirements as high school.",
  },
  {
    ruleId: "gm-001",
    level: "ncaa",
    summary: "Games are 9 innings. Doubleheaders may use 7-inning games.",
    details: "NCAA regular-season games are 9 innings. Conference rules may allow 7-inning doubleheader games. Tied games in conference play may be suspended and resumed. The tiebreaker rule (runner on second) may be used starting in extra innings per conference rules.",
    differences: "9 innings (same as MLB); 7-inning doubleheaders allowed.",
  },
  {
    ruleId: "gm-002",
    level: "ncaa",
    summary: "Mercy rule: 10-run lead after 7 innings in some conferences.",
    details: "The NCAA mercy rule is optional and determined by conference. The most common form ends the game after 7 innings if one team leads by 10 or more runs. Some conferences do not use a mercy rule at all.",
    differences: "Optional, conference-dependent mercy rule.",
  },
];
