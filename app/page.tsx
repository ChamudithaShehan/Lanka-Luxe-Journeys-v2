'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Trophy,
  ArrowRight,
  Star,
  Sparkles,
  Car,
  Hotel,
  Clock,
  UserCheck,
  Plane,
  Camera,
  Award,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GOLF_COURSES, TOUR_PACKAGES, EXPERIENCES, TESTIMONIALS, BLOG_ARTICLES } from '@/data/travelData';

import { LuxuryHotelShowcase } from '@/components/widgets/LuxuryHotelShowcase';
import { LuxuryPhotoGallery } from '@/components/widgets/LuxuryPhotoGallery';
import { LuxuryVideoStories } from '@/components/widgets/LuxuryVideoStories';
import { KoreanTravellerSection } from '@/components/widgets/KoreanTravellerSection';
import { PremiumServicesGrid } from '@/components/widgets/PremiumServicesGrid';
import { AwardsShowcase } from '@/components/widgets/AwardsShowcase';
import { FaqAccordion } from '@/components/widgets/FaqAccordion';
import { CurrencyWeatherWidget } from '@/components/widgets/CurrencyWeatherWidget';
import { TravelCostEstimator } from '@/components/widgets/TravelCostEstimator';
import { WhyChooseUs } from '@/components/widgets/WhyChooseUs';
import { TrustDisplay } from '@/components/widgets/TrustDisplay';
import { SectionCtaButtons } from '@/components/ui/SectionCtaButtons';
import { BookingModal } from '@/components/ui/BookingModal';
import Testimonials from '@/components/ui/testimonials-demo';

import { useAdmin } from '@/context/AdminContext';

