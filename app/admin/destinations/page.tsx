'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Destination } from '@/data/travelData';
import { ListEditor } from '@/components/admin/ListEditor';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2 } from 'lucide-react';

export default function AdminDestinations() {
  const { destinations, setDestinations } = useAdmin();
  const [dests, setDests] = useState<Destination[]>(destinations);
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const handleUpdateField = (field: keyof Destination, value: any) => {
    if (!selectedDest) return;
    const updated = { ...selectedDest, [field]: value };
    setSelectedDest(updated);
    
    const next = dests.map(d => d.id === selectedDest.id ? updated : d);
    setDests(next);
    setIsDirty(true);
  };

  const handleAddDest = () => {
    const newId = `dest-${Date.now()}`;
    const newDest: Destination = {
      id: newId,
      nameEn: 'New Destination',
      nameKr: '신규 목적지',
      subtitleEn: '',
      subtitleKr: '',
      image: '',
      gallery: [],
      hotels: [],
      highlightsEn: [],
      highlightsKr: [],
      bestTimeEn: '',
      bestTimeKr: '',
      descEn: '',
      descKr: '',
      svgPos: { x: 150, y: 150 }
    };

    const next = [...dests, newDest];
    setDests(next);
    setSelectedDest(newDest);
    setIsDirty(true);
  };

  const handleRemoveDest = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this destination from local settings?")) {
      const next = dests.filter(d => d.id !== id);
      setDests(next);
      if (selectedDest?.id === id) {
        setSelectedDest(null);
      }
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    setDestinations(dests);
    setIsDirty(false);
    alert("Destinations synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset destinations back to defaults?")) {
      localStorage.removeItem('llj_destinations');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Destinations Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Manage main cities, best travel seasons, custom descriptions, and SVG interactive map coordinates.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddDest}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Destination</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[600px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Destinations ({dests.length})
          </h3>
          {dests.map(d => (
            <div
              key={d.id}
              onClick={() => setSelectedDest(d)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 group ${
                selectedDest?.id === d.id
                  ? 'bg-[#C8A45D]/10 border-[#C8A45D]'
                  : 'bg-[#122848]/30 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="space-y-1 overflow-hidden">
                <p className="text-xs font-semibold truncate text-white">{d.nameEn}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium">Map Coordinates: X={d.svgPos?.x}, Y={d.svgPos?.y}</p>
              </div>
              <button
                type="button"
                onClick={(e) => handleRemoveDest(d.id, e)}
                className="text-gray-500 hover:text-red-400 p-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-[#0B1F3A] border border-white/10 rounded-2xl p-6">
          {selectedDest ? (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-serif text-lg font-bold text-[#C8A45D]">
                  {selectedDest.nameEn}
                </h3>
                <span className="text-[10px] text-gray-400">ID: {selectedDest.id}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Destination Name (English)
                  </label>
                  <input
                    type="text"
                    value={selectedDest.nameEn}
                    onChange={(e) => handleUpdateField('nameEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Destination Name (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedDest.nameKr}
                    onChange={(e) => handleUpdateField('nameKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Subtitle (English)
                  </label>
                  <input
                    type="text"
                    value={selectedDest.subtitleEn}
                    onChange={(e) => handleUpdateField('subtitleEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Subtitle (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedDest.subtitleKr}
                    onChange={(e) => handleUpdateField('subtitleKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Best time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Best Time to Visit (English)
                  </label>
                  <input
                    type="text"
                    value={selectedDest.bestTimeEn}
                    onChange={(e) => handleUpdateField('bestTimeEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Best Time to Visit (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedDest.bestTimeKr}
                    onChange={(e) => handleUpdateField('bestTimeKr', e.target.value)}
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
                    value={selectedDest.descEn}
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
                    value={selectedDest.descKr}
                    onChange={(e) => handleUpdateField('descKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Map Coordinates Sliders */}
              <div className="bg-[#122848]/30 border border-white/5 rounded-xl p-4 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D]">
                  Interactive Map Plot Coordinates
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Map X Position:</span>
                      <span className="text-[#C8A45D] font-bold">{selectedDest.svgPos?.x ?? 0}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="400"
                      value={selectedDest.svgPos?.x ?? 0}
                      onChange={(e) => handleUpdateField('svgPos', { ...(selectedDest.svgPos || {}), x: Number(e.target.value) })}
                      className="w-full accent-[#C8A45D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Map Y Position:</span>
                      <span className="text-[#C8A45D] font-bold">{selectedDest.svgPos?.y ?? 0}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={selectedDest.svgPos?.y ?? 0}
                      onChange={(e) => handleUpdateField('svgPos', { ...(selectedDest.svgPos || {}), y: Number(e.target.value) })}
                      className="w-full accent-[#C8A45D]"
                    />
                  </div>
                </div>
              </div>

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedDest.image}
                label="Cover Image URL"
                onChange={(url) => handleUpdateField('image', url)}
              />

              {/* Lists Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ListEditor
                  label="Destination Highlights (English)"
                  items={selectedDest.highlightsEn}
                  onChange={(items) => handleUpdateField('highlightsEn', items)}
                />
                <ListEditor
                  label="Destination Highlights (Korean)"
                  items={selectedDest.highlightsKr}
                  onChange={(items) => handleUpdateField('highlightsKr', items)}
                />
              </div>

              {/* Hotels */}
              <ListEditor
                label="Bespoke Hotels Available"
                items={selectedDest.hotels}
                onChange={(items) => handleUpdateField('hotels', items)}
              />

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select a destination package from the left sidebar list to edit its details.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
