'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, Clock, MapPin, Hotel, ArrowRight, Search, Filter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TOUR_PACKAGES, TourPackage } from '@/data/travelData';
import { BookingModal } from '@/components/ui/BookingModal';

export default function ToursPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPkgName, setBookingPkgName] = useState('');

  const categories = ['All', 'Luxury', 'Golf', 'Wildlife', 'Culture', 'Honeymoon', 'Ayurveda'];

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
    <div className="bg-[#081B33] text-white min-h-screen pb-24">
      {/* Header Banner */}
      <section className="relative py-24 bg-[#040E1B] overflow-hidden border-b border-[#C9A227]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold">
            <Compass className="w-3.5 h-3.5" />
            CURATED COLLECTION
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "스리랑카 럭셔리 투어 패키지" : "Bespoke Tour Packages"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {language === 'kr'
              ? "프라이빗 헬기 이동, 5성급 차 방갈로 및 1:1 전담 콘시어지가 결합된 최고급 라인업."
              : "Private helicopter transfers, Relais & Châteaux Tea Bungalows, and dedicated travel concierges."}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0D2647] border border-[#C9A227]/30 rounded-2xl p-4 sm:p-6 shadow-xl">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C9A227] text-[#081B33] shadow-md'
                    : 'bg-[#081B33] text-gray-300 border border-white/10 hover:border-[#C9A227]/50'
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
              className="w-full bg-[#081B33] border border-[#C9A227]/30 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227]"
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
              className="bg-[#0D2647] border border-[#C9A227]/30 hover:border-[#C9A227] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.titleEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2647] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#C9A227] text-[#081B33] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {pkg.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="bg-[#081B33]/90 px-3 py-1 rounded-full border border-white/20 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                    {pkg.duration}
                  </span>
                  <span className="text-[#C9A227] font-serif font-bold text-lg">
                    ${pkg.priceUSD.toLocaleString()} USD
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C9A227] transition-colors">
                    {language === 'kr' ? pkg.titleKr : pkg.titleEn}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                    {language === 'kr' ? pkg.descriptionKr : pkg.descriptionEn}
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span><strong>Destinations:</strong> {pkg.locations.join(' • ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Hotel className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span><strong>Hotels:</strong> {pkg.hotels.join(' • ')}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <Link
                    href={`/tours/${pkg.id}`}
                    className="flex-1 bg-[#081B33] hover:bg-white/10 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider border border-white/20 text-center transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleBook(pkg.titleEn)}
                    className="flex-1 bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1"
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

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={bookingPkgName}
      />
    </div>
  );
}
