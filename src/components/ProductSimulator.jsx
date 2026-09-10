import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Smartphone,
  Cpu,
  Layers,
  Activity,
  Zap,
  Lock,
  Compass,
  Radio,
  Sliders,
  CheckCircle2,
  Database,
  RefreshCw,
  Terminal,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useProjectModal } from '../contexts/ProjectModalContext';

const ProductSimulator = () => {
  const [activeTab, setActiveTab] = useState('tastory'); // 'tastory' | 'fisclok' | 'row' | 'continuum' | 'docco'
  const { openProjectModal } = useProjectModal();

  // 1. Tastory State (Flavor Radar)
  const [tastoryFlavor, setTastoryFlavor] = useState({
    sweet: 35,
    umami: 80,
    heat: 65,
    zest: 50,
  });

  // Dynamic Recipe Match for Tastory
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

  // 2. FISCLOK State (Zero-Knowledge MMKV Vault)
  const [expenseInput, setExpenseInput] = useState({ amount: '450', note: 'Team Server Hosting' });
  const [encryptedLogs, setEncryptedLogs] = useState([
    { id: 'TX_901', amount: '₹1,200', note: 'Development Assets', cipher: 'e7a1..b98c (MMKV Encrypted)', status: 'LOCAL_ONLY' },
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
        status: 'LOCAL_ONLY',
      };
      setEncryptedLogs((prev) => [newEntry, ...prev.slice(0, 3)]);
      setIsEncrypting(false);
      setExpenseInput({ amount: '', note: '' });
    }, 400);
  };

  // 3. Project ROW State (BLE 5.0 Smart App + IoT Gadget)
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

  // 4. Project Continuum State
  const [sprintTask, setSprintTask] = useState({
    name: 'Flutter Audio Route Handler',
    status: 'IN_REVIEW',
    offlineSynced: true,
  });

  return (
    <section className="relative py-20 overflow-hidden bg-obsidian text-white">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Ambient Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-citron-dim blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-titanium-800/80 border border-citron/30 text-[11px] font-mono text-citron uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-citron animate-pulse" />
            <span>INTERACTIVE COMMAND CONSOLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Experience Our Products in Real-Time
          </h2>
          <p className="text-sm sm:text-base text-titanium-300 max-w-2xl font-normal leading-relaxed">
            Interact with live architectural prototypes of AstriOrb's proprietary products. From offline-first encrypted vaults to culinary neural matching and IoT hardware telemetry.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-titanium-900/90 border border-white/10 backdrop-blur-2xl">
            {[
              { id: 'tastory', label: 'Tastory (Flagship)', icon: Zap, status: 'MVP READY' },
              { id: 'fisclok', label: 'FISCLOK', icon: Shield, status: 'PLAY STORE' },
              { id: 'row', label: 'Project ROW (IoT)', icon: Compass, status: 'HARDWARE R&D' },
              { id: 'continuum', label: 'Continuum', icon: Layers, status: 'MVP TESTING' },
              { id: 'docco', label: 'DocCo', icon: Activity, status: 'CLINICAL R&D' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-obsidian bg-citron shadow-lg shadow-citron/25'
                      : 'text-titanium-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-obsidian/20 text-obsidian' : 'bg-titanium-800 text-titanium-400'
                    }`}
                  >
                    {tab.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulation Panels */}
        <div className="w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {/* 1. TASTORY SIMULATOR */}
            {activeTab === 'tastory' && (
              <motion.div
                key="tastory"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <SpotlightCard className="p-6 sm:p-8" withCorners>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Interactive Sliders */}
                    <div className="lg:col-span-6 flex flex-col space-y-5">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-citron" />
                          <h3 className="text-base font-bold text-white font-mono">
                            TASTE_VECTOR_SYNTHESIZER
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono text-citron bg-citron/10 px-2 py-0.5 rounded border border-citron/20">
                          FLUTTER ENGINE
                        </span>
                      </div>

                      <p className="text-xs text-titanium-300">
                        Adjust sensory coordinates to simulate Tastory's real-time community taste-matching algorithm:
                      </p>

                      {/* Sweetness Slider */}
                      <div className="space-y-1">
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

                      {/* Umami / Savory Slider */}
                      <div className="space-y-1">
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

                      {/* Heat / Spice Slider */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-titanium-300">Spice & Heat Level</span>
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

                      {/* Zest / Acidity */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-titanium-300">Citrus & Zest</span>
                          <span className="text-citron font-bold">{tastoryFlavor.zest}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={tastoryFlavor.zest}
                          onChange={(e) =>
                            setTastoryFlavor((p) => ({ ...p, zest: Number(e.target.value) }))
                          }
                          className="w-full accent-[#EA9216] cursor-pointer h-1.5 bg-titanium-800 rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Right: Dynamic Match Card */}
                    <div className="lg:col-span-6 bg-titanium-800/80 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono text-titanium-400 uppercase">
                            SYNTHESIZED DISH MATCH
                          </span>
                          <div className="flex items-center gap-1.5 text-citron text-xs font-mono font-bold">
                            <span className="w-2 h-2 rounded-full bg-citron animate-ping" />
                            <span>{matchedRecipe.match}% AFFINITY</span>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                          {matchedRecipe.title}
                        </h4>
                        <p className="text-xs text-citron font-mono mb-4">
                          Profile: {matchedRecipe.profile} • Prep: {matchedRecipe.prep}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {matchedRecipe.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-titanium-900 border border-white/10 text-titanium-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11px] text-titanium-400 font-mono">
                          Status: MVP 100% Complete
                        </span>
                        <button
                          type="button"
                          onClick={openProjectModal}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-citron text-obsidian hover:bg-citron-light transition-all shadow-md shadow-citron/20 cursor-pointer"
                        >
                          View Investor Pitch
                        </button>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}

            {/* 2. FISCLOK SIMULATOR */}
            {activeTab === 'fisclok' && (
              <motion.div
                key="fisclok"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <SpotlightCard className="p-6 sm:p-8" withCorners>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Input Form */}
                    <div className="lg:col-span-5 flex flex-col space-y-4">
                      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <h3 className="text-base font-bold text-white font-mono">
                          MMKV_LOCAL_ENCRYPTION_VAULT
                        </h3>
                      </div>

                      <p className="text-xs text-titanium-300">
                        Test FISCLOK's zero-knowledge local persistence. Transactions are encrypted instantly on your device; 0 bytes are ever transmitted to AstriOrb servers:
                      </p>

                      <form onSubmit={handleAddExpense} className="space-y-3">
                        <div>
                          <label className="text-[11px] font-mono text-titanium-400">AMOUNT (₹)</label>
                          <input
                            type="number"
                            value={expenseInput.amount}
                            onChange={(e) =>
                              setExpenseInput((p) => ({ ...p, amount: e.target.value }))
                            }
                            placeholder="e.g. 750"
                            className="w-full mt-1 px-3 py-2 bg-titanium-800 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-citron font-mono"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-mono text-titanium-400">NOTE / CATEGORY</label>
                          <input
                            type="text"
                            value={expenseInput.note}
                            onChange={(e) =>
                              setExpenseInput((p) => ({ ...p, note: e.target.value }))
                            }
                            placeholder="e.g. Flutter Cloud Hosting"
                            className="w-full mt-1 px-3 py-2 bg-titanium-800 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-citron font-mono"
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
                              <span>ENCRYPTING AES-256...</span>
                            </>
                          ) : (
                            <>
                              <Shield className="w-3.5 h-3.5" />
                              <span>COMMIT TO LOCAL MMKV</span>
                            </>
                          )}
                        </button>
                      </form>
                    </div>

                    {/* Right: Real-Time Network & Storage Telemetry */}
                    <div className="lg:col-span-7 bg-titanium-800/80 rounded-2xl border border-white/10 p-6 flex flex-col space-y-4">
                      {/* Security Status Badges */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-titanium-900 border border-white/5 flex flex-col">
                          <span className="text-[10px] font-mono text-titanium-400">NETWORK OUTBOUND</span>
                          <span className="text-sm font-mono font-bold text-emerald-400">
                            0.00 KB (ISOLATED)
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-titanium-900 border border-white/5 flex flex-col">
                          <span className="text-[10px] font-mono text-titanium-400">STORAGE ENGINE</span>
                          <span className="text-sm font-mono font-bold text-citron">
                            Tencent MMKV Fast IO
                          </span>
                        </div>
                      </div>

                      {/* Live Cipher Ledger */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-titanium-300 mb-2">
                          <span>DEVICE_STORAGE_MIRROR</span>
                          <span className="text-emerald-400">LIVE SYNC ACTIVE</span>
                        </div>

                        <div className="space-y-2">
                          {encryptedLogs.map((log) => (
                            <div
                              key={log.id}
                              className="p-2.5 rounded-xl bg-titanium-900 border border-white/5 flex items-center justify-between text-xs font-mono"
                            >
                              <div className="flex items-center gap-2">
                                <Database className="w-3.5 h-3.5 text-citron shrink-0" />
                                <div>
                                  <span className="text-white font-bold">{log.amount}</span>
                                  <span className="text-titanium-400 ml-2">{log.note}</span>
                                </div>
                              </div>
                              <span className="text-[10px] text-titanium-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                                {log.cipher}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-titanium-400">
                        <span>Live on Google Play Store (v1.0.2)</span>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.astriorb.fincend"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-citron hover:underline"
                        >
                          Install on Android →
                        </a>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}

            {/* 3. PROJECT ROW SIMULATOR (IoT Hardware + App) */}
            {activeTab === 'row' && (
              <motion.div
                key="row"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <SpotlightCard className="p-6 sm:p-8" withCorners>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Hardware Specs & Controls */}
                    <div className="lg:col-span-5 flex flex-col space-y-5">
                      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                        <Radio className="w-4 h-4 text-laser-cyan" />
                        <h3 className="text-base font-bold text-white font-mono">
                          ROW_BLE_5_HARDWARE_LINK
                        </h3>
                      </div>

                      <p className="text-xs text-titanium-300">
                        Project ROW bridges an intelligent mobile route engine with a custom smart hardware gadget designed in-house. Experience live simulated hardware telemetry:
                      </p>

                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between py-1.5 border-b border-white/5">
                          <span className="text-titanium-400">Hardware Node</span>
                          <span className="text-white">ESP32-S3 Custom Gadget</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/5">
                          <span className="text-titanium-400">RF Protocol</span>
                          <span className="text-laser-cyan">BLE 5.0 Long-Range</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-white/5">
                          <span className="text-titanium-400">Signal Strength (RSSI)</span>
                          <span className="text-citron font-bold">{rowTelemetry.rssi} dBm</span>
                        </div>
                        <div className="flex justify-between py-1.5">
                          <span className="text-titanium-400">Battery Level</span>
                          <span className="text-emerald-400 font-bold">{rowTelemetry.battery}%</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleSimulateTurn}
                        className="py-2.5 rounded-xl text-xs font-semibold bg-laser-cyan text-obsidian hover:bg-cyan-300 transition-all shadow-md shadow-laser-cyan/20 flex items-center justify-center gap-2 font-mono cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>TRANSMIT ROUTE WAYPOINT</span>
                      </button>
                    </div>

                    {/* Right: Live Visual Telemetry HUD */}
                    <div className="lg:col-span-7 bg-titanium-800/80 rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Radar Radial Grid */}
                      <div className="w-48 h-48 rounded-full border border-laser-cyan/20 flex items-center justify-center relative my-4">
                        <div className="absolute inset-4 rounded-full border border-laser-cyan/15" />
                        <div className="absolute inset-10 rounded-full border border-laser-cyan/10" />
                        {/* Radar sweep */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-laser-cyan/10 to-transparent animate-spin duration-[4000ms] pointer-events-none" />

                        {/* Compass Arrow */}
                        <motion.div
                          animate={{ rotate: rowTelemetry.heading }}
                          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                          className="w-1 h-20 bg-gradient-to-t from-transparent via-laser-cyan to-citron rounded-full relative"
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-citron absolute -top-1 -left-0.75 shadow-[0_0_10px_#EA9216]" />
                        </motion.div>

                        <span className="absolute bottom-2 text-[10px] font-mono text-citron font-bold">
                          {rowTelemetry.heading}° HDG
                        </span>
                      </div>

                      {/* Next Direction Readout */}
                      <div className="w-full bg-titanium-900 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
                        <div>
                          <div className="text-[10px] text-titanium-400">UPCOMING TURN</div>
                          <div className="text-white font-bold text-sm">{rowTelemetry.turn}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-titanium-400">DISTANCE</div>
                          <div className="text-citron font-bold text-sm">
                            {rowTelemetry.distanceNext} m
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}

            {/* 4. CONTINUUM & DOCCO SUMMARY */}
            {(activeTab === 'continuum' || activeTab === 'docco') && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <SpotlightCard className="p-6 sm:p-8" withCorners>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-titanium-800 border border-white/10 text-[10px] font-mono text-citron uppercase mb-3">
                        {activeTab === 'continuum' ? 'AGILE SPRINT RUNTIME' : 'CLINICAL PROTOCOL LEDGER'}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {activeTab === 'continuum'
                          ? 'Project Continuum // Offline-First Sprint Suite'
                          : 'Project DocCo // Medical & Clinical Workflow'}
                      </h3>
                      <p className="text-xs sm:text-sm text-titanium-300 max-w-2xl leading-relaxed">
                        {activeTab === 'continuum'
                          ? 'Engineered for independent developers and multi-team squads. Features CRDT conflict-free offline synchronization, sub-10ms state updates, and streamlined Kanban board velocity tracking.'
                          : 'Specialized healthcare workflow platform streamlining patient consultations, clinical intake, and practitioner collaboration. Conceived with zero-knowledge data integrity.'}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <button
                        type="button"
                        onClick={openProjectModal}
                        className="px-5 py-3 rounded-xl text-xs font-semibold bg-citron text-obsidian hover:bg-citron-light transition-all shadow-lg shadow-citron/20 font-mono cursor-pointer"
                      >
                        EXPLORE ARCHITECTURE
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductSimulator);
