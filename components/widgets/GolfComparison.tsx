'use client';

import React from 'react';
import { GOLF_COURSES } from '@/data/travelData';
import { Trophy, CheckCircle, Flag, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const GolfComparison: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-[#081B33] text-white border-t border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5" />
            PGA Championship Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            {language === 'kr' ? "스리랑카 5대 명문 골프장 비교" : "Golf Course Comparison Matrix"}
          </h2>
          <p className="text-xs text-gray-300 mt-2">
            {language === 'kr'
              ? "역사, 기후, 난이도 및 럭셔리 숙소와의 연계성을 한눈에 비교하세요."
              : "Compare holes, established era, course designers, and luxury lodging integration."}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#C9A227]/30 shadow-2xl bg-[#0D2647]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#040E1B] text-[#C9A227] font-serif border-b border-[#C9A227]/30">
                <th className="p-4 uppercase tracking-wider">Golf Club</th>
                <th className="p-4 uppercase tracking-wider">Location</th>
                <th className="p-4 uppercase tracking-wider">Holes / Par</th>
                <th className="p-4 uppercase tracking-wider">Established</th>
                <th className="p-4 uppercase tracking-wider">Designer</th>
                <th className="p-4 uppercase tracking-wider">Partner Resort</th>
                <th className="p-4 uppercase tracking-wider">Highlight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-gray-200">
              {GOLF_COURSES.map((gc) => (
                <tr key={gc.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white font-serif flex items-center gap-2">
                    <Flag className="w-4 h-4 text-[#C9A227]" />
                    <span>{language === 'kr' ? gc.nameKr : gc.nameEn}</span>
                  </td>
                  <td className="p-4 text-gray-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                    {gc.location}
                  </td>
                  <td className="p-4 font-semibold text-[#C9A227]">
                    {gc.holes}H / Par {gc.par}
                  </td>
                  <td className="p-4">{gc.established} AD</td>
                  <td className="p-4 text-gray-300">{gc.designer}</td>
                  <td className="p-4 text-[#C9A227]">{gc.hotel}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 bg-[#C9A227]/10 text-[#C9A227] px-2.5 py-1 rounded-full text-[10px] font-semibold border border-[#C9A227]/30">
                      <CheckCircle className="w-3 h-3" />
                      {(language === 'kr' ? gc.featuresKr : gc.featuresEn)[0]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
