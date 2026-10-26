import React from 'react';
import { AFOCategory, AFO_CATEGORIES, AFO_QUESTIONS } from '../data/afoQuestions';
import { ExamConfig, QuestionCountOption, ExamMode } from '../types/exam';
import { ShieldCheck, Play, Sparkles, AlertCircle, Trash2, Smartphone } from 'lucide-react';
import { ContactSection } from './ContactSection';

interface ExamSetupProps {
  config: ExamConfig;
  onChangeConfig: (newConfig: ExamConfig) => void;
  onStartExam: () => void;
  missedCount: number;
  onClearMissed: () => void;
  onOpenGuide: () => void;
  onShowToast?: (type: 'info' | 'success' | 'warning', title: string, message?: string) => void;
}

export const ExamSetup: React.FC<ExamSetupProps> = ({
  config,
  onChangeConfig,
  onStartExam,
  missedCount,
  onClearMissed,
  onOpenGuide,
  onShowToast,
}) => {
  // Compute available questions count given current category
  const availableQuestionsCount = React.useMemo(() => {
    let pool = AFO_QUESTIONS;
    if (config.mode === 'mistakes') {
      // In mistakes mode, filtered by stored mistakes
      return missedCount;
    }
    if (config.category !== 'All') {
      pool = pool.filter(q => q.category === config.category);
    }
    return pool.length;
  }, [config.category, config.mode, missedCount]);

  const countOptions: { value: QuestionCountOption; label: string; desc: string }[] = [
    { value: 20, label: '20 سؤالاً', desc: 'مراجعة سريعة' },
    { value: 30, label: '30 سؤالاً', desc: 'اختبار قياسي' },
    { value: 50, label: '50 سؤالاً', desc: 'تدريب مكثف' },
    { value: 'all', label: 'جميع الأسئلة', desc: `كامل البنك (${availableQuestionsCount})` },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Hero Card */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0c162b] border border-slate-800 p-5 sm:p-6 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Aviation Fuel Operations Certification</span>
            </div>
            <button
              onClick={onOpenGuide}
              className="text-xs text-slate-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>iPhone Setup</span>
            </button>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white text-balance">
            AFO Review Test
          </h1>
          <p className="text-xs sm:text-sm text-amber-200/90 bg-amber-950/30 border border-amber-500/20 p-3 rounded-xl leading-relaxed font-arabic dir-rtl text-right">
            تنويه مهم: هذه الأسئلة غير رسمية ومخصصة للمراجعة والتدريب فقط، ولا تمثل الاختبار الرسمي، كما أن نتيجتها لا تُعد مؤشرًا أو ضمانًا للنجاح في الاختبار الفعلي. اجتهد في المذاكرة والمراجعة، وتوكّل على الله، فالتوفيق بيد الله وحده. الله يوفق الجميع ويكتب لكم النجاح.
          </p>

          {/* Quick Specifications Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 border-t border-slate-800/80">
            <span>197 Bank Questions</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>English Questions</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-teal-300 font-arabic font-medium">تصحيح فوري بالعربية</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Pass Threshold: 80%</span>
          </div>
        </div>
      </div>

      {/* Mode Switcher */}
      <div dir="rtl" className="space-y-2 font-arabic text-right">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
          نمط الاختبار
        </label>
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => onChangeConfig({ ...config, mode: 'standard' })}
            className={`min-h-[44px] px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
              config.mode === 'standard'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>اختبار قياسي</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeConfig({ ...config, mode: 'mistakes' })}
            className={`min-h-[44px] px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
              config.mode === 'mistakes'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>مراجعة الأخطاء ({missedCount})</span>
          </button>
        </div>
      </div>

      {/* Mistakes Notice if mode is mistakes */}
      {config.mode === 'mistakes' && (
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mistakes Practice Vault</span>
            </div>
            <p className="text-amber-300/80 leading-relaxed font-arabic dir-rtl text-right">
              {missedCount > 0
                ? `لديك ${missedCount} سؤالاً تم تسجيل خطأ فيها سابقاً. يمكنك التدرب عليها الآن وحذفها تلقائياً عند الإجابة بشكل صحيح.`
                : 'بنك الأخطاء فارغ حالياً! خض اختباراً قياسياً أولاً وسيتم حفظ أي سؤال تخطئ فيه تلقائياً.'}
            </p>
          </div>
          {missedCount > 0 && (
            <button
              onClick={onClearMissed}
              className="min-h-[36px] px-2.5 py-1 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg border border-rose-500/20 transition-colors flex items-center gap-1 shrink-0"
              title="Clear all stored mistakes"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
        </div>
      )}

      {/* Question Count Selector */}
      <div dir="rtl" className="space-y-2 font-arabic text-right">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
          تحديد عدد الأسئلة
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {countOptions.map(opt => {
            const isSelected = config.count === opt.value;
            return (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => onChangeConfig({ ...config, count: opt.value })}
                className={`min-h-[56px] p-3 rounded-xl border text-right flex flex-col justify-between transition-all ${
                  isSelected
                    ? 'bg-slate-800 border-teal-500 shadow-sm shadow-teal-500/10'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-teal-400' : 'text-white'}`}>
                  {opt.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-1">
                  {opt.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Filter */}
      {config.mode === 'standard' && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Filter by Category
            </label>
            <span className="text-xs text-slate-500">
              {config.category === 'All' ? '197 questions total' : `${availableQuestionsCount} questions in ${config.category}`}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {AFO_CATEGORIES.map(cat => {
              const count = cat === 'All' 
                ? AFO_QUESTIONS.length 
                : AFO_QUESTIONS.filter(q => q.category === cat).length;
              const isSelected = config.category === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onChangeConfig({ ...config, category: cat })}
                  className={`min-h-[46px] px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-slate-800 border-teal-500/80 text-teal-300 font-semibold'
                      : 'bg-slate-900/70 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span className="truncate">{cat}</span>
                  <span className="font-mono text-[11px] text-slate-500 tabular-nums">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Start Button (Large Touch Hitbox for Mobile Safari) */}
      <div className="pt-2">
        <button
          type="button"
          disabled={config.mode === 'mistakes' && missedCount === 0}
          onClick={onStartExam}
          className={`w-full min-h-[54px] rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all font-arabic ${
            config.mode === 'mistakes' && missedCount === 0
              ? 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed'
              : 'bg-teal-500 hover:bg-teal-400 active:scale-[0.99] text-slate-950 shadow-teal-500/20'
          }`}
        >
          <Play className="w-5 h-5 fill-current" />
          <span>
            {config.mode === 'mistakes'
              ? missedCount === 0
                ? 'لا توجد أخطاء مسجلة حالياً'
                : `بدء تدريب الأخطاء (${Math.min(typeof config.count === 'number' ? config.count : missedCount, missedCount)} سؤال)`
              : `بدء الاختبار (${typeof config.count === 'number' ? Math.min(config.count, availableQuestionsCount) : availableQuestionsCount} سؤالاً)`}
          </span>
        </button>
      </div>

      {/* Contact Section - Abdullah Al-Juaid */}
      <ContactSection onShowToast={onShowToast} />

      {/* Safety & Protocol Footer Note */}
      <div dir="rtl" className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400 space-y-1.5 font-arabic text-right">
        <div className="font-semibold text-slate-300">معايير ومواصفات الاختبار التدريبي:</div>
        <ul className="space-y-1 list-disc list-inside text-slate-400 text-[11px]">
          <li>ترتيب عشوائي للأسئلة والخيارات في كل محاولة لتعزيز الفهم.</li>
          <li>تصحيح فوري وشروحات باللغة العربية مدعومة بالمعيار الفني بعد كل إجابة.</li>
          <li>منع تكرار الأسئلة داخل جلسة الاختبار الواحدة.</li>
          <li>جميع الأسئلة مستخرجة ومطابقة بدقة لبنك أسئلة عمليات وقود الطائرات (AFO).</li>
        </ul>
      </div>
    </div>
  );
};
