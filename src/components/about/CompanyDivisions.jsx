import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Activity,
  ArrowRight,
  Layers,
  Cpu,
  Database,
  Lock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';

const divisions = [
  {
    id: 'tastory',
    num: 'DIVISION 01',
    name: 'Consumer Social & Culinary Discovery',
    product: 'Tastory (Flagship MVP Complete)',
    icon: Sparkles,
    color: 'text-citron',
    borderGlow: 'hover:border-citron/50',
    description:
      'Engineers immersive consumer platforms driven by dynamic taste vectors, culinary knowledge graphs, and high-performance cross-platform Flutter runtimes.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Algolia Search'],
    status: 'MVP Ready • Seeking Seed Funding',
    statusMobile: 'MVP Ready • Seed',
  },
  {
    id: 'fisclok',
    num: 'DIVISION 02',
    name: 'Zero-Knowledge Privacy & FinTech',
    product: 'FISCLOK (Live on Google Play v1.0.2)',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    borderGlow: 'hover:border-emerald-500/50',
    description:
      'Builds uncompromising local-first financial applications where data remains strictly on the user’s device via MMKV AES-256 encryption. Zero tracking, zero ads.',
    tech: ['React Native', 'MMKV Storage', 'Google Drive API', 'TypeScript'],
    status: 'Live on Google Play • Major Update in R&D',
    statusMobile: 'Live • Play Store',
  },
  {
    id: 'row',
    num: 'DIVISION 03',
    name: 'Connected Hardware & Embedded IoT',
    product: 'Project ROW (Hardware Gadget + App)',
    icon: Compass,
    color: 'text-laser-cyan',
    borderGlow: 'hover:border-laser-cyan/50',
    description:
      'Co-engineers custom microcontroller hardware gadgets with smartphone routing software, utilizing Bluetooth LE 5.0 for distraction-free ambient guidance.',
    tech: ['ESP32-S3', 'Embedded C/C++', 'BLE 5.0', 'Custom PCB'],
    status: 'Hardware Prototype in Active Testing',
    statusMobile: 'Prototype in R&D',
  },
  {
    id: 'health-os',
    num: 'DIVISION 04',
    name: 'Clinical HealthTech & Enterprise OS',
    product: 'DocCo Health & Continuum OS',
    icon: Activity,
    color: 'text-cyan-400',
    borderGlow: 'hover:border-cyan-500/50',
    description:
      'Architects compliance-grade healthcare consultation platforms with zero-knowledge record ledgers, alongside high-velocity CRDT-synced sprint operating systems.',
    tech: ['React', 'Node.js', 'PostgreSQL / Supabase', 'CRDT Offline'],
    status: 'Client Research Phase & Beta Testing',
    statusMobile: 'Client Beta Phase',
  },
];

const CompanyDivisions = () => {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-3">
          <Layers size={13} />
          <span>PORTFOLIO ARCHITECTURE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          Four Specialized Operating Divisions
        </h2>
        <p className="text-sm sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          Rather than relying on a single volatile revenue stream, AstriOrb develops four dedicated technical divisions across consumer, privacy, IoT, and health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {divisions.map((div) => {
          const Icon = div.icon;
          return (
            <SpotlightCard
              key={div.id}
              className={`p-4 sm:p-8 flex flex-col justify-between group ${div.borderGlow} transition-all duration-300`}
              withCorners
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b dark:border-white/10 border-sand-border">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="p-1.5 sm:p-2 rounded-xl dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border shrink-0">
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${div.color}`} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase whitespace-nowrap">
                      {div.num}
                    </span>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full dark:bg-white/5 bg-sand-border text-citron border dark:border-white/10 border-sand-border font-bold whitespace-nowrap shrink-0">
                    <span className="hidden sm:inline">{div.status}</span>
                    <span className="sm:hidden">{div.statusMobile || div.status}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-mono dark:text-white text-sand-charcoal mb-1">
                  {div.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-mono font-bold text-citron mb-2 sm:mb-3">
                  Focus: {div.product}
                </p>
                <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal mb-4 sm:mb-6">
                  {div.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                  {div.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 sm:px-2 py-0.5 rounded-md dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/5 border-sand-border text-[10px] sm:text-[11px] font-mono dark:text-titanium-300 text-sand-charcoal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t dark:border-white/10 border-sand-border flex items-center justify-between">
                <Link
                  to="/products"
                  className="text-[11px] sm:text-xs font-mono font-bold text-citron hover:text-flame-coral transition-colors flex items-center gap-1.5"
                >
                  <span>EXPLORE ARCHITECTURE & SPECS</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(CompanyDivisions);
