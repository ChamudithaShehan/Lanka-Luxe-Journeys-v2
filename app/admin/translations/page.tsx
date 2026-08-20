'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { translations } from '@/data/translations';

type TranslationSection = keyof typeof translations.en;

export default function AdminTranslations() {
  const { siteTranslations, setSiteTranslations } = useAdmin();
  const [trans, setTrans] = useState<typeof translations>(siteTranslations);
  const [activeLang, setActiveLang] = useState<'en' | 'kr'>('en');
  const [activeSection, setActiveSection] = useState<TranslationSection>('nav');
  const [isDirty, setIsDirty] = useState(false);

  const sections: TranslationSection[] = [
    'nav',
    'hero',
    'stats',
    'whyUs',
    'hotelsShowcase',
    'videoStories',
    'koreanSection',
    'destinations360',
    'photoGallery',
    'awards',
    'experiences',
    'golfSection'
  ];

  const handleUpdateString = (section: TranslationSection, key: string, value: string) => {
    const next = { ...trans };
    if (activeLang === 'en') {
      next.en = {
        ...next.en,
        [section]: {
          ...(next.en[section] as any),
          [key]: value
        }
      };
    } else {
      next.kr = {
        ...next.kr,
        [section]: {
          ...(next.kr[section] as any),
          [key]: value
        }
      };
    }
    setTrans(next);
    setIsDirty(true);
  };

  const handleSave = () => {
    setSiteTranslations(trans);
    setIsDirty(false);
    alert("Language translations saved successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset translations back to defaults?")) {
      localStorage.removeItem('llj_translations');
      window.location.reload();
    }
  };

  // Get active text keys for selected section
  const sectionKeys = Object.keys(translations.en[activeSection] || {});

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Translations Editor
          </h1>
          <p className="text-gray-400 text-xs">
            Edit bilingual localization configurations dynamically across all sections.
          </p>
        </div>
        
        {/* Lang Selector */}
        <div className="flex items-center bg-[#122848] border border-[#C8A45D]/40 rounded-full p-1 text-xs shrink-0">
          <button
            onClick={() => setActiveLang('en')}
            className={`px-4 py-1.5 rounded-full font-bold transition-all ${
              activeLang === 'en' ? 'bg-[#C8A45D] text-[#0B1F3A]' : 'text-gray-300'
            }`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => setActiveLang('kr')}
            className={`px-4 py-1.5 rounded-full font-bold transition-all ${
              activeLang === 'kr' ? 'bg-[#C8A45D] text-[#0B1F3A]' : 'text-gray-300'
            }`}
          >
            🇰🇷 한국어 (Korean)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar section list */}
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[600px] overflow-y-auto space-y-1">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Translation Sections
          </h3>
          {sections.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => setActiveSection(s)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeSection === s
                  ? 'bg-[#C8A45D]/10 text-[#C8A45D] border border-[#C8A45D]/30'
                  : 'text-gray-300 hover:text-white border border-transparent hover:bg-white/5'
              }`}
            >
              {s.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="lg:col-span-3 bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4 h-[600px] overflow-y-auto">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] border-b border-white/5 pb-2">
            Section: {activeSection} ({activeLang === 'en' ? 'English' : 'Korean'})
          </h3>

          <div className="space-y-4">
            {sectionKeys.map(key => {
              const currentVal = activeLang === 'en' 
                ? (trans.en[activeSection] as any)?.[key] || ''
                : (trans.kr[activeSection] as any)?.[key] || '';

              const fallbackVal = activeLang === 'en'
                ? (translations.en[activeSection] as any)?.[key] || ''
                : (translations.kr[activeSection] as any)?.[key] || '';

              return (
                <div key={key} className="space-y-1 bg-[#122848]/20 border border-white/5 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-semibold text-[#C8A45D] uppercase tracking-wider">
                      {key}
                    </label>
                    <span className="text-[9px] text-gray-500 font-mono">Original: &quot;{fallbackVal}&quot;</span>
                  </div>
                  <input
                    type="text"
                    value={currentVal}
                    onChange={(e) => handleUpdateString(activeSection, key, e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
