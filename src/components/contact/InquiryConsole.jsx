import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, RefreshCw, AlertCircle, MessageSquare } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import { sanitizeFormData } from '../../utils/sanitize';
import { SUCCESS_MESSAGE_DURATION, EMAIL_CONFIG } from '../../utils/constants';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key if available
if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}

import CustomSelect from '../CustomSelect';

const inquiryTypes = [
  {
    value: 'investor_tastory',
    label: 'Investor Relations (Project Tastory)',
    shortLabel: 'Investor (Tastory)',
    title: 'Investor Relations',
    subtitle: 'Project Tastory • Seed Round Due Diligence',
    badge: 'Tastory Seed',
  },
  {
    value: 'client_docco',
    label: 'Clinical / Healthcare Pilots (Project DocCo)',
    shortLabel: 'Clinical (DocCo)',
    title: 'Clinical & Healthcare Pilots',
    subtitle: 'Project DocCo • Hospital & Clinical Trials',
    badge: 'DocCo Clinical',
  },
  {
    value: 'row_hardware',
    label: 'Embedded Hardware OEM (Project ROW)',
    shortLabel: 'Hardware (Project ROW)',
    title: 'Embedded Hardware OEM',
    subtitle: 'Project ROW • ESP32 BLE Hardware & Firmware',
    badge: 'Project ROW',
  },
  {
    value: 'fisclok_support',
    label: 'FISCLOK Product & Play Store Feedback',
    shortLabel: 'FISCLOK Support',
    title: 'FISCLOK Support & Feedback',
    subtitle: 'Google Play Store • Privacy & MMKV Vault Help',
    badge: 'Play Store App',
  },
  {
    value: 'continuum_beta',
    label: 'Continuum OS Early Access',
    shortLabel: 'Continuum OS',
    title: 'Continuum OS Early Access',
    subtitle: 'Next-Gen Mobile OS Architecture • Developer Beta',
    badge: 'OS Beta',
  },
  {
    value: 'general_partnership',
    label: 'General Venture & Architecture Collab',
    shortLabel: 'General Venture',
    title: 'General Venture & Architecture',
    subtitle: 'Founder Direct • Strategic Partnerships & Synergies',
    badge: 'Founding Studio',
  },
];

