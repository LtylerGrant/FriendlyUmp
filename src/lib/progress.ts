import { UserProgress, QuizResult, UmpireLevel } from "@/lib/types";

const STORAGE_KEY = "friendlyump-progress";

const DEFAULT_PROGRESS: UserProgress = {
  currentLevel: "high-school",
  quizResults: [],
  rulesViewed: [],
  lastActive: new Date().toISOString(),
};

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_PROGRESS;
    return JSON.parse(stored) as UserProgress;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    progress.lastActive = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage may be unavailable
  }
}

export function addQuizResult(result: QuizResult): UserProgress {
  const progress = loadProgress();
  progress.quizResults.push(result);
  saveProgress(progress);
  return progress;
}

export function markRuleViewed(ruleId: string): UserProgress {
  const progress = loadProgress();
  if (!progress.rulesViewed.includes(ruleId)) {
    progress.rulesViewed.push(ruleId);
    saveProgress(progress);
  }
  return progress;
}

export function setCurrentLevel(level: UmpireLevel): UserProgress {
  const progress = loadProgress();
  progress.currentLevel = level;
  saveProgress(progress);
  return progress;
}

export function getAverageScore(): number {
  const progress = loadProgress();
  if (progress.quizResults.length === 0) return 0;
  const total = progress.quizResults.reduce((sum, r) => sum + r.score, 0);
  const maxTotal = progress.quizResults.reduce((sum, r) => sum + r.totalQuestions, 0);
  return maxTotal > 0 ? Math.round((total / maxTotal) * 100) : 0;
}
