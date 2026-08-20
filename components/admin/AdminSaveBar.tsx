'use client';

import React from 'react';
import Link from 'next/link';
import { Save, RefreshCw, Eye } from 'lucide-react';

interface AdminSaveBarProps {
  onSave: () => void;
  onReset: () => void;
  isDirty?: boolean;
}

export const AdminSaveBar: React.FC<AdminSaveBarProps> = ({
  onSave,
  onReset,
  isDirty = true
}) => {
  return (
    <div className="fixed bottom-0 right-0 left-64 bg-[#0B1F3A] border-t border-[#C8A45D]/30 py-4 px-8 flex items-center justify-between z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#C8A45D] animate-pulse" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-300">
          {isDirty ? 'Unsaved Management changes detected' : 'All Changes Synchronized'}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="bg-transparent hover:bg-white/5 border border-white/20 text-gray-300 font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>

        <Link
          href="/"
          target="_blank"
          className="bg-[#122848] hover:bg-[#1a3760] border border-[#C8A45D]/40 text-[#C8A45D] font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Preview Site</span>
        </Link>

        <button
          type="button"
          onClick={onSave}
          disabled={!isDirty}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed text-[#0B1F3A] font-bold px-6 py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(200,164,93,0.2)]"
        >
          <Save className="w-3.5 h-3.5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};
