import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from './RemixIcon';
import { Logo } from './Logo';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'work', label: 'Services Offered' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      
      {/* Top Micro Action Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="hidden sm:inline text-slate-400">Offices:</span>
            <span className="text-white font-medium">Melbourne (Australia Head Office) & Kundli (India Branch Office)</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <RemixIcon name="ri-phone-fill" className="text-emerald-400 text-xs" />
              <span>Call: {COMPANY_CONFIG.phone}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <RemixIcon name="ri-whatsapp-fill" className="text-xs text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5'
            : 'bg-white py-2.5 sm:py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left cursor-pointer group focus:outline-none"
            aria-label="JSR World Visas Home"
          >
            <Logo theme="light" />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  activePage === item.id
                    ? 'text-blue-600 bg-blue-50 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Right CTA Buttons: Call, WhatsApp, Free Consultation */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <RemixIcon name="ri-phone-fill" className="text-emerald-600 text-xs" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <RemixIcon name="ri-whatsapp-fill" className="text-xs" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RemixIcon name="ri-sparkling-fill" className="text-amber-300 text-xs" />
              <span>Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold"
            >
              Consult
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <RemixIcon name="ri-close-line" className="text-2xl" /> : <RemixIcon name="ri-menu-line" className="text-2xl" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    activePage === item.id
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Direct Mobile CTAs */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="py-3 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <RemixIcon name="ri-phone-fill" className="text-emerald-600 text-sm" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <RemixIcon name="ri-whatsapp-fill" className="text-sm" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-blue-600 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md"
            >
              <RemixIcon name="ri-calendar-check-fill" className="text-base" />
              <span>Get Free 1-on-1 Consultation</span>
            </button>
          </div>
        )}
      </nav>

    </header>
  );
};
