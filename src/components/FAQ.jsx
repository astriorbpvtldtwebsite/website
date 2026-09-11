import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const faqs = [
  {
    question: 'What is AstriOrb and how does it differ from other tech companies?',
    answer:
      'AstriOrb Pvt. Ltd. is an independent multi-product technology and hardware company founded in 2025 by Mohammed Hashim in Kerala, India. Unlike IT service companies or single-product startups, AstriOrb develops, owns, and scales an interconnected suite of proprietary products solving everyday challenges across finance, culinary social discovery, healthcare, productivity, and IoT navigation — inspired by the multi-product models of Zoho, Google, and Microsoft.',
  },
  {
    question: 'What are the 5 core projects currently in AstriOrb’s ecosystem?',
    answer:
      'Our portfolio includes: (1) FISCLOK — live personal finance manager on Google Play; (2) Project Tastory — our flagship culinary exploration and social recipe platform (MVP completed, funding phase); (3) Project DocCo — a clinical workflow and medical platform (development completed, client/research phase); (4) Project Continuum — an advanced project management suite for freelancers & coordinators (MVP testing); and (5) Project ROW — an intelligent navigation ecosystem combining a smart app and custom hardware gadget.',
  },
  {
    question: 'Does FISCLOK collect my financial data or require cloud accounts?',
    answer:
      'No. FISCLOK has no accounts, no backend, and your data never reaches AstriOrb servers. It stores all transactions and loans directly on your device using encrypted MMKV storage. The only optional cloud capability is Google Drive Backup: if you explicitly connect your Google account, a copy is written directly from your device to your personal Google Drive.',
  },
  {
    question: 'What is the current status of Project Tastory?',
    answer:
      'Tastory is our flagship consumer product built with Flutter. The entire core MVP development is 100% completed. We are currently actively seeking venture and angel funding to fuel its official public launch, creator onboarding, and international scaling.',
  },
  {
    question: 'Can you tell us more about DocCo and Continuum?',
    answer:
      'DocCo is designed to streamline clinical documentation and diagnostic tracking between doctors and clinics; its core development is complete and it is currently undergoing field research and client stakeholder alignment. Continuum is an ultra-fast project orchestration suite tailored for freelancers and multi-project leads, currently undergoing private testing.',
  },
  {
    question: 'What makes Project ROW unique?',
    answer:
      'Project ROW breaks out of screen-only limitations by combining an intelligent routing mobile application with a dedicated smart hardware gadget. It provides ambient, distraction-free navigation cues without requiring drivers or travelers to constantly stare at smartphone screens.',
  },
  {
    question: 'Who leads the architecture and engineering at AstriOrb?',
    answer:
      'Mohammed Hashim — a Computer Science Engineer with extensive leadership across games, AI systems, and mobile applications. All architectures, research datasets, and technical pipelines are conceived, researched, and engineered directly under his hands-on leadership.',
  },
  {
    question: 'How can investors, partners, or healthcare clients get in touch?',
    answer:
      'You can reach founder Mohammed Hashim directly at hashim@astriorb.com, our support desk at support@astriorb.com, connect via LinkedIn at linkedin.com/company/astriorb, or use the categorized inquiry console on the Contact page.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden border border-white/10 bg-titanium-900/80 transition-colors">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full p-5 sm:p-6 flex justify-between items-center text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
      >
        <h3 className="text-base sm:text-lg font-semibold text-white pr-4 font-mono">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-citron shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-titanium-300 leading-relaxed border-t border-white/10 pt-4 font-normal">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-titanium-800/80 border border-citron/30 mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-citron" />
          <span className="text-xs font-mono font-semibold text-citron uppercase tracking-wider">
            KNOWLEDGE BASE & FAQ
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-titanium-300 leading-relaxed font-normal">
          Everything you need to know about AstriOrb, our 5 core products, and our engineering roadmap.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
