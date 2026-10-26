import { AFOCategory, AFOQuestion } from '../data/afoQuestions';

export interface ExamOption {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
}

export interface ActiveExamQuestion {
  question: AFOQuestion;
  shuffledOptions: ExamOption[];
}

export type QuestionCountOption = 20 | 30 | 50 | 'all';

export type ExamMode = 'standard' | 'mistakes';

export interface ExamConfig {
  count: QuestionCountOption;
  category: AFOCategory;
  mode: ExamMode;
  autoAdvance: boolean;
}

export interface QuestionResult {
  questionId: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  questionText: string;
  category: string;
  arabicFeedback: string;
}

export interface ExamSummary {
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  percentage: number;
  isPassed: boolean;
  timeSpentSeconds: number;
  results: QuestionResult[];
  categoryBreakdown: Record<string, { total: number; correct: number }>;
}
