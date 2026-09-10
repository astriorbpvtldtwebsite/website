import React from 'react';
import {
  Layers,
  Sparkles,
  Activity,
  Kanban,
  Eye,
  Cpu,
  ShieldCheck,
} from 'lucide-react';
import { products } from '../../data/productsData';

const matrixData = [
  {
    id: 'fisclok',
    name: 'FISCLOK',
    domain: 'FinTech & Privacy',
    formFactor: 'Android App',
    runtime: 'Flutter / Dart / MMKV Engine',
    persistence: 'Local MMKV (AES-256-GCM)',
    offline: '100% Air-Gapped (Zero Outbound)',
    status: 'Live on Google Play (v1.0.2)',
    statusType: 'live',
  },
  {
    id: 'tastory',
    name: 'Tastory',
    domain: 'Social & Food Tech',
    formFactor: 'Cross-Platform Mobile',
    runtime: 'Flutter / Dart / Firebase',
    persistence: 'Culinary Graph + Algolia',
    offline: 'Kitchen Cooking Mode Cached',
    status: 'Flagship MVP Complete (Seed Stage)',
    statusType: 'flagship',
  },
  {
    id: 'row',
    name: 'Project ROW',
    domain: 'Ergonomic IoT & Wearables',
    formFactor: 'Smart Wearable + App',
    runtime: 'Espressif ESP32 (C++) + Flutter',
    persistence: 'On-Chip Flash + 6-Axis IMU Fusion',
    offline: '100% Autonomous Biomechanical Tracking',
    status: 'Hardware Prototype v2 (Calibration)',
    statusType: 'hardware',
  },
  {
    id: 'docco',
    name: 'DocCo',
    domain: 'Clinical HealthTech',
    formFactor: 'Web & Tablet Portal',
    runtime: 'React / Node.js / PostgreSQL',
    persistence: 'HIPAA Field-Encrypted Ledger',
    offline: 'Local Clinic Cache with Sync Guard',
    status: 'Dev Done • Client Meetings',
    statusType: 'clinical',
  },
  {
    id: 'continuum',
    name: 'Continuum',
    domain: 'Hybrid Founder OS',
    formFactor: 'Unified Desktop & Web OS',
    runtime: 'Next.js / TypeScript / CRDT Engine',
    persistence: 'Tasks, Notes, Events + Supabase',
    offline: '100% Offline-First (CRDT <18ms)',
    status: 'MVP Private Beta (Founder OS)',
    statusType: 'beta',
  },
];

const ArchitectureMatrix = ({ onSelectProduct }) => {
  const getStatusBadge = (type, text) => {
    switch (type) {
      case 'live':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {text}
          </span>
        );
      case 'flagship':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-citron/15 text-citron border border-citron/30">
            <Sparkles size={11} />
            {text}
          </span>
        );
      case 'hardware':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-ocean/20 text-laser-cyan border border-ocean/35">
            <Cpu size={11} />
            {text}
          </span>
        );
      case 'clinical':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
            <Activity size={11} />
            {text}
          </span>
        );
      case 'beta':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30">
            <Kanban size={11} />
            {text}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono dark:bg-titanium-800 bg-sand-border dark:text-titanium-300 text-sand-charcoal">
            {text}
          </span>
        );
    }
  };

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-xs font-mono text-citron uppercase tracking-widest mb-3">
          <Layers size={13} />
          <span>TECHNICAL DUE DILIGENCE MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3">
          Architectural Specifications at a Glance
        </h2>
        <p className="text-sm dark:text-titanium-300 text-sand-charcoal/80 font-normal leading-relaxed">
          Compare our 5 proprietary systems across technical domain, runtime environments, local persistence standards, and operational deployment status.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-sand-border shadow-md dark:bg-titanium-900/60 bg-white/90 backdrop-blur-xl">
        <table className="w-full text-left text-xs font-mono border-collapse min-w-[780px]">
          <thead>
            <tr className="border-b dark:border-white/10 border-sand-border dark:bg-titanium-950/80 bg-sand-border/40 text-[11px] dark:text-titanium-400 text-sand-charcoal/70 uppercase tracking-wider">
              <th className="py-4 px-5">System / Node</th>
              <th className="py-4 px-4">Domain</th>
              <th className="py-4 px-4">Form Factor & Runtime</th>
              <th className="py-4 px-4">Persistence & Security</th>
              <th className="py-4 px-4">Offline Autonomy</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-5 text-right">Blueprint</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-white/5 divide-sand-border/60">
            {matrixData.map((row) => {
              const fullProduct = products.find((p) => p.id === row.id);
              return (
                <tr
                  key={row.id}
                  className="hover:dark:bg-white/5 hover:bg-sand-border/30 transition-colors"
                >
                  <td className="py-4 px-5 font-bold dark:text-white text-sand-charcoal">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 dark:text-titanium-300 text-sand-charcoal/80">
                    {row.domain}
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-semibold dark:text-white text-sand-charcoal">
                      {row.formFactor}
                    </div>
                    <div className="text-[10px] dark:text-titanium-400 text-sand-charcoal/60">
                      {row.runtime}
                    </div>
                  </td>
                  <td className="py-4 px-4 dark:text-titanium-300 text-sand-charcoal/80">
                    {row.persistence}
                  </td>
                  <td className="py-4 px-4 dark:text-titanium-300 text-sand-charcoal/80">
                    {row.offline}
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(row.statusType, row.status)}
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button
                      type="button"
                      onClick={() => fullProduct && onSelectProduct(fullProduct)}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-citron hover:text-citron transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Eye size={12} />
                      <span>Inspect</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default React.memo(ArchitectureMatrix);
