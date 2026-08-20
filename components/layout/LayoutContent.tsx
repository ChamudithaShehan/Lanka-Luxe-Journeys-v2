'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface LayoutContentProps {
  children: React.ReactNode;
  loadingScreen: React.ReactNode;
  scrollProgress: React.ReactNode;
  customCursor: React.ReactNode;
  navbar: React.ReactNode;
  floatingWhatsApp: React.ReactNode;
  mobileBottomBar: React.ReactNode;
  footer: React.ReactNode;
}

export const LayoutContent: React.FC<LayoutContentProps> = ({
  children,
  loadingScreen,
  scrollProgress,
  customCursor,
  navbar,
  floatingWhatsApp,
  mobileBottomBar,
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
      {customCursor}
      {navbar}
      <main className="flex-grow">{children}</main>
      {floatingWhatsApp}
      {mobileBottomBar}
      {footer}
    </>
  );
};
