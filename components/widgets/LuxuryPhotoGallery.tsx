'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, ZoomIn, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const LuxuryPhotoGallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

  const galleryItems = [
    { src: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80", category: "Luxury", titleEn: "Sigiriya Citadel Aerial", titleKr: "시기리야 고대 요새 항공 조망" },
    { src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80", category: "Golf", titleEn: "Victoria Golf Reservoir Hole", titleKr: "빅토리아 골프 호수 오션 홀" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", category: "Hotels", titleEn: "Ceylon Tea Trails Bungalow", titleKr: "실론 티 트레일즈 차 방갈로" },
    { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80", category: "Wildlife", titleEn: "Wild Coast Yala Leopard", titleKr: "야라 국립공원의 야생 표범" },
    { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80", category: "Nature", titleEn: "Helicopter Over Green Canopy", titleKr: "푸른 차밭 상공 헬기 시닉 투어" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", category: "Culture", titleEn: "Galle Dutch Fort Ramparts", titleKr: "갈레 성벽 도시 석양" },
  ];

  const categories = ['All', 'Luxury', 'Golf', 'Hotels', 'Wildlife', 'Nature', 'Culture'];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section className="py-24 bg-[#040E1B] text-white border-t border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            {t.photoGallery.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {t.photoGallery.title}
          </h2>
          <p className="text-gray-300 text-sm mt-3">
            {t.photoGallery.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAllMobile(false);
              }}
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

        {/* Masonry Photo Grid - Max 3 on mobile unless expanded */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isHiddenMobile = !showAllMobile && idx >= 3;
            return (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-72 rounded-2xl overflow-hidden border border-[#C9A227]/30 hover:border-[#C9A227] shadow-xl cursor-pointer group transition-all ${
                  isHiddenMobile ? 'hidden sm:block' : 'block'
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.titleEn}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#081B33]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                  <span className="self-start bg-[#C9A227] text-[#081B33] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between text-white">
                    <span className="font-serif font-bold text-base">
                      {language === 'kr' ? item.titleKr : item.titleEn}
                    </span>
                    <ZoomIn className="w-5 h-5 text-[#C9A227]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View More Button */}
        {filteredItems.length > 3 && (
          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#081B33] border border-[#C9A227] text-[#C9A227] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#C9A227] hover:text-[#081B33] transition-all"
            >
              <span>{showAllMobile ? (language === 'kr' ? '접기 (Show Less)' : 'Show Less') : (language === 'kr' ? '더보기 (View More)' : 'View More')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllMobile ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div onClick={() => setActiveImageIndex(null)} className="fixed inset-0 bg-[#040E1B]/95 backdrop-blur-md" />
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute -top-12 right-0 text-gray-300 hover:text-white bg-white/10 p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden border border-[#C9A227]">
              <Image
                src={filteredItems[activeImageIndex].src}
                alt="Lightbox Fullscreen"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
            <div className="text-center pt-4">
              <span className="text-xs text-[#C9A227] uppercase tracking-widest font-semibold block">
                {filteredItems[activeImageIndex].category}
              </span>
              <h4 className="text-xl font-serif font-bold text-white mt-1">
                {language === 'kr'
                  ? filteredItems[activeImageIndex].titleKr
                  : filteredItems[activeImageIndex].titleEn}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
