import React, { useState } from 'react';
import { Send, ChevronDown, ChevronUp, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onShowToast?: (type: 'info' | 'success' | 'warning', title: string, message?: string) => void;
}

// Crisp official WhatsApp SVG icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.694-1.624-.774-.219-.079-.378-.119-.537.12-.159.239-.616.774-.755.933-.139.16-.279.18-.518.06-.239-.12-1.008-.372-1.92-1.185-.709-.633-1.188-1.415-1.328-1.654-.139-.239-.015-.368.105-.487.108-.107.239-.279.359-.418.12-.14.159-.239.239-.398.08-.16.04-.299-.02-.418-.06-.12-.537-1.294-.736-1.772-.194-.467-.393-.404-.538-.411l-.459-.007c-.159 0-.418.06-.637.299-.219.239-.836.817-.836 1.992 0 1.175.856 2.31 0.976 2.469.12.16 1.684 2.571 4.079 3.605.57.246 1.015.393 1.362.504.572.182 1.093.156 1.504.095.459-.069 1.406-.575 1.605-1.13.199-.555.199-1.03.139-1.13-.059-.1-.219-.16-.458-.28z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.053 21.57a.75.75 0 00.93.929l4.573-1.353A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.47 8.47 0 01-4.48-1.272.75.75 0 00-.518-.098l-3.37.997.973-3.267a.75.75 0 00-.097-.645A8.472 8.472 0 013.5 12z"
    />
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [isSuggestFormOpen, setIsSuggestFormOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Suggest Question Form State
  const [questionText, setQuestionText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [options, setOptions] = useState('');
  const [arabicExplanation, setArabicExplanation] = useState('');
  const [sourceReference, setSourceReference] = useState('');

  const directWhatsAppUrl =
    'https://wa.me/966583388077?text=' +
    encodeURIComponent('السلام عليكم عبدالله، لدي اقتراح أو إضافة لبنك أسئلة AFO');

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+966583388077');
    setCopied(true);
    if (onShowToast) {
      onShowToast('success', 'تم نسخ الرقم', 'تم نسخ رقم الواتساب +966 58 338 8077 إلى الحافظة.');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendSuggestion = (e: React.FormEvent) => {
    e.preventDefault();

    if (!questionText.trim()) {
      if (onShowToast) {
        onShowToast('warning', 'حقل مطلوب', 'يرجى إدخال نص السؤال باللغة الإنجليزية.');
      }
      return;
    }

    if (!correctAnswer.trim()) {
      if (onShowToast) {
        onShowToast('warning', 'حقل مطلوب', 'يرجى إدخال الإجابة الصحيحة للسؤال.');
      }
      return;
    }

    const messageLines = [
      'السلام عليكم أخي عبدالله،',
      'لدي اقتراح سؤال تدريبي جديد لبنك أسئلة AFO:',
      '',
      '📌 *نص السؤال (English):*',
      questionText.trim(),
      '',
      '✅ *الإجابة الصحيحة:*',
      correctAnswer.trim(),
    ];

    if (options.trim()) {
      messageLines.push('', '📋 *الخيارات المقترحة:*', options.trim());
    }

    if (arabicExplanation.trim()) {
      messageLines.push('', '💡 *الشرح بالعربية:*', arabicExplanation.trim());
    }

    if (sourceReference.trim()) {
      messageLines.push('', '📖 *المرجع / رقم الصفحة:*', sourceReference.trim());
    }

    messageLines.push('', '---', 'تم إرسال هذا الاقتراح من محاكي اختبارات AFO للمراجعة والتدقيق.');

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/966583388077?text=${encodeURIComponent(fullMessage)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    if (onShowToast) {
      onShowToast(
        'success',
        'تم تجهيز الاقتراح في واتساب',
        'تم فتح واتساب مع البيانات المدخلة؛ يمكنك مراجعتها وإرسالها مباشرة لأخيكم عبدالله.'
      );
    }
  };

  return (
    <section
      id="contact-section"
      dir="rtl"
      className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-[#0c162b] border border-slate-800 p-5 sm:p-6 shadow-xl space-y-5 font-arabic text-right"
    >
      {/* Title & Introduction */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          <span>تطوير بنك الأسئلة والمساهمات</span>
        </div>

        <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
          عندك سؤال جديد أو ملاحظة على بنك الأسئلة؟
        </h2>
      </div>

      {/* Contact Info Card */}
      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-3">
        <div className="text-xs font-semibold text-teal-400">
          للتواصل والاستفسارات:
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
          <div className="space-y-1">
            <div className="font-bold text-white text-sm sm:text-base">
              أخوكم عبدالله الجعيد
            </div>
            <div className="text-slate-300 flex items-center gap-2">
              <span className="text-slate-400">رقم الجوال والواتساب:</span>
              <a
                href="tel:+966583388077"
                dir="ltr"
                className="font-mono font-bold text-teal-300 hover:text-teal-200 transition-colors"
              >
                +966 58 338 8077
              </a>
            </div>
          </div>

          {/* Quick Copy shortcut */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyPhone}
              className="min-h-[38px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition-colors border border-slate-700/60"
              title="نسخ رقم الجوال"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">تم النسخ</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>نسخ الرقم</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Primary WhatsApp Action Button */}
        <div className="pt-1">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30 transition-all active:scale-[0.99]"
          >
            <WhatsAppIcon className="w-5 h-5 fill-slate-950" />
            <span>تواصل مع عبدالله عبر واتساب</span>
          </a>
        </div>
      </div>

      {/* Suggest a New Question Accordion */}
      <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/40">
        <button
          type="button"
          onClick={() => setIsSuggestFormOpen(!isSuggestFormOpen)}
          className="w-full min-h-[48px] p-4 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-colors text-right"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>اقترح سؤالًا جديدًا</span>
            <span className="text-[11px] font-normal text-slate-400 hidden sm:inline">
              (إرسال سؤال للمراجعة والاعتماد)
            </span>
          </div>
          {isSuggestFormOpen ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </button>

        {isSuggestFormOpen && (
          <form onSubmit={handleSendSuggestion} className="p-4 sm:p-5 pt-0 space-y-3.5 border-t border-slate-800/80">
            {/* Cautionary Review Notice */}
            <div className="p-3 rounded-lg bg-teal-950/30 border border-teal-500/20 text-xs text-teal-200 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                تنويه: لن يتم إضافة السؤال مباشرة إلى بنك الأسئلة؛ ستتم مراجعته والتحقق من صحته واعتماده أولاً لضمان دقة المحتوى ومطابقته للمعايير.
              </p>
            </div>

            {/* English Question Text */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">
                نص السؤال باللغة الإنجليزية <span className="text-rose-400">*</span>
              </label>
              <textarea
                dir="ltr"
                required
                value={questionText}
                onChange={e => setQuestionText(e.target.value)}
                placeholder="e.g. What is the minimum required pressure for...?"
                rows={2}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-sans"
              />
            </div>

            {/* Correct Answer */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">
                الإجابة الصحيحة <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                dir="ltr"
                required
                value={correctAnswer}
                onChange={e => setCorrectAnswer(e.target.value)}
                placeholder="e.g. 15 PSI"
                className="w-full min-h-[40px] px-3 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-sans"
              />
            </div>

            {/* Answer Options */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">
                الخيارات، إن وجدت <span className="text-slate-500 font-normal">(اختياري)</span>
              </label>
              <textarea
                dir="ltr"
                value={options}
                onChange={e => setOptions(e.target.value)}
                placeholder="A) 10 PSI&#10;B) 15 PSI&#10;C) 20 PSI&#10;D) 25 PSI"
                rows={2}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-sans"
              />
            </div>

            {/* Arabic Explanation */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">
                شرح مختصر باللغة العربية، إن توفر <span className="text-slate-500 font-normal">(اختياري)</span>
              </label>
              <textarea
                value={arabicExplanation}
                onChange={e => setArabicExplanation(e.target.value)}
                placeholder="اكتب توضيحًا أو شرحًا مبسطًا للمعايير التشغيلية المتعلقة بالسؤال..."
                rows={2}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-arabic"
              />
            </div>

            {/* Reference */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">
                مرجع السؤال أو رقم الصفحة في الملف الأصلي، إن توفر <span className="text-slate-500 font-normal">(اختياري)</span>
              </label>
              <input
                type="text"
                value={sourceReference}
                onChange={e => setSourceReference(e.target.value)}
                placeholder="مثال: كتيب تشغيل الوقود AFO صفحة 42 أو نموذج AFO 101"
                className="w-full min-h-[40px] px-3 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-arabic"
              />
            </div>

            {/* Submit via WhatsApp Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full min-h-[46px] rounded-xl font-bold text-xs sm:text-sm bg-teal-500 hover:bg-teal-400 active:scale-[0.99] text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>إرسال الاقتراح عبر واتساب</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
