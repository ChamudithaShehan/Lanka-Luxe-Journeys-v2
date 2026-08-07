'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PREMIUM_SERVICES } from '@/data/travelData';

export const PremiumServicesGrid: React.FC = () => {
  const { language } = useLanguage();
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="py-24 bg-[#0B1F3A] text-white border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            WHITE-GLOVE LOGISTICS
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {language === 'kr' ? "스리랑카 최고급 VIP 럭셔리 서비스" : "Bespoke Premium VIP Services"}
          </h2>
          <p className="text-gray-300 text-sm mt-3">
            {language === 'kr'
              ? "공항 패스트트랙 수속부터 전용 의전 메르세데스 밴, 직항 헬기, 프라이빗 요트 및 전담 버틀러."
              : "Private runway fast-track, Mercedes-Benz V-Class, Airbus helicopter charters, and luxury yachting."}
          </p>
        </div>

        {/* Services Grid - Max 3 on Mobile unless expanded */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREMIUM_SERVICES.map((srv, idx) => {
            const isHiddenMobile = !showAllMobile && idx >= 3;
            return (
              <div
                key={srv.id}
                className={`bg-[#122848] border border-[#C8A45D]/30 hover:border-[#C8A45D] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
                  isHiddenMobile ? 'hidden md:block' : 'block'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={srv.image}
                    alt={srv.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122848] via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                    {language === 'kr' ? srv.titleKr : srv.titleEn}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {language === 'kr' ? srv.descKr : srv.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View More Button */}
        {PREMIUM_SERVICES.length > 3 && (
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122848] border border-[#C8A45D] text-[#C8A45D] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#C8A45D] hover:text-[#0B1F3A] transition-all"
            >
              <span>{showAllMobile ? (language === 'kr' ? '접기 (Show Less)' : 'Show Less') : (language === 'kr' ? '더보기 (View More)' : 'View More')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllMobile ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
