import React, { useEffect } from 'react';
import { CountryDestination } from '../data/countriesGallery';
import { LandmarkCard } from './LandmarkCard';
import { CountryFlag } from './CountryFlag';
import { RemixIcon } from './RemixIcon';
import { COMPANY_CONFIG } from '../data/config';

interface CountryDetailProps {
  country: CountryDestination;
  onClose: () => void;
  onOpenConsultation: (countryName: string) => void;
}

export const CountryDetail: React.FC<CountryDetailProps> = ({
  country,
  onClose,
  onOpenConsultation,
}) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#070D1B]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0B1528] border border-blue-900/70 rounded-3xl shadow-2xl text-white flex flex-col my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="country-detail-title"
      >
        {/* ========================================================
            HEADER BAR: BACK TO COUNTRIES & CLOSE BUTTON
           ======================================================== */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#0B1528]/95 backdrop-blur-md border-b border-blue-900/50 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 hover:text-white transition-colors cursor-pointer"
          >
            <RemixIcon name="ri-arrow-left-line" className="text-base" />
            <span>Back to Countries</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs text-slate-300 font-medium">
              {country.region}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close country details"
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <RemixIcon name="ri-close-line" className="text-xl" />
            </button>
          </div>
        </div>

        {/* ========================================================
            MAIN BODY CONTENT
           ======================================================== */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-gradient-to-b from-[#0B1528] via-[#091222] to-[#070D1B]">
          {/* Country Identity & Overview Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Real Flag Image - No Emojis */}
              <CountryFlag
                countryName={country.name}
                flagCode={country.flagCode}
                size="xl"
                className="shadow-md border border-white/20"
              />
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-[11px] font-bold uppercase tracking-wider mb-1">
                  <span>{country.region}</span>
                </div>
                <h2
                  id="country-detail-title"
                  className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight"
                >
                  {country.name}
                </h2>
              </div>
            </div>

            {/* Short Country Introduction (25–35 words) */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl font-normal">
              {country.description}
            </p>
          </div>

          {/* ========================================================
              THREE FAMOUS LANDMARKS / ATTRACTIONS GRID
             ======================================================== */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <RemixIcon name="ri-camera-3-line" className="text-sky-400" />
                <span>Famous Landmarks &amp; Tourist Attractions</span>
              </h3>
              <span className="text-xs text-sky-300 font-mono">3 Verified Highlights</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {country.landmarks.map((landmark, idx) => (
                <LandmarkCard key={idx} landmark={landmark} countryName={country.name} />
              ))}
            </div>
          </div>

          {/* ========================================================
              AVAILABLE VISA SERVICES IN THIS DESTINATION
             ======================================================== */}
          <div className="p-6 rounded-2xl bg-[#081020] border border-blue-900/50 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-heading font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <RemixIcon name="ri-passport-line" className="text-blue-400" />
                <span>Available Visa Application Support for {country.name}</span>
              </h3>
              <span className="text-xs text-sky-300 font-semibold">Specialist Coordination</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {country.visaTypes.map((vType, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0d182e] border border-blue-900/40 flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0"></span>
                  <span className="text-xs font-medium text-slate-200">{vType}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              CLEAR BULLET POINTS NOTICE (NO SUSPICIOUS / ALERT ICONS)
             ======================================================== */}
          <div className="p-5 rounded-2xl bg-[#081020] border border-blue-900/50 space-y-2.5 text-xs text-slate-300 leading-relaxed">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">
              Destination &amp; Visa Advisory Information:
            </p>
            <ul className="space-y-1.5 text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                <span>
                  Tourist attractions and landmark highlights are presented for destination discovery and travel planning purposes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                <span>
                  Visa requirements, eligibility criteria, and category availability vary by destination country and individual applicant profile.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                <span>
                  Official decisions remain subject to the relevant government authority, and applications are prepared in accordance with current immigration regulations.
                </span>
              </li>
            </ul>
          </div>

          {/* ========================================================
              CALL TO ACTION CONTROLS
             ======================================================== */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-blue-900/50">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
            >
              Browse Other Destinations
            </button>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  `Hello ${COMPANY_CONFIG.name}! I would like to inquire about visa application requirements for ${country.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <RemixIcon name="ri-whatsapp-fill" className="text-base" />
                <span>WhatsApp Desk for {country.name}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenConsultation(country.name);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <RemixIcon name="ri-send-plane-fill" className="text-sm" />
                <span>Inquire About {country.name} Visa</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
