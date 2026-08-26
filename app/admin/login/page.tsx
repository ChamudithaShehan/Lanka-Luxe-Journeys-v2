'use client';

import React, { useActionState } from 'react';
import { Compass, Sparkles, Mail, Lock, AlertCircle } from 'lucide-react';
import { loginAction } from '@/app/actions/auth';

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <div className="min-h-screen bg-[#060F1D] flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full bg-[#0B1F3A] border border-[#C8A45D]/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(200,164,93,0.15)] text-center relative overflow-hidden">
        {/* Top gold line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent opacity-70" />

        {/* Logo */}
        <div className="w-16 h-16 rounded-full border border-[#C8A45D] flex items-center justify-center bg-[#060F1D] mx-auto mb-6 shadow-[0_0_20px_rgba(200,164,93,0.3)]">
          <Compass className="w-8 h-8 text-[#C8A45D]" />
        </div>

        <h1 className="font-serif text-2xl font-bold tracking-tight text-white mb-1">
          Lanka Luxe Journeys
        </h1>
        <p className="text-[#C8A45D] text-xs uppercase tracking-[0.2em] mb-8">
          VIP Management Portal
        </p>

        <form action={action} className="space-y-4 text-left">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C8A45D]/70" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Admin Email"
              autoComplete="email"
              className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D] transition-colors"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C8A45D]/70" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full bg-[#122848] border border-[#C8A45D]/30 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A45D] transition-colors"
              required
            />
          </div>

          {/* Error message */}
          {state?.error && (
            <div className="flex items-center gap-2 text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{state.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#C8A45D] hover:bg-[#D4B87A] disabled:opacity-60 text-[#0B1F3A] font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(200,164,93,0.2)] hover:scale-[1.02] active:scale-[0.98] mt-2"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>{pending ? 'Authenticating...' : 'Verify & Authenticate'}</span>
          </button>
        </form>

        <p className="text-gray-500 text-[10px] mt-8 text-center">
          Authorized personnel only. Access logging is active.
        </p>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D]/40 to-transparent" />
      </div>
    </div>
  );
}
