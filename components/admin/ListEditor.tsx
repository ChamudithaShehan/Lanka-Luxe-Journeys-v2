'use client';

import React, { useState } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

interface ListEditorProps {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}

export const ListEditor: React.FC<ListEditorProps> = ({
  label,
  items = [],
  onChange,
  placeholder = 'Add new item...'
}) => {
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (!newItem.trim()) return;
    onChange([...items, newItem.trim()]);
    setNewItem('');
  };

  const handleRemove = (index: number) => {
    const next = [...items];
    next.splice(index, 1);
    onChange(next);
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === items.length - 1) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const next = [...items];
    const temp = next[index];
    next[index] = next[targetIndex];
    next[targetIndex] = temp;
    onChange(next);
  };

  return (
    <div className="space-y-2">
      <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider">
        {label}
      </label>
      
      {/* Input area */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAdd();
            }
          }}
          placeholder={placeholder}
          className="flex-1 bg-[#122848] border border-[#C8A45D]/30 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D]"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] px-3 rounded-lg text-xs font-bold transition-all"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* List items */}
      <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-2 bg-[#122848]/50 border border-white/5 rounded-lg px-3 py-1.5 text-xs text-gray-200"
          >
            <span className="flex-1 line-clamp-2">{item}</span>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => handleMove(idx, 'up')}
                disabled={idx === 0}
                className="text-gray-400 hover:text-[#C8A45D] disabled:opacity-30 disabled:hover:text-gray-400 p-1"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleMove(idx, 'down')}
                disabled={idx === items.length - 1}
                className="text-gray-400 hover:text-[#C8A45D] disabled:opacity-30 disabled:hover:text-gray-400 p-1"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="text-red-400 hover:text-red-300 p-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-gray-500 text-[11px] italic pl-1">No items added yet.</p>
        )}
      </div>
    </div>
  );
};
