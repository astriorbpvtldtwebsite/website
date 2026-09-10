import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal as TerminalIcon,
  Play,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Shield,
  Activity,
  Kanban,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const commands = [
  { id: 'status', label: 'system.status()', desc: 'Query live pipeline runtimes' },
  { id: 'origin', label: 'company.origin()', desc: 'Kerala founding history & vision' },
  { id: 'leadership', label: 'founder.profile()', desc: 'Mohammed Hashim background' },
  { id: 'manifesto', label: 'tech.manifesto()', desc: 'Architectural laws & performance' },
  { id: 'hardware', label: 'hardware.lab()', desc: 'Project ROW embedded IoT specs' },
];

const pipelineNodes = [
  {
    id: '01',
    name: 'FISCLOK',
    color: 'text-emerald-400',
    desc: 'Live Production v1.0.2 on Play Store',
    badge: '0.00 KB Network Outbound',
    badgeMobile: '0.00 KB Outbound',
    badgeStyle: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    id: '02',
    name: 'TASTORY',
    color: 'text-citron',
    desc: 'Flagship Flutter MVP 100% Complete',
    badge: 'Active Seed Discussions',
    badgeMobile: 'Seed Discussions',
    badgeStyle: 'bg-citron/20 text-citron',
  },
  {
    id: '03',
    name: 'PROJECT ROW',
    color: 'text-laser-cyan',
    desc: 'Bespoke Hardware Gadget + App in R&D',
    badge: 'ESP32 BLE 5.0',
    badgeMobile: 'ESP32 BLE',
    badgeStyle: 'bg-laser-cyan/20 text-laser-cyan',
  },
  {
    id: '04',
    name: 'DOCCO',
    color: 'text-cyan-400',
    desc: 'Clinical Workflow Platform',
    badge: 'Client Meetings Phase',
    badgeMobile: 'Client Pilot',
    badgeStyle: 'bg-cyan-500/20 text-cyan-400',
  },
  {
    id: '05',
    name: 'CONTINUUM',
    color: 'text-purple-400',
    desc: 'High-Velocity Sprint OS',
    badge: 'Offline CRDT Sync',
    badgeMobile: 'CRDT Sync',
    badgeStyle: 'bg-purple-500/20 text-purple-400',
  },
];

