import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickLeadPopup } from './components/QuickLeadPopup';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isQuickLeadOpen, setIsQuickLeadOpen] = useState(false);
  const [consultationCountry, setConsultationCountry] = useState<string>('');
  const [workSelectedCountry, setWorkSelectedCountry] = useState<string>('usa');

  // Automatic 1-minute (60 seconds) pop-up timer as requested by user
  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem('ivs_lead_popup_triggered');
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsQuickLeadOpen(true);
        sessionStorage.setItem('ivs_lead_popup_triggered', 'true');
      }, 60000); // exactly 1 minute

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle browser back/forward or hash if desired, and scroll to top on navigation
  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (country?: string) => {
    setConsultationCountry(country || '');
    setIsQuickLeadOpen(true);
  };

  const handleSelectCountryFromCard = (countryId: string) => {
    setWorkSelectedCountry(countryId);
    setActivePage('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Persistent Navigation Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectCountry={handleSelectCountryFromCard}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'work' && (
          <WorkPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            selectedCountryId={workSelectedCountry}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Persistent Professional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCountry={handleSelectCountryFromCard}
      />

      {/* Global Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Small pop-up form with minor details (opens after 1 minute automatically, or on CTA click) */}
      <QuickLeadPopup
        isOpen={isQuickLeadOpen}
        onClose={() => setIsQuickLeadOpen(false)}
        defaultCountry={consultationCountry || 'UK'}
      />

    </div>
  );
}

