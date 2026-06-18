import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SEO from '../components/SEO';

const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

const categories = ['All', 'Founder Story', 'Development', 'Product', 'Personal'];

const BlogList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categoryColors = {
        'Founder Story': 'from-purple-500 to-indigo-500',
        'Development': 'from-blue-500 to-cyan-500',
        'Product': 'from-green-500 to-emerald-500',
        'Personal': 'from-orange-500 to-amber-500',
    };

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-light-bg dark:bg-gradient-cosmic py-20 px-4 sm:px-6 lg:px-8">
            <SEO title="Blog" description="Read stories, technical insights, and startup updates from the AstriOrb team." url="/blog" />
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center text-cosmic-purple hover:text-cosmic-neon transition-colors mb-8"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-10 h-10 text-cosmic-purple dark:text-cosmic-neon" />
                        <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-white">
                            Our <span className="bg-gradient-neon bg-clip-text text-transparent">Blog</span>
                        </h1>
                    </div>
                    <p className="text-lg text-light-subtext dark:text-gray-300 mb-8 max-w-2xl">
                        Real stories from building AstriOrb — the decisions, the challenges, and the lessons learned along the way.
                    </p>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-black/10 dark:border-white/10 pb-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                                    selectedCategory === cat
                                        ? 'text-white'
                                        : 'text-light-subtext dark:text-gray-400 hover:text-cosmic-purple dark:hover:text-cosmic-neon bg-black/5 dark:bg-white/5'
                                }`}
                            >
                                <span className="relative z-10">{cat}</span>
                                {selectedCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute inset-0 bg-gradient-purple rounded-full z-0"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Animated List Container */}
                <motion.div
                    layout
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="space-y-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={post.slug}
                                whileHover={{ y: -4, scale: 1.01 }}
                                className="w-full"
                            >
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="block"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <article className="glass-effect rounded-2xl p-6 md:p-8 hover:shadow-xl dark:hover:shadow-cosmic-purple/15 transition-all duration-300 group">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[post.category] || 'from-gray-500 to-gray-600'}`}>
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-4 text-sm text-light-subtext dark:text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>

                                        <h2 className="text-xl md:text-2xl font-bold text-light-text dark:text-white mb-3 group-hover:text-cosmic-purple dark:group-hover:text-cosmic-neon transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-light-subtext dark:text-gray-300 leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-light-subtext dark:text-gray-400">
                                                <User className="w-4 h-4" />
                                                <span>{post.author}</span>
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-cosmic-purple dark:text-cosmic-neon text-sm font-medium group-hover:gap-2 transition-all">
                                                Read more <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogList;