export default function HomePage() {
  const { t, language } = useLanguage();
  const { heroSlides } = useAdmin();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingPackage, setSelectedBookingPackage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleOpenBooking = (pkgName?: string) => {
    if (pkgName) setSelectedBookingPackage(pkgName);
    setIsBookingModalOpen(true);
  };

  const instagramImages = [
    "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <div className="relative overflow-hidden bg-[#0B1F3A]">
      {/* SUN-DROPPED VIBRANT HERO SECTION */}
      <section className="relative min-h-[100dvh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-8 sm:pb-12 hero-section">
        {/* Background Image Carousel - Sunlit & Crystal Clear */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
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
            {/* Minimal ultra-sheer dark gradient to let sunny photos shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-4 sm:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#0B1F3A]/85 border border-[#C8A45D]/70 text-[#F0D898] text-[10px] sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-8 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8A45D]" />
            <span>{heroSlides[currentHeroIndex].tag}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-3 sm:mb-6 drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]"
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
              className="w-full sm:w-auto bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D] text-[#0B1F3A] font-bold py-3.5 sm:py-4 px-8 sm:px-9 rounded-full shadow-[0_0_35px_rgba(200,164,93,0.6)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
            >
              <Compass className="w-4 h-4" />
              <span>{t.hero.exploreTours}</span>
            </Link>

            <Link
              href="/golf"
              className="w-full sm:w-auto bg-[#0B1F3A]/90 hover:bg-[#0B1F3A] border border-[#C8A45D]/80 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-9 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#C8A45D] flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
            >
              <Trophy className="w-4 h-4 text-[#C8A45D]" />
              <span>{t.hero.golfHolidays}</span>
            </Link>

            {/* Bespoke button hidden on small mobile, visible sm+ */}
            <button
              onClick={() => handleOpenBooking()}
              className="hidden sm:flex w-full sm:w-auto bg-black/40 hover:bg-black/60 border border-white/50 text-white font-bold py-4 px-7 rounded-full backdrop-blur-md transition-all text-xs uppercase tracking-wider items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#C8A45D]" />
              <span>{language === 'kr' ? "맞춤 여행 상담" : "Bespoke Concierge"}</span>
            </button>
          </motion.div>

          {/* Luxury Feature Pillars Bar (Hidden on Mobile) */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-wider text-white font-semibold">
            <span className="bg-[#0B1F3A]/85 border border-[#C8A45D]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              🚁 Airbus Helicopter Charters
            </span>
            <span className="bg-[#0B1F3A]/85 border border-[#C8A45D]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              ⛳ 4 PGA Championship Courses
            </span>
            <span className="bg-[#0B1F3A]/85 border border-[#C8A45D]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              🏰 Relais & Châteaux Lodgings
            </span>
            <span className="bg-[#0B1F3A]/85 border border-[#C8A45D]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              🇰🇷 1:1 VIP Korean Desk
            </span>
          </div>
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

      {/* LUXURY STATS */}
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

      {/* TRUST & CREDIBILITY DISPLAY */}
      <TrustDisplay onOpenBooking={handleOpenBooking} />

      {/* WHY CHOOSE US */}
      <section className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            {t.whyUs.tag}
          </div>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white">
            {t.whyUs.title}
          </h2>
          <p className="hidden sm:block text-gray-300 text-sm mt-3 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {[
            { title: t.whyUs.chauffeur, desc: t.whyUs.chauffeurDesc, icon: Car },
            { title: t.whyUs.hotels, desc: t.whyUs.hotelsDesc, icon: Hotel },
            { title: t.whyUs.concierge, desc: t.whyUs.conciergeDesc, icon: Clock },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#122848] border border-[#C8A45D]/25 hover:border-[#C8A45D] rounded-xl sm:rounded-2xl p-4 sm:p-8 transition-all duration-300 shadow-xl group"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0B1F3A] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] mb-3 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-xl font-serif font-bold text-white mb-1 sm:mb-2 group-hover:text-[#C8A45D] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
          >
            <span>{language === 'kr' ? '더 알아보기' : 'Learn More About Us'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="py-20 bg-[#060F1D] border-t border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
                <Compass className="w-3.5 h-3.5" />
                {t.experiences.tag}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {t.experiences.title}
              </h2>
            </div>
            <Link
              href="/tours"
              className="mt-4 md:mt-0 text-xs uppercase tracking-wider font-bold text-[#C8A45D] hover:text-[#D4B87A] flex items-center gap-2 group"
            >
              <span>{t.experiences.viewAll}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOUR_PACKAGES.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl overflow-hidden shadow-2xl group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C8A45D] text-[#0B1F3A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {pkg.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-200">
                    <span className="flex items-center gap-1 font-medium bg-[#0B1F3A]/80 px-2.5 py-1 rounded-full border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                      {pkg.duration}
                    </span>
                    <span className="text-[#C8A45D] font-bold text-base">
                      ${pkg.priceUSD.toLocaleString()} USD
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors line-clamp-1">
                      {language === 'kr' ? pkg.titleKr : pkg.titleEn}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                      {language === 'kr' ? pkg.descriptionKr : pkg.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <button
                      onClick={() => handleOpenBooking(pkg.titleEn)}
                      className="w-full bg-[#122848] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-[#C8A45D] border border-[#C8A45D]/40 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Read More & Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>{language === 'kr' ? '모든 투어 패키지 보기' : 'View All Tour Packages'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* GOLF HOLIDAYS SECTION */}
      <section className="py-24 bg-[#0B1F3A] relative border-t border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              {t.golfSection.tag}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              {t.golfSection.title}
            </h2>
            <p className="text-gray-300 text-sm mt-3">
              {t.golfSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GOLF_COURSES.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="bg-[#122848] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.nameEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 border border-[#C8A45D]/40 text-[#C8A45D] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {course.holes} Holes • Par {course.par}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] text-[#C8A45D] font-semibold uppercase tracking-wider">
                      {course.location}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                      {language === 'kr' ? course.nameKr : course.nameEn}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                    {language === 'kr' ? course.overviewKr : course.overviewEn}
                  </p>

                  <div className="space-y-1.5 text-xs text-gray-300 border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2">
                      <Hotel className="w-3.5 h-3.5 text-[#C8A45D]" />
                      <span><strong>Hotel:</strong> {course.hotel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-3.5 h-3.5 text-[#C8A45D]" />
                      <span><strong>Transfer:</strong> Mercedes V-Class / Helicopter</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenBooking(course.nameEn)}
                    className="w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t.golfSection.viewPackage}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/golf"
              className="inline-flex items-center gap-2 bg-[#122848] border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <Trophy className="w-4 h-4" />
              <span>{language === 'kr' ? '모든 골프 코스 보기' : 'Explore All Golf Courses'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LUXURY HOTEL SHOWCASE */}
      <LuxuryHotelShowcase />

      {/* KOREAN VIP TRAVELLER SECTION */}
      <KoreanTravellerSection />

      {/* CINEMATIC VIDEO STORIES */}
      <LuxuryVideoStories />

      {/* MASONRY PHOTO GALLERY */}
      <LuxuryPhotoGallery />

      {/* PREMIUM LOGISTICS SERVICES GRID */}
      <PremiumServicesGrid />

      {/* WEATHER & CURRENCY CALCULATOR */}
      <CurrencyWeatherWidget />

      {/* TRAVEL COST ESTIMATOR */}
      <TravelCostEstimator />

      {/* AWARDS SHOWCASE */}
      <AwardsShowcase />

      {/* WHY CHOOSE LANKA LUXE JOURNEYS */}
      <WhyChooseUs />


      {/* WILDLIFE SAFARIS SECTION */}
      <section className="py-24 bg-[#060F1D] border-t border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              {language === 'kr' ? "스리랑카 야생 사파리" : "Wildlife & Safari Adventures"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              {language === 'kr' ? "세계 최고의 야생 표범 & 코끼리 사파리" : "Untamed Wildlife & Leopard Safaris"}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              {language === 'kr'
                ? "야라 국립공원의 표범, 미네리야 아시아 코끼리 군집, 윌파투 정글 및 대왕고래 탐사를 수석 자연학자와 함께 경험하세요."
                : "Track elusive leopards in Yala, witness hundreds of wild Asian elephants in Minneriya, and explore Wilpattu with chief naturalists."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden border border-[#C8A45D]/30 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
                alt="Yala Wildlife Safari"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060F1D] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#122848]/90 border border-[#C8A45D]/40 backdrop-blur-md">
                <span className="text-[#C8A45D] font-bold text-xs uppercase tracking-wider block">Private 4x4 Land Cruisers</span>
                <h3 className="text-lg font-serif font-bold text-white mt-1">Yala & Wilpattu Expedition</h3>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { titleEn: "Yala Leopard Safaris", titleKr: "야라 표범 사파리", descEn: "World's highest density of Sri Lankan leopards with private Land Cruisers.", descKr: "세계 최대 밀도의 표범을 1:1 수석 자연학자와 함께 전용 지프로 탐험." },
                { titleEn: "Minneriya Elephant Gathering", titleKr: "미네리야 코끼리 대군집", descEn: "Witness hundreds of Asian elephants gathering around ancient reservoirs.", descKr: "수백 마리의 야생 코끼리가 고대 호숫가에 집결하는 계절별 장관 관람." },
                { titleEn: "Private Catamaran Whale Cruises", titleKr: "대왕고래 카타마란 요트", descEn: "Ocean charters with marine biologists to spot blue whales and dolphins.", descKr: "해양 생물학자 동행 인도양 대왕고래 프라이빗 요트 세일링." },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#122848] border border-[#C8A45D]/20 rounded-xl p-4 flex gap-4 items-start hover:border-[#C8A45D] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#C8A45D]/10 border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] font-bold shrink-0 text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">{language === 'kr' ? item.titleKr : item.titleEn}</h4>
                    <p className="text-xs text-gray-300 mt-1">{language === 'kr' ? item.descKr : item.descEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* WELLNESS & AYURVEDA RETREATS SECTION */}
      <section className="py-24 bg-[#0B1F3A] border-t border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'kr' ? "아유르베다 & 웰니스 리트릿" : "Holistic Wellness & Ayurveda"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              {language === 'kr' ? "전통 아유르베다 전문의 힐링 사원" : "Rejuvenate at Mountain & Beach Sanctuaries"}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              {language === 'kr'
                ? "전담 의사의 도샤 체질 진단을 바탕으로 일일 오일 테라피, 일출 운무 요가 및 유기농 웰니스 다이닝을 만끽하세요."
                : "Personalized dosha diagnosis, daily herbal oil baths, sunrise mountain yoga, and organic farm-to-table dining."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titleEn: "1:1 Ayurvedic Doctor Care",
                titleKr: "1:1 정통 아유르베다 전문의 케어",
                descEn: "Customized wellness prescription, dosha balancing & daily Shirodhara oil therapies.",
                descKr: "개인별 도샤 체질 진단 및 천연 온열 오일 수치료 시스템.",
                image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
              },
              {
                titleEn: "Misty Mountain Sunrise Yoga",
                titleKr: "너클스 산맥 일출 명상 요가",
                descEn: "Guided meditation & yoga overlooking misty tea country valleys and mountain peaks.",
                descKr: "운무 가득한 고원 산맥 전경을 보며 즐기는 정통 요가 세션.",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
              },
              {
                titleEn: "Oceanfront Thermal Hydrotherapy",
                titleKr: "인도양 해수 온열 수치료 & 스파",
                descEn: "Beachside sanctuary relaxation, warm seawater hydrotherapy, and sound bowl healing.",
                descKr: "해안가 럭셔리 빌라에서 펼쳐지는 온열 치료 및 싱잉볼 사운드 힐링.",
                image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#122848] border border-[#C8A45D]/30 rounded-2xl overflow-hidden shadow-xl hover:border-[#C8A45D] transition-all group">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.titleEn} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">{language === 'kr' ? item.titleKr : item.titleEn}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{language === 'kr' ? item.descKr : item.descEn}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#C8A45D] hover:text-[#0B1F3A] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{language === 'kr' ? '웰니스 패키지 보기' : 'View Wellness Packages'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>


        </div>
      </section>


      {/* TESTIMONIALS SCROLLING COLUMNS */}
      <Testimonials />


      {/* TRAVEL BLOG SECTION */}
      <section className="py-24 bg-[#0B1F3A] border-t border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5" />
                {language === 'kr' ? "스리랑카 트래블 매거진" : "Luxury Travel Journal"}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {language === 'kr' ? "스리랑카 럭셔리 여행 인사이트" : "Travel Insights & Insider Guides"}
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-wider font-bold text-[#C8A45D] hover:text-[#D4B87A] flex items-center gap-2 group shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_ARTICLES.slice(0, 3).map((art) => (
              <div key={art.id} className="bg-[#122848] border border-[#C8A45D]/30 rounded-2xl overflow-hidden shadow-xl hover:border-[#C8A45D] transition-all group flex flex-col justify-between">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <Image src={art.image} alt={art.titleEn} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#C8A45D] text-[#0B1F3A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {art.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
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

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#C8A45D] hover:text-[#0B1F3A] transition-all"
            >
              <span>{language === 'kr' ? '모든 아티클 보기' : 'See All Articles'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>


        </div>
      </section>

      {/* FAQ ACCORDION */}
      <FaqAccordion />

      {/* INSTAGRAM MASONRY */}
      <section className="py-20 bg-[#0B1F3A] border-t border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-white">
              <Camera className="w-5 h-5 text-[#C8A45D]" />
              <span className="font-serif font-bold text-lg">@lankaluxejourneys</span>
            </div>
            <span className="text-xs text-[#C8A45D] uppercase tracking-wider font-semibold">
              #LankaLuxeJourneys
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-44 rounded-xl overflow-hidden group border border-white/10 hover:border-[#C8A45D] transition-all"
              >
                <Image src={img} alt="Instagram Moment" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#0B1F3A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-6 h-6 text-[#C8A45D]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA BANNER */}
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

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedPackage={selectedBookingPackage}
      />
    </div>
  );
}
