import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Kanban,
  CheckCircle2,
  Lock,
  Layers,
  ArrowRight,
  FileCheck2,
  Zap,
  ListTodo,
  Calendar,
  FileText,
  Lightbulb,
  Briefcase,
  Clock,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const continuumModules = [
  {
    icon: ListTodo,
    title: 'Daily Tasks & Sprint Queues',
    badge: 'Task Management',
    color: 'text-purple-400',
    desc: 'Priority Eisenhower matrices, keyboard-first subtask checklists, and day-focus execution loops.',
  },
  {
    icon: Briefcase,
    title: 'Multi-Project Coordination',
    badge: 'Deliverables Pipeline',
    color: 'text-indigo-400',
    desc: 'Client deliverable milestones, parallel project roadmaps, and deliverable review tracking.',
  },
  {
    icon: FileText,
    title: 'Distraction-Free Note Pad',
    badge: 'Markdown Writing',
    color: 'text-cyan-400',
    desc: 'Instant markdown notes, meeting briefs, clean project documentation, and searchable tags.',
  },
  {
    icon: Lightbulb,
    title: 'Idea Incubator & Scratchpad',
    badge: 'Concept Staging',
    color: 'text-amber-400',
    desc: 'Rapid-capture brainstorm scratchpad to flesh out startup ideas, pitch drafts, and feature concepts.',
  },
  {
    icon: Calendar,
    title: 'Event Reminders & Deadlines',
    badge: 'Milestone Alerts',
    color: 'text-emerald-400',
    desc: 'Scheduled calendar milestones, deliverable countdown timers, and automated reminder alerts.',
  },
];

