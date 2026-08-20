'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Compass,
  LayoutDashboard,
  Globe,
  Package,
  Sparkles,
  MapPin,
  Hotel,
  Star,
  MessageSquare,
  Users,
  BookOpen,
  Settings,
  Type,
  LogOut
} from 'lucide-react';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Hero Slides', href: '/admin/hero', icon: Globe },
    { label: 'Tour Packages', href: '/admin/tours', icon: Package },
    { label: 'Golf Courses', href: '/admin/golf', icon: Sparkles },
    { label: 'Destinations', href: '/admin/destinations', icon: MapPin },
    { label: 'Luxury Hotels', href: '/admin/hotels', icon: Hotel },
    { label: 'Experiences', href: '/admin/experiences', icon: Star },
    { label: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
    { label: 'Team Members', href: '/admin/team', icon: Users },
    { label: 'Blog Articles', href: '/admin/blog', icon: BookOpen },
    { label: 'Site Settings', href: '/admin/settings', icon: Settings },
    { label: 'Translations', href: '/admin/translations', icon: Type },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('llj_admin_authenticated');
    router.push('/');
    window.location.reload();
  };

  return (
    <aside className="w-64 bg-[#0B1F3A] border-r border-[#C8A45D]/30 flex flex-col h-screen fixed left-0 top-0 text-white font-sans z-50">
      {/* Brand Header */}
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-[#C8A45D] flex items-center justify-center bg-[#060F1D]">
          <Compass className="w-4 h-4 text-[#C8A45D]" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-sm font-bold tracking-tight text-white leading-none">
            LANKA LUXE
          </span>
          <span className="text-[7px] uppercase tracking-[0.2em] text-[#C8A45D] font-sans mt-0.5">
            ADMIN PORTAL
          </span>
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                isActive
                  ? 'bg-[#C8A45D] text-[#0B1F3A] shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Action */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold tracking-wide text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Admin Portal</span>
        </button>
      </div>
    </aside>
  );
};
