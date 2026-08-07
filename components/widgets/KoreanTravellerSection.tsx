'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UserCheck, Trophy, Utensils, FileText, PhoneCall, CheckCircle2, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BookingModal } from '@/components/ui/BookingModal';

export const KoreanTravellerSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const perks = [
    { titleEn: t.koreanSection.reason1Title, titleKr: t.koreanSection.reason1Title, descEn: t.koreanSection.reason1Desc, descKr: t.koreanSection.reason1Desc, icon: UserCheck },
    { titleEn: t.koreanSection.reason2Title, titleKr: t.koreanSection.reason2Title, descEn: t.koreanSection.reason2Desc, descKr: t.koreanSection.reason2Desc, icon: Trophy },
    { titleEn: t.koreanSection.reason3Title, titleKr: t.koreanSection.reason3Title, descEn: t.koreanSection.reason3Desc, descKr: t.koreanSection.reason3Desc, icon: Utensils },
    { titleEn: t.koreanSection.reason4Title, titleKr: t.koreanSection.reason4Title, descEn: t.koreanSection.reason4Desc, descKr: t.koreanSection.reason4Desc, icon: FileText },
  ];

  return (
    <section className="py-24 bg-[#060F1D] text-white border-t border-[#C8A45D]/30 relative overflow-hidden">
      {/* Background South Asia Pattern Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A45D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/20 border border-[#C8A45D]/50 text-[#F0D898] text-xs uppercase tracking-widest font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#C8A45D]" />
            {t.koreanSection.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {t.koreanSection.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {t.koreanSection.subtitle}
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B1F3A] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl p-6 shadow-xl space-y-4 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#122848] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                  {language === 'kr' ? perk.titleKr : perk.titleEn}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {language === 'kr' ? perk.descKr : perk.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Korean VIP Concierge Banner */}
        <div className="bg-[#122848] border border-[#C8A45D]/40 rounded-2xl p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              DIRECT KOREAN VIP CONCIERGE DESK
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              박민준 이사 (Head of Korean Operations)
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {language === 'kr'
                ? "한국 기업인 및 VIP 골퍼분들을 위한 카카오톡 실시간 상담, 골프백 전담 차량 수송 및 공항 활주로 패스트트랙 수속을 전담합니다."
                : "Dedicated fluent Korean operations manager providing 1:1 KakaoTalk consultation, golf bag logistics, and VIP runway clearance."}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>{language === 'kr' ? "한국어 맞춤 상담 신청" : "Inquire with Korean Concierge"}</span>
            </button>
            <a
              href="https://wa.me/94770008899"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0B1F3A] border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>카카오톡 / WhatsApp 상담</span>
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
