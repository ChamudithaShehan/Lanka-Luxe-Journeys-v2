'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Experience } from '@/data/travelData';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2 } from 'lucide-react';

export default function AdminExperiences() {
  const { experiences, setExperiences } = useAdmin();
  const [exps, setExps] = useState<Experience[]>(experiences);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const handleUpdateField = (field: keyof Experience, value: any) => {
    if (!selectedExp) return;
    const updated = { ...selectedExp, [field]: value };
    setSelectedExp(updated);
    
    const next = exps.map(e => e.id === selectedExp.id ? updated : e);
    setExps(next);
    setIsDirty(true);
  };

  const handleAddExp = () => {
    const newId = `exp-${Date.now()}`;
    const newExp: Experience = {
      id: newId,
      titleEn: 'New Experience',
      titleKr: '신규 경험',
      category: '',
      image: '',
      descEn: '',
      descKr: ''
    };

    const next = [...exps, newExp];
    setExps(next);
    setSelectedExp(newExp);
    setIsDirty(true);
  };

  const handleRemoveExp = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this experience item?")) {
      const next = exps.filter(e => e.id !== id);
      setExps(next);
      if (selectedExp?.id === id) {
        setSelectedExp(null);
      }
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    setExperiences(exps);
    setIsDirty(false);
    alert("Experiences list synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset experiences to default factory values?")) {
      localStorage.removeItem('llj_experiences');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Experiences Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Edit titles, descriptors, categories, and cover visuals for featured experiences.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddExp}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Experience</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[550px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Experiences ({exps.length})
          </h3>
          {exps.map(e => (
            <div
              key={e.id}
              onClick={() => setSelectedExp(e)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 group ${
                selectedExp?.id === e.id
                  ? 'bg-[#C8A45D]/10 border-[#C8A45D]'
                  : 'bg-[#122848]/30 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="space-y-1 overflow-hidden">
                <p className="text-xs font-semibold truncate text-white">{e.titleEn}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium">{e.category}</p>
              </div>
              <button
                type="button"
                onClick={(event) => handleRemoveExp(e.id, event)}
                className="text-gray-500 hover:text-red-400 p-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-[#0B1F3A] border border-white/10 rounded-2xl p-6">
          {selectedExp ? (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-serif text-lg font-bold text-[#C8A45D]">
                  {selectedExp.titleEn}
                </h3>
                <span className="text-[10px] text-gray-400">ID: {selectedExp.id}</span>
              </div>

              {/* Title Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={selectedExp.titleEn}
                    onChange={(e) => handleUpdateField('titleEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Title (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedExp.titleKr}
                    onChange={(e) => handleUpdateField('titleKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={selectedExp.category}
                  onChange={(e) => handleUpdateField('category', e.target.value)}
                  className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>

              {/* Description texts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Description (En)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedExp.descEn}
                    onChange={(e) => handleUpdateField('descEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Description (Kr)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedExp.descKr}
                    onChange={(e) => handleUpdateField('descKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedExp.image}
                label="Cover Image URL"
                onChange={(url) => handleUpdateField('image', url)}
              />

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select an experience from the left sidebar list to edit its details.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
