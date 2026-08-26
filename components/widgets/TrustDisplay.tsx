'use client';

import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function TrustDisplay({ onOpenBooking }: { onOpenBooking: (pkgName?: string) => void }) {
  const { language } = useLanguage();

  return (
    <section className="py-4 sm:py-12 bg-[#060F1D] border-t border-b border-[#C8A45D]/20 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        {/* TOP TRUST BADGES — Compact & Small on Mobile, Rich on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5">
          {/* GOOGLE REVIEWS */}
          <div className="bg-[#0B1F3A]/90 border border-[#C8A45D]/25 rounded-lg sm:rounded-2xl p-2 sm:p-5 shadow-md sm:shadow-xl flex items-center gap-2 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <span className="text-xs sm:text-xl font-bold text-white">G</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-[10px] sm:text-xs font-bold text-white">5.0</span>
                <span className="hidden sm:inline-flex items-center gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">Google Reviews</p>
              <p className="text-[9px] sm:text-[11px] text-gray-400 truncate">{language === 'kr' ? '240개+ 인증 후기' : '240+ Verified'}</p>
            </div>
          </div>

          {/* TRIPADVISOR */}
          <div className="bg-[#0B1F3A]/90 border border-[#C8A45D]/25 rounded-lg sm:rounded-2xl p-2 sm:p-5 shadow-md sm:shadow-xl flex items-center gap-2 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-full bg-[#00AA6C]/20 flex items-center justify-center shrink-0 border border-[#00AA6C]/40">
              <Award className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#00AA6C]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-[10px] sm:text-xs font-bold text-white">5.0</span>
                <span className="hidden sm:inline-flex items-center gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">TripAdvisor</p>
              <p className="text-[9px] sm:text-[11px] text-gray-400 truncate">{language === 'kr' ? '초이스 2026' : "Winner 2026"}</p>
            </div>
          </div>

          {/* NAVER BLOG */}
          <div className="bg-[#0B1F3A]/90 border border-[#C8A45D]/25 rounded-lg sm:rounded-2xl p-2 sm:p-5 shadow-md sm:shadow-xl flex items-center gap-2 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-full bg-[#03C75A]/20 flex items-center justify-center shrink-0 border border-[#03C75A]/40">
              <span className="text-[10px] sm:text-base font-black text-[#03C75A]">N</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-0.5 text-[#03C75A]">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-xs font-bold text-[#03C75A]">{language === 'kr' ? '네이버' : 'Naver'}</span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">{language === 'kr' ? '네이버 검증' : 'Naver Verified'}</p>
              <p className="text-[9px] sm:text-[11px] text-gray-400 truncate">{language === 'kr' ? '1위 블로그' : '#1 Korea Blog'}</p>
            </div>
          </div>

          {/* SLTDA GOVT LICENCE */}
          <div className="bg-[#0B1F3A]/90 border border-[#C8A45D]/25 rounded-lg sm:rounded-2xl p-2 sm:p-5 shadow-md sm:shadow-xl flex items-center gap-2 sm:gap-4 hover:border-[#C8A45D] transition-all">
            <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-full bg-[#C8A45D]/10 flex items-center justify-center shrink-0 border border-[#C8A45D]/40 text-[#C8A45D]">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-0.5 text-[#C8A45D]">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-xs font-bold text-[#C8A45D]">{language === 'kr' ? '정부인증' : 'Certified'}</span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">SLTDA Licence</p>
              <p className="text-[9px] text-gray-400 font-mono truncate">Luxe-084</p>
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
