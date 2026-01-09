import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsOfService = () => {
    useEffect(() => {
        document.title = 'Terms of Service | AstriOrb';
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
                        <FileText className="w-10 h-10 text-cosmic-purple mr-4" />
                        <h1 className="text-4xl font-bold text-light-text dark:text-white">
                            Terms of Service
                        </h1>
                    </div>

                    <div className="glass-effect rounded-2xl p-8 space-y-8 text-light-subtext dark:text-gray-300">
                        <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">1. Agreement to Terms</h2>
                            <p className="leading-relaxed">
                                By accessing or using the services provided by AstriOrb Pvt. Ltd., you agree to be bound by these Terms of Service.
                                If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">2. Use of Services</h2>
                            <p className="leading-relaxed mb-4">You agree to use our services only for lawful purposes. You shall not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe upon the rights of others</li>
                                <li>Transmit harmful code or malware</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Use our services for fraudulent purposes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">3. Intellectual Property</h2>
                            <p className="leading-relaxed">
                                All content, trademarks, and intellectual property on this website and in our products are owned by AstriOrb Pvt. Ltd.
                                You may not reproduce, distribute, or create derivative works without our express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">4. Product Usage</h2>
                            <p className="leading-relaxed">
                                Our products are licensed, not sold. Each product may have specific terms and conditions that govern its use.
                                By using our products, you agree to comply with those specific terms in addition to these general Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">5. Disclaimer of Warranties</h2>
                            <p className="leading-relaxed">
                                Our services are provided "as is" without warranties of any kind, either express or implied.
                                We do not guarantee that our services will be uninterrupted, secure, or error-free.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">6. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                To the fullest extent permitted by law, AstriOrb Pvt. Ltd. shall not be liable for any indirect, incidental,
                                special, consequential, or punitive damages arising from your use of our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">7. Governing Law</h2>
                            <p className="leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of India,
                                without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">8. Changes to Terms</h2>
                            <p className="leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify users of any material changes
                                by posting the updated terms on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">9. Contact</h2>
                            <p className="leading-relaxed">
                                For questions about these Terms of Service, contact us at:
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

export default TermsOfService;
