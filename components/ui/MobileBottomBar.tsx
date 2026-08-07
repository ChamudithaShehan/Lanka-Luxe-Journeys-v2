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
      <div className="fixed bottom-0 left-0 right-0 z-[70] lg:hidden bg-[#0B1F3A]/95 backdrop-blur-xl border-t border-[#C8A45D]/30 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2">
        {/* Kakao / WhatsApp Quick Call */}
        <a
          href="https://wa.me/94770008899"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#122848] border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] font-bold py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>{language === 'kr' ? '실시간 상담' : 'Chat Direct'}</span>
        </a>

        {/* Instant Booking Drawer Trigger */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex-1 bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D] text-[#0B1F3A] font-bold py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>{language === 'kr' ? '빠른 예약' : 'Reserve VIP'}</span>
        </button>
      </div>

      <BookingDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
