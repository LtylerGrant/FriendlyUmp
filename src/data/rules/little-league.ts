import { LevelRuleOverride } from "@/lib/types";

export const LITTLE_LEAGUE_OVERRIDES: LevelRuleOverride[] = [
  {
    ruleId: "sz-001",
    level: "little-league",
    notes: "Umpires are encouraged to have a more generous zone to promote swinging. The zone may be slightly larger in practice.",
    differences: "More generous interpretation than higher levels.",
  },
  {
    ruleId: "pitch-001",
    level: "little-league",
    notes: "At the Little League level, umpires typically issue a warning for the first balk violation before enforcing the penalty.",
    differences: "Warning issued on first offense; subsequent balks are enforced.",
  },
  {
    ruleId: "pitch-003",
    level: "little-league",
    summary: "Strict pitch count limits based on age with mandatory rest periods.",
    details: "Little League enforces pitch counts by age: Ages 7-8 max 50 pitches/day, Ages 9-10 max 75, Ages 11-12 max 85. Mandatory rest: 1 day for 21-35 pitches, 2 days for 36-50, 3 days for 51-65, 4 days for 66+. A pitcher who reaches the limit mid-batter may finish that batter.",
    differences: "Strictest pitch count rules of any level.",
  },
  {
    ruleId: "br-001",
    level: "little-league",
    summary: "Runners may not leave the base until the ball reaches the batter.",
    details: "In Little League, base stealing is restricted. Runners may not leave their base until the pitched ball has reached the batter. Leaving early results in the runner being called back to the base (dead ball). If the ball is hit, the play stands.",
    differences: "Cannot lead off or steal until the pitch reaches the batter.",
  },
  {
    ruleId: "br-002",
    level: "little-league",
    notes: "The infield fly rule applies in Little League but is less commonly invoked due to the skill level of players.",
    differences: "Same rule applies, but called less frequently in practice.",
  },
  {
    ruleId: "eq-001",
    level: "little-league",
    summary: "Bats must be USA Baseball stamped, max 2-5/8 inch barrel diameter.",
    details: "Little League bats must bear the USA Baseball mark. Maximum length is 33 inches. Maximum barrel diameter is 2-5/8 inches. Wood bats are also permitted. BBCOR and USSSA bats are NOT allowed.",
    differences: "Requires USA Baseball certification stamp; smaller barrel than higher levels.",
  },
  {
    ruleId: "gm-001",
    level: "little-league",
    summary: "Games are 6 innings with a time limit typically around 2 hours.",
    details: "Little League regular season games are 6 innings. Local leagues may impose time limits (usually 1.5-2 hours). No new inning may start after the time limit. Tournament games may have different rules.",
    differences: "6 innings instead of 7 or 9.",
  },
  {
    ruleId: "gm-002",
    level: "little-league",
    summary: "Mercy rule applies with a 15-run lead after 3 innings or 10-run lead after 4 innings.",
    details: "The game ends if one team leads by 15 or more runs after 3 innings (2.5 if home team leads) or 10 or more runs after 4 innings (3.5 if home team leads).",
    differences: "More aggressive mercy rule than higher levels to protect young players.",
  },
];
