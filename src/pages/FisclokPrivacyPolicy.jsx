import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Mail, Cloud, AlertTriangle, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const FisclokPrivacyPolicy = () => {
    return (
        <>
            <SEO
                title="Privacy Policy - Fisclok | AstriOrb"
                description="Privacy Policy for Fisclok, a personal finance management app by AstriOrb Private Limited. Your data is stored on your device; optional Google Drive Backup writes a copy to your own Drive."
                url="/fisclok/privacy-policy"
            />
            <Navbar />
            <main className="min-h-screen bg-sand dark:bg-obsidian pt-28 pb-20 text-sand-charcoal dark:text-titanium-100 transition-colors duration-300 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-sand-charcoal/70 dark:text-titanium-300 hover:text-citron dark:hover:text-citron transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Products
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="flex justify-center mb-4">
                            <img
                                src="/fisclok_app_icon.png"
                                alt="Fisclok"
                                className="w-20 h-20 rounded-2xl shadow-xl ring-1 ring-black/10 dark:ring-white/10"
                            />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-sand-charcoal dark:text-white mb-2 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                            Fisclok
                        </p>
                        <p className="text-xs font-mono text-sand-charcoal/60 dark:text-titanium-400 mt-2">
                            Last Updated: September 2026
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/95 dark:bg-titanium-900/90 border border-sand-border dark:border-white/10 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-xl space-y-8"
                    >
                        {/* Introduction */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                Introduction
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                Fisclok is committed to protecting your privacy. This policy explains how we handle your information.
                            </p>
                        </section>

                        {/* Data Collection and Storage */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                Data Collection and Storage
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                Your transactions, loans, categories, budgets and settings are stored on your device in encrypted storage. Fisclok has no accounts and no backend. We do NOT collect, transmit, or store any of your personal or financial data on our servers, and we never see it.
                            </p>
                        </section>

                        {/* Google Drive Backup (optional) */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Cloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                Google Drive Backup (optional)
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                This feature is off by default and only runs if you connect your Google account. When enabled, Fisclok writes a single file named <code className="px-1.5 py-0.5 rounded bg-sand-border/50 dark:bg-titanium-950 text-emerald-700 dark:text-emerald-300 font-mono text-xs md:text-sm border border-sand-border dark:border-white/10">fisclok-backup.json</code> to your own Google Drive, containing your transactions, loans, custom categories, budget, recurring rules and preferences. It is uploaded directly from your device to Google over an encrypted connection and never passes through our servers.
                            </p>

                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3 mt-4 text-xs md:text-sm text-sand-charcoal/90 dark:text-titanium-200 leading-relaxed">
                                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                <p>
                                    The backup file is stored in your Google Drive under your own Google account and counts against your own Google storage quota. It is saved as a readable JSON file rather than being separately encrypted by Fisclok, so anyone with access to your Google account can open and read it. Treat access to your Google account as access to your financial history.
                                </p>
                            </div>

                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base mt-4">
                                Fisclok requests only the <code className="px-1.5 py-0.5 rounded bg-sand-border/50 dark:bg-titanium-950 text-emerald-700 dark:text-emerald-300 font-mono text-xs md:text-sm border border-sand-border dark:border-white/10">drive.file</code> permission, which limits its access to files Fisclok itself created. It cannot see, read or modify anything else in your Drive.
                            </p>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base mt-3">
                                You can disconnect at any time in Settings, or revoke access at{' '}
                                <a
                                    href="https://myaccount.google.com/permissions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-600 dark:text-emerald-400 hover:text-citron dark:hover:text-citron underline font-mono text-sm transition-colors"
                                >
                                    myaccount.google.com/permissions
                                </a>
                                . Disconnecting stops future backups; to delete the backup itself, delete the file from your Drive.
                            </p>
                        </section>

                        {/* Announcements */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                Announcements
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                The App periodically downloads a small public notice file so we can share important messages without shipping an update. This is a download only — no information about you or your device is sent with the request.
                            </p>
                        </section>

                        {/* Feedback Data */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                Feedback Data
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                If you choose to send feedback or report a bug, we use your device's email client. The email may include device information and app version. This data is only sent if you explicitly send the email.
                            </p>
                        </section>

                        {/* Permissions */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Permissions
                            </h2>
                            <ul className="list-disc list-inside text-sand-charcoal/85 dark:text-titanium-200 space-y-2 text-sm md:text-base ml-2">
                                <li><strong className="text-sand-charcoal dark:text-white">Internet</strong> — used for Google Drive Backup and announcements only.</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Notifications</strong> — used only for the daily reminder, if you enable it.</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Storage</strong> — used for exporting and importing your data files.</li>
                            </ul>
                            <p className="text-sand-charcoal/70 dark:text-titanium-400 text-xs md:text-sm mt-3">
                                Fisclok does not request camera or photo library access. Profile pictures are chosen from a set of built-in avatars.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Children's Privacy
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                Fisclok is not directed at children under 13 and we do not knowingly collect information from them. As the App collects nothing, no such information reaches us.
                            </p>
                        </section>

                        {/* Changes to This Policy */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Changes to This Policy
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                If this policy changes materially, the updated version will appear here and the date above will be revised.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="border-t border-sand-border dark:border-white/10 pt-6">
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                Contact Us
                            </h2>
                            <ul className="text-sand-charcoal/85 dark:text-titanium-200 space-y-1.5 ml-2 text-sm md:text-base">
                                <li>Email: <a href="mailto:officialfisclok@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:text-citron dark:hover:text-citron underline font-mono text-sm transition-colors">officialfisclok@gmail.com</a></li>
                                <li>Company: AstriOrb Private Limited</li>
                            </ul>
                        </section>
                    </motion.div>

                    {/* Terms Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mt-8"
                    >
                        <Link
                            to="/fisclok/terms"
                            className="text-emerald-600 dark:text-emerald-400 hover:text-citron dark:hover:text-citron font-mono text-sm inline-flex items-center gap-1.5 transition-colors"
                        >
                            View Terms of Service →
                        </Link>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default FisclokPrivacyPolicy;
