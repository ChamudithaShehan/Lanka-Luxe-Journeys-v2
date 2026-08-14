'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Globe, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedPackage = '' }) => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: 'Korea',
    languagePref: language === 'kr' ? 'Korean' : 'English',
    dates: '',
    guests: '2 Guests',
    packageType: preselectedPackage || 'Grand Ceylon Royal Tour & Private Jet',
    budget: '$5,000 - $10,000',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Trigger luxury golden confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C8A45D', '#D4B87A', '#0B1F3A', '#FFFFFF']
      });
    } catch {
      // Fallback silently if confetti throws
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#060F1D]/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#0B1F3A] border border-[#C8A45D]/40 rounded-2xl p-5 sm:p-8 shadow-[0_0_50px_rgba(200, 164, 93,0.2)] text-white z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45D]/10 border border-[#C8A45D]/30 text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Bespoke Concierge Booking
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                    {t.bookingModal.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto">
                    {t.bookingModal.subtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        {t.bookingModal.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'kr' ? "홍길동 (Hong Gildong)" : "Lord / Lady / Mr. John Smith"}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        {t.bookingModal.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vip@luxury-domain.com"
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        {t.bookingModal.phone} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+82 10 1234 5678"
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        {t.bookingModal.preferredLanguage}
                      </label>
                      <select
                        value={formData.languagePref}
                        onChange={(e) => setFormData({ ...formData, languagePref: e.target.value })}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45D]"
                      >
                        <option value="Korean">Korean (한국어 전담 의전)</option>
                        <option value="English">English (Global VIP)</option>
                        <option value="German">German / European</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {t.bookingModal.dates}
                      </label>
                      <input
                        type="text"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder={language === 'kr' ? "2026년 10월 15일 - 10월 22일" : "Oct 15 - Oct 25, 2026"}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {t.bookingModal.guests}
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45D]"
                      >
                        <option value="1 Guest">1 VIP Guest</option>
                        <option value="2 Guests">2 Guests (Couple / Pair)</option>
                        <option value="4 Golfers">4 Golfers (Full Flight)</option>
                        <option value="Private Group (6+)">Private Group (6+ Guests)</option>
                        {/* 단체 여행 option — prominent for Korean corporate/golf group travel */}
                        <option value="Korean Group Tour (8+)">{language === 'kr' ? '단체 여행 (8인 이상) — 골프 / 기업 투어' : 'Group Tour (8+ Guests) — Golf / Corporate'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        {t.bookingModal.packageType}
                      </label>
                      <select
                        value={formData.packageType}
                        onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45D]"
                      >
                        <option value="Grand Ceylon Royal Tour & Private Jet">Grand Ceylon Royal Tour & Private Jet</option>
                        <option value="Sri Lanka PGA Royal Golf Odyssey">Sri Lanka PGA Royal Golf Odyssey</option>
                        <option value="Serendib Wildlife & Elephant Gathering">Serendib Wildlife & Safari</option>
                        <option value="Custom Bespoke Itinerary">Custom 100% Tailor-Made Plan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        {t.bookingModal.budget}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45D]"
                      >
                        {language === 'kr' ? (
                          <>
                            <option value="$3,000 - $5,000">₩3,900,000 – ₩6,500,000 (USD $3K–$5K)</option>
                            <option value="$5,000 - $10,000">₩6,500,000 – ₩13,000,000 (USD $5K–$10K)</option>
                            <option value="$10,000 - $25,000">₩13,000,000 – ₩32,500,000 (Ultra Luxe)</option>
                            <option value="$25,000+">₩32,500,000+ (프라이빗 제트 전세)</option>
                          </>
                        ) : (
                          <>
                            <option value="$3,000 - $5,000">$3,000 - $5,000 USD</option>
                            <option value="$5,000 - $10,000">$5,000 - $10,000 USD</option>
                            <option value="$10,000 - $25,000">$10,000 - $25,000 USD (Ultra Luxe)</option>
                            <option value="$25,000+">$25,000+ USD (Private Jet Charter)</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      {t.bookingModal.notes}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={language === 'kr' ? "골프 핸디캡, 프라이빗 헬기 렌탈, 특별 식단 요구사항 등 자유롭게 적어주세요." : "Golf handicap, helicopter requests, dietary restrictions, preferred luxury hotels..."}
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#C8A45D] to-[#D4B87A] hover:from-[#D4B87A] hover:to-[#C8A45D] text-[#0B1F3A] font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(200, 164, 93,0.3)] hover:shadow-[0_0_30px_rgba(200, 164, 93,0.5)] flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
                    >
                      <Sparkles className="w-4 h-4 fill-current" />
                      {t.bookingModal.submit}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                    <span>100% Confidentiality & Instant VIP Concierge Contact Guaranteed</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#C8A45D]/20 border border-[#C8A45D] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C8A45D]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {language === 'kr' ? "예약 상담 신청이 완료되었습니다" : "Reservation Request Received"}
                </h3>
                <p className="text-gray-300 max-w-md mx-auto text-sm mb-6">
                  {t.bookingModal.successMsg}
                </p>
                <div className="p-4 rounded-xl bg-[#122848] border border-[#C8A45D]/20 max-w-sm mx-auto mb-6 text-left text-xs space-y-1.5 text-gray-300">
                  <div><strong className="text-white">Guest:</strong> {formData.name}</div>
                  <div><strong className="text-white">Contact:</strong> {formData.phone}</div>
                  <div><strong className="text-white">Selected Package:</strong> {formData.packageType}</div>
                  <div><strong className="text-white">Status:</strong> <span className="text-[#C8A45D] font-semibold">Priority VIP Processing</span></div>
                </div>
                <button
                  onClick={handleReset}
                  className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-6 py-2.5 rounded-lg text-sm transition-colors uppercase tracking-wider"
                >
                  {language === 'kr' ? "확인 및 닫기" : "Close Window"}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
