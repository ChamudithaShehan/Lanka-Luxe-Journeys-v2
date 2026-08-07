'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Trophy, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { DESTINATIONS, Destination } from '@/data/travelData';

export const InteractiveSvgMap: React.FC = () => {
  const { language } = useLanguage();
  const [activeDestId, setActiveDestId] = useState<string>('sigiriya');

  const selectedDest = DESTINATIONS.find((d) => d.id === activeDestId) || DESTINATIONS[0];

  return (
    <section className="py-24 bg-[#040E1B] text-white border-t border-[#C9A227]/20 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            Interactive Vector Map
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {language === 'kr' ? "스리랑카 10대 핵심 럭셔리 & 골프 지역" : "Interactive Sri Lanka Regional Map"}
          </h2>
          <p className="text-gray-300 text-sm mt-3">
            {language === 'kr'
              ? "지도 상의 지역 마커를 클릭하여 5성급 리조트, 골프장 및 명소를 실시간으로 탐색해보세요."
              : "Click any destination node on the SVG map to explore top attractions, luxury hotels, and golf courses."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Vector Map SVG Canvas (LG: 7 Cols) */}
          <div className="lg:col-span-7 bg-[#081B33] border border-[#C9A227]/30 rounded-2xl p-6 relative h-[520px] shadow-2xl flex items-center justify-center overflow-hidden">
            {/* SVG Outline Container */}
            <div className="relative w-full h-full max-w-[380px] mx-auto">
              <svg
                viewBox="0 0 400 500"
                className="w-full h-full drop-shadow-[0_0_20px_rgba(201,162,39,0.15)]"
              >
                {/* Island Path Silhouette */}
                <path
                  d="M 210 30 
                     C 270 70, 330 150, 320 280 
                     C 310 360, 260 450, 190 475 
                     C 120 450, 75 360, 70 270 
                     C 65 170, 140 60, 210 30 Z"
                  fill="#0D2647"
                  stroke="#C9A227"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
              </svg>

              {/* Hotspot Nodes */}
              {DESTINATIONS.map((dest) => {
                const isSelected = activeDestId === dest.id;
                return (
                  <button
                    key={dest.id}
                    onClick={() => setActiveDestId(dest.id)}
                    style={{ left: `${dest.svgPos.x}px`, top: `${dest.svgPos.y}px` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  >
                    <div className="relative flex flex-col items-center">
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-[#C9A227]/40 animate-ping" />
                      )}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#C9A227] text-[#081B33] scale-125 shadow-[0_0_20px_#C9A227]'
                            : 'bg-[#081B33] text-[#C9A227] border border-[#C9A227]/60 hover:scale-110 hover:border-[#C9A227]'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <span
                        className={`mt-1 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                          isSelected
                            ? 'bg-[#C9A227] text-[#081B33]'
                            : 'bg-[#040E1B]/90 text-gray-200 border border-white/20 group-hover:border-[#C9A227]'
                        }`}
                      >
                        {language === 'kr' ? dest.nameKr : dest.nameEn}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Destination Preview Card (LG: 5 Cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDestId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0D2647] border border-[#C9A227]/40 rounded-2xl overflow-hidden shadow-2xl space-y-4"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={selectedDest.image}
                    alt={selectedDest.nameEn}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2647] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#081B33]/90 border border-[#C9A227] text-[#C9A227] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Best Season: {language === 'kr' ? selectedDest.bestTimeKr : selectedDest.bestTimeEn}
                  </div>
                </div>

                <div className="p-6 space-y-4 pt-0">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {language === 'kr' ? selectedDest.nameKr : selectedDest.nameEn}
                    </h3>
                    <span className="text-xs text-[#C9A227] font-semibold block mt-0.5">
                      {language === 'kr' ? selectedDest.subtitleKr : selectedDest.subtitleEn}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {language === 'kr' ? selectedDest.descKr : selectedDest.descEn}
                  </p>

                  <div className="p-3 bg-[#081B33] rounded-xl border border-[#C9A227]/20 text-xs space-y-1.5">
                    <div className="text-[#C9A227] font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Top Regional Attractions
                    </div>
                    <ul className="text-gray-300 space-y-1">
                      {(language === 'kr' ? selectedDest.highlightsKr : selectedDest.highlightsEn).map((hl, i) => (
                        <li key={i}>• {hl}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="w-full bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Explore {selectedDest.nameEn}</span>
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
