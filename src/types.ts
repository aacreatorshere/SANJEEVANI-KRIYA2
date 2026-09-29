export interface CourseItem {
  id: string;
  number: string;
  displayNumber: string;
  name: string;
  subtitle: string;
  headline: string;
  description: string;
  focusPoints: string[];
  programInfo?: {
    duration: string;
    format: string;
    type: string;
  };
  ctaText: string;
  image: string;
  imageAlt: string;
  accentQuote?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TransformationItem {
  from: string;
  to: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}
