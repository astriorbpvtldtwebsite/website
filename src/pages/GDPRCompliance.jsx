import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const GDPRCompliance = () => {
    return (
        <>
            <SEO
                title="GDPR Compliance | AstriOrb"
                description="GDPR compliance statement and user rights for AstriOrb Pvt. Ltd."
                url="/gdpr"
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
                            <ShieldCheck className="w-8 h-8 text-citron" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-sand-charcoal dark:text-white tracking-tight">
                                GDPR Compliance
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
                                Our Commitment to GDPR
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                AstriOrb Pvt. Ltd. is committed to ensuring the security and protection of personal information that we process.
                                We comply with the General Data Protection Regulation (GDPR) and provide this document to explain how we process
                                and protect personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Data Controller
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                AstriOrb Pvt. Ltd. acts as the Data Controller for personal data collected through our website and services.
                                We determine the purposes and means of processing personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Legal Basis for Processing
                            </h2>
                            <p className="leading-relaxed mb-4 text-sm md:text-base">We process personal data under the following legal bases:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                <li><strong className="text-sand-charcoal dark:text-white">Consent:</strong> You have given clear consent for us to process your personal data</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Contract:</strong> Processing is necessary for a contract with you</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Legal Obligation:</strong> Processing is necessary for compliance with the law</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Your Rights Under GDPR
                            </h2>
                            <p className="leading-relaxed mb-4 text-sm md:text-base">As a data subject, you have the following rights:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                <li><strong className="text-sand-charcoal dark:text-white">Right to Access:</strong> Request copies of your personal data</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Right to Rectification:</strong> Request correction of inaccurate data</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Right to Erasure:</strong> Request deletion of your data ("Right to be Forgotten")</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Right to Restrict Processing:</strong> Request limitation of data processing</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Right to Object:</strong> Object to processing of your personal data</li>
                                <li><strong className="text-sand-charcoal dark:text-white">Rights Related to Automated Decision Making:</strong> Rights concerning profiling</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Data Retention
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected,
                                or as required by law. When data is no longer needed, it is securely deleted or anonymized.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                International Transfers
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                If we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards
                                are in place to protect your data in accordance with GDPR requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Data Protection Officer
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                For any GDPR-related inquiries or to exercise your rights, please contact our Data Protection team at:
                                <br />
                                <a href="mailto:support@astriorb.com" className="text-citron hover:underline font-mono text-sm inline-block mt-2">
                                    support@astriorb.com
                                </a>
                            </p>
                        </section>

                        <section className="border-t border-sand-border dark:border-white/10 pt-6">
                            <h2 className="text-xl md:text-2xl font-bold text-sand-charcoal dark:text-white mb-3">
                                Supervisory Authority
                            </h2>
                            <p className="leading-relaxed text-sm md:text-base">
                                You have the right to lodge a complaint with a supervisory authority if you believe your data protection
                                rights have been violated.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default GDPRCompliance;
