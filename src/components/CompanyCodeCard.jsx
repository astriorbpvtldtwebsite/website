import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Copy, Check, Terminal, FileCode, Cpu, GitBranch, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const TABS = [
  {
    id: 'company',
    file: 'company.config.ts',
    icon: FileCode,
    lang: 'TypeScript',
    accent: 'text-citron',
    lines: [
      {
        tokens: [
          { text: '// AstriOrb Corporate & Venture Manifest', color: 'text-titanium-500 italic' },
        ],
      },
      {
        tokens: [
          { text: 'export const ', color: 'text-coral font-bold' },
          { text: 'AstriOrb', color: 'text-citron font-bold' },
          { text: ': TechnologyCompany = {', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  name: ', color: 'text-cyan-300' },
          { text: '"AstriOrb Private Limited"', color: 'text-emerald-400' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  founded: ', color: 'text-cyan-300' },
          { text: '"September 2025"', color: 'text-citron font-bold' },
          { text: ',  headquarters: ', color: 'text-cyan-300' },
          { text: '"Kerala, India"', color: 'text-emerald-400' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  founder: ', color: 'text-cyan-300' },
          { text: '"Mohammed Hashim"', color: 'text-emerald-400' },
          { text: ' (Solo Founder & Engineer)', color: 'text-titanium-500 italic' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  stage: {', color: 'text-coral font-semibold' },
        ],
      },
      {
        tokens: [
          { text: '    phase: ', color: 'text-cyan-300' },
          { text: '"Venture Product Studio & Deep-Tech Lab"', color: 'text-emerald-400' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '    execution: ', color: 'text-cyan-300' },
          { text: '"Solo Founder // 7 Days/Wk Coding, Research & Networking"', color: 'text-citron' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '    status: ', color: 'text-cyan-300' },
          { text: '"Active R&D + Market Production"', color: 'text-citron' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '    funding: ', color: 'text-cyan-300' },
          { text: '"Founder-Led // Raising Seed for Tastory"', color: 'text-emerald-400' },
        ],
      },
      {
        tokens: [
          { text: '  },', color: 'text-coral font-semibold' },
        ],
      },
      {
        tokens: [
          { text: '  appsDeveloping: [', color: 'text-coral font-semibold' },
          { text: '"Tastory", "FISCLOK", "ROW", "DocCo", "Continuum"', color: 'text-emerald-400' },
          { text: '],', color: 'text-coral font-semibold' },
        ],
      },
      {
        tokens: [
          { text: '  philosophy: ', color: 'text-cyan-300' },
          { text: '"100% In-House // Zero Client Outsourcing"', color: 'text-emerald-400' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  privacy: ', color: 'text-cyan-300' },
          { text: '"Offline-First & Local MMKV Encryption"', color: 'text-citron' },
        ],
      },
      {
        tokens: [
          { text: '};', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
    ],
  },
  {
    id: 'products',
    file: 'products.manifest.json',
    icon: Cpu,
    lang: 'JSON',
    accent: 'text-emerald-400',
    lines: [
      {
        tokens: [
          { text: '// Proprietary Apps Under Active Development', color: 'text-titanium-500 italic' },
        ],
      },
      {
        tokens: [
          { text: '{', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  "tastory": {', color: 'text-citron font-bold' },
          { text: ' // Flagship AI Food Social Network', color: 'text-titanium-500 italic' },
        ],
      },
      {
        tokens: [
          { text: '    "stage": ', color: 'text-cyan-300' },
          { text: '"MVP Complete // Seed Raising (100 Beta Users)"', color: 'text-emerald-400' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '    "techStack": ', color: 'text-cyan-300' },
          { text: '["Flutter", "FastAPI", "Vector Embeddings", "PostgreSQL"]', color: 'text-titanium-200' },
        ],
      },
      {
        tokens: [
          { text: '  },', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  "fisclok": {', color: 'text-emerald-400 font-bold' },
          { text: ' // Zero-Tracker Budget Vault', color: 'text-titanium-500 italic' },
        ],
      },
      {
        tokens: [
          { text: '    "stage": ', color: 'text-cyan-300' },
          { text: '"Production v1.0.2 // Live on Google Play Store"', color: 'text-emerald-400' },
          { text: ',', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '    "security": ', color: 'text-cyan-300' },
          { text: '"100% Offline // Encrypted MMKV Storage"', color: 'text-citron' },
        ],
      },
      {
        tokens: [
          { text: '  },', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  "project_row": {', color: 'text-cyan-300 font-bold' },
          { text: ' // Smart Posture Wearable & Ambient IoT', color: 'text-titanium-500 italic' },
        ],
      },
      {
        tokens: [
          { text: '    "stage": ', color: 'text-cyan-300' },
          { text: '"Hardware Lab // Prototype v2 (BLE 5.3 + IMU)"', color: 'text-emerald-400' },
        ],
      },
      {
        tokens: [
          { text: '  },', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  "docco_and_continuum": {', color: 'text-coral font-bold' },
          { text: ' // Clinical Scribe & Spatial UI', color: 'text-titanium-500 italic' },
        ],
      },
      {
        tokens: [
          { text: '    "stage": ', color: 'text-cyan-300' },
          { text: '"Clinical Trial Design & Design System v1.4"', color: 'text-emerald-400' },
        ],
      },
      {
        tokens: [
          { text: '  }', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '}', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
    ],
  },
  {
    id: 'terminal',
    file: 'terminal.sh',
    icon: Terminal,
    lang: 'Bash',
    accent: 'text-coral',
    lines: [
      {
        tokens: [
          { text: '$ astriorb status --ecosystem', color: 'text-citron font-bold' },
        ],
      },
      {
        tokens: [
          { text: '● AstriOrb Core Engine v5.2.0 [ONLINE]', color: 'text-emerald-400 font-semibold' },
        ],
      },
      {
        tokens: [
          { text: '● Location: Kerala, India | Timezone: IST (UTC+5:30)', color: 'text-cyan-300' },
        ],
      },
      {
        tokens: [
          { text: '● Active Repositories (5 Products in Development):', color: 'dark:text-white text-sand-charcoal' },
        ],
      },
      {
        tokens: [
          { text: '  ├── [BETA]  tastory-engine     v0.9.4 (Seed Round Ready)', color: 'text-citron' },
        ],
      },
      {
        tokens: [
          { text: '  ├── [LIVE]  fisclok-core       v1.0.2 (Google Play Live)', color: 'text-emerald-400' },
        ],
      },
      {
        tokens: [
          { text: '  ├── [R&D]   project-row-hw     v0.2.1 (BLE 5.3 Connected)', color: 'text-cyan-300' },
        ],
      },
      {
        tokens: [
          { text: '  ├── [PILOT] docco-scribe       v0.1.0 (Clinical Protocol)', color: 'text-coral' },
        ],
      },
      {
        tokens: [
          { text: '  └── [CORE]  continuum-design   v1.4.0 (Design Tokens)', color: 'text-titanium-300' },
        ],
      },
      {
        tokens: [
          { text: '$ npx vitest run --pool=threads', color: 'text-citron font-bold' },
        ],
      },
      {
        tokens: [
          { text: '✓ 11 unit tests passed across 2 suites (100% coverage)', color: 'text-emerald-400 font-semibold' },
        ],
      },
      {
        tokens: [
          { text: '✓ Ready for strategic venture partnerships & pilots.', color: 'text-emerald-400 font-semibold' },
        ],
      },
    ],
  },
];

const CompanyCodeCard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pause' | 'deleting'
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [copied, setCopied] = useState(false);

  const currentTab = TABS[tabIndex];

  // Calculate total characters for the current tab
  const totalChars = useMemo(() => {
    return currentTab.lines.reduce((acc, line) => {
      return acc + line.tokens.reduce((tokenAcc, token) => tokenAcc + token.text.length, 0);
    }, 0);
  }, [currentTab]);

  // Full raw text for copy button
  const fullText = useMemo(() => {
    return currentTab.lines
      .map((line) => line.tokens.map((token) => token.text).join(''))
      .join('\n');
  }, [currentTab]);

  // Typewriter Loop Engine
  useEffect(() => {
    if (!isAutoCycling) return;

    let timer;

    if (phase === 'typing') {
      if (visibleChars < totalChars) {
        timer = setTimeout(() => {
          // Increment by 2 characters per step for smooth, organic typing speed
          setVisibleChars((prev) => Math.min(prev + 2, totalChars));
        }, 22);
      } else {
        // Typing completed! Pause for user to read the full code card
        timer = setTimeout(() => {
          setPhase('pause');
        }, 3200);
      }
    } else if (phase === 'pause') {
      // Begin deleting/backspacing
      timer = setTimeout(() => {
        setPhase('deleting');
      }, 500);
    } else if (phase === 'deleting') {
      if (visibleChars > 0) {
        timer = setTimeout(() => {
          // Delete quickly (6 chars per tick)
          setVisibleChars((prev) => Math.max(prev - 6, 0));
        }, 16);
      } else {
        // Deletion complete! Advance to next tab and start typing
        timer = setTimeout(() => {
          setTabIndex((prev) => (prev + 1) % TABS.length);
          setPhase('typing');
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [phase, visibleChars, totalChars, isAutoCycling]);

  // Manual Tab Selection
  const handleTabClick = (idx) => {
    setTabIndex(idx);
    const selectedTab = TABS[idx];
    const total = selectedTab.lines.reduce((acc, line) => {
      return acc + line.tokens.reduce((tokenAcc, token) => tokenAcc + token.text.length, 0);
    }, 0);
    // When manually clicked, reveal fully and pause typing temporarily
    setVisibleChars(total);
    setPhase('pause');
  };

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(fullText)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleAutoCycle = () => {
    setIsAutoCycling((prev) => !prev);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border dark:border-white/10 border-sand-border dark:bg-titanium-900/90 bg-white shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs flex flex-col transition-all duration-300">
      {/* Top Header / Editor Window Chrome */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b dark:border-white/10 border-sand-border dark:bg-titanium-950/70 bg-sand-border/40 select-none">
        {/* Left: Window Dots & Active Git Branch */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-coral inline-block" />
            <span className="w-3 h-3 rounded-full bg-citron inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l dark:border-white/10 border-sand-border text-[11px] dark:text-titanium-400 text-sand-charcoal/70">
            <GitBranch className="w-3.5 h-3.5 text-citron" />
            <span>main</span>
          </div>
        </div>

        {/* Center: Interactive Sequential File Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
          {TABS.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = tabIndex === idx;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => handleTabClick(idx)}
                aria-label={`Switch to ${tab.file}`}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-all shrink-0 relative ${
                  isActive
                    ? 'dark:bg-titanium-800 bg-sand dark:text-white text-sand-charcoal font-semibold shadow-sm border dark:border-white/10 border-sand-border'
                    : 'dark:text-titanium-400 text-sand-charcoal/60 hover:dark:text-white hover:text-sand-charcoal'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${tab.accent}`} />
                <span className="hidden sm:inline">{tab.file}</span>
                <span className="sm:hidden">{tab.file.split('.')[0]}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-citron animate-ping ml-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Controls (Pause/Play & Copy) */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={toggleAutoCycle}
            aria-label={isAutoCycling ? 'Pause Typewriter' : 'Resume Typewriter'}
            title={isAutoCycling ? 'Pause Typewriter' : 'Resume Typewriter'}
            className="flex items-center gap-1 px-1.5 py-1 rounded text-[11px] dark:text-titanium-300 text-sand-charcoal/70 hover:dark:text-white hover:text-sand-charcoal transition-colors dark:hover:bg-titanium-800 hover:bg-sand-border/60"
          >
            {isAutoCycling ? (
              <Pause className="w-3.5 h-3.5 text-citron" />
            ) : (
              <Play className="w-3.5 h-3.5 text-emerald-400" />
            )}
          </button>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
            title="Copy code to clipboard"
            className="flex items-center gap-1 px-1.5 py-1 rounded text-[11px] dark:text-titanium-300 text-sand-charcoal/70 hover:dark:text-white hover:text-sand-charcoal transition-colors dark:hover:bg-titanium-800 hover:bg-sand-border/60"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 hidden sm:inline text-[10px]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor Body with Live Typing & Blinking Cursor */}
      <div className="p-3 sm:p-5 min-h-[260px] sm:min-h-[340px] max-h-[300px] sm:max-h-[380px] overflow-y-auto overflow-x-hidden code-scrollbar leading-relaxed select-text font-mono text-[10px] sm:text-xs">
        {(() => {
          let charCounter = 0;
          const renderedLines = [];

          for (let lIdx = 0; lIdx < currentTab.lines.length; lIdx++) {
            const line = currentTab.lines[lIdx];
            const renderedTokens = [];
            let isCursorInThisLine = false;

            for (let tIdx = 0; tIdx < line.tokens.length; tIdx++) {
              const token = line.tokens[tIdx];
              const tokenStart = charCounter;
              const tokenEnd = charCounter + token.text.length;

              if (visibleChars >= tokenEnd) {
                // Fully visible token
                renderedTokens.push(
                  <span key={tIdx} className={token.color}>
                    {token.text}
                  </span>
                );
                charCounter = tokenEnd;
              } else if (visibleChars > tokenStart && visibleChars < tokenEnd) {
                // Partially typed token with cursor
                const partialText = token.text.slice(0, visibleChars - tokenStart);
                renderedTokens.push(
                  <span key={tIdx} className={token.color}>
                    {partialText}
                  </span>
                );
                isCursorInThisLine = true;
                charCounter = visibleChars;
                break;
              } else {
                // Not yet reached
                break;
              }
            }

            // Check if cursor should sit at the exact end of this line
            if (!isCursorInThisLine && charCounter === visibleChars && visibleChars > 0 && renderedTokens.length > 0) {
              isCursorInThisLine = true;
            }

            if (renderedTokens.length > 0 || (lIdx === 0 && visibleChars === 0)) {
              renderedLines.push(
                <div key={lIdx} className="flex items-start">
                  <span className="w-6 shrink-0 text-right pr-3 select-none text-[#4A5B66]">
                    {lIdx + 1}
                  </span>
                  <div className="flex-1 whitespace-pre-wrap break-all">
                    {renderedTokens}
                    {isCursorInThisLine && (
                      <span className="inline-block w-2 h-3.5 bg-citron ml-0.5 animate-pulse align-middle" />
                    )}
                  </div>
                </div>
              );
            }

            if (charCounter >= visibleChars) {
              break;
            }
          }

          if (renderedLines.length === 0) {
            renderedLines.push(
              <div key="empty" className="flex items-start">
                <span className="w-6 shrink-0 text-right pr-3 select-none text-[#4A5B66]">1</span>
                <span className="inline-block w-2 h-3.5 bg-citron ml-0.5 animate-pulse align-middle" />
              </div>
            );
          }

          return renderedLines;
        })()}
      </div>

      {/* Editor Status Bar (VS Code Style) */}
      <div className="px-4 py-2 border-t dark:border-white/10 border-sand-border dark:bg-titanium-950/90 bg-sand-border/40 flex items-center justify-between text-[10px] dark:text-titanium-400 text-sand-charcoal/70 select-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">11 Passed</span>
          </span>
          <span className="hidden sm:inline text-titanium-600">|</span>
          <span className="text-citron font-semibold">Stage: Seed R&D</span>
          <span className="hidden sm:inline text-titanium-600">|</span>
          <span className="hidden sm:inline text-sand-charcoal dark:text-titanium-300">
            {phase === 'typing' ? 'Typing...' : phase === 'pause' ? 'Complete (Review)' : 'Switching...'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/products"
            className="text-citron hover:underline font-semibold flex items-center gap-1"
          >
            <span>View 5 Apps</span>
            <span>→</span>
          </Link>
          <span className="hidden sm:inline text-titanium-600">|</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">{currentTab.lang}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CompanyCodeCard);
