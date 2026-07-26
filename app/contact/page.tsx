'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelType: 'Golf & Luxury Tour',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 }, colors: ['#C9A227', '#E5C358'] });
    } catch {}
  };

  return (
    <div className="bg-[#081B33] text-white min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative py-28 bg-[#040E1B] overflow-hidden border-b border-[#C9A227]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs uppercase tracking-widest font-semibold">
            <Mail className="w-3.5 h-3.5" />
            VIP TRAVEL CONCIERGE
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            {language === 'kr' ? "스리랑카 럭셔리 1:1 견적 문의" : "Contact Our Luxury Travel Concierge"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {language === 'kr'
              ? "WhatsApp 실시간 VIP 상담 및 100% 맞춤형 프라이빗 제안서를 2시간 이내에 발송해 드립니다."
              : "Speak directly with our Executive Concierge or request a 100% custom itinerary proposal within 2 hours."}
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side (LG: 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0D2647] border border-[#C9A227]/30 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#C9A227]">
                Executive Headquarters
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Located in Colombo's premium financial district with regional offices in Kandy and Galle Fort.
              </p>

              <div className="space-y-4 text-xs text-gray-200 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Colombo VIP Office:</strong>
                    Level 34, World Trade Center, Echelon Square, Colombo 01, Sri Lanka
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C9A227] shrink-0" />
                  <div>
                    <strong className="text-white block">Direct VIP Hotlines:</strong>
                    +94 77 000 8899 (Global) / +82 10 9988 7766 (Korean)
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C9A227] shrink-0" />
                  <div>
                    <strong className="text-white block">Official Email:</strong>
                    concierge@lankaluxejourneys.com
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/40 rounded-2xl p-6 text-center space-y-3">
              <MessageCircle className="w-8 h-8 text-[#25D366] mx-auto" />
              <h4 className="text-base font-bold text-white font-serif">Instant WhatsApp VIP Concierge</h4>
              <p className="text-xs text-gray-300">
                {language === 'kr' ? "카카오톡 / WhatsApp을 통해 실시간 1:1 맞춤 상담이 가능합니다." : "Available 24/7 for instant chat & custom quote requests."}
              </p>
              <a
                href="https://wa.me/94770008899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Form Side (LG: 7 Cols) */}
          <div className="lg:col-span-7 bg-[#0D2647] border border-[#C9A227]/40 rounded-2xl p-8 shadow-2xl space-y-6">
            {!formSubmitted ? (
              <>
                <div className="space-y-1">
                  <span className="text-xs text-[#C9A227] font-semibold uppercase tracking-wider">Custom Proposal Request</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Send a Direct Inquiry</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#C9A227] uppercase tracking-wider mb-1 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lord / Lady / Mr. John Smith"
                      className="w-full bg-[#081B33] border border-[#C9A227]/30 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#C9A227] uppercase tracking-wider mb-1 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vip@domain.com"
                        className="w-full bg-[#081B33] border border-[#C9A227]/30 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#C9A227] uppercase tracking-wider mb-1 font-semibold">Phone / WhatsApp *</label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+82 10 1234 5678"
                        className="w-full bg-[#081B33] border border-[#C9A227]/30 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#C9A227] uppercase tracking-wider mb-1 font-semibold">Primary Travel Interest</label>
                    <select
                      value={formData.travelType}
                      onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
                      className="w-full bg-[#081B33] border border-[#C9A227]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                    >
                      <option value="Golf & Luxury Tour">PGA Golf & Luxury Tour Package</option>
                      <option value="Private Jet & Helicopter">Private Jet & Helicopter Charter</option>
                      <option value="Wildlife Safari & Glamping">Wild Coast Safari & Glamping</option>
                      <option value="Custom 100% Bespoke">100% Custom Bespoke Itinerary</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#C9A227] uppercase tracking-wider mb-1 font-semibold">Message & Special Requests</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify golf handicaps, preferred travel dates, guest count..."
                      className="w-full bg-[#081B33] border border-[#C9A227]/30 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#C9A227] mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-white">Inquiry Received</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Thank you. Your request has been assigned to our Executive Travel Concierge. We will reach out via WhatsApp & Email shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
