export interface ContentItem {
  title: string;
  points: string[];
}

export interface Section {
  id: number;
  title: string;
  subtitle?: string;
  items: ContentItem[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  };
}
