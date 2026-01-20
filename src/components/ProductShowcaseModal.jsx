import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, ExternalLink, Clock, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mobile Innovation Products
const mobileProducts = [
    {
        id: 'fincend',
        name: 'Fincend',
        tagline: 'Manage your money with ease',
        description: 'Privacy-first personal finance manager with local-only storage, expense tracking, loan management, and budget monitoring.',
        icon: '/fincend_app_icon.png',
        status: 'coming-soon', // 'live', 'coming-soon', 'in-development'
        playStoreUrl: null, // Add Play Store URL when available
        privacyUrl: '/fincend/privacy-policy',
        gradient: 'from-purple-500 to-indigo-600',
    },
    {
        id: 'tastory',
        name: 'Tastory',
        tagline: 'Your culinary journey begins',
        description: 'Discover, save, and share recipes. A social platform for food enthusiasts to explore cuisines from around the world.',
        icon: null, // Coming soon
        status: 'in-development',
        playStoreUrl: null,
        privacyUrl: null,
        gradient: 'from-orange-500 to-red-500',
    },
];

const StatusBadge = ({ status }) => {
    const config = {
        'live': { label: 'Live', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
        'coming-soon': { label: 'Coming Soon', className: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
        'in-development': { label: 'In Development', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    };

    const { label, className } = config[status] || config['in-development'];

    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${className}`}>
            {label}
        </span>
    );
};

const ProductCard = ({ product }) => {
    const { name, tagline, description, icon, status, playStoreUrl, privacyUrl, gradient } = product;

    const renderActionButton = () => {
        if (status === 'live' && playStoreUrl) {
            return (
                <motion.a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-gradient-purple text-white font-medium px-4 py-2.5 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow text-sm"
                >
                    <span>Get on Play Store</span>
                    <ExternalLink className="w-4 h-4" />
                </motion.a>
            );
        }

        if (status === 'coming-soon') {
            return (
                <div className="space-y-2">
                    <div className="w-full bg-purple-500/10 text-purple-400 font-medium px-4 py-2.5 rounded-lg flex items-center justify-center space-x-2 text-sm border border-purple-500/20">
                        <Rocket className="w-4 h-4" />
                        <span>Launching Soon on Play Store</span>
                    </div>
                    {privacyUrl && (
                        <Link
                            to={privacyUrl}
                            className="block w-full text-center text-xs text-gray-400 hover:text-cosmic-neon transition-colors"
                        >
                            View Privacy Policy →
                        </Link>
                    )}
                </div>
            );
        }

        return (
            <div className="w-full bg-gray-500/10 text-gray-400 font-medium px-4 py-2.5 rounded-lg flex items-center justify-center space-x-2 text-sm border border-gray-500/20">
                <Clock className="w-4 h-4" />
                <span>In Development</span>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="glass-effect rounded-xl p-5 flex flex-col h-full group hover:shadow-xl dark:hover:shadow-cosmic-purple/10 transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    {/* App Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden shadow-lg`}>
                        {icon ? (
                            <img src={icon} alt={`${name} icon`} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-white text-xl font-bold">{name[0]}</span>
                        )}
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-light-text dark:text-white">{name}</h4>
                        <p className="text-sm text-light-subtext dark:text-gray-400">{tagline}</p>
                    </div>
                </div>
                <StatusBadge status={status} />
            </div>

            {/* Description */}
            <p className="text-sm text-light-subtext dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                {description}
            </p>

            {/* Action */}
            {renderActionButton()}
        </motion.div>
    );
};

const ProductShowcaseModal = ({ isOpen, onClose, categoryTitle }) => {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            closeButtonRef.current?.focus();

            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    // Get products based on category
    const getProducts = () => {
        if (categoryTitle === 'Mobile Innovation') {
            return mobileProducts;
        }
        return [];
    };

    const products = getProducts();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    >
                        <div className="glass-effect w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-8 rounded-2xl relative">
                            {/* Close Button */}
                            <button
                                ref={closeButtonRef}
                                onClick={onClose}
                                className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors z-10"
                                aria-label="Close modal"
                            >
                                <CloseIcon className="w-6 h-6 text-light-text dark:text-white" />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8 pr-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white mb-2">
                                    {categoryTitle}
                                </h3>
                                <p className="text-light-subtext dark:text-gray-300">
                                    Explore our mobile applications
                                </p>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {products.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer note */}
                            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
                                More products coming soon. Stay tuned!
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductShowcaseModal;
