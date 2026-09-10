import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Cloud, AlertCircle, ShieldAlert, CheckCircle, Database } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const FisclokTerms = () => {
    return (
        <>
            <SEO
                title="Terms of Service - Fisclok | AstriOrb"
                description="Terms of Service for Fisclok, a personal finance management app by AstriOrb Private Limited."
                url="/fisclok/terms"
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
                            Terms of Service
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
                        {/* 1. Acceptance of Terms */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                By downloading, installing, or using Fisclok ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
                            </p>
                        </section>

                        {/* 2. Description of Service */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                2. Description of Service
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                Fisclok is a personal finance management application that helps you track income and expenses, manage loans, create budgets, and analyze spending patterns.
                            </p>
                        </section>

                        {/* 3. User Responsibilities */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <AlertCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                3. User Responsibilities
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                You agree to provide accurate information and keep your device secure. You are solely responsible for the accuracy of data you enter and should regularly backup your data.
                            </p>
                        </section>

                        {/* 4. Data and Privacy */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                4. Data and Privacy
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                Your data is stored on your device and is never sent to our servers. If you turn on Google Drive Backup, a copy is written to your own Google Drive account. You remain responsible for the accuracy of your data and for keeping a backup.
                            </p>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base mt-2">
                                See our <Link to="/fisclok/privacy-policy" className="text-emerald-600 dark:text-emerald-400 hover:text-citron dark:hover:text-citron underline font-mono text-sm transition-colors">Privacy Policy</Link> for more details.
                            </p>
                        </section>

                        {/* 5. Google Drive Backup */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <Cloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                5. Google Drive Backup
                            </h2>
                            <p className="text-sand-charcoal/85 dark:text-titanium-200 leading-relaxed text-sm md:text-base">
                                Google Drive Backup is optional and off by default. If you enable it, you authorise the App to create and update a single backup file in your own Google Drive. That file is held under your Google account and is subject to Google's own terms. We cannot see it. You may disconnect at any time from Settings.
                            </p>
                        </section>

                        {/* 6. Disclaimer of Warranties */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3 flex items-center gap-2.5">
                                <ShieldAlert className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                6. Disclaimer of Warranties
                            </h2>
                            <div className="bg-sand-light dark:bg-titanium-950/80 border border-sand-border dark:border-white/10 rounded-xl p-4">
                                <p className="text-xs md:text-sm font-mono text-sand-charcoal/80 dark:text-titanium-300 leading-relaxed uppercase">
                                    THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee accuracy of calculations or error-free operation.
                                </p>
                            </div>
                        </section>

                        {/* 7. Limitation of Liability */}
                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-sand-charcoal dark:text-white mb-3">
                                7. Limitation of Liability
                            </h2>
                            <p className="text-xs md:text-sm font-mono text-sand-charcoal/80 dark:text-titanium-300 leading-relaxed uppercase">
                                We are not liable for any financial losses, data loss, or decisions made based on the App.
                            </p>
                        </section>
                    </motion.div>

                    {/* Privacy Policy Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mt-8"
                    >
                        <Link
                            to="/fisclok/privacy-policy"
                            className="text-emerald-600 dark:text-emerald-400 hover:text-citron dark:hover:text-citron font-mono text-sm inline-flex items-center gap-1.5 transition-colors"
                        >
                            ← View Privacy Policy
                        </Link>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default FisclokTerms;
