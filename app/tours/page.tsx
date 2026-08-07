'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, Clock, MapPin, Hotel, ArrowRight, Search, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TOUR_PACKAGES } from '@/data/travelData';
import { BookingModal } from '@/components/ui/BookingModal';

export default function ToursPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPkgName, setBookingPkgName] = useState('');

  const categories = ['All', 'Luxury', 'Golf', 'Wildlife', 'Culture', 'Honeymoon', 'Family', 'Ayurveda', 'Beach', 'TailorMade'];

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    const matchesCat = selectedCategory === 'All' || pkg.category === selectedCategory;
    const matchesSearch =
      pkg.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.titleKr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.locations.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleBook = (name: string) => {
    setBookingPkgName(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#0B1F3A] text-white min-h-screen pb-24">
      {/* Header Banner */}
      <section className="relative py-24 bg-[#060F1D] overflow-hidden border-b border-[#C8A45D]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold">
            <Compass className="w-3.5 h-3.5" />
            CURATED COLLECTION
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "스리랑카 럭셔리 투어 패키지" : "Bespoke Tour Packages"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {language === 'kr'
              ? "프라이빗 의전, 5성급 방갈로, PGA 골프 및 100% 맞춤 일정이 결합된 최고급 라인업."
              : "Private luxury chauffeur vehicles, Relais & Châteaux Tea Bungalows, PGA Golf, and 100% tailor-made itineraries."}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#122848] border border-[#C8A45D]/30 rounded-2xl p-4 sm:p-6 shadow-xl">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C8A45D] text-[#0B1F3A] shadow-md'
                    : 'bg-[#0B1F3A] text-gray-300 border border-white/10 hover:border-[#C8A45D]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'kr' ? "여행지 / 패키지 검색..." : "Search packages..."}
              className="w-full bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
            />
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#122848] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#C8A45D] text-[#0B1F3A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {pkg.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="bg-[#0B1F3A]/90 px-3 py-1 rounded-full border border-white/20 flex items-center gap-1 font-medium text-white">
                    <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                    {pkg.duration}
                  </span>
                  <span className="text-[#C8A45D] font-serif font-bold text-base sm:text-lg bg-[#0B1F3A]/90 px-3 py-1 rounded-full border border-[#C8A45D]/40">
                    {pkg.priceUSD > 0 ? `$${pkg.priceUSD.toLocaleString()} USD` : (language === 'kr' ? '맞춤 문의' : 'Custom Quote')}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                    {language === 'kr' ? pkg.titleKr : pkg.titleEn}
                  </h3>

                  {/* Ideal For Badge */}
                  {(pkg.idealForEn || pkg.idealForKr) && (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#C8A45D] font-medium bg-[#0B1F3A] px-2.5 py-0.5 rounded-md border border-[#C8A45D]/20">
                      <UserCheck className="w-3 h-3 shrink-0" />
                      <span><strong>Ideal for:</strong> {language === 'kr' ? pkg.idealForKr : pkg.idealForEn}</span>
                    </div>
                  )}

                  <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                    {language === 'kr' ? pkg.descriptionKr : pkg.descriptionEn}
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                    <span className="truncate"><strong>Destinations:</strong> {pkg.locations.join(' • ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Hotel className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                    <span className="truncate"><strong>Hotels:</strong> {pkg.hotels.join(' • ')}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <Link
                    href={`/tours/${pkg.id}`}
                    className="flex-1 bg-[#0B1F3A] hover:bg-white/10 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider border border-white/20 text-center transition-colors flex items-center justify-center"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleBook(pkg.titleEn)}
                    className="flex-1 bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1 shadow-md"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE LANKA LUXE JOURNEYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#122848] border border-[#C8A45D]/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
              THE LANKA LUXE ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              {language === 'kr' ? "왜 Lanka Luxe Journeys인가?" : "Why Choose Lanka Luxe Journeys?"}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              {language === 'kr'
                ? "타협 없는 서비스 품질, 완벽한 보안, 세심한 맞춤형 케어로 최상의 스리랑카 럭셔리 여정을 선사합니다."
                : "Uncompromised service quality, total security, and meticulous care for your bespoke journey across Sri Lanka."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { titleEn: "Private Luxury Transportation", titleKr: "프라이빗 럭셔리 전용 수송", descEn: "Mercedes vehicles, helicopters & yachts", descKr: "메르세데스 럭셔리 의전, 헬기 및 요트" },
              { titleEn: "Handpicked Premium Hotels", titleKr: "엄선된 5성급 럭셔리 숙소", descEn: "Aman, Relais & Châteaux & 5-Star resorts", descKr: "아만, 릴레앤샤토 & 최고급 5성급 리조트" },
              { titleEn: "Experienced Chauffeur Guides", titleKr: "베테랑 전담 쇼퍼 가이드", descEn: "Professional English & Korean concierges", descKr: "전문 영어 및 한국어 전담 콘시어지" },
              { titleEn: "Fully Flexible Itineraries", titleKr: "100% 자율 맞춤 일정", descEn: "Customized pace, activities & dining", descKr: "자유로운 코스, 액티비티 & 다이닝 설정" },
              { titleEn: "24/7 VIP Guest Support", titleKr: "24시간 VIP 밀착 케어", descEn: "Direct concierge line anytime", descKr: "언제든 연결되는 전담 콘시어지 라인" },
              { titleEn: "Authentic Sri Lankan Heritage", titleKr: "정통 스리랑카 문화 체험", descEn: "Private access to sacred sites & nature", descKr: "유네스코 성지 & 와일드 사파리 프라이빗 관람" },
              { titleEn: "Exceptional Detail & Security", titleKr: "세심한 의전 & 완벽한 보안", descEn: "White-glove VIP protocol & privacy", descKr: "VIP 의전 프로토콜 & 완전한 사생활 보호" },
              { titleEn: "Unforgettable Memories", titleKr: "평생 잊지 못할 여정 연출", descEn: "Bespoke romantic & family memories", descKr: "맞춤형 허니문, 골프 & 가족 여행" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0B1F3A] border border-[#C8A45D]/20 rounded-2xl p-5 hover:border-[#C8A45D] transition-all space-y-2 group">
                <div className="w-8 h-8 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] font-serif text-xs font-bold group-hover:bg-[#C8A45D] group-hover:text-[#0B1F3A] transition-colors">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-serif font-bold text-white">
                  {language === 'kr' ? item.titleKr : item.titleEn}
                </h3>
                <p className="text-xs text-gray-300">
                  {language === 'kr' ? item.descKr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={bookingPkgName}
      />
    </div>
  );
}
