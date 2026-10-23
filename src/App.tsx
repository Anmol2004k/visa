import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingCall } from './components/FloatingCall';
import { SEOHead } from './components/SEOHead';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { VisaDisclaimerPage } from './pages/VisaDisclaimerPage';
import { SecurityPage } from './pages/SecurityPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'work',
  'contact',
  'privacy',
  'terms',
  'cookies',
  'disclaimer',
  'security',
  'sitemap',
];

function getInitialPage(): PageId {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  
  const target = path || hash;
  if (VALID_PAGES.includes(target as PageId)) {
    return target as PageId;
  }
  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPage());
  const [workSelectedCountry, setWorkSelectedCountry] = useState<string>('usa');

  // Sync with browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle page transitions and browser URL updates
  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser URL state cleanly
    try {
      const newPath = page === 'home' ? '/' : `/${page}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState({ page }, '', newPath);
      }
    } catch {
      // Ignore in restricted environments
    }
  };

  const handleOpenConsultation = (_country?: string) => {
    handleNavigate('contact');
  };

  const handleSelectCountryFromCard = (countryId: string) => {
    setWorkSelectedCountry(countryId);
    handleNavigate('work');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Dynamic Head SEO & JSON-LD Structured Data */}
      <SEOHead
        activePage={activePage}
        selectedCountryId={activePage === 'work' ? workSelectedCountry : undefined}
      />

      {/* Persistent Navigation Header with compact height */}
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

        {activePage === 'privacy' && (
          <PrivacyPolicyPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'terms' && (
          <TermsPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'cookies' && (
          <CookiePolicyPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'disclaimer' && (
          <VisaDisclaimerPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'security' && (
          <SecurityPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'sitemap' && (
          <SitemapPage
            onNavigate={handleNavigate}
          />
        )}

        {!VALID_PAGES.includes(activePage) && (
          <NotFoundPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Persistent Professional Minimalist Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCountry={handleSelectCountryFromCard}
      />

      {/* Global Floating Call Button (Bottom-Left) */}
      <FloatingCall />

      {/* Global Floating WhatsApp Button (Bottom-Right) */}
      <FloatingWhatsApp />

    </div>
  );
}
