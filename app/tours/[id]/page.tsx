'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Compass, Clock, MapPin, Hotel, CheckCircle2, XCircle, Calendar, ShieldCheck, ArrowRight, Plane, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TOUR_PACKAGES } from '@/data/travelData';
import { BookingModal } from '@/components/ui/BookingModal';

export default function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<number>(1);

  const pkg = TOUR_PACKAGES.find((p) => p.id === resolvedParams.id) || TOUR_PACKAGES[0];

  return (
    <div className="bg-[#081B33] text-white min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative h-[65vh] overflow-hidden border-b border-[#C9A227]/30">
        <Image
          src={pkg.image}
          alt={pkg.titleEn}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/60 to-[#040E1B]/70" />

        <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-[#C9A227] text-[#081B33] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            {pkg.category} Package
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3">
            {language === 'kr' ? pkg.titleKr : pkg.titleEn}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-200 mt-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#C9A227]" />
              {pkg.duration}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              {pkg.locations.join(' • ')}
            </span>
            <span className="text-[#C9A227] font-serif font-bold text-xl">
              From ${pkg.priceUSD.toLocaleString()} USD / Guest
            </span>
          </div>
        </div>
      </section>

      {/* Content & Sticky Sidebar Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (LG: 8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white border-b border-[#C9A227]/30 pb-3">
                Experience Overview
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed text-base">
                {language === 'kr' ? pkg.descriptionKr : pkg.descriptionEn}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">Visual Gallery</h3>
              <div className="grid grid-cols-3 gap-4">
                {pkg.gallery.map((img, idx) => (
                  <div key={idx} className="relative h-40 rounded-xl overflow-hidden border border-[#C9A227]/30">
                    <Image src={img} alt="Gallery" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-[#0D2647] border border-[#C9A227]/30 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#C9A227] flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                VIP Signature Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-200">
                {(language === 'kr' ? pkg.highlightsKr : pkg.highlightsEn).map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day by Day Itinerary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white border-b border-[#C9A227]/30 pb-3">
                Day-by-Day Bespoke Itinerary
              </h3>
              <div className="space-y-3">
                {(language === 'kr' ? pkg.itineraryKr : pkg.itineraryEn).map((item) => {
                  const isOpen = activeDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className="bg-[#0D2647] border border-[#C9A227]/25 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setActiveDay(isOpen ? 0 : item.day)}
                        className="w-full p-4 text-left flex items-center justify-between font-serif font-bold text-sm text-white hover:text-[#C9A227]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#C9A227] text-[#081B33] font-sans font-bold text-xs flex items-center justify-center">
                            D{item.day}
                          </span>
                          <span>{item.title}</span>
                        </div>
                        <span className="text-[#C9A227] font-sans text-xs">{isOpen ? '-' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 pt-1 text-xs text-gray-300 border-t border-white/5 leading-relaxed">
                          {item.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#0D2647] border border-[#C9A227]/30 rounded-xl p-5 space-y-3">
                <h4 className="text-sm font-bold text-[#C9A227] font-serif uppercase tracking-wider">
                  What's Included
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {(language === 'kr' ? pkg.includedKr : pkg.includedEn).map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0D2647] border border-white/10 rounded-xl p-5 space-y-3">
                <h4 className="text-sm font-bold text-gray-400 font-serif uppercase tracking-wider">
                  Exclusions
                </h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-gray-500" />
                    <span>International Flights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-gray-500" />
                    <span>Personal Souvenirs & Alcoholic Spirits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Booking Sidebar (LG: 4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#0D2647] border border-[#C9A227]/40 rounded-2xl p-6 shadow-2xl space-y-6">
              <div>
                <span className="text-xs text-[#C9A227] uppercase tracking-wider font-semibold">
                  Reserve This Package
                </span>
                <div className="text-3xl font-serif font-bold text-white mt-1">
                  ${pkg.priceUSD.toLocaleString()} <span className="text-xs font-sans text-gray-400 font-normal">/ guest</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-300 border-t border-b border-white/10 py-4">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <strong className="text-white">{pkg.duration}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Transport:</span>
                  <strong className="text-[#C9A227]">Helicopter / Mercedes</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hotels:</span>
                  <strong className="text-white">Relais & Châteaux 5★</strong>
                </div>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-[#C9A227] hover:bg-[#E5C358] text-[#081B33] font-bold py-3.5 rounded-xl uppercase tracking-wider text-xs shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Book This Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>1:1 Korean & English Travel Concierge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={pkg.titleEn}
      />
    </div>
  );
}
