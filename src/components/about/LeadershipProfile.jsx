import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Code2,
  Gamepad2,
  Smartphone,
  Video,
  Briefcase,
  CheckCircle2,
  MapPin,
  Quote,
  Zap,
  Award,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const careerMilestones = [
  {
    role: 'Founder & Lead Architect',
    company: 'AstriOrb Pvt. Ltd.',
    location: 'Kerala, India',
    period: '2025 - Present',
    desc: 'Conceives, architects, and directly leads engineering for all 5 proprietary software products and custom IoT hardware devices.',
    icon: Code2,
    color: 'text-citron',
  },
  {
    role: 'Chief Technology Officer',
    company: 'Cueroll',
    location: 'Pattambi, Kerala',
    period: 'Present',
    desc: 'CTO of Cueroll — a premium video & content production platform ("Frame Your Story"). Leads the entire technology stack for cinematic highlight production, event coverage, and commercial shoot booking systems.',
    icon: Video,
    color: 'text-red-400',
  },
  {
    role: 'Former Studio Head',
    company: 'Custodian Games Pvt. Ltd.',
    location: 'Kerala, India',
    period: 'Prior',
    desc: 'Directed game studio operations, real-time graphics rendering pipelines, and technical design squads.',
    icon: Gamepad2,
    color: 'text-purple-400',
  },
  {
    role: 'Flutter Developer',
    company: 'Annolive',
    location: 'Bangalore, India',
    period: 'Prior',
    desc: "Built cross-platform mobile applications using Flutter at an AI company in Bangalore. Gained deep exposure to applied AI tooling and automated data workflows that now inform AstriOrb's local-first architecture.",
    icon: Smartphone,
    color: 'text-laser-cyan',
  },
  {
    role: 'Creative & Technical Consultant',
    company: 'Hopz Corp Pvt. Ltd.',
    location: 'Kerala, India',
    period: 'Prior',
    desc: 'Advised leadership on high-impact product architecture, user experience systems, and rapid prototype execution.',
    icon: Briefcase,
    color: 'text-emerald-400',
  },
];

const skills = ['Flutter', 'React Native', 'Embedded C++', 'IoT & BLE', 'Node.js', 'Applied AI'];

