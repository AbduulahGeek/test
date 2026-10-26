const STORAGE_KEYS = {
  MISSED_IDS: 'afo_missed_question_ids',
  EXAM_STATS: 'afo_exam_statistics',
  SETTINGS: 'afo_user_settings',
} as const;

export interface ExamHistoryItem {
  id: string;
  date: string;
  score: number;
  total: number;
  percentage: number;
  mode: string;
  category: string;
}

export function getMissedQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MISSED_IDS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveMissedQuestionId(id: string): void {
  try {
    const current = getMissedQuestionIds();
    if (!current.includes(id)) {
      current.push(id);
      localStorage.setItem(STORAGE_KEYS.MISSED_IDS, JSON.stringify(current));
    }
  } catch (err) {
    console.warn('Failed to save missed question ID to localStorage', err);
  }
}

export function removeMissedQuestionId(id: string): void {
  try {
    const current = getMissedQuestionIds();
    const updated = current.filter(itemId => itemId !== id);
    localStorage.setItem(STORAGE_KEYS.MISSED_IDS, JSON.stringify(updated));
  } catch (err) {
    console.warn('Failed to remove missed question ID from localStorage', err);
  }
}

export function clearAllMissedQuestions(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.MISSED_IDS);
  } catch (err) {
    console.warn('Failed to clear missed questions', err);
  }
}

export function getExamHistory(): ExamHistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EXAM_STATS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordExamResult(result: Omit<ExamHistoryItem, 'id' | 'date'>): void {
  try {
    const history = getExamHistory();
    const newItem: ExamHistoryItem = {
      ...result,
      id: `exam-${Date.now()}`,
      date: new Date().toISOString(),
    };
    // Keep last 30 exam attempts
    const updated = [newItem, ...history].slice(0, 30);
    localStorage.setItem(STORAGE_KEYS.EXAM_STATS, JSON.stringify(updated));
  } catch (err) {
    console.warn('Failed to record exam result', err);
  }
}
