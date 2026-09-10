import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Target,
  Shield,
  Layers,
  Code,
  UserCheck,
  Building2,
  Terminal as TerminalIcon,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';
import SpotlightCard from './SpotlightCard';

const parseStat = (str) => {
  const match = str.match(/^(\d+)(.*)/);
  return match ? { value: parseInt(match[1], 10), suffix: match[2] } : { value: 0, suffix: str };
};

const AnimatedNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
  const [terminalCmd, setTerminalCmd] = useState('status');

  const values = [
    {
      Icon: Layers,
      title: 'Multi-Product Pipeline',
      description:
        'We reject the limitation of single-app startups and IT outsourcing agencies. Like Zoho and Google, we engineer an enduring portfolio of independent software and smart hardware solutions.',
    },
    {
      Icon: Shield,
      title: 'Architectural Privacy',
      description:
        'Privacy is not a marketing afterthought — it is built directly into our data structures. From local-first MMKV encryption in FISCLOK to strict clinical controls in DocCo, user sovereignty is non-negotiable.',
    },
    {
      Icon: Target,
      title: 'Real-World Problem Solving',
      description:
        'We do not build software for vanity metrics. Every product originates from an authentic friction point in daily life—whether managing money, finding food, navigating roads, or organizing clinical records.',
    },
  ];

  const stats = [
    { Icon: Layers, number: '5', label: 'Proprietary Products in Pipeline' },
    { Icon: Code, number: '3,000+', label: 'Hours of Solo Coding, Research & Networking (7 Days/Wk)' },
    { Icon: UserCheck, number: '100%', label: 'Founder-Led Architectural Execution' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-titanium-800/80 border border-citron/30 mb-4">
          <Building2 className="w-3.5 h-3.5 text-citron" />
          <span className="text-xs font-mono font-semibold text-citron uppercase tracking-wider">
            FOUNDING VISION & CAPABILITIES
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          About <span className="text-citron">AstriOrb</span>
        </h2>
        <p className="text-base sm:text-lg text-titanium-300 leading-relaxed font-normal">
          AstriOrb Pvt. Ltd. is an independent product engineering company founded in 2025 by Mohammed Hashim in Kerala, India. We architect software and smart hardware platforms that solve genuine societal challenges.
        </p>
      </motion.div>

      {/* Stats Counter Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {stats.map((stat) => {
          const { Icon, number, label } = stat;
          const { value, suffix } = parseStat(number);
          return (
            <motion.div key={label} variants={fadeInUp} whileHover={{ y: -4 }}>
              <SpotlightCard className="p-6 sm:p-8 text-center flex flex-col items-center justify-center" withCorners>
                <div className="w-12 h-12 rounded-xl bg-titanium-800 border border-white/10 text-citron flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-mono">
                  <AnimatedNumber target={value} suffix={suffix} />
                </div>
                <p className="text-xs sm:text-sm text-titanium-300 font-medium font-mono">
                  {label}
                </p>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Narrative & Interactive Founder CLI Terminal */}
      <motion.div variants={fadeInUp} className="mb-16">
        <SpotlightCard className="p-6 sm:p-10 lg:p-12" withCorners>
          <div className="max-w-4xl mx-auto space-y-6 text-titanium-200 leading-relaxed text-sm sm:text-base font-normal">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                The Vision: Beyond the Agency & Single-App Mindset
              </h3>
              <span className="text-xs font-mono text-citron bg-citron/10 px-2.5 py-1 rounded border border-citron/20 self-start sm:self-auto">
                KERALA ORIGIN
              </span>
            </div>

            <p>
              India’s startup landscape is teeming with talent, but a persistent pattern dominates: almost every new company is either an <strong>IT outsourcing services agency</strong> doing third-party client work or a <strong>single-product app</strong> vulnerable to market shifts. Kerala, despite its exceptional engineering literacy, has lacked a homegrown multi-product technology house on the scale of global champions like Zoho or Google.
            </p>

            <p>
              <strong>AstriOrb was conceived to bridge that exact void.</strong> We are not a service agency renting out developers, and we refuse to be a single-feature startup. We are an autonomous engineering laboratory developing, owning, and scaling our own intellectual property across fintech, food discovery, healthcare, developer productivity, and smart hardware.
            </p>

            {/* Interactive Founder Terminal Window */}
            <div className="my-8 rounded-2xl bg-titanium-900 border border-white/10 p-5 font-mono text-xs overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-citron" />
                  <span className="text-white font-bold">hashim@astriorb-core:~$ ./astri-cli</span>
                </div>
                {/* Command Switchers */}
                <div className="flex gap-1.5">
                  {[
                    { id: 'status', label: 'status' },
                    { id: 'founder', label: 'founder' },
                    { id: 'architecture', label: 'architecture' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setTerminalCmd(btn.id)}
                      className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                        terminalCmd === btn.id
                          ? 'bg-citron text-obsidian font-bold'
                          : 'bg-titanium-800 text-titanium-400 hover:text-white'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Dynamic Output */}
              <div className="space-y-1.5 text-titanium-300">
                {terminalCmd === 'status' && (
                  <>
                    <p className="text-citron">{'>'} QUERYING ALL RUNTIMES...</p>
                    <p className="text-white">
                      [01] FISCLOK: v1.0.2 LIVE ON PLAY STORE (MMKV Encrypted Storage)
                    </p>
                    <p className="text-white">
                      [02] TASTORY: FLUTTER MVP COMPLETED (Active Investor Funding Round)
                    </p>
                    <p className="text-white">
                      [03] DOCCO: CLINICAL RESEARCH & STAKEHOLDER CONSULTATIONS
                    </p>
                    <p className="text-white">
                      [04] CONTINUUM: PRIVATE ALPHA TESTING (Offline CRDT Synced)
                    </p>
                    <p className="text-white">
                      [05] PROJECT ROW: HARDWARE GADGET + SMART APP IN R&D
                    </p>
                    <p className="text-emerald-400">{'>'} ALL PIPELINES OPTIMAL. ZERO OUTSOURCED CODE.</p>
                  </>
                )}

                {terminalCmd === 'founder' && (
                  <>
                    <p className="text-citron">{'>'} MOHAMMED HASHIM // LEAD ARCHITECT</p>
                    <p className="text-white">
                      - Computer Science Engineer & Multi-Domain Software Builder
                    </p>
                    <p className="text-white">
                      - Former Studio Head at Custodian Games Pvt. Ltd. (Kerala)
                    </p>
                    <p className="text-white">
                      - Creative Consultant at Hopz Corp Pvt. Ltd.
                    </p>
                    <p className="text-white">
                      - Flutter Developer at Annolive (Bangalore)
                    </p>
                    <p className="text-white">
                      - CTO at Cueroll — Premium Video Production Platform (Pattambi, Kerala)
                    </p>
                    <p className="text-laser-cyan">{'>'} 100% of AstriOrb products engineered under direct supervision.</p>
                  </>
                )}

                {terminalCmd === 'architecture' && (
                  <>
                    <p className="text-citron">{'>'} ARCHITECTURAL PRINCIPLES</p>
                    <p className="text-white">
                      - Local-First Data: Zero server telemetry without explicit consent.
                    </p>
                    <p className="text-white">
                      - Multi-Platform High Frame Rate: Flutter & React Native native compile.
                    </p>
                    <p className="text-white">
                      - Hardware-Software Fusion: BLE 5.0 sensor nodes paired to mobile intelligence.
                    </p>
                    <p className="text-citron">{'>'} BUILDING AN ENDURING TECHNOLOGY EMPIRE FROM KERALA.</p>
                  </>
                )}
              </div>
            </div>

            <p className="border-l-2 border-citron pl-4 text-white font-medium italic">
              "If a problem in our society is real and painful enough, we don’t pitch slide decks through bureaucratic layers—we research it deeply, design the right technical solution, and build it end-to-end."
            </p>
          </div>
        </SpotlightCard>
      </motion.div>

      {/* Principles Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {values.map((val) => {
          const { Icon, title, description } = val;
          return (
            <motion.div key={title} variants={fadeInUp} whileHover={{ y: -6 }}>
              <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full group" withCorners>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-titanium-800 border border-white/10 text-citron flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-mono">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed font-normal">
                    {description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default About;
