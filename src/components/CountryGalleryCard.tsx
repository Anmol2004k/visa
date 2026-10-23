import React from 'react';
import { CountryDestination } from '../data/countriesGallery';
import { ImageWithFallback } from './ImageWithFallback';
import { CountryFlag } from './CountryFlag';
import { RemixIcon } from './RemixIcon';

interface CountryGalleryCardProps {
  country: CountryDestination;
  onExplore: (country: CountryDestination) => void;
}

export const CountryGalleryCard: React.FC<CountryGalleryCardProps> = ({ country, onExplore }) => {
  const [l1, l2, l3] = country.landmarks;

  return (
    <div
      onClick={() => onExplore(country)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExplore(country);
        }
      }}
      aria-label={`Explore ${country.name} visa options and landmarks`}
      className="group relative aspect-square w-full rounded-2xl overflow-hidden bg-[#0B1528] border border-blue-900/40 hover:border-blue-400/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400/60"
    >
      {/* ========================================================
          TOP SECTION: 2-3 AUTHENTIC LANDMARK PHOTOGRAPHS COLLAGE
         ======================================================== */}
      <div className="relative h-[48%] w-full grid grid-cols-12 gap-1 bg-[#070D1B] overflow-hidden shrink-0">
        {/* Landmark 1 (Primary - Col 7) */}
        <div className="col-span-7 h-full relative overflow-hidden">
          <ImageWithFallback
            src={l1.image}
            alt={`${l1.name} in ${country.name}`}
            fallbackTitle={l1.name}
            fallbackIcon={l1.icon}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/80 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-1.5 left-2 px-1.5 py-0.5 rounded bg-[#070D1B]/85 text-[10px] text-slate-200 backdrop-blur-xs line-clamp-1 border border-white/10 font-medium">
            {l1.name}
          </span>
        </div>

        {/* Landmarks 2 & 3 (Stacked - Col 5) */}
        <div className="col-span-5 h-full grid grid-rows-2 gap-1">
          <div className="relative overflow-hidden">
            <ImageWithFallback
              src={l2.image}
              alt={`${l2.name} in ${country.name}`}
              fallbackTitle={l2.name}
              fallbackIcon={l2.icon}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-1 left-1.5 px-1 py-0.2 rounded bg-[#070D1B]/85 text-[9px] text-slate-300 backdrop-blur-xs line-clamp-1 border border-white/10">
              {l2.name}
            </span>
          </div>

          <div className="relative overflow-hidden">
            <ImageWithFallback
              src={l3.image}
              alt={`${l3.name} in ${country.name}`}
              fallbackTitle={l3.name}
              fallbackIcon={l3.icon}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-1 left-1.5 px-1 py-0.2 rounded bg-[#070D1B]/85 text-[9px] text-slate-300 backdrop-blur-xs line-clamp-1 border border-white/10">
              {l3.name}
            </span>
          </div>
        </div>

        {/* Real Flag Image & Regional Tag on Top Left (No Emojis) */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#070D1B]/90 backdrop-blur-md border border-white/15 shadow-sm">
          <CountryFlag
            countryName={country.name}
            flagCode={country.flagCode}
            size="sm"
          />
          <span className="text-[10px] text-sky-300 font-bold uppercase tracking-wider">
            {country.region.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* ========================================================
          BOTTOM SECTION: COUNTRY INFO, LANDMARK ICONS, & CTA
         ======================================================== */}
      <div className="h-[52%] w-full p-4 flex flex-col justify-between bg-gradient-to-b from-[#0B1528] to-[#070D1B] border-t border-blue-900/50">
        <div className="space-y-1.5">
          {/* Country Name */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-heading font-extrabold text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors line-clamp-1">
              {country.name}
            </h3>
            {country.highlight && (
              <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-sky-300 border border-blue-400/40 font-bold">
                Priority
              </span>
            )}
          </div>

          {/* 25–35 word engaging description */}
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3 font-normal">
            {country.description}
          </p>
        </div>

        {/* Small Landmark Labels / Icons & Explore CTA */}
        <div className="pt-2 border-t border-blue-900/50 flex items-center justify-between gap-2">
          {/* Landmark Icon List */}
          <div className="flex items-center gap-1 text-[11px] text-slate-400 overflow-hidden">
            <span className="inline-flex items-center gap-1 shrink-0 text-sky-300/90 font-medium">
              <RemixIcon name={l1.icon} className="text-xs text-sky-400" />
              <span className="max-w-[70px] truncate">{l1.name.split(' ')[0]}</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="inline-flex items-center gap-1 shrink-0 text-slate-300">
              <RemixIcon name={l2.icon} className="text-xs text-slate-400" />
              <span className="max-w-[65px] truncate">{l2.name.split(' ')[0]}</span>
            </span>
          </div>

          {/* Explore Country CTA Button */}
          <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-sky-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">
            <span>Explore</span>
            <RemixIcon name="ri-arrow-right-line" className="text-xs" />
          </span>
        </div>
      </div>
    </div>
  );
};
