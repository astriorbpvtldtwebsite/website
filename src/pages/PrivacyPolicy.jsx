import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = 'Privacy Policy | AstriOrb';
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
                        <Shield className="w-10 h-10 text-cosmic-purple mr-4" />
                        <h1 className="text-4xl font-bold text-light-text dark:text-white">
                            Privacy Policy
                        </h1>
                    </div>

                    <div className="glass-effect rounded-2xl p-8 space-y-8 text-light-subtext dark:text-gray-300">
                        <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">1. Introduction</h2>
                            <p className="leading-relaxed">
                                AstriOrb Pvt. Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                                This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our products.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">2. Information We Collect</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Personal Information:</strong> Name, email address, and contact details when you reach out to us.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
                                <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers.</li>
                                <li><strong>Cookies:</strong> We use cookies to enhance your experience and analyze website traffic.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">3. How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide and maintain our services</li>
                                <li>To respond to your inquiries and support requests</li>
                                <li>To improve our website and products</li>
                                <li>To send important updates about our services</li>
                                <li>To detect and prevent fraud or technical issues</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">4. Data Sharing</h2>
                            <p className="leading-relaxed">
                                We do not sell your personal information. We may share data with trusted third-party service providers
                                who assist us in operating our website and conducting our business, subject to confidentiality agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">5. Data Security</h2>
                            <p className="leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal data against
                                unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">6. Your Rights</h2>
                            <p className="leading-relaxed mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Request data portability</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">7. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
