'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SectionCtaButtonsProps {
  onOpenBooking: (pkgName?: string) => void;
  categoryName?: string;
}

export function SectionCtaButtons({ onOpenBooking, categoryName }: SectionCtaButtonsProps) {
  const { language } = useLanguage();

  return (
    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
      <button
        onClick={() => onOpenBooking(categoryName ? `${categoryName} - Plan My Journey` : "Plan My Journey")}
        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center"
      >
        {language === 'kr' ? "여행 계획하기 (Plan My Journey)" : "Plan My Journey"}
      </button>

      <button
        onClick={() => onOpenBooking(categoryName ? `${categoryName} - Custom Itinerary` : "Request a Custom Itinerary")}
        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#122848] hover:bg-[#1f375f] text-white border border-[#C8A45D]/50 font-bold text-xs uppercase tracking-wider transition-all text-center"
      >
        {language === 'kr' ? "맞춤 일정 요청 (Request Custom Itinerary)" : "Request a Custom Itinerary"}
      </button>

      <a
        href="https://wa.me/94770008899"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0B1F3A] hover:bg-white/10 text-emerald-400 border border-emerald-500/40 font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
      >
        <PhoneCall className="w-3.5 h-3.5" />
        <span>{language === 'kr' ? "디자이너 직통 상담" : "Contact Our Travel Designer"}</span>
      </a>
    </div>
  );
}
