import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Search,
  Sparkles,
  Tag,
  Mail,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SpotlightCard from '../components/SpotlightCard';
import { blogPosts } from '../data/blogPosts';

const categories = ['All', 'Product', 'Founder Story', 'Development', 'Personal'];

const topicTags = [
  'Local-First',
  'Flutter',
  'React Native',
  'MMKV Encryption',
  'Embedded IoT',
  'Applied AI',
  'Kerala Startups',
  'Zero-Surveillance',
];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Product':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Founder Story':
        return 'text-citron bg-citron/10 border-citron/30';
      case 'Development':
        return 'text-laser-cyan bg-laser-cyan/10 border-laser-cyan/30';
      case 'Personal':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      default:
        return 'text-titanium-300 bg-titanium-800 border-white/10';
    }
  };

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // The latest post is featured if no specific search is active
  const featuredPost = useMemo(() => {
    if (selectedCategory === 'All' && !searchQuery && blogPosts.length > 0) {
      return blogPosts[0];
    }
    return null;
  }, [selectedCategory, searchQuery]);

  const regularPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AstriOrb Engineering Dispatches & Founder Logs',
    description:
      'First-hand stories, technical architecture breakdowns, and founder lessons from AstriOrb — building an independent venture studio from Kerala.',
    url: 'https://astriorb.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'AstriOrb Pvt. Ltd.',
      logo: 'https://astriorb.com/logo.png',
    },
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      url: `https://astriorb.com/blog/${p.slug}`,
      datePublished: p.date,
      author: {
        '@type': 'Person',
        name: p.author?.name || 'Mohammed Hashim',
      },
    })),
  };

  return (
    <>
      <SEO
        title="Engineering Dispatches & Founder Logs | AstriOrb"
        description="First-hand stories, technical architecture breakdowns, and founder lessons from AstriOrb — building an independent venture studio from Kerala."
        url="/blog"
        schema={blogListSchema}
      />

      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal overflow-hidden relative transition-colors duration-300">
        {/* Subtle Tech Grid Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        {/* Ambient Top Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-citron-dim blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-ocean/10 blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Publication Masthead */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full dark:bg-titanium-800/90 bg-sand-border/70 border border-citron/40 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider sm:tracking-widest mb-3 sm:mb-4 shadow-sm whitespace-nowrap">
              <BookOpen size={13} />
              <span className="hidden sm:inline">ASTRIORB ENGINEERING DISPATCHES // FOUNDER LOGS</span>
              <span className="sm:hidden">DISPATCHES // FOUNDER LOGS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-3 sm:mb-4 leading-tight">
              Dispatches From the{' '}
              <span className="bg-gradient-flame bg-clip-text text-transparent">
                Laboratory
              </span>
            </h1>

            <p className="text-sm sm:text-lg dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
              Technical architecture breakdowns, product release retrospectives, and authentic founder lessons from conceiving and building an independent venture studio from Kerala.
            </p>
          </div>

          {/* Search Bar & Category Filter Dock */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
            {/* Search Input Box */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 dark:text-titanium-400 text-sand-charcoal/50"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dispatches by keyword or topic..."
                className="w-full pl-10 sm:pl-11 pr-12 sm:pr-14 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl dark:bg-titanium-900/90 bg-white/95 border dark:border-white/10 border-sand-border text-xs sm:text-sm font-mono dark:text-white text-sand-charcoal placeholder:text-sand-charcoal/40 dark:placeholder:text-titanium-500 focus:outline-none focus:border-citron shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/60 hover:text-citron"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Category Filter Pills - swipeable row on mobile, centered flex-wrap on desktop */}
            <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-1.5 sm:gap-2 pt-1 pb-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${isActive
                        ? 'bg-citron text-obsidian shadow-md shadow-citron/25'
                        : 'dark:bg-titanium-900/70 bg-sand-border/50 dark:text-titanium-300 text-sand-charcoal/80 border dark:border-white/5 border-sand-border hover:border-citron/40 hover:text-citron'
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Post Spotlight (When no search active) */}
          {featuredPost && (
            <div className="mb-10 sm:mb-14">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs font-mono text-citron uppercase tracking-wider font-bold">
                <Sparkles size={14} />
                <span>FEATURED LEAD DISPATCH</span>
              </div>

              <SpotlightCard className="p-4 sm:p-10 lg:p-12 relative overflow-hidden" withCorners>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span
                        className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold border ${getCategoryBadge(
                          featuredPost.category
                        )}`}
                      >
                        {featuredPost.category}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70 flex items-center gap-1.5">
                        <Calendar size={12} />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70 flex items-center gap-1.5">
                        <Clock size={12} />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <Link to={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight dark:text-white text-sand-charcoal hover:text-citron transition-colors mt-1 sm:mt-2">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm dark:text-titanium-200 text-sand-charcoal/80 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono dark:text-titanium-300 text-sand-charcoal">
                      <User size={13} className="text-citron" />
                      <span>{featuredPost.author}</span>
                      <span className="text-citron">• Founder & Lead Architect</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-start lg:justify-end w-full">
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light transition-all flex items-center gap-2"
                    >
                      <span>READ FULL DISPATCH</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          )}

          {/* Regular Editorial Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b dark:border-white/10 border-sand-border">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider dark:text-white text-sand-charcoal">
                {searchQuery
                  ? `Search Results (${filteredPosts.length})`
                  : `Archive & Dispatches (${regularPosts.length})`}
              </h3>
              <span className="text-xs font-mono text-citron">
                Page 1 of 1
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 dark:bg-titanium-900/40 bg-sand-border/30 rounded-2xl border dark:border-white/5 border-sand-border p-8">
                <BookOpen className="w-12 h-12 mx-auto dark:text-titanium-500 text-sand-charcoal/40 mb-3" />
                <h4 className="text-base font-bold font-mono dark:text-white text-sand-charcoal mb-1">
                  No Dispatches Found
                </h4>
                <p className="text-xs dark:text-titanium-400 text-sand-charcoal/70 mb-4">
                  No articles matched "{searchQuery}" in category "{selectedCategory}".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-citron text-obsidian hover:bg-citron-light transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {regularPosts.map((post) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SpotlightCard className="p-4 sm:p-8 h-full flex flex-col justify-between group hover:border-citron/40 transition-all shadow-sm" withCorners>
                      <div className="space-y-2.5 sm:space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold border ${getCategoryBadge(
                              post.category
                            )}`}
                          >
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>
                        </div>

                        <Link to={`/blog/${post.slug}`} className="block">
                          <h4 className="text-base sm:text-xl font-bold font-mono dark:text-white text-sand-charcoal group-hover:text-citron transition-colors leading-snug">
                            {post.title}
                          </h4>
                        </Link>

                        <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 sm:pt-5 mt-4 sm:mt-6 border-t dark:border-white/10 border-sand-border flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70">
                          <User size={13} className="text-citron" />
                          <span>{post.author}</span>
                        </div>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-[11px] sm:text-xs font-mono font-bold text-citron group-hover:text-flame-coral transition-colors flex items-center gap-1"
                        >
                          <span>READ DISPATCH</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Topic Cloud & Engineering Newsletter Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8">
            {/* Left: Topic Cloud */}
            <div className="lg:col-span-5">
              <SpotlightCard className="p-4 sm:p-8 h-full flex flex-col justify-between" withCorners>
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs font-mono text-citron uppercase tracking-wider font-bold">
                    <Tag size={13} />
                    <span>TECHNICAL TAXONOMY</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold font-mono dark:text-white text-sand-charcoal mb-1.5 sm:mb-2">
                    Core Engineering Topics
                  </h4>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed mb-4 sm:mb-6 font-normal">
                    Explore our writings grouped by architectural disciplines, mobile runtimes, and local-first frameworks.
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {topicTags.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/5 border-sand-border dark:text-titanium-200 text-sand-charcoal hover:border-citron hover:text-citron transition-colors cursor-pointer"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t dark:border-white/5 border-sand-border text-[10px] sm:text-[11px] font-mono text-citron">
                  Filtered Directly by Technology
                </div>
              </SpotlightCard>
            </div>

            {/* Right: Newsletter Dispatch Box */}
            <div className="lg:col-span-7">
              <SpotlightCard className="p-4 sm:p-8 h-full flex flex-col justify-between" withCorners>
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    <Mail size={13} />
                    <span>DIRECT INBOX DISPATCHES</span>
                  </div>

                  <h4 className="text-lg sm:text-2xl font-bold font-mono dark:text-white text-sand-charcoal mb-1.5 sm:mb-2">
                    Subscribe to AstriOrb Dispatches
                  </h4>
                  <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed mb-4 sm:mb-6 font-normal">
                    Zero spam, zero promotional noise. Only genuine architectural deep-dives, software post-mortems, and founder lessons delivered when new dispatches are published.
                  </p>

                  {isSubscribed ? (
                    <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      <span>Thank you! You are subscribed to engineering dispatches.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="engineer@company.com"
                        className="flex-grow px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl dark:bg-titanium-900 bg-white border dark:border-white/10 border-sand-border text-xs font-mono dark:text-white text-sand-charcoal placeholder:text-sand-charcoal/40 dark:placeholder:text-titanium-500 focus:outline-none focus:border-citron shadow-sm"
                      />
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian hover:bg-citron-light shadow-md shadow-citron/20 transition-all shrink-0 cursor-pointer"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  )}
                </div>

                <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t dark:border-white/5 border-sand-border text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                  Unsubscribe at any time • Privacy strictly protected
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default React.memo(BlogList);
