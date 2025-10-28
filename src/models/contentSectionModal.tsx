interface ContentItem {
  title: string;
  points: string[];
}

export interface ContentSectionProps {
  title: string;
  subtitle?: string;
  items: ContentItem[];
  onNext: () => void;
  sectionNumber: number;
}
