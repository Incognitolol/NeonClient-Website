import { Navbar } from '@/components/navbar';
import { BackToTopIcon } from '@/components/icons';
import { useState, useEffect, ReactNode } from 'react';

import { Head } from "./head";

interface DefaultLayoutProps {
  children: ReactNode;
  onTOSClick: () => void;
}

export default function DefaultLayout({
  children,
  onTOSClick,
}: DefaultLayoutProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#0f1420] text-white font-inter">
      <Head />
      <Navbar onTOSClick={onTOSClick} />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#0891b2] text-white flex items-center justify-center cursor-pointer transition-all duration-300 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <BackToTopIcon />
      </button>
      <footer className="w-full flex items-center justify-center py-3">
      </footer>
    </div>
  );
}
