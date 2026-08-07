'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Sparkles, CheckCircle2, ShieldCheck, PhoneCall, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import confetti from 'canvas-confetti';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '2 Guests',
    package: 'Grand Ceylon Royal Tour',
    language: language === 'kr' ? 'Korean' : 'English',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { x: 0.8, y: 0.5 }, colors: ['#C8A45D', '#D4B87A'] });
    } catch {}
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060F1D]/80 backdrop-blur-sm"
          />

          {/* Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#0B1F3A] border-l border-[#C8A45D]/40 shadow-2xl p-6 overflow-y-auto text-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  Instant VIP Concierge Drawer
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white bg-white/5 p-1.5 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {t.bookingModal.title}
                  </h3>
                  <p className="text-xs text-gray-300 mb-4">
                    {t.bookingModal.subtitle}
                  </p>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      {t.bookingModal.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Lord / Lady / Mr. John Smith"
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      {t.bookingModal.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="vip@luxury.com"
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      {t.bookingModal.phone} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+82 10 1234 5678"
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        {t.bookingModal.guests}
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                      >
                        <option value="1 Guest">1 VIP Guest</option>
                        <option value="2 Guests">2 Guests (Couple)</option>
                        <option value="4 Golfers">4 Golfers (Flight)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                        Language
                      </label>
                      <select
                        value={form.language}
                        onChange={(e) => setForm({ ...form, language: e.target.value })}
                        className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                      >
                        <option value="Korean">Korean (한국어 전담)</option>
                        <option value="English">English</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      {t.bookingModal.notes}
                    </label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Special requests, golf handicap, helicopter transfers..."
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-colors flex items-center justify-center gap-1.5 mt-2"
                  >
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span>Submit Reservation</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-[#C8A45D] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-serif font-bold text-white">Request Received</h3>
                  <p className="text-xs text-gray-300">
                    {t.bookingModal.successMsg}
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-[#C8A45D] text-[#0B1F3A] font-bold px-6 py-2 rounded-lg text-xs uppercase tracking-wider mt-4"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <a href="https://wa.me/94770008899" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#25D366] hover:underline font-semibold">
                <PhoneCall className="w-3.5 h-3.5" />
                WhatsApp Direct
              </a>
              <span className="flex items-center gap-1 text-[#C8A45D]">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Confidential
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
