'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Compass, ChevronRight, Sun, Moon, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BookingDrawer } from '@/components/ui/BookingDrawer';

export const Navbar: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.tours, href: '/tours' },
    { name: t.nav.golf, href: '/golf' },
    { name: t.nav.destinations, href: '/destinations' },
    { name: t.nav.blog, href: '/blog' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0B1F3A]/90 backdrop-blur-xl border-b border-[#C8A45D]/30 shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-3.5'
            : 'bg-gradient-to-b from-[#060F1D]/90 via-[#0B1F3A]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full border border-[#C8A45D]/70 flex items-center justify-center bg-[#0B1F3A] shadow-[0_0_15px_rgba(200,164,93,0.25)] group-hover:scale-105 group-hover:border-[#C8A45D] transition-all duration-300">
              <Compass className="w-5 h-5 text-[#C8A45D]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#C8A45D] transition-colors leading-none">
                LANKA LUXE
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#C8A45D] font-sans mt-1">
                JOURNEYS • SRI LANKA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links Pill Container */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-2 rounded-full bg-[#0B1F3A]/60 border border-[#C8A45D]/20 backdrop-blur-lg shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium tracking-wide transition-all relative px-3 py-1.5 rounded-full whitespace-nowrap ${
                    isActive
                      ? 'text-[#0B1F3A] font-bold bg-[#C8A45D] shadow-md'
                      : 'text-gray-200 hover:text-[#C8A45D] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Theme, Language & Booking Drawer */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-[#122848] border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] transition-all flex items-center justify-center shadow-md shrink-0"
              title="Toggle Light / Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switch */}
            <div className="flex items-center bg-[#122848] border border-[#C8A45D]/40 rounded-full p-1 text-xs shadow-md shrink-0">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-[#C8A45D] text-[#0B1F3A] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-xs">🇬🇧</span>
                <span className="text-[11px] font-bold">EN</span>
              </button>
              <button
                onClick={() => setLanguage('kr')}
                className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  language === 'kr'
                    ? 'bg-[#C8A45D] text-[#0B1F3A] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-xs">🇰🇷</span>
                <span className="text-[11px] font-bold">한국어</span>
              </button>
            </div>

            {/* Book Now Drawer Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="bg-gradient-to-r from-[#C8A45D] via-[#F0D898] to-[#C8A45D] text-[#0B1F3A] hover:opacity-95 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(200,164,93,0.35)] hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.bookNow}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-[#122848] border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0B1F3A] transition-colors flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setLanguage(language === 'en' ? 'kr' : 'en')}
              className="flex items-center gap-1 bg-[#122848] border border-[#C8A45D]/40 text-[#C8A45D] px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap"
              aria-label="Toggle Language"
            >
              <span>{language === 'en' ? '🇰🇷' : '🇬🇧'}</span>
              <span>{language === 'en' ? '한국어' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-[#C8A45D] p-1.5 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-[#0B1F3A] border-b border-[#C8A45D]/30 px-6 py-6 space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto"
            >

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base text-gray-200 hover:text-[#C8A45D] py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#C8A45D]" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsDrawerOpen(true);
                  }}
                  className="w-full bg-[#C8A45D] text-[#0B1F3A] font-bold py-3 rounded-xl uppercase tracking-wider text-sm shadow-md"
                >
                  {t.nav.bookNow}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Slide-out Booking Drawer */}
      <BookingDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
