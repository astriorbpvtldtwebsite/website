import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, Check, Circle } from 'lucide-react';

const ProjectProgressModal = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();

      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Function to calculate status based on current date
  const calculateStatus = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);

    // Set both dates to the first day of their respective months for comparison
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const targetMonth = new Date(target.getFullYear(), target.getMonth(), 1);

    if (currentMonth > targetMonth) {
      return 'completed';
    } else if (currentMonth.getTime() === targetMonth.getTime()) {
      return 'in-progress';
    } else {
      return 'upcoming';
    }
  };

  const progressSteps = [
    {
      phase: 'Planning & Research',
      details: 'Market research, user interviews, and concept validation completed.',
      date: 'Aug 2025',
      targetDate: '2025-08-01'
    },
    {
      phase: 'Design & Architecture',
      details: 'UI/UX design, system architecture, and database schema finalized.',
      date: 'Sep 2025',
      targetDate: '2025-09-01'
    },
    {
      phase: 'Core Development',
      details: 'Building core features and implementing backend services.',
      date: 'Oct 2025',
      targetDate: '2025-10-01'
    },
    {
      phase: 'Development Completed',
      details: 'All core features implemented and development phase finalized.',
      date: 'Dec 2025',
      targetDate: '2025-12-01'
    },
    {
      phase: 'Fund Raising',
      details: 'Securing investment and resources for launch and scaling.',
      date: 'Feb 2026',
      targetDate: '2026-02-01'
    },
    {
      phase: 'Final Check & Testing',
      details: 'Quality assurance, performance optimization, and user testing.',
      date: 'Mar 2026',
      targetDate: '2026-03-01'
    },
    {
      phase: 'Launch Preparation',
      details: 'Final polishing, documentation, and launch strategy.',
      date: 'May 2026',
      targetDate: '2026-05-01'
    }
  ].map(step => ({
    ...step,
    status: calculateStatus(step.targetDate)
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 dark:text-green-400';
      case 'in-progress':
        return 'text-cosmic-purple dark:text-cosmic-neon';
      default:
        return 'text-gray-400 dark:text-gray-500';
    }
  };

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="glass-effect w-full max-w-2xl p-6 md:p-8 rounded-2xl relative overflow-hidden pointer-events-auto">
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <CloseIcon className="w-6 h-6 text-light-text dark:text-white" />
              </button>

              {/* Content */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white mb-2">
                  Project: <span className="bg-gradient-neon bg-clip-text text-transparent">Tastory</span>
                </h3>
                <p className="text-light-subtext dark:text-gray-300 mb-4">
                  A revolutionary platform connecting food enthusiasts with authentic local cuisines
                </p>

                {/* Progress Bar */}
                {(() => {
                  const completedCount = progressSteps.filter(s => s.status === 'completed').length;
                  const totalCount = progressSteps.length;
                  const progressPercentage = Math.round((completedCount / totalCount) * 100);

                  return (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-light-text dark:text-white">
                          Overall Progress
                        </span>
                        <span className="text-sm font-bold text-cosmic-purple dark:text-cosmic-neon">
                          {progressPercentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-neon rounded-full"
                        />
                      </div>
                      <p className="text-xs text-light-subtext dark:text-gray-400 mt-2">
                        {completedCount} of {totalCount} phases completed
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Progress Timeline */}
              <div className="space-y-6 relative">
                {progressSteps.map((step, index) => (
                  <div key={step.phase} className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className={`mt-1 ${getStatusColor(step.status)}`}>
                      {step.status === 'completed' ? (
                        <Check className="w-6 h-6" />
                      ) : step.status === 'in-progress' ? (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Circle className="w-6 h-6 fill-current" />
                        </motion.div>
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-semibold ${getStatusColor(step.status)}`}>
                          {step.phase}
                        </h4>
                        <span className="text-sm text-light-subtext dark:text-gray-400">
                          {step.date}
                        </span>
                      </div>
                      <p className="text-sm text-light-subtext dark:text-gray-300">
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Timeline line */}
                <div className="absolute left-3 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectProgressModal;