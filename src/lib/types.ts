// ---- Levels ----
export type UmpireLevel = "little-league" | "middle-school" | "high-school" | "ncaa" | "mlb";

export interface LevelMeta {
  id: UmpireLevel;
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  description: string;
}

// ---- Rules ----
export type RuleCategory =
  | "strike-zone"
  | "pitching"
  | "batting"
  | "base-running"
  | "fielding"
  | "interference"
  | "equipment"
  | "game-management";

export const RULE_CATEGORY_LABELS: Record<RuleCategory, string> = {
  "strike-zone": "Strike Zone",
  pitching: "Pitching",
  batting: "Batting",
  "base-running": "Base Running",
  fielding: "Fielding",
  interference: "Interference",
  equipment: "Equipment",
  "game-management": "Game Management",
};

export interface BaseRule {
  id: string;
  category: RuleCategory;
  title: string;
  summary: string;
  details: string;
  appliesTo: UmpireLevel[] | "all";
}

export interface LevelRuleOverride {
  ruleId: string;
  level: UmpireLevel;
  summary?: string;
  details?: string;
  notes?: string;
  differences?: string;
  enabled?: boolean;
}

export interface ResolvedRule extends BaseRule {
  level: UmpireLevel;
  notes?: string;
  differences?: string;
  isOverridden: boolean;
}

// ---- Strike Zone ----
export interface StrikeZoneDimensions {
  level: UmpireLevel;
  topRatio: number;
  bottomRatio: number;
  widthInches: number;
  topDescription: string;
  bottomDescription: string;
  notes: string;
}

// ---- Quiz ----
export type QuestionType = "multiple-choice" | "true-false" | "scenario-visual" | "strike-zone-call";

export interface ScenarioConfig {
  type: "field" | "strike-zone";
  runners?: { base: 1 | 2 | 3; label?: string }[];
  ballPosition?: { x: number; y: number };
  highlightZones?: string[];
  pitchLocation?: { x: number; y: number };
  batterHeight?: "short" | "average" | "tall";
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  level: UmpireLevel | "all";
  category: RuleCategory;
  difficulty: 1 | 2 | 3;
  prompt: string;
  options?: string[];
  correctAnswer: number;
  explanation: string;
  scenarioConfig?: ScenarioConfig;
  relatedRuleId?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  level: UmpireLevel | "all";
  category: RuleCategory;
  questions: QuizQuestion[];
}

// ---- Progress ----
export interface QuizResult {
  quizId: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
}

export interface UserProgress {
  currentLevel: UmpireLevel;
  quizResults: QuizResult[];
  rulesViewed: string[];
  lastActive: string;
}
