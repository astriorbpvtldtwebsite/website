import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Briefcase, Link as LinkIcon } from 'lucide-react';
import { jobRoles } from '../../data/careersData';
import CustomSelect from '../CustomSelect';

const roleOptions = [
  ...jobRoles.map((r) => ({
    value: r.title,
    title: r.title,
    subtitle: `${r.department} • ${r.type}`,
    badge: r.department,
  })),
  {
    value: 'Spontaneous Engineering Pitch',
    title: 'Spontaneous Engineering Pitch',
    subtitle: 'General R&D • Direct Founder Review',
    badge: 'Founder Pitch',
  },
];

const JobApplicationModal = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: job?.title || 'General Engineering Application',
    portfolioUrl: '',
    pitch: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (job) {
      setFormData((prev) => ({ ...prev, role: job.title }));
    }
  }, [job]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link as fallback/direct send
    const subject = encodeURIComponent(`[AstriOrb Application] ${formData.role} - ${formData.name}`);
    const body = encodeURIComponent(
      `Candidate Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Applied Role: ${formData.role}\n` +
      `Portfolio / GitHub: ${formData.portfolioUrl}\n\n` +
      `Pitch & Background:\n${formData.pitch}`
    );
    window.location.href = `mailto:astriorbofficial@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl dark:bg-obsidian bg-white border dark:border-white/15 border-sand-border rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-8 z-10 custom-scrollbar max-h-[92vh] overflow-y-auto dark:text-white text-sand-charcoal"
        >
          {/* Close button */}
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-xl dark:text-titanium-400 text-sand-charcoal/60 hover:text-white dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/5 border-sand-border transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 pr-8 sm:pr-10">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-citron text-obsidian flex items-center justify-center font-bold shrink-0 shadow-md">
              <Briefcase size={18} />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-mono text-citron uppercase tracking-wider block">
                APPLICATION DOSSIER
              </span>
              <h3 className="text-lg sm:text-2xl font-bold font-mono tracking-tight leading-snug">
                {formData.role}
              </h3>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={30} />
              </div>
              <h4 className="text-lg font-bold font-mono">
                Application Email Prepared
              </h4>
              <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 max-w-sm mx-auto leading-relaxed">
                Your email client was prompted to send your dossier directly to <code className="text-citron">astriorbofficial@gmail.com</code>. We review every portfolio within 3 to 5 business days.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian hover:bg-citron-light transition-all cursor-pointer"
              >
                DONE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/70 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Mohammed Althaf"
                  className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal focus:outline-none focus:border-citron shadow-sm"
                />
              </div>

              <div>
                <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/70 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder="althaf@domain.com"
                  className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal focus:outline-none focus:border-citron shadow-sm"
                />
              </div>

              <CustomSelect
                label="Target Role"
                required
                value={formData.role}
                onChange={(val) => setFormData((p) => ({ ...p, role: val }))}
                options={roleOptions}
                modalTitle="Select Target Role"
                modalIcon={Briefcase}
              />

              <div>
                <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/70 block mb-1">
                  GitHub / Portfolio / Project URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData((p) => ({ ...p, portfolioUrl: e.target.value }))}
                  placeholder="https://github.com/username or live project"
                  className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal focus:outline-none focus:border-citron shadow-sm"
                />
              </div>

              <div>
                <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/70 block mb-1">
                  Brief Pitch / What did you build? *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.pitch}
                  onChange={(e) => setFormData((p) => ({ ...p, pitch: e.target.value }))}
                  placeholder="Tell us about a technical problem you solved, a favorite architecture choice, or why you want to build products at AstriOrb..."
                  className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal focus:outline-none focus:border-citron shadow-sm"
                />
              </div>

              <div className="pt-2.5 sm:pt-3 border-t dark:border-white/10 border-sand-border flex items-center justify-between gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian hover:bg-citron-light transition-all flex items-center gap-1.5 sm:gap-2 shadow-md shadow-citron/25 cursor-pointer"
                >
                  <Send size={13} />
                  <span>TRANSMIT APPLICATION</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default React.memo(JobApplicationModal);