const InquiryConsole = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    inquiry_type: 'investor_tastory',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChannelPill = (val) => {
    setFormData((prev) => ({
      ...prev,
      inquiry_type: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const sanitizedData = sanitizeFormData(formData);

    if (!sanitizedData.from_email) {
      setError('Please provide a valid email address.');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      to_name: `${EMAIL_CONFIG.companyName} Team`,
      to_email: EMAIL_CONFIG.companyEmail,
      from_name: sanitizedData.from_name,
      from_email: sanitizedData.from_email,
      company: sanitizedData.company || 'Not specified',
      inquiry_type: sanitizedData.inquiry_type,
      message: sanitizedData.message,
      reply_to: sanitizedData.from_email,
      website_url: 'https://astriorb.com',
      company_logo: 'https://astriorb.com/logo.png',
      linkedin_url: 'https://linkedin.com/company/astriorb',
    };

    const targetEmail = (sanitizedData.inquiry_type === 'investor_tastory' || sanitizedData.inquiry_type === 'general_partnership')
      ? 'hashim@astriorb.com'
      : 'support@astriorb.com';

    try {
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
        );
      } else {
        // Fallback simulation/mailto trigger
        const subject = encodeURIComponent(`[AstriOrb Inquiry] ${sanitizedData.inquiry_type} - ${sanitizedData.from_name}`);
        const body = encodeURIComponent(
          `From: ${sanitizedData.from_name} (${sanitizedData.from_email})\n` +
          `Entity: ${sanitizedData.company}\n` +
          `Inquiry: ${sanitizedData.inquiry_type}\n\n` +
          `Message:\n${sanitizedData.message}`
        );
        window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
      }

      setIsSubmitted(true);
      setFormData({
        from_name: '',
        from_email: '',
        company: '',
        inquiry_type: 'investor_tastory',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, SUCCESS_MESSAGE_DURATION);
    } catch (err) {
      console.error('Failed to send message:', err);
      // Fallback mailto
      const subject = encodeURIComponent(`[AstriOrb Inquiry] ${sanitizedData.inquiry_type} - ${sanitizedData.from_name}`);
      const body = encodeURIComponent(
        `From: ${sanitizedData.from_name} (${sanitizedData.from_email})\n` +
        `Entity: ${sanitizedData.company}\n\n` +
        `Message:\n${sanitizedData.message}`
      );
      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mb-14 sm:mb-20">
      <SpotlightCard className="p-4 sm:p-10 lg:p-12 relative overflow-hidden rounded-xl sm:rounded-2xl" withCorners>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b dark:border-white/10 border-sand-border">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider font-bold mb-1">
                <MessageSquare size={14} />
                <span>INQUIRY TRANSMISSION CONSOLE</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold font-mono dark:text-white text-sand-charcoal">
                Send an Encrypted Dispatch
              </h3>
            </div>

            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-emerald-400 dark:bg-emerald-500/10 bg-emerald-500/20 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-500/30 self-start sm:self-auto">
              <ShieldCheck size={13} />
              <span>Zero-Surveillance Privacy</span>
            </div>
          </div>

          {/* Quick Select Channel Pills (swipeable horizontal row on mobile) */}
          <div className="mb-6 sm:mb-8">
            <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/70 block mb-2 sm:mb-2.5">
              1. Select Area of Interest / Subject Node
            </label>
            <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center gap-1.5 sm:gap-2 pb-1 -mx-4 sm:mx-0 px-4 sm:px-0">
              {inquiryTypes.map((type) => {
                const isSelected = formData.inquiry_type === type.value;
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleSelectChannelPill(type.value)}
                    className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${isSelected
                        ? 'bg-citron text-obsidian font-bold shadow-md shadow-citron/25'
                        : 'dark:bg-titanium-900/80 bg-sand-border/50 dark:text-titanium-300 text-sand-charcoal/80 border dark:border-white/5 border-sand-border hover:border-citron/40 hover:text-citron'
                      }`}
                  >
                    <span className="hidden sm:inline">{type.label}</span>
                    <span className="sm:hidden">{type.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <label className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider dark:text-titanium-400 text-sand-charcoal/70 block">
              2. Transmission Coordinates
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name *"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal placeholder:text-sand-charcoal/40 dark:placeholder:text-titanium-500 focus:outline-none focus:border-citron shadow-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal placeholder:text-sand-charcoal/40 dark:placeholder:text-titanium-500 focus:outline-none focus:border-citron shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Organization / Entity / Fund (Optional)"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal placeholder:text-sand-charcoal/40 dark:placeholder:text-titanium-500 focus:outline-none focus:border-citron shadow-sm"
                />
              </div>

              <div>
                <CustomSelect
                  name="inquiry_type"
                  required
                  value={formData.inquiry_type}
                  onChange={(val) => setFormData((p) => ({ ...p, inquiry_type: val }))}
                  options={inquiryTypes}
                  modalTitle="Select Subject Node"
                  modalIcon={MessageSquare}
                  placeholder="Select Area of Inquiry"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe your inquiry, investment thesis, partnership proposal, or product feedback..."
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono dark:bg-titanium-900 bg-sand-border/30 border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal placeholder:text-sand-charcoal/40 dark:placeholder:text-titanium-500 focus:outline-none focus:border-citron shadow-sm custom-scrollbar"
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                <AlertCircle size={15} />
                <span>{error}</span>
              </div>
            )}

            {isSubmitted && (
              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-center gap-2">
                <CheckCircle2 size={16} />
                <span>Transmission successful! Our technical leadership team will respond within 24 hours.</span>
              </div>
            )}

            <div className="pt-2.5 sm:pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60 text-center sm:text-left">
                Encrypted in transit • Zero non-consensual telemetry
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    <span>TRANSMITTING DISPATCH...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>TRANSMIT DISPATCH</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default React.memo(InquiryConsole);
