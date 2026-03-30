import { Quiz } from "@/lib/types";
import { STRIKE_ZONE_QUIZ } from "./strike-zone-quiz";
import { BALK_QUIZ } from "./balk-quiz";
import { INTERFERENCE_QUIZ } from "./interference-quiz";

export const ALL_QUIZZES: Quiz[] = [STRIKE_ZONE_QUIZ, BALK_QUIZ, INTERFERENCE_QUIZ];

export function getQuizById(id: string): Quiz | undefined {
  return ALL_QUIZZES.find((q) => q.id === id);
}
