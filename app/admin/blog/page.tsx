'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { BlogArticle } from '@/data/travelData';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2 } from 'lucide-react';

export default function AdminBlog() {
  const { blogArticles, setBlogArticles } = useAdmin();
  const [list, setList] = useState<BlogArticle[]>(blogArticles);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const selectedItem = selectedIdx !== null ? list[selectedIdx] : null;

  const handleUpdateField = (field: keyof BlogArticle, value: any) => {
    if (selectedIdx === null) return;
    const next = [...list];
    next[selectedIdx] = { ...next[selectedIdx], [field]: value };
    setList(next);
    setIsDirty(true);
  };

  const handleAddArticle = () => {
    const newItem: BlogArticle = {
      id: `article-${Date.now()}`,
      titleEn: 'New Blog Article',
      titleKr: '신규 블로그 아티클',
      category: '',
      date: '',
      author: '',
      image: '',
      readTime: '',
      excerptEn: '',
      excerptKr: '',
      contentEn: '',
      contentKr: ''
    };
    setList([...list, newItem]);
    setSelectedIdx(list.length);
    setIsDirty(true);
  };

  const handleRemoveArticle = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this blog article permanently?")) {
      const next = list.filter((_, i) => i !== idx);
      setList(next);
      setSelectedIdx(null);
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    setBlogArticles(list);
    setIsDirty(false);
    alert("Blog database synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset blog entries back to original defaults?")) {
      localStorage.removeItem('llj_blog');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Blog Articles Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Publish, edit excerpts, dates, reading times, authors, and full localization markdown contents.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddArticle}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Blog Article</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[600px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Journal Database ({list.length})
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
                <p className="text-xs font-semibold truncate text-white">{t.titleEn}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium truncate">{t.date} • {t.author}</p>
              </div>
              <button
                type="button"
                onClick={(e) => handleRemoveArticle(idx, e)}
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
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-serif text-lg font-bold text-[#C8A45D]">
                  {selectedItem.titleEn}
                </h3>
                <span className="text-[10px] text-gray-400">ID: {selectedItem.id}</span>
              </div>

              {/* Title Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={selectedItem.titleEn}
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
                    value={selectedItem.titleKr}
                    onChange={(e) => handleUpdateField('titleKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Meta metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={selectedItem.category}
                    onChange={(e) => handleUpdateField('category', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Publish Date
                  </label>
                  <input
                    type="text"
                    value={selectedItem.date}
                    onChange={(e) => handleUpdateField('date', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={selectedItem.author}
                    onChange={(e) => handleUpdateField('author', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Read time metrics
                  </label>
                  <input
                    type="text"
                    value={selectedItem.readTime}
                    onChange={(e) => handleUpdateField('readTime', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Excerpts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Short Excerpt (English)
                  </label>
                  <textarea
                    rows={2}
                    value={selectedItem.excerptEn}
                    onChange={(e) => handleUpdateField('excerptEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Short Excerpt (Korean)
                  </label>
                  <textarea
                    rows={2}
                    value={selectedItem.excerptKr}
                    onChange={(e) => handleUpdateField('excerptKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Core Content editors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Full Content (English)
                  </label>
                  <textarea
                    rows={6}
                    value={selectedItem.contentEn}
                    onChange={(e) => handleUpdateField('contentEn', e.target.value)}
                    className="w-full bg-[#122848] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D] font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Full Content (Korean)
                  </label>
                  <textarea
                    rows={6}
                    value={selectedItem.contentKr}
                    onChange={(e) => handleUpdateField('contentKr', e.target.value)}
                    className="w-full bg-[#122848] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D] font-mono"
                  />
                </div>
              </div>

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedItem.image}
                label="Header Visual Photo URL"
                onChange={(url) => handleUpdateField('image', url)}
              />

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select a blog article from the database list to edit details.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
