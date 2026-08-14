'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowUp, ShieldCheck, Share2, Globe, Camera } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060F1D] border-t border-[#C8A45D]/30 text-white pt-10 pb-8 overflow-hidden">
      {/* Decorative Gold Glow Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#C8A45D] flex items-center justify-center bg-[#0B1F3A]">
                <Compass className="w-4 h-4 text-[#C8A45D]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                  LANKA LUXE
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#C8A45D] font-sans mt-0.5">
                  JOURNEYS • SRI LANKA
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D] shrink-0" />
              <span>SLTDA Reg. #DMC/2026/99</span>
            </div>
          </div>

          {/* Navigation & Links (Combined Grid for Compactness) */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1 lg:col-span-2">
            <div className="space-y-2">
              <h4 className="text-[#C8A45D] font-serif text-xs font-semibold tracking-wider uppercase">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li><Link href="/" className="hover:text-[#C8A45D] transition-colors">{t.nav.home}</Link></li>
                <li><Link href="/about" className="hover:text-[#C8A45D] transition-colors">{t.nav.about}</Link></li>
                <li><Link href="/tours" className="hover:text-[#C8A45D] transition-colors">{t.nav.tours}</Link></li>
                <li><Link href="/golf" className="hover:text-[#C8A45D] transition-colors">{t.nav.golf}</Link></li>
                <li><Link href="/destinations" className="hover:text-[#C8A45D] transition-colors">{t.nav.destinations}</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-[#C8A45D] font-serif text-xs font-semibold tracking-wider uppercase">
                {t.footer.golfPackages}
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li><Link href="/golf#royal-colombo" className="hover:text-[#C8A45D] transition-colors">Royal Colombo</Link></li>
                <li><Link href="/golf#victoria-golf" className="hover:text-[#C8A45D] transition-colors">Victoria Kandy</Link></li>
                <li><Link href="/golf#nuwara-eliya" className="hover:text-[#C8A45D] transition-colors">Nuwara Eliya</Link></li>
                <li><Link href="/golf#shangri-la" className="hover:text-[#C8A45D] transition-colors">Shangri-La Golf</Link></li>
                <li><Link href="/tours?category=Honeymoon" className="hover:text-[#C8A45D] transition-colors">Honeymoon</Link></li>
              </ul>
            </div>
          </div>

          {/* Compact Newsletter Column */}
          <div className="space-y-2">
            <h4 className="text-[#C8A45D] font-serif text-xs font-semibold tracking-wider uppercase">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              {t.footer.newsletterSub}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-1.5 pt-1" suppressHydrationWarning>
              <input
                type="email"
                placeholder="vip@luxury.com"
                className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
              />
              <button
                type="submit"
                className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors uppercase tracking-wider shrink-0"
              >
                {t.footer.subscribe}
              </button>
            </form>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-[#122848] border border-[#C8A45D]/30 flex items-center justify-center text-gray-300 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-all">
                <Camera className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Website" className="w-7 h-7 rounded-full bg-[#122848] border border-[#C8A45D]/30 flex items-center justify-center text-gray-300 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-all">
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Share" className="w-7 h-7 rounded-full bg-[#122848] border border-[#C8A45D]/30 flex items-center justify-center text-gray-300 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-all">
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Compact Bottom Copyright Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400">
          <div>
            © {new Date().getFullYear()} Lanka Luxe Journeys (Pvt) Ltd. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-gray-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-200 cursor-pointer">Terms</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#C8A45D] hover:text-[#D4B87A] transition-colors font-medium ml-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
