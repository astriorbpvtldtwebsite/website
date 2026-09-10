import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, Check, Circle, Sparkles, TrendingUp } from 'lucide-react';

const ProjectProgressModal = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const progressSteps = [
    {
      phase: 'Planning & Architecture',
      details: 'Conceived the Tastory platform scope, culinary taste graph model, and cross-platform Flutter architecture.',
      date: 'Aug 2025',
      status: 'completed',
    },
    {
      phase: 'UI/UX Design Systems',
      details: 'Engineered high-fidelity kitchen user experience, visual dish cards, and community recipe navigation.',
      date: 'Sep 2025',
      status: 'completed',
    },
    {
      phase: 'Core Engine & Database',
      details: 'Built scalable cloud database schemas, dynamic ingredient indexing, and user culinary profiles.',
      date: 'Oct 2025',
      status: 'completed',
    },
    {
      phase: 'MVP Completion',
      details: 'Full Minimum Viable Product successfully engineered and validated in internal testing.',
      date: 'Dec 2025',
      status: 'completed',
    },
    {
      phase: 'Culinary Market & User Research',
      details: 'Direct field testing with home cooks, foodies, and culinary creators in Kerala and across India.',
      date: 'Feb 2026',
      status: 'completed',
    },
    {
      phase: 'Investor Funding & Launch Scaling',
      details: 'Actively in talks with angel investors and venture funds to support production launch and creator onboarding.',
      date: 'Current',
      status: 'in-progress',
    },
    {
      phase: 'Public Launch & Scaling',
      details: 'Rollout on iOS and Android app stores with targeted regional culinary hubs.',
      date: 'Upcoming',
      status: 'upcoming',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-emerald-400';
      case 'in-progress':
        return 'text-citron';
      default:
        return 'text-titanium-500';
    }
  };

  const completedCount = progressSteps.filter((s) => s.status === 'completed').length;
  const totalCount = progressSteps.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar p-6 sm:p-8 rounded-2xl relative pointer-events-auto border border-white/10 shadow-2xl bg-obsidian text-white">
              {/* Close Button */}
              <button
                type="button"
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute right-5 top-5 p-2 rounded-xl bg-titanium-800 border border-white/5 hover:border-citron/40 transition-colors z-10 text-titanium-400 hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-citron/10 text-citron border border-citron/30 text-xs font-mono font-medium mb-3">
                  <Sparkles size={14} />
                  <span>FLAGSHIP CONSUMER PRODUCT</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1 font-mono">
                  Project: <span className="text-citron">Tastory</span>
                </h3>
                <p className="text-xs sm:text-sm text-titanium-300 font-normal">
                  Next-generation culinary exploration platform built with Flutter. MVP completed, currently seeking funding.
                </p>

                {/* Progress Bar */}
                <div className="mt-6 p-4 rounded-xl bg-titanium-900 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-titanium-300">
                      Development & Launch Roadmap
                    </span>
                    <span className="text-xs font-mono font-bold text-citron">
                      {progressPercentage}% Complete
                    </span>
                  </div>
                  <div className="w-full h-2 bg-titanium-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-citron rounded-full shadow-[0_0_8px_#EA9216]"
                    />
                  </div>
                  <p className="text-[11px] font-mono text-titanium-400 mt-2">
                    {completedCount} of {totalCount} phases completed • Active Milestone: Investor Discussions
                  </p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="space-y-6 relative pl-2">
                {progressSteps.map((step) => (
                  <div key={step.phase} className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className={`mt-0.5 shrink-0 ${getStatusColor(step.status)}`}>
                      {step.status === 'completed' ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : step.status === 'in-progress' ? (
                        <div className="w-6 h-6 rounded-full bg-citron/10 border border-citron/40 flex items-center justify-center animate-pulse">
                          <Circle className="w-3.5 h-3.5 fill-citron text-citron" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-titanium-800 border border-white/5 flex items-center justify-center">
                          <Circle className="w-3.5 h-3.5 text-titanium-500" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="text-sm font-semibold text-white font-mono">
                          {step.phase}
                        </h4>
                        <span className="text-[11px] font-mono text-titanium-400">
                          {step.date}
                        </span>
                      </div>
                      <p className="text-xs text-titanium-300 leading-relaxed font-normal">
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Investor Note Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-titanium-300">
                  <TrendingUp className="w-4 h-4 text-citron" />
                  <span>Seed / Angel Equity Round Open</span>
                </div>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-citron text-obsidian hover:bg-citron-light transition-all shadow-md shadow-citron/20 text-center"
                >
                  REQUEST PITCH DECK
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectProgressModal;