'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  Car,
  Hotel,
  Clock,
  UserCheck,
  Plane,
  Camera,
  PhoneCall,
  MapPin,
  Flame,
  Award,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GOLF_COURSES, TOUR_PACKAGES, EXPERIENCES, TESTIMONIALS } from '@/data/travelData';
import { AiTripPlanner } from '@/components/widgets/AiTripPlanner';
import { LuxuryHotelShowcase } from '@/components/widgets/LuxuryHotelShowcase';
import { Destination360Viewer } from '@/components/widgets/Destination360Viewer';
import { LuxuryPhotoGallery } from '@/components/widgets/LuxuryPhotoGallery';
import { LuxuryVideoStories } from '@/components/widgets/LuxuryVideoStories';
import { KoreanTravellerSection } from '@/components/widgets/KoreanTravellerSection';
import { PremiumServicesGrid } from '@/components/widgets/PremiumServicesGrid';
import { AwardsShowcase } from '@/components/widgets/AwardsShowcase';
import { FaqAccordion } from '@/components/widgets/FaqAccordion';
import { CurrencyWeatherWidget } from '@/components/widgets/CurrencyWeatherWidget';
import { TravelCostEstimator } from '@/components/widgets/TravelCostEstimator';
import { BookingModal } from '@/components/ui/BookingModal';
import Testimonials from '@/components/ui/testimonials-demo';

