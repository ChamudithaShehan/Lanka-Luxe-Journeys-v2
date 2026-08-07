'use client';

import React from 'react';
import { ShieldCheck, HeartHandshake, Compass, Gem, UserCheck, Sparkles, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function WhyChooseUs() {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: UserCheck,
      titleEn: "Personalized Travel Experiences",
      titleKr: "1:1 맞춤형 여행 케어",
      descEn: "No two travelers are the same. We carefully craft each itinerary to suit your preferences, travel pace, and budget, ensuring a truly personal experience from the moment you arrive until your departure.",
      descKr: "모든 여행자는 특별합니다. 입국하는 순간부터 출국할 때까지 고객님의 취향, 여행 속도, 예산에 맞춰 100% 나만을 위한 맞춤형 일정을 정교하게 디자인합니다."
    },
    {
      icon: Compass,
      titleEn: "Local Expertise",
      titleKr: "깊이 있는 현지 전문성",
      descEn: "Our in-depth knowledge of Sri Lanka allows us to introduce you to famous landmarks as well as hidden treasures. From ancient heritage sites and lush tea plantations to pristine beaches and breathtaking wildlife, we help you experience the island like a local.",
      descKr: "스리랑카에 대한 깊이 있는 현지 지식을 바탕으로 유명 명소뿐만 아니라 숨겨진 보석 같은 장소로 안내해 드립니다. 고대 유적지, 푸른 차밭 고원, 청정 해변, 감동적인 야생 사파리까지 스리랑카의 진수를 경험하실 수 있습니다."
    },
    {
      icon: Gem,
      titleEn: "Luxury with Authenticity",
      titleKr: "진정성 있는 럭셔리",
      descEn: "We combine premium comfort with genuine Sri Lankan hospitality. Stay in carefully selected hotels, enjoy exceptional dining, and discover authentic cultural experiences that make your journey truly unique.",
      descKr: "최고급의 편안함과 스리랑카 정통 따뜻한 환대를 결합합니다. 엄선된 5성급 럭셔리 호텔 및 릴레앤샤토 방갈로 투숙, 수석 셰프의 파인 다이닝, 깊이 있는 문화 체험이 귀하의 여정을 더욱 독보적으로 만듭니다."
    },
    {
      icon: ShieldCheck,
      titleEn: "Professional and Reliable Service",
      titleKr: "전문적이고 신뢰할 수 있는 서비스",
      descEn: "From airport transfers to accommodation, guided tours, transportation, and special experiences, we manage every aspect of your trip with professionalism and attention to detail, allowing you to relax and enjoy your holiday.",
      descKr: "공항 전용 의전 픽업부터 숙소, 맞춤 도슨트 가이드, 프리미엄 차량 및 특화 액티비티까지 여행의 모든 요소를 세심하고 완벽하게 총괄 관리하여 안심하고 여행에 전념하실 수 있습니다."
    },
    {
      icon: Sparkles,
      titleEn: "Flexible and Tailor-Made Itineraries",
      titleKr: "유연한 비스포크 맞춤 일정",
      descEn: "Whether you have a few days or several weeks, we create customized travel plans that perfectly fit your schedule and interests. Your journey is designed exclusively for you.",
      descKr: "며칠간의 휴가든 몇 주간의 여정이든 상관없이 고객님의 일정과 관심사에 완벽하게 부합하는 100% 자율 맞춤 일정을 구성해 드립니다."
    },
    {
      icon: HeartHandshake,
      titleEn: "Passion for Excellence",
      titleKr: "탁월함을 향한 열정",
      descEn: "Our commitment is to provide exceptional service, honest advice, and memorable experiences. We value every guest and strive to exceed expectations through personalized care and attention.",
      descKr: "탁월한 서비스, 정직한 조언, 평생 기억에 남을 감동적인 경험을 제공하는 것이 우리의 사명입니다. 1:1 밀착 케어로 기대 그 이상의 만족을 안겨드립니다."
    },
    {
      icon: Award,
      titleEn: "Explore Sri Lanka with Confidence",
      titleKr: "안심하고 경험하는 스리랑카",
      descEn: "With Lanka Luxe Journeys, you can travel knowing that every detail has been thoughtfully planned. Our goal is to turn your dream holiday into an extraordinary experience filled with comfort, discovery, and unforgettable moments.",
      descKr: "Lanka Luxe Journeys와 함께라면 모든 세부 사항이 치밀하게 준비되어 있다는 안도감 속에 여행할 수 있습니다. 꿈꾸던 휴양을 편안함과 발견, 감동으로 채워진 최고의 경험으로 변모시켜 드립니다."
    }
  ];

  return (
    <section className="py-20 bg-[#0B1F3A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Intro Banner */}
        <div className="bg-[#122848] border border-[#C8A45D]/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C8A45D]/10 rounded-full blur-3xl" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold">
            <ShieldCheck className="w-4 h-4" />
            THE LANKA LUXE COMMITMENT
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "왜 Lanka Luxe Journeys인가?" : "Why Choose Lanka Luxe Journeys?"}
          </h2>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
            {language === 'kr'
              ? "Lanka Luxe Journeys는 단순한 여행을 넘어 잊지 못할 추억을 선사하고, 진정한 문화를 발견하며, 스리랑카를 최고급 편안함과 스타일, 확신 속에서 경험하도록 돕습니다. 럭셔리 휴양, 로맨틱 허니문, 가족 어드벤처, PGA 골프 및 100% 맞춤 문화 여정까지 고객님의 기대에 맞춰 모든 세부사항을 전담 디자인합니다."
              : "At Lanka Luxe Journeys, we believe that travel is more than visiting places—it's about creating unforgettable memories, discovering authentic cultures, and experiencing Sri Lanka with comfort, style, and confidence. Whether you're seeking a luxurious holiday, a romantic honeymoon, a family adventure, a golf getaway, or a tailor-made cultural journey, our experienced team is dedicated to designing every detail to match your interests and expectations."}
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#122848] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl p-7 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-[#0B1F3A] transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                    {language === 'kr' ? pillar.titleKr : pillar.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {language === 'kr' ? pillar.descKr : pillar.descEn}
                  </p>
                </div>
                <div className="pt-2 text-[10px] text-[#C8A45D] font-mono tracking-widest uppercase flex items-center gap-1 font-semibold">
                  <span>PILLAR {idx + 1}</span>
                  <div className="h-px flex-1 bg-[#C8A45D]/20" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Luxury Tagline Banner */}
        <div className="bg-gradient-to-r from-[#060F1D] via-[#122848] to-[#060F1D] border border-[#C8A45D]/50 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
          <p className="text-base sm:text-xl font-serif italic text-[#C8A45D] max-w-3xl mx-auto leading-relaxed">
            {language === 'kr'
              ? "“Lanka Luxe Journeys를 선택하세요—럭셔리가 정통 스리랑카 경험을 만나고, 모든 여정이 나누고 싶은 이야기가 됩니다.”"
              : "“Choose Lanka Luxe Journeys—where luxury meets authentic Sri Lankan experiences, and every journey becomes a story worth sharing.”"}
          </p>
        </div>
      </div>
    </section>
  );
}
