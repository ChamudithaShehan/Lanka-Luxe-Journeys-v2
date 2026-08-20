'use client';

import React from 'react';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';
import {
  Globe,
  Package,
  Sparkles,
  MapPin,
  Hotel,
  Star,
  MessageSquare,
  Users,
  BookOpen,
  Settings,
  Type,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function AdminOverview() {
  const {
    heroSlides,
    tourPackages,
    golfCourses,
    destinations,
    blogArticles,
    testimonials,
    teamMembers,
    experiences,
    siteSettings
  } = useAdmin();

  const cards = [
    { label: 'Hero Slides', count: heroSlides.length, icon: Globe, href: '/admin/hero', color: 'text-blue-400' },
    { label: 'Tour Packages', count: tourPackages.length, icon: Package, href: '/admin/tours', color: 'text-amber-400' },
    { label: 'Golf Courses', count: golfCourses.length, icon: Sparkles, href: '/admin/golf', color: 'text-emerald-400' },
    { label: 'Destinations', count: destinations.length, icon: MapPin, href: '/admin/destinations', color: 'text-red-400' },
    { label: 'Luxury Hotels', count: 12, icon: Hotel, href: '/admin/hotels', color: 'text-indigo-400' },
    { label: 'Experiences', count: experiences.length, icon: Star, href: '/admin/experiences', color: 'text-yellow-400' },
    { label: 'Testimonials', count: testimonials.length, icon: MessageSquare, href: '/admin/testimonials', color: 'text-teal-400' },
    { label: 'Team Members', count: teamMembers.length, icon: Users, href: '/admin/team', color: 'text-purple-400' },
    { label: 'Blog Articles', count: blogArticles.length, icon: BookOpen, href: '/admin/blog', color: 'text-pink-400' },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Dashboard Overview
          </h1>
          <p className="text-gray-400 text-xs">
            Manage your high-end bespoke Sri Lankan DMC content and configurations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-[#0B1F3A] border border-white/10 hover:border-[#C8A45D]/40 rounded-2xl p-6 transition-all hover:scale-[1.02] shadow-lg flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  {card.label}
                </span>
                <p className="text-3xl font-serif font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                  {card.count}
                </p>
              </div>
              <div className={`p-3.5 rounded-xl bg-white/5 ${card.color} group-hover:bg-[#C8A45D]/10 transition-colors`}>
                <Icon className="w-6 h-6" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Config / Quick Links Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <Settings className="w-5 h-5 text-[#C8A45D]" />
            <span>Site Meta Configuration</span>
          </h3>
          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">WhatsApp Hot Line:</span>
              <span className="text-white font-semibold">{siteSettings.whatsappNumber}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">SLTDA License Number:</span>
              <span className="text-white font-semibold">{siteSettings.sltdaLicence}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">Global Email Contact:</span>
              <span className="text-white font-semibold">{siteSettings.email}</span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-gray-400">Google Reviews Rating:</span>
              <span className="text-white font-semibold">{siteSettings.googleReviewScore} ({siteSettings.googleReviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <ShieldCheck className="w-5 h-5 text-[#C8A45D]" />
            <span>System Status</span>
          </h3>
          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">Active Localization:</span>
              <span className="text-white font-semibold">Bilingual (EN / KR)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">Data Storage Engine:</span>
              <span className="text-white font-semibold">Web Standard LocalStorage</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">Deployment State:</span>
              <span className="text-green-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-ping" />
                Live Preview Sync Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
