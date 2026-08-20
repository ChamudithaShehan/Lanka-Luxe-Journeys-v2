'use client';

import React, { useState } from 'react';
import { useAdmin, SiteSettings } from '@/context/AdminContext';
import { ListEditor } from '@/components/admin/ListEditor';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Save, RefreshCw } from 'lucide-react';

export default function AdminSettings() {
  const { siteSettings, setSiteSettings } = useAdmin();
  const [settings, setSettings] = useState<SiteSettings>(siteSettings);
  const [isDirty, setIsDirty] = useState(false);

  const handleUpdateField = (field: keyof SiteSettings, value: any) => {
    setSettings({ ...settings, [field]: value });
    setIsDirty(true);
  };

  const handleUpdateStat = (key: keyof SiteSettings['stats'], value: string) => {
    setSettings({
      ...settings,
      stats: {
        ...settings.stats,
        [key]: value
      }
    });
    setIsDirty(true);
  };

  const handleSave = () => {
    setSiteSettings(settings);
    setIsDirty(false);
    
    // Inject dynamic CSS variable configuration for brand colors
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--gold', settings.primaryGoldColor);
      document.documentElement.style.setProperty('--bg-dark', settings.primaryNavyColor);
    }

    alert("Site configuration settings synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset configurations back to defaults?")) {
      localStorage.removeItem('llj_settings');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Site Global Settings
          </h1>
          <p className="text-gray-400 text-xs">
            Manage contact widgets, credentials, color palettes, default booking forms, and metadata values.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Info & Credentials */}
        <div className="space-y-6">
          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#C8A45D] border-b border-white/5 pb-2">
              Communication Hotlines
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  WhatsApp Contact Number
                </label>
                <input
                  type="text"
                  value={settings.whatsappNumber}
                  onChange={(e) => handleUpdateField('whatsappNumber', e.target.value)}
                  className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              
              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  KakaoTalk Link URL
                </label>
                <input
                  type="text"
                  value={settings.kakaoLink}
                  onChange={(e) => handleUpdateField('kakaoLink', e.target.value)}
                  className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                Global Concierge Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleUpdateField('email', e.target.value)}
                className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
          </div>

          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#C8A45D] border-b border-white/5 pb-2">
              Credibility Credentials
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  Google Reviews Count
                </label>
                <input
                  type="text"
                  value={settings.googleReviewCount}
                  onChange={(e) => handleUpdateField('googleReviewCount', e.target.value)}
                  className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  Google Score
                </label>
                <input
                  type="text"
                  value={settings.googleReviewScore}
                  onChange={(e) => handleUpdateField('googleReviewScore', e.target.value)}
                  className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  TripAdvisor Score
                </label>
                <input
                  type="text"
                  value={settings.tripAdvisorScore}
                  onChange={(e) => handleUpdateField('tripAdvisorScore', e.target.value)}
                  className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                SLTDA Licence Registration
              </label>
              <input
                type="text"
                value={settings.sltdaLicence}
                onChange={(e) => handleUpdateField('sltdaLicence', e.target.value)}
                className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
          </div>

          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#C8A45D] border-b border-white/5 pb-2">
              Color Token Custom Overrides
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  Primary Gold Accent Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={settings.primaryGoldColor}
                    onChange={(e) => handleUpdateField('primaryGoldColor', e.target.value)}
                    className="w-8 h-8 rounded border-none cursor-pointer bg-transparent"
                  />
                  <input
                    type="text"
                    value={settings.primaryGoldColor}
                    onChange={(e) => handleUpdateField('primaryGoldColor', e.target.value)}
                    className="flex-1 bg-[#122848] border border-white/10 rounded-lg px-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  Primary Deep Navy Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={settings.primaryNavyColor}
                    onChange={(e) => handleUpdateField('primaryNavyColor', e.target.value)}
                    className="w-8 h-8 rounded border-none cursor-pointer bg-transparent"
                  />
                  <input
                    type="text"
                    value={settings.primaryNavyColor}
                    onChange={(e) => handleUpdateField('primaryNavyColor', e.target.value)}
                    className="flex-1 bg-[#122848] border border-white/10 rounded-lg px-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Core Booking */}
        <div className="space-y-6">
          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#C8A45D] border-b border-white/5 pb-2">
              API Integrations
            </h3>
            
            <div>
              <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                ImgBB API Key (For Image Uploads)
              </label>
              <input
                type="text"
                value={settings.imgbbApiKey}
                onChange={(e) => handleUpdateField('imgbbApiKey', e.target.value)}
                placeholder="Enter ImgBB API key..."
                className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
              />
              <p className="text-[10px] text-gray-500 mt-1">Get a free key from <a href="https://api.imgbb.com/" target="_blank" rel="noreferrer" className="text-[#C8A45D] hover:underline">api.imgbb.com</a> to enable direct image uploads in the dashboard.</p>
            </div>
          </div>

          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#C8A45D] border-b border-white/5 pb-2">
              Stats Counter Metrics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Happy Guests
                </label>
                <input
                  type="text"
                  value={settings.stats.guests}
                  onChange={(e) => handleUpdateStat('guests', e.target.value)}
                  className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Luxury Experiences
                </label>
                <input
                  type="text"
                  value={settings.stats.experiences}
                  onChange={(e) => handleUpdateStat('experiences', e.target.value)}
                  className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Handcrafted Regions
                </label>
                <input
                  type="text"
                  value={settings.stats.destinations}
                  onChange={(e) => handleUpdateStat('destinations', e.target.value)}
                  className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Years of Excellence
                </label>
                <input
                  type="text"
                  value={settings.stats.years}
                  onChange={(e) => handleUpdateStat('years', e.target.value)}
                  className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Satisfaction Rate
                </label>
                <input
                  type="text"
                  value={settings.stats.satisfaction}
                  onChange={(e) => handleUpdateStat('satisfaction', e.target.value)}
                  className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Golf Travelers
                </label>
                <input
                  type="text"
                  value={settings.stats.golfGuests}
                  onChange={(e) => handleUpdateStat('golfGuests', e.target.value)}
                  className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#C8A45D] border-b border-white/5 pb-2">
              SEO Engine Metadata
            </h3>
            
            <div>
              <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                SEO Title Template
              </label>
              <input
                type="text"
                value={settings.seoTitle}
                onChange={(e) => handleUpdateField('seoTitle', e.target.value)}
                className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                SEO Description
              </label>
              <textarea
                rows={3}
                value={settings.seoDescription}
                onChange={(e) => handleUpdateField('seoDescription', e.target.value)}
                className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none"
              />
            </div>

            <ListEditor
              label="SEO Keywords Meta Tags"
              items={settings.seoKeywords}
              onChange={(items) => handleUpdateField('seoKeywords', items)}
            />
          </div>

          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6">
            <ListEditor
              label="Booking Drawer Form Packages Options"
              items={settings.bookingPackages}
              onChange={(items) => handleUpdateField('bookingPackages', items)}
            />
          </div>
        </div>

      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