export default function HomePage() {
  const { t, language } = useLanguage();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingPackage, setSelectedBookingPackage] = useState('');
  const [showAllGolfMobile, setShowAllGolfMobile] = useState(false);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
      tag: language === 'kr' ? "스리랑카 최고급 VIP 럭셔리 투어" : "SRI LANKA ULTRA-LUXURY JOURNEYS",
      title: language === 'kr' ? "인도양의 보석, 스리랑카 VIP 오디세이" : "Experience Sri Lanka Beyond Luxury",
      sub: language === 'kr' ? "프라이빗 헬기 직항, 5성급 릴레앤샤토 방갈로, 1:1 전담 한국어 콘시어지와 함께하는 특별한 여정." : "Exclusive private jet charters, 5-star Relais & Châteaux tea estate bungalows, and bespoke travel concierge.",
    },
    {
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1920&q=80",
      tag: language === 'kr' ? "실론 고원 차밭 & 파노라마 뷰" : "CEYLON HIGHLAND TEA ESTATES",
      title: language === 'kr' ? "운무 속 푸른 실론 차밭과 마호가니 열차" : "Misty Tea Bungalows & Royal Trains",
      sub: language === 'kr' ? "해발 1,800m 청정 티 방갈로 입실 및 마호가니 전용 열차에서 즐기는 애프터눈 티." : "Stay at colonial planter bungalows surrounded by emerald tea hills and private train carriages.",
    },
    {
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80",
      tag: language === 'kr' ? "PGA 규격 4대 명문 코스 라운딩" : "PGA CHAMPIONSHIP GOLF HOLIDAYS",
      title: language === 'kr' ? "인도양 오션뷰 & 호수 파노라마 골프" : "Championship Golf & Ocean Views",
      sub: language === 'kr' ? "캔디 빅토리아, 로열 콜롬보, 누와라엘리야에서 즐기는 1:1 전담 캐디 의전 라운딩." : "Play on Asia's top courses with guaranteed morning tee times and private PGA caddies.",
    },
    {
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80",
      tag: language === 'kr' ? "유네스코 고대 암사원 요새" : "ANCIENT SIGIRIYA CITADEL",
      title: language === 'kr' ? "천년 역사의 거암 요새 프라이빗 일출" : "Sunrise Access to Royal Rock Fortress",
      sub: language === 'kr' ? "대중 입장에 앞서 전용 가이드와 함께 오르는 시기리야 고대 왕국의 일출 전경." : "VIP early access to the 200-meter-high granite citadel surrounded by ancient water gardens.",
    }
  ];

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
    <div className="relative overflow-hidden bg-[#081B33]">
      {/* SUN-DROPPED VIBRANT HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 pb-12">
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
              className="object-cover object-center filter brightness-110 contrast-105"
            />
            {/* Minimal ultra-sheer dark gradient to let sunny photos shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#081B33]/85 border border-[#C9A227]/70 text-[#FFE79A] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-8 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
            <span>{heroSlides[currentHeroIndex].tag}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]"
          >
            {heroSlides[currentHeroIndex].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            {heroSlides[currentHeroIndex].sub}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/tours"
              className="w-full sm:w-auto bg-gradient-to-r from-[#C9A227] via-[#FFE79A] to-[#C9A227] text-[#081B33] font-bold py-4 px-9 rounded-full shadow-[0_0_35px_rgba(201,162,39,0.6)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
            >
              <Compass className="w-4.5 h-4.5" />
              <span>{t.hero.exploreTours}</span>
            </Link>

            <Link
              href="/golf"
              className="w-full sm:w-auto bg-[#081B33]/90 hover:bg-[#081B33] border border-[#C9A227]/80 text-white font-bold py-4 px-9 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#C9A227] flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm"
            >
              <Trophy className="w-4.5 h-4.5 text-[#C9A227]" />
              <span>{t.hero.golfHolidays}</span>
            </Link>

            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto bg-black/40 hover:bg-black/60 border border-white/50 text-white font-bold py-4 px-7 rounded-full backdrop-blur-md transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span>{language === 'kr' ? "맞춤 여행 상담" : "Bespoke Concierge"}</span>
            </button>
          </motion.div>

          {/* Luxury Feature Pillars Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-wider text-white font-semibold">
            <span className="bg-[#081B33]/85 border border-[#C9A227]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              🚁 Airbus Helicopter Charters
            </span>
            <span className="bg-[#081B33]/85 border border-[#C9A227]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              ⛳ 4 PGA Championship Courses
            </span>
            <span className="bg-[#081B33]/85 border border-[#C9A227]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              🏰 Relais & Châteaux Lodgings
            </span>
            <span className="bg-[#081B33]/85 border border-[#C9A227]/50 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
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
                idx === currentHeroIndex ? 'w-12 bg-[#C9A227]' : 'w-3 bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* LUXURY STATS */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D2647]/95 border border-[#C9A227]/30 rounded-2xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="border-r border-white/10 last:border-r-0 pr-4">
            <div className="text-3xl sm:text-5xl font-serif font-bold text-[#C9A227]">5,000+</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.guests}
            </div>
          </div>
          <div className="border-r border-white/10 last:border-r-0 pr-4">
            <div className="text-3xl sm:text-5xl font-serif font-bold text-[#C9A227]">1,200+</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.golfGuests}
            </div>
          </div>
          <div className="border-r border-white/10 last:border-r-0 pr-4">
            <div className="text-3xl sm:text-5xl font-serif font-bold text-[#C9A227]">25+</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.experiences}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-5xl font-serif font-bold text-[#C9A227]">98%</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 font-medium mt-1">
              {t.stats.satisfaction}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            {t.whyUs.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: t.whyUs.chauffeur, desc: t.whyUs.chauffeurDesc, icon: Car },
            { title: t.whyUs.hotels, desc: t.whyUs.hotelsDesc, icon: Hotel },
            { title: t.whyUs.concierge, desc: t.whyUs.conciergeDesc, icon: Clock },
            { title: t.whyUs.korean, desc: t.whyUs.koreanDesc, icon: UserCheck },
            { title: t.whyUs.transport, desc: t.whyUs.transportDesc, icon: Plane },
            { title: t.whyUs.tailorMade, desc: t.whyUs.tailorMadeDesc, icon: Sparkles },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-[#0D2647] border border-[#C9A227]/25 hover:border-[#C9A227] rounded-2xl p-8 transition-all duration-300 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#081B33] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="py-20 bg-[#040E1B] border-t border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
                <Compass className="w-3.5 h-3.5" />
                {t.experiences.tag}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {t.experiences.title}
              </h2>
            </div>
            <Link
              href="/tours"
              className="mt-4 md:mt-0 text-xs uppercase tracking-wider font-bold text-[#C9A227] hover:text-[#E5C358] flex items-center gap-2 group"
            >
              <span>{t.experiences.viewAll}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOUR_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#081B33] border border-[#C9A227]/30 rounded-2xl overflow-hidden shadow-2xl group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.titleEn}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A227] text-[#081B33] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {pkg.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-200">
                    <span className="flex items-center gap-1 font-medium bg-[#081B33]/80 px-2.5 py-1 rounded-full border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                      {pkg.duration}
                    </span>
                    <span className="text-[#C9A227] font-bold text-base">
                      ${pkg.priceUSD.toLocaleString()} USD
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C9A227] transition-colors line-clamp-1">
                      {language === 'kr' ? pkg.titleKr : pkg.titleEn}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                      {language === 'kr' ? pkg.descriptionKr : pkg.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenBooking(pkg.titleEn)}
                      className="w-full bg-[#0D2647] hover:bg-[#C9A227] hover:text-[#081B33] text-[#C9A227] border border-[#C9A227]/40 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Read More & Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLF HOLIDAYS SECTION */}
      <section className="py-24 bg-[#081B33] relative border-t border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
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
            {GOLF_COURSES.map((course, idx) => {
              const isHiddenMobile = !showAllGolfMobile && idx >= 3;
              return (
                <div
                  key={course.id}
                  className={`bg-[#0D2647] border border-[#C9A227]/30 hover:border-[#C9A227] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
                    isHiddenMobile ? 'hidden md:block' : 'block'
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.nameEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2647] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#081B33]/90 border border-[#C9A227]/40 text-[#C9A227] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {course.holes} Holes • Par {course.par}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] text-[#C9A227] font-semibold uppercase tracking-wider">
                        {course.location}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C9A227] transition-colors">
                        {language === 'kr' ? course.nameKr : course.nameEn}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                      {language === 'kr' ? course.overviewKr : course.overviewEn}
                    </p>

                    <div className="space-y-1.5 text-xs text-gray-300 border-t border-white/10 pt-3">
                      <div className="flex items-center gap-2">
                        <Hotel className="w-3.5 h-3.5 text-[#C9A227]" />
                        <span><strong>Hotel:</strong> {course.hotel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-3.5 h-3.5 text-[#C9A227]" />
                        <span><strong>Transfer:</strong> Mercedes V-Class / Helicopter</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenBooking(course.nameEn)}
                      className="w-full bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>{t.golfSection.viewPackage}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View More Button for Golf Courses */}
          {GOLF_COURSES.length > 3 && (
            <div className="mt-6 text-center md:hidden">
              <button
                onClick={() => setShowAllGolfMobile(!showAllGolfMobile)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D2647] border border-[#C9A227] text-[#C9A227] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#C9A227] hover:text-[#081B33] transition-all"
              >
                <span>{showAllGolfMobile ? (language === 'kr' ? '접기 (Show Less)' : 'Show Less') : (language === 'kr' ? '더보기 (View More)' : 'View More Golf Courses')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllGolfMobile ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/golf"
              className="inline-flex items-center gap-2 bg-[#0D2647] border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#081B33] font-bold py-3.5 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <Trophy className="w-4 h-4" />
              <span>Explore All Golf Courses</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LUXURY HOTEL SHOWCASE */}
      <LuxuryHotelShowcase />

      {/* 360 DESTINATION PREVIEW */}
      <Destination360Viewer />

      {/* KOREAN VIP TRAVELLER SECTION */}
      <KoreanTravellerSection />

      {/* CINEMATIC VIDEO STORIES */}
      <LuxuryVideoStories />

      {/* MASONRY PHOTO GALLERY */}
      <LuxuryPhotoGallery />

      {/* PREMIUM LOGISTICS SERVICES GRID */}
      <PremiumServicesGrid />

      {/* AI TRIP PLANNER WIDGET */}
      <AiTripPlanner />

      {/* WEATHER & CURRENCY CALCULATOR */}
      <CurrencyWeatherWidget />

      {/* TRAVEL COST ESTIMATOR */}
      <TravelCostEstimator />

      {/* AWARDS SHOWCASE */}
      <AwardsShowcase />

      {/* TESTIMONIALS SCROLLING COLUMNS */}
      <Testimonials />

      {/* FAQ ACCORDION */}
      <FaqAccordion />

      {/* INSTAGRAM MASONRY */}
      <section className="py-20 bg-[#081B33] border-t border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-white">
              <Camera className="w-5 h-5 text-[#C9A227]" />
              <span className="font-serif font-bold text-lg">@lankaluxejourneys</span>
            </div>
            <span className="text-xs text-[#C9A227] uppercase tracking-wider font-semibold">
              #LankaLuxeJourneys
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-44 rounded-xl overflow-hidden group border border-white/10 hover:border-[#C9A227] transition-all"
              >
                <Image src={img} alt="Instagram Moment" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#081B33]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-6 h-6 text-[#C9A227]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA BANNER */}
      <section id="contact" className="relative py-24 overflow-hidden border-t border-[#C9A227]/30">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80"
            alt="CTA Banner"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040E1B] via-[#081B33]/90 to-[#040E1B]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {t.contactCta.title}
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-light">
            {t.contactCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-4 px-8 rounded-full shadow-[0_0_25px_rgba(201,162,39,0.4)] transition-all uppercase tracking-wider text-xs sm:text-sm"
            >
              {t.contactCta.bookBtn}
            </button>
            <a
              href="https://wa.me/94770008899"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border border-white hover:border-[#C9A227] text-white hover:text-[#C9A227] font-bold py-4 px-8 rounded-full transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#25D366]" />
              {t.contactCta.whatsappBtn}
            </a>
          </div>
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
