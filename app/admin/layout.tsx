import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

// Middleware (middleware.ts) handles auth — unauthenticated users are
// redirected to /admin/login before this layout renders.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#060F1D] text-white flex">
      <AdminSidebar />
      <div className="flex-1 pl-64 pb-24 min-h-screen bg-[#060F1D]">
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
