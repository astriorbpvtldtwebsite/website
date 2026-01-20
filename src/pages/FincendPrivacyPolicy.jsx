import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Smartphone, Lock, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FincendPrivacyPolicy = () => {
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
                            Privacy Policy
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
                        {/* Key Privacy Highlight */}
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start space-x-3">
                            <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-green-500">Privacy First</p>
                                <p className="text-sm text-light-subtext dark:text-gray-300">
                                    All your financial data is stored locally on your device only. We do NOT collect, transmit, or store any of your personal or financial data on our servers.
                                </p>
                            </div>
                        </div>

                        {/* Introduction */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">Introduction</h2>
                            <p className="text-light-subtext dark:text-gray-300 leading-relaxed">
                                Fincend ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our mobile application.
                            </p>
                        </section>

                        {/* Data Collection */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3 flex items-center">
                                <Lock className="w-5 h-5 mr-2 text-cosmic-purple dark:text-cosmic-neon" />
                                Data Collection and Storage
                            </h2>

                            <h3 className="font-medium text-light-text dark:text-white mt-4 mb-2">Local Storage Only</h3>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-2 ml-2">
                                <li><strong>All your data is stored locally on your device only</strong></li>
                                <li>We use <strong>MMKV encrypted storage</strong> for fast and secure data persistence</li>
                                <li>We do NOT collect, transmit, or store any of your personal or financial data on our servers</li>
                                <li>We do NOT have access to your transaction history, loan information, or any other data you enter in the app</li>
                            </ul>

                            <h3 className="font-medium text-light-text dark:text-white mt-4 mb-2">Data You Provide</h3>
                            <p className="text-light-subtext dark:text-gray-300 mb-2">When using Fincend, you may enter:</p>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 ml-2">
                                <li>Transaction records (income and expenses)</li>
                                <li>Loan information</li>
                                <li>Budget data</li>
                                <li>Category customizations</li>
                                <li>Profile information (name, profile picture)</li>
                            </ul>
                            <p className="text-light-subtext dark:text-gray-300 mt-3 font-medium">
                                Important: All this data remains on your device and is never transmitted to us or any third party.
                            </p>
                        </section>

                        {/* Permissions */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3 flex items-center">
                                <Smartphone className="w-5 h-5 mr-2 text-cosmic-purple dark:text-cosmic-neon" />
                                Permissions
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="font-medium text-light-text dark:text-white">Camera Permission</h3>
                                    <p className="text-light-subtext dark:text-gray-300 text-sm">Used only to take profile pictures. Photos are stored locally on your device.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-light-text dark:text-white">Photo Library Permission</h3>
                                    <p className="text-light-subtext dark:text-gray-300 text-sm">Used only to select profile pictures from your gallery.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-light-text dark:text-white">Storage Permission</h3>
                                    <p className="text-light-subtext dark:text-gray-300 text-sm">Used to save and export your financial data. All data remains under your control.</p>
                                </div>
                            </div>
                        </section>

                        {/* Third-Party Services */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">Third-Party Services</h2>

                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-4">
                                <h3 className="font-medium text-yellow-500 mb-2">Google AdMob (Advertising)</h3>
                                <p className="text-light-subtext dark:text-gray-300 text-sm mb-2">
                                    Fincend uses Google AdMob to display advertisements. AdMob may collect certain information from your device for advertising purposes, including:
                                </p>
                                <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-1 text-sm ml-2">
                                    <li><strong>Device Identifiers:</strong> Advertising ID (Android) or IDFA (iOS) for personalized advertising</li>
                                    <li><strong>Device Information:</strong> Device type, operating system version, and mobile network information</li>
                                    <li><strong>Interaction Data:</strong> Information about how you interact with ads</li>
                                </ul>
                                <p className="text-light-subtext dark:text-gray-300 text-sm mt-3">
                                    AdMob's data collection is governed by{' '}
                                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cosmic-purple dark:text-cosmic-neon hover:underline">
                                        Google's Privacy Policy
                                    </a>.
                                </p>
                                <p className="text-light-subtext dark:text-gray-300 text-sm mt-2">
                                    You can opt out of personalized ads in your device settings:
                                </p>
                                <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 text-sm ml-2 mt-1">
                                    <li>Android: Settings → Google → Ads → Opt out of Ads Personalization</li>
                                    <li>iOS: Settings → Privacy → Advertising → Limit Ad Tracking</li>
                                </ul>
                            </div>

                            <p className="text-light-subtext dark:text-gray-300">
                                Apart from AdMob, Fincend does NOT use any other third-party analytics or tracking services.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">Data Security</h2>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-2 ml-2">
                                <li>Your data is stored securely on your device using <strong>MMKV encrypted storage</strong></li>
                                <li>MMKV provides military-grade encryption for your financial data</li>
                                <li>We recommend setting up device security (PIN, password, biometric) to protect your data</li>
                                <li>Regular backups are your responsibility</li>
                            </ul>
                        </section>

                        {/* Data Deletion */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">Data Deletion</h2>
                            <p className="text-light-subtext dark:text-gray-300">
                                To delete your data:
                            </p>
                            <ol className="list-decimal list-inside text-light-subtext dark:text-gray-300 mt-2 ml-2">
                                <li>Uninstall the Fincend app from your device</li>
                                <li>All locally stored data will be permanently removed</li>
                            </ol>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">Children's Privacy</h2>
                            <p className="text-light-subtext dark:text-gray-300">
                                Fincend does not knowingly collect information from children under 13. The app is intended for users who are at least 13 years old.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3">Your Rights</h2>
                            <ul className="list-disc list-inside text-light-subtext dark:text-gray-300 space-y-2 ml-2">
                                <li><strong>Access:</strong> All data is on your device</li>
                                <li><strong>Delete:</strong> Uninstall the app to remove all data</li>
                                <li><strong>Export:</strong> Use the in-app export feature</li>
                            </ul>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-xl font-semibold text-light-text dark:text-white mb-3 flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-cosmic-purple dark:text-cosmic-neon" />
                                Contact Us
                            </h2>
                            <p className="text-light-subtext dark:text-gray-300">
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <ul className="text-light-subtext dark:text-gray-300 mt-2 ml-2">
                                <li>Email: <a href="mailto:officialfincend@gmail.com" className="text-cosmic-purple dark:text-cosmic-neon hover:underline">officialfincend@gmail.com</a></li>
                                <li>Company: AstriOrb Private Limited</li>
                            </ul>
                        </section>

                        {/* Consent */}
                        <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <p className="text-light-subtext dark:text-gray-300 text-sm">
                                By using Fincend, you consent to this Privacy Policy.
                            </p>
                            <p className="text-light-subtext dark:text-gray-400 text-sm mt-4">
                                <strong>Summary:</strong> Fincend is a privacy-first app. All your financial data stays on your device. We don't collect, transmit, or store any of your personal information. AdMob collects device identifiers for advertising purposes only.
                            </p>
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
                            to="/fincend/terms"
                            className="text-cosmic-purple dark:text-cosmic-neon hover:underline"
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

export default FincendPrivacyPolicy;
