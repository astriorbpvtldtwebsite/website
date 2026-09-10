import React from 'react';
import {
  ShieldCheck,
  Download,
  ExternalLink,
  Lock,
  CheckCircle2,
  Layers,
  Star,
  EyeOff,
  CloudOff,
  FileCheck2,
  XCircle,
  Zap,
  DollarSign,
  Database,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';

const comparisons = [
  {
    icon: EyeOff,
    title: 'Zero Surveillance vs Data Mining',
    traditional: 'Forces phone/email account. Sells purchase habits to advertisers and credit brokerages.',
    fisclok: 'Zero accounts, zero tracking SDKs. Raw financial records never leave your local physical device.',
  },
  {
    icon: Zap,
    title: '< 0.15ms C++ mmap vs Cloud Latency',
    traditional: 'Sluggish SQL databases & remote server round-trips causing loading spinners on every entry.',
    fisclok: 'Ultra-fast Tencent C++ MMKV engine directly on sandboxed flash memory with instant UI response.',
  },
  {
    icon: DollarSign,
    title: '100% Free Forever vs $60/yr Paywalls',
    traditional: 'Locks loan tracking, custom categories, analytics, and CSV exports behind monthly subscriptions.',
    fisclok: '100% Free & Open Guarantee. Unlimited categories, lend/borrow ledger, multi-currency, and full exports.',
  },
  {
    icon: Database,
    title: 'You Own Your Data vs Cloud Lock-in',
    traditional: 'Trapped in proprietary cloud databases. If company pivots or servers crash, records are lost.',
    fisclok: 'Offline-first disk storage. Direct-to-Drive encrypted backup where only you hold the decryption keys.',
  },
];

const FisclokLiveSpotlight = ({ product, onOpenBlueprintModal }) => {
  if (!product) return null;

  return (
    <div id="fisclok" className="scroll-mt-32 mb-20">
      <SpotlightCard className="p-4 sm:p-8 lg:p-12 relative overflow-hidden" withCorners>
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none" />

        {/* Commercial Storefront Banner Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b dark:border-white/10 border-sand-border">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              COMMERCIAL LIVE APP // GOOGLE PLAY STORE
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck size={13} className="shrink-0" />
            <span>
              <span className="sm:hidden">v1.0.2 LIVE • UPDATE IN PREP</span>
              <span className="hidden sm:inline">VERSION 1.0.2 LIVE • MAJOR UPDATE IN PREPARATION</span>
            </span>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: App Identity & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* App Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-40 blur-md" />
                  <img
                    src="/fisclok_app_icon.png"
                    alt="FISCLOK App Icon"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-xl border border-white/20 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-obsidian text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
                    v1.0.2
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight dark:text-white text-sand-charcoal">
                    {product.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono mt-0.5">
                    {product.tagline}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5 text-xs text-amber-400 font-mono">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400" />
                    ))}
                    <span className="text-[11px] dark:text-titanium-400 text-sand-charcoal/70 ml-1">
                      (Play Store Verified)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed mb-6 font-normal">
                {product.shortDescription}
              </p>

              {/* Security Safeguards Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-bold mb-1">
                    <EyeOff size={13} />
                    <span>ZERO USER TRACKING</span>
                  </div>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80">
                    No analytics SDKs, no advertising trackers, and no telemetry payloads. Your data never leaves your device.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border">
                  <div className="flex items-center gap-1.5 text-citron text-xs font-mono font-bold mb-1">
                    <CloudOff size={13} />
                    <span>OPTIONAL DRIVE BACKUP</span>
                  </div>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80">
                    Backup is off by default. When enabled, syncs directly to your private Google Drive AppData folder — never our servers.
                  </p>
                </div>
              </div>

              {/* Core Feature List */}
              <div className="space-y-2 mb-6">
                {product.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border text-xs font-mono font-semibold dark:text-titanium-200 text-sand-charcoal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t dark:border-white/10 border-sand-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={product.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-mono font-bold bg-emerald-500 text-obsidian shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={15} />
                <span>INSTALL FROM GOOGLE PLAY</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>

              <button
                type="button"
                onClick={() => onOpenBlueprintModal(product)}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-emerald-400 hover:text-emerald-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Layers size={14} />
                <span>VIEW ARCHITECTURE</span>
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-3 sm:ml-auto text-xs font-mono pt-1 sm:pt-0">
                <Link
                  to={product.privacyUrl}
                  className="dark:text-titanium-400 text-sand-charcoal/70 hover:text-emerald-400 transition-colors underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                <span className="dark:text-titanium-600 text-sand-border">•</span>
                <Link
                  to={product.termsUrl}
                  className="dark:text-titanium-400 text-sand-charcoal/70 hover:text-emerald-400 transition-colors underline underline-offset-4"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Zero-Knowledge Security Architecture Console */}
          <div className="lg:col-span-6 dark:bg-titanium-950 bg-white rounded-2xl border dark:border-white/10 border-sand-border p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between shadow-md">
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b dark:border-white/10 border-sand-border">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-mono font-bold dark:text-white text-sand-charcoal uppercase">
                    ZERO-KNOWLEDGE MMKV VAULT // SPECS
                  </span>
                </div>
                <span className="self-start sm:self-auto text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 whitespace-nowrap">
                  AUDITED DEVICE ISOLATION
                </span>
              </div>

              {/* 4 Architectural Telemetry Metrics */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">NET FOOTPRINT</span>
                    <span className="hidden sm:inline">OUTBOUND NETWORK FOOTPRINT</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    0.00 KB
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    Air-gapped isolation
                  </span>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">RUNTIME ENGINE</span>
                    <span className="hidden sm:inline">PERSISTENCE RUNTIME</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-citron truncate block">
                    MMKV C++ mmap
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    &lt; 0.15ms local I/O
                  </span>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">ENCRYPTION</span>
                    <span className="hidden sm:inline">CIPHER ENCRYPTION</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold dark:text-white text-sand-charcoal block">
                    AES-256-GCM
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    Hardware Keystore
                  </span>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">APK SIZE</span>
                    <span className="hidden sm:inline">PACKAGE FOOTPRINT</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 block">
                    &lt; 14.5 MB APK
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    0 trackers
                  </span>
                </div>
              </div>

              {/* Cryptographic Execution Pipeline */}
              <div className="space-y-2.5 mb-6">
                <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider block">
                  CRYPTOGRAPHIC STORAGE PIPELINE // ON-DEVICE FLOW
                </span>

                <div className="p-3 rounded-xl dark:bg-titanium-900/80 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                      01
                    </div>
                    <span className="font-semibold dark:text-white text-sand-charcoal">
                      Local Memory-Mapped Storage (MMKV)
                    </span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-7.5">
                    Utilizes Tencent's high-efficiency C++ mmap engine directly on sandboxed internal storage, bypassing standard SQL overhead.
                  </p>
                </div>

                <div className="p-3 rounded-xl dark:bg-titanium-900/80 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <div className="w-5 h-5 rounded-md bg-citron/20 text-citron flex items-center justify-center font-bold text-[10px]">
                      02
                    </div>
                    <span className="font-semibold dark:text-white text-sand-charcoal">
                      Hardware Keystore Enclave Encryption
                    </span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-7.5">
                    AES-256-GCM master keys are stored exclusively inside the device's Hardware Security Module (HSM) — inaccessible to root or external apps.
                  </p>
                </div>

                <div className="p-3 rounded-xl dark:bg-titanium-900/80 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <div className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">
                      03
                    </div>
                    <span className="font-semibold dark:text-white text-sand-charcoal">
                      Direct-to-Drive Zero-Knowledge Sync
                    </span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-7.5">
                    When user opts into cloud backup, encrypted ciphertext is committed directly to the user's Google Drive via scoped tokens. Zero AstriOrb relay servers.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status strip */}
            <div className="pt-4 mt-6 border-t dark:border-white/10 border-sand-border flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
              <span className="flex items-center gap-1.5">
                <FileCheck2 size={13} className="text-emerald-400" />
                <span>Exodus Privacy Audit: 0 Trackers Detected</span>
              </span>
              <span className="text-emerald-400 font-bold">100% Free & Open Privacy Standard</span>
            </div>
          </div>
        </div>

        {/* Comprehensive Why Our Platform Is Better Section */}
        <div className="mt-10 pt-8 border-t dark:border-white/10 border-sand-border">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1">
                <ShieldCheck size={14} />
                <span>COMPETITIVE ARCHITECTURE AUDIT</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold dark:text-white text-sand-charcoal tracking-tight font-mono">
                Why FISCLOK Outperforms Traditional Finance Apps
              </h3>
            </div>
            <span className="text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70">
              No Subscriptions • No Cloud Surveillance • Zero Bloat
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-5 rounded-2xl dark:bg-titanium-950 bg-white border dark:border-white/10 border-sand-border flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 mb-3 font-mono font-bold text-xs">
                    <div className="p-2 rounded-lg dark:bg-titanium-900 bg-sand-light border dark:border-white/10 border-sand-border">
                      <item.icon size={15} />
                    </div>
                    <span>{item.title}</span>
                  </div>

                  {/* Traditional Apps Weakness */}
                  <div className="mb-3 p-3 rounded-xl dark:bg-obsidian dark:border-rose-500/20 bg-rose-50/70 border border-rose-200/60 text-xs">
                    <div className="flex items-center gap-1.5 text-rose-400 font-mono font-bold text-[10px] uppercase mb-1">
                      <XCircle size={12} className="shrink-0" />
                      <span>Traditional Apps</span>
                    </div>
                    <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed">
                      {item.traditional}
                    </p>
                  </div>

                  {/* FISCLOK Advantage */}
                  <div className="p-3 rounded-xl dark:bg-emerald-950/40 dark:border-emerald-500/30 bg-emerald-500/10 border border-emerald-500/30 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-[10px] uppercase mb-1">
                      <CheckCircle2 size={12} className="shrink-0" />
                      <span>FISCLOK Advantage</span>
                    </div>
                    <p className="text-[11px] dark:text-emerald-200 text-sand-charcoal/90 font-medium leading-relaxed">
                      {item.fisclok}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default React.memo(FisclokLiveSpotlight);
