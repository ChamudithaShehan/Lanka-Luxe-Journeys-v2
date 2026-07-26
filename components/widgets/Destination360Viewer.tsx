'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, RotateCw, Eye, Sparkles, X, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Destination360Viewer: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen360, setIsOpen360] = useState(false);
  const [activeTour, setActiveTour] = useState<'sigiriya' | 'tea-trails' | 'galle'>('sigiriya');

  const tourData = {
    'sigiriya': {
      titleEn: "Sigiriya Ancient Citadel 360° Panorama",
      titleKr: "시기리야 고대 암사원 360° 파노라마",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80",
    },
    'tea-trails': {
      titleEn: "Ceylon Tea Trails Bungalow Lake View 360°",
      titleKr: "실론 티 트레일즈 호수 뷰 360° 버추얼 투어",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    },
    'galle': {
      titleEn: "Galle Dutch Fort Ocean Ramparts 360°",
      titleKr: "갈레 네덜란드 요새 360° 인도양 석양",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    }
  };

  return (
    <section className="relative py-28 overflow-hidden text-white border-t border-[#C9A227]/30">
      {/* Background Panorama Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={tourData[activeTour].image}
          alt="360 Panorama"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-75 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040E1B] via-[#081B33]/80 to-[#040E1B]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/50 text-[#FFE79A] text-xs uppercase tracking-widest font-semibold backdrop-blur-md">
          <RotateCw className="w-4 h-4 text-[#C9A227]" />
          {t.destinations360.tag}
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          {t.destinations360.title}
        </h2>

        <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-light">
          {t.destinations360.subtitle}
        </p>

        {/* Tour Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {[
            { id: 'sigiriya', nameEn: 'Sigiriya Rock Fortress', nameKr: '시기리야 고대 요새' },
            { id: 'tea-trails', nameEn: 'Ceylon Tea Trails', nameKr: '실론 티 방갈로' },
            { id: 'galle', nameEn: 'Galle Fort Ocean View', nameKr: '갈레 포트 해안선' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTour(item.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                activeTour === item.id
                  ? 'bg-[#C9A227] text-[#081B33] font-bold shadow-lg'
                  : 'bg-[#081B33]/80 text-gray-200 border border-white/20 hover:border-[#C9A227]'
              }`}
            >
              {language === 'kr' ? item.nameKr : item.nameEn}
            </button>
          ))}
        </div>

        <div className="pt-4">
          <button
            onClick={() => setIsOpen360(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A227] to-[#E5C358] hover:from-[#E5C358] hover:to-[#C9A227] text-[#081B33] font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all uppercase tracking-wider text-xs sm:text-sm"
          >
            <Eye className="w-5 h-5" />
            <span>{t.destinations360.launchTour}</span>
          </button>
        </div>
      </div>

      {/* 360 Viewer Modal */}
      {isOpen360 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div onClick={() => setIsOpen360(false)} className="fixed inset-0 bg-[#040E1B]/90 backdrop-blur-lg" />
          <div className="relative w-full max-w-5xl bg-[#081B33] border border-[#C9A227]/50 rounded-2xl p-4 shadow-2xl text-white z-10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 px-2">
              <div className="flex items-center gap-2 text-[#C9A227] font-serif font-bold text-lg">
                <RotateCw className="w-5 h-5 animate-spin" />
                <span>{tourData[activeTour].titleEn}</span>
              </div>
              <button onClick={() => setIsOpen360(false)} className="text-gray-400 hover:text-white bg-white/5 p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Interactive 360 Viewer Viewport */}
            <div className="relative h-[480px] rounded-xl overflow-hidden border border-[#C9A227]/30 group cursor-grab active:cursor-grabbing">
              <Image
                src={tourData[activeTour].image}
                alt="360 View"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A227]/80 backdrop-blur-md flex items-center justify-center text-[#081B33] shadow-2xl animate-pulse">
                  <RotateCw className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-widest mt-3 bg-[#081B33]/80 px-4 py-1.5 rounded-full border border-[#C9A227]">
                  Drag to rotate 360° panorama
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
