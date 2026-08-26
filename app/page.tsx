'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BLOG_ARTICLES } from '@/data/travelData';

import { SignatureCollections } from '@/components/widgets/SignatureCollections';
import { BespokeJourneyPlanner } from '@/components/widgets/BespokeJourneyPlanner';
import { LuxuryVideoStories } from '@/components/widgets/LuxuryVideoStories';
import { TrustDisplay } from '@/components/widgets/TrustDisplay';
import { WhyChooseUs } from '@/components/widgets/WhyChooseUs';
import { SectionCtaButtons } from '@/components/ui/SectionCtaButtons';
import { BookingDrawer } from '@/components/ui/BookingDrawer';
import Testimonials from '@/components/ui/testimonials-demo';

import { useAdmin } from '@/context/AdminContext';

export default function HomePage() {
  const { t, language } = useLanguage();
  const { heroSlides } = useAdmin();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isBookingDrawerOpen, setIsBookingDrawerOpen] = useState(false);
  const [selectedBookingPackage, setSelectedBookingPackage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleOpenBooking = (pkgName?: string) => {
    if (pkgName) setSelectedBookingPackage(pkgName);
    setIsBookingDrawerOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-[#0B1F3A]">
      {/* 1. EDITORIAL SUN-DROPPED HERO SECTION */}
      <section className="relative min-h-[100dvh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-8 sm:pb-12 hero-section">
        {/* Background Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroSlides[currentHeroIndex].image}
              alt="Sri Lanka Luxury Destination"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-110 contrast-105"
            />
            {/* Sheer dark gradient to let sunny photos shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-4 sm:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#0B1F3A]/85 border border-[#C8A45D]/70 text-[#F0D898] text-[10px] sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-8 backdrop-blur-xl shadow-xl"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8A45D]" />
            <span>{heroSlides[currentHeroIndex].tag}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-3 sm:mb-6 drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]"
          >
            {heroSlides[currentHeroIndex].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden sm:block text-base sm:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            {heroSlides[currentHeroIndex].sub}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10"
          >
            <Link
              href="/tours"
              className="w-full sm:w-auto bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D] text-[#0B1F3A] font-bold py-3.5 sm:py-4 px-8 sm:px-9 rounded-full shadow-xl border border-[#C8A45D]/60 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
            >
              <Compass className="w-4 h-4" />
              <span>{t.hero.exploreTours}</span>
            </Link>

            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto bg-[#0B1F3A]/90 hover:bg-[#0B1F3A] border border-[#C8A45D]/80 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-9 rounded-full shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#C8A45D] flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
            >
              <Sparkles className="w-4 h-4 text-[#C8A45D]" />
              <span>{language === 'kr' ? "맞춤 여행 상담" : "Bespoke Concierge"}</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Carousel Controls */}
        <div className="relative z-20 flex items-center justify-center gap-3 pt-6 pb-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentHeroIndex ? 'w-12 bg-[#C8A45D]' : 'w-3 bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. LUXURY STATS BAR */}
      <section className="relative z-20 mt-4 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#122848]/95 border border-[#C8A45D]/30 rounded-2xl p-4 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="border-r border-white/10 last:border-r-0 pr-2 sm:pr-4">
            <div className="text-2xl sm:text-5xl font-serif font-bold text-[#C8A45D]">5,000+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.guests}
            </div>
          </div>
          <div className="border-r border-white/10 last:border-r-0 pr-2 sm:pr-4">
            <div className="text-2xl sm:text-5xl font-serif font-bold text-[#C8A45D]">1,200+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.golfGuests}
            </div>
          </div>
          <div className="border-r border-white/10 last:border-r-0 pr-2 sm:pr-4">
            <div className="text-2xl sm:text-5xl font-serif font-bold text-[#C8A45D]">25+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.experiences}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-5xl font-serif font-bold text-[#C8A45D]">98%</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.satisfaction}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST & ACCREDITATION DISPLAY */}
      <TrustDisplay onOpenBooking={handleOpenBooking} />

      {/* 4. WHY CHOOSE LANKA LUXE JOURNEYS (Detailed 7 Pillars & Commitment) */}
      <WhyChooseUs />

      {/* 5. SIGNATURE COLLECTIONS (Interactive 3-Tab Discovery) */}
      <SignatureCollections onOpenBooking={handleOpenBooking} />

      {/* 6. BESPOKE JOURNEY PLANNER (30-Second Micro-Designer) */}
      <BespokeJourneyPlanner onOpenBooking={handleOpenBooking} />

      {/* 7. CINEMATIC VIDEO STORIES */}
      <LuxuryVideoStories />

      {/* 7. VERIFIED GUEST REVIEWS */}
      <Testimonials />

      {/* 8. TRAVEL JOURNAL HIGHLIGHTS */}
      <section className="py-20 sm:py-24 bg-[#0B1F3A] border-t border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>{language === 'kr' ? "스리랑카 트래블 저널" : "Luxury Travel Journal"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {language === 'kr' ? "스리랑카 럭셔리 여행 가이드" : "Travel Insights & Insider Guides"}
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-wider font-bold text-[#C8A45D] hover:text-[#D4B87A] flex items-center gap-2 group shrink-0"
            >
              <span>{language === 'kr' ? '모든 아티클 보기' : 'View All Articles'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BLOG_ARTICLES.slice(0, 3).map((art) => (
              <div
                key={art.id}
                className="bg-[#122848] border border-[#C8A45D]/25 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.titleEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#C8A45D] text-[#0B1F3A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {art.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-2.5">
                    <span className="text-[11px] text-gray-400 block">{art.date} • {art.readTime} read</span>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors line-clamp-2">
                      {language === 'kr' ? art.titleKr : art.titleEn}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                      {language === 'kr' ? art.excerptKr : art.excerptEn}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C8A45D] font-bold uppercase tracking-wider hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT & BESPOKE INQUIRY BANNER */}
      <section id="contact" className="relative py-24 overflow-hidden border-t border-[#C8A45D]/30">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80"
            alt="CTA Banner"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060F1D] via-[#0B1F3A]/90 to-[#060F1D]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {t.contactCta.title}
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-light">
            {t.contactCta.subtitle}
          </p>

          <SectionCtaButtons onOpenBooking={handleOpenBooking} categoryName="Footer CTA" />
        </div>
      </section>

      {/* 10. UNIFIED CONCIERGE SLIDE-OVER DRAWER */}
      <BookingDrawer
        isOpen={isBookingDrawerOpen}
        onClose={() => setIsBookingDrawerOpen(false)}
        preselectedPackage={selectedBookingPackage}
      />
    </div>
  );
}
