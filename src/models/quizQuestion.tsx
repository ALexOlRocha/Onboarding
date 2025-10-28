export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizSectionProps {
  quiz: QuizQuestion;
  onComplete: () => void;
  sectionNumber: number;
}
