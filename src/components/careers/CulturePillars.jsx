import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Clock, Users, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const pillars = [
  {
    icon: Layers,
    title: 'Multi-Product Breadth',
    tag: 'POLYGLOT EXPOSURE',
    color: 'text-citron',
    description:
      'Gain real hands-on experience across Flutter, React Native, TypeScript, Node.js, and embedded ESP32 C++ firmware. You will never be pigeonholed into a single boring micro-task.',
  },
  {
    icon: Clock,
    title: 'Asynchronous Autonomy',
    tag: 'HIGH TRUST CULTURE',
    color: 'text-emerald-400',
    description:
      'We value deep work over endless meetings. Results, architectural clarity, and clean code matter far more than punch-in hours or performative status check-ins.',
  },
  {
    icon: Users,
    title: 'Direct Founder Mentorship',
    tag: 'ZERO BUREAUCRACY',
    color: 'text-laser-cyan',
    description:
      'Work side-by-side with founder Mohammed Hashim. Learn how to architect systems from scratch, evaluate trade-offs, and ship products without corporate red tape.',
  },
  {
    icon: ShieldCheck,
    title: '100% Owned Products',
    tag: 'REAL IMPACT',
    color: 'text-purple-400',
    description:
      'We do not rent your brain to third-party clients. Every feature and hardware PCB you engineer contributes to AstriOrb’s compounding intellectual property.',
  },
];

const CulturePillars = () => {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-3 whitespace-nowrap">
          <Sparkles size={13} />
          <span>ENGINEERING CULTURE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          How We Work At AstriOrb
        </h2>
        <p className="text-xs sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          We built the company we always wanted to work at — high autonomy, zero politics, and direct access to real engineering challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between h-full group hover:border-citron/40 transition-all shadow-sm"
              withCorners
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border">
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${pillar.color}`} />
                  </div>
                  <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold font-mono dark:text-white text-sand-charcoal mb-1.5 sm:mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t dark:border-white/5 border-sand-border flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-citron">
                <CheckCircle2 size={12} />
                <span>Non-Negotiable Value</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(CulturePillars);
