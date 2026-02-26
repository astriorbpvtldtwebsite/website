import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const faqs = [
    {
        question: 'What is AstriOrb?',
        answer: 'AstriOrb Pvt. Ltd. is a product development company founded in 2025 by Mohammed Hashim in Kerala, India. Our mission is to solve real-world problems through software and build a better, simpler society. We develop products across multiple domains including food platforms, finance tools, AI solutions, game development, and gadget innovations.',
    },
    {
        question: 'What is FISCLOK?',
        answer: 'FISCLOK is a completely free finance management side project by AstriOrb, available on Android. It was born from a personal need — our founder needed a better way to track expenses during the startup journey. It helps you track expenses, set monthly budgets, manage loans with repayment tracking, view financial health charts, and supports multiple currencies. It was developed in one month and tested for two months before release.',
    },
    {
        question: 'Is FISCLOK really free? Are there hidden charges?',
        answer: 'Yes, FISCLOK is 100% free — no premium tiers, no in-app purchases, no hidden charges. We built it to solve our own finance tracking problem and released it publicly because friends who tried it loved it.',
    },
    {
        question: 'Does FISCLOK collect my personal or financial data?',
        answer: 'No. FISCLOK stores all your data locally on your device using MMKV storage. The app requires zero permissions and sends no personal or financial data to any external server. Your data stays on your phone.',
    },
    {
        question: 'What technologies does AstriOrb use?',
        answer: 'We build with Flutter, Firebase, React, Node.js, Python, Supabase, React Native, Java, and AI/ML technologies. FISCLOK is built with Flutter and uses MMKV for local data storage.',
    },
    {
        question: 'What is Tastory?',
        answer: 'Tastory is one of AstriOrb\'s major projects — a food-based platform with development already fully completed. We are currently seeking funding for its official launch.',
    },
    {
        question: 'Who is the founder of AstriOrb?',
        answer: 'Mohammed Hashim — a Computer Science Engineering graduate with experience as Studio Head at Custodian Games (1.6 years), developer intern at Annolive (an AI company in Bangalore), and freelance developer (11 months). All AstriOrb products are built entirely by the founder.',
    },
    {
        question: 'How can I contact AstriOrb?',
        answer: 'You can reach us via email at astriorbofficial@gmail.com, through the contact form on this website, or connect with us on LinkedIn at linkedin.com/company/astriorb.',
    },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
    const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
    const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

    return (
        <motion.div
            variants={fadeInUp}
            className="glass-effect rounded-xl overflow-hidden"
        >
            <motion.button
                onClick={onToggle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer"
                whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.03)' }}
            >
                <h3 className="text-base md:text-lg font-medium text-light-text dark:text-white pr-4">
                    {faq.question}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-cosmic-purple dark:text-cosmic-neon" />
                </motion.div>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-black/5 dark:border-white/10 pt-4">
                            <p className="text-sm md:text-base text-light-subtext dark:text-gray-300 leading-relaxed">
                                {faq.answer}
                            </p>
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
        <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            onMouseEnter={() => document.dispatchEvent(new Event('cursor-enter'))}
            onMouseLeave={() => document.dispatchEvent(new Event('cursor-leave'))}
        >
            <motion.div
                variants={fadeInUp}
                className="text-center mb-10 md:mb-14"
            >
                <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                    <HelpCircle className="w-8 h-8 text-cosmic-purple dark:text-cosmic-neon" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white">
                        Frequently <span className="bg-gradient-neon bg-clip-text text-transparent">Asked</span>
                    </h2>
                </div>
                <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Common questions about AstriOrb, our products, and how we work.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-3 md:space-y-4"
            >
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={faq.question}
                        faq={faq}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default FAQ;
