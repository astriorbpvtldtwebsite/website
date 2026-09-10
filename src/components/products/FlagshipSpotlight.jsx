import React from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Utensils,
  Layers,
  Database,
  Cpu,
  Zap,
  Activity,
  Share2,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const FlagshipSpotlight = ({ product, onOpenTastoryModal, onOpenBlueprintModal }) => {
  if (!product) return null;

  return (
    <div id="tastory" className="scroll-mt-32 mb-20">
      <SpotlightCard className="p-4 sm:p-8 lg:p-12 relative overflow-hidden" withCorners>
        {/* Background Subtle Gradient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-citron-dim blur-[140px] pointer-events-none" />

        {/* Flagship Banner Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b dark:border-white/10 border-sand-border">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-citron animate-ping shrink-0" />
            <span className="text-xs font-mono uppercase tracking-widest text-citron font-bold">
              ASTRIORB FLAGSHIP VENTURE // SOCIAL CULINARY PLATFORM
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-citron/15 text-citron border border-citron/30">
            <Sparkles size={13} className="shrink-0" />
            <span>
              <span className="sm:hidden">MVP DONE • SEED ROUND</span>
              <span className="hidden sm:inline">MVP COMPLETE • SEEKING SEED ROUND</span>
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Left Narrative + Right Architectural Specs Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Product Value & Architecture Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-2 sm:mb-3">
                {product.name}
              </h2>
              <p className="text-xs sm:text-base font-mono text-citron font-medium mb-3 sm:mb-4">
                {product.tagline}
              </p>

              <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed font-normal mb-6">
                {product.shortDescription}
              </p>

              {/* Problem vs Solution High-Impact Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-3.5 sm:p-4 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-flame-coral font-bold uppercase">
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                    {product.problemStatement}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-citron font-bold uppercase">
                    <span>The AstriOrb Solution</span>
                  </div>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                    {product.solutionOverview}
                  </p>
                </div>
              </div>

              {/* Core Feature Matrix */}
              <div className="space-y-2.5 mb-6">
                <span className="text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider block mb-2">
                  Key Engineering Capabilities
                </span>
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs dark:text-titanium-200 text-sand-charcoal/85 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Production Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 rounded-lg dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border text-xs font-mono dark:text-titanium-300 text-sand-charcoal shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t dark:border-white/10 border-sand-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenTastoryModal}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={15} className="shrink-0" />
                <span>
                  <span className="sm:hidden">REQUEST PITCH DECK</span>
                  <span className="hidden sm:inline">REQUEST TASTORY PITCH DECK</span>
                </span>
                <ArrowRight size={14} className="shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => onOpenBlueprintModal(product)}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-citron hover:text-citron transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Layers size={14} className="shrink-0" />
                <span>TECHNICAL BLUEPRINT</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Vector Engine & Production Specs Console */}
          <div className="lg:col-span-6 dark:bg-titanium-950 bg-white rounded-2xl border dark:border-white/10 border-sand-border p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between shadow-md">
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b dark:border-white/10 border-sand-border">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-citron shrink-0" />
                  <span className="text-[11px] sm:text-xs font-mono font-bold dark:text-white text-sand-charcoal uppercase">
                    CULINARY VECTOR GRAPH // SPECS
                  </span>
                </div>
                <span className="self-start sm:self-auto text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-citron/15 text-citron border border-citron/25 font-bold whitespace-nowrap">
                  PRODUCTION READY
                </span>
              </div>

              {/* 3 Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-6">
                <div className="p-2 sm:p-3 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">LATENCY</span>
                    <span className="hidden sm:inline">MATCH LATENCY</span>
                  </span>
                  <span className="text-xs sm:text-lg font-mono font-bold text-citron flex items-center gap-1">
                    <Zap size={12} className="text-citron shrink-0" />
                    &lt; 24ms
                  </span>
                  <span className="text-[9px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mt-0.5 truncate">
                    <span className="sm:hidden">Cosine</span>
                    <span className="hidden sm:inline">Realtime Cosine</span>
                  </span>
                </div>

                <div className="p-2 sm:p-3 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">UI FPS</span>
                    <span className="hidden sm:inline">UI RENDERING</span>
                  </span>
                  <span className="text-xs sm:text-lg font-mono font-bold text-emerald-400 flex items-center gap-1">
                    <Activity size={12} className="text-emerald-400 shrink-0" />
                    60 FPS
                  </span>
                  <span className="text-[9px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mt-0.5 truncate">
                    <span className="sm:hidden">Skia Native</span>
                    <span className="hidden sm:inline">Flutter Skia Native</span>
                  </span>
                </div>

                <div className="p-2 sm:p-3 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">VECTORS</span>
                    <span className="hidden sm:inline">VECTOR SPACE</span>
                  </span>
                  <span className="text-xs sm:text-lg font-mono font-bold text-blue-400 flex items-center gap-1">
                    <Database size={12} className="text-blue-400 shrink-0" />
                    128-DIM
                  </span>
                  <span className="text-[9px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mt-0.5 truncate">
                    <span className="sm:hidden">Flavor Space</span>
                    <span className="hidden sm:inline">Flavor Coordinate</span>
                  </span>
                </div>
              </div>

              {/* 3-Tier Production Architecture Breakdown */}
              <div className="space-y-3 mb-6">
                <span className="text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider block">
                  Core Architectural Pipeline
                </span>

                <div className="p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-citron/15 text-citron flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h5 className="text-xs font-bold font-mono dark:text-white text-sand-charcoal">
                      Multi-Dimensional Taste Quantization
                    </h5>
                    <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed mt-0.5">
                      Extracts 128 continuous sensory weights from recipes (acidity, umami, pungency, sweetness, aroma volatiles) into indexed vector clusters.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h5 className="text-xs font-bold font-mono dark:text-white text-sand-charcoal">
                      Social Culinary Knowledge Graph
                    </h5>
                    <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed mt-0.5">
                      Connects user culinary palettes with authentic regional heritage recipes, smart ingredient substitutions, and creator-curated collections.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h5 className="text-xs font-bold font-mono dark:text-white text-sand-charcoal">
                      Offline-Cached Kitchen Navigation Engine
                    </h5>
                    <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 leading-relaxed mt-0.5">
                      Hands-free step-by-step cooking assistance cached locally on-device for instantaneous execution even in dead-zone kitchens.
                    </p>
                  </div>
                </div>
              </div>

              {/* Traction & Funding Badge */}
              <div className="p-4 rounded-xl dark:bg-titanium-900/90 bg-white border dark:border-citron/20 border-citron/30 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-citron font-bold uppercase tracking-wider block">
                    INVESTMENT TRACTION STATUS
                  </span>
                  <span className="text-xs font-mono dark:text-titanium-200 text-sand-charcoal font-semibold">
                    Full MVP Built • Actively Engaging Angel & Pre-Seed Syndicates
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onOpenTastoryModal}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-citron/15 hover:bg-citron/25 text-citron transition-colors cursor-pointer shrink-0"
                >
                  View Deck →
                </button>
              </div>
            </div>

            {/* Bottom Status strip */}
            <div className="pt-4 mt-6 border-t dark:border-white/10 border-sand-border flex items-center justify-between text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
              <span>Flutter + Firebase + Algolia Cluster</span>
              <span className="text-citron font-bold">100% AstriOrb In-House IP</span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default React.memo(FlagshipSpotlight);
