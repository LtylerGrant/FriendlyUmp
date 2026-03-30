import { Quiz, QuizQuestion } from "@/lib/types";

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function calculateScore(quiz: Quiz, answers: Map<string, number>): {
  score: number;
  total: number;
  correct: number;
  percentage: number;
} {
  let correct = 0;
  const total = quiz.questions.length;

  for (const question of quiz.questions) {
    const userAnswer = answers.get(question.id);
    if (userAnswer === question.correctAnswer) {
      correct++;
    }
  }

  return {
    score: correct,
    total,
    correct,
    percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
  };
}

export function isCorrect(question: QuizQuestion, answer: number): boolean {
  return answer === question.correctAnswer;
}
