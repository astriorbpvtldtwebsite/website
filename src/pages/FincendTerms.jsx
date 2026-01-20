import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FincendTerms = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-light-bg dark:bg-gradient-cosmic pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center text-cosmic-purple dark:text-cosmic-neon hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
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
                                src="/fincend_app_icon.png"
                                alt="Fincend"
                                className="w-20 h-20 rounded-2xl shadow-lg"
                            />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white mb-2">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-cosmic-purple dark:text-cosmic-neon font-medium">
                            Fincend
                        </p>
                        <p className="text-sm text-light-subtext dark:text-gray-400 mt-2">
                            Last Updated: January 2026
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-effect rounded-2xl p-6 md:p-10 space-y-8"
                    >
                        {/* 1. Acceptance */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3 flex items-center">
                                <FileText className="w-5 h-5 mr-2 text-cosmic-purple dark:text-cosmic-neon" />
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-light-subtext dark:text-gray-300 leading-relaxed">
                                By downloading, installing, or using Fincend ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
                            </p>
                        </section>

                        {/* 2. Description */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">2. Description of Service</h2>
                            <p className="text-light-subtext dark:text-gray-300 mb-2">
                                Fincend is a personal finance management application that helps you:
                            </p>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>Track income and expenses</li>
                                <li>Manage loans (money lent and borrowed)</li>
                                <li>Create and monitor budgets</li>
                                <li>Categorize transactions</li>
                                <li>Analyze spending patterns</li>
                                <li>Export financial data</li>
                            </ul>
                        </section>

                        {/* 3. User Responsibilities */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">3. User Responsibilities</h2>

                            <h3 className="font-medium text-light-text dark:text-white mt-4 mb-2">You agree to:</h3>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>Provide accurate information when using the App</li>
                                <li>Keep your device secure to protect your financial data</li>
                                <li>Use the App for lawful purposes only</li>
                                <li>Not attempt to reverse engineer, decompile, or hack the App</li>
                                <li>Not use the App to track finances for illegal activities</li>
                            </ul>

                            <h3 className="font-medium text-light-text dark:text-white mt-4 mb-2">You understand that:</h3>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>You are solely responsible for the accuracy of data you enter</li>
                                <li>You should regularly backup your data</li>
                                <li>The App is for personal use only</li>
                            </ul>
                        </section>

                        {/* 4. Data and Privacy */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">4. Data and Privacy</h2>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>All your data is stored locally on your device</li>
                                <li>We do not collect, access, or transmit your financial data</li>
                                <li>You are responsible for backing up your data</li>
                                <li>See our <Link to="/fincend/privacy-policy" className="text-cosmic-purple dark:text-cosmic-neon hover:underline">Privacy Policy</Link> for more details</li>
                            </ul>
                        </section>

                        {/* 5. Disclaimer */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">5. Disclaimer of Warranties</h2>
                            <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-4">
                                <p className="text-light-subtext dark:text-gray-300 text-sm uppercase">
                                    THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                                </p>
                                <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2 mt-2 text-sm">
                                    <li>Accuracy of calculations</li>
                                    <li>Uninterrupted or error-free operation</li>
                                    <li>Fitness for a particular purpose</li>
                                    <li>Data loss prevention</li>
                                </ul>
                            </div>
                        </section>

                        {/* 6. Limitation of Liability */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">6. Limitation of Liability</h2>
                            <p className="text-light-subtext dark:text-gray-300 text-sm uppercase mb-2">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                            </p>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>We are not liable for any financial losses or decisions made based on the App</li>
                                <li>We are not liable for data loss (please backup regularly)</li>
                                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                                <li>Our total liability shall not exceed the amount you paid for the App (if any)</li>
                            </ul>
                        </section>

                        {/* 7. Financial Advice Disclaimer */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3 flex items-center">
                                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
                                7. Financial Advice Disclaimer
                            </h2>
                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                                <p className="font-medium text-yellow-500 mb-2">Fincend is NOT a financial advisor</p>
                                <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2 text-sm">
                                    <li>The App provides tools for tracking and organizing your finances</li>
                                    <li>It does not provide financial, investment, tax, or legal advice</li>
                                    <li>Always consult qualified professionals for financial decisions</li>
                                    <li>We are not responsible for financial decisions you make</li>
                                </ul>
                            </div>
                        </section>

                        {/* 8. Intellectual Property */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">8. Intellectual Property</h2>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>Fincend and its original content, features, and functionality are owned by AstriOrb Private Limited</li>
                                <li>You may not copy, modify, distribute, or create derivative works</li>
                                <li>All trademarks and logos are our property</li>
                            </ul>
                        </section>

                        {/* 9. Updates */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">9. Updates and Changes</h2>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>We may update the App from time to time</li>
                                <li>Updates may include new features, bug fixes, or changes</li>
                                <li>We may modify these Terms at any time</li>
                                <li>Continued use after changes means you accept the new Terms</li>
                            </ul>
                        </section>

                        {/* 10. Termination */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">10. Termination</h2>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>You may stop using the App at any time by uninstalling it</li>
                                <li>We reserve the right to terminate or suspend access for violations of these Terms</li>
                                <li>Upon termination, all data on your device will remain until you delete the App</li>
                            </ul>
                        </section>

                        {/* 11. Governing Law */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">11. Governing Law</h2>
                            <p className="text-light-subtext dark:text-gray-300">
                                These Terms shall be governed by and construed in accordance with the laws of India.
                            </p>
                        </section>

                        {/* 12. Contact */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3 flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-cosmic-purple dark:text-cosmic-neon" />
                                12. Contact Information
                            </h2>
                            <p className="text-light-subtext dark:text-gray-300">
                                For questions about these Terms, contact us at:
                            </p>
                            <ul className="text-light-subtext dark:text-gray-300 mt-2 ml-2">
                                <li>Email: <a href="mailto:officialfincend@gmail.com" className="text-cosmic-purple dark:text-cosmic-neon hover:underline">officialfincend@gmail.com</a></li>
                                <li>Company: AstriOrb Private Limited</li>
                            </ul>
                        </section>

                        {/* Acknowledgment */}
                        <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <p className="text-light-subtext dark:text-gray-300 text-sm uppercase">
                                BY USING FINCEND, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                            </p>
                            <p className="text-light-subtext dark:text-gray-400 text-sm mt-4">
                                <strong>Remember:</strong> Fincend is a tool to help you manage your finances. Always make informed decisions and consult professionals when needed.
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
                            to="/fincend/privacy-policy"
                            className="text-cosmic-purple dark:text-cosmic-neon hover:underline"
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

export default FincendTerms;
