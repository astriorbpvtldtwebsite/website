import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  Compass,
  Layers,
  Activity,
  ArrowRight,
  ExternalLink,
  Download,
  Sliders,
  Cpu,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { products } from '../data/productsData';
import SpotlightCard from './SpotlightCard';

const HomeProductsPreview = () => {
  const getProductIcon = (id) => {
    switch (id) {
      case 'fisclok':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'tastory':
        return <Sparkles className="w-5 h-5 text-citron" />;
      case 'docCo':
      case 'docco':
        return <Activity className="w-5 h-5 text-laser-cyan" />;
      case 'continuum':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'row':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-citron" />;
    }
  };

  const getStatusBadge = (status, version) => {
    switch (status) {
      case 'live':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live on Play Store ({version})
          </span>
        );
      case 'flagship-mvp':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-citron/15 text-citron border border-citron/30">
            <span className="w-1.5 h-1.5 rounded-full bg-citron animate-pulse" />
            Flagship • Seed Round
          </span>
        );
      case 'client-phase':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-laser-cyan/15 text-laser-cyan border border-laser-cyan/30">
            <CheckCircle2 className="w-3 h-3" />
            Clinical Protocol Phase
          </span>
        );
      case 'mvp-testing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/30">
            <Clock className="w-3 h-3" />
            Architecture & Design v1.4
          </span>
        );
      case 'hardware-prototype':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5" />
            Hardware Lab // Prototype v2
          </span>
        );
      default:
        return null;
    }
  };

  // Group products into 2 Leading/Flagship cards on top, and 3 Specialized ventures below
  const leadingProducts = products.filter((p) => p.id === 'tastory' || p.id === 'fisclok');
  const specializedProducts = products.filter((p) => p.id !== 'tastory' && p.id !== 'fisclok');

  const renderProductCard = (p, isLarge = false) => (
    <motion.div
      key={p.id}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full flex flex-col"
    >
      <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between group border dark:border-white/10 border-sand-border dark:bg-titanium-900/60 bg-white/80" withCorners>
        <div>
          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl dark:bg-titanium-800 bg-sand-border/60 border dark:border-white/10 border-sand-border flex items-center justify-center shadow-sm">
                {getProductIcon(p.id)}
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-citron font-semibold">
                {p.category}
              </span>
            </div>
            <div>{getStatusBadge(p.status, p.version)}</div>
          </div>

          {/* Product Name & Tagline */}
          <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-sand-charcoal font-mono tracking-tight mb-1 group-hover:text-citron transition-colors">
            {p.name}
          </h3>
          <p className="text-xs font-mono text-citron font-semibold mb-4">
            {p.tagline}
          </p>

          {/* Core Description */}
          <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/85 leading-relaxed font-normal mb-5">
            {p.shortDescription}
          </p>

          {/* Problem & Architectural Solution Pill */}
          <div className="p-3.5 rounded-xl dark:bg-titanium-950/70 bg-sand-border/30 border dark:border-white/5 border-sand-border text-xs mb-5 space-y-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-coral font-bold block mb-0.5">
                FRICTION WE RESOLVE
              </span>
              <p className="dark:text-titanium-300 text-sand-charcoal/80 font-normal leading-relaxed text-[11px]">
                {p.problemStatement}
              </p>
            </div>
            <div className="pt-2 border-t dark:border-white/5 border-sand-border/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">
                ENGINEERING APPROACH
              </span>
              <p className="dark:text-titanium-300 text-sand-charcoal/80 font-normal leading-relaxed text-[11px]">
                {p.solutionOverview}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {p.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md dark:bg-titanium-800 bg-sand-border/50 border dark:border-white/10 border-sand-border text-[10px] font-mono dark:text-titanium-200 text-sand-charcoal font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Footer */}
        <div className="pt-4 border-t dark:border-white/10 border-sand-border flex items-center justify-between gap-3 mt-auto">
          <Link
            to={`/products?id=${p.id}`}
            className="text-xs font-mono font-semibold text-citron hover:text-citron-light transition-colors flex items-center gap-1.5 group/link"
          >
            <span>Explore Architecture</span>
            <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {p.playStoreUrl && (
            <a
              href={p.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <Download size={12} />
              <span>Play Store</span>
              <ExternalLink size={10} className="opacity-70" />
            </a>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );

  return (
    <section id="products-preview" className="py-24 relative overflow-hidden dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal transition-colors duration-300">
      {/* Background Ambient Engineering Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-normal sm:tracking-widest mb-4 shadow-sm max-w-full">
            <Layers className="w-3.5 h-3.5 text-citron shrink-0" />
            <span className="whitespace-nowrap truncate">PROPRIETARY PRODUCT ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-sand-charcoal tracking-tight mb-4">
            Five Purpose-Built Products. <br />
            <span className="text-citron">Engineered From Scratch.</span>
          </h2>
          <p className="text-base sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
            AstriOrb builds its own independent digital software and smart hardware solutions. Explore the core architectures below, or inspect comprehensive technical specifications in the Products Hub.
          </p>
        </div>

        {/* 1. TOP ROW: 2 Leading Products (Tastory & FISCLOK) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {leadingProducts.map((p) => renderProductCard(p, true))}
        </div>

        {/* 2. BOTTOM ROW: 3 Specialized Ventures (DocCo, Continuum, Project ROW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {specializedProducts.map((p) => renderProductCard(p, false))}
        </div>

        {/* 3. Refined Interactive Command Center Banner */}
        <div className="rounded-2xl border dark:border-white/10 border-sand-border dark:bg-titanium-900/80 bg-white shadow-xl backdrop-blur-xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full dark:bg-titanium-800 bg-sand-border/60 text-[10px] font-mono text-citron uppercase tracking-widest mb-2.5 border dark:border-white/5 border-sand-border">
              <span className="w-1.5 h-1.5 rounded-full bg-citron animate-pulse" />
              <span>PRODUCTION ARCHITECTURES</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-sand-charcoal tracking-tight font-mono">
              Explore Production Architectures & Blueprints
            </h3>
            <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 mt-1.5 leading-relaxed">
              Explore Tastory’s culinary vector space, inspect FISCLOK's zero-knowledge MMKV vault, review Project ROW’s ESP32 BLE posture telemetry, and examine complete architectural blueprints.
            </p>
          </div>

          <Link
            to="/products"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-md shadow-citron/20 hover:bg-citron-light hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 select-none"
          >
            <Layers size={15} />
            <span>EXPLORE PRODUCTS & BLUEPRINTS</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HomeProductsPreview);
