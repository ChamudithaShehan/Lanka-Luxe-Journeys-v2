'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Flag, Clock, Hotel, Car, ShieldCheck, CheckCircle2, ChevronDown, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GOLF_COURSES } from '@/data/travelData';
import { GolfComparison } from '@/components/widgets/GolfComparison';
import { BookingModal } from '@/components/ui/BookingModal';

export default function GolfPage() {
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedGolf, setSelectedGolf] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      qEn: "Are priority tee-times guaranteed for international & Korean guests?",
      qKr: "한국인 및 글로벌 VIP 전용 티타임 확정이 보장되나요?",
      aEn: "Yes. Lanka Luxe Journeys holds direct VIP allocations at Royal Colombo, Victoria Golf Kandy, Nuwara Eliya, and Shangri-La Hambantota, guaranteeing prime morning tee-times.",
      aKr: "네, 당사는 로열 콜롬보, 캔디 빅토리아, 누와라엘리야, 샹그릴라 함반토타와 전용 VIP 티타임 얼로케이션을 보유하고 있어 100% 우선 티타임이 확정됩니다."
    },
    {
      qEn: "What is the procedure for bringing custom golf bags and clubs?",
      qKr: "개인 골프 캐디백 및 클럽 수화물 케어 절차는 어떻게 되나요?",
      aEn: "Our private chauffeur handles your bag transport in luxury Mercedes V-Class vans directly from airport arrival to your resort clubhouse. High-end Titleist and TaylorMade rentals are also available.",
      aKr: "공항 입국 순간부터 전용 메르세데스 밴 쇼퍼가 골프백을 전담 보관 및 이동해 드리며, 필요시 최상급 타이틀리스트/테일러메이드 렌탈 클럽도 제공됩니다."
    },
    {
      qEn: "Can non-golfing spouses join for spa and tea estate tours?",
      qKr: "골프를 치지 않는 동행인을 위한 스파 & 관광 프로그램이 있나요?",
      aEn: "Absolutely. Non-golfers enjoy customized luxury spa itineraries, tea estate masterclasses, private shopping, and helicopter scenic tours while golfers play.",
      aKr: "물론입니다. 동행인을 위해 1:1 아유르베다 스파, 차밭 방갈로 티 테이스팅, 프라이빗 헬기 시닉 투어 등 전담 맞춤 일정이 마련됩니다."
    }
  ];

  const handleBookGolf = (name: string) => {
    setSelectedGolf(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#0B1F3A] text-white min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative py-28 bg-[#060F1D] overflow-hidden border-b border-[#C8A45D]/30">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80"
            alt="Golf Holidays Sri Lanka"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A]/80 to-[#0B1F3A]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/20 border border-[#C8A45D]/50 text-[#F0D898] text-xs uppercase tracking-widest font-semibold">
            <Trophy className="w-4 h-4 text-[#C8A45D]" />
            PGA CHAMPIONSHIP PORTAL
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "스리랑카 명문 럭셔리 골프 투어" : "Sri Lanka PGA Golf Holidays"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === 'kr'
              ? "1800년대 영국 왕실 인가 역사적 코스부터 바다가 내려다보이는 샹그릴라 오션뷰, 1,800m 고원 지대 라운딩까지."
              : "Play Asia's most historic royal courses, misty highland fairways, and oceanfront sapphire green holes."}
          </p>
        </div>
      </section>

      {/* Golf Course Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {GOLF_COURSES.map((course, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={course.id}
              id={course.id}
              className={`bg-[#122848] border border-[#C8A45D]/30 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side (LG: 6 Cols) */}
              <div className="lg:col-span-6 relative h-80 lg:h-[450px]">
                <Image
                  src={course.image}
                  alt={course.nameEn}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 border border-[#C8A45D] text-[#C8A45D] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                  Established {course.established} AD
                </div>
              </div>

              {/* Info Side (LG: 6 Cols) */}
              <div className="lg:col-span-6 p-6 sm:p-10 space-y-5">
                <div>
                  <span className="text-xs text-[#C8A45D] font-semibold uppercase tracking-wider block">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    {course.location}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    {language === 'kr' ? course.nameKr : course.nameEn}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {language === 'kr' ? course.overviewKr : course.overviewEn}
                </p>

                <div className="grid grid-cols-2 gap-3 p-4 bg-[#0B1F3A] rounded-xl border border-[#C8A45D]/20 text-xs text-gray-200">
                  <div>
                    <strong className="text-[#C8A45D]">Specs:</strong> {course.holes} Holes (Par {course.par})
                  </div>
                  <div>
                    <strong className="text-[#C8A45D]">Designer:</strong> {course.designer}
                  </div>
                  <div>
                    <strong className="text-[#C8A45D]">Hotel:</strong> {course.hotel}
                  </div>
                  <div>
                    <strong className="text-[#C8A45D]">Transfer:</strong> Mercedes V-Class / Helicopter
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-gray-300">
                  {(language === 'kr' ? course.featuresKr : course.featuresEn).map((ft, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D]" />
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleBookGolf(course.nameEn)}
                  className="w-full sm:w-auto bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3 px-8 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Book {language === 'kr' ? course.nameKr : course.nameEn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Golf Comparison Matrix */}
      <GolfComparison />

      {/* Golf FAQ Section */}
      <section className="py-20 bg-[#060F1D] border-t border-[#C8A45D]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-white">
              {language === 'kr' ? "골프 투어 자주 묻는 질문 (FAQ)" : "Golf Holiday FAQ"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-sm text-white hover:text-[#C8A45D]"
                  >
                    <span>{language === 'kr' ? faq.qKr : faq.qEn}</span>
                    <ChevronDown className={`w-4 h-4 text-[#C8A45D] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-300 leading-relaxed border-t border-white/5">
                      {language === 'kr' ? faq.aKr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={selectedGolf}
      />
    </div>
  );
}
