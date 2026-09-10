import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Download,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductShowcaseModal = ({ product, isOpen, onClose, onOpenTastoryModal }) => {
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

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-obsidian border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 custom-scrollbar max-h-[90vh] overflow-y-auto text-white"
        >
          {/* Close Button */}
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl text-titanium-400 hover:text-white bg-titanium-800 border border-white/5 hover:border-citron/40 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6 pr-10">
            {product.icon ? (
              <img
                src={product.icon}
                alt={product.name}
                className="w-16 h-16 rounded-2xl shadow-lg shrink-0 border border-white/10"
              />
            ) : (
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-white font-bold text-xl border border-white/10"
                style={{ backgroundColor: product.accentColor || '#141b29' }}
              >
                <Cpu className="w-8 h-8" />
              </div>
            )}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-citron">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-titanium-300 mt-1 font-normal">
                {product.tagline}
              </p>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-titanium-900 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-400 mb-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>THE REAL-WORLD PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-titanium-200 leading-relaxed font-normal">
                {product.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-titanium-900 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-citron mb-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>ASTRIORB ARCHITECTURAL SOLUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-titanium-200 leading-relaxed font-normal">
                {product.solutionOverview}
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-3">
              Core Capabilities & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-titanium-900 border border-white/5 text-xs text-titanium-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-citron shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-2">
              Engineering Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-titanium-850 border border-white/10 text-xs font-mono text-citron"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap / Status Note */}
          <div className="p-3.5 rounded-xl bg-titanium-850 border border-citron/20 text-xs text-titanium-200 mb-6 flex items-start gap-2.5">
            <Layers className="w-4 h-4 text-citron shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-citron font-mono">Current Status:</span>{' '}
              {product.roadmapNote}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              {product.playStoreUrl && (
                <a
                  href={product.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-obsidian shadow-md hover:bg-emerald-400 flex items-center gap-1.5 font-mono"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Play Store</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}

              {product.isFlagship && onOpenTastoryModal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenTastoryModal();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-citron text-obsidian shadow-md hover:bg-citron-light flex items-center gap-1.5 font-mono cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tastory Pitch</span>
                </button>
              )}

              {product.privacyUrl && (
                <Link
                  to={product.privacyUrl}
                  onClick={onClose}
                  className="text-xs text-titanium-300 hover:text-citron transition-colors font-mono"
                >
                  Privacy Policy →
                </Link>
              )}
            </div>

            <Link
              to="/contact"
              onClick={onClose}
              className="text-xs font-mono font-semibold text-citron hover:underline flex items-center gap-1"
            >
              <span>INQUIRE_ABOUT_PRODUCT</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductShowcaseModal;
