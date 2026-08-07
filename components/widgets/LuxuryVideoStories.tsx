'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Sparkles, Film, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { VIDEO_STORIES } from '@/data/travelData';

export const LuxuryVideoStories: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-[#0B1F3A] text-white border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
            <Film className="w-3.5 h-3.5" />
            {t.videoStories.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {t.videoStories.title}
          </h2>
          <p className="text-gray-300 text-sm mt-3">
            {t.videoStories.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-[#122848] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#C8A45D]/90 text-[#0B1F3A] flex items-center justify-center shadow-[0_0_25px_#C8A45D] group-hover:scale-125 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 text-[#C8A45D] border border-[#C8A45D]/40 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {language === 'kr' ? story.categoryKr : story.categoryEn}
                </div>

                <div className="absolute bottom-4 right-4 bg-[#0B1F3A]/90 text-gray-200 text-[10px] font-mono px-2.5 py-0.5 rounded border border-white/10 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C8A45D]" />
                  {story.duration}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                  {language === 'kr' ? story.titleKr : story.titleEn}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {language === 'kr' ? story.descKr : story.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
