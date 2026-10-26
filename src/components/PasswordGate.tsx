import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ArrowLeft, ShieldAlert } from 'lucide-react';

interface PasswordGateProps {
  onAuthenticate: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    // Verify password (requirement: aramco)
    if (password.trim().toLowerCase() === 'aramco') {
      try {
        sessionStorage.setItem('afo_auth_session', 'true');
      } catch (err) {
        console.warn('sessionStorage not available', err);
      }
      onAuthenticate();
    } else {
      setIsSubmitting(false);
      setErrorMessage('كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-full flex flex-col items-center justify-center p-4 bg-[#040711] text-slate-100 font-arabic selection:bg-teal-500/25 selection:text-teal-200"
    >
      {/* Decorative ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Card Container */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          {/* Header & Icon */}
          <div className="text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-lg shadow-teal-950/40">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                بنك الأسئلة
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                يرجى إدخال كلمة المرور للمتابعة
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="gate-password"
                className="block text-xs font-semibold text-slate-300 text-right"
              >
                كلمة المرور
              </label>

              <div className="relative">
                <input
                  id="gate-password"
                  type={showPassword ? 'text' : 'password'}
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck="false"
                  autoComplete="current-password"
                  autoFocus
                  required
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="أدخل كلمة المرور..."
                  className="w-full min-h-[50px] pr-4 pl-12 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/40 transition-all text-right"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-200 transition-colors"
                  aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div
                role="alert"
                className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2 animate-in fade-in duration-200"
              >
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !password.trim()}
              className="w-full min-h-[50px] rounded-xl font-bold text-sm bg-teal-500 hover:bg-teal-400 active:scale-[0.99] text-slate-950 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>دخول</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </form>

          {/* Bottom security notice */}
          <div className="pt-2 text-center text-[11px] text-slate-500 border-t border-slate-800/80">
            منظومة مراجعة وتدريب عمليات وقود الطائرات (AFO)
          </div>
        </div>
      </div>
    </div>
  );
};
