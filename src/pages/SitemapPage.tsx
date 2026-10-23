import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';

interface SitemapPageProps {
  onNavigate: (page: PageId) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId, targetAnchor?: string) => {
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

  const visaServices = [
    { name: 'Tourist and Visitor Visas', id: 'tourist-visitor' },
    { name: 'Student and Education Visas', id: 'student-education' },
    { name: 'Partner, Spouse and Family Visas', id: 'partner-family' },
    { name: 'Work and Employment Visas', id: 'work-employment' },
    { name: 'Skilled Migration and Permanent Residency', id: 'skilled-migration' },
    { name: 'Business, Investor and Entrepreneur Visas', id: 'business-investor' },
    { name: 'Innovation and Talent-Related Visas', id: 'innovation-talent' },
    { name: 'Transit Visas', id: 'transit-visas' },
    { name: 'Medical, Religious, Cultural and Exchange-Related Visas', id: 'medical-cultural-exchange' },
    { name: 'Visa Extensions, Renewals and Other Applications', id: 'extensions-renewals' },
    { name: 'Visa Refusal and Further Application Support', id: 'visa-refusal-support' },
  ];

  const regionalDestinations = [
    'Australia & Oceania',
    'North & South America',
    'United Kingdom & Europe',
    'Middle East & Gulf',
    'Asia & Pacific',
    'Africa & Indian Ocean',
    'Russia & Central Asia',
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Header Banner */}
      <section className="bg-[#0B1528] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-blue-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-sky-300 font-medium">Sitemap</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <RemixIcon name="ri-node-tree" className="text-amber-400" />
              <span>Website Architecture</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Website Sitemap
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              A comprehensive directory of public pages, visa categories, destination galleries, and legal disclosures
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Group 1: Main Pages */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                <RemixIcon name="ri-home-4-line" />
              </div>
              <h2 className="font-heading font-bold text-base text-slate-900">
                Core Website Pages
              </h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Home</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>About Us</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Services (Overview)</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work', 'countries-we-serve-section')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Countries We Serve</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Contact Us</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
            </ul>
          </div>

          {/* Group 2: Visa Services */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg">
                <RemixIcon name="ri-passport-line" />
              </div>
              <h2 className="font-heading font-bold text-base text-slate-900">
                Visa Service Pathways (11 Categories)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
              {visaServices.map((srv, idx) => (
                <button
                  key={srv.id}
                  onClick={() => handleNav('work', srv.id)}
                  className="text-left text-slate-700 hover:text-blue-600 font-medium flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="line-clamp-1">{srv.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Group 3: Countries We Serve */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">
                <RemixIcon name="ri-global-line" />
              </div>
              <h2 className="font-heading font-bold text-base text-slate-900">
                Regional Destinations (63 Countries)
              </h2>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {regionalDestinations.map((region, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('work', 'countries-we-serve-section')}
                    className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span>{region}</span>
                    <RemixIcon name="ri-compass-3-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 4: Legal & Informational Pages */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg">
                <RemixIcon name="ri-shield-check-line" />
              </div>
              <h2 className="font-heading font-bold text-base text-slate-900">
                Legal &amp; Policy Pages
              </h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Privacy Policy</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Terms &amp; Conditions</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cookies')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Cookie Policy</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('disclaimer')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Visa Disclaimer</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('security')}
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between w-full group cursor-pointer"
                >
                  <span>Security &amp; Data Protection</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-slate-400 group-hover:text-blue-600 text-xs" />
                </button>
              </li>
              <li className="pt-2 border-t border-slate-100">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold flex items-center justify-between w-full text-xs"
                >
                  <span>View Machine XML Sitemap (/sitemap.xml)</span>
                  <RemixIcon name="ri-external-link-line" className="text-xs" />
                </a>
              </li>
            </ul>
          </div>

          {/* Group 5: Office Desks & Direct Channels */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg">
                <RemixIcon name="ri-map-pin-2-line" />
              </div>
              <h2 className="font-heading font-bold text-base text-slate-900">
                Office Locations &amp; Direct Desks
              </h2>
            </div>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">Australia Head Office</p>
                <p>60 Corrigan Ave, Brooklyn, Melbourne 3012</p>
                <p className="font-semibold text-blue-700">{COMPANY_CONFIG.australiaPhone}</p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">India Branch Office</p>
                <p>Shop 1, Rodeo Drive, Kundli 131029 (Sonipat)</p>
                <p className="font-semibold text-blue-700">{COMPANY_CONFIG.indiaPhone}</p>
              </div>

              <div className="pt-1">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <RemixIcon name="ri-whatsapp-fill" className="text-base" />
                  <span>WhatsApp Direct Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
