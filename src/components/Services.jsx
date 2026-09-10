import React from 'react';
import {
  Smartphone,
  Globe,
  Shield,
  Activity,
  Cpu,
  Database,
  Code2,
  Lock,
  Radio,
  Sparkles,
  Compass,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import {
  SiFlutter,
  SiSupabase,
  SiTypescript,
  SiCplusplus,
  SiSqlite,
  SiPostgresql,
  SiDart,
} from 'react-icons/si';
import SpotlightCard from './SpotlightCard';

const Services = () => {
  const capabilities = [
    {
      Icon: Smartphone,
      title: 'Mobile Architecture & 60fps Native State',
      description:
        'Architecting low-latency cross-platform mobile engines with Flutter and React Native. Designed for fluid 60fps local-first state, hardware acceleration, and zero bloat.',
      products: 'Powering FISCLOK & Tastory',
      tag: 'MOBILE_ENGINE',
    },
    {
      Icon: Shield,
      title: 'Local-First Privacy Architecture',
      description:
        'Building software where data sovereignty belongs unconditionally to the user. Leveraging MMKV encrypted storage, zero-backend models, and isolated cloud backups.',
      products: 'Core DNA of FISCLOK',
      tag: 'SECURE_VAULT',
    },
    {
      Icon: Activity,
      title: 'HealthTech & Clinical Workflow Engines',
      description:
        'Engineering resilient healthcare applications with strict data confidentiality, intuitive clinical consultation flows, and structured diagnostic data recording.',
      products: 'Powering Project DocCo',
      tag: 'CLINICAL_PROTOCOL',
    },
    {
      Icon: Globe,
      title: 'Fullstack Systems & Cloud Infrastructure',
      description:
        'High-velocity web platforms engineered with React 19, TypeScript, and Node.js. Optimized for sub-millisecond query pipelines, SEO indexing, and enterprise reliability.',
      products: 'Powering Continuum & Systems',
      tag: 'DISTRIBUTED_CLOUD',
    },
    {
      Icon: Cpu,
      title: 'Smart Hardware & Embedded IoT Prototyping',
      description:
        'Bridging the physical and digital domains by designing custom smart hardware gadgets paired seamlessly with low-latency mobile telemetry via Bluetooth LE.',
      products: 'Powering Project ROW',
      tag: 'EMBEDDED_TELEMETRY',
    },
    {
      Icon: Database,
      title: 'Graph Discovery & Recommendation Vectors',
      description:
        'Developing proprietary search indexing, real-time taste-matching algorithms, and social culinary graphs that scale across global user communities.',
      products: 'Core Engine of Tastory',
      tag: 'VECTOR_GRAPH',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 dark:text-white text-sand-charcoal transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 mb-4 shadow-sm">
          <Code2 className="w-3.5 h-3.5 text-citron" />
          <span className="text-xs font-mono font-semibold text-citron uppercase tracking-wider">
            TECHNICAL ARSENAL & DISCIPLINES
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-sand-charcoal tracking-tight mb-4">
          Core Engineering Capabilities
        </h2>
        <p className="text-base sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          The technical foundation powering our 5 proprietary products. From low-level embedded hardware and BLE telemetry to high-throughput cloud networks and local encrypted storage.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {capabilities.map((cap) => {
          const { Icon, title, description, products, tag } = cap;
          return (
            <div key={title} className="h-full">
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between h-full group" withCorners>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl dark:bg-titanium-800 bg-sand-border/50 border dark:border-white/10 border-sand-border text-citron flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border text-citron font-semibold">
                      {tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold dark:text-white text-sand-charcoal mb-2 font-mono group-hover:text-citron transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed mb-4 font-normal">
                    {description}
                  </p>
                </div>

                <div className="pt-4 border-t dark:border-white/10 border-sand-border text-xs font-mono text-citron flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-citron" />
                  <span>{products}</span>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>

      {/* Unified Technology Stack & Production-Grade Tooling Matrix */}
      <div>
        <SpotlightCard className="p-6 sm:p-8 lg:p-10" withCorners>
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b dark:border-white/10 border-sand-border mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citron mb-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-citron animate-pulse" />
                <span>SYSTEM ARSENAL // PRODUCTION-GRADE TOOLING</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold dark:text-white text-sand-charcoal font-mono tracking-tight">
                Battle-Tested Engineering Ecosystem
              </h4>
              <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 mt-1 max-w-xl leading-relaxed">
                Zero bloat. High-performance tooling powering embedded hardware firmware, offline-encrypted mobile vaults, and distributed cloud backends.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold dark:bg-titanium-800 bg-sand-border/80 text-citron border dark:border-white/10 border-sand-border shadow-sm">
                100% IN-HOUSE IP
              </span>
            </div>
          </div>

          {/* 4 Architectural Columns / Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Mobile & Client Architecture */}
            <div className="p-4 sm:p-5 rounded-xl dark:bg-titanium-950/60 bg-sand-border/30 border dark:border-white/5 border-sand-border flex flex-col justify-between group/col hover:border-citron/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    01 // Mobile Engines
                  </span>
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-xs font-bold dark:text-white text-sand-charcoal font-mono mb-1">
                  60fps Native State
                </div>
                <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed mb-4">
                  Fluid, reactive cross-platform runtimes with zero startup lag.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { name: 'Flutter', icon: SiFlutter, color: 'text-citron' },
                    { name: 'Dart', icon: SiDart, color: 'text-cyan-400' },
                    { name: 'React Native', icon: FaReact, color: 'text-cyan-300' },
                    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
                  ].map((t) => {
                    const Icon = t.icon;
                    return (
                      <span
                        key={t.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border text-[10px] font-mono dark:text-titanium-200 text-sand-charcoal shadow-sm"
                      >
                        <Icon title={t.name} aria-label={t.name} role="img" className={`w-3 h-3 ${t.color}`} />
                        <span>{t.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="text-[10px] font-mono text-citron pt-2.5 border-t dark:border-white/5 border-sand-border/60">
                → Powering FISCLOK & Tastory
              </div>
            </div>

            {/* Column 2: Embedded IoT & Hardware */}
            <div className="p-4 sm:p-5 rounded-xl dark:bg-titanium-950/60 bg-sand-border/30 border dark:border-white/5 border-sand-border flex flex-col justify-between group/col hover:border-cyan-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    02 // Smart Hardware
                  </span>
                  <Cpu className="w-4 h-4 text-cyan-300" />
                </div>
                <div className="text-xs font-bold dark:text-white text-sand-charcoal font-mono mb-1">
                  BLE 5.3 & IMU Telemetry
                </div>
                <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed mb-4">
                  Low-power embedded sensor fusion and real-time haptic feedback.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { name: 'Embedded C++', icon: SiCplusplus, color: 'text-blue-400' },
                    { name: 'BLE 5.3', icon: Radio, color: 'text-cyan-300' },
                    { name: 'ESP32', icon: Cpu, color: 'text-emerald-400' },
                    { name: 'Sensor Fusion', icon: Compass, color: 'text-citron' },
                  ].map((t) => {
                    const Icon = t.icon;
                    return (
                      <span
                        key={t.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border text-[10px] font-mono dark:text-titanium-200 text-sand-charcoal shadow-sm"
                      >
                        <Icon title={t.name} aria-label={t.name} role="img" className={`w-3 h-3 ${t.color}`} />
                        <span>{t.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="text-[10px] font-mono text-cyan-300 pt-2.5 border-t dark:border-white/5 border-sand-border/60">
                → Powering Project ROW
              </div>
            </div>

            {/* Column 3: Local-First Privacy & Encryption */}
            <div className="p-4 sm:p-5 rounded-xl dark:bg-titanium-950/60 bg-sand-border/30 border dark:border-white/5 border-sand-border flex flex-col justify-between group/col hover:border-emerald-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    03 // Local Encryption
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs font-bold dark:text-white text-sand-charcoal font-mono mb-1">
                  Zero-Knowledge Vaults
                </div>
                <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed mb-4">
                  Strict on-device encrypted storage with zero corporate telemetry.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { name: 'MMKV Storage', icon: Lock, color: 'text-emerald-400' },
                    { name: 'SQLite', icon: SiSqlite, color: 'text-cyan-300' },
                    { name: 'Encrypted Keys', icon: Shield, color: 'text-coral' },
                    { name: 'Google Drive Sync', icon: Database, color: 'text-citron' },
                  ].map((t) => {
                    const Icon = t.icon;
                    return (
                      <span
                        key={t.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border text-[10px] font-mono dark:text-titanium-200 text-sand-charcoal shadow-sm"
                      >
                        <Icon title={t.name} aria-label={t.name} role="img" className={`w-3 h-3 ${t.color}`} />
                        <span>{t.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="text-[10px] font-mono text-emerald-400 pt-2.5 border-t dark:border-white/5 border-sand-border/60">
                → Core DNA of FISCLOK
              </div>
            </div>

            {/* Column 4: AI Vectors & Cloud Infrastructure */}
            <div className="p-4 sm:p-5 rounded-xl dark:bg-titanium-950/60 bg-sand-border/30 border dark:border-white/5 border-sand-border flex flex-col justify-between group/col hover:border-purple-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                    04 // AI & Cloud Systems
                  </span>
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-xs font-bold dark:text-white text-sand-charcoal font-mono mb-1">
                  Vector Graphs & APIs
                </div>
                <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed mb-4">
                  High-throughput taste matching, clinical pipelines, and sync.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    { name: 'Python & FastAPI', icon: FaPython, color: 'text-yellow-400' },
                    { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-400' },
                    { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-400' },
                    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
                  ].map((t) => {
                    const Icon = t.icon;
                    return (
                      <span
                        key={t.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border text-[10px] font-mono dark:text-titanium-200 text-sand-charcoal shadow-sm"
                      >
                        <Icon title={t.name} aria-label={t.name} role="img" className={`w-3 h-3 ${t.color}`} />
                        <span>{t.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="text-[10px] font-mono text-purple-400 pt-2.5 border-t dark:border-white/5 border-sand-border/60">
                → Powering Tastory & DocCo
              </div>
            </div>
          </div>

          {/* Bottom Architectural Guarantee Strip */}
          <div className="mt-8 pt-6 border-t dark:border-white/10 border-sand-border flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/70">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Third-Party Trackers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-citron" />
                <span>Offline-Capable Architecture</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Native Hardware Acceleration</span>
              </span>
            </div>

            <div className="text-citron font-semibold">
              <span>ASTRIORB VERIFIED RUNTIME</span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Services;
