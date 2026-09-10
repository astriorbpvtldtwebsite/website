import React from 'react';
import { motion } from 'framer-motion';
import {
  Milestone,
  CheckCircle2,
  Clock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Cpu,
  Globe,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const milestones = [
  {
    year: '2024',
    tag: 'GENESIS & PROTOTYPES',
    title: 'First-Principles R&D & Core Blueprints',
    desc: 'Conceived FISCLOK’s local-first MMKV storage architecture in response to aggressive fintech tracking. Mapped out Tastory’s dynamic taste-vector graph algorithms.',
    badge: 'Completed',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    icon: ShieldCheck,
  },
  {
    year: '2025',
    tag: 'COMPANY INCORPORATION & FIRST LAUNCH',
    title: 'AstriOrb Pvt. Ltd. Founded & Commercial Release',
    desc: 'Official incorporation in Kerala, India by Mohammed Hashim. Successfully launched FISCLOK v1.0.2 on Google Play Store. Completed Tastory Flutter MVP development.',
    badge: 'Completed & Live',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    icon: Rocket,
  },
  {
    year: '2026',
    tag: 'HARDWARE EXPANSION & CLINICAL LABS',
    title: 'IoT Prototyping & Flagship Seed Round',
    desc: 'Broadened into physical-digital systems with Project ROW (ESP32 hardware gadget + mobile app). Clinical trials for DocCo. Actively presenting Tastory to venture funds.',
    badge: 'Active Phase',
    badgeColor: 'text-citron border-citron/30 bg-citron/10',
    icon: Cpu,
  },
  {
    year: 'BEYOND',
    tag: 'GLOBAL HORIZON',
    title: 'Scaling Kerala’s Premier Venture Studio',
    desc: 'Global consumer rollout for Tastory, commercial production of Project ROW hardware gadgets, and expanding our multi-product software ecosystem worldwide.',
    badge: 'Roadmap Target',
    badgeColor: 'text-laser-cyan border-laser-cyan/30 bg-laser-cyan/10',
    icon: Globe,
  },
];

const CompanyMilestones = () => {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-3 whitespace-nowrap">
          <Clock size={13} />
          <span>CHRONOLOGY & TRAJECTORY</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          The AstriOrb Evolution
        </h2>
        <p className="text-sm sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          From late-night architectural whiteboarding in Kerala to live Google Play releases and physical IoT hardware prototyping.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <SpotlightCard className="p-4 sm:p-10 lg:p-12" withCorners>
          <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-7 before:w-0.5 before:dark:bg-white/10 before:bg-sand-border">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative flex items-start gap-3 sm:gap-6 group">
                  {/* Timeline Dot Icon */}
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl dark:bg-titanium-900 bg-white border sm:border-2 border-citron flex items-center justify-center shrink-0 z-10 shadow-lg group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-citron" />
                  </div>

                  {/* Content Box */}
                  <div className="flex-grow p-3.5 sm:p-6 rounded-xl sm:rounded-2xl dark:bg-titanium-900/70 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-1.5 sm:space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-base sm:text-xl font-extrabold font-mono text-citron">
                          {item.year}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase">
                          // {item.tag}
                        </span>
                      </div>

                      <span
                        className={`text-[9px] sm:text-[10px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full border font-bold ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-lg font-bold font-mono dark:text-white text-sand-charcoal">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default React.memo(CompanyMilestones);
