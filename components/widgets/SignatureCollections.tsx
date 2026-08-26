'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Trophy, Hotel, Clock, ArrowRight, Sparkles, Eye, X, Check, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency } from '@/context/CurrencyContext';
import { TOUR_PACKAGES, GOLF_COURSES, LUXURY_HOTELS, TourPackage } from '@/data/travelData';

interface SignatureCollectionsProps {
  onOpenBooking: (packageName?: string) => void;
}

type CollectionTab = 'tours' | 'golf' | 'hotels';

export const SignatureCollections: React.FC<SignatureCollectionsProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const { formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState<CollectionTab>('tours');
  const [previewPackage, setPreviewPackage] = useState<TourPackage | null>(null);

  const tabs = [
    {
      id: 'tours' as CollectionTab,
      label: language === 'kr' ? '시그니처 투어' : 'Signature Tours',
      icon: Compass,
      subtitle: language === 'kr' ? '프라이빗 의전 럭셔리 일정' : 'Private Bespoke Itineraries',
    },
    {
      id: 'golf' as CollectionTab,
      label: language === 'kr' ? '챔피언십 골프' : 'Championship Golf',
      icon: Trophy,
      subtitle: language === 'kr' ? '스리랑카 4대 PGA 명문 코스' : 'All 4 Premier PGA Courses',
    },
    {
      id: 'hotels' as CollectionTab,
      label: language === 'kr' ? '헤리티지 럭셔리 스테이' : 'Heritage Lodgings',
      icon: Hotel,
      subtitle: language === 'kr' ? 'Relais & Châteaux 방갈로 & 오션 빌라' : 'Relais & Châteaux & Ocean Villas',
    },
  ];

  return (
    <section className="py-10 sm:py-28 bg-[#0B1F3A] relative border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{language === 'kr' ? '시그니처 컬렉션' : 'Signature Collections'}</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? '스리랑카 최고급 여행 라인업' : 'Curated Private Journeys'}
          </h2>
          <p className="hidden sm:block text-gray-300 text-sm mt-3 leading-relaxed">
            {language === 'kr'
              ? '프라이빗 제트 & 헬기 의전, 명문 PGA 골프 투어, 5성급 차밭 방갈로까지 한곳에서 비교하고 예약하세요.'
              : 'Explore bespoke itineraries, PGA championship tee times, and private tea estate sanctuaries.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#122848] border border-[#C8A45D]/30 backdrop-blur-xl shadow-xl max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    isActive ? 'text-[#0B1F3A]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D] rounded-full shadow-md"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'tours' && (
            <motion.div
              key="tours"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {TOUR_PACKAGES.slice(0, 3).map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-[#122848] border border-[#C8A45D]/25 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-60 overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.titleEn}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#0B1F3A]/90 border border-[#C8A45D]/40 text-[#C8A45D] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                            {pkg.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gray-200">
                          <span className="flex items-center gap-1 font-medium bg-[#0B1F3A]/80 px-2.5 py-1 rounded-full border border-white/10">
                            <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                            {pkg.duration}
                          </span>
                          <span className="text-[#C8A45D] font-bold text-sm">
                            {formatPrice(pkg.priceUSD)}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-2.5">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors line-clamp-1">
                          {language === 'kr' ? pkg.titleKr : pkg.titleEn}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                          {language === 'kr' ? pkg.descriptionKr : pkg.descriptionEn}
                        </p>

                        {/* Route Pills */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {pkg.locations.slice(0, 3).map((loc, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-[#0B1F3A] border border-white/10 text-gray-300">
                              {loc}
                            </span>
                          ))}
                          {pkg.locations.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#0B1F3A] border border-[#C8A45D]/30 text-[#C8A45D]">
                              +{pkg.locations.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setPreviewPackage(pkg)}
                          className="bg-[#0B1F3A] hover:bg-[#1a3760] text-gray-200 border border-white/10 font-semibold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C8A45D]" />
                          <span>{language === 'kr' ? '일정 상세' : 'Daily Route'}</span>
                        </button>
                        <button
                          onClick={() => onOpenBooking(pkg.titleEn)}
                          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-md"
                        >
                          <span>{language === 'kr' ? '예약 문의' : 'Reserve'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                >
                  <Compass className="w-4 h-4" />
                  <span>{language === 'kr' ? '모든 9대 시그니처 투어 보기' : 'Explore All 9 Signature Tours'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === 'golf' && (
            <motion.div
              key="golf"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {GOLF_COURSES.slice(0, 3).map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#122848] border border-[#C8A45D]/25 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-60 overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.nameEn}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 border border-[#C8A45D]/40 text-[#C8A45D] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          {course.holes} Holes • Par {course.par}
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 text-xs text-[#C8A45D] font-bold">
                          Green Fee: {formatPrice(course.greenFeeUSD)}
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-2.5">
                        <span className="text-[11px] text-[#C8A45D] font-semibold uppercase tracking-wider block">
                          {course.location}
                        </span>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors line-clamp-1">
                          {language === 'kr' ? course.nameKr : course.nameEn}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                          {language === 'kr' ? course.overviewKr : course.overviewEn}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0">
                      <button
                        onClick={() => onOpenBooking(course.nameEn)}
                        className="w-full bg-[#0B1F3A] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-[#C8A45D] border border-[#C8A45D]/40 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>{language === 'kr' ? '티타임 예약' : 'Reserve Tee Time'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/golf"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                >
                  <Trophy className="w-4 h-4" />
                  <span>{language === 'kr' ? '스리랑카 4대 골프장 전체 보기' : 'Explore All 4 PGA Golf Courses'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === 'hotels' && (
            <motion.div
              key="hotels"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {LUXURY_HOTELS.slice(0, 3).map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-[#122848] border border-[#C8A45D]/25 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-60 overflow-hidden">
                        <Image
                          src={hotel.image}
                          alt={hotel.nameEn}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 border border-[#C8A45D]/40 text-[#C8A45D] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          {hotel.category}
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 text-xs text-[#C8A45D] font-bold">
                          From {formatPrice(hotel.pricePerNightUSD)} / Night
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-2.5">
                        <span className="text-[11px] text-[#C8A45D] font-semibold uppercase tracking-wider block">
                          {language === 'kr' ? hotel.locationKr : hotel.locationEn}
                        </span>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors line-clamp-1">
                          {language === 'kr' ? hotel.nameKr : hotel.nameEn}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                          {language === 'kr' ? hotel.descKr : hotel.descEn}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0">
                      <button
                        onClick={() => onOpenBooking(hotel.nameEn)}
                        className="w-full bg-[#0B1F3A] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-[#C8A45D] border border-[#C8A45D]/40 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>{language === 'kr' ? '숙소 예약 문의' : 'Inquire Stay'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                >
                  <Hotel className="w-4 h-4" />
                  <span>{language === 'kr' ? '스리랑카 전역 럭셔리 호텔 & 리조트' : 'Explore All Luxury Lodgings'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* DAY-BY-DAY ITINERARY QUICK PREVIEW MODAL */}
        <AnimatePresence>
          {previewPackage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setPreviewPackage(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0B1F3A] border border-[#C8A45D]/50 rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 text-white"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 border-b border-[#C8A45D]/20 pb-4">
                  <div>
                    <span className="text-xs text-[#C8A45D] uppercase tracking-wider font-semibold">
                      {previewPackage.category} • {previewPackage.duration}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mt-1">
                      {language === 'kr' ? previewPackage.titleKr : previewPackage.titleEn}
                    </h3>
                  </div>
                  <button
                    onClick={() => setPreviewPackage(null)}
                    className="p-2 rounded-full bg-[#122848] text-gray-300 hover:text-white border border-white/10"
                    aria-label="Close Modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Itinerary Steps */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                    {language === 'kr' ? '일자별 맞춤 루트 & 상세 일정' : 'Day-by-Day Journey & Route'}
                  </h4>

                  <div className="space-y-3">
                    {(language === 'kr' ? previewPackage.itineraryKr : previewPackage.itineraryEn).map((day, idx) => (
                      <div key={idx} className="bg-[#122848] border border-white/5 rounded-xl p-4 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#C8A45D] text-[#0B1F3A] text-xs font-bold flex items-center justify-center shrink-0">
                            {day.day}
                          </span>
                          <h5 className="text-sm font-semibold text-white font-serif">{day.title}</h5>
                        </div>
                        <p className="text-xs text-gray-300 pl-8 leading-relaxed">{day.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included 5-Star Lodgings & Amenities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#122848] border border-[#C8A45D]/20 rounded-xl p-4 space-y-2">
                    <span className="text-[11px] text-[#C8A45D] uppercase tracking-wider font-bold block">
                      {language === 'kr' ? '포함 5성급 숙소' : 'Featured Luxury Hotels'}
                    </span>
                    <ul className="space-y-1 text-xs text-gray-200">
                      {previewPackage.hotels.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#122848] border border-[#C8A45D]/20 rounded-xl p-4 space-y-2">
                    <span className="text-[11px] text-[#C8A45D] uppercase tracking-wider font-bold block">
                      {language === 'kr' ? 'VIP 포함 내역' : 'White-Glove Inclusions'}
                    </span>
                    <ul className="space-y-1 text-xs text-gray-200">
                      {(language === 'kr' ? previewPackage.includedKr : previewPackage.includedEn).slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C8A45D]/20">
                  <div>
                    <span className="text-xs text-gray-400 block">{language === 'kr' ? '1인 기준 예상가' : 'Starting from'}</span>
                    <span className="text-xl font-serif font-bold text-[#C8A45D]">
                      {formatPrice(previewPackage.priceUSD)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={`https://wa.me/94770008899?text=${encodeURIComponent(
                        `Hi Lanka Luxe Journeys, I am interested in inquiring about the "${previewPackage.titleEn}" package (${previewPackage.duration}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        const title = previewPackage.titleEn;
                        setPreviewPackage(null);
                        onOpenBooking(title);
                      }}
                      className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-lg"
                    >
                      <span>{language === 'kr' ? '이 일정으로 예약 문의' : 'Reserve This Itinerary'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
