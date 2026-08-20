'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { TourPackage } from '@/data/travelData';
import { ListEditor } from '@/components/admin/ListEditor';
import { ItineraryEditor } from '@/components/admin/ItineraryEditor';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2, Edit, Check } from 'lucide-react';

export default function AdminTours() {
  const { tourPackages, setTourPackages } = useAdmin();
  const [tours, setTours] = useState<TourPackage[]>(tourPackages);
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const handleSelectTour = (tour: TourPackage) => {
    setSelectedTour(tour);
  };

  const handleUpdateField = (field: keyof TourPackage, value: any) => {
    if (!selectedTour) return;
    const updated = { ...selectedTour, [field]: value };
    setSelectedTour(updated);
    
    const next = tours.map(t => t.id === selectedTour.id ? updated : t);
    setTours(next);
    setIsDirty(true);
  };

  const handleAddTour = () => {
    const newId = `custom-tour-${Date.now()}`;
    const newTour: TourPackage = {
      id: newId,
      titleEn: 'New Tour Package',
      titleKr: '신규 투어 패키지',
      category: 'Luxury',
      duration: '',
      priceUSD: 0,
      image: '',
      gallery: [],
      locations: [],
      hotels: [],
      descriptionEn: '',
      descriptionKr: '',
      highlightsEn: [],
      highlightsKr: [],
      itineraryEn: [],
      itineraryKr: [],
      includedEn: [],
      includedKr: []
    };

    const next = [...tours, newTour];
    setTours(next);
    setSelectedTour(newTour);
    setIsDirty(true);
  };

  const handleRemoveTour = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this tour package permanently from local settings?")) {
      const next = tours.filter(t => t.id !== id);
      setTours(next);
      if (selectedTour?.id === id) {
        setSelectedTour(null);
      }
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    setTourPackages(tours);
    setIsDirty(false);
    alert("Tour Packages synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset all tour packages back to defaults?")) {
      localStorage.removeItem('llj_tours');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Tour Packages Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Manage pricing, content, highlight milestones, itineraries, and inclusions for the 9 premium tours.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddTour}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Custom Tour</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column list */}
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[700px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Available Packages ({tours.length})
          </h3>
          {tours.map(t => (
            <div
              key={t.id}
              onClick={() => handleSelectTour(t)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 group ${
                selectedTour?.id === t.id
                  ? 'bg-[#C8A45D]/10 border-[#C8A45D]'
                  : 'bg-[#122848]/30 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="space-y-1 overflow-hidden">
                <p className="text-xs font-semibold truncate text-white">{t.titleEn}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium">{t.duration} • ${t.priceUSD}</p>
              </div>
              <button
                type="button"
                onClick={(e) => handleRemoveTour(t.id, e)}
                className="text-gray-500 hover:text-red-400 p-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Right side form */}
        <div className="lg:col-span-2 bg-[#0B1F3A] border border-white/10 rounded-2xl p-6">
          {selectedTour ? (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-serif text-lg font-bold text-[#C8A45D]">
                  Editing: {selectedTour.titleEn}
                </h3>
                <span className="text-[10px] text-gray-400">ID: {selectedTour.id}</span>
              </div>

              {/* Title inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={selectedTour.titleEn}
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
                    value={selectedTour.titleKr}
                    onChange={(e) => handleUpdateField('titleKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Meta information */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={selectedTour.category}
                    onChange={(e) => handleUpdateField('category', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    <option value="Luxury">Luxury</option>
                    <option value="Golf">Golf</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="Culture">Culture</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Family">Family</option>
                    <option value="Ayurveda">Ayurveda</option>
                    <option value="Beach">Beach</option>
                    <option value="TailorMade">TailorMade</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Duration text
                  </label>
                  <input
                    type="text"
                    value={selectedTour.duration}
                    onChange={(e) => handleUpdateField('duration', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    value={selectedTour.priceUSD}
                    onChange={(e) => handleUpdateField('priceUSD', Number(e.target.value))}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Ideal For (En)
                  </label>
                  <input
                    type="text"
                    value={selectedTour.idealForEn || ''}
                    onChange={(e) => handleUpdateField('idealForEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Description texts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Description (En)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedTour.descriptionEn}
                    onChange={(e) => handleUpdateField('descriptionEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Description (Kr)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedTour.descriptionKr}
                    onChange={(e) => handleUpdateField('descriptionKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedTour.image}
                label="Cover Image URL"
                onChange={(url) => handleUpdateField('image', url)}
              />

              {/* Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ListEditor
                  label="Locations Included"
                  items={selectedTour.locations}
                  onChange={(items) => handleUpdateField('locations', items)}
                />
                <ListEditor
                  label="Luxury Hotels Featured"
                  items={selectedTour.hotels}
                  onChange={(items) => handleUpdateField('hotels', items)}
                />
              </div>

              {/* Lists Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ListEditor
                  label="Highlights (English)"
                  items={selectedTour.highlightsEn}
                  onChange={(items) => handleUpdateField('highlightsEn', items)}
                />
                <ListEditor
                  label="Highlights (Korean)"
                  items={selectedTour.highlightsKr}
                  onChange={(items) => handleUpdateField('highlightsKr', items)}
                />
              </div>

              {/* Lists Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ListEditor
                  label="Inclusions (English)"
                  items={selectedTour.includedEn}
                  onChange={(items) => handleUpdateField('includedEn', items)}
                />
                <ListEditor
                  label="Inclusions (Korean)"
                  items={selectedTour.includedKr}
                  onChange={(items) => handleUpdateField('includedKr', items)}
                />
              </div>

              {/* Itineraries */}
              <ItineraryEditor
                itineraryEn={selectedTour.itineraryEn}
                itineraryKr={selectedTour.itineraryKr}
                onChangeEn={(itin) => handleUpdateField('itineraryEn', itin)}
                onChangeKr={(itin) => handleUpdateField('itineraryKr', itin)}
              />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select a tour package from the left sidebar list to edit its details.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
