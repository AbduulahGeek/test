import { AFOQuestion, AFO_QUESTIONS, AFOCategory } from '../data/afoQuestions';
import { ActiveExamQuestion, ExamConfig, ExamOption } from '../types/exam';
import { getMissedQuestionIds } from './examStorage';

/**
 * Fisher-Yates shuffle algorithm for unbiased randomization
 */
export function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Builds an active exam session according to configuration:
 * - Filters by category (or all)
 * - If 'mistakes' mode, filters strictly by saved missed question IDs
 * - Prevents duplicates within the session
 * - Randomizes question order
 * - Randomizes the order of the 4 answer options (1 correct + 3 bank distractors)
 */
export function createExamSession(config: ExamConfig): ActiveExamQuestion[] {
  let pool: AFOQuestion[] = [];

  if (config.mode === 'mistakes') {
    const missedIds = new Set(getMissedQuestionIds());
    pool = AFO_QUESTIONS.filter(q => missedIds.has(q.id));
    if (config.category !== 'All') {
      pool = pool.filter(q => q.category === config.category);
    }
  } else {
    if (config.category === 'All') {
      pool = [...AFO_QUESTIONS];
    } else {
      pool = AFO_QUESTIONS.filter(q => q.category === config.category);
    }
  }

  // Shuffle question pool to guarantee randomized question order
  const shuffledQuestions = shuffleArray(pool);

  // Determine count limit
  let limit = shuffledQuestions.length;
  if (config.count !== 'all') {
    limit = Math.min(config.count, shuffledQuestions.length);
  }

  const selectedQuestions = shuffledQuestions.slice(0, limit);

  // For each question, randomize the 4 options and assign clean labels A, B, C, D
  const activeQuestions: ActiveExamQuestion[] = selectedQuestions.map(q => {
    // 1 correct answer + 3 authentic distractors strictly from the question bank
    const rawOptions = [q.correctAnswer, ...q.distractors];
    const shuffledRaw = shuffleArray(rawOptions);
    const labels = ['A', 'B', 'C', 'D'];

    const options: ExamOption[] = shuffledRaw.map((optText, idx) => ({
      id: labels[idx] || `${idx + 1}`,
      text: optText,
    }));

    return {
      question: q,
      shuffledOptions: options,
    };
  });

  return activeQuestions;
}
