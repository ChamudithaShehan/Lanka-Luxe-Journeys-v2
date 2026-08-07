'use client';

import React, { useState } from 'react';
import { Calculator, ShieldCheck, Sparkles, Plane, Trophy, Hotel } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const TravelCostEstimator: React.FC = () => {
  const { language } = useLanguage();
  const [guests, setGuests] = useState<number>(2);
  const [nights, setNights] = useState<number>(7);
  const [useHelicopter, setUseHelicopter] = useState<boolean>(true);
  const [golfRounds, setGolfRounds] = useState<number>(3);

  // Estimator math
  const hotelPerNightPerPerson = 450;
  const transportPerDay = useHelicopter ? 800 : 250;
  const golfFeePerRound = 220;

  const totalEstimate =
    guests * nights * hotelPerNightPerPerson +
    nights * transportPerDay +
    guests * golfRounds * golfFeePerRound;

  return (
    <section className="py-20 bg-[#060F1D] text-white border-t border-[#C8A45D]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Instant Budget Estimator
          </div>
          <h2 className="text-3xl font-serif font-bold">
            {language === 'kr' ? "프라이빗 럭셔리 여행 예산 계산기" : "Luxury Travel Cost Estimator"}
          </h2>
          <p className="text-xs text-gray-400 mt-2">
            {language === 'kr'
              ? "숙소, 프라이빗 의전, 헬리콥터 이동 및 골프 라운딩을 조합하여 예상 금액을 실시간으로 확인하세요."
              : "Customize your guest count, hotel standard, helicopter transfers, and golf rounds to estimate your luxury investment."}
          </p>
        </div>

        <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl p-4 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Controls Side */}
          <div className="space-y-5">
            {/* Guest slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-gray-300">{language === 'kr' ? "인원 수 (Guests)" : "Number of Guests"}</span>
                <span className="text-[#C8A45D]">{guests} VIP Guests</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-[#C8A45D]"
              />
            </div>

            {/* Nights slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-gray-300">{language === 'kr' ? "숙박 박수 (Nights)" : "Trip Duration"}</span>
                <span className="text-[#C8A45D]">{nights} Nights</span>
              </div>
              <input
                type="range"
                min="3"
                max="14"
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full accent-[#C8A45D]"
              />
            </div>

            {/* Golf Rounds */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-gray-300">{language === 'kr' ? "골프 18홀 라운딩 횟수" : "18-Hole Golf Rounds"}</span>
                <span className="text-[#C8A45D]">{golfRounds} Rounds / Person</span>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                value={golfRounds}
                onChange={(e) => setGolfRounds(Number(e.target.value))}
                className="w-full accent-[#C8A45D]"
              />
            </div>

            {/* Helicopter Switch */}
            <div className="flex items-center justify-between p-3 bg-[#122848] rounded-xl border border-[#C8A45D]/30">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#C8A45D]" />
                <span className="text-xs font-semibold text-gray-200">
                  {language === 'kr' ? "프라이빗 헬기 직항 이동 포함" : "Include Helicopter Transfers"}
                </span>
              </div>
              <button
                onClick={() => setUseHelicopter(!useHelicopter)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  useHelicopter ? 'bg-[#C8A45D]' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-[#0B1F3A] transition-transform ${
                    useHelicopter ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Results Side */}
          <div className="bg-[#122848] border border-[#C8A45D]/40 rounded-xl p-6 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-semibold">
              {language === 'kr' ? "총 예상 견적" : "Estimated Total Investment"}
            </span>

            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C8A45D]">
              ${totalEstimate.toLocaleString()} USD
            </div>

            <p className="text-[11px] text-gray-300 leading-relaxed">
              {language === 'kr'
                ? `1인당 약 $${Math.round(totalEstimate / guests).toLocaleString()} USD (5성급 숙박, 전용 차량/헬기, PGA 골프 및 전담 가이드 포함)`
                : `Approx. $${Math.round(totalEstimate / guests).toLocaleString()} USD per guest (Includes 5-Star Lodging, VIP Transfers, Green Fees & Concierge).`}
            </p>

            <a
              href="#contact"
              className="block w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-colors"
            >
              {language === 'kr' ? "맞춤 제안서 및 VIP 상담 신청" : "Request Official VIP Proposal"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
