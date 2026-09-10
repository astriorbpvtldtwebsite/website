import React from 'react';
import { Shield, Zap, Cpu, Code2, CheckCircle2 } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const pillars = [
  {
    icon: Shield,
    title: 'Zero-Surveillance Architecture',
    tag: 'PRIVACY BY DESIGN',
    color: 'text-emerald-400',
    description:
      'We reject data harvesting. From FISCLOK’s local-first MMKV vault to DocCo’s zero-knowledge health records, our applications keep user data on device or strictly end-to-end encrypted.',
  },
  {
    icon: Zap,
    title: 'Fluid 60–120 FPS Native Feel',
    tag: 'HIGH PERFORMANCE',
    color: 'text-citron',
    description:
      'We avoid clunky web-wrappers for client apps. Using Flutter with native C++ bridges and modern frontends, our runtimes deliver instantaneous responsiveness and battery efficiency.',
  },
  {
    icon: Cpu,
    title: 'Physical-Digital Hardware Synergy',
    tag: 'CONNECTED IOT',
    color: 'text-laser-cyan',
    description:
      'We extend digital interfaces into the physical world. In Project ROW, our team designs custom Espressif ESP32 microcontroller firmware, 6-axis IMU sensor fusion algorithms, and low-power BLE ergonomic wearables.',
  },
  {
    icon: Code2,
    title: 'Founder-Led Proprietary IP',
    tag: '100% IN-HOUSE CODE',
    color: 'text-purple-400',
    description:
      'Zero white-labeled templates, zero outsourced agency spaghetti. Every product in the AstriOrb portfolio is designed, engineered, and continuously iterated by our core engineering team.',
  },
];

const ProductPhilosophy = () => {
  return (
    <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-xs font-mono text-citron uppercase tracking-widest mb-3">
          <Code2 size={13} />
          <span>ENGINEERING FIRST PRINCIPLES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3">
          How We Build At AstriOrb
        </h2>
        <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 font-normal leading-relaxed">
          Our products aren't just features bundled together — they represent an uncompromised standard of privacy, native performance, and hardware innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {pillars.map((pillar, idx) => (
          <SpotlightCard
            key={idx}
            className="p-4 sm:p-6 rounded-2xl flex flex-col justify-between h-full"
            withCorners
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl dark:bg-titanium-900 bg-sand-border/50 border dark:border-white/10 border-sand-border">
                  <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                </div>
                <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="text-base font-bold font-mono dark:text-white text-sand-charcoal mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t dark:border-white/5 border-sand-border flex items-center gap-1.5 text-[11px] font-mono text-citron">
              <CheckCircle2 size={12} />
              <span>Core Principle Verified</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ProductPhilosophy);
