'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Leaf, Compass, Heart, Plane, Car, Clock, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency } from '@/context/CurrencyContext';
import { TOUR_PACKAGES } from '@/data/travelData';

interface BespokeJourneyPlannerProps {
  onOpenBooking: (packageName?: string) => void;
}

export const BespokeJourneyPlanner: React.FC<BespokeJourneyPlannerProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const { formatPrice } = useCurrency();

  const [selectedStyle, setSelectedStyle] = useState<string>('golf');
  const [selectedDuration, setSelectedDuration] = useState<string>('8-10');
  const [selectedTransfer, setSelectedTransfer] = useState<string>('helicopter');

  const styles = [
    {
      id: 'golf',
      titleEn: 'PGA Golf & Coast',
      titleKr: 'PGA 명문 골프 & 휴양',
      icon: Trophy,
      packageId: 'sri-lanka-golf-tour',
      basePrice: 5900
    },
    {
      id: 'highland',
      titleEn: 'Highland Tea & Wellness',
      titleKr: '고원 차밭 방갈로 & 웰니스',
      icon: Leaf,
      packageId: 'wellness-retreat',
      basePrice: 3900
    },
    {
      id: 'wildlife',
      titleEn: 'Wild Safari & Leopards',
      titleKr: '야생 사파리 & 표범 탐사',
      icon: Compass,
      packageId: 'sri-lanka-wildlife',
      basePrice: 3800
    },
    {
      id: 'honeymoon',
      titleEn: 'Romantic Island Escape',
      titleKr: '로맨틱 럭셔리 허니문',
      icon: Heart,
      packageId: 'honeymoon-paradise',
      basePrice: 4900
    }
  ];

  const durations = [
    { id: '5-7', labelEn: '5 – 7 Days', labelKr: '5박 ~ 7박', multiplier: 0.85 },
    { id: '8-10', labelEn: '8 – 10 Days (Recommended)', labelKr: '8박 ~ 10박 (추천)', multiplier: 1.0 },
    { id: '12+', labelEn: '12+ Days Grand Tour', labelKr: '12박 이상 그랜드 투어', multiplier: 1.35 }
  ];

  const transfers = [
    {
      id: 'helicopter',
      titleEn: 'Airbus Helicopter Charter',
      titleKr: '에어버스 헬기 직항',
      icon: Plane,
      descEn: 'Direct resort helipads, bypass road winds',
      descKr: '산악 도로를 지나지 않고 리조트 직항 착륙',
      extraUSD: 1400
    },
    {
      id: 'chauffeur',
      titleEn: 'Mercedes-Benz VIP Chauffeur',
      titleKr: '메르세데스 벤츠 VIP 의전 쇼퍼',
      icon: Car,
      descEn: 'Luxury V-Class, dedicated private driver',
      descKr: '최고급 밴 전용 쇼퍼 밀착 의전',
      extraUSD: 0
    }
  ];

  const currentStyleObj = styles.find((s) => s.id === selectedStyle) || styles[0];
  const currentDurationObj = durations.find((d) => d.id === selectedDuration) || durations[1];
  const currentTransferObj = transfers.find((t) => t.id === selectedTransfer) || transfers[0];

  const matchedPackage =
    TOUR_PACKAGES.find((p) => p.id === currentStyleObj.packageId) || TOUR_PACKAGES[0];

  const estimatedUSD = Math.round(
    currentStyleObj.basePrice * currentDurationObj.multiplier + currentTransferObj.extraUSD
  );

  const whatsappMessage = `Hello Lanka Luxe Concierge, I designed a bespoke trip on your site:
• Style: ${currentStyleObj.titleEn}
• Duration: ${currentDurationObj.labelEn}
• Transfer: ${currentTransferObj.titleEn}
• Matched Tour: ${matchedPackage.titleEn}
Please send me a custom proposal with current availability.`;

  return (
    <section className="py-16 sm:py-24 bg-[#060F1D] text-white border-t border-[#C8A45D]/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8A45D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'kr' ? "30초 비스포크 트래블 플래너" : "Bespoke Journey Designer"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "나만의 스리랑카 럭셔리 여정 설계" : "Design Your Bespoke Journey"}
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            {language === 'kr'
              ? "취향, 여행 기간, 이동 방식을 선택하시면 즉시 최적화된 프라이빗 일정과 예상 견적을 제안해 드립니다."
              : "Select your preferred travel style, duration, and aviation transfer to generate an instant curated proposal."}
          </p>
        </div>

        {/* 3-Step Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Side (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-[#122848] border border-[#C8A45D]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Step 1: Style */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold block">
                Step 1 • {language === 'kr' ? "여행 스타일 선택" : "Choose Travel Style"}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {styles.map((s) => {
                  const Icon = s.icon;
                  const isSelected = selectedStyle === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStyle(s.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? 'bg-[#0B1F3A] border-[#C8A45D] text-white shadow-lg ring-1 ring-[#C8A45D]'
                          : 'bg-[#0B1F3A]/60 border-white/10 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-[#C8A45D]' : 'text-gray-400'}`} />
                        {isSelected && <Check className="w-4 h-4 text-[#C8A45D]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-serif font-bold">
                        {language === 'kr' ? s.titleKr : s.titleEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold block">
                Step 2 • {language === 'kr' ? "여행 기간" : "Travel Duration"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {durations.map((d) => {
                  const isSelected = selectedDuration === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDuration(d.id)}
                      className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all ${
                        isSelected
                          ? 'bg-[#C8A45D] border-[#C8A45D] text-[#0B1F3A] font-bold shadow-md'
                          : 'bg-[#0B1F3A]/60 border-white/10 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      {language === 'kr' ? d.labelKr : d.labelEn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Transfer Option */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold block">
                Step 3 • {language === 'kr' ? "교통 & 이동 방식" : "Aviation & Transfer"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {transfers.map((t) => {
                  const Icon = t.icon;
                  const isSelected = selectedTransfer === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTransfer(t.id)}
                      className={`p-4 rounded-2xl border text-left transition-all space-y-1.5 ${
                        isSelected
                          ? 'bg-[#0B1F3A] border-[#C8A45D] text-white shadow-lg ring-1 ring-[#C8A45D]'
                          : 'bg-[#0B1F3A]/60 border-white/10 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#C8A45D]' : 'text-gray-400'}`} />
                          <span className="text-xs font-bold font-serif">
                            {language === 'kr' ? t.titleKr : t.titleEn}
                          </span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#C8A45D]" />}
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">
                        {language === 'kr' ? t.descKr : t.descEn}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Instant Proposal Output (5 Cols) */}
          <div className="lg:col-span-5 bg-[#122848] border-2 border-[#C8A45D] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest bg-[#C8A45D] text-[#0B1F3A] font-bold px-3 py-1 rounded-full">
                  {language === 'kr' ? "맞춤 추천 일정" : "Matched Itinerary"}
                </span>
                <span className="text-xs text-gray-300 font-medium">
                  {matchedPackage.duration}
                </span>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden border border-[#C8A45D]/30">
                <Image
                  src={matchedPackage.image}
                  alt={matchedPackage.titleEn}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-serif font-bold">
                  {language === 'kr' ? matchedPackage.titleKr : matchedPackage.titleEn}
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-200">
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-gray-400">{language === 'kr' ? "선택 스타일" : "Style"}</span>
                  <span className="font-semibold">{language === 'kr' ? currentStyleObj.titleKr : currentStyleObj.titleEn}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-gray-400">{language === 'kr' ? "이동 수단" : "Transfer"}</span>
                  <span className="font-semibold">{language === 'kr' ? currentTransferObj.titleKr : currentTransferObj.titleEn}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-gray-400">{language === 'kr' ? "예상 견적 (1인)" : "Est. Investment (pp)"}</span>
                  <span className="text-lg font-serif font-bold text-[#C8A45D]">
                    {formatPrice(estimatedUSD)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onOpenBooking(matchedPackage.titleEn)}
                className="w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
              >
                <span>{language === 'kr' ? "1:1 맞춤 제안서 요청" : "Request Custom Proposal"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/94770008899?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'kr' ? "WhatsApp 실시간 상담" : "Chat on WhatsApp with Choices"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
