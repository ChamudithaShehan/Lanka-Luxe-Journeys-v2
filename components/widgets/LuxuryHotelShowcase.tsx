'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Hotel, MapPin, CheckCircle2, ArrowRight, X, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LUXURY_HOTELS, LuxuryHotel } from '@/data/travelData';
import { BookingModal } from '@/components/ui/BookingModal';

export const LuxuryHotelShowcase: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedHotel, setSelectedHotel] = useState<LuxuryHotel | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const categories = ['All', 'Luxury Resorts', 'Golf Resorts', 'Beach Resorts', 'Mountain Hotels', 'Boutique Hotels', 'Private Villas'];

  const filteredHotels = LUXURY_HOTELS.filter((hotel) => {
    if (activeCategory === 'All') return true;
    return hotel.category === activeCategory;
  });

  return (
    <section className="py-24 bg-[#0B1F3A] text-white border-t border-[#C8A45D]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
            <Hotel className="w-3.5 h-3.5" />
            {t.hotelsShowcase.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {t.hotelsShowcase.title}
          </h2>
          <p className="text-gray-300 text-sm mt-3">
            {t.hotelsShowcase.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAllMobile(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#C8A45D] text-[#0B1F3A] shadow-md'
                  : 'bg-[#122848] text-gray-300 border border-white/10 hover:border-[#C8A45D]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hotel Grid - Max 3 on Mobile unless expanded */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel, index) => {
            const isHiddenMobile = !showAllMobile && index >= 3;
            return (
              <div
                key={hotel.id}
                className={`bg-[#122848] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col ${
                  isHiddenMobile ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.nameEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#C8A45D] text-[#0B1F3A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {hotel.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#0B1F3A]/90 border border-[#C8A45D]/40 px-2.5 py-1 rounded-full flex items-center gap-1 text-xs text-[#C8A45D] font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {hotel.rating}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] text-[#C8A45D] font-semibold uppercase tracking-wider block">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {language === 'kr' ? hotel.locationKr : hotel.locationEn}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors mt-0.5">
                      {language === 'kr' ? hotel.nameKr : hotel.nameEn}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                      {language === 'kr' ? hotel.descKr : hotel.descEn}
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-gray-300 border-t border-white/10 pt-3">
                    {(language === 'kr' ? hotel.facilitiesKr : hotel.facilitiesEn).slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      onClick={() => setSelectedHotel(hotel)}
                      className="flex-1 bg-[#0B1F3A] hover:bg-white/10 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider border border-white/20 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedHotel(hotel);
                        setIsBookingOpen(true);
                      }}
                      className="flex-1 bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Hotels & Resorts Link to Dedicated Page */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
          >
            <Hotel className="w-4 h-4 text-[#C8A45D]" />
            <span>{language === 'kr' ? '모든 럭셔리 호텔 & 리조트 보기' : 'View All Hotels & Resorts'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Hotel Detail Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div onClick={() => setSelectedHotel(null)} className="fixed inset-0 bg-[#060F1D]/80 backdrop-blur-md" />
          <div className="relative w-full max-w-3xl bg-[#0B1F3A] border border-[#C8A45D]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-white z-10 my-8 space-y-6">
            <button onClick={() => setSelectedHotel(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 rounded-xl overflow-hidden border border-[#C8A45D]/30">
              <Image src={selectedHotel.image} alt={selectedHotel.nameEn} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-[#C8A45D] font-bold uppercase">{selectedHotel.category}</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{language === 'kr' ? selectedHotel.nameKr : selectedHotel.nameEn}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {language === 'kr' ? selectedHotel.descKr : selectedHotel.descEn}
            </p>

            <div className="bg-[#122848] p-4 rounded-xl border border-[#C8A45D]/20 text-xs space-y-2">
              <div className="text-[#C8A45D] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                Hotel Amenities & VIP Privileges
              </div>
              <div className="grid grid-cols-2 gap-2 text-gray-200">
                {(language === 'kr' ? selectedHotel.facilitiesKr : selectedHotel.facilitiesEn).map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedHotel(null);
                setIsBookingOpen(true);
              }}
              className="w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Reserve Villa & Suites
            </button>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={selectedHotel ? selectedHotel.nameEn : ''}
      />
    </section>
  );
};
