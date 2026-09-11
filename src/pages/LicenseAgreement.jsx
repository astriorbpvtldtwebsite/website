import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const LicenseAgreement = () => {
    return (
        <>
            <SEO
                title="License Agreement | AstriOrb"
                description="Software End User License Agreement (EULA) for AstriOrb Pvt. Ltd. products."
                url="/license"
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
                        className="flex items-center mb-8 gap-4"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-citron/10 border border-citron/30 flex items-center justify-center shrink-0">
                            <Scale className="w-8 h-8 text-citron" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-sand-charcoal dark:text-white tracking-tight">
                                License Agreement
                            </h1>
                            <p className="text-xs font-mono text-sand-charcoal/60 dark:text-titanium-400 mt-1">
                                AstriOrb Private Limited
                            </p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/95 dark:bg-titanium-900/90 border border-sand-border dark:border-white/10 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-xl space-y-8 text-sand-charcoal/85 dark:text-titanium-200"
                    >
                        <p className="text-xs font-mono text-sand-charcoal/60 dark:text-titanium-400">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                1. Grant of License
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                AstriOrb Pvt. Ltd. grants you a non-exclusive, non-transferable, limited license to use our software products
                                in accordance with this agreement. This license does not include the right to sublicense or modify the software.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                2. Restrictions
                            </h2>
                            <p className="leading-relaxed mb-4 text-sm md:text-base">You may not:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                <li>Copy, modify, or distribute the software without authorization</li>
                                <li>Reverse engineer, decompile, or disassemble the software</li>
                                <li>Remove or alter any proprietary notices or labels</li>
                                <li>Use the software for any unlawful purpose</li>
                                <li>Transfer the license to another party without written consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                3. Intellectual Property
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                The software and all copies thereof are proprietary to AstriOrb Pvt. Ltd. and title thereto remains in us.
                                All applicable rights in the software not expressly granted in this agreement are reserved by us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                4. Updates and Support
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                We may provide updates, patches, or new versions of our software at our discretion.
                                This license entitles you to receive updates as they become available for the licensed product.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                5. Termination
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                This license is effective until terminated. It will terminate automatically if you fail to comply with any term of this agreement.
                                Upon termination, you must destroy all copies of the software in your possession.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                6. Disclaimer
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES,
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                7. Limitation of Liability
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                IN NO EVENT SHALL ASTRIORB PVT. LTD. BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES
                                ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE.
                            </p>
                        </section>

                        <section className="border-t border-sand-border dark:border-white/10 pt-6">
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                8. Contact
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                For licensing inquiries, please contact:
                                <br />
                                <a href="mailto:support@astriorb.com" className="text-citron hover:underline font-mono text-sm inline-block mt-2">
                                    support@astriorb.com
                                </a>
                            </p>
                        </section>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default LicenseAgreement;
