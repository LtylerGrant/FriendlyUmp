// ---- Rules ----
export type RuleCategory =
  | "field-equipment"
  | "pitching"
  | "batting"
  | "base-running"
  | "fielding-defense"
  | "interference-obstruction"
  | "game-management"
  | "umpiring";

export const RULE_CATEGORY_LABELS: Record<RuleCategory, string> = {
  "field-equipment": "Field & Equipment",
  pitching: "Pitching",
  batting: "Batting",
  "base-running": "Base Running",
  "fielding-defense": "Fielding & Defense",
  "interference-obstruction": "Interference & Obstruction",
  "game-management": "Game Management",
  umpiring: "Umpiring",
};

export interface Rule {
  id: string;
  ruleRef: string; // e.g. "1.10", "8.05(a)"
  category: RuleCategory;
  title: string;
  summary: string;
  details: string;
  keyPoints?: string[];
  penalty?: string;
}

// ---- Quiz ----
export type QuestionType = "multiple-choice" | "true-false" | "scenario-visual" | "strike-zone-call";

export interface ScenarioConfig {
  type: "field" | "strike-zone";
  runners?: { base: 1 | 2 | 3; label?: string }[];
  highlightZones?: string[];
  pitchLocation?: { x: number; y: number };
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  category: RuleCategory;
  difficulty: 1 | 2 | 3;
  prompt: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  scenarioConfig?: ScenarioConfig;
  relatedRuleId?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: RuleCategory | "mixed";
  questions: QuizQuestion[];
}

// ---- Strike Zone Simulator ----
export type PitchSpeed = "slow" | "medium" | "fast";

export interface PitchConfig {
  /** Normalized 0-1 where 0=far inside, 1=far outside */
  targetX: number;
  /** Normalized 0-1 where 0=high, 1=low */
  targetY: number;
  speed: PitchSpeed;
  isStrike: boolean;
  label?: string;
}

// ---- Progress ----
export interface QuizResult {
  quizId: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
}

export interface StrikeZoneResult {
  date: string;
  totalPitches: number;
  correctCalls: number;
  averageReactionMs: number;
}

export interface UserProgress {
  quizResults: QuizResult[];
  strikeZoneResults: StrikeZoneResult[];
  rulesViewed: string[];
  lastActive: string;
}
