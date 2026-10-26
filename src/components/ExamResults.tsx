import React, { useState } from 'react';
import { QuestionResult } from '../types/exam';
import { CheckCircle2, XCircle, RotateCcw, AlertTriangle, ShieldCheck, ChevronRight, Award, Share2 } from 'lucide-react';

interface ExamResultsProps {
  results: QuestionResult[];
  onRestartNewExam: () => void;
  onPracticeMistakesNow: () => void;
  onReturnToSetup: () => void;
  totalMissedInBank: number;
  onShare?: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  results,
  onRestartNewExam,
  onPracticeMistakesNow,
  onReturnToSetup,
  totalMissedInBank,
  onShare,
}) => {
  const [filterMode, setFilterMode] = useState<'mistakes' | 'all'>('mistakes');

  const total = results.length;
  const correctCount = results.filter(r => r.isCorrect).length;
  const wrongCount = results.filter(r => !r.isCorrect).length;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const isPassed = percentage >= 80;

  const mistakes = results.filter(r => !r.isCorrect);
  const displayedItems = filterMode === 'mistakes' ? mistakes : results;

  // Category performance breakdown
  const categoryStats = React.useMemo(() => {
    const stats: Record<string, { total: number; correct: number }> = {};
    results.forEach(r => {
      if (!stats[r.category]) {
        stats[r.category] = { total: 0, correct: 0 };
      }
      stats[r.category].total += 1;
      if (r.isCorrect) {
        stats[r.category].correct += 1;
      }
    });
    return Object.entries(stats).sort((a, b) => b[1].total - a[1].total);
  }, [results]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Score Hero Card */}
      <div className={`rounded-2xl border p-6 text-center space-y-4 shadow-xl ${
        isPassed
          ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/20 border-emerald-500/40'
          : 'bg-gradient-to-b from-slate-900 via-slate-900 to-rose-950/20 border-rose-500/40'
      }`}>
        {/* Pass/Fail Status */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
          {isPassed ? (
            <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Passed · Certified Standard
            </span>
          ) : (
            <span className="text-rose-400 bg-rose-950/80 border border-rose-500/40 px-3 py-1 rounded-full flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Review Required (80% Passing Benchmark)
            </span>
          )}
        </div>

        {/* Big Score Numbers */}
        <div className="space-y-1">
          <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white tabular-nums">
            {percentage}%
          </div>
          <div className="text-sm font-medium text-slate-300">
            <span className="font-bold text-white">{correctCount}</span> of{' '}
            <span className="font-bold text-white">{total}</span> correct
          </div>
        </div>

        {/* Arabic Summary Phrase */}
        <div dir="rtl" className="font-arabic text-sm text-slate-300 pt-1">
          {isPassed ? (
            <p className="text-emerald-300">
              أداء متميز! لقد اجتزت الاختبار بنجاح محققاً المعيار التشغيلي المعتمد لعمليات وقود الطائرات (AFO).
            </p>
          ) : (
            <p className="text-rose-300">
              تحتاج إلى مراجعة إضافية لتحقيق معيار النجاح (80%). تم حفظ جميع الأسئلة غير الصحيحة في بنك الأخطاء لتتدرب عليها.
            </p>
          )}
        </div>

        {/* Quick Action Buttons inside Card */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
          {mistakes.length > 0 && (
            <button
              onClick={onPracticeMistakesNow}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <Award className="w-4 h-4" />
              <span>Practice {mistakes.length} Missed Questions</span>
            </button>
          )}

          <button
            onClick={onRestartNewExam}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md shadow-teal-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>New Randomized Exam</span>
          </button>

          {onShare && (
            <button
              onClick={onShare}
              className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <Share2 className="w-4 h-4 text-teal-400" />
              <span>مشاركة النتيجة والرابط</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Category Performance Breakdown
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {categoryStats.map(([cat, stats]) => {
            const catPercent = Math.round((stats.correct / stats.total) * 100);
            const isCatStrong = catPercent >= 80;

            return (
              <div
                key={cat}
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-semibold text-white">{cat}</div>
                  <div className="text-[11px] text-slate-400">
                    {stats.correct} / {stats.total} correct
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-16 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${isCatStrong ? 'bg-teal-400' : 'bg-rose-400'}`}
                      style={{ width: `${catPercent}%` }}
                    />
                  </div>
                  <span className={`font-mono font-bold text-xs ${isCatStrong ? 'text-teal-400' : 'text-rose-400'}`}>
                    {catPercent}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Mistakes Review Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Detailed Question Review
            </h3>
            {mistakes.length > 0 && (
              <span className="text-[11px] font-mono text-rose-400 bg-rose-950/60 px-1.5 py-0.2 rounded border border-rose-800/40">
                {mistakes.length} mistakes
              </span>
            )}
          </div>

          {/* Toggle between mistakes and all */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setFilterMode('mistakes')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterMode === 'mistakes'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Mistakes Only ({mistakes.length})
            </button>
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterMode === 'all'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({results.length})
            </button>
          </div>
        </div>

        {displayedItems.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-white">Flawless Session!</h4>
            <p className="text-xs text-slate-400 font-arabic dir-rtl">
              أحسنت صنعاً! لم ترتكب أي خطأ في هذا الاختبار. جميع إجاباتك كانت صحيحة ومطابقة للمعايير.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {displayedItems.map((item, index) => (
              <div
                key={`${item.questionId}-${index}`}
                className={`rounded-2xl border p-4 sm:p-5 space-y-3 shadow-md ${
                  item.isCorrect
                    ? 'bg-slate-900/60 border-slate-800/80'
                    : 'bg-slate-900 border-rose-500/30'
                }`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-slate-400">#{index + 1}</span>
                    <span className="text-teal-400 font-medium">{item.category}</span>
                  </div>

                  <span className={`flex items-center gap-1 font-semibold text-[11px] ${
                    item.isCorrect ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {item.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Correct</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Incorrect</span>
                      </>
                    )}
                  </span>
                </div>

                {/* English Question */}
                <div className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.questionText}
                </div>

                {/* Answers Comparison */}
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {!item.isCorrect && (
                    <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/30 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-rose-400 uppercase font-semibold">Your Answer:</div>
                        <div className="text-rose-200 line-through font-medium">{item.selectedAnswer}</div>
                      </div>
                    </div>
                  )}

                  <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] text-emerald-400 uppercase font-semibold">Correct Answer:</div>
                      <div className="text-emerald-200 font-bold">{item.correctAnswer}</div>
                    </div>
                  </div>
                </div>

                {/* Concise Arabic Feedback */}
                <div
                  dir="rtl"
                  className="font-arabic p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-1"
                >
                  <div className="font-semibold text-teal-400 text-[11px]">
                    الشرح والتصحيح المعتمد:
                  </div>
                  <p>{item.arabicFeedback}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
        <button
          onClick={onReturnToSetup}
          className="w-full sm:w-auto min-h-[46px] px-5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          Back to Exam Setup
        </button>

        <button
          onClick={onRestartNewExam}
          className="w-full sm:w-auto min-h-[46px] px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-md shadow-teal-500/20"
        >
          <span>Start Another Randomized Test</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
