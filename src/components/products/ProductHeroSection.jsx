import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Activity,
  Kanban,
  CheckCircle2,
} from 'lucide-react';

const stats = [
  {
    label: 'Live Commercial App',
    value: 'FISCLOK v1.0.2',
    sub: 'Active on Google Play',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
  },
  {
    label: 'Flagship Platform',
    value: 'Tastory MVP',
    sub: 'Seeking Seed Funding',
    icon: Sparkles,
    color: 'text-citron',
    borderColor: 'border-citron/30',
  },
  {
    label: 'Smart Posture Wearable',
    value: 'Project ROW v2',
    sub: 'Espressif ESP32 BLE',
    icon: Cpu,
    color: 'text-laser-cyan',
    borderColor: 'border-laser-cyan/30',
  },
  {
    label: 'Enterprise Clinical',
    value: 'DocCo Health',
    sub: 'Client Research Phase',
    icon: Activity,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
  },
  {
    label: 'Hybrid Founder OS',
    value: 'Continuum OS',
    sub: 'Tasks, Notes & Events',
    icon: Kanban,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
  },
];

const categories = [
  { id: 'all', label: 'All Products (5)', icon: Layers },
  { id: 'fisclok', label: 'FISCLOK', icon: ShieldCheck, badge: 'Live' },
  { id: 'tastory', label: 'Tastory', icon: Sparkles, badge: 'Flagship' },
  { id: 'row', label: 'Project ROW', icon: Cpu, badge: 'Hardware' },
  { id: 'docco', label: 'DocCo', icon: Activity, badge: 'Clinical' },
  { id: 'continuum', label: 'Continuum', icon: Kanban, badge: 'Founder OS' },
];

const ProductHeroSection = ({ activeCategory, onSelectCategory }) => {
  return (
    <section className="relative pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full dark:bg-titanium-800/90 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-normal sm:tracking-widest mb-4 sm:mb-5 shadow-sm max-w-full">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-citron animate-pulse shrink-0" />
            <span className="whitespace-nowrap truncate">
              <span className="sm:hidden">PORTFOLIO // 5 NODES</span>
              <span className="hidden sm:inline">ASTRIORB PRODUCT PORTFOLIO // 5 NODES</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-4 sm:mb-6 leading-tight">
            Proprietary Software & <br />
            <span className="bg-gradient-flame bg-clip-text text-transparent">
              Connected Smart Hardware
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg dark:text-titanium-300 text-sand-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-normal">
            We don't build generic SaaS templates. AstriOrb engineers standalone consumer platforms, zero-knowledge financial privacy tools, clinical healthcare systems, and bespoke ergonomic smart wearables — built from first principles.
          </p>
        </motion.div>

        {/* Live Portfolio Metrics Row (5 Products Matrix - Swipeable on Mobile, Grid on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:pb-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8 sm:mb-12 text-left"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[220px] xs:min-w-[250px] sm:min-w-0 snap-center p-3.5 sm:p-5 rounded-2xl dark:bg-titanium-900/80 bg-white/90 border dark:border-white/10 border-sand-border text-left relative overflow-hidden group hover:border-citron/50 transition-all duration-300 shadow-sm flex flex-col justify-between shrink-0 sm:shrink"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div className="text-sm sm:text-base font-bold font-mono dark:text-white text-sand-charcoal mb-0.5">
                  {item.value}
                </div>
              </div>
              <div className="text-[11px] dark:text-titanium-400 text-sand-charcoal/70 flex items-center gap-1 font-mono mt-2">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">{item.sub}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Well-Arranged Responsive Category Filter Bar (Swipeable on Mobile, Grid on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="p-1.5 sm:p-2 rounded-2xl dark:bg-titanium-900/90 bg-white/95 border dark:border-white/10 border-sand-border shadow-md backdrop-blur-xl">
            <div className="flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`shrink-0 sm:shrink flex items-center justify-center gap-1.5 px-3 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-mono font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap ${
                      isActive
                        ? 'bg-citron text-obsidian border-citron shadow-md shadow-citron/25 font-bold'
                        : 'dark:bg-titanium-850 dark:text-titanium-200 dark:border-white/10 bg-sand-light/80 text-sand-charcoal border-sand-border hover:dark:bg-titanium-800 hover:bg-white hover:border-citron/50'
                    }`}
                  >
                    <Icon size={13} className="shrink-0" />
                    <span>{cat.label}</span>
                    {cat.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-tight shrink-0 border ${
                          isActive
                            ? 'bg-obsidian/20 text-obsidian border-obsidian/20 font-bold'
                            : 'dark:bg-titanium-950 dark:text-citron dark:border-citron/30 bg-sand-border/70 text-sand-charcoal/80 border-sand-border'
                        }`}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ProductHeroSection);
