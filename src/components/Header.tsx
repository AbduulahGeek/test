import React from 'react';
import { Plane, AlertCircle, Smartphone, RefreshCw, Share2 } from 'lucide-react';

interface HeaderProps {
  missedCount: number;
  onOpenMissed: () => void;
  onOpenGuide: () => void;
  onRestart: () => void;
  onShare: () => void;
  isInExam: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  missedCount,
  onOpenMissed,
  onOpenGuide,
  onRestart,
  onShare,
  isInExam,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#040711]/95 backdrop-blur-md border-b border-slate-900/90 pt-safe">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Brand Zone: 1-line wordmark with aviation motif */}
        <div 
          onClick={onRestart}
          className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 group-hover:shadow-[0_0_12px_rgba(20,184,166,0.25)] transition-all duration-300">
            <Plane className="w-4 h-4 rotate-[-45deg] transition-all duration-300 ease-out group-hover:rotate-[-32deg] group-hover:scale-110 group-hover:text-teal-300 group-active:scale-95" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              AFO Review Test
            </span>
            <span className="text-[10px] text-slate-400 font-medium font-arabic">
              اختبار تجريبي
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Missed questions shortcut button */}
          <button
            onClick={onOpenMissed}
            className={`min-h-[38px] px-2.5 py-1 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all ${
              missedCount > 0
                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
                : 'bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:text-slate-200'
            }`}
            title="Practice Missed Questions"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mistakes:</span>
            <span className="font-mono font-semibold tabular-nums">{missedCount}</span>
          </button>

          {/* WhatsApp Contact button */}
          <a
            href="https://wa.me/966583388077?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D9%82%D8%AA%D8%B1%D8%A7%D8%AD%20%D8%A3%D9%88%20%D8%A5%D8%B6%D8%A7%D9%81%D8%A9%20%D9%84%D8%A8%D9%86%D9%83%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20AFO"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[38px] min-w-[38px] p-2 text-xs font-medium rounded-lg bg-emerald-950/50 text-[#25D366] border border-emerald-500/30 hover:bg-emerald-900/40 flex items-center justify-center transition-colors"
            title="تواصل مع عبدالله عبر واتساب"
            aria-label="WhatsApp Contact"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.694-1.624-.774-.219-.079-.378-.119-.537.12-.159.239-.616.774-.755.933-.139.16-.279.18-.518.06-.239-.12-1.008-.372-1.92-1.185-.709-.633-1.188-1.415-1.328-1.654-.139-.239-.015-.368.105-.487.108-.107.239-.279.359-.418.12-.14.159-.239.239-.398.08-.16.04-.299-.02-.418-.06-.12-.537-1.294-.736-1.772-.194-.467-.393-.404-.538-.411l-.459-.007c-.159 0-.418.06-.637.299-.219.239-.836.817-.836 1.992 0 1.175.856 2.31 0.976 2.469.12.16 1.684 2.571 4.079 3.605.57.246 1.015.393 1.362.504.572.182 1.093.156 1.504.095.459-.069 1.406-.575 1.605-1.13.199-.555.199-1.03.139-1.13-.059-.1-.219-.16-.458-.28z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.053 21.57a.75.75 0 00.93.929l4.573-1.353A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.47 8.47 0 01-4.48-1.272.75.75 0 00-.518-.098l-3.37.997.973-3.267a.75.75 0 00-.097-.645A8.472 8.472 0 013.5 12z"
              />
            </svg>
          </a>

          {/* iPhone Safari guide */}
          <button
            onClick={onOpenGuide}
            className="min-h-[38px] min-w-[38px] p-2 text-xs font-medium rounded-lg bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:text-teal-300 hover:border-teal-500/30 flex items-center justify-center transition-colors"
            title="iPhone Safari Instructions"
            aria-label="iPhone Preview Instructions"
          >
            <Smartphone className="w-4 h-4" />
          </button>

          {/* Share App Button */}
          <button
            onClick={onShare}
            className="min-h-[38px] min-w-[38px] p-2 text-xs font-medium rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:text-teal-300 hover:border-teal-500/30 flex items-center justify-center transition-colors"
            title="مشاركة الرابط / Share App"
            aria-label="Share App"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Restart / Home button */}
          {isInExam && (
            <button
              onClick={onRestart}
              className="min-h-[38px] px-3 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
              title="Reset / Start New Exam"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Reset</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
