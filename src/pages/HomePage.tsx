import React from 'react';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { CompanySection } from '@/components/landing/CompanySection';
import { Footer } from '@/components/landing/Footer';
import { AiAssistant } from '@/components/chat/AiAssistant';
import { HashScrollHandler } from '@/components/layout/HashScrollHandler';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-50 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Global Utilities */}
      <HashScrollHandler />
      {/* Fixed Ambient Background */}
      <AnimatedBackground />
      {/* Navigation */}
      <Navbar />
      {/* Page Content */}
      <div className="relative z-10">
        <Hero />
        <div id="about" className="scroll-mt-24">
           <ServicesSection />
        </div>
        <CompanySection />
        <Footer />
      </div>
      {/* Interactive Layer */}
      <AiAssistant />
      <Toaster position="top-right" richColors />
    </main>
  );
}