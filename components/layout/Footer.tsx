'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Mail, Phone, MapPin, ArrowUp, ShieldCheck, Share2, Globe, Camera } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040E1B] border-t border-[#C9A227]/30 text-white pt-16 pb-12 overflow-hidden">
      {/* Decorative Gold Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 Columns on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A227] flex items-center justify-center bg-[#081B33]">
                <Compass className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  LANKA LUXE
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A227] -mt-1 font-sans">
                  JOURNEYS • SRI LANKA
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
              <span className="text-xs text-gray-300 font-medium">Licensed Destination Management Company (SLTDA Reg. #DMC/2026/99)</span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-[#0D2647] border border-[#C9A227]/30 flex items-center justify-center text-gray-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-all">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0D2647] border border-[#C9A227]/30 flex items-center justify-center text-gray-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0D2647] border border-[#C9A227]/30 flex items-center justify-center text-gray-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-all">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[#C9A227] font-serif text-base font-semibold tracking-wide uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-[#C9A227] transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/about" className="hover:text-[#C9A227] transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/tours" className="hover:text-[#C9A227] transition-colors">{t.nav.tours}</Link></li>
              <li><Link href="/golf" className="hover:text-[#C9A227] transition-colors">{t.nav.golf}</Link></li>
              <li><Link href="/destinations" className="hover:text-[#C9A227] transition-colors">{t.nav.destinations}</Link></li>
              <li><Link href="/contact" className="hover:text-[#C9A227] transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Golf & Experience Links */}
          <div className="space-y-3">
            <h4 className="text-[#C9A227] font-serif text-base font-semibold tracking-wide uppercase">
              {t.footer.golfPackages}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/golf#royal-colombo" className="hover:text-[#C9A227] transition-colors">Royal Colombo Golf</Link></li>
              <li><Link href="/golf#victoria-golf" className="hover:text-[#C9A227] transition-colors">Victoria Golf Kandy</Link></li>
              <li><Link href="/golf#nuwara-eliya" className="hover:text-[#C9A227] transition-colors">Nuwara Eliya High Golf</Link></li>
              <li><Link href="/golf#shangri-la" className="hover:text-[#C9A227] transition-colors">Shangri-La Hambantota</Link></li>
              <li><Link href="/tours?category=Honeymoon" className="hover:text-[#C9A227] transition-colors">Luxury Honeymoon</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-[#C9A227] font-serif text-base font-semibold tracking-wide uppercase">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t.footer.newsletterSub}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2 pt-1" suppressHydrationWarning>
              <input
                type="email"
                placeholder="vip@luxury.com"
                className="w-full bg-[#0D2647] border border-[#C9A227]/30 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227]"
              />
              <button
                type="submit"
                className="w-full bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold text-xs py-2 rounded-lg transition-colors uppercase tracking-wider"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Lanka Luxe Journeys (Pvt) Ltd. {t.footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-gray-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-200 cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#C9A227] hover:text-[#E5C358] transition-colors font-medium ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