const LeadershipProfile = () => {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-3 whitespace-nowrap">
          <UserCheck size={13} />
          <span className="hidden sm:inline">LEADERSHIP &amp; ENGINEERING PEDIGREE</span>
          <span className="sm:hidden">LEADERSHIP PEDIGREE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          Architected from First Principles
        </h2>
        <p className="text-sm sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          Software quality decays when leadership disconnects from engineering. At AstriOrb, every product is personally guided by technical founders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">

        {/* LEFT: Premium Founder Photo Card */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-full"
          >
            {/* Card shell */}
            <div
              className="relative rounded-3xl overflow-hidden dark:bg-[#0d0f12] bg-[#f5f2e9] h-full flex flex-col"
              style={{
                border: '1.5px solid transparent',
                backgroundClip: 'padding-box',
                boxShadow:
                  '0 0 0 1.5px rgba(212,230,0,0.35), 0 0 24px 4px rgba(212,230,0,0.12), 0 0 48px 8px rgba(168,85,247,0.08)',
              }}
            >

              {/* Photo zone */}
              <div className="relative overflow-hidden flex-shrink-0 h-[280px] sm:h-[320px]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse 90% 70% at 50% 110%, rgba(212,230,0,0.15) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 15% 10%, rgba(168,85,247,0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 70% at 85% 5%, rgba(6,182,212,0.10) 0%, transparent 65%)',
                  }}
                />

                <div
                  className="absolute inset-0 opacity-[0.025] pointer-events-none"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
                  }}
                />

                <img
                  src="/founder.png"
                  alt="Mohammed Hashim - Founder & Lead Architect, AstriOrb"
                  className="relative z-10 w-full h-full object-cover object-top select-none"
                  draggable={false}
                />

                {/* Bottom fade dark */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 z-20 pointer-events-none dark:block hidden"
                  style={{ background: 'linear-gradient(to bottom, transparent 0%, #0d0f12 100%)' }}
                />
                {/* Bottom fade light */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 z-20 pointer-events-none dark:hidden block"
                  style={{ background: 'linear-gradient(to bottom, transparent 0%, #f5f2e9 100%)' }}
                />

                {/* Live badge */}
                <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full dark:bg-black/75 bg-white/85 backdrop-blur-md border dark:border-white/10 border-sand-border text-[9px] sm:text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400">ACTIVE BUILDER</span>
                </div>

                {/* Location badge */}
                <div className="absolute top-3 left-3 z-30 flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full dark:bg-black/75 bg-white/85 backdrop-blur-md border dark:border-white/10 border-sand-border text-[9px] sm:text-[10px] font-mono dark:text-titanium-300 text-sand-charcoal/70">
                  <MapPin size={9} />
                  <span>Kerala, India</span>
                </div>
              </div>

              {/* Info body */}
              <div className="relative z-30 flex flex-col flex-grow px-4 sm:px-6 pt-2 pb-5 sm:pb-6">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight dark:text-white text-sand-charcoal leading-tight">
                    Mohammed Hashim
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 mt-0.5">
                    B.Tech Computer Science Engineering
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
                    <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg dark:bg-citron/10 bg-citron/15 border border-citron/30 text-[10px] sm:text-[11px] font-mono font-bold text-citron">
                      <Zap size={10} />
                      Founder · AstriOrb
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg dark:bg-red-500/10 bg-red-500/10 border border-red-500/30 text-[10px] sm:text-[11px] font-mono font-bold text-red-400">
                      <Award size={10} />
                      CTO · Cueroll
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-xl dark:bg-white/[0.04] bg-sand-charcoal/5 border dark:border-white/[0.06] border-sand-border mb-3 sm:mb-4">
                  <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-citron shrink-0 mt-0.5 opacity-70" />
                  <p className="text-[10.5px] sm:text-[11px] dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed italic">
                    &ldquo;We research authentic human friction points, write high-performance native code, and engineer products that respect user sovereignty.&rdquo;
                  </p>
                </div>

                <div className="mb-4 sm:mb-5">
                  <p className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-500 text-sand-charcoal/50 uppercase mb-2 tracking-widest">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className="px-1.5 sm:px-2 py-0.5 rounded-md dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/5 border-sand-border text-[9.5px] sm:text-[10px] font-mono dark:text-titanium-300 text-sand-charcoal"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-3 sm:pt-4 border-t dark:border-white/10 border-sand-border flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 size={13} />
                  <span>100% Hands-On Technical Supervision</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Track Record Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <SpotlightCard className="p-4 sm:p-8 h-full flex flex-col justify-between" withCorners>
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b dark:border-white/10 border-sand-border">
                <h4 className="text-xs sm:text-base font-bold font-mono dark:text-white text-sand-charcoal uppercase tracking-wider">
                  Professional Journey &amp; Experience
                </h4>
                <span className="text-[10px] sm:text-xs font-mono text-citron shrink-0">VERIFIED PEDIGREE</span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {careerMilestones.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                      </div>
                      <div className="flex-grow space-y-0.5 sm:space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h5 className="text-xs sm:text-sm font-bold font-mono dark:text-white text-sand-charcoal">
                            {item.role}
                          </h5>
                          <span className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                            {item.period}
                          </span>
                        </div>
                        <div className="text-[11px] sm:text-xs font-mono text-citron">
                          {item.company} &bull; {item.location}
                        </div>
                        <p className="text-[11px] sm:text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed pt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t dark:border-white/10 border-sand-border text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 flex items-center justify-between">
              <span>Origin: Kerala, India</span>
              <span className="text-citron font-semibold">Founder-Led Innovation</span>
            </div>
          </SpotlightCard>
        </div>

      </div>

      {/* Co-Founder Open Position Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
        className="max-w-6xl mx-auto mt-8"
      >
        <div
          className="relative rounded-3xl overflow-hidden dark:bg-[#0d0f12] bg-[#f5f2e9] border dark:border-white/10 border-sand-border"
          style={{
            boxShadow:
              '0 0 0 1.5px rgba(16,185,129,0.30), 0 0 32px 4px rgba(16,185,129,0.07)',
          }}
        >
          {/* Ambient gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 55% 70% at 0% 50%, rgba(16,185,129,0.07) 0%, transparent 60%), radial-gradient(ellipse 55% 70% at 100% 50%, rgba(212,230,0,0.06) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

            {/* Left: Headline */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full dark:bg-emerald-500/10 bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPEN POSITION
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight dark:text-white text-sand-charcoal leading-tight mb-2">
                Looking for a<br />
                <span className="text-emerald-400">Co-Founder</span>
              </h3>
              <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/75 leading-relaxed">
                AstriOrb is building products that solve real-world problems. We need a sharp technical mind who can help drive the vision forward from day one.
              </p>
            </div>

            {/* Middle: Trait list */}
            <div className="lg:col-span-5">
              <p className="text-[10px] font-mono dark:text-titanium-500 text-sand-charcoal/50 uppercase tracking-widest mb-3">
                What we&apos;re looking for
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                {[
                  { emoji: '🧠', label: 'Deep Tech Curiosity', desc: 'You think in systems and love going under the hood' },
                  { emoji: '🤖', label: 'AI-Native Mindset', desc: 'You stay current with AI research & apply it practically' },
                  { emoji: '💡', label: 'Creative Problem Solver', desc: 'You reframe hard problems into elegant solutions' },
                  { emoji: '⚡', label: 'Builder First', desc: 'You ship fast, iterate faster, and hate slide decks' },
                  { emoji: '🌐', label: 'Tech-First Thinker', desc: 'You see technology as leverage, not just a tool' },
                  { emoji: '🔥', label: 'High Agency', desc: 'You act without waiting to be told — ownership mindset' },
                ].map(({ emoji, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl dark:bg-white/[0.03] bg-sand-charcoal/5 border dark:border-white/[0.05] border-sand-border"
                  >
                    <span className="text-base leading-none mt-0.5">{emoji}</span>
                    <div>
                      <p className="text-[11px] font-bold font-mono dark:text-white text-sand-charcoal">{label}</p>
                      <p className="text-[10px] dark:text-titanium-400 text-sand-charcoal/60 leading-snug mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-3 sm:gap-4">
              <div className="text-left lg:text-right">
                <p className="text-[10px] font-mono dark:text-titanium-500 text-sand-charcoal/50 uppercase tracking-widest mb-1">
                  Equity-based · Full Commitment
                </p>
                <p className="text-xs dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed">
                  This is a founding-level seat. You&apos;d co-own what we build.
                </p>
              </div>
              <a
                href="mailto:astriorbofficial@gmail.com?subject=Co-Founder%20Inquiry%20%E2%80%94%20AstriOrb"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-black bg-emerald-400 hover:bg-emerald-300 transition-colors duration-200 shadow-lg shadow-emerald-500/20"
              >
                <span>Reach Out</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default React.memo(LeadershipProfile);