const DualProductCards = ({ doccoProduct, continuumProduct, onOpenBlueprintModal }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
      {/* 1. DOCCO CARD */}
      <div id="docco" className="scroll-mt-32">
        <SpotlightCard className="p-4 sm:p-8 lg:p-10 h-full flex flex-col justify-between relative overflow-hidden" withCorners>
          <div className="space-y-6">
            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b dark:border-white/10 border-sand-border">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                <Activity size={14} className="shrink-0" />
                <span>CLINICAL HEALTHTECH // ENTERPRISE</span>
              </span>

              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold dark:bg-cyan-500/15 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <span className="sm:hidden">DEV DONE • CLIENT PILOT</span>
                <span className="hidden sm:inline">DEV COMPLETED • CLIENT ENGAGEMENT</span>
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-1">
                {doccoProduct.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono mb-3">
                {doccoProduct.tagline}
              </p>
              <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed font-normal">
                {doccoProduct.shortDescription}
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-2">
              {doccoProduct.keyFeatures.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs dark:text-titanium-300 text-sand-charcoal/85">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Clinical Data Governance & Protocol Console */}
            <div className="p-3.5 sm:p-5 rounded-2xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border space-y-3 sm:space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b dark:border-white/10 border-sand-border">
                <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider">
                  <span className="sm:hidden">DATA GOVERNANCE & PROTOCOLS</span>
                  <span className="hidden sm:inline">CLINICAL DATA GOVERNANCE & PROTOCOL SPECS</span>
                </span>
                <span className="self-start sm:self-auto text-[9px] sm:text-[10px] font-mono text-cyan-400 font-bold px-2 py-0.5 rounded dark:bg-cyan-500/15 bg-cyan-500/20 border border-cyan-500/25 whitespace-nowrap">
                  HIPAA ARCHITECTURE
                </span>
              </div>

              {/* 3 Protocol Layers */}
              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded-xl dark:bg-titanium-950 dark:border-white/10 bg-white border border-sand-border space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold dark:text-white text-sand-charcoal flex items-center gap-1.5">
                      <Lock size={12} className="text-cyan-400" />
                      01. Zero-Knowledge Patient Intake
                    </span>
                    <span className="text-[10px] text-cyan-400 font-bold">Field-Level AES-256</span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-4 font-sans">
                    Structured symptom capture and health records are encrypted client-side prior to transit, preventing unauthenticated inspection.
                  </p>
                </div>

                <div className="p-3 rounded-xl dark:bg-titanium-950 dark:border-white/10 bg-white border border-sand-border space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold dark:text-white text-sand-charcoal flex items-center gap-1.5">
                      <Activity size={12} className="text-cyan-400" />
                      02. Physician Diagnostic Workspace
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">Role-Based RBAC</span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-4 font-sans">
                    Unified consultation dashboard supporting ICD-11 coding, differential clinical insights, and instant longitudinal history review.
                  </p>
                </div>

                <div className="p-3 rounded-xl dark:bg-titanium-950 dark:border-white/10 bg-white border border-sand-border space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold dark:text-white text-sand-charcoal flex items-center gap-1.5">
                      <FileCheck2 size={12} className="text-cyan-400" />
                      03. Cryptographically Signed e-Rx
                    </span>
                    <span className="text-[10px] text-citron font-bold">Tamper-Evident Hash</span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-4 font-sans">
                    Digital prescriptions are sealed with an irreversible cryptographic checksum committed to the patient's authenticated record.
                  </p>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="flex items-center justify-between text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 pt-1">
                <span>Standard: HIPAA / GDPR Ready</span>
                <span className="text-cyan-400 font-bold">Zero Ad Trackers</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {doccoProduct.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border text-[11px] font-mono dark:text-titanium-300 text-sand-charcoal"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-6 mt-6 border-t dark:border-white/10 border-sand-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onOpenBlueprintModal(doccoProduct)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Layers size={13} className="shrink-0" />
              <span>CLINICAL ARCHITECTURE</span>
            </button>

            <Link
              to="/contact"
              className="text-xs font-mono font-semibold text-cyan-400 hover:underline flex items-center justify-center sm:justify-start gap-1"
            >
              <span>PARTNER PILOT INQUIRY</span>
              <ArrowRight size={13} className="shrink-0" />
            </Link>
          </div>
        </SpotlightCard>
      </div>

      {/* 2. CONTINUUM CARD - COMPLETE HYBRID FOUNDER OS */}
      <div id="continuum" className="scroll-mt-32">
        <SpotlightCard className="p-4 sm:p-8 lg:p-10 h-full flex flex-col justify-between relative overflow-hidden" withCorners>
          <div className="space-y-6">
            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b dark:border-white/10 border-sand-border">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-1.5">
                <Kanban size={14} />
                <span>HYBRID WORKSPACE OS // FREELANCERS & FOUNDERS</span>
              </span>

              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold dark:bg-purple-500/15 bg-purple-500/20 text-purple-400 border border-purple-500/30">
                MVP PRIVATE BETA
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-1">
                {continuumProduct.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-purple-400 font-mono mb-3">
                {continuumProduct.tagline}
              </p>
              <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed font-normal">
                {continuumProduct.shortDescription}
              </p>
            </div>

            {/* Complete 5-in-1 Hybrid Founder Modules Console */}
            <div className="p-3.5 sm:p-5 rounded-2xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border space-y-3 sm:space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b dark:border-white/10 border-sand-border">
                <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider">
                  <span className="sm:hidden">FOUNDER SUITE (5 MODULES)</span>
                  <span className="hidden sm:inline">ALL-IN-ONE HYBRID FOUNDER SUITE (5 MODULES)</span>
                </span>
                <span className="self-start sm:self-auto text-[9px] sm:text-[10px] font-mono text-purple-400 font-bold px-2 py-0.5 rounded dark:bg-purple-500/15 bg-purple-500/20 border border-purple-500/25 whitespace-nowrap">
                  CRDT ENGINE &bull; &lt; 18ms
                </span>
              </div>

              {/* 5 Founder Modules List */}
              <div className="space-y-2 text-xs font-mono">
                {continuumModules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl dark:bg-titanium-950 dark:border-white/10 bg-white border border-sand-border flex items-start gap-2.5 shadow-sm"
                  >
                    <div className="p-1.5 rounded-lg dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border shrink-0 mt-0.5">
                      <mod.icon size={13} className={mod.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold dark:text-white text-sand-charcoal truncate">
                          {mod.title}
                        </span>
                        <span className="text-[9px] dark:text-titanium-400 text-sand-charcoal/60 uppercase shrink-0">
                          {mod.badge}
                        </span>
                      </div>
                      <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/75 leading-tight font-sans">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status footer inside card */}
              <div className="flex items-center justify-between text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 pt-1">
                <span>Architecture: IndexedDB + Supabase</span>
                <span className="text-purple-400 font-bold">Zero Chaos</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {continuumProduct.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border text-[11px] font-mono dark:text-titanium-300 text-sand-charcoal"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-6 mt-6 border-t dark:border-white/10 border-sand-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onOpenBlueprintModal(continuumProduct)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-purple-400 hover:text-purple-400 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Layers size={13} className="shrink-0" />
              <span>SYSTEM ARCHITECTURE</span>
            </button>

            <Link
              to="/contact"
              className="text-xs font-mono font-semibold text-purple-400 hover:underline flex items-center justify-center sm:justify-start gap-1"
            >
              <span>REQUEST BETA ACCESS</span>
              <ArrowRight size={13} className="shrink-0" />
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default React.memo(DualProductCards);
