'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { RatingStars } from '@/components/admin/RatingStars';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2 } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  flag: string;
  avatar: string;
  commentEn: string;
  commentKr: string;
  rating: number;
  package: string;
  verified: boolean;
}

export default function AdminTestimonials() {
  const { testimonials, setTestimonials } = useAdmin();
  const [list, setList] = useState<TestimonialItem[]>(testimonials as TestimonialItem[]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const selectedItem = selectedIdx !== null ? list[selectedIdx] : null;

  const handleUpdateField = (field: keyof TestimonialItem, value: any) => {
    if (selectedIdx === null) return;
    const next = [...list];
    next[selectedIdx] = { ...next[selectedIdx], [field]: value };
    setList(next);
    setIsDirty(true);
  };

  const handleAddTestimonial = () => {
    const newItem: TestimonialItem = {
      name: 'New VIP Guest',
      role: '',
      flag: '🌐',
      avatar: '',
      commentEn: '',
      commentKr: '',
      rating: 5,
      package: '',
      verified: false
    };
    setList([...list, newItem]);
    setSelectedIdx(list.length);
    setIsDirty(true);
  };

  const handleRemoveTestimonial = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this testimonial permanently?")) {
      const next = list.filter((_, i) => i !== idx);
      setList(next);
      setSelectedIdx(null);
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    setTestimonials(list);
    setIsDirty(false);
    alert("Testimonials synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset testimonials back to factory defaults?")) {
      localStorage.removeItem('llj_testimonials');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Testimonials Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Manage feedback rating, flags, author titles, avatars, and custom review descriptions for Korean and Global VIPs.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddTestimonial}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[550px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Guest Testimonials ({list.length})
          </h3>
          {list.map((t, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 group ${
                selectedIdx === idx
                  ? 'bg-[#C8A45D]/10 border-[#C8A45D]'
                  : 'bg-[#122848]/30 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="space-y-1 overflow-hidden">
                <p className="text-xs font-semibold truncate text-white">{t.name} {t.flag}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium truncate">{t.role}</p>
              </div>
              <button
                type="button"
                onClick={(e) => handleRemoveTestimonial(idx, e)}
                className="text-gray-500 hover:text-red-400 p-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-[#0B1F3A] border border-[#C8A45D]/30 rounded-2xl p-6">
          {selectedItem ? (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4 flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-[#C8A45D]">
                  {selectedItem.name}
                </h3>
                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-gray-300">Verified Badge</label>
                  <input
                    type="checkbox"
                    checked={selectedItem.verified}
                    onChange={(e) => handleUpdateField('verified', e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 accent-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Name, Role, Flag */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    value={selectedItem.name}
                    onChange={(e) => handleUpdateField('name', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Guest Role & Location
                  </label>
                  <input
                    type="text"
                    value={selectedItem.role}
                    onChange={(e) => handleUpdateField('role', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Country Flag Emoji
                  </label>
                  <input
                    type="text"
                    value={selectedItem.flag}
                    onChange={(e) => handleUpdateField('flag', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Featured Tour Package Tag
                  </label>
                  <input
                    type="text"
                    value={selectedItem.package}
                    onChange={(e) => handleUpdateField('package', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <RatingStars
                  rating={selectedItem.rating}
                  onChange={(rating) => handleUpdateField('rating', rating)}
                />
              </div>

              {/* Description texts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Comment (English)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedItem.commentEn}
                    onChange={(e) => handleUpdateField('commentEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Comment (Korean)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedItem.commentKr}
                    onChange={(e) => handleUpdateField('commentKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedItem.avatar}
                label="Avatar Thumbnail URL"
                onChange={(url) => handleUpdateField('avatar', url)}
              />

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select a testimonial item from the left list to edit details.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
