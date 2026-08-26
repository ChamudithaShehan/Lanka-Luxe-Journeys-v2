'use client';

import React from 'react';
import Link from 'next/link';
import { UserCheck, Trophy, Hotel, Plane, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const PrivateConciergeStandard: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: UserCheck,
      number: '01',
      titleEn: '1:1 VIP Concierge',
      titleKr: '1:1 VIP 전담 콘시어지',
      descEn: 'White-glove greeting, express customs, bespoke dining & 24/7 Kakao/WhatsApp support.',
      descKr: '공항 패스트트랙 VIP 의전, 한식 및 맞춤 다이닝, 24시간 실시간 카카오톡 전담 케어.',
    },
    {
      icon: Plane,
      number: '02',
      titleEn: 'Helicopter & Mercedes',
      titleKr: '프라이빗 헬기 & 벤츠',
      descEn: 'Airbus helicopter charters directly to tea estates and luxury Mercedes V-Class chauffeur.',
      descKr: '차밭과 골프장 간 헬기 이동 및 국가공인 최고급 벤츠 의전 리무진 가이드.',
    },
    {
      icon: Hotel,
      number: '03',
      titleEn: 'Relais & Châteaux',
      titleKr: 'Relais & Châteaux',
      descEn: 'Colonial tea planter bungalows, private plunge pool ocean villas & luxury lodges.',
      descKr: '실론티 트레일즈 럭셔리 방갈로, 아만 리조트 및 인도양 풀 빌라 독점 배정.',
    },
    {
      icon: Trophy,
      number: '04',
      titleEn: 'Guaranteed PGA Access',
      titleKr: 'PGA 명문 코스 보장',
      descEn: 'Guaranteed morning tee times, single-digit PGA caddies & Clubhouse VIP lounges.',
      descKr: '로열 콜롬보, 빅토리아 캔디 등 4대 명문 코스 골든 타임 티타임 & 전담 캐디.',
    },
  ];

  return (
    <section className="py-8 sm:py-24 bg-[#060F1D] text-white border-t border-[#C8A45D]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-2 sm:mb-3">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{language === 'kr' ? '서비스 기준' : 'The Luxury Standard'}</span>
          </div>
          <h2 className="text-xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? '랑카 럭스 4대 VIP 서비스 원칙' : 'The Private Concierge Standard'}
          </h2>
          <p className="hidden sm:block text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
            {language === 'kr'
              ? '단순한 여행 패키지가 아닌, 스리랑카 최고위급 VIP를 위한 완벽한 프라이빗 여정을 설계합니다.'
              : 'Uncompromising discretion, authentic colonial luxury, and flawless end-to-end logistics.'}
          </p>
        </div>

        {/* 4 Pillars Grid — Compact 2x2 on Mobile, 4-col on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B1F3A]/90 border border-[#C8A45D]/25 hover:border-[#C8A45D] rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md sm:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#122848] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] group-hover:scale-105 transition-transform">
                      <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-serif font-bold text-[10px] sm:text-xs text-[#C8A45D]/70 tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-base font-serif font-bold text-white mb-1 sm:mb-2 group-hover:text-[#C8A45D] transition-colors leading-snug truncate sm:whitespace-normal">
                    {language === 'kr' ? item.titleKr : item.titleEn}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-gray-300 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {language === 'kr' ? item.descKr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-5 sm:mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#C8A45D] hover:text-[#D4B87A] transition-colors"
          >
            <span>{language === 'kr' ? '브랜드 스토리 & 인증 보기' : 'Read Our Brand Story'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
