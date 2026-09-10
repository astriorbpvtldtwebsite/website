import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  XCircle,
  Building,
  Target,
  Cpu,
  Layers,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const comparisons = [
  {
    trait: 'Intellectual Property',
    traditional: '0% Owned (Contract Work for Third Parties)',
    astriorb: '100% Proprietary Owned IP',
  },
  {
    trait: 'Business Model',
    traditional: 'Hourly Developer Billing & Body Leasing',
    astriorb: 'Scalable Software Ecosystems & Smart Hardware',
  },
  {
    trait: 'Engineering Culture',
    traditional: 'Rushed Deadlines, Outdated Templates',
    astriorb: 'First-Principles Craftsmanship & Deep R&D',
  },
  {
    trait: 'Data Sovereignty',
    traditional: 'Monetized & Sold to Advertisers',
    astriorb: 'Zero-Surveillance & Local-First Encryption',
  },
  {
    trait: 'Long-Term Compounding',
    traditional: 'Vulnerable to Contract Termination',
    astriorb: 'Compounding Portfolio of Enduring Assets',
  },
];

const FoundingThesis = () => {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-3">
          <Target size={13} />
          <span>THE FOUNDING THESIS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          Beyond the Outsourcing Agency Mindset
        </h2>
        <p className="text-sm sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          Why we refuse to be another IT staffing firm or a single-feature app — and how we are engineering an enduring multi-product technology house from Kerala.
        </p>
      </div>

      {/* Narrative Card */}
      <SpotlightCard className="p-4 sm:p-10 lg:p-12 mb-6 sm:mb-10" withCorners>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-xs sm:text-base dark:text-titanium-200 text-sand-charcoal/85 leading-relaxed font-normal">
          <p>
            India produces some of the finest software engineers on earth. Yet, for decades, the predominant playbook has remained strikingly unchanged: start an <strong>IT outsourcing services agency</strong>, rent out engineering hours to overseas clients, and build products you will never own.
          </p>

          <p>
            Kerala, blessed with exceptional literacy and a rising wave of ambitious builders, has historically watched its brightest minds migrate or work inside agency confines. <strong>AstriOrb was established in 2025 to prove a higher ambition.</strong>
          </p>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl dark:bg-titanium-900 bg-sand-border/30 border-l-4 border-citron dark:border-white/10 text-xs sm:text-sm font-normal italic dark:text-white text-sand-charcoal">
            "We believe the only way to build enduring wealth and authentic technical sovereignty is to conceive, design, code, and own your own intellectual property. That is why AstriOrb exists."
          </div>

          <p>
            Inspired by legendary technological pioneers like Zoho and Google, we operate as an integrated multi-product venture studio. We identify deep societal friction points — whether personal financial surveillance, fragmented culinary discovery, inefficient clinical records, or dangerous navigation screens — and architect dedicated solutions under our own banner.
          </p>
        </div>
      </SpotlightCard>

      {/* Comparison Grid: Agency vs AstriOrb Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {/* Left: Traditional IT Agency */}
        <div className="p-4 sm:p-8 rounded-2xl dark:bg-titanium-950/60 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5 pb-3 sm:pb-4 border-b dark:border-white/10 border-sand-border">
            <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <div>
              <h4 className="text-sm sm:text-base font-bold font-mono dark:text-white text-sand-charcoal">
                The Traditional IT Outsourcing Model
              </h4>
              <span className="text-[11px] sm:text-xs dark:text-titanium-400 text-sand-charcoal/60 font-mono">
                Commoditized developer leasing & short-term focus
              </span>
            </div>
          </div>

          <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
            {comparisons.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm">
                <span className="text-rose-400 shrink-0 mt-0.5">✕</span>
                <div>
                  <span className="dark:text-titanium-400 text-sand-charcoal/60 font-mono">
                    {item.trait}:{' '}
                  </span>
                  <span className="dark:text-titanium-300 text-sand-charcoal/80">
                    {item.traditional}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: AstriOrb Venture Studio */}
        <SpotlightCard className="p-4 sm:p-8 rounded-2xl space-y-3 sm:space-y-4" withCorners>
          <div className="flex items-center gap-2.5 pb-3 sm:pb-4 border-b dark:border-white/10 border-sand-border">
            <CheckCircle2 className="w-5 h-5 text-citron shrink-0" />
            <div>
              <h4 className="text-sm sm:text-base font-bold font-mono text-citron">
                The AstriOrb Venture Studio Model
              </h4>
              <span className="text-[11px] sm:text-xs dark:text-titanium-400 text-sand-charcoal/60 font-mono">
                Autonomous product development & compounding equity
              </span>
            </div>
          </div>

          <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
            {comparisons.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <div>
                  <span className="text-citron font-mono font-semibold">
                    {item.trait}:{' '}
                  </span>
                  <span className="dark:text-white text-sand-charcoal font-medium">
                    {item.astriorb}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default React.memo(FoundingThesis);
