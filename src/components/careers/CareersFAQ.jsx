import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const faqs = [
  {
    q: 'Do you hire freshers and self-taught developers?',
    a: 'Yes, absolutely. We evaluate working GitHub repositories, deployed mobile applications, and embedded hardware projects rather than formal university degrees or arbitrary years of corporate experience. If you can build, you belong here.',
  },
  {
    q: 'Is the work completely remote?',
    a: 'Yes. AstriOrb operates remote-first across Kerala and India. For embedded hardware engineers working on Project ROW, we conduct periodic in-person lab sessions in Kerala to calibrate physical PCBs and sensor nodes.',
  },
  {
    q: 'What technologies will I work with?',
    a: 'You will work across Flutter, React Native, TypeScript, Node.js, Supabase, PostgreSQL, Embedded C/C++ on ESP32-S3 microcontrollers, and Bluetooth LE 5.0 telemetry. We encourage polyglot problem solving.',
  },
  {
    q: 'How fast do you make hiring decisions?',
    a: 'Typically within 3 to 5 business days after portfolio submission. We review every application personally and never subject candidates to silent ghosting or prolonged corporate panel rounds.',
  },
];

const CareersFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-3 whitespace-nowrap">
          <HelpCircle size={13} />
          <span className="hidden sm:inline">PROSPECTIVE CANDIDATE QUESTIONS</span>
          <span className="sm:hidden">CANDIDATE FAQ</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          Clear answers about working at AstriOrb, our tech stack, and evaluation standards.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <SpotlightCard key={idx} className="p-4 sm:p-6 transition-all rounded-xl sm:rounded-2xl" withCorners>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer"
              >
                <h4 className="text-xs sm:text-base font-bold font-mono dark:text-white text-sand-charcoal">
                  {faq.q}
                </h4>
                <ChevronDown
                  size={16}
                  className={`text-citron shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed pt-2.5 sm:pt-3 border-t dark:border-white/5 border-sand-border mt-2.5 sm:mt-3 font-normal">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(CareersFAQ);
