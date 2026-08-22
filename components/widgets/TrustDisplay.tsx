'use client';

import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function TrustDisplay({ onOpenBooking }: { onOpenBooking: (pkgName?: string) => void }) {
  const { language } = useLanguage();

  return (
    <section className="py-10 sm:py-16 bg-[#060F1D] border-t border-b border-[#C8A45D]/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* TOP TRUST BADGES GRID — 2×2 on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {/* GOOGLE REVIEWS */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <span className="text-lg sm:text-2xl font-bold text-white">G</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[10px] sm:text-xs font-bold text-white ml-1">5.0</span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-white">Google Reviews</p>
              <p className="text-[10px] sm:text-[11px] text-gray-400 leading-tight">{language === 'kr' ? '240개+ 인증 5성급 후기' : '240+ Verified 5-Star'}</p>
            </div>
          </div>

          {/* TRIPADVISOR */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#00AA6C]/20 flex items-center justify-center shrink-0 border border-[#00AA6C]/40">
              <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#00AA6C]" />
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[10px] sm:text-xs font-bold text-white ml-1">5.0</span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-white">TripAdvisor</p>
              <p className="text-[10px] sm:text-[11px] text-gray-400 leading-tight">{language === 'kr' ? '트래블러스 초이스 2026' : "Choice Winner 2026"}</p>
            </div>
          </div>

          {/* NAVER BLOG — Korean-specific trust signal */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#03C75A]/20 flex items-center justify-center shrink-0 border border-[#03C75A]/40">
              <span className="text-base sm:text-lg font-black text-[#03C75A]">N</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex items-center gap-1 text-[#03C75A]">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs font-bold text-[#03C75A]">{language === 'kr' ? '네이버 추천' : 'Naver'}</span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-white">{language === 'kr' ? '네이버 블로그 검증' : 'Naver Verified'}</p>
              <p className="text-[10px] sm:text-[11px] text-gray-400 leading-tight">{language === 'kr' ? '스리랑카 1위 블로그' : '#1 Korea Travel Blog'}</p>
            </div>
          </div>

          {/* SLTDA GOVT LICENCE */}
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#C8A45D]/10 flex items-center justify-center shrink-0 border border-[#C8A45D]/40 text-[#C8A45D]">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex items-center gap-1 text-[#C8A45D]">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs font-bold text-[#C8A45D]">{language === 'kr' ? '정부 인증' : 'Gov. Certified'}</span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-white">SLTDA Licence</p>
              <p className="text-[10px] text-gray-400 font-mono leading-tight">TA/2026/Luxe-084</p>
            </div>
          </div>
        </div>

        {/* Korean VIP Testimonials — hidden on mobile, show on md+ */}
        {language === 'kr' && (
          <div className="hidden md:block space-y-4">
            <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-[#C8A45D]" />
              한국 VIP 고객 실제 후기
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: '김민준 (서울, 강남구)',
                  date: '2026년 5월 · PGA 골프 투어',
                  review: '빅토리아 골프 코스에서의 라운딩은 평생 잊지 못할 경험이었습니다. 박 이사님이 카카오톡으로 실시간 케어해주셔서 언어 걱정 없이 완벽한 여행이었어요.',
                  stars: 5,
                },
                {
                  name: '이수진 (부산, 해운대구)',
                  date: '2026년 3월 · 허니문 패키지',
                  review: '신혼여행을 스리랑카로 선택했는데 정말 최고의 결정이었습니다. 캔들라이트 해변 다이닝과 플런지 풀 빌라가 환상적이었고 전담 콘시어지 서비스 덕분에 아무 걱정 없이 즐겼어요.',
                  stars: 5,
                },
                {
                  name: '박성호 (서울, 용산구)',
                  date: '2026년 1월 · 단체 골프 (8인)',
                  review: '회사 임원진 8명과 골프 여행을 다녀왔습니다. 골프백 전담 수송, VIP 패스트트랙, 한식 제공까지 완벽했습니다. 이미 10월 추석 시즌 재예약 완료했습니다.',
                  stars: 5,
                },
              ].map((review, i) => (
                <div key={i} className="bg-[#0B1F3A] border border-[#C8A45D]/25 rounded-2xl p-5 space-y-3 hover:border-[#C8A45D]/60 transition-all">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.stars)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">&ldquo;{review.review}&rdquo;</p>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-xs font-bold text-white">{review.name}</p>
                    <p className="text-[11px] text-[#C8A45D]">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


      </div>
    </section>
  );
}
