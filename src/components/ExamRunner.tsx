import React, { useState, useEffect } from 'react';
import { ActiveExamQuestion, QuestionResult } from '../types/exam';
import { CheckCircle2, XCircle, ArrowRight, Award, BookmarkCheck } from 'lucide-react';
import { saveMissedQuestionId, removeMissedQuestionId } from '../utils/examStorage';

interface ExamRunnerProps {
  questions: ActiveExamQuestion[];
  isMistakesMode: boolean;
  onFinish: (results: QuestionResult[]) => void;
  onExit: () => void;
}

export const ExamRunner: React.FC<ExamRunnerProps> = ({
  questions,
  isMistakesMode,
  onFinish,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionText, setSelectedOptionText] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<QuestionResult[]>([]);

  const currentItem = questions[currentIndex];
  const total = questions.length;

  // Reset local question state when index changes
  useEffect(() => {
    setSelectedOptionText(null);
    setIsAnswered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  if (!currentItem) {
    return (
      <div className="p-8 text-center text-slate-400">
        No questions loaded. <button onClick={onExit} className="text-teal-400 underline">Return</button>
      </div>
    );
  }

  const { question, shuffledOptions } = currentItem;

  // Calculate live scores
  const answeredCount = results.length;
  const correctCount = results.filter(r => r.isCorrect).length;
  const wrongCount = results.filter(r => !r.isCorrect).length;
  const currentAccuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const progressPercent = Math.round(((currentIndex + (isAnswered ? 1 : 0)) / total) * 100);

  const handleSelectOption = (optionText: string) => {
    // Prevent multiple submissions
    if (isAnswered) return;

    const isCorrect = optionText.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();

    setSelectedOptionText(optionText);
    setIsAnswered(true);

    const questionResult: QuestionResult = {
      questionId: question.id,
      selectedAnswer: optionText,
      correctAnswer: question.correctAnswer,
      isCorrect,
      questionText: question.question,
      category: question.category,
      arabicFeedback: question.arabicFeedback,
    };

    setResults(prev => [...prev, questionResult]);

    // Update persistent missed questions bank
    if (!isCorrect) {
      saveMissedQuestionId(question.id);
    } else if (isMistakesMode) {
      // In mistakes mode, answering correctly removes it from the mistake vault!
      removeMissedQuestionId(question.id);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all questions
      onFinish(results);
    }
  };

  const isUserCorrect = isAnswered && selectedOptionText?.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 pb-28 space-y-4">
      {/* Top Header & Live Telemetry Strip */}
      <div className="space-y-2">
        {/* Progress Bar */}
        <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden border border-slate-700/40">
          <div
            className="bg-teal-400 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Live Score & Position Tracker */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">
              Question {currentIndex + 1}
            </span>
            <span className="text-slate-600">/</span>
            <span>{total}</span>
            <span className="text-slate-600">·</span>
            <span className="text-teal-400 font-medium">{question.category}</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] tabular-nums">
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{correctCount}</span>
            </span>
            <span className="text-rose-400 flex items-center gap-1">
              <XCircle className="w-3.5 h-3.5" />
              <span>{wrongCount}</span>
            </span>
            <span className="text-slate-400 font-semibold">
              {answeredCount > 0 ? `${currentAccuracy}%` : '---'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 shadow-xl space-y-4">
        {/* Category Header */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-teal-400/90 font-medium uppercase tracking-wider text-[11px]">
            {question.category} Operations
          </span>
          {isMistakesMode && (
            <span className="text-[11px] text-amber-400 font-medium flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              Practice Mistake
            </span>
          )}
        </div>

        {/* Question Text */}
        <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed select-text">
          {question.question}
        </h2>
      </div>

      {/* Answer Options Grid */}
      <div className="space-y-2.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
          Select Answer Option
        </label>

        {shuffledOptions.map((opt) => {
          const isSelected = selectedOptionText === opt.text;
          const isOptionCorrect = opt.text.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();

          // Compute button styling based on state
          let optionStyles = 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-200';
          let badgeStyles = 'bg-slate-800 text-slate-400 border-slate-700';

          if (isAnswered) {
            if (isOptionCorrect) {
              // Highlight the correct answer in Emerald
              optionStyles = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-sm shadow-emerald-500/20';
              badgeStyles = 'bg-emerald-500 text-slate-950 font-bold border-emerald-400';
            } else if (isSelected && !isOptionCorrect) {
              // Highlight user wrong selection in Rose
              optionStyles = 'bg-rose-950/60 border-rose-500 text-rose-200 shadow-sm shadow-rose-500/20';
              badgeStyles = 'bg-rose-500 text-white font-bold border-rose-400';
            } else {
              // Mute other options
              optionStyles = 'bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-60';
              badgeStyles = 'bg-slate-800/40 text-slate-600 border-slate-800';
            }
          }

          return (
            <button
              key={opt.id}
              type="button"
              disabled={isAnswered}
              onClick={() => handleSelectOption(opt.text)}
              className={`w-full min-h-[52px] p-3.5 rounded-xl border text-left flex items-center justify-between gap-3 transition-all ${optionStyles} ${
                !isAnswered ? 'active:scale-[0.99] cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                {/* Option Letter Tag */}
                <span className={`w-7 h-7 rounded-lg border text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${badgeStyles}`}>
                  {opt.id}
                </span>
                {/* Option Text */}
                <span className="text-xs sm:text-sm font-medium leading-snug">
                  {opt.text}
                </span>
              </div>

              {/* Status Icons */}
              {isAnswered && (
                <div className="shrink-0">
                  {isOptionCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                  )}
                  {isSelected && !isOptionCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 fill-rose-950" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Instant Arabic Feedback Banner */}
      {isAnswered && (
        <div
          dir="rtl"
          className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 font-arabic space-y-2 ${
            isUserCorrect
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
              : 'bg-rose-950/30 border-rose-500/40 text-rose-100'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
              {isUserCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300">إجابة صحيحة ومطابقة للمعايير!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-rose-300">إجابة غير صحيحة</span>
                </>
              )}
            </div>

            {/* Mistake bank indicator */}
            {!isUserCorrect && (
              <span className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">
                <BookmarkCheck className="w-3 h-3 text-amber-400" />
                حُفظ في بنك الأخطاء
              </span>
            )}
            {isUserCorrect && isMistakesMode && (
              <span className="text-[11px] text-emerald-300/90 font-medium flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-600/30">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                أُزيل من بنك الأخطاء
              </span>
            )}
          </div>

          {/* Show correct answer explicitly in English if wrong */}
          {!isUserCorrect && (
            <div className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-left dir-ltr">
              <span className="text-xs text-rose-400 font-semibold mr-1">Correct Answer:</span>
              <span className="font-bold text-emerald-300">{question.correctAnswer}</span>
            </div>
          )}

          {/* Concise Technical Arabic Explanation */}
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
            {question.arabicFeedback}
          </p>
        </div>
      )}

      {/* Sticky Bottom Action Bar for Mobile Touch Zone */}
      <div className="fixed bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-[#040711] via-[#040711]/95 to-transparent pb-safe">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            type="button"
            onClick={onExit}
            className="min-h-[48px] px-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            End
          </button>

          <button
            type="button"
            disabled={!isAnswered}
            onClick={handleNext}
            className={`flex-1 min-h-[50px] rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
              isAnswered
                ? 'bg-teal-500 hover:bg-teal-400 active:scale-[0.99] text-slate-950 shadow-teal-500/20'
                : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed'
            }`}
          >
            <span>
              {currentIndex < total - 1 ? 'Next Question' : 'View Exam Results'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
