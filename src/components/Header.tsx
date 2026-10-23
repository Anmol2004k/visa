import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { RemixIcon } from './RemixIcon';
import { Logo } from './Logo';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
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

  const handleNavClick = (id: PageId, label?: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    if (label === 'Countries We Serve') {
      // scroll to countries section if already on work page or after navigation
      setTimeout(() => {
        const el = document.getElementById('countries-we-serve-section') || document.querySelector('.country-grid-container');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-1.5 sm:py-2 border-b border-slate-200/80'
            : 'bg-white py-2 sm:py-2.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo with compact elegant size */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left cursor-pointer group focus:outline-none shrink-0"
            aria-label="JSR World Visas Home"
          >
            <Logo theme="light" size="sm" />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item, idx) => {
              const isCountries = item.label === 'Countries We Serve';
              const isServices = item.label === 'Services';
              const isActive = isCountries ? false : activePage === item.id;

              return (
                <button
                  key={`${item.id}-${idx}`}
                  onClick={() => handleNavClick(item.id, item.label)}
                  className={`px-3 py-1.5 rounded-lg text-xs lg:text-[13px] font-medium tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="ml-2 pl-2 border-l border-slate-200">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wide transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Consultation</span>
                <RemixIcon name="ri-arrow-right-line" className="text-xs" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <RemixIcon name="ri-close-line" className="text-xl" />
              ) : (
                <RemixIcon name="ri-menu-line" className="text-xl" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-2.5 pb-4 space-y-2 shadow-xl animate-in fade-in duration-150">
            <div className="space-y-1">
              {navItems.map((item, idx) => (
                <button
                  key={`${item.id}-m-${idx}`}
                  onClick={() => handleNavClick(item.id, item.label)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between ${
                    activePage === item.id && item.label !== 'Countries We Serve'
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <RemixIcon name="ri-arrow-right-s-line" className="text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold text-center block shadow-xs"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
