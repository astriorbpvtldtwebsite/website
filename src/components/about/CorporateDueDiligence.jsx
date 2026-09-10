import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Mail,
  Building2,
  FileCheck,
  Briefcase,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';

const compliancePoints = [
  { label: 'Corporate Entity', value: 'AstriOrb Pvt. Ltd.' },
  { label: 'Jurisdiction', value: 'Kerala, India (Inc. 2025)' },
  { label: 'IP Ownership', value: '100% In-House Proprietary' },
  { label: 'Data Sovereignty', value: 'Zero-Surveillance Architecture' },
];

const CorporateDueDiligence = ({ onOpenTastoryModal }) => {
  return (
    <section className="mt-12 sm:mt-16">
      <SpotlightCard className="p-4 sm:p-8 lg:p-12 relative overflow-hidden" withCorners>
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-citron-dim blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
          {/* Left Column: Corporate Transparency */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/90 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
              <Building2 size={13} />
              <span className="hidden sm:inline">CORPORATE DUE DILIGENCE & PARTNERSHIPS</span>
              <span className="sm:hidden">DUE DILIGENCE & PARTNERS</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight dark:text-white text-sand-charcoal font-mono">
              Build With Us. Invest in the Vision.
            </h3>

            <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal max-w-xl">
              Whether you are an angel investor or venture syndicate reviewing Tastory's seed round, a clinic director assessing DocCo, or a world-class engineer wanting to build real products rather than client tickets — our door is open.
            </p>

            {/* Corporate Spec Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 sm:pt-3">
              {compliancePoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border"
                >
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono font-bold dark:text-white text-sand-charcoal block truncate">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Actions */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 justify-center items-stretch lg:items-end w-full">
            <button
              type="button"
              onClick={onOpenTastoryModal}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles size={14} />
              <span className="hidden sm:inline">REQUEST TASTORY PITCH DECK</span>
              <span className="sm:hidden">REQUEST PITCH DECK</span>
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-citron hover:text-citron transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Mail size={14} />
              <span>CONTACT LEADERSHIP</span>
              <ArrowRight size={13} />
            </Link>

            <Link
              to="/careers"
              className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 rounded-xl text-xs font-mono font-semibold dark:text-titanium-300 text-sand-charcoal/80 hover:text-citron transition-colors flex items-center justify-center gap-1.5"
            >
              <Briefcase size={14} />
              <span>View Open Engineering Roles →</span>
            </Link>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default React.memo(CorporateDueDiligence);