const AboutInteractiveTerminal = () => {
  const [activeCmd, setActiveCmd] = useState('status');

  return (
    <section className="mb-20">
      <SpotlightCard className="p-4 sm:p-8 lg:p-12 relative overflow-hidden" withCorners>
        {/* Terminal Window Frame */}
        <div className="rounded-2xl dark:bg-titanium-950/90 bg-white/95 border dark:border-white/10 border-sand-border shadow-2xl overflow-hidden">
          {/* Terminal Titlebar */}
          <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-b dark:border-white/10 border-sand-border flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 dark:bg-titanium-900/90 bg-sand-border/40">
            {/* Mac-style Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70 ml-1 sm:ml-2 font-semibold truncate">
                <span className="sm:hidden">astri-core-cli v2.6.4</span>
                <span className="hidden sm:inline">astri-core-cli // bash session v2.6.4</span>
              </span>
            </div>

            {/* Quick Command Selector Pills */}
            <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap gap-1 sm:gap-1.5 max-w-full py-0.5">
              {commands.map((cmd) => {
                const isActive = activeCmd === cmd.id;
                return (
                  <button
                    type="button"
                    key={cmd.id}
                    onClick={() => setActiveCmd(cmd.id)}
                    aria-label={`Execute command ${cmd.label}: ${cmd.desc}`}
                    className={`shrink-0 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${isActive
                        ? 'bg-citron text-obsidian font-bold shadow-sm'
                        : 'dark:bg-titanium-800 bg-sand-border/70 dark:text-titanium-300 text-sand-charcoal/80 hover:text-citron'
                      }`}
                  >
                    {cmd.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Interactive Console Body */}
          <div className="p-3.5 sm:p-6 font-mono text-xs sm:text-sm space-y-3 sm:space-y-4 min-h-[260px] sm:min-h-[280px]">
            {/* Command Prompt Line */}
            <div className="flex items-center gap-2 text-citron font-bold text-[11px] sm:text-xs">
              <span className="truncate">hashim@astriorb-core:~$</span>
              <span className="dark:text-white text-sand-charcoal truncate">./astri-cli --exec {activeCmd}</span>
              <span className="w-1.5 h-3.5 bg-citron animate-pulse inline-block shrink-0" />
            </div>

            {/* Dynamic Output Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCmd}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 dark:text-titanium-300 text-sand-charcoal/85 leading-relaxed text-[11px] sm:text-xs"
              >
                {activeCmd === 'status' && (
                  <div className="space-y-2">
                    <p className="text-citron font-bold text-xs">{'>'} ASTRIORB ACTIVE PIPELINE AUDIT [5 NODES]:</p>
                    <div className="space-y-2 pl-2.5 border-l-2 dark:border-white/10 border-sand-border">
                      {pipelineNodes.map((node) => (
                        <div key={node.id}>
                          {/* Mobile Layout: 2 clean stacked rows */}
                          <div className="sm:hidden space-y-0.5 py-0.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className={`font-bold ${node.color} text-[11px]`}>
                                [NODE {node.id}] {node.name}:
                              </span>
                              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${node.badgeStyle} shrink-0`}>
                                {node.badgeMobile}
                              </span>
                            </div>
                            <p className="dark:text-white text-sand-charcoal font-medium text-[11px]">
                              {node.desc}
                            </p>
                          </div>

                          {/* Desktop Layout: Crisp 3-Column Tabular Grid */}
                          <div className="hidden sm:grid sm:grid-cols-[190px_1fr_auto] items-center gap-4 py-0.5 text-xs">
                            <span className={`font-bold ${node.color} shrink-0`}>
                              [NODE {node.id}] {node.name}:
                            </span>
                            <span className="dark:text-white text-sand-charcoal font-medium truncate">
                              {node.desc}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${node.badgeStyle} shrink-0 text-right`}>
                              {node.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-emerald-400 font-bold pt-2 text-[11px] sm:text-xs">
                      {'>'} INTEGRITY VERIFIED: 100% PROPRIETARY IP. ZERO VENDOR LOCK-IN.
                    </p>
                  </div>
                )}

                {activeCmd === 'origin' && (
                  <div className="space-y-2">
                    <p className="text-citron font-bold">{'>'} CORPORATE CHRONICLE & GEOGRAPHY:</p>
                    <p className="dark:text-white text-sand-charcoal">
                      - Entity Name: AstriOrb Pvt. Ltd. (Incorporated in Kerala, India)
                    </p>
                    <p>
                      - Founding Vision: To establish a world-class, multi-product technology and hardware house rooted in Kerala’s high-literacy engineering talent pool.
                    </p>
                    <p>
                      - Philosophical Alignment: Modeled after legendary independent software institutions (Zoho, Google, Apple) rather than hourly body-shop service agencies.
                    </p>
                    <p className="text-citron">
                      {'>'} MISSION: SOLVING DEEP REAL-WORLD PROBLEMS THROUGH FIRST-PRINCIPLES ENGINEERING.
                    </p>
                  </div>
                )}

                {activeCmd === 'leadership' && (
                  <div className="space-y-2">
                    <p className="text-citron font-bold">{'>'} LEADERSHIP DOSSIER // MOHAMMED HASHIM:</p>
                    <p className="dark:text-white text-sand-charcoal font-bold">
                      - Founder & Lead Software Architect
                    </p>
                    <p>
                      - Background: Computer Science Engineer with hands-on systems expertise across Flutter, React Native, Embedded C++, and Node.js.
                    </p>
                    <p>
                      - Prior Roles: Former Studio Head at Custodian Games Pvt. Ltd. (Kerala); Creative Consultant at Hopz Corp; Flutter Developer at Annolive (Bangalore); CTO at Cueroll — Premium Video &amp; Content Production Platform (Pattambi, Kerala).
                    </p>
                    <p className="text-laser-cyan font-bold">
                      {'>'} ARCHITECTURAL GOVERNANCE: 100% of AstriOrb software and hardware designs are engineered under direct founder oversight.
                    </p>
                  </div>
                )}

                {activeCmd === 'manifesto' && (
                  <div className="space-y-2">
                    <p className="text-citron font-bold">{'>'} ASTRIORB ENGINEERING MANIFESTO:</p>
                    <p>
                      1. [DATA SOVEREIGNTY]: Users own their data. Local-first encrypted vaults (MMKV / SQLite) by default. Zero non-consensual tracking telemetry.
                    </p>
                    <p>
                      2. [FRAME-RATE INTEGRITY]: Mobile runtimes must compile directly to native arm64 code (Flutter & React Native). No clunky webview containers.
                    </p>
                    <p>
                      3. [BREADTH OVER MONOLITH]: Solve multiple distinct societal pain points rather than remaining a single fragile feature.
                    </p>
                    <p className="text-emerald-400 font-bold">
                      {'>'} STANDARDS APPLIED TO ALL RELEASES: FISCLOK, TASTORY, ROW, DOCCO, CONTINUUM.
                    </p>
                  </div>
                )}

                {activeCmd === 'hardware' && (
                  <div className="space-y-2">
                    <p className="text-laser-cyan font-bold">{'>'} PHYSICAL-DIGITAL LAB // PROJECT ROW:</p>
                    <p>
                      - Hardware Objective: Ambient tactile and peripheral visual navigation without distracting phone screen glances.
                    </p>
                    <p>
                      - Embedded Architecture: Dual-core ESP32-S3 microcontroller running custom low-power C++ firmware.
                    </p>
                    <p>
                      - Communication Layer: Bluetooth LE 5.0 Low-Energy telemetry link between physical device and smartphone app.
                    </p>
                    <p className="text-citron font-bold">
                      {'>'} HARDWARE PROTOTYPING & APP CO-DEVELOPMENT CURRENTLY ACTIVE IN KERALA LAB.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Status Ticker */}
            <div className="pt-4 border-t dark:border-white/10 border-sand-border flex flex-wrap items-center justify-between text-[11px] text-titanium-400 font-mono">
              <span>Terminal Host: AstriOrb Production Node</span>
              <span className="text-citron">Interactive Shell Active</span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default React.memo(AboutInteractiveTerminal);
