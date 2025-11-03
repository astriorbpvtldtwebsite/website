import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, Send as SendIcon } from 'lucide-react';

const ComingSoonModal = ({ isOpen, onClose, categoryTitle }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const closeButtonRef = useRef(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (isOpen) {
      // Focus close button when modal opens
      closeButtonRef.current?.focus();

      // Handle escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store email for future notifications
    // In production, you would send this to your backend or email service
    try {
      // Simulate API call - Replace with actual implementation when backend is ready
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show success message
      // TODO: Integrate with backend API or email service when available
      console.warn('Email collection not yet integrated with backend:', email);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit email:', error);
    } finally {
      setIsSubmitting(false);
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
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="glass-effect w-full max-w-lg p-6 md:p-8 rounded-2xl relative overflow-hidden">
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
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white mb-2">
                  {categoryTitle}
                </h3>
                <div className="text-xl bg-gradient-neon bg-clip-text text-transparent font-semibold inline-block leading-tight">
                  Coming Soon
                </div>
                <p className="text-light-subtext dark:text-gray-300 mt-4">
                  Be the first to know when we launch. Sign up for early access and exclusive updates.
                </p>
              </div>

              {/* Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-light-text dark:text-white placeholder-light-subtext dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cosmic-purple dark:focus:ring-cosmic-neon transition-shadow"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-purple text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <span>Notify Me</span>
                        <SendIcon className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-cosmic-purple dark:text-cosmic-neon"
                >
                  Thank you! We'll notify you when we launch.
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;