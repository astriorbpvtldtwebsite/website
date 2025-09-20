import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, Check, Circle } from 'lucide-react';

const ProjectProgressModal = ({ isOpen, onClose }) => {
  const progressSteps = [
    {
      phase: 'Planning & Research',
      status: 'completed',
      details: 'Market research, user interviews, and concept validation completed.',
      date: 'Aug 2025'
    },
    {
      phase: 'Design & Architecture',
      status: 'completed',
      details: 'UI/UX design, system architecture, and database schema finalized.',
      date: 'Sep 2025'
    },
    {
      phase: 'Core Development',
      status: 'in-progress',
      details: 'Building core features and implementing backend services.',
      date: 'Oct 2025'
    },
    {
      phase: 'Testing & Optimization',
      status: 'upcoming',
      details: 'Quality assurance, performance optimization, and user testing.',
      date: 'Dec 2025'
    },
    {
      phase: 'Launch Preparation',
      status: 'upcoming',
      details: 'Final polishing, documentation, and launch strategy.',
      date: 'Jan 2026'
    }
  ];

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
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <CloseIcon className="w-6 h-6 text-light-text dark:text-white" />
              </button>

              {/* Content */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white mb-2">
                  Project: <span className="bg-gradient-neon bg-clip-text text-transparent">Tastory</span>
                </h3>
                <p className="text-light-subtext dark:text-gray-300">
                  A revolutionary platform connecting food enthusiasts with authentic local cuisines
                </p>
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