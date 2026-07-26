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
            ? 'bg-[#081B33]/95 backdrop-blur-md border-b border-[#C9A227]/25 shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#081B33] shadow-[0_0_15px_rgba(201,162,39,0.3)] group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-5 h-5 text-[#C9A227]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#C9A227] transition-colors">
                LANKA LUXE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A227] -mt-1 font-sans">
                JOURNEYS • SRI LANKA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                    isActive ? 'text-[#C9A227]' : 'text-gray-200 hover:text-[#C9A227]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A227]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Theme, Language & Booking Drawer */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#0D2647] border border-[#C9A227]/40 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#081B33] transition-colors"
              title="Toggle Light / Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switch */}
            <div className="flex items-center bg-[#0D2647] border border-[#C9A227]/40 rounded-full p-1 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-[#C9A227] text-[#081B33] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('kr')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                  language === 'kr'
                    ? 'bg-[#C9A227] text-[#081B33] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                KR
              </button>
            </div>

            {/* Book Now Drawer Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#C9A227] via-[#FFE79A] to-[#C9A227] rounded-full group-hover:opacity-90 transition-opacity" />
              <span className="relative px-5 py-2 rounded-full bg-[#081B33] flex items-center gap-2 text-xs font-bold text-[#C9A227] group-hover:bg-transparent group-hover:text-[#081B33] transition-all uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                {t.nav.bookNow}
              </span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-[#0D2647] border border-[#C9A227]/40 text-[#C9A227]"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setLanguage(language === 'en' ? 'kr' : 'en')}
              className="flex items-center gap-1 bg-[#0D2647] border border-[#C9A227]/40 text-[#C9A227] px-2.5 py-1 rounded-full text-xs font-bold"
            >
              <Globe className="w-3.5 h-3.5" />
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-[#C9A227] p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
              className="lg:hidden bg-[#081B33] border-b border-[#C9A227]/30 px-6 py-6 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base text-gray-200 hover:text-[#C9A227] py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A227]" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsDrawerOpen(true);
                  }}
                  className="w-full bg-[#C9A227] text-[#081B33] font-bold py-3 rounded-xl uppercase tracking-wider text-sm shadow-md"
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
