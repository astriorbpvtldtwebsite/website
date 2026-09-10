import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Layers, Cpu, Sparkles, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import SpotlightCard from './SpotlightCard';

const principles = [
  {
    Icon: Layers,
    title: 'Multi-Product Problem Solving',
    description:
      'We reject the narrow focus of single-product startups and IT outsourcers. Inspired by pioneers like Zoho, Google, and Microsoft, we build an interconnected portfolio of proprietary software and hardware solutions.',
    stat: '5 Verticals',
    statLabel: 'Active Pipeline',
  },
  {
    Icon: ShieldCheck,
    title: 'Architectural Data Sovereignty',
    description:
      'Privacy is never an afterthought. From local-first MMKV encrypted device storage in FISCLOK to strict healthcare consent models in DocCo, user data belongs solely to the user.',
    stat: 'Local-First',
    statLabel: 'Zero Tracking',
  },
  {
    Icon: Cpu,
    title: 'Hardware & Software Synergy',
    description:
      'Our engineering capability reaches beyond touchscreens. With Project ROW, we engineer both custom embedded IoT hardware gadgets and real-time mobile telemetry in unison.',
    stat: 'App + Gadget',
    statLabel: 'Full-Stack IoT',
  },
  {
    Icon: Zap,
    title: 'Founder-Led Deep R&D',
    description:
      'All architectures, research datasets, and technical designs are conducted directly by our founder, Mohammed Hashim. This guarantees laser focus, swift iteration, and zero corporate bureaucracy.',
    stat: '100%',
    statLabel: 'Hands-On R&D',
  },
  {
    Icon: CheckCircle2,
    title: 'Production Rigor Over Hype',
    description:
      'We do not launch unverified mockups. FISCLOK underwent 2 months of rigorous testing prior to Play Store release; Tastory, DocCo, and Continuum follow the same uncompromising standard.',
    stat: '3,000+',
    statLabel: 'Hours Solo R&D',
  },
];

const WhyChooseUs = () => {
  const [selected, setSelected] = useState(0);
  const activePrinciple = principles[selected];
  const ActiveIcon = activePrinciple.Icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-titanium-800/80 border border-citron/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-citron" />
          <span className="text-xs font-mono font-semibold text-citron uppercase tracking-wider">
            FOUNDATIONAL PHILOSOPHY
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Why AstriOrb Operates Differently
        </h2>
        <p className="text-base sm:text-lg text-titanium-300 leading-relaxed font-normal">
          The foundational engineering principles that guide our product development philosophy from Kerala, India.
        </p>
      </motion.div>

      {/* Interactive Desktop / Tablet Principle Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Navigation List */}
        <div className="lg:col-span-5 flex flex-col space-y-2.5 justify-center">
          {principles.map((item, index) => {
            const isSelected = selected === index;
            const ItemIcon = item.Icon;
            return (
              <button
                key={item.title}
                onClick={() => setSelected(index)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-titanium-800 border-citron shadow-lg shadow-citron/10'
                    : 'bg-titanium-900/60 border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-citron text-obsidian font-bold'
                        : 'bg-titanium-800 text-titanium-400'
                    }`}
                  >
                    <ItemIcon size={18} />
                  </div>
                  <span
                    className={`text-sm font-semibold font-mono ${
                      isSelected ? 'text-citron' : 'text-titanium-200'
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-transform ${
                    isSelected ? 'text-citron translate-x-1' : 'text-titanium-500 opacity-50'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Selected Principle Display Card */}
        <div className="lg:col-span-7 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePrinciple.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between" withCorners>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-titanium-800 border border-white/10 p-0.5 mb-6 inline-flex items-center justify-center text-citron">
                    <ActiveIcon size={28} />
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-citron block mb-2">
                    CORE PRINCIPLE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    {activePrinciple.title}
                  </h3>
                  <p className="text-sm sm:text-base text-titanium-200 leading-relaxed mb-8 font-normal">
                    {activePrinciple.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight block font-mono">
                      {activePrinciple.stat}
                    </span>
                    <span className="text-xs font-mono text-titanium-400">
                      {activePrinciple.statLabel}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-citron">
                    AstriOrb Standard
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
