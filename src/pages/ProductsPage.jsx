import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Mail,
  ArrowRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductHeroSection from '../components/products/ProductHeroSection';
import FlagshipSpotlight from '../components/products/FlagshipSpotlight';
import FisclokLiveSpotlight from '../components/products/FisclokLiveSpotlight';
import HardwareLabSpotlight from '../components/products/HardwareLabSpotlight';
import DualProductCards from '../components/products/DualProductCards';
import ProductPhilosophy from '../components/products/ProductPhilosophy';
import ProductShowcaseModal from '../components/ProductShowcaseModal';
import SpotlightCard from '../components/SpotlightCard';
import { products } from '../data/productsData';
import { useProjectModal } from '../contexts/ProjectModalContext';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryId = searchParams.get('id');

  const [activeCategory, setActiveCategory] = useState(() => queryId || 'all');
  const [selectedBlueprintProduct, setSelectedBlueprintProduct] = useState(null);
  const { openProjectModal } = useProjectModal();

  const scrollToTarget = (targetId) => {
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -90; // Fixed header clearance buffer
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }, 60);
  };

  // Handle URL search params on mount or change
  useEffect(() => {
    if (queryId && ['all', 'tastory', 'fisclok', 'row', 'docco', 'continuum'].includes(queryId)) {
      setActiveCategory(queryId);
      if (queryId !== 'all') {
        scrollToTarget(queryId);
      }
    }
  }, [queryId]);

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    if (catId !== 'all') {
      setSearchParams({ id: catId });
      scrollToTarget(catId);
    } else {
      setSearchParams({});
    }
  };

  const tastoryProduct = products.find((p) => p.id === 'tastory');
  const fisclokProduct = products.find((p) => p.id === 'fisclok');
  const rowProduct = products.find((p) => p.id === 'row');
  const doccoProduct = products.find((p) => p.id === 'docco');
  const continuumProduct = products.find((p) => p.id === 'continuum');

  const shouldShow = (id) => activeCategory === 'all' || activeCategory === id;

  const productsCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AstriOrb Products & Systems Architecture',
    description:
      "Discover AstriOrb's 5 proprietary products: FISCLOK, Tastory, Project ROW, DocCo, and Continuum. Explore zero-knowledge vaults, ESP32 smart wearables, clinical protocols, and first-principles architecture.",
    url: 'https://astriorb.com/products',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'FISCLOK',
          description: 'Zero-knowledge personal finance manager on Android.',
          url: 'https://play.google.com/store/apps/details?id=com.astriorb.fincend',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Project Tastory',
          description: 'Intelligent culinary discovery, taste-matching engine, and social recipe network.',
          url: 'https://astriorb.com/products?id=tastory',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Project DocCo',
          description: 'Clinical practice management and patient intake suite.',
          url: 'https://astriorb.com/products?id=docco',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Project Continuum',
          description: 'Offline-first project management and task orchestration suite.',
          url: 'https://astriorb.com/products?id=continuum',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Project ROW',
          description: 'Smart navigation mobile app and custom ESP32 BLE hardware companion.',
          url: 'https://astriorb.com/products?id=row',
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="Products & Systems Architecture | AstriOrb Digital Ecosystem"
        description="Discover AstriOrb's 5 proprietary products: FISCLOK, Tastory, Project ROW, DocCo, and Continuum. Explore zero-knowledge vaults, ESP32 smart wearables, clinical protocols, and first-principles architecture."
        url="/products"
        schema={productsCollectionSchema}
      />

      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28 md:pt-36 pb-20 dark:bg-obsidian bg-sand dark:text-white text-sand-charcoal overflow-hidden relative transition-colors duration-300">
        {/* Subtle Tech Grid Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-citron-dim blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-ocean/10 blur-[180px] pointer-events-none" />
        <div className="absolute top-2/3 -right-40 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Executive Hero & Metrics Bar */}
          <ProductHeroSection
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* 2. Commercial Live Spotlight (FISCLOK) - DISPLAYED FIRST */}
          {shouldShow('fisclok') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FisclokLiveSpotlight
                product={fisclokProduct}
                onOpenBlueprintModal={setSelectedBlueprintProduct}
              />
            </motion.div>
          )}

          {/* 3. Flagship Spotlight (Tastory) - DISPLAYED SECOND */}
          {shouldShow('tastory') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FlagshipSpotlight
                product={tastoryProduct}
                onOpenTastoryModal={openProjectModal}
                onOpenBlueprintModal={setSelectedBlueprintProduct}
              />
            </motion.div>
          )}

          {/* 4. Physical-Digital Hardware Lab (Project ROW) */}
          {shouldShow('row') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HardwareLabSpotlight
                product={rowProduct}
                onOpenBlueprintModal={setSelectedBlueprintProduct}
              />
            </motion.div>
          )}

          {/* 5. Enterprise Healthcare & Team OS (DocCo & Continuum) */}
          {(shouldShow('docco') || shouldShow('continuum')) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DualProductCards
                doccoProduct={doccoProduct}
                continuumProduct={continuumProduct}
                onOpenBlueprintModal={setSelectedBlueprintProduct}
              />
            </motion.div>
          )}

          {/* 6. AstriOrb Engineering Philosophy */}
          <ProductPhilosophy />

          {/* 8. Technical Due Diligence & Investor Partnership Gateway */}
          <div className="mt-16">
            <SpotlightCard
              className="p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
              withCorners
            >
              <div className="text-center md:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-citron font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-citron animate-pulse" />
                  <span>VENTURE CAPITAL & ENTERPRISE COLLABORATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-sand-charcoal tracking-tight font-mono mb-2">
                  Partner with AstriOrb on High-Impact Products
                </h3>
                <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal">
                  Whether you are an angel syndicate reviewing Tastory’s consumer rollout, an enterprise team assessing DocCo’s compliance ledger, or an OEM exploring Project ROW’s ESP32 BLE hardware — we welcome technical audits and partnership inquiries.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={openProjectModal}
                  className="px-6 py-3.5 rounded-xl text-xs font-mono font-bold bg-citron text-obsidian shadow-lg shadow-citron/25 hover:bg-citron-light transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles size={15} />
                  <span>TASTORY PITCH DECK</span>
                </button>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl text-xs font-mono font-semibold dark:bg-titanium-800 bg-white border dark:border-white/10 border-sand-border dark:text-white text-sand-charcoal hover:border-citron hover:text-citron transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Mail size={15} />
                  <span>CONTACT LEADERSHIP</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Full Architecture Deep-Dive Modal */}
        <ProductShowcaseModal
          product={selectedBlueprintProduct}
          isOpen={!!selectedBlueprintProduct}
          onClose={() => setSelectedBlueprintProduct(null)}
          onOpenTastoryModal={openProjectModal}
        />
      </main>

      <Footer />
    </>
  );
};

export default React.memo(ProductsPage);
