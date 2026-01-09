import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale } from 'lucide-react';

const LicenseAgreement = () => {
    useEffect(() => {
        document.title = 'License Agreement | AstriOrb';
    }, []);

    return (
        <div className="min-h-screen bg-light-bg dark:bg-gradient-cosmic py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center text-cosmic-purple hover:text-cosmic-neon transition-colors mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>

                    <div className="flex items-center mb-8">
                        <Scale className="w-10 h-10 text-cosmic-purple mr-4" />
                        <h1 className="text-4xl font-bold text-light-text dark:text-white">
                            License Agreement
                        </h1>
                    </div>

                    <div className="glass-effect rounded-2xl p-8 space-y-8 text-light-subtext dark:text-gray-300">
                        <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">1. Grant of License</h2>
                            <p className="leading-relaxed">
                                AstriOrb Pvt. Ltd. grants you a non-exclusive, non-transferable, limited license to use our software products
                                in accordance with this agreement. This license does not include the right to sublicense or modify the software.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">2. Restrictions</h2>
                            <p className="leading-relaxed mb-4">You may not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Copy, modify, or distribute the software without authorization</li>
                                <li>Reverse engineer, decompile, or disassemble the software</li>
                                <li>Remove or alter any proprietary notices or labels</li>
                                <li>Use the software for any unlawful purpose</li>
                                <li>Transfer the license to another party without written consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">3. Intellectual Property</h2>
                            <p className="leading-relaxed">
                                The software and all copies thereof are proprietary to AstriOrb Pvt. Ltd. and title thereto remains in us.
                                All applicable rights in the software not expressly granted in this agreement are reserved by us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">4. Updates and Support</h2>
                            <p className="leading-relaxed">
                                We may provide updates, patches, or new versions of our software at our discretion.
                                This license entitles you to receive updates as they become available for the licensed product.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">5. Termination</h2>
                            <p className="leading-relaxed">
                                This license is effective until terminated. It will terminate automatically if you fail to comply with any term of this agreement.
                                Upon termination, you must destroy all copies of the software in your possession.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">6. Disclaimer</h2>
                            <p className="leading-relaxed">
                                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES,
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">7. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                IN NO EVENT SHALL ASTRIORB PVT. LTD. BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES
                                ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">8. Contact</h2>
                            <p className="leading-relaxed">
                                For licensing inquiries, please contact:
                                <br />
                                <a href="mailto:astriorbofficial@gmail.com" className="text-cosmic-purple hover:text-cosmic-neon">
                                    astriorbofficial@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LicenseAgreement;
