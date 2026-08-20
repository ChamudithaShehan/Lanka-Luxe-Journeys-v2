'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { GolfCourse } from '@/data/travelData';
import { ListEditor } from '@/components/admin/ListEditor';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { RatingStars } from '@/components/admin/RatingStars';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2 } from 'lucide-react';

export default function AdminGolf() {
  const { golfCourses, setGolfCourses } = useAdmin();
  const [courses, setCourses] = useState<GolfCourse[]>(golfCourses);
  const [selectedCourse, setSelectedCourse] = useState<GolfCourse | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const handleUpdateField = (field: keyof GolfCourse, value: any) => {
    if (!selectedCourse) return;
    const updated = { ...selectedCourse, [field]: value };
    setSelectedCourse(updated);
    
    const next = courses.map(c => c.id === selectedCourse.id ? updated : c);
    setCourses(next);
    setIsDirty(true);
  };

  const handleAddCourse = () => {
    const newId = `golf-${Date.now()}`;
    const newCourse: GolfCourse = {
      id: newId,
      nameEn: 'New Golf Course',
      nameKr: '신규 골프 코스',
      location: '',
      holes: 18,
      par: 72,
      established: 2026,
      designer: '',
      image: '',
      hotel: '',
      duration: '',
      greenFeeUSD: 0,
      difficultyEn: '',
      difficultyKr: '',
      rating: 5.0,
      recommended: false,
      overviewEn: '',
      overviewKr: '',
      featuresEn: [],
      featuresKr: []
    };

    const next = [...courses, newCourse];
    setCourses(next);
    setSelectedCourse(newCourse);
    setIsDirty(true);
  };

  const handleRemoveCourse = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this golf course from local settings?")) {
      const next = courses.filter(c => c.id !== id);
      setCourses(next);
      if (selectedCourse?.id === id) {
        setSelectedCourse(null);
      }
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    setGolfCourses(courses);
    setIsDirty(false);
    alert("Golf Course configurations successfully updated!");
  };

  const handleReset = () => {
    if (confirm("Reset golf courses to initial defaults?")) {
      localStorage.removeItem('llj_golf');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Golf Courses Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Configure difficulty levels, designers, green fees, ratings, and features for PGA-caliber golf courses.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddCourse}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Golf Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[600px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Golf Courses ({courses.length})
          </h3>
          {courses.map(c => (
            <div
              key={c.id}
              onClick={() => setSelectedCourse(c)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 group ${
                selectedCourse?.id === c.id
                  ? 'bg-[#C8A45D]/10 border-[#C8A45D]'
                  : 'bg-[#122848]/30 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="space-y-1 overflow-hidden">
                <p className="text-xs font-semibold truncate text-white">{c.nameEn}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium">{c.location} • Green Fee: ${c.greenFeeUSD}</p>
              </div>
              <button
                type="button"
                onClick={(e) => handleRemoveCourse(c.id, e)}
                className="text-gray-500 hover:text-red-400 p-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-[#0B1F3A] border border-white/10 rounded-2xl p-6">
          {selectedCourse ? (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#C8A45D]">
                    {selectedCourse.nameEn}
                  </h3>
                  <span className="text-[10px] text-gray-400">ID: {selectedCourse.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-gray-300">Recommended Badge</label>
                  <input
                    type="checkbox"
                    checked={selectedCourse.recommended || false}
                    onChange={(e) => handleUpdateField('recommended', e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 accent-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Title & Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Course Name (English)
                  </label>
                  <input
                    type="text"
                    value={selectedCourse.nameEn}
                    onChange={(e) => handleUpdateField('nameEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Course Name (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedCourse.nameKr}
                    onChange={(e) => handleUpdateField('nameKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={selectedCourse.location}
                    onChange={(e) => handleUpdateField('location', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Established Year
                  </label>
                  <input
                    type="number"
                    value={selectedCourse.established}
                    onChange={(e) => handleUpdateField('established', Number(e.target.value))}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Holes count
                  </label>
                  <input
                    type="number"
                    value={selectedCourse.holes}
                    onChange={(e) => handleUpdateField('holes', Number(e.target.value))}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Par Rating
                  </label>
                  <input
                    type="number"
                    value={selectedCourse.par}
                    onChange={(e) => handleUpdateField('par', Number(e.target.value))}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Design Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Designer
                  </label>
                  <input
                    type="text"
                    value={selectedCourse.designer}
                    onChange={(e) => handleUpdateField('designer', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Green Fee (USD)
                  </label>
                  <input
                    type="number"
                    value={selectedCourse.greenFeeUSD}
                    onChange={(e) => handleUpdateField('greenFeeUSD', Number(e.target.value))}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Difficulty (En)
                  </label>
                  <input
                    type="text"
                    value={selectedCourse.difficultyEn}
                    onChange={(e) => handleUpdateField('difficultyEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Difficulty (Kr)
                  </label>
                  <input
                    type="text"
                    value={selectedCourse.difficultyKr}
                    onChange={(e) => handleUpdateField('difficultyKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Overview text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Overview (En)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedCourse.overviewEn}
                    onChange={(e) => handleUpdateField('overviewEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Overview (Kr)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedCourse.overviewKr}
                    onChange={(e) => handleUpdateField('overviewKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Rating */}
              <RatingStars
                rating={selectedCourse.rating}
                onChange={(rating) => handleUpdateField('rating', rating)}
              />

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedCourse.image}
                label="Cover Image URL"
                onChange={(url) => handleUpdateField('image', url)}
              />

              {/* Lists Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ListEditor
                  label="Course Features (English)"
                  items={selectedCourse.featuresEn}
                  onChange={(items) => handleUpdateField('featuresEn', items)}
                />
                <ListEditor
                  label="Course Features (Korean)"
                  items={selectedCourse.featuresKr}
                  onChange={(items) => handleUpdateField('featuresKr', items)}
                />
              </div>

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select a golf course package from the left sidebar list to edit its details.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
