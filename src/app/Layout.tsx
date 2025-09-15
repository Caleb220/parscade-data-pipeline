import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnnouncementBar />
      <main className="flex-grow pt-32" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}