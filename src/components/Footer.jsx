import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  Globe,
  ArrowUp,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import AstriOrbLogo from './AstriOrbLogo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ecosystemLinks = [
    {
      name: 'FISCLOK',
      category: 'FinTech Vault',
      href: 'https://play.google.com/store/apps/details?id=com.astriorb.fincend',
      isExternal: true,
      badge: 'LIVE',
      badgeColor: 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      dotColor: 'bg-emerald-500',
    },
    {
      name: 'Project Tastory',
      category: 'Taste Vector AI',
      href: '/products?id=tastory',
      isExternal: false,
      badge: 'FLAGSHIP',
      badgeColor: 'text-citron bg-citron/10 border-citron/25',
      dotColor: 'bg-citron',
    },
    {
      name: 'Project ROW',
      category: 'Smart Wearable IoT',
      href: '/products?id=row',
      isExternal: false,
      badge: 'HARDWARE R&D',
      badgeColor: 'text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
      dotColor: 'bg-cyan-400',
    },
    {
      name: 'Project DocCo',
      category: 'Clinical HealthTech',
      href: '/products?id=docco',
      isExternal: false,
      badge: 'CLINICAL R&D',
      badgeColor: 'text-purple-500 dark:text-purple-400 bg-purple-500/10 border-purple-500/25',
      dotColor: 'bg-purple-400',
    },
    {
      name: 'Project Continuum',
      category: 'SaaS Platform',
      href: '/products?id=continuum',
      isExternal: false,
      badge: 'BETA',
      badgeColor: 'text-amber-500 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',
      dotColor: 'bg-amber-400',
    },
  ];

  const companyLinks = [
    { name: 'About AstriOrb', href: '/about', note: 'Vision & Founder Story' },
    { name: 'Product Ecosystem', href: '/products', note: '5 Proprietary Products' },
    { name: 'Careers & Squad', href: '/careers', note: 'Join Our R&D Lab', badge: 'HIRING' },
    { name: 'Contact & Inquiries', href: '/contact', note: 'Collaborations & IP' },
    { name: 'Tech Insights', href: '/blog', note: 'Engineering Journal' },
  ];

  const legalLinks = [
    { name: 'Website Privacy Policy', href: '/privacy-policy' },
    { name: 'Website Terms of Service', href: '/terms' },
    { name: 'FISCLOK Privacy Policy', href: '/fisclok/privacy-policy/' },
    { name: 'FISCLOK Terms of Service', href: '/fisclok/terms/' },
    { name: 'GDPR & ISO Compliance', href: '/gdpr' },
    { name: 'Software License Agreement', href: '/license' },
  ];

  const socialLinks = [
    {
      Icon: Mail,
      href: 'mailto:support@astriorb.com',
      label: 'Email Support',
      hoverColor: 'hover:text-citron hover:border-citron/50 hover:bg-citron/5',
    },
    {
      Icon: Linkedin,
      href: 'https://linkedin.com/company/astriorb',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5',
    },
    {
      Icon: Twitter,
      href: 'https://twitter.com/astriorb',
      label: 'X (Twitter)',
      hoverColor: 'hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5',
    },
    {
      Icon: Github,
      href: 'https://github.com/astriorb',
      label: 'GitHub',
      hoverColor: 'hover:text-white hover:border-white/50 hover:bg-white/5',
    },
    {
      Icon: Globe,
      href: 'https://astriorb.com',
      label: 'Website',
      hoverColor: 'hover:text-citron hover:border-citron/50 hover:bg-citron/5',
    },
  ];

  return (
    <footer className="dark:bg-obsidian bg-sand dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal border-t relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glow Accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full dark:bg-citron-dim/50 bg-citron/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8 relative z-10">
        {/* 1. Executive Top Telemetry Bar */}
        <div className="pb-6 sm:pb-8 mb-8 sm:mb-10 border-b dark:border-white/10 border-sand-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono">
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/90 bg-white/90 border dark:border-white/10 border-sand-border text-citron font-semibold shadow-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LAB TELEMETRY // ACTIVE RUNTIME</span>
            </span>
            <span className="dark:text-titanium-400 text-sand-charcoal/60 hidden sm:inline">
              KERALA R&D HEADQUARTERS • GLOBAL DEPLOYMENTS
            </span>
          </div>

          <Link
            to="/contact"
            className="w-full sm:w-auto justify-center group/cta inline-flex items-center gap-2 px-3.5 py-2 sm:py-1.5 rounded-xl dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border hover:border-citron text-xs font-mono dark:text-white text-sand-charcoal shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-citron group-hover/cta:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Initiate Partnership or R&D Inquiry</span>
            <span className="sm:hidden">Initiate Partnership / R&D</span>
            <span className="text-citron group-hover/cta:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>

        {/* 2. Main 4-Column Navigation Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12">
          {/* Column 1: Brand & Engineering DNA (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div>
              {/* Brand Title & Vector Logo */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl dark:bg-titanium-800 bg-sand-border/80 border border-citron/40 p-0.5 shadow-md shadow-citron/15 shrink-0">
                  <div className="w-full h-full dark:bg-obsidian bg-white rounded-[10px] flex items-center justify-center p-1.5">
                    <AstriOrbLogo className="w-full h-full text-citron" />
                  </div>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold tracking-tight dark:text-white text-sand-charcoal font-mono leading-none">
                    AstriOrb
                  </span>
                  <span className="block text-[9px] sm:text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider sm:tracking-widest mt-0.5 sm:mt-1">
                    Private Limited • Kerala, India
                  </span>
                </div>
              </div>

              {/* Mission Statement */}
              <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal max-w-sm mb-3 sm:mb-4">
                An independent multi-product software and smart hardware engineering company. Conceived and architected from Kerala, engineering proprietary digital ecosystems across offline finance, AI taste graphs, clinical tools, and postural IoT telemetry.
              </p>

              {/* Founder / IP Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg dark:bg-titanium-900/60 bg-sand-border/35 border dark:border-white/5 border-sand-border text-[10px] sm:text-[11px] font-mono dark:text-titanium-300 text-sand-charcoal/80 whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-citron shrink-0" />
                <span className="hidden sm:inline">Founder: Mohammed Hashim // 100% In-House IP</span>
                <span className="sm:hidden">Mohammed Hashim // 100% In-House IP</span>
              </div>
            </div>

            {/* Social Channels Row */}
            <div>
              <div className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase tracking-wider mb-2.5">
                Lab Channels & Repositories
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className={`w-9 h-9 rounded-xl dark:bg-titanium-800/90 bg-white border dark:border-white/10 border-sand-border dark:text-titanium-300 text-sand-charcoal/70 flex items-center justify-center transition-all duration-200 shadow-sm ${social.hoverColor}`}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Proprietary Product Ecosystem (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b dark:border-white/5 border-sand-border/60">
              <span className="w-1.5 h-1.5 rounded-full bg-citron" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-citron">
                Product Ecosystem
              </h4>
            </div>

            <ul className="space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2 -mx-2 rounded-lg dark:hover:bg-titanium-800/60 hover:bg-sand-border/30 transition-all flex items-center justify-between font-mono"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold dark:text-white text-sand-charcoal group-hover:text-citron transition-colors flex items-center gap-1.5">
                          <span>{link.name}</span>
                          <ExternalLink size={10} className="opacity-60 group-hover:opacity-100" />
                        </span>
                        <span className="text-[10px] dark:text-titanium-400 text-sand-charcoal/60">
                          {link.category}
                        </span>
                      </div>
                      <span className={`text-[8.5px] sm:text-[9px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md border font-semibold flex items-center gap-1 shrink-0 whitespace-nowrap ${link.badgeColor}`}>
                        <span className={`w-1 h-1 rounded-full ${link.dotColor}`} />
                        <span>{link.badge}</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="group p-2 -mx-2 rounded-lg dark:hover:bg-titanium-800/60 hover:bg-sand-border/30 transition-all flex items-center justify-between font-mono"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold dark:text-white text-sand-charcoal group-hover:text-citron transition-colors">
                          {link.name}
                        </span>
                        <span className="text-[10px] dark:text-titanium-400 text-sand-charcoal/60">
                          {link.category}
                        </span>
                      </div>
                      <span className={`text-[8.5px] sm:text-[9px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md border font-semibold flex items-center gap-1 shrink-0 whitespace-nowrap ${link.badgeColor}`}>
                        <span className={`w-1 h-1 rounded-full ${link.dotColor}`} />
                        <span>{link.badge}</span>
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Squad (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b dark:border-white/5 border-sand-border/60">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider dark:text-white text-sand-charcoal">
                Company
              </h4>
            </div>

            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group p-2 -mx-2 rounded-lg dark:hover:bg-titanium-800/60 hover:bg-sand-border/30 transition-all flex items-center justify-between font-mono"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs dark:text-titanium-200 text-sand-charcoal group-hover:text-citron transition-colors flex items-center gap-1">
                        <span>{link.name}</span>
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-citron" />
                      </span>
                      <span className="text-[10px] dark:text-titanium-400 text-sand-charcoal/60">
                        {link.note}
                      </span>
                    </div>

                    {link.badge && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-citron/15 text-citron border border-citron/30 font-bold shrink-0">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Compliance (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b dark:border-white/5 border-sand-border/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider dark:text-white text-sand-charcoal">
                Legal & Governance
              </h4>
            </div>

            <ul className="space-y-1.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group py-1.5 px-2 -mx-2 rounded-lg dark:hover:bg-titanium-800/60 hover:bg-sand-border/30 text-xs dark:text-titanium-300 text-sand-charcoal/80 hover:text-citron transition-all flex items-center justify-between font-mono"
                  >
                    <span className="truncate">{link.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-citron text-[10px]">
                      view
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t dark:border-white/5 border-sand-border/60 text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>Full compliance with GDPR & India DPDP Act.</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Architectural Guarantee Strip */}
        <div className="pt-6 border-t dark:border-white/10 border-sand-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} AstriOrb Private Limited. All rights reserved.</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>Architected in Kerala, India.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-[11px] text-citron font-semibold">
              OFFLINE-FIRST // ZERO CORPORATE TELEMETRY
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-titanium-300 text-sand-charcoal hover:border-citron hover:text-citron transition-all duration-200 shadow-sm cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

