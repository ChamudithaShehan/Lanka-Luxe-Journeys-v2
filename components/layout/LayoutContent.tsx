'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface LayoutContentProps {
  children: React.ReactNode;
  loadingScreen: React.ReactNode;
  scrollProgress: React.ReactNode;
  navbar: React.ReactNode;
  floatingWhatsApp: React.ReactNode;
  footer: React.ReactNode;
}

export const LayoutContent: React.FC<LayoutContentProps> = ({
  children,
  loadingScreen,
  scrollProgress,
  navbar,
  floatingWhatsApp,
  footer,
}) => {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      {loadingScreen}
      {scrollProgress}
      {navbar}
      <main className="flex-grow">{children}</main>
      {floatingWhatsApp}
      {footer}
    </>
  );
};
