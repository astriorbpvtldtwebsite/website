import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Linkedin,
  Twitter,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SpotlightCard from '../components/SpotlightCard';
import { getBlogPost, blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-36 pb-20 dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <BookOpen className="w-12 h-12 mx-auto text-citron mb-4" />
            <h1 className="text-3xl font-bold font-mono mb-2">Dispatch Not Found</h1>
            <p className="text-sm dark:text-titanium-400 text-sand-charcoal/70 mb-6">
              The article you are attempting to access does not exist or has been relocated.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-md hover:bg-citron-light transition-all"
            >
              <ArrowLeft size={14} />
              <span>RETURN TO DISPATCH ARCHIVE</span>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  const shareUrl = `https://astriorb.com/blog/${post.slug}`;

  const handleCopyLink = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Mohammed Hashim',
      jobTitle: post.author?.role || 'Founder & Lead Architect',
      url: 'https://astriorb.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AstriOrb Pvt. Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://astriorb.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://astriorb.com/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  };

  return (
    <>
      <SEO
        title={`${post.title} | AstriOrb Dispatches`}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.date}
        author={post.author?.name || 'Mohammed Hashim'}
        keywords={post.tags?.join(', ')}
        schema={blogPostingSchema}
      />

      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal overflow-hidden relative transition-colors duration-300">
        {/* Ambient Engineering Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-citron-dim blur-[150px] pointer-events-none" />

        <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Back Navigation */}
          <div className="flex items-center justify-between gap-4 mb-4 sm:mb-8 text-xs font-mono">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 dark:text-titanium-400 text-sand-charcoal/70 hover:text-citron transition-colors"
            >
              <ArrowLeft size={14} />
              <span>DISPATCH ARCHIVE</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 dark:text-titanium-500 text-sand-charcoal/40">
              <Link to="/" className="hover:text-citron">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-citron">Blog</Link>
              <span>/</span>
              <span className="text-citron truncate max-w-[200px]">{post.category}</span>
            </div>
          </div>

          {/* Article Header Card */}
          <header className="mb-6 sm:mb-10 text-left">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span
                className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold border ${getCategoryBadge(
                  post.category
                )}`}
              >
                {post.category}
              </span>
              <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono dark:text-titanium-400 text-sand-charcoal/70">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight dark:text-white text-sand-charcoal mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl dark:bg-titanium-900/80 bg-white/90 border dark:border-white/10 border-sand-border">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl dark:bg-titanium-800 bg-sand-border/70 border border-citron flex items-center justify-center text-citron font-mono font-bold text-xs sm:text-sm shrink-0">
                MH
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold font-mono dark:text-white text-sand-charcoal">
                  {post.author}
                </div>
                <div className="text-[10px] sm:text-xs dark:text-titanium-400 text-sand-charcoal/70 font-mono">
                  Founder & Lead Software Architect • AstriOrb Pvt. Ltd.
                </div>
              </div>
            </div>
          </header>

          {/* Article Content Container */}
          <div className="p-4 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl dark:bg-titanium-900/60 bg-white/95 border dark:border-white/10 border-sand-border shadow-md mb-8 sm:mb-12">
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-base dark:text-titanium-200 text-sand-charcoal/85 leading-relaxed font-normal">
              {post.content.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={index}
                      className="text-lg sm:text-2xl font-bold font-mono dark:text-white text-sand-charcoal mt-6 sm:mt-8 mb-2.5 sm:mb-3 pt-3 sm:pt-4 border-t dark:border-white/5 border-sand-border first:mt-0 first:pt-0 first:border-none flex items-start gap-2"
                    >
                      <span className="text-citron shrink-0 mt-0.5 sm:mt-0">#</span>
                      <span>{block.text}</span>
                    </h2>
                  );
                }
                return (
                  <p key={index} className="leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Social Share & Copy Link Strip */}
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl dark:bg-titanium-900/80 bg-white/90 border dark:border-white/10 border-sand-border mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-xs font-mono dark:text-titanium-300 text-sand-charcoal">
              <Share2 size={14} className="text-citron" />
              <span>Share this dispatch:</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={handleCopyLink}
                aria-label="Copy article link"
                className="px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border dark:text-titanium-200 text-sand-charcoal hover:border-citron hover:text-citron transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied Link' : 'Copy Link'}</span>
              </button>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-xl dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border dark:text-titanium-200 text-sand-charcoal hover:text-citron hover:border-citron transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={15} />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-xl dark:bg-titanium-800 bg-sand-border/70 border dark:border-white/10 border-sand-border dark:text-titanium-200 text-sand-charcoal hover:text-citron hover:border-citron transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Author Dossier Spotlight */}
          <div className="mb-8 sm:mb-12">
            <SpotlightCard className="p-4 sm:p-8" withCorners>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl dark:bg-titanium-800 bg-sand-border/70 border-2 border-citron flex items-center justify-center text-citron font-mono font-bold text-base sm:text-xl shrink-0 shadow-lg">
                  MH
                </div>
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <h4 className="text-sm sm:text-base font-bold font-mono dark:text-white text-sand-charcoal">
                      Mohammed Hashim
                    </h4>
                    <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-citron/15 text-citron font-bold">
                      Founder & Lead Architect
                    </span>
                  </div>
                  <p className="text-xs dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                    Computer Science Engineer and multi-domain software builder based in Kerala, India. Oversees all architecture across AstriOrb’s 5 proprietary software systems and embedded IoT hardware.
                  </p>
                  <div className="flex items-center gap-3 pt-0.5 sm:pt-1 text-[11px] sm:text-xs font-mono">
                    <Link to="/about" className="text-citron hover:underline">
                      About AstriOrb & Leadership →
                    </Link>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Previous / Next Article Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="block">
                <SpotlightCard className="p-3.5 sm:p-5 h-full flex flex-col justify-between group" withCorners>
                  <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase">
                    ← PREVIOUS DISPATCH
                  </span>
                  <p className="text-xs sm:text-sm font-bold font-mono dark:text-white text-sand-charcoal group-hover:text-citron transition-colors mt-1">
                    {prevPost.title}
                  </p>
                </SpotlightCard>
              </Link>
            ) : (
              <div />
            )}

            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="block sm:text-right">
                <SpotlightCard className="p-3.5 sm:p-5 h-full flex flex-col justify-between group" withCorners>
                  <span className="text-[10px] font-mono dark:text-titanium-400 text-sand-charcoal/60 uppercase">
                    NEXT DISPATCH →
                  </span>
                  <p className="text-xs sm:text-sm font-bold font-mono dark:text-white text-sand-charcoal group-hover:text-citron transition-colors mt-1">
                    {nextPost.title}
                  </p>
                </SpotlightCard>
              </Link>
            )}
          </div>
        </article>

        {/* BlogPosting Schema for SEO */}
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
                url: 'https://astriorb.com/about',
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
      </main>

      <Footer />
    </>
  );
};

export default React.memo(BlogPost);
