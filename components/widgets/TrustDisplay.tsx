'use client';

import React from 'react';
import { Star, ShieldCheck, Lock, CreditCard, Award, CheckCircle2, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function TrustDisplay({ onOpenBooking }: { onOpenBooking: (pkgName?: string) => void }) {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-[#060F1D] border-t border-b border-[#C8A45D]/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* TOP TRUST BADGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GOOGLE REVIEWS */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl p-6 shadow-xl flex items-center gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <span className="text-2xl font-bold text-white">G</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-1">5.0</span>
              </div>
              <p className="text-xs font-bold text-white">Google Reviews</p>
              <p className="text-[11px] text-gray-400">240+ Verified 5-Star Reviews</p>
            </div>
          </div>

          {/* TRIPADVISOR */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl p-6 shadow-xl flex items-center gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#00AA6C]/20 flex items-center justify-center shrink-0 border border-[#00AA6C]/40">
              <Award className="w-6 h-6 text-[#00AA6C]" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-1">5.0</span>
              </div>
              <p className="text-xs font-bold text-white">TripAdvisor Choice</p>
              <p className="text-[11px] text-gray-400">Travelers' Choice Winner 2026</p>
            </div>
          </div>

          {/* SLTDA GOVT LICENCE */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl p-6 shadow-xl flex items-center gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#C8A45D]/10 flex items-center justify-center shrink-0 border border-[#C8A45D]/40 text-[#C8A45D]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[#C8A45D]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold text-[#C8A45D]">Government Certified</span>
              </div>
              <p className="text-xs font-bold text-white">SLTDA Govt Licence</p>
              <p className="text-[10px] text-gray-400 font-mono">Licence No: TA/2026/Luxe-084</p>
            </div>
          </div>

          {/* SECURE PAYMENT & PRIVACY */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl p-6 shadow-xl flex items-center gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-400/40 text-blue-400">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <CreditCard className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span className="font-bold text-white">256-Bit SSL Encrypted</span>
              </div>
              <p className="text-xs font-bold text-white">100% Safe Payments</p>
              <p className="text-[10px] text-gray-400">Visa • MasterCard • AMEX • Apple Pay</p>
            </div>
          </div>
        </div>

        {/* BOTTOM GLOBAL CALL-TO-ACTION BAR */}
        <div className="bg-[#122848] border border-[#C8A45D]/40 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider">
              <PhoneCall className="w-3.5 h-3.5" />
              {language === 'kr' ? "24시간 1:1 VIP 트래블 디자이너" : "24/7 VIP Travel Designer Care"}
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {language === 'kr' ? "스리랑카 나만의 럭셔리 여정을 시작하세요" : "Ready to Experience Bespoke Sri Lankan Luxury?"}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              {language === 'kr'
                ? "전담 콘시어지가 100% 맞춤 일정 및 프라이빗 견적을 2시간 내로 전달해 드립니다."
                : "Speak with our executive travel designer to receive a tailored luxury proposal within 2 hours."}
            </p>
          </div>

          {/* 3 ACTION BUTTONS REQUIRED BY USER */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenBooking("Plan My Journey")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
            >
              {language === 'kr' ? "여행 계획하기 (Plan My Journey)" : "Plan My Journey"}
            </button>
            <button
              onClick={() => onOpenBooking("Request a Custom Itinerary")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0B1F3A] hover:bg-white/10 text-white border border-[#C8A45D]/60 hover:border-[#C8A45D] font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              {language === 'kr' ? "맞춤 일정 요청 (Custom Itinerary)" : "Request a Custom Itinerary"}
            </button>
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{language === 'kr' ? "디자이너 직통 상담" : "Contact Our Travel Designer"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
