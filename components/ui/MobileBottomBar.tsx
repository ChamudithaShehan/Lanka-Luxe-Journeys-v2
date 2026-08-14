'use client';

import React, { useState } from 'react';
import { PhoneCall, Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BookingDrawer } from '@/components/ui/BookingDrawer';

export const MobileBottomBar: React.FC = () => {
  const { language } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[70] lg:hidden bg-[#0B1F3A]/95 backdrop-blur-xl border-t border-[#C8A45D]/30 px-2 sm:px-3 py-2 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] flex items-center justify-between gap-1.5 sm:gap-2">
        {language === 'kr' ? (
          <>
            {/* KR mode: KakaoTalk PRIMARY — WhatsApp secondary */}
            <a
              href="https://open.kakao.com/o/lankaluxe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#FEE500] text-[#191919] font-bold py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[10px] sm:text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1 active:scale-95 shadow-sm whitespace-nowrap"
            >
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#3C1E1E] text-[#FEE500] flex items-center justify-center font-bold text-[7px] sm:text-[8px] shrink-0">톡</div>
              <span>카카오톡</span>
            </a>
            <a
              href="https://wa.me/94770008899"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-white font-bold py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[10px] sm:text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1 active:scale-95 shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
              <span>WhatsApp</span>
            </a>
          </>
        ) : (
          <>
            {/* EN mode: WhatsApp PRIMARY — KakaoTalk secondary */}
            <a
              href="https://wa.me/94770008899"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-white font-bold py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[10px] sm:text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1 active:scale-95 shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://pf.kakao.com/_lankaluxe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#FEE500] text-[#191919] font-bold py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[10px] sm:text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1 active:scale-95 shadow-sm whitespace-nowrap"
            >
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#3C1E1E] text-[#FEE500] flex items-center justify-center font-bold text-[7px] sm:text-[8px] shrink-0">Talk</div>
              <span>카카오톡</span>
            </a>
          </>
        )}

        {/* Instant Booking Drawer Trigger */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex-1 bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D] text-[#0B1F3A] font-bold py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[10px] sm:text-[11px] uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1 sm:gap-1.5 active:scale-95 whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span>{language === 'kr' ? '빠른 예약' : 'Reserve VIP'}</span>
        </button>
      </div>


      <BookingDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
