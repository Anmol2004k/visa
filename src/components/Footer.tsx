import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG, COUNTRIES_DATA } from '../data/config';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ShieldAlert, 
  ArrowUpRight, 
  Sparkles,
  Compass,
  CheckCircle2,
  ExternalLink,
  Award,
  ShieldCheck,
  Building2,
  FileCheck2,
  Globe2
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCountry?: (countryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCountry }) => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#080d19] text-slate-300 border-t border-slate-800 relative overflow-hidden">
      
      {/* CREATIVE BACKGROUND GLOW & GEOMETRIC ACCENTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* TOP PRE-FOOTER: CREATIVE SOCIAL PROOF & ADMISSION CALLOUT */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Inspiring Headline & Trust Metrics */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Next Intake Admissions Open: Fall 2025 & Spring 2026</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                Step Confidently into Your International Campus.
              </h2>

              <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
                Meet our senior advisors face-to-face at our Sonipat desk. We review academic transcripts, prepare bulletproof visa files, and practice embassy interviews with zero false guarantees.
              </p>

              {/* Social Proof Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">6 Countries</span>
                    <span className="text-[10px] text-slate-500">Official Pathways</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">100% Genuine</span>
                    <span className="text-[10px] text-slate-500">Zero-Fake Policy</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">Local Desk</span>
                    <span className="text-[10px] text-slate-500">Model Town, Sonipat</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">Full Visa File</span>
                    <span className="text-[10px] text-slate-500">Mock Interview Studio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick In-Person & WhatsApp Action Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Sonipat Center Hotline
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Walk-ins Welcome
                </span>
              </div>

              <div>
                <p className="font-heading font-bold text-lg text-white">
                  Speak Directly With a Senior Counselor
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Have questions regarding your marksheet eligibility or visa rules? Connect with our dedicated Haryana desk team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-900/40 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>

                <button
                  onClick={() => handlePageClick('contact')}
                  className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Sonipat Office Details</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* DESTINATION QUICK SELECTOR PILL TAPE */}
      <div className="border-b border-slate-800/80 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 shrink-0">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Explore Country Pathways:</span>
            </span>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full">
              {COUNTRIES_DATA.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleCountryClick(c.id)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>{c.flagCode}</span>
                  <span>{c.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN STRUCTURED 4-COLUMN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Regional Leadership (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight block">
                  {COMPANY_CONFIG.name}
                </span>
                <span className="text-[11px] text-blue-400 font-bold uppercase tracking-wider block">
                  Overseas Education & Visas
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Sonipat’s premier overseas education consultancy providing ethical university admissions and student visa advisory for the USA, UK, Canada, Australia, New Zealand, and Germany.
            </p>

            {/* Sonipat Physical Presence Pill */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <strong className="text-slate-200">Sonipat Center Location:</strong>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed pl-5">
                SCO 42, Model Town Road, Near Subhash Chowk, Sonipat, Haryana 131001.
              </p>
            </div>

            {/* Social Proof Credibility Stamp */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Zero agent markups • 100% Direct institutional applications</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Navigation
              </h4>
            </div>
            
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>About Our Desk</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('work')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Our Work & Guides</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Contact & Sonipat Office</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Comprehensive Advisory Pillars (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Advisory Standards
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Strict Zero-Fake-Document Protocol</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Custom SOP & LOR Drafting Reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>US F-1 Visa Embassy Mock Drill Studio</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Germany APS & Blocked Account Setup</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Education Loan Structuring & GIC Kit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Transparent Realistic Fee Benchmarks</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Touchpoints & Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Direct Touchpoints
              </h4>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-medium"
                >
                  WhatsApp: {COMPANY_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{COMPANY_CONFIG.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_CONFIG.officeAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* DISTINCTIVE MANDATORY LEGAL DISCLAIMER CARD */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/90 border border-amber-500/25 text-slate-300 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Official Regulatory Notice & Ethical Disclosure</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {COMPANY_CONFIG.disclaimer}
          </p>
        </div>

        {/* BOTTOM SIGNATURE & COPYRIGHT BAR */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>
              © {currentYear} {COMPANY_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Empowering students and families across Sonipat, Panipat, Rohtak, Murthal, and Delhi-NCR.
            </p>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <button 
              onClick={() => handlePageClick('about')} 
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              About Desk
            </button>
            <span>•</span>
            <button 
              onClick={() => handlePageClick('work')} 
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Study Guides
            </button>
            <span>•</span>
            <button 
              onClick={() => handlePageClick('contact')} 
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Sonipat Center
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
