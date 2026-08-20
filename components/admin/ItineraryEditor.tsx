'use client';

import React from 'react';
import { Plus, Trash2, Calendar } from 'lucide-react';

interface ItineraryItem {
  day: number;
  title: string;
  desc: string;
}

interface ItineraryEditorProps {
  itineraryEn: ItineraryItem[];
  itineraryKr: ItineraryItem[];
  onChangeEn: (itinerary: ItineraryItem[]) => void;
  onChangeKr: (itinerary: ItineraryItem[]) => void;
}

export const ItineraryEditor: React.FC<ItineraryEditorProps> = ({
  itineraryEn = [],
  itineraryKr = [],
  onChangeEn,
  onChangeKr
}) => {
  const handleAddDay = () => {
    const nextDayNum = itineraryEn.length + 1;
    
    onChangeEn([
      ...itineraryEn,
      { day: nextDayNum, title: `Day ${nextDayNum} Title`, desc: `Day ${nextDayNum} description...` }
    ]);
    onChangeKr([
      ...itineraryKr,
      { day: nextDayNum, title: `Day ${nextDayNum} 한국어 제목`, desc: `Day ${nextDayNum} 한국어 내용 설명...` }
    ]);
  };

  const handleRemoveDay = (index: number) => {
    const newEn = itineraryEn.filter((_, i) => i !== index).map((item, i) => ({ ...item, day: i + 1 }));
    const newKr = itineraryKr.filter((_, i) => i !== index).map((item, i) => ({ ...item, day: i + 1 }));
    onChangeEn(newEn);
    onChangeKr(newKr);
  };

  const handleUpdate = (
    index: number,
    lang: 'en' | 'kr',
    field: 'title' | 'desc',
    value: string
  ) => {
    if (lang === 'en') {
      const next = [...itineraryEn];
      next[index] = { ...next[index], [field]: value };
      onChangeEn(next);
    } else {
      const next = [...itineraryKr];
      next[index] = { ...next[index], [field]: value };
      onChangeKr(next);
    }
  };

  const daysLength = Math.max(itineraryEn.length, itineraryKr.length);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#C8A45D]/20 pb-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>Interactive Itinerary Editor</span>
        </h4>
        <button
          type="button"
          onClick={handleAddDay}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider transition-all flex items-center gap-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Itinerary Day</span>
        </button>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
        {Array.from({ length: daysLength }).map((_, idx) => {
          const itemEn = itineraryEn[idx] || { day: idx + 1, title: '', desc: '' };
          const itemKr = itineraryKr[idx] || { day: idx + 1, title: '', desc: '' };

          return (
            <div
              key={idx}
              className="bg-[#122848]/30 border border-white/5 rounded-xl p-4 space-y-3 relative"
            >
              <div className="flex items-center justify-between">
                <span className="bg-[#C8A45D]/20 text-[#C8A45D] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Day {idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveDay(idx)}
                  className="text-red-400 hover:text-red-300 transition-colors p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* EN Title & Desc */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-[#C8A45D] font-semibold">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={itemEn.title}
                    onChange={(e) => handleUpdate(idx, 'en', 'title', e.target.value)}
                    className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-[#C8A45D] font-semibold">
                    Title (Korean)
                  </label>
                  <input
                    type="text"
                    value={itemKr.title}
                    onChange={(e) => handleUpdate(idx, 'kr', 'title', e.target.value)}
                    className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-[#C8A45D] font-semibold">
                    Description (English)
                  </label>
                  <textarea
                    rows={2}
                    value={itemEn.desc}
                    onChange={(e) => handleUpdate(idx, 'en', 'desc', e.target.value)}
                    className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-[#C8A45D] font-semibold">
                    Description (Korean)
                  </label>
                  <textarea
                    rows={2}
                    value={itemKr.desc}
                    onChange={(e) => handleUpdate(idx, 'kr', 'desc', e.target.value)}
                    className="w-full bg-[#122848] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>
            </div>
          );
        })}
        {daysLength === 0 && (
          <p className="text-gray-500 text-xs italic text-center py-4">No itinerary days added.</p>
        )}
      </div>
    </div>
  );
};
