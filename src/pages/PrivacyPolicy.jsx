import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    return (
        <>
            <SEO
                title="Privacy Policy | AstriOrb"
                description="Privacy Policy for AstriOrb Pvt. Ltd. outlining how we handle and protect your data."
                url="/privacy-policy"
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
                            <Shield className="w-8 h-8 text-citron" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-sand-charcoal dark:text-white tracking-tight">
                                Privacy Policy
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
                                1. Introduction
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                AstriOrb Pvt. Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                                This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our products.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                2. Information We Collect
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                <li><strong className="text-sand-charcoal dark:text-white">Personal Information:</strong> Name, email address, and contact details when you reach out to us.</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Device Information:</strong> Browser type, operating system, and device identifiers.</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Cookies:</strong> We use cookies to enhance your experience and analyze website traffic.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                3. How We Use Your Information
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                <li>To provide and maintain our services</li>
                                <li>To respond to your inquiries and support requests</li>
                                <li>To improve our website and products</li>
                                <li>To send important updates about our services</li>
                                <li>To detect and prevent fraud or technical issues</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                4. Data Sharing
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                We do not sell your personal information. We may share data with trusted third-party service providers
                                who assist us in operating our website and conducting our business, subject to confidentiality agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                5. Data Security
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                We implement appropriate technical and organizational measures to protect your personal data against
                                unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                6. Your Rights
                            </h2>
                            <p className="leading-relaxed mb-4 text-sm md:text-base">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Request data portability</li>
                            </ul>
                        </section>

                        <section className="border-t border-sand-border dark:border-white/10 pt-6">
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                7. Contact Us
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
