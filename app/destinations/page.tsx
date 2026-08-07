'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, MapPin, Hotel, Calendar, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { DESTINATIONS, Destination } from '@/data/travelData';
import { BookingModal } from '@/components/ui/BookingModal';

export default function DestinationsPage() {
  const { language } = useLanguage();
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-[#081B33] text-white min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative py-28 bg-[#040E1B] overflow-hidden border-b border-[#C9A227]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold">
            <Compass className="w-3.5 h-3.5" />
            9 ICONIC REGIONS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "스리랑카 주요 럭셔리 여행지" : "Iconic Sri Lanka Destinations"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {language === 'kr'
              ? "유네스코 세계문화유산 요새부터 고원 차밭, 명문 골프 코스 및 표범 국립공원까지."
              : "From UNESCO rock fortresses to misty tea bungalows, elite golf courses, and wild coastal safari parks."}
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="bg-[#0D2647] border border-[#C9A227]/30 hover:border-[#C9A227] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2647] via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4 bg-[#081B33]/90 border border-[#C9A227]/40 text-[#C9A227] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Best: {language === 'kr' ? dest.bestTimeKr : dest.bestTimeEn}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#C9A227] transition-colors">
                    {language === 'kr' ? dest.nameKr : dest.nameEn}
                  </h3>
                  <span className="text-xs text-[#C9A227] font-semibold block mt-1">
                    {language === 'kr' ? dest.subtitleKr : dest.subtitleEn}
                  </span>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                    {language === 'kr' ? dest.descKr : dest.descEn}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#C9A227] font-bold uppercase tracking-wider">
                  <span>Explore Region</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destination Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div
            onClick={() => setSelectedDest(null)}
            className="fixed inset-0 bg-[#040E1B]/80 backdrop-blur-md"
          />

          <div className="relative w-full max-w-3xl bg-[#081B33] border border-[#C9A227]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(201,162,39,0.3)] text-white z-10 my-8 space-y-6">
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 rounded-xl overflow-hidden border border-[#C9A227]/30">
              <Image src={selectedDest.image} alt={selectedDest.nameEn} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-3xl font-serif font-bold text-white">
                  {language === 'kr' ? selectedDest.nameKr : selectedDest.nameEn}
                </h3>
                <span className="text-xs text-[#C9A227] font-semibold">
                  {language === 'kr' ? selectedDest.subtitleKr : selectedDest.subtitleEn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {language === 'kr' ? selectedDest.descKr : selectedDest.descEn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0D2647] p-4 rounded-xl border border-[#C9A227]/20 text-xs">
              <div>
                <strong className="text-[#C9A227] block mb-1">Top Luxury Hotels:</strong>
                <ul className="space-y-1 text-gray-200">
                  {selectedDest.hotels.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Hotel className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-[#C9A227] block mb-1">Highlights:</strong>
                <ul className="space-y-1 text-gray-200">
                  {(language === 'kr' ? selectedDest.highlightsKr : selectedDest.highlightsEn).map((hl, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedDest(null);
                setIsBookingOpen(true);
              }}
              className="w-full bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Inquire About {selectedDest.nameEn} Tour
            </button>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={selectedDest ? `${selectedDest.nameEn} Luxury Package` : ''}
      />
    </div>
  );
}
