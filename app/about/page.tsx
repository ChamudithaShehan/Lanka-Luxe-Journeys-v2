'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Compass, ShieldCheck, Star, Users, CheckCircle2, Trophy, Clock, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TEAM_MEMBERS } from '@/data/travelData';

export default function AboutPage() {
  const { language } = useLanguage();

  const timeline = [
    { year: "2011", titleEn: "Establishment of Lanka Luxe Journeys", titleKr: "Lanka Luxe Journeys 설립", descEn: "Founded as a private aviation & VIP concierge service in Colombo.", descKr: "콜롬보에서 프라이빗 항공 및 VIP 의전 전담 여행사로 출발." },
    { year: "2016", titleEn: "Expansion to Golf Tourism & Relais Estates", titleKr: "골프 투어 & 릴레앤샤토 파트너십 구축", descEn: "Partnered with Royal Colombo, Victoria Kandy, and Ceylon Tea Trails.", descKr: "로열 콜롬보, 캔디 빅토리아 및 최고급 차 방갈로 단독 제휴 체결." },
    { year: "2021", titleEn: "Dedicated Korean Concierge Division", titleKr: "한국 전담 의전 콘시어지팀 발족", descEn: "Launched specialized Korean language VIP operations & golfer services.", descKr: "한국인 VIP 여행객 및 골퍼 전용 1:1 한국어 의전 서비스 개설." },
    { year: "2026", titleEn: "Asia's Leading Luxury DMC Award", titleKr: "아시아 최고 럭셔리 DMC 수상", descEn: "Recognized as Sri Lanka's premier destination management company for global high net worth individuals.", descKr: "스리랑카 최고 가치의 글로벌 VIP 전문 Destination Management Company로 선정." },
  ];

  return (
    <div className="bg-[#081B33] text-white">
      {/* Hero Banner */}
      <section className="relative py-28 bg-[#040E1B] overflow-hidden border-b border-[#C9A227]/30">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80"
            alt="About Lanka Luxe"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081B33] via-[#081B33]/80 to-[#081B33]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold">
            <Compass className="w-3.5 h-3.5" />
            {language === 'kr' ? "스리랑카 1등 VIP 전담 여행사" : "About Lanka Luxe Journeys"}
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
            {language === 'kr' ? "스리랑카 럭셔리 여행의 새로운 기준" : "Redefining Luxury Travel in Sri Lanka"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === 'kr'
              ? "글로벌 VIP 및 한국인 골퍼분들께 타협 없는 품격, 완벽한 보안, 세심한 1:1 맞춤 의전 서비스를 제공합니다."
              : "We curate uncompromised private travel, world-class golf holidays, and helicopter transfers with white-glove precision."}
          </p>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[#C9A227] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              OUR HERITAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              {language === 'kr' ? "품격 있는 여정을 만드는 장인 정신" : "Crafted For The Most Discerning Global Travelers"}
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {language === 'kr'
                ? "Lanka Luxe Journeys는 15년 넘게 남아시아 왕실 의전 및 글로벌 가문의 스리랑카 전용 여정을 전담해 온 최고급 DMC입니다. 모든 고객님께 메르세데스 럭셔리 의전 차량, 헬리콥터 이동, PGA 규격 골프장 전용 티타임 보장 및 1:1 전담 가이드를 매칭해 드립니다."
                : "For over 15 years, Lanka Luxe Journeys has orchestrated private aviation, royal visits, and exclusive golf holidays across the tear-drop island of Sri Lanka. We believe luxury lies in seamless privacy and personalized care."}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-[#C9A227] font-bold font-serif text-xl">Mission</div>
                <p className="text-xs text-gray-400">Deliver flawless private travel experiences with 100% security & discretion.</p>
              </div>
              <div className="space-y-1">
                <div className="text-[#C9A227] font-bold font-serif text-xl">Vision</div>
                <p className="text-xs text-gray-400">To be South Asia's undisputed benchmark for luxury tourism & golf hospitality.</p>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-2xl overflow-hidden border border-[#C9A227]/30 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80"
              alt="Golf & Luxury Estate"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D2647]/90 border border-[#C9A227]/40 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#C9A227] text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                White-Glove VIP Accreditation
              </div>
              <p className="text-xs text-gray-300 mt-1">Official DMC partner for Aman, Ceylon Tea Trails, and Victoria Golf Club.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Timeline */}
      <section className="py-20 bg-[#040E1B] border-t border-[#C9A227]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-white">
              {language === 'kr' ? "Lanka Luxe 역사 및 마일스톤" : "Our Journey & Legacy"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="bg-[#081B33] border border-[#C9A227]/30 rounded-2xl p-6 relative space-y-3">
                <span className="text-3xl font-serif font-bold text-[#C9A227] block">{item.year}</span>
                <h4 className="text-base font-bold font-serif text-white">
                  {language === 'kr' ? item.titleKr : item.titleEn}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {language === 'kr' ? item.descKr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            VIP CONCIERGE TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            {language === 'kr' ? "전담 럭셔리 콘시어지 팀" : "Meet Our Executive Directors"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-[#0D2647] border border-[#C9A227]/30 rounded-2xl overflow-hidden shadow-xl hover:border-[#C9A227] transition-all group">
              <div className="relative h-72">
                <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2647] via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-serif font-bold text-white">{member.name}</h3>
                <span className="text-xs text-[#C9A227] font-semibold uppercase tracking-wider block">
                  {language === 'kr' ? member.roleKr : member.roleEn}
                </span>
                <p className="text-xs text-gray-300 leading-relaxed pt-2">
                  {language === 'kr' ? member.bioKr : member.bioEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
