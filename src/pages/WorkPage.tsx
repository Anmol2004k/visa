import React, { useState } from 'react';
import { PageId } from '../types';
import { COUNTRIES_DATA, COMPANY_CONFIG } from '../data/config';
import { CountryCard } from '../components/CountryCard';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  GraduationCap, 
  Briefcase, 
  Clock, 
  FileText
} from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (country?: string) => void;
  selectedCountryId?: string;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigate,
  onOpenConsultation,
  selectedCountryId = 'usa',
}) => {
  const [activeCountryId, setActiveCountryId] = useState<string>(selectedCountryId);
  const activeCountry = COUNTRIES_DATA.find((c) => c.id === activeCountryId) || COUNTRIES_DATA[0];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. VISUAL HEADER HERO */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl">
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Global Education Frameworks</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
                Our Work & University Pathways.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Strategic admissions and visa processing for 6 world-leading educational destinations. Select any country below to explore stay-back rights and intake timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COUNTRY SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Country Quick Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {COUNTRIES_DATA.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCountryId(c.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeCountryId === c.id
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="text-base">{c.flagCode}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Active Country Detail Feature Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Visual Imagery */}
          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px]">
            <img
              src={activeCountry.image}
              alt={`Study in ${activeCountry.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="flex items-center gap-2 text-2xl font-extrabold">
                <span>{activeCountry.flagCode}</span>
                <span>{activeCountry.name}</span>
              </div>
              <p className="text-xs text-blue-200 font-semibold mt-1">
                Visa: {activeCountry.visaType}
              </p>
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-base text-slate-800 font-medium leading-relaxed">
                {activeCountry.oneLiner}
              </p>

              {/* 4 Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Stay-Back</span>
                  <span className="text-xs font-bold text-slate-800 block mt-0.5">{activeCountry.stayBack}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Tuition Range</span>
                  <span className="text-xs font-bold text-slate-800 block mt-0.5">{activeCountry.tuition}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Major Intakes</span>
                  <span className="text-xs font-bold text-slate-800 block mt-0.5">{activeCountry.intake}</span>
                </div>
              </div>

              {/* Top Courses */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  High Demand Career Streams:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCountry.topCourses.map((crs, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold"
                    >
                      {crs}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenConsultation(activeCountry.name)}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Start {activeCountry.name} Application</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi, I want to inquire about university admissions for ${activeCountry.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Counselor</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ALL 6 COUNTRIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            All Destinations
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Explore All 6 Study Hubs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COUNTRIES_DATA.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              onSelect={(id) => {
                setActiveCountryId(id);
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              onInquire={(cName) => onOpenConsultation(cName)}
            />
          ))}
        </div>
      </section>

      {/* 4. FAST 30-SECOND ELIGIBILITY CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 text-center max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block">
              Quick Readiness
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Basic Documents You Need to Get Started
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Bring these to our Model Town, Sonipat desk for an instant profile evaluation:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>10th, 12th & Graduation Marksheets</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Valid Passport</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>IELTS / TOEFL / PTE Score (if taken)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Statement of Purpose (we help draft)</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
            >
              Book In-Person Document Evaluation in Sonipat
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
