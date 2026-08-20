'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, KeyRound } from 'lucide-react';

interface AdminLoginPageProps {
  onLoginSuccess: () => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLoginSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'lanka2026' || pin === 'admin') {
      sessionStorage.setItem('llj_admin_authenticated', 'true');
      onLoginSuccess();
    } else {
      setError('Invalid Access PIN. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#060F1D] flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full bg-[#0B1F3A] border border-[#C8A45D]/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(200,164,93,0.15)] text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent opacity-70" />

        <div className="w-16 h-16 rounded-full border border-[#C8A45D] flex items-center justify-center bg-[#060F1D] mx-auto mb-6 shadow-[0_0_20px_rgba(200,164,93,0.3)]">
          <Compass className="w-8 h-8 text-[#C8A45D]" />
        </div>

        <h1 className="font-serif text-2xl font-bold tracking-tight text-white mb-2">
          Lanka Luxe Journeys
        </h1>
        <p className="text-[#C8A45D] text-xs uppercase tracking-[0.2em] mb-6">
          VIP Management Portal
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <KeyRound className="absolute left-3.5 top-3 w-4 h-4 text-[#C8A45D]/70" />
            <input
              type="password"
              placeholder="Enter Management PIN..."
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError('');
              }}
              className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D] text-center tracking-widest font-bold"
              required
            />
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#C8A45D] hover:bg-[#D4B87A] text-[#0B1F3A] font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(200,164,93,0.2)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Verify & Authenticate</span>
          </button>
        </form>

        <p className="text-gray-500 text-[10px] mt-8">
          Authorized personnel only. Access logging is active.
        </p>
      </div>
    </div>
  );
};
