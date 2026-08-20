'use client';

import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { LuxuryHotel } from '@/data/travelData';
import { ListEditor } from '@/components/admin/ListEditor';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { RatingStars } from '@/components/admin/RatingStars';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2 } from 'lucide-react';

export default function AdminHotels() {
  const { tourPackages, setTourPackages } = useAdmin();
  const [hotels, setHotels] = useState<LuxuryHotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<LuxuryHotel | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  // Since LUXURY_HOTELS isn't stored separately but used via mock/data files, we will hook it up in AdminContext.
  // We can load it dynamically or read/write to localStorage directly, but to keep things completely synced,
  // we will add a storage handler in localStorage 'llj_hotels' and fallback to travelData's list.
  useEffect(() => {
    try {
      const savedHotels = localStorage.getItem('llj_hotels');
      if (savedHotels) {
        setHotels(JSON.parse(savedHotels));
      } else {
        // Fallback import
        const { LUXURY_HOTELS } = require('@/data/travelData');
        setHotels(LUXURY_HOTELS);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleUpdateField = (field: keyof LuxuryHotel, value: any) => {
    if (!selectedHotel) return;
    const updated = { ...selectedHotel, [field]: value };
    setSelectedHotel(updated);
    
    const next = hotels.map(h => h.id === selectedHotel.id ? updated : h);
    setHotels(next);
    setIsDirty(true);
  };

  const handleAddHotel = () => {
    const newId = `hotel-${Date.now()}`;
    const newHotel: LuxuryHotel = {
      id: newId,
      nameEn: 'New Luxury Hotel',
      nameKr: '신규 럭셔리 호텔',
      category: 'Luxury Resorts',
      locationEn: '',
      locationKr: '',
      rating: 5.0,
      image: '',
      gallery: [],
      facilitiesEn: [],
      facilitiesKr: [],
      pricePerNightUSD: 0,
      descEn: '',
      descKr: ''
    };

    const next = [...hotels, newHotel];
    setHotels(next);
    setSelectedHotel(newHotel);
    setIsDirty(true);
  };

  const handleRemoveHotel = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this hotel listing from local settings?")) {
      const next = hotels.filter(h => h.id !== id);
      setHotels(next);
      if (selectedHotel?.id === id) {
        setSelectedHotel(null);
      }
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    localStorage.setItem('llj_hotels', JSON.stringify(hotels));
    // Dispatch custom event to notify all components reading from direct travelData mock
    window.dispatchEvent(new Event('llj_hotels_updated'));
    setIsDirty(false);
    alert("Luxury Hotels lists synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset hotel configurations back to defaults?")) {
      localStorage.removeItem('llj_hotels');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Luxury Hotels Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Edit rates, location specs, amenities list, and ratings for handpicked ultra-luxury properties.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddHotel}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Luxury Hotel</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[600px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Luxury Hotels ({hotels.length})
          </h3>
          {hotels.map(h => (
            <div
              key={h.id}
              onClick={() => setSelectedHotel(h)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 group ${
                selectedHotel?.id === h.id
                  ? 'bg-[#C8A45D]/10 border-[#C8A45D]'
                  : 'bg-[#122848]/30 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="space-y-1 overflow-hidden">
                <p className="text-xs font-semibold truncate text-white">{h.nameEn}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium">{h.category} • ${h.pricePerNightUSD}/night</p>
              </div>
              <button
                type="button"
                onClick={(e) => handleRemoveHotel(h.id, e)}
                className="text-gray-500 hover:text-red-400 p-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-[#0B1F3A] border border-white/10 rounded-2xl p-6">
          {selectedHotel ? (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-serif text-lg font-bold text-[#C8A45D]">
                  {selectedHotel.nameEn}
                </h3>
                <span className="text-[10px] text-gray-400">ID: {selectedHotel.id}</span>
              </div>

              {/* Title Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Hotel Name (English)
                  </label>
                  <input
                    type="text"
                    value={selectedHotel.nameEn}
                    onChange={(e) => handleUpdateField('nameEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Hotel Name (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedHotel.nameKr}
                    onChange={(e) => handleUpdateField('nameKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Location inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Location Description (English)
                  </label>
                  <input
                    type="text"
                    value={selectedHotel.locationEn}
                    onChange={(e) => handleUpdateField('locationEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Location Description (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedHotel.locationKr}
                    onChange={(e) => handleUpdateField('locationKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Category, Rating, Price */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={selectedHotel.category}
                    onChange={(e) => handleUpdateField('category', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    <option value="Luxury Resorts">Luxury Resorts</option>
                    <option value="Golf Resorts">Golf Resorts</option>
                    <option value="Beach Resorts">Beach Resorts</option>
                    <option value="Mountain Hotels">Mountain Hotels</option>
                    <option value="Boutique Hotels">Boutique Hotels</option>
                    <option value="Private Villas">Private Villas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Price per Night (USD)
                  </label>
                  <input
                    type="number"
                    value={selectedHotel.pricePerNightUSD}
                    onChange={(e) => handleUpdateField('pricePerNightUSD', Number(e.target.value))}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <RatingStars
                  rating={selectedHotel.rating}
                  onChange={(rating) => handleUpdateField('rating', rating)}
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
                    value={selectedHotel.descEn}
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
                    value={selectedHotel.descKr}
                    onChange={(e) => handleUpdateField('descKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedHotel.image}
                label="Cover Image URL"
                onChange={(url) => handleUpdateField('image', url)}
              />

              {/* Facilities Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ListEditor
                  label="Facilities / Amenities (English)"
                  items={selectedHotel.facilitiesEn}
                  onChange={(items) => handleUpdateField('facilitiesEn', items)}
                />
                <ListEditor
                  label="Facilities / Amenities (Korean)"
                  items={selectedHotel.facilitiesKr}
                  onChange={(items) => handleUpdateField('facilitiesKr', items)}
                />
              </div>

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select a luxury hotel from the left sidebar list to edit its details.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
