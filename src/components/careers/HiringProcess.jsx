import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MessageSquare, Rocket, CheckCircle2, Zap } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const steps = [
  {
    step: '01',
    icon: Code2,
    title: 'Code & Portfolio Review',
    tag: 'PROJECTS > RESUMES',
    color: 'text-citron',
    description:
      'We evaluate personal GitHub repositories, deployed mobile applications, or hardware schematics. We care about authentic technical curiosity and your ability to ship.',
  },
  {
    step: '02',
    icon: MessageSquare,
    title: 'Technical Jam with Founder',
    tag: '1-ON-1 ARCHITECTURE',
    color: 'text-laser-cyan',
    description:
      'A 45-minute direct conversation with founder Mohammed Hashim. No abstract whiteboard puzzles — just real talk about state machines, debugging stories, and first-principles design.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Direct Offer & Squad Onboarding',
    tag: 'FAST DECISIONS',
    color: 'text-emerald-400',
    description:
      'Zero corporate approval bureaucracy. We present clear, transparent terms within 3 to 5 business days. You receive full codebase access and immediately begin shipping.',
  },
];

const HiringProcess = () => {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-3 whitespace-nowrap">
          <Zap size={13} />
          <span className="hidden sm:inline">TRANSPARENT RECRUITMENT</span>
          <span className="sm:hidden">HIRING PIPELINE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          How We Hire
        </h2>
        <p className="text-xs sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          We reject bloated 6-round agency interviews. We respect your time with a streamlined, technical-first evaluation process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-4 sm:p-8 flex flex-col justify-between h-full group hover:border-citron/40 transition-all shadow-sm rounded-xl sm:rounded-2xl"
              withCorners
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b dark:border-white/10 border-sand-border">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border">
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                    </div>
                    <span className="text-lg sm:text-xl font-extrabold font-mono text-citron">
                      STAGE {item.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-mono dark:text-white text-sand-charcoal mb-1.5 sm:mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t dark:border-white/5 border-sand-border flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-emerald-400">
                <CheckCircle2 size={12} />
                <span>Zero Ghosting Guarantee</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(HiringProcess);
