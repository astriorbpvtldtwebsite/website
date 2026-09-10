import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Activity,
  Kanban,
  Compass,
  CheckCircle2,
  Clock,
  Layers,
  Terminal,
} from 'lucide-react';
import { products } from '../data/productsData';
import { useProjectModal } from '../contexts/ProjectModalContext';
import SpotlightCard from './SpotlightCard';

const ProductEcosystem = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState('all');
  const { openProjectModal } = useProjectModal();

  const categories = [
    { id: 'all', label: 'All 5 Products' },
    { id: 'FinTech & Mobile', label: 'FinTech (Live)' },
    { id: 'Social & Food Tech', label: 'Flagship: Tastory' },
    { id: 'HealthTech & Enterprise', label: 'HealthTech' },
    { id: 'Productivity & SaaS', label: 'Productivity' },
    { id: 'IoT & Smart Hardware', label: 'Hardware IoT' },
  ];

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((p) => p.category === activeTab);

  const getStatusBadge = (status, version) => {
    switch (status) {
      case 'live':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live on Play Store ({version})
          </span>
        );
      case 'flagship-mvp':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-citron/10 text-citron border border-citron/30">
            <Sparkles className="w-3.5 h-3.5" />
            Flagship • MVP Complete
          </span>
        );
      case 'client-phase':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-laser-cyan/10 text-laser-cyan border border-laser-cyan/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Clinical Research & Meetings
          </span>
        );
      case 'mvp-testing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Clock className="w-3.5 h-3.5" />
            MVP Beta Testing
          </span>
        );
      case 'hardware-prototype':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5" />
            App + Hardware Gadget in R&D
          </span>
        );
      default:
        return null;
    }
  };

  const getProductIcon = (id) => {
    switch (id) {
      case 'fisclok':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'tastory':
        return <Sparkles className="w-6 h-6 text-citron" />;
      case 'docco':
        return <Activity className="w-6 h-6 text-laser-cyan" />;
      case 'continuum':
        return <Kanban className="w-6 h-6 text-purple-400" />;
      case 'row':
        return <Compass className="w-6 h-6 text-cyan-400" />;
      default:
        return <Layers className="w-6 h-6 text-citron" />;
    }
  };

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden bg-obsidian text-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-titanium-800/80 border border-citron/30 mb-4">
            <Layers className="w-3.5 h-3.5 text-citron" />
            <span className="text-xs font-mono font-semibold text-citron uppercase tracking-wider">
              PROPRIETARY PRODUCT ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Five Pillars of Real-World Software & Hardware
          </h2>
          <p className="text-base sm:text-lg text-titanium-300 leading-relaxed font-normal">
            AstriOrb operates on a multi-product engineering model. We do not do client outsourcing work—we conceive, architect, and build high-impact proprietary software products and smart hardware innovations from Kerala.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-citron text-obsidian shadow-md shadow-citron/25'
                    : 'bg-titanium-900 border border-white/10 text-titanium-300 hover:text-white hover:border-citron/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Bento Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className={product.isFlagship ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <SpotlightCard
                  className="p-6 sm:p-7 h-full flex flex-col justify-between group"
                  withCorners
                >
                  <div>
                    {/* Top Bar: Icon + Status */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        {product.icon ? (
                          <img
                            src={product.icon}
                            alt={product.name}
                            className="w-12 h-12 rounded-xl shadow-md"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-titanium-800 border border-white/10 flex items-center justify-center">
                            {getProductIcon(product.id)}
                          </div>
                        )}
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-citron">
                            {product.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-citron transition-colors">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      <div className="shrink-0">{getStatusBadge(product.status, product.version)}</div>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm font-semibold text-citron mb-3">
                      {product.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-sm text-titanium-200 leading-relaxed mb-6 font-normal">
                      {product.shortDescription}
                    </p>

                    {/* Core Features Preview */}
                    <div className="space-y-2 mb-6">
                      {product.keyFeatures.slice(0, product.isFlagship ? 4 : 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-titanium-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-citron shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-titanium-800 border border-white/5 text-[11px] font-mono text-titanium-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    {product.playStoreUrl ? (
                      <a
                        href={product.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-obsidian shadow-md hover:bg-emerald-400 flex items-center gap-1.5 font-mono"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Play Store</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ) : product.isFlagship ? (
                      <button
                        onClick={openProjectModal}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-citron text-obsidian shadow-md hover:bg-citron-light flex items-center gap-1.5 font-mono"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Tastory Roadmap</span>
                      </button>
                    ) : null}

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="ml-auto text-xs font-mono font-semibold text-titanium-300 hover:text-citron transition-colors flex items-center gap-1"
                    >
                      <span>ARCH_OVERVIEW</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;
