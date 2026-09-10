import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const TermsOfService = () => {
    return (
        <>
            <SEO
                title="Terms of Service | AstriOrb"
                description="Terms of Service for AstriOrb Pvt. Ltd. governing the use of our website and services."
                url="/terms"
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
                            <FileText className="w-8 h-8 text-citron" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-sand-charcoal dark:text-white tracking-tight">
                                Terms of Service
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
                                1. Agreement to Terms
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                By accessing or using the services provided by AstriOrb Pvt. Ltd., you agree to be bound by these Terms of Service.
                                If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                2. Use of Services
                            </h2>
                            <p className="leading-relaxed mb-4 text-sm md:text-base">You agree to use our services only for lawful purposes. You shall not:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe upon the rights of others</li>
                                <li>Transmit harmful code or malware</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Use our services for fraudulent purposes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                3. Intellectual Property
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                All content, trademarks, and intellectual property on this website and in our products are owned by AstriOrb Pvt. Ltd.
                                You may not reproduce, distribute, or create derivative works without our express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                4. Product Usage
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                Our products are licensed, not sold. Each product may have specific terms and conditions that govern its use.
                                By using our products, you agree to comply with those specific terms in addition to these general Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                5. Disclaimer of Warranties
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                Our services are provided "as is" without warranties of any kind, either express or implied.
                                We do not guarantee that our services will be uninterrupted, secure, or error-free.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                6. Limitation of Liability
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                To the fullest extent permitted by law, AstriOrb Pvt. Ltd. shall not be liable for any indirect, incidental,
                                special, consequential, or punitive damages arising from your use of our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                7. Governing Law
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                These Terms shall be governed by and construed in accordance with the laws of India,
                                without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                8. Changes to Terms
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                We reserve the right to modify these terms at any time. We will notify users of any material changes
                                by posting the updated terms on this page.
                            </p>
                        </section>

                        <section className="border-t border-sand-border dark:border-white/10 pt-6">
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                9. Contact
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                For questions about these Terms of Service, contact us at:
                                <br />
                                <a href="mailto:astriorbofficial@gmail.com" className="text-citron hover:underline font-mono text-sm inline-block mt-2">
                                    astriorbofficial@gmail.com
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

export default TermsOfService;
