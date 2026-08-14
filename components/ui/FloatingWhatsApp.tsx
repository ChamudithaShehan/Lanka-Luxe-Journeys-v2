'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "+94770008899";
  const defaultText = language === 'kr' 
    ? "안녕하세요, 스리랑카 럭셔리 골프 투어 및 프라이빗 맞춤 여행 견적 문의드립니다."
    : "Hello, I would like to inquire about a luxury travel itinerary and golf package in Sri Lanka.";

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(defaultText)}`;
  const kakaoUrl = "https://pf.kakao.com/_lankaluxe"; // Custom KakaoTalk channel link

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-[90] flex-col items-end gap-3">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2.5 mb-1 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* KakaoTalk Button */}
          <a
            href={kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#FEE500] hover:bg-[#FDD800] text-[#191919] px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-medium text-xs border border-yellow-400"
            aria-label="KakaoTalk Concierge"
          >
            <div className="w-7 h-7 rounded-full bg-[#3C1E1E] flex items-center justify-center text-[#FEE500] font-bold text-xs">
              Talk
            </div>
            <span className="font-semibold">{language === 'kr' ? '카카오톡 1:1 상담' : 'KakaoTalk Channel'}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-medium text-xs"
            aria-label="WhatsApp Concierge"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <span className="font-semibold">{language === 'kr' ? 'WhatsApp 1:1 상담' : 'WhatsApp Concierge'}</span>
          </a>
        </div>
      )}

      {/* Main Trigger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-[#0B1F3A]/95 hover:bg-[#0B1F3A] border border-[#C8A45D]/60 text-white px-4 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 hover:border-[#C8A45D] group backdrop-blur-xl"
        aria-label="Contact Concierge"
      >
        <div className="relative flex items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
            <MessageCircle className="w-4.5 h-4.5 fill-current" />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center font-bold text-[10px] shadow-sm -ml-2 border border-[#0B1F3A]">
            Talk
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C8A45D] rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C8A45D] rounded-full" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] font-semibold">VIP Concierge</span>
          <span className="text-xs font-medium tracking-wide">
            {language === 'kr' ? "카카오톡 & WhatsApp" : "WhatsApp & KakaoTalk"}
          </span>
        </div>
      </button>
    </div>
  );
};
