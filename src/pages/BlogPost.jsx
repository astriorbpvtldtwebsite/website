import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from 'lucide-react';
import { getBlogPost, blogPosts } from '../data/blogPosts';
import { fadeInUp } from '../utils/animations';

const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

const BlogPost = () => {
    const { slug } = useParams();
    const post = getBlogPost(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post) {
            document.title = `${post.title} | AstriOrb Blog`;
        }
    }, [post]);

    if (!post) {
        return (
            <div className="min-h-screen bg-light-bg dark:bg-gradient-cosmic py-20 px-4 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-light-text dark:text-white mb-4">Post Not Found</h1>
                    <p className="text-light-subtext dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 bg-gradient-purple text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cosmic-purple/25 transition-all"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    const nextPost = blogPosts[currentIndex + 1];
    const prevPost = blogPosts[currentIndex - 1];

    const shareUrl = `https://astriorb.com/blog/${post.slug}`;

    const categoryColors = {
        'Founder Story': 'from-purple-500 to-indigo-500',
        'Development': 'from-blue-500 to-cyan-500',
        'Product': 'from-green-500 to-emerald-500',
        'Personal': 'from-orange-500 to-amber-500',
    };

    return (
        <div className="min-h-screen bg-light-bg dark:bg-gradient-cosmic py-20 px-4 sm:px-6 lg:px-8">
            <article className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Back link */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-cosmic-purple hover:text-cosmic-neon transition-colors mb-8"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Blog
                    </Link>

                    {/* Post header */}
                    <header className="mb-10">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[post.category] || 'from-gray-500 to-gray-600'} mb-4`}>
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-light-subtext dark:text-gray-400">
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </header>
                </motion.div>

                {/* Post content */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="show"
                    className="glass-effect rounded-2xl p-6 md:p-10 mb-10"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="prose prose-lg max-w-none">
                        {post.content.map((block, index) => {
                            if (block.type === 'heading') {
                                return (
                                    <h2
                                        key={index}
                                        className="text-xl md:text-2xl font-semibold text-light-text dark:text-white mt-8 mb-4 first:mt-0"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            }
                            return (
                                <p
                                    key={index}
                                    className="text-base md:text-lg text-light-subtext dark:text-gray-300 leading-relaxed mb-4 last:mb-0"
                                >
                                    {block.text}
                                </p>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Share section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glass-effect rounded-xl p-5 mb-10 flex flex-wrap items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-2 text-light-subtext dark:text-gray-400">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Share this post</span>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center hover:bg-cosmic-purple hover:text-white transition-all"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center hover:bg-cosmic-purple hover:text-white transition-all"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Navigation between posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prevPost ? (
                        <Link
                            to={`/blog/${prevPost.slug}`}
                            className="glass-effect rounded-xl p-5 hover:shadow-lg dark:hover:shadow-cosmic-purple/15 transition-all group"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-xs text-light-subtext dark:text-gray-400 uppercase tracking-wide">← Previous</span>
                            <p className="text-sm font-medium text-light-text dark:text-white mt-1 group-hover:text-cosmic-purple dark:group-hover:text-cosmic-neon transition-colors">
                                {prevPost.title}
                            </p>
                        </Link>
                    ) : (
                        <div />
                    )}
                    {nextPost && (
                        <Link
                            to={`/blog/${nextPost.slug}`}
                            className="glass-effect rounded-xl p-5 hover:shadow-lg dark:hover:shadow-cosmic-purple/15 transition-all group text-right"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-xs text-light-subtext dark:text-gray-400 uppercase tracking-wide">Next →</span>
                            <p className="text-sm font-medium text-light-text dark:text-white mt-1 group-hover:text-cosmic-purple dark:group-hover:text-cosmic-neon transition-colors">
                                {nextPost.title}
                            </p>
                        </Link>
                    )}
                </div>
            </article>

            {/* BlogPosting Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.excerpt,
                        datePublished: post.date,
                        dateModified: post.date,
                        author: {
                            '@type': 'Person',
                            name: post.author,
                            url: 'https://www.linkedin.com/in/mohammed-hashim-b9632b325/',
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'AstriOrb Pvt. Ltd.',
                            url: 'https://astriorb.com',
                        },
                        url: `https://astriorb.com/blog/${post.slug}`,
                        mainEntityOfPage: {
                            '@type': 'WebPage',
                            '@id': `https://astriorb.com/blog/${post.slug}`,
                        },
                    }),
                }}
            />
        </div>
    );
};

export default BlogPost;
