import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, MessageSquare, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { sanitizeFormData } from '../utils/sanitize';
import { SUCCESS_MESSAGE_DURATION, EMAIL_CONFIG } from '../utils/constants';
import emailjs from '@emailjs/browser';
import CustomSelect from './CustomSelect';

// Initialize EmailJS with public key from environment variables if available
if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    inquiry_type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const form = useRef();

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

    if (!sanitizedData.inquiry_type) {
      setError('Please select an area of inquiry.');
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

    try {
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
        );
      } else {
        const subject = encodeURIComponent(`[AstriOrb Inquiry] ${sanitizedData.inquiry_type} - ${sanitizedData.from_name}`);
        const body = encodeURIComponent(
          `From: ${sanitizedData.from_name} (${sanitizedData.from_email})\n` +
          `Entity: ${sanitizedData.company || 'Not specified'}\n` +
          `Inquiry: ${sanitizedData.inquiry_type}\n\n` +
          `Message:\n${sanitizedData.message}`
        );
        window.location.href = `mailto:support@astriorb.com?subject=${subject}&body=${body}`;
      }
      setIsSubmitted(true);
      setFormData({
        from_name: '',
        from_email: '',
        company: '',
        inquiry_type: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, SUCCESS_MESSAGE_DURATION);
    } catch (err) {
      console.error('Failed to send message:', err);
      setError(err?.text || err?.message || 'Failed to deliver message. Please email support@astriorb.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Business & Investor Relations',
      info: 'hashim@astriorb.com',
      link: 'mailto:hashim@astriorb.com',
      sub: 'Tastory funding, partnerships & enterprise',
    },
    {
      Icon: Headphones,
      title: 'FISCLOK Product Support',
      info: 'officialfisclok@gmail.com',
      link: 'mailto:officialfisclok@gmail.com',
      sub: 'User feedback & Play Store assistance',
    },
    {
      Icon: Linkedin,
      title: 'LinkedIn Network',
      info: '/company/astriorb',
      link: 'https://linkedin.com/company/astriorb',
      sub: 'Founder & company announcements',
    },
    {
      Icon: MapPin,
      title: 'Engineering Headquarters',
      info: 'Kerala, India',
      link: 'https://www.google.com/maps/place/Kerala,+India',
      sub: 'Remote-first product lab',
    },
  ];

  const inquiryTypes = [
    {
      value: 'investor_tastory',
      title: 'Investor Relations / Funding',
      subtitle: 'Project Tastory • Seed Round Due Diligence',
      badge: 'Tastory Seed',
    },
    {
      value: 'client_docco',
      title: 'Clinical / Healthcare Pilots',
      subtitle: 'Project DocCo • Hospital & Clinical Trials',
      badge: 'DocCo Clinical',
    },
    {
      value: 'fisclok_support',
      title: 'FISCLOK Product Support',
      subtitle: 'Google Play Store • Privacy & MMKV Help',
      badge: 'FISCLOK',
    },
    {
      value: 'continuum_beta',
      title: 'Continuum OS Early Access',
      subtitle: 'Next-Gen Mobile OS Architecture • Developer Beta',
      badge: 'OS Beta',
    },
    {
      value: 'row_hardware',
      title: 'Project ROW Hardware OEM',
      subtitle: 'ESP32-S3 Microcontroller & BLE Prototyping',
      badge: 'Project ROW',
    },
    {
      value: 'general_partnership',
      title: 'General Venture & Architecture',
      subtitle: 'Founder Direct • Strategic Partnerships & Synergies',
      badge: 'Founding Studio',
    },
  ];

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 dark:bg-brand-cyan/10 border border-brand-blue/20 dark:border-brand-cyan/25 mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan" />
          <span className="text-xs font-mono font-semibold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
            Direct Communication
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-text dark:text-white tracking-tight mb-4">
          Connect With AstriOrb
        </h2>
        <p className="text-base sm:text-lg text-light-subtext dark:text-tech-400 leading-relaxed">
          Whether you are an investor looking at our flagship (Tastory), a medical partner discussing DocCo, or a user with product feedback—we look forward to hearing from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {contactInfo.map((item) => {
            const ItemIcon = item.Icon;
            return (
              <a
                key={item.title}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card rounded-2xl p-5 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-cyan/10 text-brand-blue dark:text-brand-cyan flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <ItemIcon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-light-subtext dark:text-tech-400 uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-light-text dark:text-white group-hover:text-brand-cyan transition-colors mt-0.5">
                    {item.info}
                  </p>
                  <p className="text-xs text-light-subtext dark:text-tech-500 mt-1">
                    {item.sub}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Column: Contact Form */}
        <motion.div variants={fadeInUp} className="lg:col-span-7">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-light-subtext dark:text-tech-400 mb-1.5 uppercase">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-light-text dark:text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-light-subtext dark:text-tech-400 mb-1.5 uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-light-text dark:text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-light-subtext dark:text-tech-400 mb-1.5 uppercase">
                  Organization / Entity (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Firm, Fund, or Hospital"
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-light-text dark:text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>

              <div>
                <CustomSelect
                  name="inquiry_type"
                  label="Subject / Inquiry Type"
                  required
                  value={formData.inquiry_type}
                  onChange={(val) => setFormData((p) => ({ ...p, inquiry_type: val }))}
                  options={inquiryTypes}
                  modalTitle="Select Inquiry Type"
                  modalIcon={MessageSquare}
                  placeholder="Select Area of Inquiry"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-light-subtext dark:text-tech-400 mb-1.5 uppercase">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about your proposal, investment query, or product question..."
                className="w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-light-text dark:text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors custom-scrollbar"
              />
            </div>

            {error && (
              <p className="text-xs text-rose-500 font-mono text-center">{error}</p>
            )}

            {isSubmitted && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono flex items-center justify-center gap-2">
                <CheckCircle2 size={16} />
                <span>Message received! Our team will respond shortly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl font-mono font-semibold text-sm bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={16} />
              <span>{isSubmitting ? 'TRANSMITTING MESSAGE...' : 'SEND INQUIRY'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
