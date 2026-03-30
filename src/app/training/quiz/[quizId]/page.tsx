"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getQuizById } from "@/data/quizzes";
import QuizEngine from "@/components/quiz/QuizEngine";

export default function QuizPage() {
  const params = useParams();
  const quizId = params.quizId as string;
  const quiz = getQuizById(quizId);

  if (!quiz) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz not found</h1>
        <Link href="/training/quiz" className="text-emerald-700 hover:underline">
          Back to Quizzes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/training" className="hover:text-emerald-700">Training</Link>
        <span className="mx-2">/</span>
        <Link href="/training/quiz" className="hover:text-emerald-700">Quizzes</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{quiz.title}</span>
      </nav>

      <QuizEngine quiz={quiz} />
    </div>
  );
}
