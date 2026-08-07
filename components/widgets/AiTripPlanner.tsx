'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, CheckCircle2, ArrowRight, Plane, Trophy, Trees, Flame } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AiTripPlanner: React.FC = () => {
  const { t, language } = useLanguage();
  const [style, setStyle] = useState<'golf' | 'royal' | 'safari' | 'wellness'>('golf');
  const [days, setDays] = useState<'5-7' | '7-10' | '10+'>('7-10');
  const [stay, setStay] = useState<'aman' | 'tea-trails' | 'five-star'>('tea-trails');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<null | {
    titleEn: string;
    titleKr: string;
    routeEn: string;
    routeKr: string;
    highlightsEn: string[];
    highlightsKr: string[];
    helicopter: boolean;
  }>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setResult(null);

    setTimeout(() => {
      setIsGenerating(false);

      if (style === 'golf') {
        setResult({
          titleEn: "PGA Elite Golf & Tea Trails Expedition",
          titleKr: "PGA 엘리트 골프 & 실론 티 방갈로 익스피디션",
          routeEn: "Colombo -> Kandy (Victoria Golf) -> Nuwara Eliya -> Shangri-La Hambantota",
          routeKr: "콜롬보 -> 캔디 (빅토리아 골프) -> 누와라엘리야 -> 샹그릴라 함반토타",
          highlightsEn: [
            "Guaranteed priority tee-times on 4 PGA courses",
            "1:1 dedicated caddie & private buggy",
            "Helicopter transfer over Knuckles Mountain range",
            "Korean travel concierge & golf bag handling"
          ],
          highlightsKr: [
            "4대 PGA 규격 명문 골프장 티타임 100% 보장",
            "1:1 전담 캐디 및 개인 카트 서비스",
            "너클스 산맥 헬리콥터 시닉 항공 이동",
            "한국어 콘시어지팀의 캐디백 의전 서비스"
          ],
          helicopter: true
        });
      } else if (style === 'royal') {
        setResult({
          titleEn: "Grand Ceylon Royal Private Jet Odyssey",
          titleKr: "그랜드 실론 로열 프라이빗 제트 오디세이",
          routeEn: "Colombo -> Sigiriya Citadel -> Ceylon Tea Trails -> Yala Wild Coast -> Galle Fort",
          routeKr: "콜롬보 -> 시기리야 요새 -> 실론 티 트레일즈 -> 야라 와일드 코스트 -> 갈레 요새",
          highlightsEn: [
            "All inland transfers by Airbus H130 Private Helicopter",
            "VIP sunrise champagne breakfast on Sigiriya Rock",
            "Private Leopard biologist safari in Yala National Park",
            "Relais & Châteaux luxury colonial suite stays"
          ],
          highlightsKr: [
            "전 구간 에어버스 H130 프라이빗 헬기 이동",
            "시기리야 암사원 일출 샴페인 브런치",
            "야라 국립공원 1:1 표범 전문 생물학자 사파리",
            "릴레앤샤토 인가 최상급 식민지 스위트룸 투숙"
          ],
          helicopter: true
        });
      } else if (style === 'safari') {
        setResult({
          titleEn: "Serendib Wildlife & Marine Ocean Voyage",
          titleKr: "스리랑카 야생 표범 사파리 & 대왕고래 크루즈",
          routeEn: "Wilpattu -> Minneriya Elephant Gathering -> Yala National Park -> Mirissa",
          routeKr: "윌파투 -> 미네리야 코끼리 집결지 -> 야라 국립공원 -> 미릿사 고래 해안",
          highlightsEn: [
            "Private 4x4 open Land Cruiser with safari naturalists",
            "Luxury cocoon tent glamping at Wild Coast Lodge",
            "Private catamaran whale watching charter",
            "Sunset beach barbecue under tropical stars"
          ],
          highlightsKr: [
            "전담 수석 자연학자 동행 4x4 랜드크루저 사파리",
            "와일드 코스트 럭셔리 코쿤 텐트 투숙",
            "프라이빗 카타마란 요트 대왕고래 관찰",
            "해안가 프라이빗 바비큐 디너 연출"
          ],
          helicopter: false
        });
      } else {
        setResult({
          titleEn: "Royal Ayurveda & Santani Mindful Retreat",
          titleKr: "로열 아유르베다 & 산타니 웰니스 힐링 리트릿",
          routeEn: "Santani Kandy -> Ceylon Tea Trails -> Saman Villas Bentota",
          routeKr: "캔디 산타니 웰니스 -> 실론 티 트레일즈 -> 벤토타 사만 빌라",
          highlightsEn: [
            "Personal Ayurvedic physician diagnosis & custom herbals",
            "Daily sunrise yoga overlooking misty mountain valleys",
            "Detoxifying oil therapies & thermal water baths",
            "Organic farm-to-table gourmet dining"
          ],
          highlightsKr: [
            "1:1 전담 아유르베다 전문의 체질 진단 및 맞춤 케어",
            "운무 산맥 뷰의 일출 정통 요가 세션",
            "천연 오일 데톡스 테라피 & 프라이빗 스파",
            "유기농 파인 다이닝 웰니스 식단"
          ],
          helicopter: false
        });
      }
    }, 800);
  };

  return (
    <section className="py-20 bg-[#0B1F3A] relative overflow-hidden text-white border-t border-[#C8A45D]/20">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A45D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {t.aiPlanner.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
            {t.aiPlanner.title}
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            {t.aiPlanner.subtitle}
          </p>
        </div>

        {/* Multi-step options card */}
        <div className="bg-[#122848]/90 border border-[#C8A45D]/30 rounded-2xl p-4 sm:p-8 shadow-[0_0_40px_rgba(11, 31, 58,0.8)] backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1: Style */}
            <div>
              <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-3">
                {t.aiPlanner.step1}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'golf', labelEn: 'PGA Golf', labelKr: '골프 라운딩', icon: Trophy },
                  { id: 'royal', labelEn: 'Royal Jet', labelKr: '로열 제트', icon: Plane },
                  { id: 'safari', labelEn: 'Wild Safari', labelKr: '야생 사파리', icon: Trees },
                  { id: 'wellness', labelEn: 'Ayurveda', labelKr: '아유르베다', icon: Flame },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSel = style === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setStyle(item.id as any)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs transition-all ${
                        isSel
                          ? 'bg-[#C8A45D] text-[#0B1F3A] font-bold border-[#C8A45D] shadow-md'
                          : 'bg-[#0B1F3A] border-white/10 text-gray-300 hover:border-[#C8A45D]/50'
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-1" />
                      <span>{language === 'kr' ? item.labelKr : item.labelEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration */}
            <div>
              <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-3">
                {t.aiPlanner.step2}
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: '5-7', labelEn: '5 - 7 Days (Highlights)', labelKr: '5 ~ 7일 (핵심 투어)' },
                  { id: '7-10', labelEn: '7 - 10 Days (Signature)', labelKr: '7 ~ 10일 (시그니처 라운딩)' },
                  { id: '10+', labelEn: '10+ Days (Grand Ceylon)', labelKr: '10일 이상 (전국 완전 주행)' },
                ].map((item) => {
                  const isSel = days === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setDays(item.id as any)}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                        isSel
                          ? 'bg-[#C8A45D] text-[#0B1F3A] font-bold border-[#C8A45D]'
                          : 'bg-[#0B1F3A] border-white/10 text-gray-300 hover:border-[#C8A45D]/50'
                      }`}
                    >
                      {language === 'kr' ? item.labelKr : item.labelEn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Lodging Standard */}
            <div>
              <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-3">
                {t.aiPlanner.step3}
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: 'tea-trails', labelEn: 'Relais & Châteaux Tea Bungalows', labelKr: '릴레앤샤토 최고급 차 방갈로' },
                  { id: 'aman', labelEn: 'Aman Estates & Wild Coast Lodges', labelKr: '아만(Aman) 및 와일드 코스트' },
                  { id: 'five-star', labelEn: 'Shangri-La & 5-Star Resorts', labelKr: '샹그릴라 및 5성급 리조트' },
                ].map((item) => {
                  const isSel = stay === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setStay(item.id as any)}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                        isSel
                          ? 'bg-[#C8A45D] text-[#0B1F3A] font-bold border-[#C8A45D]'
                          : 'bg-[#0B1F3A] border-white/10 text-gray-300 hover:border-[#C8A45D]/50'
                      }`}
                    >
                      {language === 'kr' ? item.labelKr : item.labelEn}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-gradient-to-r from-[#C8A45D] to-[#D4B87A] hover:from-[#D4B87A] hover:to-[#C8A45D] text-[#0B1F3A] font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(200, 164, 93,0.3)] transition-all flex items-center justify-center gap-2 mx-auto uppercase tracking-wider text-xs"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Curating Luxury Proposal...</span>
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4" />
                  <span>{t.aiPlanner.getRecommendation}</span>
                </>
              )}
            </button>
          </div>

          {/* AI Result Banner */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 15 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 15 }}
                className="mt-8 pt-6 border-t border-[#C8A45D]/40 bg-[#0B1F3A]/80 p-6 rounded-xl border"
              >
                <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.aiPlanner.recommendedPlan}
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                  {language === 'kr' ? result.titleKr : result.titleEn}
                </h4>
                <p className="text-xs text-gray-300 font-mono mb-4 bg-white/5 p-2 rounded border border-white/10">
                  <strong className="text-[#C8A45D]">Route:</strong> {language === 'kr' ? result.routeKr : result.routeEn}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200 mb-6">
                  {(language === 'kr' ? result.highlightsKr : result.highlightsEn).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#122848] p-4 rounded-xl border border-[#C8A45D]/30">
                  <div className="text-xs text-gray-300">
                    <span className="text-[#C8A45D] font-bold">Estimated Cost:</span> $5,800 - $9,500 USD per guest (Includes Private Helicopter & Concierge)
                  </div>
                  <a
                    href="#contact"
                    className="bg-[#C8A45D] text-[#0B1F3A] font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-[#D4B87A] transition-colors uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>Request Custom Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
