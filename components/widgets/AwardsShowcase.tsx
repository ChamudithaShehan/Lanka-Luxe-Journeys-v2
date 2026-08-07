'use client';

import React from 'react';
import { Award, ShieldCheck, Star, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AwardsShowcase: React.FC = () => {
  const { t, language } = useLanguage();

  const awards = [
    { titleEn: "Asia's Leading Luxury DMC 2026", titleKr: "2026 아시아 최고 럭셔리 DMC", org: "World Travel Awards" },
    { titleEn: "Best Luxury Golf Tour Operator", titleKr: "최고 럭셔리 골프 투어 오퍼레이터", org: "World Golf Awards" },
    { titleEn: "Sri Lanka Tourism License #DMC/2026/99", titleKr: "스리랑카 관광청 공식 라이선스 DMC", org: "SLTDA Ministry of Tourism" },
    { titleEn: "TripAdvisor Travellers' Choice 2026", titleKr: "트립어드바이저 트래블러스 초이스 2026", org: "TripAdvisor Excellence" },
  ];

  return (
    <section className="py-20 bg-[#060F1D] text-white border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-2">
            <Trophy className="w-3.5 h-3.5" />
            {t.awards.tag}
          </div>
          <h2 className="text-3xl font-serif font-bold">
            {t.awards.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((awd, idx) => (
            <div
              key={idx}
              className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl p-6 text-center space-y-3 shadow-xl hover:border-[#C8A45D] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#122848] border border-[#C8A45D] flex items-center justify-center text-[#C8A45D] mx-auto group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                {language === 'kr' ? awd.titleKr : awd.titleEn}
              </h4>
              <span className="text-xs text-[#C8A45D] font-semibold uppercase tracking-wider block">
                {awd.org}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
