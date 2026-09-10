import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  ShieldCheck,
  Zap,
  Sparkles,
  Compass,
  Radio,
  Layers,
  Activity,
  Download,
  ExternalLink,
  CheckCircle2,
  Lock,
  Database,
  RefreshCw,
  Sliders,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Cpu,
  Kanban,
  Clock,
} from 'lucide-react';
import { products } from '../data/productsData';
import { useProjectModal } from '../contexts/ProjectModalContext';
import SpotlightCard from './SpotlightCard';

const ProductCommandCenter = ({ onSelectProduct, initialProductId }) => {
  const [searchParams] = useSearchParams();
  const queryProduct = searchParams.get('id');

  const [activeProductId, setActiveProductId] = useState(
    () => queryProduct || initialProductId || 'tastory'
  );

  useEffect(() => {
    if (queryProduct && products.some((p) => p.id === queryProduct)) {
      setActiveProductId(queryProduct);
    }
  }, [queryProduct]);

  const { openProjectModal } = useProjectModal();

  const activeProduct = useMemo(
    () => products.find((p) => p.id === activeProductId) || products[0],
    [activeProductId]
  );

  // -------------------------------------------------------------
  // 1. TASTORY SIMULATION STATE (Taste Radar)
  // -------------------------------------------------------------
  const [tastoryFlavor, setTastoryFlavor] = useState({
    sweet: 35,
    umami: 80,
    heat: 65,
    zest: 50,
  });

  const matchedRecipe = useMemo(() => {
    const { sweet, umami, heat, zest } = tastoryFlavor;
    if (heat > 70 && umami > 60) {
      return {
        title: 'Malabar Black Pepper Wood-Fired Duck',
        tags: ['High Heat', 'Deep Umami', 'Coastal Spice'],
        match: 98,
        prep: '28 min',
        profile: 'Fiery & Savory Fusion',
      };
    } else if (sweet > 60 && zest > 50) {
      return {
        title: 'Wild Cardamom & Kaffir Lime Glaze Brioche',
        tags: ['Citrus Zest', 'Cardamom', 'Artisan Bakery'],
        match: 95,
        prep: '18 min',
        profile: 'Sweet Tangy Aromatic',
      };
    } else if (umami > 75) {
      return {
        title: 'Slow-Smoked Wild Morel & Truffle Risotto',
        tags: ['Forest Umami', 'Velvety', 'Slow Simmer'],
        match: 99,
        prep: '35 min',
        profile: 'Earthy & Rich Comfort',
      };
    } else {
      return {
        title: 'Smoked Tamarind Ginger Glazed Seabass',
        tags: ['Balanced Zest', 'Warm Ginger', 'Pan-Seared'],
        match: 92,
        prep: '22 min',
        profile: 'Harmonic Spice & Citrus',
      };
    }
  }, [tastoryFlavor]);

  // -------------------------------------------------------------
  // 2. FISCLOK SIMULATION STATE (MMKV Vault)
  // -------------------------------------------------------------
  const [expenseInput, setExpenseInput] = useState({ amount: '450', note: 'Team Server Hosting' });
  const [encryptedLogs, setEncryptedLogs] = useState([
    { id: 'TX_901', amount: '₹1,200', note: 'Development Assets', cipher: 'e7a1..b98c (MMKV Encrypted)' },
    { id: 'TX_902', amount: '₹340', note: 'Coffee & Prototyping', cipher: '4f22..9a01 (MMKV Encrypted)' },
  ]);
  const [isEncrypting, setIsEncrypting] = useState(false);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseInput.amount) return;
    setIsEncrypting(true);
    setTimeout(() => {
      const newEntry = {
        id: `TX_${Math.floor(Math.random() * 899 + 100)}`,
        amount: `₹${expenseInput.amount}`,
        note: expenseInput.note || 'Expense',
        cipher: `${Math.random().toString(36).substring(2, 6)}..${Math.random().toString(36).substring(2, 6)} (MMKV Encrypted)`,
      };
      setEncryptedLogs((prev) => [newEntry, ...prev.slice(0, 2)]);
      setIsEncrypting(false);
      setExpenseInput({ amount: '', note: '' });
    }, 400);
  };

  // -------------------------------------------------------------
  // 3. PROJECT ROW SIMULATION STATE (BLE Telemetry)
  // -------------------------------------------------------------
  const [rowTelemetry, setRowTelemetry] = useState({
    heading: 312,
    speed: 48,
    distanceNext: 140,
    turn: 'Right on Horizon Way',
    rssi: -44,
    battery: 92,
  });

  const handleSimulateTurn = () => {
    setRowTelemetry((prev) => ({
      ...prev,
      heading: (prev.heading + 45) % 360,
      speed: Math.floor(Math.random() * 15 + 40),
      distanceNext: Math.floor(Math.random() * 200 + 80),
      turn: prev.turn.includes('Right') ? 'Left onto Quantum Parkway' : 'Right on Horizon Way',
      rssi: Math.floor(Math.random() * 6 - 48),
    }));
  };

  // -------------------------------------------------------------
  // 4. DOCCO SIMULATION STATE
  // -------------------------------------------------------------
  const [doccoStep, setDoccoStep] = useState(1);

  // -------------------------------------------------------------
  // 5. CONTINUUM SIMULATION STATE
  // -------------------------------------------------------------
  const [sprintTaskCount, setSprintTaskCount] = useState(8);

  const getProductIcon = (id) => {
    switch (id) {
      case 'tastory':
        return <Sparkles className="w-5 h-5 text-citron" />;
      case 'fisclok':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'row':
        return <Compass className="w-5 h-5 text-laser-cyan" />;
      case 'continuum':
        return <Kanban className="w-5 h-5 text-purple-400" />;
      case 'docco':
        return <Activity className="w-5 h-5 text-laser-cyan" />;
      default:
        return <Layers className="w-5 h-5 text-citron" />;
    }
  };

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

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal transition-colors duration-300">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-citron-dim blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-xs font-mono text-citron uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-citron" />
            <span>UNIFIED PRODUCT COMMAND CENTER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-sand-charcoal tracking-tight mb-4">
            Five Proprietary Products. <br />
            <span className="text-citron">Interactively Tested & Verified.</span>
          </h2>
          <p className="text-base sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
            We don't just write feature lists. Select any product below to inspect its architecture, problem-solution blueprint, and test its live interactive simulation in real-time.
          </p>
        </div>

        {/* 5-Product Interactive Navigation Dock */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-3 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl dark:bg-titanium-900/90 bg-sand-border/60 border dark:border-white/10 border-sand-border backdrop-blur-2xl gap-1">
            {products.map((p) => {
              const isActive = activeProductId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProductId(p.id)}
                  className={`relative flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-mono font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-citron text-obsidian shadow-lg shadow-citron/25'
                      : 'dark:text-titanium-300 text-sand-charcoal/70 dark:hover:text-white hover:text-sand-plum dark:hover:bg-white/5 hover:bg-sand-border/50'
                  }`}
                >
                  {getProductIcon(p.id)}
                  <span className="text-sm font-bold">{p.name}</span>
                  {p.isFlagship && (
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded uppercase ${
                        isActive ? 'bg-obsidian/20 text-obsidian' : 'bg-citron/15 text-citron'
                      }`}
                    >
                      Flagship
                    </span>
                  )}
                  {p.status === 'live' && (
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded uppercase ${
                        isActive ? 'bg-obsidian/20 text-obsidian' : 'bg-emerald-500/15 text-emerald-400'
                      }`}
                    >
                      Live
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Unified Hybrid Console (Active Product + Live Simulator Side-by-Side) */}
        <div className="w-full mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard className="p-6 sm:p-8 lg:p-10" withCorners>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                  {/* Left Column: Product Blueprint & Actions */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-citron">
                          {activeProduct.category}
                        </span>
                        <div>{getStatusBadge(activeProduct.status, activeProduct.version)}</div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-sand-charcoal tracking-tight mb-2">
                        {activeProduct.name}
                      </h3>
                      <p className="text-sm font-semibold text-citron mb-4 font-mono">
                        {activeProduct.tagline}
                      </p>
                      <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed font-normal mb-6">
                        {activeProduct.shortDescription}
                      </p>

                      {/* Problem vs Solution High-Tech Tabs */}
                      <div className="space-y-3 mb-6">
                        <div className="p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border text-xs">
                          <div className="flex items-center gap-1.5 text-rose-400 font-mono font-semibold mb-1">
                            <HelpCircle size={13} />
                            <span>THE REAL-WORLD PROBLEM</span>
                          </div>
                          <p className="dark:text-titanium-300 text-sand-charcoal/80 font-normal leading-relaxed">
                            {activeProduct.problemStatement}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border text-xs">
                          <div className="flex items-center gap-1.5 text-citron font-mono font-semibold mb-1">
                            <Lightbulb size={13} />
                            <span>OUR ARCHITECTURAL SOLUTION</span>
                          </div>
                          <p className="dark:text-titanium-300 text-sand-charcoal/80 font-normal leading-relaxed">
                            {activeProduct.solutionOverview}
                          </p>
                        </div>
                      </div>

                      {/* Key Capabilities */}
                      <div className="space-y-2 mb-6">
                        {activeProduct.keyFeatures.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs dark:text-titanium-300 text-sand-charcoal/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-citron shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {activeProduct.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md dark:bg-titanium-800 bg-sand-border/40 border dark:border-white/5 border-sand-border text-[11px] font-mono dark:text-titanium-300 text-sand-charcoal"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Primary Action Buttons */}
                    <div className="pt-5 border-t dark:border-white/10 border-sand-border flex flex-wrap items-center gap-3">
                      {activeProduct.playStoreUrl && (
                        <a
                          href={activeProduct.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-emerald-500 text-obsidian shadow-md hover:bg-emerald-400 flex items-center gap-1.5"
                        >
                          <Download size={14} />
                          <span>INSTALL ON PLAY STORE</span>
                          <ExternalLink size={12} className="opacity-70" />
                        </a>
                      )}

                      {activeProduct.isFlagship && (
                        <button
                          onClick={openProjectModal}
                          className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-citron text-obsidian shadow-md hover:bg-citron-light flex items-center gap-1.5"
                        >
                          <Sparkles size={14} />
                          <span>TASTORY PITCH DECK</span>
                        </button>
                      )}

                      <button
                        onClick={() => onSelectProduct(activeProduct)}
                        className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-citron hover:text-citron transition-colors flex items-center gap-1.5"
                      >
                        <span>FULL ARCHITECTURE</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Sandbox / Telemetry */}
                  <div className="lg:col-span-6 dark:bg-titanium-900/90 bg-white/95 rounded-2xl border dark:border-white/10 border-sand-border p-6 flex flex-col justify-between shadow-sm">
                    {/* Header of Sandbox */}
                    <div className="flex items-center justify-between border-b dark:border-white/10 border-sand-border pb-3 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-citron animate-ping" />
                        <span className="text-xs font-mono font-bold dark:text-white text-sand-charcoal uppercase">
                          LIVE ARCHITECTURAL SIMULATION
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-citron bg-citron/10 px-2 py-0.5 rounded border border-citron/20">
                        {activeProduct.id.toUpperCase()}_RUNTIME
                      </span>
                    </div>

                    {/* DYNAMIC SANDBOX CONTENT PER PRODUCT */}
                    <div className="flex-grow flex flex-col justify-center">
                      {/* 1. TASTORY SANDBOX */}
                      {activeProduct.id === 'tastory' && (
                        <div className="space-y-4">
                          <p className="text-xs text-titanium-300 mb-2">
                            Adjust sensory coordinates to test Tastory's dynamic taste-matching neural algorithm:
                          </p>

                          <div className="space-y-2">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-titanium-300">Sweetness Balance</span>
                              <span className="text-citron font-bold">{tastoryFlavor.sweet}%</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={tastoryFlavor.sweet}
                              onChange={(e) =>
                                setTastoryFlavor((p) => ({ ...p, sweet: Number(e.target.value) }))
                              }
                              className="w-full accent-[#EA9216] cursor-pointer h-1.5 bg-titanium-800 rounded-lg"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-titanium-300">Umami Depth</span>
                              <span className="text-citron font-bold">{tastoryFlavor.umami}%</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={tastoryFlavor.umami}
                              onChange={(e) =>
                                setTastoryFlavor((p) => ({ ...p, umami: Number(e.target.value) }))
                              }
                              className="w-full accent-[#EA9216] cursor-pointer h-1.5 bg-titanium-800 rounded-lg"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-titanium-300">Spice & Heat</span>
                              <span className="text-citron font-bold">{tastoryFlavor.heat}%</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={tastoryFlavor.heat}
                              onChange={(e) =>
                                setTastoryFlavor((p) => ({ ...p, heat: Number(e.target.value) }))
                              }
                              className="w-full accent-[#EA9216] cursor-pointer h-1.5 bg-titanium-800 rounded-lg"
                            />
                          </div>

                          {/* Synthesized Output Box */}
                          <div className="mt-5 p-4 rounded-xl bg-titanium-800 border border-white/10">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-mono text-titanium-400">
                                SYNTHESIZED COMMUNITY MATCH
                              </span>
                              <span className="text-xs font-mono text-citron font-bold">
                                {matchedRecipe.match}% MATCH
                              </span>
                            </div>
                            <div className="text-sm font-bold text-white mb-1 font-mono">
                              {matchedRecipe.title}
                            </div>
                            <div className="text-[11px] text-titanium-300">
                              Profile: {matchedRecipe.profile} • Prep: {matchedRecipe.prep}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. FISCLOK SANDBOX */}
                      {activeProduct.id === 'fisclok' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div className="p-3 rounded-xl bg-titanium-800 border border-white/5">
                              <span className="text-[10px] font-mono text-titanium-400 block">
                                OUTBOUND NETWORK
                              </span>
                              <span className="text-sm font-mono font-bold text-emerald-400">
                                0.00 KB (ISOLATED)
                              </span>
                            </div>
                            <div className="p-3 rounded-xl bg-titanium-800 border border-white/5">
                              <span className="text-[10px] font-mono text-titanium-400 block">
                                ENCRYPTION CIPHER
                              </span>
                              <span className="text-sm font-mono font-bold text-citron">
                                MMKV AES-256-GCM
                              </span>
                            </div>
                          </div>

                          <form onSubmit={handleAddExpense} className="space-y-2.5">
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="number"
                                value={expenseInput.amount}
                                onChange={(e) =>
                                  setExpenseInput((p) => ({ ...p, amount: e.target.value }))
                                }
                                placeholder="Amount (₹)"
                                className="px-3 py-2 bg-titanium-800 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-citron font-mono"
                              />
                              <input
                                type="text"
                                value={expenseInput.note}
                                onChange={(e) =>
                                  setExpenseInput((p) => ({ ...p, note: e.target.value }))
                                }
                                placeholder="Category"
                                className="px-3 py-2 bg-titanium-800 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-citron font-mono"
                              />
                            </div>

                            <button
                              type="submit"
                              disabled={isEncrypting}
                              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-obsidian transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 font-mono"
                            >
                              {isEncrypting ? (
                                <>
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                  <span>ENCRYPTING LOCALLY...</span>
                                </>
                              ) : (
                                <>
                                  <Lock className="w-3.5 h-3.5" />
                                  <span>COMMIT TO LOCAL MMKV</span>
                                </>
                              )}
                            </button>
                          </form>

                          {/* Cipher Stream */}
                          <div className="space-y-1.5 mt-2">
                            {encryptedLogs.map((log) => (
                              <div
                                key={log.id}
                                className="p-2 rounded-lg bg-titanium-800/80 border border-white/5 flex items-center justify-between text-xs font-mono"
                              >
                                <div className="flex items-center gap-2">
                                  <Database className="w-3.5 h-3.5 text-citron shrink-0" />
                                  <span className="text-white font-bold">{log.amount}</span>
                                  <span className="text-titanium-400">{log.note}</span>
                                </div>
                                <span className="text-[10px] text-titanium-400">{log.cipher}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 3. PROJECT ROW SANDBOX */}
                      {activeProduct.id === 'row' && (
                        <div className="space-y-4 flex flex-col items-center">
                          {/* Compass HUD */}
                          <div className="w-36 h-36 rounded-full border border-laser-cyan/30 flex items-center justify-center relative my-2">
                            <div className="absolute inset-2 rounded-full border border-laser-cyan/20" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-laser-cyan/10 to-transparent animate-spin duration-[4000ms] pointer-events-none" />

                            <motion.div
                              animate={{ rotate: rowTelemetry.heading }}
                              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                              className="w-1 h-16 bg-gradient-to-t from-transparent via-laser-cyan to-citron rounded-full relative"
                            >
                              <div className="w-2 h-2 rounded-full bg-citron absolute -top-1 -left-0.5 shadow-[0_0_8px_#EA9216]" />
                            </motion.div>

                            <span className="absolute bottom-1 text-[10px] font-mono text-citron font-bold">
                              {rowTelemetry.heading}° HDG
                            </span>
                          </div>

                          {/* Telemetry Status Bar */}
                          <div className="w-full grid grid-cols-2 gap-2 text-xs font-mono">
                            <div className="p-2.5 rounded-xl bg-titanium-800 border border-white/5">
                              <span className="text-[10px] text-titanium-400 block">BLE RF RSSI</span>
                              <span className="text-citron font-bold">{rowTelemetry.rssi} dBm</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-titanium-800 border border-white/5">
                              <span className="text-[10px] text-titanium-400 block">HARDWARE BATTERY</span>
                              <span className="text-emerald-400 font-bold">{rowTelemetry.battery}%</span>
                            </div>
                          </div>

                          <button
                            onClick={handleSimulateTurn}
                            className="w-full py-2.5 rounded-xl text-xs font-semibold bg-laser-cyan text-obsidian hover:bg-cyan-300 transition-all shadow-md shadow-laser-cyan/20 flex items-center justify-center gap-2 font-mono"
                          >
                            <Compass className="w-3.5 h-3.5" />
                            <span>TRANSMIT WAYPOINT TO GADGET</span>
                          </button>
                        </div>
                      )}

                      {/* 4. CONTINUUM SANDBOX */}
                      {activeProduct.id === 'continuum' && (
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-titanium-800 border border-white/10">
                            <div className="flex items-center justify-between text-xs font-mono mb-2">
                              <span className="text-titanium-300">PARALLEL SPRINT VELOCITY</span>
                              <span className="text-purple-400 font-bold">98.4% ON SCHEDULE</span>
                            </div>
                            <div className="w-full h-2 bg-titanium-900 rounded-full overflow-hidden">
                              <div className="w-4/5 h-full bg-purple-500 rounded-full" />
                            </div>
                          </div>

                          <div className="space-y-2 text-xs font-mono">
                            <div className="p-2.5 rounded-lg bg-titanium-800 border border-white/5 flex justify-between">
                              <span className="text-white">Offline CRDT Synchronization</span>
                              <span className="text-emerald-400">ACTIVE (0ms lag)</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-titanium-800 border border-white/5 flex justify-between">
                              <span className="text-white">Active Project Streams</span>
                              <span className="text-citron">{sprintTaskCount} Active Epics</span>
                            </div>
                          </div>

                          <button
                            onClick={() => setSprintTaskCount((c) => c + 1)}
                            className="w-full py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white font-mono flex items-center justify-center gap-2"
                          >
                            <Kanban className="w-3.5 h-3.5" />
                            <span>DISPATCH NEW CONCURRENT TASK</span>
                          </button>
                        </div>
                      )}

                      {/* 5. DOCCO SANDBOX */}
                      {activeProduct.id === 'docco' && (
                        <div className="space-y-4">
                          <div className="p-3.5 rounded-xl bg-titanium-800 border border-white/10">
                            <span className="text-[10px] font-mono text-titanium-400 block mb-1">
                              CLINICAL CONSULTATION PIPELINE
                            </span>
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className={doccoStep >= 1 ? 'text-citron font-bold' : 'text-titanium-500'}>
                                1. Patient Intake
                              </span>
                              <span className={doccoStep >= 2 ? 'text-citron font-bold' : 'text-titanium-500'}>
                                2. Physician Review
                              </span>
                              <span className={doccoStep >= 3 ? 'text-emerald-400 font-bold' : 'text-titanium-500'}>
                                3. Encrypted Prescription
                              </span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-titanium-800/60 border border-white/5 text-xs font-mono text-titanium-300">
                            <div>SECURITY PROFILE: Zero-Knowledge Health Record Integrity</div>
                            <div className="text-laser-cyan mt-1">Status: Clinical Research & Client Meetings Phase</div>
                          </div>

                          <button
                            onClick={() => setDoccoStep((s) => (s % 3) + 1)}
                            className="w-full py-2.5 rounded-xl text-xs font-semibold bg-laser-cyan text-obsidian hover:bg-cyan-300 font-mono flex items-center justify-center gap-2"
                          >
                            <Activity className="w-3.5 h-3.5" />
                            <span>STEP THROUGH CLINICAL WORKFLOW</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status strip */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-titanium-400">
                      <span>Engine: Founder-Led Architecture</span>
                      <span className="text-citron font-bold">100% Proprietary IP</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Bento Grid of all 5 Products (Click to switch or explore) */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/60">
              CLICK ANY PRODUCT BELOW TO LOAD ITS INTERACTIVE ENGINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {products.map((p) => {
              const isSelected = p.id === activeProductId;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProductId(p.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'dark:bg-titanium-800 bg-sand-border/70 border-citron shadow-lg shadow-citron/15'
                      : 'dark:bg-titanium-900/60 bg-white/80 dark:border-white/5 border-sand-border hover:border-citron/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg dark:bg-titanium-800 bg-sand-border/50 border dark:border-white/10 border-sand-border flex items-center justify-center">
                      {getProductIcon(p.id)}
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-citron animate-pulse" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold dark:text-white text-sand-charcoal font-mono">{p.name}</h4>
                  <p className="text-[11px] dark:text-titanium-400 text-sand-charcoal/60 truncate mt-0.5">{p.tagline}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductCommandCenter);
