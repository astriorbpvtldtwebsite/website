import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, X, Sparkles } from 'lucide-react';

/**
 * CustomSelect provides an AstriOrb-themed select component.
 * On mobile, it opens a sleek, dark-mode glassmorphic bottom sheet.
 * On desktop, it opens a centered popover dialog.
 * Replaces ugly native OS radio dialogs.
 */
const CustomSelect = ({
  options = [],
  value,
  onChange,
  label,
  placeholder = 'Select an option...',
  modalTitle = 'Select Option',
  modalIcon: ModalIcon = Sparkles,
  className = '',
  required = false,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value) || null;

  // Handle Escape key and body scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsOpen(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleSelect = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/70 block mb-1">
          {label} {required && <span className="text-citron">*</span>}
        </label>
      )}

      {/* Hidden input for HTML form compliance */}
      {name && <input type="hidden" name={name} value={value || ''} />}

      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal focus:outline-none focus:border-citron shadow-sm flex items-center justify-between gap-2 cursor-pointer hover:border-citron/40 transition-colors text-left"
      >
        <span className="truncate flex items-center gap-2">
          {selectedOption ? (
            <>
              <span className="font-semibold text-sand-charcoal dark:text-white truncate">
                {selectedOption.title}
              </span>
              {selectedOption.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border text-citron shrink-0 hidden xs:inline">
                  {selectedOption.badge}
                </span>
              )}
            </>
          ) : (
            <span className="dark:text-titanium-500 text-sand-charcoal/40 font-normal">
              {placeholder}
            </span>
          )}
        </span>

        <ChevronDown
          size={16}
          className={`text-citron shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Modal / Bottom Sheet rendered via React Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Dialog / Bottom Sheet Card */}
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '100%', opacity: 0 }}
                  transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                  className="relative z-10 w-full sm:max-w-lg dark:bg-obsidian bg-sand border-t sm:border dark:border-white/15 border-sand-border rounded-t-3xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[85vh] flex flex-col dark:text-white text-sand-charcoal"
                >
                  {/* Mobile Drag Indicator */}
                  <div className="w-10 h-1 rounded-full bg-sand-charcoal/20 dark:bg-white/20 mx-auto mb-3 sm:hidden" />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b dark:border-white/10 border-sand-border">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border text-citron">
                        <ModalIcon size={14} />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider font-bold text-citron">
                        {modalTitle}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close"
                      className="p-1.5 rounded-lg dark:text-titanium-400 text-sand-charcoal/60 hover:text-white dark:bg-titanium-800 bg-sand-border/70 transition-colors cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Options List */}
                  <div
                    role="listbox"
                    className="space-y-2 overflow-y-auto max-h-[55vh] custom-scrollbar pr-1"
                  >
                    {options.map((opt) => {
                      const isSelected = opt.value === value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => handleSelect(opt.value)}
                          className={`w-full text-left p-3 sm:p-3.5 rounded-xl font-mono text-xs transition-all flex items-center justify-between gap-3 cursor-pointer group ${
                            isSelected
                              ? 'dark:bg-citron/10 bg-citron/15 border border-citron shadow-sm'
                              : 'dark:bg-titanium-900/60 bg-white/70 border dark:border-white/5 border-sand-border hover:border-citron/40 hover:dark:bg-titanium-900'
                          }`}
                        >
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className={`font-bold ${
                                  isSelected
                                    ? 'text-citron'
                                    : 'dark:text-white text-sand-charcoal group-hover:text-citron transition-colors'
                                }`}
                              >
                                {opt.title}
                              </span>
                              {opt.badge && (
                                <span
                                  className={`text-[10px] px-2 py-0.5 rounded-full border ${
                                    isSelected
                                      ? 'border-citron/50 text-citron bg-citron/10'
                                      : 'dark:border-white/10 border-sand-border dark:text-titanium-400 text-sand-charcoal/60'
                                  }`}
                                >
                                  {opt.badge}
                                </span>
                              )}
                            </div>

                            {opt.subtitle && (
                              <p className="text-[11px] dark:text-titanium-400 text-sand-charcoal/70 leading-normal font-normal">
                                {opt.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Checkmark Indicator */}
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                              isSelected
                                ? 'bg-citron text-obsidian border-citron shadow-sm shadow-citron/30'
                                : 'border-sand-border dark:border-white/15 dark:bg-titanium-800 bg-sand-border/40 group-hover:border-citron/40'
                            }`}
                          >
                            {isSelected && <Check size={13} className="stroke-[2.5]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Footer note */}
                  <div className="pt-3 mt-3 border-t dark:border-white/10 border-sand-border flex items-center justify-between text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                    <span>Tap any option to select</span>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="text-citron font-semibold hover:underline cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default React.memo(CustomSelect);
