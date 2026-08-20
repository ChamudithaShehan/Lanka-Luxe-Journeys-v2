'use client';

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { ImagePreview } from '@/components/admin/ImagePreview';
import { AdminSaveBar } from '@/components/admin/AdminSaveBar';
import { Plus, Trash2 } from 'lucide-react';

interface TeamMemberItem {
  name: string;
  roleEn: string;
  roleKr: string;
  image: string;
  bioEn: string;
  bioKr: string;
}

export default function AdminTeam() {
  const { teamMembers, setTeamMembers } = useAdmin();
  const [list, setList] = useState<TeamMemberItem[]>(teamMembers as TeamMemberItem[]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const selectedItem = selectedIdx !== null ? list[selectedIdx] : null;

  const handleUpdateField = (field: keyof TeamMemberItem, value: any) => {
    if (selectedIdx === null) return;
    const next = [...list];
    next[selectedIdx] = { ...next[selectedIdx], [field]: value };
    setList(next);
    setIsDirty(true);
  };

  const handleAddMember = () => {
    const newItem: TeamMemberItem = {
      name: 'New Team Member',
      roleEn: '',
      roleKr: '',
      image: '',
      bioEn: '',
      bioKr: ''
    };
    setList([...list, newItem]);
    setSelectedIdx(list.length);
    setIsDirty(true);
  };

  const handleRemoveMember = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Remove this team member permanently?")) {
      const next = list.filter((_, i) => i !== idx);
      setList(next);
      setSelectedIdx(null);
      setIsDirty(true);
    }
  };

  const handleSave = () => {
    setTeamMembers(list);
    setIsDirty(false);
    alert("Team member details synchronized successfully!");
  };

  const handleReset = () => {
    if (confirm("Reset team list back to defaults?")) {
      localStorage.removeItem('llj_team');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white mb-1">
            Team Members Manager
          </h1>
          <p className="text-gray-400 text-xs">
            Edit profiles, biographies, portraits, and customized roles for executives and field operations managers.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddMember}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Team Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-4 h-[550px] overflow-y-auto space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D] px-2 mb-3">
            Executives & Concierges ({list.length})
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
                <p className="text-xs font-semibold truncate text-white">{t.name}</p>
                <p className="text-[10px] text-[#C8A45D] font-medium truncate">{t.roleEn}</p>
              </div>
              <button
                type="button"
                onClick={(e) => handleRemoveMember(idx, e)}
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
                  {selectedItem.name}
                </h3>
              </div>

              {/* Name */}
              <div>
                <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={selectedItem.name}
                  onChange={(e) => handleUpdateField('name', e.target.value)}
                  className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>

              {/* Roles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Role Description (English)
                  </label>
                  <input
                    type="text"
                    value={selectedItem.roleEn}
                    onChange={(e) => handleUpdateField('roleEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Role Description (Korean)
                  </label>
                  <input
                    type="text"
                    value={selectedItem.roleKr}
                    onChange={(e) => handleUpdateField('roleKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Biographies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Biography (English)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedItem.bioEn}
                    onChange={(e) => handleUpdateField('bioEn', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Biography (Korean)
                  </label>
                  <textarea
                    rows={3}
                    value={selectedItem.bioKr}
                    onChange={(e) => handleUpdateField('bioKr', e.target.value)}
                    className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* Image preview inputs */}
              <ImagePreview
                url={selectedItem.image}
                label="Portrait Portrait Photo URL"
                onChange={(url) => handleUpdateField('image', url)}
              />

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-12 text-gray-500">
              Select a team profile from the left sidebar to make edits.
            </div>
          )}
        </div>
      </div>

      <AdminSaveBar onSave={handleSave} onReset={handleReset} isDirty={isDirty} />
    </div>
  );
}
