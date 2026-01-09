import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const GDPRCompliance = () => {
    useEffect(() => {
        document.title = 'GDPR Compliance | AstriOrb';
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
                        <ShieldCheck className="w-10 h-10 text-cosmic-purple mr-4" />
                        <h1 className="text-4xl font-bold text-light-text dark:text-white">
                            GDPR Compliance
                        </h1>
                    </div>

                    <div className="glass-effect rounded-2xl p-8 space-y-8 text-light-subtext dark:text-gray-300">
                        <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">Our Commitment to GDPR</h2>
                            <p className="leading-relaxed">
                                AstriOrb Pvt. Ltd. is committed to ensuring the security and protection of personal information that we process.
                                We comply with the General Data Protection Regulation (GDPR) and provide this document to explain how we process
                                and protect personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">Data Controller</h2>
                            <p className="leading-relaxed">
                                AstriOrb Pvt. Ltd. acts as the Data Controller for personal data collected through our website and services.
                                We determine the purposes and means of processing personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">Legal Basis for Processing</h2>
                            <p className="leading-relaxed mb-4">We process personal data under the following legal bases:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data</li>
                                <li><strong>Contract:</strong> Processing is necessary for a contract with you</li>
                                <li><strong>Legal Obligation:</strong> Processing is necessary for compliance with the law</li>
                                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">Your Rights Under GDPR</h2>
                            <p className="leading-relaxed mb-4">As a data subject, you have the following rights:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                                <li><strong>Right to Erasure:</strong> Request deletion of your data ("Right to be Forgotten")</li>
                                <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                                <li><strong>Rights Related to Automated Decision Making:</strong> Rights concerning profiling</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">Data Retention</h2>
                            <p className="leading-relaxed">
                                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected,
                                or as required by law. When data is no longer needed, it is securely deleted or anonymized.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">International Transfers</h2>
                            <p className="leading-relaxed">
                                If we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards
                                are in place to protect your data in accordance with GDPR requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">Data Protection Officer</h2>
                            <p className="leading-relaxed">
                                For any GDPR-related inquiries or to exercise your rights, please contact our Data Protection team at:
                                <br />
                                <a href="mailto:astriorbofficial@gmail.com" className="text-cosmic-purple hover:text-cosmic-neon">
                                    astriorbofficial@gmail.com
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-light-text dark:text-white mb-4">Supervisory Authority</h2>
                            <p className="leading-relaxed">
                                You have the right to lodge a complaint with a supervisory authority if you believe your data protection
                                rights have been violated.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default GDPRCompliance;
