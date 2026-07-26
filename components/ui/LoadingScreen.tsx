'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
          className="fixed inset-0 z-[10000] bg-[#040E1B] flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#C9A227] flex items-center justify-center bg-[#081B33] shadow-[0_0_30px_rgba(201,162,39,0.5)]">
              <Compass className="w-8 h-8 text-[#C9A227] animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div className="text-center space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white block">
                LANKA LUXE
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-sans block">
                JOURNEYS • SRI LANKA
              </span>
            </div>

            {/* Gold Loading Progress Bar */}
            <div className="w-48 h-1 bg-[#081B33] rounded-full overflow-hidden border border-[#C9A227]/30 mt-2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#C9A227] via-[#FFE79A] to-[#C9A227]"
              />
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-[#C9A227] uppercase tracking-wider font-semibold pt-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Preparing VIP Experience</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
