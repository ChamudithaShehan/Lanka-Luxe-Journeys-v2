'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const whatsappNumber = "+94770008899";
  const defaultText = language === 'kr' 
    ? "안녕하세요, 스리랑카 럭셔리 골프 투어 및 프라이빗 맞춤 여행 견적 문의드립니다."
    : "Hello, I would like to inquire about a luxury travel itinerary and golf package in Sri Lanka.";

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(defaultText)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 bg-[#081B33]/90 hover:bg-[#081B33] border border-[#C9A227]/50 text-white px-4 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:border-[#C9A227] group"
      aria-label="WhatsApp VIP Concierge"
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
          <MessageCircle className="w-6 h-6 fill-current" />
        </div>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C9A227] rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C9A227] rounded-full" />
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider text-[#C9A227] font-semibold">VIP Concierge</span>
        <span className="text-xs font-medium tracking-wide">
          {language === 'kr' ? "WhatsApp 1:1 상담" : "Chat on WhatsApp"}
        </span>
      </div>
    </a>
  );
};
