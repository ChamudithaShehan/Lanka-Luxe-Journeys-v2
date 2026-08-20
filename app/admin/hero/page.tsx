'use client';

import React, { useState } from 'react';
import { useAdmin, HeroSlide } from '@/context/AdminContext';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Trash2, Plus, ArrowUp, ArrowDown } from 'lucide-react';

export default function AdminHeroSlides() {
  const { heroSlides, setHeroSlides } = useAdmin();
  const [slides, setSlides] = useState<HeroSlide[]>(heroSlides);
  const [isDirty, setIsDirty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSlideData, setNewSlideData] = useState<HeroSlide>({
    image: '',
    tag: '',
    title: 'New Slide',
    sub: ''
  });

  const handleUpdateSlide = (idx: number, field: keyof HeroSlide, value: string) => {
    const next = [...slides];
    next[idx] = { ...next[idx], [field]: value };
    setSlides(next);
    setIsDirty(true);
  };

  const handleOpenAddModal = () => {
    setNewSlideData({
      image: '',
      tag: '',
      title: 'New Slide',
      sub: ''
    });
    setIsModalOpen(true);
  };

  const handleSaveNewSlide = () => {
    setSlides([newSlideData, ...slides]);
    setIsDirty(true);
    setIsModalOpen(false);
  };

  const handleRemoveSlide = (idx: number) => {
    if (slides.length <= 1) {
      alert("At least one hero slide is required to display the homepage header.");
      return;
    }
    const next = slides.filter((_, i) => i !== idx);
    setSlides(next);
    setIsDirty(true);
  };

  const handleMoveSlide = (idx: number, direction: 'up' | 'down') => {
    if (direction === 'up' && idx === 0) return;
    if (direction === 'down' && idx === slides.length - 1) return;
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    const next = [...slides];
    const temp = next[idx];
    next[idx] = next[targetIdx];
    next[targetIdx] = temp;
    setSlides(next);
    setIsDirty(true);
  };

  const handleSave = () => {
    setHeroSlides(slides);
    setIsDirty(false);
    alert("Hero slideshow settings successfully synchronized!");
  };

  const handleReset = () => {
    if (confirm("Reset hero slides back to original factory defaults?")) {
      localStorage.removeItem('llj_hero_slides');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Homepage Hero Slides
          </h1>
          <p className="text-gray-400 text-xs">
            Modify backgrounds, overlay tags, main marketing slogans, and subtitles displayed on the main welcome slider.
          </p>
        </div>
        <button
          type="button"
          onClick={handleOpenAddModal}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Slide</span>
        </button>
      </div>

      <div className="space-y-6">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 space-y-4 relative overflow-hidden"
          >
            {/* Header controls inside slide panel */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="bg-[#C8A45D]/20 text-[#C8A45D] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Slide #{idx + 1}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleMoveSlide(idx, 'up')}
                  disabled={idx === 0}
                  className="text-gray-400 hover:text-[#C8A45D] disabled:opacity-30 p-1"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveSlide(idx, 'down')}
                  disabled={idx === slides.length - 1}
                  className="text-gray-400 hover:text-[#C8A45D] disabled:opacity-30 p-1"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveSlide(idx)}
                  className="text-red-400 hover:text-red-300 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Slide Tagline / Label
                  </label>
                  <input
                    type="text"
                    value={slide.tag}
                    onChange={(e) => handleUpdateSlide(idx, 'tag', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Main Display Title
                  </label>
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => handleUpdateSlide(idx, 'title', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <ImagePreview
                  url={slide.image}
                  label="Background Image URL"
                  onChange={(url) => handleUpdateSlide(idx, 'image', url)}
                />
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Slide Slogan Subtitle
                  </label>
                  <textarea
                    rows={2}
                    value={slide.sub}
                    onChange={(e) => handleUpdateSlide(idx, 'sub', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />

      {/* Add Slide Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1F3A]/80 backdrop-blur-sm p-4">
          <div className="bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-serif font-bold text-[#C8A45D]">Add New Hero Slide</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white p-1">
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      Slide Tagline / Label
                    </label>
                    <input
                      type="text"
                      value={newSlideData.tag}
                      onChange={(e) => setNewSlideData({ ...newSlideData, tag: e.target.value })}
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                      placeholder="e.g. EXCLUSIVE OFFER"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      Main Display Title
                    </label>
                    <input
                      type="text"
                      value={newSlideData.title}
                      onChange={(e) => setNewSlideData({ ...newSlideData, title: e.target.value })}
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <ImagePreview
                    url={newSlideData.image}
                    label="Background Image URL"
                    onChange={(url) => setNewSlideData({ ...newSlideData, image: url })}
                  />
                  <div>
                    <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      Slide Slogan Subtitle
                    </label>
                    <textarea
                      rows={2}
                      value={newSlideData.sub}
                      onChange={(e) => setNewSlideData({ ...newSlideData, sub: e.target.value })}
                      className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-white/10 flex justify-end gap-3 bg-[#122848]/30">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveNewSlide} 
                className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-6 py-2 rounded-lg text-xs uppercase tracking-wider transition-all"
              >
                Confirm Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
