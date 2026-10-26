import React from 'react';
import { X, Smartphone, Share, PlusSquare, Compass, CheckCircle2 } from 'lucide-react';

interface IPhoneGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IPhoneGuideModal: React.FC<IPhoneGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5 text-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">iPhone Safari Experience</h3>
              <p className="text-xs text-slate-400">Mobile-first aviation training</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
              1
            </div>
            <div className="space-y-0.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-teal-400" />
                <span>Open in Safari on iPhone</span>
              </div>
              <p className="text-slate-400 text-xs">
                Navigate to this app URL directly in mobile Safari on your iPhone.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
              2
            </div>
            <div className="space-y-0.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Share className="w-3.5 h-3.5 text-teal-400" />
                <span>Tap the Share Button</span>
              </div>
              <p className="text-slate-400 text-xs">
                Tap the Safari bottom bar Share icon (the square with an arrow pointing up).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
              3
            </div>
            <div className="space-y-0.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <PlusSquare className="w-3.5 h-3.5 text-teal-400" />
                <span>Add to Home Screen</span>
              </div>
              <p className="text-slate-400 text-xs">
                Select &ldquo;Add to Home Screen&rdquo; to launch as a standalone, fullscreen iOS app with bottom notch and Dynamic Island safety.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/30 text-xs text-teal-200 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
          <span>Equipped with 48px+ touch targets and zero double-tap delay.</span>
        </div>

        <button
          onClick={onClose}
          className="w-full min-h-[46px] rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all"
        >
          Got It
        </button>
      </div>
    </div>
  );
};
