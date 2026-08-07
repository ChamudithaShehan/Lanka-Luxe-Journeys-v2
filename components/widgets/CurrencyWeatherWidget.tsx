'use client';

import React, { useState } from 'react';
import { Sun, CloudRain, Thermometer, DollarSign, RefreshCw, Landmark } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const CurrencyWeatherWidget: React.FC = () => {
  const { language } = useLanguage();
  const [amountUSD, setAmountUSD] = useState<number>(1000);
  const [selectedCurrency, setSelectedCurrency] = useState<'KRW' | 'EUR' | 'LKR'>('KRW');

  // Rates demo
  const rates = {
    KRW: 1385,
    EUR: 0.92,
    LKR: 305,
  };

  const convertedValue = (amountUSD * rates[selectedCurrency]).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  const weatherData = [
    { cityEn: 'Colombo', cityKr: '콜롬보', temp: '30°C', condEn: 'Sunny & Sea Breeze', condKr: '쾌청 & 해풍', icon: Sun },
    { cityEn: 'Kandy', cityKr: '캔디', temp: '26°C', condEn: 'Pleasant Highland', condKr: '쾌적한 고원 기후', icon: Sun },
    { cityEn: 'Nuwara Eliya', cityKr: '누와라엘리야', temp: '18°C', condEn: 'Crisp & Cool', condKr: '서늘한 청정 기후', icon: Sun },
    { cityEn: 'Galle Coast', cityKr: '갈레 해안', temp: '29°C', condEn: 'Tropical Sunshine', condKr: '맑은 영롱한 일사', icon: Sun },
  ];

  return (
    <section className="py-16 bg-[#0B1F3A] border-y border-[#C8A45D]/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Weather Grid (LG: 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider">
              <Thermometer className="w-4 h-4" />
              {language === 'kr' ? "스리랑카 실시간 여행지 기후" : "Live Sri Lanka Destination Weather"}
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              {language === 'kr' ? "연중 온화하고 서늘한 골프 & 투어 기후" : "Ideal Year-Round Golf & Luxury Climate"}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {weatherData.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#122848] border border-[#C8A45D]/30 rounded-xl p-3 sm:p-4 text-center hover:border-[#C8A45D] transition-all group"
                  >
                    <Icon className="w-6 h-6 text-[#C8A45D] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-bold font-serif text-white">
                      {language === 'kr' ? item.cityKr : item.cityEn}
                    </div>
                    <div className="text-xl font-bold text-[#C8A45D] my-1">{item.temp}</div>
                    <div className="text-[11px] text-gray-300">
                      {language === 'kr' ? item.condKr : item.condEn}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Currency Calculator (LG: 5 Cols) */}
          <div className="lg:col-span-5 bg-[#122848] border border-[#C8A45D]/40 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                {language === 'kr' ? "실시간 통화 환율 계산기" : "Live Luxury Currency Calculator"}
              </div>
              <RefreshCw className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">
                  {language === 'kr' ? "USD 금액 (미국 달러)" : "Amount in USD ($)"}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-[#C8A45D] font-bold">$</span>
                  <input
                    type="number"
                    value={amountUSD}
                    onChange={(e) => setAmountUSD(Number(e.target.value))}
                    className="w-full bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-lg pl-8 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">
                  {language === 'kr' ? "변환할 통화 선택" : "Target Currency"}
                </label>
                <div className="flex gap-2">
                  {(['KRW', 'EUR', 'LKR'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedCurrency === curr
                          ? 'bg-[#C8A45D] text-[#0B1F3A]'
                          : 'bg-[#0B1F3A] text-gray-300 border border-white/10 hover:border-[#C8A45D]/40'
                      }`}
                    >
                      {curr === 'KRW' ? 'KRW (₩)' : curr === 'EUR' ? 'EUR (€)' : 'LKR (Rs)'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#0B1F3A] rounded-xl border border-[#C8A45D]/30 text-center">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {language === 'kr' ? "환율 예상 금액" : "Estimated Value"}
                </div>
                <div className="text-2xl font-serif font-bold text-[#C8A45D]">
                  {selectedCurrency === 'KRW' ? `₩ ${convertedValue}` : selectedCurrency === 'EUR' ? `€ ${convertedValue}` : `LKR ${convertedValue}`}
                </div>
                <div className="text-[10px] text-gray-400 mt-1">
                  1 USD ≈ {rates[selectedCurrency]} {selectedCurrency}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
