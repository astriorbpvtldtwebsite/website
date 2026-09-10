import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Cpu,
  BatteryCharging,
  CheckCircle2,
  Layers,
  ArrowRight,
  Wifi,
  Radio,
  Smartphone,
  Zap,
  Gauge,
  Vibrate,
  ShieldCheck,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const HardwareLabSpotlight = ({ product, onOpenBlueprintModal }) => {
  if (!product) return null;

  return (
    <div id="row" className="scroll-mt-32 mb-20">
      <SpotlightCard className="p-4 sm:p-8 lg:p-12 relative overflow-hidden" withCorners>
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean/15 blur-[150px] pointer-events-none" />

        {/* Hardware Lab Banner Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b dark:border-white/10 border-sand-border">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-laser-cyan animate-ping shrink-0" />
            <span className="text-xs font-mono uppercase tracking-widest text-laser-cyan font-bold">
              PHYSICAL-DIGITAL LAB // BESPOKE SMART WEARABLE + COMPANION APP
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-ocean/20 text-laser-cyan border border-ocean/40">
            <Cpu size={13} className="shrink-0" />
            <span>
              <span className="sm:hidden">PROTOTYPE V2 • ESP32 BLE</span>
              <span className="hidden sm:inline">PROTOTYPE V2 // ESPRESSIF ESP32 BLE</span>
            </span>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Hardware Synergy Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-2 sm:mb-3">
                {product.name}
              </h2>
              <p className="text-sm sm:text-lg font-semibold text-laser-cyan font-mono mb-3 sm:mb-4">
                {product.tagline}
              </p>
              <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed mb-6 font-normal">
                {product.shortDescription}
              </p>

              {/* Hardware vs App Synergy Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 sm:p-4 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border">
                  <div className="flex items-center gap-2 text-laser-cyan text-xs font-mono font-bold mb-1">
                    <Cpu size={14} />
                    <span>DEDICATED SMART WEARABLE</span>
                  </div>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80">
                    Featherweight (&lt; 14.5g) ergonomic clip with Espressif ESP32 SoC, 6-axis IMU sensor fusion, and gentle stepped micro-haptics.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border">
                  <div className="flex items-center gap-2 text-citron text-xs font-mono font-bold mb-1">
                    <Smartphone size={14} />
                    <span>INTELLIGENT COMPANION APP</span>
                  </div>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80">
                    High-performance Flutter companion dashboard rendering real-time spinal angle kinematics and posture analytics with zero cloud requirements.
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
                    <CheckCircle2 className="w-4 h-4 text-laser-cyan shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Embedded Tech Stack */}
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
              <button
                type="button"
                onClick={() => onOpenBlueprintModal(product)}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-mono font-bold bg-laser-cyan text-obsidian shadow-lg shadow-laser-cyan/20 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Cpu size={15} className="shrink-0" />
                <span>
                  <span className="sm:hidden">HARDWARE BLUEPRINT</span>
                  <span className="hidden sm:inline">INSPECT HARDWARE BLUEPRINT</span>
                </span>
                <ArrowRight size={14} className="shrink-0" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-laser-cyan hover:text-laser-cyan transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Radio size={14} className="shrink-0" />
                <span>HARDWARE OEM INQUIRY</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Bespoke Wearable Architecture & Sensor Matrix Console */}
          <div className="lg:col-span-6 dark:bg-titanium-950 bg-white rounded-2xl border dark:border-white/10 border-sand-border p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between shadow-md">
            <div>
              {/* Console Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b dark:border-white/10 border-sand-border">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-laser-cyan shrink-0" />
                  <span className="text-[11px] sm:text-xs font-mono font-bold dark:text-white text-sand-charcoal uppercase">
                    PROJECT ROW // SENSOR MATRIX
                  </span>
                </div>
                <span className="self-start sm:self-auto text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-ocean/20 text-laser-cyan border border-ocean/30 whitespace-nowrap">
                  50Hz SENSOR FUSION
                </span>
              </div>

              {/* 4 Hardware Architecture Metrics */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">IMU SAMPLING</span>
                    <span className="hidden sm:inline">BIOMECHANICAL SAMPLING</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-laser-cyan flex items-center gap-1">
                    <Gauge size={13} className="shrink-0" />
                    50 Hz QUAT
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    &plusmn;0.5&deg; angle precision
                  </span>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">TELEMETRY</span>
                    <span className="hidden sm:inline">WIRELESS TELEMETRY</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-citron flex items-center gap-1 truncate">
                    <Wifi size={13} className="shrink-0" />
                    ESP32 BLE
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    Sub-15ms latency
                  </span>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">ACTUATOR</span>
                    <span className="hidden sm:inline">FEEDBACK ACTUATOR</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold dark:text-white text-sand-charcoal flex items-center gap-1 truncate">
                    <Vibrate size={13} className="text-laser-cyan shrink-0" />
                    STEPPED LRA
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    Micro-haptics
                  </span>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/5 border-sand-border">
                  <span className="text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 block mb-1">
                    <span className="sm:hidden">POWER / FORM</span>
                    <span className="hidden sm:inline">POWER & FORM FACTOR</span>
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 flex items-center gap-1">
                    <BatteryCharging size={13} className="shrink-0" />
                    ~5–7 DAYS
                  </span>
                  <span className="text-[9px] sm:text-[10px] dark:text-titanium-400 text-sand-charcoal/60 font-mono mt-0.5 block truncate">
                    &lt; 14.5g / IP54
                  </span>
                </div>
              </div>

              {/* Hardware Execution Pipeline */}
              <div className="space-y-2.5 mb-6">
                <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider block">
                  PHYSICAL-DIGITAL SENSOR PIPELINE
                </span>

                <div className="p-3 rounded-xl dark:bg-titanium-900/80 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <div className="w-5 h-5 rounded-md bg-laser-cyan/20 text-laser-cyan flex items-center justify-center font-bold text-[10px]">
                      01
                    </div>
                    <span className="font-semibold dark:text-white text-sand-charcoal">
                      6-Axis InvenSense IMU Sensor Fusion
                    </span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-7.5">
                    On-board Complementary Filter continuously merges 3-axis accelerometer and 3-axis gyroscope data to compute sagittal pitch and roll at 50Hz without drift.
                  </p>
                </div>

                <div className="p-3 rounded-xl dark:bg-titanium-900/80 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <div className="w-5 h-5 rounded-md bg-citron/20 text-citron flex items-center justify-center font-bold text-[10px]">
                      02
                    </div>
                    <span className="font-semibold dark:text-white text-sand-charcoal">
                      Adaptive Biomechanical Calibration
                    </span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-7.5">
                    Embedded C++ firmware dynamically measures individual posture baselines during initialization, isolating deliberate movement from spinal slouching.
                  </p>
                </div>

                <div className="p-3 rounded-xl dark:bg-titanium-900/80 bg-sand-border/30 border dark:border-white/5 border-sand-border space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[10px]">
                      03
                    </div>
                    <span className="font-semibold dark:text-white text-sand-charcoal">
                      GATT Characteristic Stream to Flutter App
                    </span>
                  </div>
                  <p className="text-[11px] dark:text-titanium-300 text-sand-charcoal/70 pl-7.5">
                    Compact binary telemetry packets are streamed over BLE GATT characteristics directly to the mobile app for instant kinematic graphing.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status strip */}
            <div className="pt-4 mt-6 border-t dark:border-white/10 border-sand-border flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-laser-cyan" />
                <span>Status: Prototype v2 (ESP32 Calibration, Kerala)</span>
              </span>
              <span className="text-laser-cyan font-bold">Proprietary In-House Hardware IP</span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default React.memo(HardwareLabSpotlight);
