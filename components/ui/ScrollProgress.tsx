'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D] shadow-[0_0_10px_#C8A45D]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
