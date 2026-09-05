import React from 'react';
import { CountryInfo } from '../types';
import { ArrowRight, Clock, Briefcase } from 'lucide-react';

interface CountryCardProps {
  country: CountryInfo;
  onSelect: (countryId: string) => void;
  onInquire: (countryName: string) => void;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country, onSelect, onInquire }) => {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Visual Photography Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
        <img
          src={country.image}
          alt={`Study in ${country.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

        {/* Floating Flag & Country Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md text-slate-900 text-xs font-extrabold">
          <span className="text-lg">{country.flagCode}</span>
          <span>{country.name}</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-300 block">
            {country.visaType}
          </span>
          <p className="text-xs sm:text-sm font-semibold text-white line-clamp-1 mt-0.5">
            {country.stayBack}
          </p>
        </div>
      </div>

      {/* Body: 1 Short Line Description & Key Stats */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Exactly 1 short line description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {country.oneLiner}
          </p>

          {/* Quick pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold">
              Tuition: {country.tuition}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-semibold">
              Intakes: {country.intake}
            </span>
          </div>
        </div>

        {/* Clean Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => onInquire(country.name)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer text-center"
          >
            Apply for {country.name}
          </button>
          <button
            onClick={() => onSelect(country.id)}
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            title={`View ${country.name} details`}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
