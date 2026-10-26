import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { ExamSetup } from './components/ExamSetup';
import { ExamRunner } from './components/ExamRunner';
import { ExamResults } from './components/ExamResults';
import { PasswordGate } from './components/PasswordGate';
import { IPhoneGuideModal } from './components/IPhoneGuideModal';
import { NotificationToast, ToastMessage } from './components/NotificationToast';
import { ConfirmModal } from './components/ConfirmModal';
import { ActiveExamQuestion, ExamConfig, QuestionResult } from './types/exam';
import { createExamSession } from './utils/examEngine';
import {
  getMissedQuestionIds,
  clearAllMissedQuestions,
  recordExamResult,
} from './utils/examStorage';

type AppView = 'setup' | 'exam' | 'results';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('afo_auth_session') === 'true';
    } catch {
      return false;
    }
  });

  const [view, setView] = useState<AppView>('setup');
  const [config, setConfig] = useState<ExamConfig>({
    count: 30,
    category: 'All',
    mode: 'standard',
    autoAdvance: false,
  });

  const [activeQuestions, setActiveQuestions] = useState<ActiveExamQuestion[]>([]);
  const [lastResults, setLastResults] = useState<QuestionResult[]>([]);
  const [missedIds, setMissedIds] = useState<string[]>([]);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Confirmation modal state
  const [confirmState, setConfirmState] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    isDestructive?: boolean;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  const showToast = useCallback((type: 'info' | 'success' | 'warning', title: string, message?: string) => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random()}`,
      type,
      title,
      message,
    };
    setToasts(prev => [...prev.slice(-2), newToast]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  // Sync missed questions on mount and state changes
  const refreshMissed = useCallback(() => {
    setMissedIds(getMissedQuestionIds());
  }, []);

  useEffect(() => {
    refreshMissed();
  }, [refreshMissed]);

  const handleStartExam = () => {
    const session = createExamSession(config);
    if (session.length === 0) {
      if (config.mode === 'mistakes') {
        showToast(
          'warning',
          'No Missed Questions Available',
          'Complete a standard exam first to populate your mistake vault.'
        );
      } else {
        showToast(
          'warning',
          'No Questions Found',
          'No questions matched the selected category.'
        );
      }
      return;
    }
    setActiveQuestions(session);
    setView('exam');
  };

  const handleFinishExam = (results: QuestionResult[]) => {
    setLastResults(results);
    const correctCount = results.filter(r => r.isCorrect).length;
    const total = results.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    recordExamResult({
      score: correctCount,
      total,
      percentage,
      mode: config.mode,
      category: config.category,
    });

    refreshMissed();
    setView('results');
  };

  const handleRestartNewExam = () => {
    // Generate a fresh randomized session with current config
    const session = createExamSession(config);
    if (session.length === 0) {
      setView('setup');
      return;
    }
    setActiveQuestions(session);
    setView('exam');
  };

  const handlePracticeMistakesNow = () => {
    refreshMissed();
    const mistakesConfig: ExamConfig = {
      ...config,
      mode: 'mistakes',
      count: 'all',
      category: 'All',
    };
    setConfig(mistakesConfig);
    const session = createExamSession(mistakesConfig);
    if (session.length === 0) {
      showToast('success', 'Mistakes Mastered!', 'You have zero pending mistakes in your vault.');
      setView('setup');
      return;
    }
    setActiveQuestions(session);
    setView('exam');
  };

  const handleClearMissed = () => {
    setConfirmState({
      isOpen: true,
      title: 'Clear Mistake Vault?',
      message: 'This will reset all recorded missed questions from your local browser storage.',
      isDestructive: true,
      confirmLabel: 'Clear Vault',
      onConfirm: () => {
        clearAllMissedQuestions();
        refreshMissed();
        if (config.mode === 'mistakes') {
          setConfig(prev => ({ ...prev, mode: 'standard' }));
        }
        setConfirmState(prev => ({ ...prev, isOpen: false }));
        showToast('info', 'Mistake Vault Cleared', 'All saved mistakes have been reset.');
      },
    });
  };

  const handleOpenMissedMode = () => {
    refreshMissed();
    const currentMissed = getMissedQuestionIds();
    if (currentMissed.length === 0) {
      showToast(
        'info',
        'Mistake Vault Empty',
        'You have no saved mistakes. Any questions answered incorrectly during exams will appear here.'
      );
      return;
    }
    setConfig(prev => ({ ...prev, mode: 'mistakes' }));
    setView('setup');
  };

  const handleResetExam = () => {
    if (view === 'exam') {
      setConfirmState({
        isOpen: true,
        title: 'Exit Current Exam?',
        message: 'Your current in-progress answers for this test run will not be saved.',
        isDestructive: false,
        confirmLabel: 'Exit Exam',
        onConfirm: () => {
          setConfirmState(prev => ({ ...prev, isOpen: false }));
          refreshMissed();
          setView('setup');
        },
      });
    } else {
      refreshMissed();
      setView('setup');
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: 'AFO Review Test',
      text: 'محاكي ومراجعة اختبارات عمليات وقود الطائرات (AFO) مع تصحيح فوري وشروحات بالعربية',
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User dismissed native share sheet
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      showToast('success', 'تم نسخ الرابط بنجاح', 'يمكنك الآن إرساله ومشاركته عبر واتساب أو أي تطبيق.');
    } catch {
      showToast('info', 'رابط المشاركة', shareUrl);
    }
  };

  const handleLogout = () => {
    setConfirmState({
      isOpen: true,
      title: 'تسجيل الخروج',
      message: 'هل أنت متأكد من رغبتك في تسجيل الخروج والعودة إلى شاشة كلمة المرور؟',
      confirmLabel: 'تسجيل الخروج',
      cancelLabel: 'إلغاء',
      isDestructive: true,
      onConfirm: () => {
        try {
          sessionStorage.removeItem('afo_auth_session');
        } catch (err) {
          console.warn('Failed to clear session', err);
        }
        setIsAuthenticated(false);
        setView('setup');
        setConfirmState(prev => ({ ...prev, isOpen: false }));
        showToast('info', 'تم تسجيل الخروج بنجاح', 'يرجى إدخال كلمة المرور للمتابعة.');
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-full flex flex-col bg-[#040711] text-slate-100 antialiased font-sans">
        <PasswordGate
          onAuthenticate={() => {
            setIsAuthenticated(true);
            showToast('success', 'تم الدخول بنجاح', 'مرحباً بك في بنك الأسئلة.');
          }}
        />
        <NotificationToast toasts={toasts} onDismiss={dismissToast} />
      </div>
    );
  }

  return (
    <div className="min-h-full flex flex-col bg-[#040711] text-slate-100 antialiased font-sans selection:bg-teal-500/25 selection:text-teal-200">
      {/* Top Bar Header */}
      <Header
        missedCount={missedIds.length}
        onOpenMissed={handleOpenMissedMode}
        onOpenGuide={() => setIsGuideOpen(true)}
        onRestart={handleResetExam}
        onShare={handleShare}
        onLogout={handleLogout}
        isInExam={view !== 'setup'}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {view === 'setup' && (
          <ExamSetup
            config={config}
            onChangeConfig={setConfig}
            onStartExam={handleStartExam}
            missedCount={missedIds.length}
            onClearMissed={handleClearMissed}
            onOpenGuide={() => setIsGuideOpen(true)}
            onShowToast={showToast}
          />
        )}

        {view === 'exam' && (
          <ExamRunner
            questions={activeQuestions}
            isMistakesMode={config.mode === 'mistakes'}
            onFinish={handleFinishExam}
            onExit={handleResetExam}
          />
        )}

        {view === 'results' && (
          <ExamResults
            results={lastResults}
            onRestartNewExam={handleRestartNewExam}
            onPracticeMistakesNow={handlePracticeMistakesNow}
            onReturnToSetup={handleResetExam}
            totalMissedInBank={missedIds.length}
            onShare={handleShare}
          />
        )}
      </main>

      {/* Footer */}
      {view !== 'exam' && (
        <footer className="w-full py-6 mt-auto text-center border-t border-slate-900/80 text-xs text-slate-500 pb-safe">
          <p className="flex items-center justify-center gap-1.5 font-medium tracking-wide">
            <span>Crafted with passion by</span>
            <span className="text-slate-300 font-semibold hover:text-teal-400 transition-colors">
              Abdullah Al-Juaid
            </span>
          </p>
        </footer>
      )}

      {/* iPhone Safari Preview & Installation Modal */}
      <IPhoneGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* In-app Toast Notifications */}
      <NotificationToast
        toasts={toasts}
        onDismiss={dismissToast}
      />

      {/* In-app Confirm Modal */}
      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        isDestructive={confirmState.isDestructive}
        confirmLabel={confirmState.confirmLabel}
        cancelLabel={confirmState.cancelLabel}
        onConfirm={confirmState.onConfirm}
        onCancel={() => setConfirmState(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
