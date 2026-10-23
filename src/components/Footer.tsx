import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG, COUNTRIES_DATA } from '../data/config';
import { RemixIcon } from "./RemixIcon";
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCountry?: (countryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCountry }) => {
  const currentYear = new Date().getFullYear();
  const [showSchemaModal, setShowSchemaModal] = useState(false);
  const [schemaText, setSchemaText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleOpenSchema = () => {
    const el = document.getElementById('dynamic-seo-jsonld');
    if (el && el.textContent) {
      setSchemaText(el.textContent);
    } else {
      setSchemaText('// JSON-LD is dynamically injected in document <head>');
    }
    setShowSchemaModal(true);
    setCopied(false);
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePageClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCountryClick = (countryId: string) => {
    if (onSelectCountry) onSelectCountry(countryId);
    onNavigate('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 selection:bg-blue-600 selection:text-white">
      {/* TOP BRAND HIGHLIGHT BAR */}
      <div className="border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-slate-300">
                  Australia-Based Specialist Team
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">
                  Global Visa Support Operations
                </span>
              </div>
              <p className="text-sm text-slate-400 font-light">
                Registered in India with branch presence in Melbourne, Australia.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 text-xs font-medium transition-colors"
              >
                <RemixIcon name="ri-whatsapp-line" className="text-sm" />
                <span>WhatsApp: {COMPANY_CONFIG.whatsappDisplay}</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.indiaPhoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium transition-colors"
                title="Call India Branch Office"
              >
                <RemixIcon name="ri-phone-line" className="text-sm text-emerald-400" />
                <span>🇮🇳 {COMPANY_CONFIG.indiaPhone}</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.australiaPhoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium transition-colors"
                title="Call Australia Head Office"
              >
                <RemixIcon name="ri-phone-line" className="text-sm text-blue-400" />
                <span>🇦🇺 {COMPANY_CONFIG.australiaPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN MINIMAL NAVIGATION GRID */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <button
                onClick={() => handlePageClick('home')}
                className="text-left cursor-pointer focus:outline-none"
                aria-label="JSR World Visas Home"
              >
                <Logo theme="dark" size="xl" />
              </button>

              <p className="text-xs text-slate-400 leading-relaxed mt-4 max-w-sm">
                International visa consultancy assisting individuals, families, students, professionals, and businesses with worldwide travel, education, employment, and migration pathways.
              </p>
            </div>

            {/* Dual Global Presence */}
            <div className="space-y-3 pt-2">
              <div className="border-l border-blue-500/40 pl-3">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  <span>🇦🇺</span>
                  <span>Head Office — Australia</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  60 Corrigan Avenue, Brooklyn, Melbourne 3012 (Victoria) Australia
                </div>
                <a
                  href="tel:+61430053716"
                  className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold block mt-1"
                >
                  Ph: +61 4300 53716
                </a>
              </div>

              <div className="border-l border-emerald-500/40 pl-3">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  <span>🇮🇳</span>
                  <span>Branch Office — India</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Shop 1, c/o Mukhija Associates, Rodeo Drive, Kundli 131029 (Haryana) India
                </div>
                <a
                  href="tel:+919810755659"
                  className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold block mt-1"
                >
                  Ph: +91 98107 55659
                </a>
              </div>
            </div>
          </div>

          {/* Visa Pathways (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Visa Pathways
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Higher Education & Study Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Employment & Work Opportunities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Family & Partner Migration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Tourist & Visitor Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  International Business Visas
                </button>
              </li>
            </ul>
          </div>

          {/* Key Destinations (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs">
              {COUNTRIES_DATA.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleCountryClick(c.id)}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-[11px] opacity-80">{c.flagCode}</span>
                    <span>{c.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Operations (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About JSR World Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Global Offices
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services Offered
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="hover:text-white transition-colors block"
                >
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block">
                  {COMPANY_CONFIG.workingHours}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* MINIMAL REGULATORY NOTICE */}
        <div className="mt-14 pt-8 border-t border-slate-900 text-[11px] leading-relaxed text-slate-500">
          <p>
            <strong className="text-slate-400 font-medium">Compliance & Regulatory Notice: </strong>
            Visa eligibility, processing timelines, and final outcomes are subject solely to the immigration laws, policies, and assessment procedures of the respective government authorities. JSR World Visas provides structured application coordination, document guidance, and support within agreed scopes of service. Where immigration advice or legal representation is regulated by destination country legislation, such advice is provided strictly by appropriately authorised and registered professionals.
          </p>
        </div>

        {/* BOTTOM MINIMAL SIGN-OFF */}
        <div className="mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© {currentYear} JSR World Visas. All rights reserved.</span>
            <span className="hidden sm:inline mx-2 text-slate-700">|</span>
            <span className="hidden sm:inline text-slate-600">Kundli, Sonipat (India) & Melbourne (Australia)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <button
              onClick={() => handlePageClick('about')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Why Choose Us
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => handlePageClick('contact')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Consultation
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={handleOpenSchema}
              className="hover:text-emerald-400 transition-colors cursor-pointer inline-flex items-center gap-1 font-mono text-[11px]"
              title="Inspect structured SEO data (Schema.org)"
            >
              <RemixIcon name="ri-code-s-slash-line" className="text-xs" />
              <span>JSON-LD</span>
            </button>
          </div>
        </div>
      </div>

      {/* Minimal JSON-LD Schema Modal */}
      {showSchemaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-left">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RemixIcon name="ri-code-box-line" className="text-emerald-400 text-lg" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">Dynamic JSON-LD Schema</h3>
                  <p className="text-[11px] text-slate-400">Structured data for JSR World Visas (Kundli, Sonipat & Melbourne)</p>
                </div>
              </div>
              <button
                onClick={() => setShowSchemaModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <RemixIcon name="ri-close-line" className="text-lg" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-auto bg-slate-950 font-mono text-xs text-emerald-300">
              <pre className="whitespace-pre-wrap break-all leading-relaxed">
                {schemaText}
              </pre>
            </div>

            <div className="p-3 border-t border-slate-800 flex items-center justify-between bg-slate-900 text-xs">
              <span className="text-slate-400 text-[11px]">Injected in document &lt;head&gt;</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySchema}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors cursor-pointer text-xs"
                >
                  {copied ? 'Copied' : 'Copy JSON'}
                </button>
                <button
                  onClick={() => setShowSchemaModal(false)}
                  className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
