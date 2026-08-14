'use client';

import React, { useState } from 'react';
import { UserCheck, Trophy, Utensils, FileText, PhoneCall, ShieldCheck, Sparkles, Globe, CalendarDays } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BookingModal } from '@/components/ui/BookingModal';

export const KoreanTravellerSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const perks = [
    { titleEn: t.koreanSection.reason1Title, descEn: t.koreanSection.reason1Desc, icon: UserCheck },
    { titleEn: t.koreanSection.reason2Title, descEn: t.koreanSection.reason2Desc, icon: Trophy },
    { titleEn: t.koreanSection.reason3Title, descEn: t.koreanSection.reason3Desc, icon: Utensils },
    { titleEn: t.koreanSection.reason4Title, descEn: t.koreanSection.reason4Desc, icon: FileText },
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#060F1D] text-white border-t border-[#C8A45D]/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A45D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/20 border border-[#C8A45D]/50 text-[#F0D898] text-xs uppercase tracking-widest font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#C8A45D]" />
            {t.koreanSection.tag}
          </div>
          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {t.koreanSection.title}
          </h2>
          <p className="hidden sm:block text-gray-300 text-sm sm:text-base leading-relaxed">
            {t.koreanSection.subtitle}
          </p>

          {/* Seasonal Badges — hidden on mobile */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/40 text-red-300 text-[11px] font-semibold">
              <CalendarDays className="w-3 h-3" />
              {language === 'kr' ? '🎑 추석 특별 골프 패키지 (9–10월)' : '🎑 Chuseok Season Golf Package (Sep–Oct)'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/40 text-red-300 text-[11px] font-semibold">
              <CalendarDays className="w-3 h-3" />
              {language === 'kr' ? '🌸 설날 커플 허니문 패키지 (1–2월)' : '🌸 Seollal Honeymoon Package (Jan–Feb)'}
            </span>
          </div>
        </div>

        {/* 4 Feature Pillars — 2-col compact on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 mb-6 sm:mb-12">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B1F3A] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl transition-all duration-300 group"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#122848] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-lg font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors leading-snug mb-1">
                  {perk.titleEn}
                </h3>
                <p className="hidden sm:block text-sm text-gray-300 leading-relaxed">
                  {perk.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Korean VIP Concierge Banner */}
        <div className="bg-[#122848] border border-[#C8A45D]/40 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
          <div className="lg:col-span-8 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              DIRECT KOREAN VIP CONCIERGE DESK
            </div>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white">
              박민준 이사 (Head of Korean Operations)
            </h3>
            <p className="hidden sm:block text-sm text-gray-300 leading-relaxed">
              {language === 'kr'
                ? "한국 기업인 및 VIP 골퍼분들을 위한 카카오톡 실시간 상담, 골프백 전담 차량 수송 및 공항 활주로 패스트트랙 수속을 전담합니다."
                : "Dedicated fluent Korean operations manager providing 1:1 KakaoTalk consultation, golf bag logistics, and VIP runway clearance."}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-row sm:flex-col gap-2 sm:gap-3">
            <a
              href="https://open.kakao.com/o/lankaluxe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:w-full bg-[#FEE500] hover:bg-[#FFD900] text-[#191919] font-bold py-2.5 sm:py-3.5 rounded-xl text-[10px] sm:text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#3C1E1E] text-[#FEE500] flex items-center justify-center font-bold text-[8px] sm:text-[9px] shrink-0">톡</span>
              <span>{language === 'kr' ? '카카오톡 상담' : 'KakaoTalk'}</span>
            </a>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-2.5 sm:py-3.5 rounded-xl text-[10px] sm:text-xs uppercase tracking-wider shadow-lg transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <span>{language === 'kr' ? "맞춤 상담" : "Inquire"}</span>
            </button>

            <a
              href="https://wa.me/94770008899"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-full bg-[#0B1F3A] border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors text-center items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp {language === 'kr' ? '상담' : 'Concierge'}</span>
            </a>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage="Korean VIP Custom Golf & Tour Package"
      />
    </section>
  );
};
