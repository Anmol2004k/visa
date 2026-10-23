import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from './RemixIcon';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCountry?: (countryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCountry }) => {
  const currentYear = new Date().getFullYear();

  const handlePageClick = (page: PageId, targetAnchor?: string) => {
    onNavigate(page);
    if (targetAnchor) {
      setTimeout(() => {
        const el = document.getElementById(targetAnchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCountryClick = (countryId: string) => {
    if (onSelectCountry) onSelectCountry(countryId);
    onNavigate('work');
    setTimeout(() => {
      const el = document.getElementById('countries-we-serve-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-[#070D1B] text-slate-300 border-t border-slate-800/80 selection:bg-blue-600 selection:text-white">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* 1. Brand Column (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handlePageClick('home')}
              className="text-left cursor-pointer group focus:outline-none block"
              aria-label="JSR World Visas Home"
            >
              <Logo theme="dark" size="sm" />
            </button>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-sm">
              JSR World Visas provides structured international visa application support across global destinations. Coordinated by our specialist team in Melbourne, Australia and Kundli, Sonipat, India.
            </p>

            {/* Minimal WhatsApp CTA */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 text-xs font-semibold transition-colors"
              >
                <RemixIcon name="ri-whatsapp-fill" className="text-emerald-400 text-sm" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => handlePageClick('contact')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Contact Desk</span>
                <RemixIcon name="ri-arrow-right-line" className="text-xs text-amber-400" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors text-sm"
              >
                <RemixIcon name="ri-facebook-fill" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors text-sm"
              >
                <RemixIcon name="ri-instagram-line" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors text-sm"
              >
                <RemixIcon name="ri-linkedin-fill" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors text-sm"
              >
                <RemixIcon name="ri-whatsapp-line" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="hover:text-amber-300 text-slate-300 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="hover:text-amber-300 text-slate-300 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="hover:text-amber-300 text-slate-300 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work', 'countries-we-serve-section')}
                  className="hover:text-amber-300 text-slate-300 transition-colors cursor-pointer"
                >
                  Countries We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-amber-300 text-slate-300 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('sitemap')}
                  className="hover:text-amber-300 text-amber-300/90 font-medium transition-colors cursor-pointer"
                >
                  Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Visa Services (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
              <span>Visa Services</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handlePageClick('work', 'student-education')}
                  className="hover:text-amber-300 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  Student &amp; Education Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work', 'tourist-visitor')}
                  className="hover:text-amber-300 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  Tourist &amp; Visitor Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work', 'work-employment')}
                  className="hover:text-amber-300 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  Work &amp; Employment Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work', 'skilled-migration')}
                  className="hover:text-amber-300 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  Skilled Migration &amp; PR
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work', 'partner-family')}
                  className="hover:text-amber-300 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  Partner &amp; Family Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work', 'business-investor')}
                  className="hover:text-amber-300 text-slate-300 transition-colors text-left cursor-pointer"
                >
                  Business &amp; Investor Visas
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Essential Contact (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
              <span>Essential Contact</span>
            </h3>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <p className="font-semibold text-white">Australia Head Office</p>
                <p className="text-[11px] text-slate-400">60 Corrigan Ave, Brooklyn, Melbourne 3012</p>
                <a href={`tel:${COMPANY_CONFIG.australiaPhoneRaw}`} className="text-[11px] text-amber-300 hover:underline">
                  {COMPANY_CONFIG.australiaPhone}
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">India Branch Office</p>
                <p className="text-[11px] text-slate-400">Shop 1, Rodeo Drive, Kundli 131029 (Sonipat)</p>
                <a href={`tel:${COMPANY_CONFIG.indiaPhoneRaw}`} className="text-[11px] text-amber-300 hover:underline">
                  {COMPANY_CONFIG.indiaPhone}
                </a>
              </div>

              <div className="pt-1 border-t border-slate-800">
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1.5">
                  <RemixIcon name="ri-mail-line" className="text-amber-400" />
                  <span>{COMPANY_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Policy Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {currentYear} JSR World Visas. All rights reserved.</p>
          </div>

          {/* Legal Pages Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-400">
            <button
              onClick={() => handlePageClick('privacy')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handlePageClick('terms')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => handlePageClick('cookies')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handlePageClick('disclaimer')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Visa Disclaimer
            </button>
            <span>•</span>
            <button
              onClick={() => handlePageClick('security')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Security &amp; Data Protection
            </button>
            <span>•</span>
            <button
              onClick={() => handlePageClick('sitemap')}
              className="hover:text-amber-300 text-amber-300/90 transition-colors cursor-pointer"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
