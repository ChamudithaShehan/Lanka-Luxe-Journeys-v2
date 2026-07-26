'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Compass, Trophy, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { DESTINATIONS, GOLF_COURSES } from '@/data/travelData';

export const SriLankaMap: React.FC = () => {
  const { language } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>('colombo');
  const [filter, setFilter] = useState<'all' | 'golf' | 'luxury'>('all');

  const locations = [
    { id: 'colombo', nameEn: 'Colombo', nameKr: '콜롬보', type: 'golf', top: '55%', left: '22%', hotel: 'Shangri-La Colombo & Royal Golf' },
    { id: 'sigiriya', nameEn: 'Sigiriya', nameKr: '시기리야', type: 'luxury', top: '35%', left: '50%', hotel: 'Water Garden & Fortress' },
    { id: 'kandy', nameEn: 'Kandy', nameKr: '캔디', type: 'golf', top: '48%', left: '46%', hotel: 'Victoria Golf & Santani' },
    { id: 'nuwara-eliya', nameEn: 'Nuwara Eliya', nameKr: '누와라엘리야', type: 'golf', top: '56%', left: '55%', hotel: 'Tea Trails & Highlands Golf' },
    { id: 'ella', nameEn: 'Ella', nameKr: '엘라', type: 'luxury', top: '60%', left: '65%', hotel: '98 Acres & Resplendent Ceylon' },
    { id: 'yala', nameEn: 'Yala Safari', nameKr: '야라 국립공원', type: 'luxury', top: '72%', left: '72%', hotel: 'Wild Coast Tented Lodge' },
    { id: 'galle', nameEn: 'Galle Fort', nameKr: '갈레 포트', type: 'golf', top: '78%', left: '30%', hotel: 'Amangalla & Catalina Golf' },
    { id: 'shangri-la-hambantota', nameEn: 'Hambantota', nameKr: '함반토타', type: 'golf', top: '76%', left: '60%', hotel: 'Shangri-La Ocean Golf Resort' },
  ];

  const activeLoc = locations.find((l) => l.id === selectedId) || locations[0];
  const destData = DESTINATIONS.find((d) => d.id === selectedId);
  const golfData = GOLF_COURSES.find((g) => g.id.includes(selectedId) || g.location.toLowerCase().includes(selectedId));

  const filteredLocations = locations.filter((loc) => {
    if (filter === 'golf') return loc.type === 'golf';
    if (filter === 'luxury') return loc.type === 'luxury';
    return true;
  });

  return (
    <section className="py-20 bg-[#040E1B] relative text-white border-t border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              Interactive Region Map
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              {language === 'kr' ? "스리랑카 주요 럭셔리 & 골프 지역" : "Explore Iconic Sri Lankan Regions"}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            {[
              { id: 'all', labelEn: 'All Regions', labelKr: '전체 지역' },
              { id: 'golf', labelEn: 'Golf Clubs', labelKr: '명문 골프장' },
              { id: 'luxury', labelEn: 'Luxury Lodges', labelKr: '최고급 리조트' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === item.id
                    ? 'bg-[#C9A227] text-[#081B33]'
                    : 'bg-[#081B33] text-gray-300 border border-white/10 hover:border-[#C9A227]/50'
                }`}
              >
                {language === 'kr' ? item.labelKr : item.labelEn}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Graphic Container (LG: 7 Cols) */}
          <div className="lg:col-span-7 relative bg-[#081B33] border border-[#C9A227]/30 rounded-2xl p-6 h-[460px] flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Map Background Stylized Silhouette */}
            <div className="relative w-full h-full max-w-[380px] mx-auto flex items-center justify-center">
              {/* Island Shape SVG */}
              <svg viewBox="0 0 400 500" className="w-full h-full opacity-20 stroke-[#C9A227] fill-[#0D2647]">
                <path d="M 200,40 C 260,80 320,180 310,290 C 300,370 250,440 190,460 C 130,440 90,370 80,280 C 70,180 130,70 200,40 Z" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Helipad lines overlay */}
              <div className="absolute inset-0 border border-[#C9A227]/10 rounded-full animate-ping opacity-20 pointer-events-none" />

              {/* Map Hotspot Pins */}
              {filteredLocations.map((loc) => {
                const isSelected = selectedId === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedId(loc.id)}
                    style={{ top: loc.top, left: loc.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-[#C9A227]/30 animate-ping" />
                      )}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#C9A227] text-[#081B33] scale-125 shadow-[0_0_15px_#C9A227]'
                            : loc.type === 'golf'
                            ? 'bg-[#0D2647] text-[#C9A227] border border-[#C9A227] hover:scale-110'
                            : 'bg-[#081B33] text-white border border-white/40 hover:scale-110'
                        }`}
                      >
                        {loc.type === 'golf' ? <Trophy className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                      </div>
                      <span className="absolute top-8 text-[11px] font-medium tracking-wide whitespace-nowrap bg-[#081B33]/90 border border-[#C9A227]/40 text-white px-2 py-0.5 rounded-full shadow-md">
                        {language === 'kr' ? loc.nameKr : loc.nameEn}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Card Side (LG: 5 Cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0D2647] border border-[#C9A227]/40 rounded-2xl p-6 sm:p-8 shadow-xl text-white space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs text-[#C9A227] font-semibold uppercase tracking-wider">
                      {activeLoc.type === 'golf' ? "PGA Golf Destination" : "Luxury Heritage Region"}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
                      {language === 'kr' ? activeLoc.nameKr : activeLoc.nameEn}
                    </h3>
                  </div>
                  <Navigation className="w-6 h-6 text-[#C9A227]" />
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {destData
                    ? (language === 'kr' ? destData.descKr : destData.descEn)
                    : (golfData ? (language === 'kr' ? golfData.overviewKr : golfData.overviewEn) : '')}
                </p>

                <div className="p-3 bg-[#081B33] rounded-xl border border-[#C9A227]/20 text-xs">
                  <div className="text-[#C9A227] font-semibold mb-1">
                    {language === 'kr' ? "주요 럭셔리 호텔 & 리조트" : "Featured Accommodations"}
                  </div>
                  <div className="text-gray-200">{activeLoc.hotel}</div>
                </div>

                {golfData && (
                  <div className="p-3 bg-[#081B33] rounded-xl border border-[#C9A227]/20 text-xs space-y-1">
                    <div className="text-[#C9A227] font-semibold">
                      {language === 'kr' ? "골프장 스펙" : "Golf Course Specs"}
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Course: {golfData.holes} Holes (Par {golfData.par})</span>
                      <span>Designer: {golfData.designer}</span>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Inquire About {language === 'kr' ? activeLoc.nameKr : activeLoc.nameEn}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
