'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Read language preference before React hydration so KR users see Korean immediately
  const [isKorean, setIsKorean] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lanka_luxe_lang');
    setIsKorean(savedLang === 'kr');

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-[#060F1D] flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#C8A45D] flex items-center justify-center bg-[#0B1F3A] shadow-[0_0_30px_rgba(200,164,93,0.5)]">
              <Compass className="w-8 h-8 text-[#C8A45D] animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div className="text-center space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white block">
                LANKA LUXE
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A45D] font-sans block">
                {isKorean ? '스리랑카 럭셔리 여행 전문' : 'JOURNEYS • SRI LANKA'}
              </span>
            </div>

            {/* Gold Loading Progress Bar */}
            <div className="w-48 h-1 bg-[#0B1F3A] rounded-full overflow-hidden border border-[#C8A45D]/30 mt-2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D]"
              />
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-[#C8A45D] uppercase tracking-wider font-semibold pt-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isKorean ? 'VIP 맞춤 여정 준비 중' : 'Preparing VIP Experience'}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
