import { LevelRuleOverride } from "@/lib/types";

export const MIDDLE_SCHOOL_OVERRIDES: LevelRuleOverride[] = [
  {
    ruleId: "pitch-001",
    level: "middle-school",
    notes: "Balks are enforced but umpires may still give a warning on the first offense at the discretion of the league.",
    differences: "Warning may be given at umpire's discretion for first offense.",
  },
  {
    ruleId: "pitch-003",
    level: "middle-school",
    summary: "Pitch counts or inning limits may apply depending on the league.",
    details: "Many middle school leagues follow their state's high school association rules or adopt modified pitch count rules. Typical limits are 95-105 pitches per game with required rest periods. Leagues vary, so always check local rules.",
    differences: "Less strict than Little League but still has protections in place.",
  },
  {
    ruleId: "br-001",
    level: "middle-school",
    summary: "Runners may lead off and steal once the pitch is released.",
    details: "Most middle school leagues allow leading off and stealing bases once the pitcher releases the ball. Some leagues may restrict leading off until the ball crosses the plate. Check local league rules for specifics.",
    differences: "Leading off allowed in most leagues, unlike Little League.",
  },
  {
    ruleId: "eq-001",
    level: "middle-school",
    summary: "Bats must be USA Baseball or BBCOR certified depending on league.",
    details: "Most middle school leagues require USA Baseball stamped bats. Some leagues for older players (8th grade) may require BBCOR certification. Maximum barrel diameter is typically 2-5/8 inches. Always verify with your specific league.",
    differences: "Transitional bat rules; may require USA Baseball or BBCOR depending on league.",
  },
  {
    ruleId: "gm-001",
    level: "middle-school",
    summary: "Games are typically 7 innings with time limits around 1.5-2 hours.",
    details: "Most middle school games are 7 innings. Time limits of 1.5-2 hours are common. Some leagues play 6 innings. Local rules prevail.",
    differences: "7 innings (up from 6 in Little League).",
  },
  {
    ruleId: "gm-002",
    level: "middle-school",
    summary: "Mercy rule applies with a 10-run lead after 5 innings.",
    details: "Most middle school leagues end the game if one team leads by 10 or more runs after 5 complete innings (4.5 if the home team leads). Some leagues use a 15-run rule after 3 innings.",
    differences: "Similar structure to Little League but applied at later innings.",
  },
];
