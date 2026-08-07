'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FaqAccordion: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('Golf & Booking');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['Golf & Booking', 'Hotels & Transport', 'Visa & Korean Assistance'];

  const faqData: Record<string, { qEn: string; qKr: string; aEn: string; aKr: string }[]> = {
    'Golf & Booking': [
      {
        qEn: "How far in advance should we reserve PGA golf tee times?",
        qKr: "명문 골프장 티타임 예약은 최소 얼마 전에 신청해야 하나요?",
        aEn: "We recommend booking 4 to 8 weeks in advance to secure morning prime tee times at Victoria Golf Kandy and Royal Colombo.",
        aKr: "캔디 빅토리아 및 로열 콜롬보의 황금 오전 티타임 확보를 위해 4~8주 전 예약을 권장해 드립니다."
      },
      {
        qEn: "Are golf caddie fees and buggies included in the tour packages?",
        qKr: "패키지 요금에 캐디피 및 카트 비용이 포함되어 있나요?",
        aEn: "Yes. All our golf packages include green fees, private caddies, and individual golf carts.",
        aKr: "네, 당사의 모든 골프 패키지에는 그린피, 1:1 전담 캐디피 및 개인 전동 카트 이용료가 100% 포함되어 있습니다."
      }
    ],
    'Hotels & Transport': [
      {
        qEn: "What type of luxury transport is provided for inland travel?",
        qKr: "내륙 이동 시 제공되는 럭셔리 의전 차량 및 항공 편은 어떤 종류인가요?",
        aEn: "We provide Mercedes-Benz V-Class vans, Toyota Land Cruiser 4x4s, and Airbus H130 private helicopter charters.",
        aKr: "메르세데스-벤츠 V-클래스 리무진 밴, 랜드크루저 4x4 및 에어버스 H130 프라이빗 헬기 직항 편을 제공합니다."
      },
      {
        qEn: "Can we request Relais & Châteaux Tea Bungalow reservations?",
        qKr: "실론 티 트레일즈 릴레앤샤토 차 방갈로 단독 투숙이 가능한가요?",
        aEn: "Yes. Lanka Luxe Journeys is an official luxury partner with Relais & Châteaux Ceylon Tea Trails.",
        aKr: "네, Lanka Luxe Journeys는 릴레앤샤토 실론 티 트레일즈의 공식 럭셔리 파트너사입니다."
      }
    ],
    'Visa & Korean Assistance': [
      {
        qEn: "Do Korean citizens require an ETA visa for Sri Lanka?",
        qKr: "한국 국적 여행객의 스리랑카 비자(ETA) 수속 절차는 어떻게 되나요?",
        aEn: "Yes. An online ETA visa is required. Our Korean travel desk provides complimentary visa issuance assistance.",
        aKr: "네, 전자비자(ETA)가 필요하며 당사 한국어 콘시어지 데스크에서 무료로 비자 신청 대행을 도와드립니다."
      },
      {
        qEn: "Is a fluent Korean-speaking coordinator available during the entire trip?",
        qKr: "전 일정을 함께하는 전담 한국어 가이드가 제공되나요?",
        aEn: "Yes. A resident Korean operations coordinator handles KakaoTalk communication and on-site support.",
        aKr: "네, 박민준 총괄 이사를 필두로 한 한국어 전담 콘시어지팀이 카카오톡 및 현장 의전을 수행합니다."
      }
    ]
  };

  const currentFaqs = faqData[activeCategory] || faqData['Golf & Booking'];

  return (
    <section className="py-24 bg-[#0B1F3A] text-white border-t border-[#C8A45D]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            {language === 'kr' ? "자주 묻는 질문 (FAQ)" : "Frequently Asked Questions"}
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#C8A45D] text-[#0B1F3A] font-bold shadow-md'
                  : 'bg-[#122848] text-gray-300 border border-white/10 hover:border-[#C8A45D]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#122848] border border-[#C8A45D]/30 rounded-xl overflow-hidden shadow-lg transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-sm sm:text-base text-white hover:text-[#C8A45D]"
                >
                  <span>{language === 'kr' ? faq.qKr : faq.qEn}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C8A45D] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                    {language === 'kr' ? faq.aKr : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
