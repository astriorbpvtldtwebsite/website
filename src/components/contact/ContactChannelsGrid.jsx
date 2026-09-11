import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Activity,
  Compass,
  Headphones,
  Mail,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

const ContactChannelsGrid = ({ onOpenTastoryModal }) => {
  const channels = [
    {
      id: 'investor',
      icon: Sparkles,
      title: 'Venture Capital & Investor Relations',
      email: 'hashim@astriorb.com',
      scope: 'Tastory seed round, financial due diligence, venture governance & syndicate inquiries.',
      color: 'text-citron',
      borderColor: 'hover:border-citron/50',
      actionText: 'REQUEST PITCH DECK',
      actionType: 'modal',
    },
    {
      id: 'clinical',
      icon: Activity,
      title: 'Clinical & Healthcare Partnerships',
      email: 'support@astriorb.com',
      scope: 'DocCo hospital pilots, clinical workflow integrations & medical data compliance trials.',
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      actionText: 'EMAIL CLINICAL DESK',
      actionType: 'email',
      subject: 'Clinical Pilot Inquiry - Project DocCo',
    },
    {
      id: 'hardware',
      icon: Compass,
      title: 'Embedded Hardware & OEM Labs',
      email: 'support@astriorb.com',
      scope: 'Project ROW hardware gadget manufacturing, ESP32 BLE distribution & embedded firmware.',
      color: 'text-laser-cyan',
      borderColor: 'hover:border-laser-cyan/50',
      actionText: 'EMAIL HARDWARE LAB',
      actionType: 'email',
      subject: 'Hardware Collaboration - Project ROW',
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'FISCLOK Support & Play Store Desk',
      email: 'officialfisclok@gmail.com',
      scope: 'Direct assistance for FISCLOK users on Google Play, MMKV encryption queries & feedback.',
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      actionText: 'FISCLOK USER SUPPORT',
      actionType: 'email',
      subject: 'FISCLOK App Feedback & Support',
    },
  ];

  return (
    <section className="mb-14 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full dark:bg-titanium-800/80 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-3 whitespace-nowrap">
          <Mail size={13} />
          <span className="hidden sm:inline">DEDICATED INBOX CHANNELS</span>
          <span className="sm:hidden">DEDICATED INBOX</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4">
          Specialized Department Desks
        </h2>
        <p className="text-xs sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
          Routing your message to the correct desk ensures rapid response from the responsible technical lead.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {channels.map((ch) => {
          const Icon = ch.icon;
          return (
            <SpotlightCard
              key={ch.id}
              className={`p-4 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col justify-between group ${ch.borderColor} transition-all duration-300 shadow-sm`}
              withCorners
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 sm:mb-4 pb-3 sm:pb-4 border-b dark:border-white/10 border-sand-border">
                  <div className="flex items-center gap-2">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border">
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${ch.color}`} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase whitespace-nowrap">
                      DIRECT DESK
                    </span>
                  </div>

                  <a
                    href={`mailto:${ch.email}`}
                    className="text-[11px] sm:text-xs font-mono dark:text-titanium-300 text-sand-charcoal/80 hover:text-citron transition-colors flex items-center gap-1 self-start sm:self-auto truncate"
                  >
                    <span className="truncate">{ch.email}</span>
                    <ExternalLink size={11} className="opacity-70 shrink-0" />
                  </a>
                </div>

                <h3 className="text-base sm:text-xl font-bold font-mono dark:text-white text-sand-charcoal mb-1.5 sm:mb-2">
                  {ch.title}
                </h3>

                <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal mb-4 sm:mb-6">
                  {ch.scope}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t dark:border-white/10 border-sand-border flex items-center justify-between gap-2">
                {ch.actionType === 'modal' ? (
                  <button
                    onClick={onOpenTastoryModal}
                    className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian hover:bg-citron-light transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Sparkles size={13} />
                    <span>{ch.actionText}</span>
                  </button>
                ) : (
                  <a
                    href={`mailto:${ch.email}?subject=${encodeURIComponent(ch.subject || '')}`}
                    className="text-xs font-mono font-bold text-citron hover:text-flame-coral transition-colors flex items-center gap-1.5"
                  >
                    <span>{ch.actionText}</span>
                    <ArrowRight size={13} />
                  </a>
                )}

                <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 whitespace-nowrap hidden xs:inline">
                  Direct Response Desk
                </span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(ContactChannelsGrid);
