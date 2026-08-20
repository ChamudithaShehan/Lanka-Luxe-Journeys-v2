'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  label?: string;
  rating: number;
  max?: number;
  onChange: (rating: number) => void;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  label = 'Rating',
  rating,
  max = 5,
  onChange
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-[11px] font-semibold text-[#C8A45D] uppercase tracking-wider">
        {label}
      </label>
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, idx) => {
          const starVal = idx + 1;
          const isActive = starVal <= rating;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onChange(starVal)}
              className="p-1 focus:outline-none transition-transform active:scale-95"
            >
              <Star
                className={`w-5 h-5 ${
                  isActive ? 'text-[#C8A45D] fill-[#C8A45D]' : 'text-gray-500'
                }`}
              />
            </button>
          );
        })}
        <span className="text-xs text-gray-300 ml-2 font-bold">{rating.toFixed(1)} / {max}</span>
      </div>
    </div>
  );
};
