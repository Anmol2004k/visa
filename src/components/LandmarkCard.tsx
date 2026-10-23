import React from 'react';
import { Landmark } from '../data/countriesGallery';
import { ImageWithFallback } from './ImageWithFallback';
import { RemixIcon } from './RemixIcon';

interface LandmarkCardProps {
  landmark: Landmark;
  countryName?: string;
}

export const LandmarkCard: React.FC<LandmarkCardProps> = ({ landmark, countryName }) => {
  return (
    <div className="group rounded-2xl bg-slate-900 border border-slate-800/90 overflow-hidden shadow-md hover:border-amber-400/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Visual Photography Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
        <ImageWithFallback
          src={landmark.image}
          alt={`${landmark.name} in ${countryName || 'destination'}`}
          fallbackTitle={landmark.name}
          fallbackIcon={landmark.icon}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Landmark Icon Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
          <RemixIcon name={landmark.icon} className="text-sm" />
          <span className="text-[11px] text-slate-200">Featured Highlight</span>
        </div>
      </div>

      {/* Description Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2 bg-gradient-to-b from-slate-900 to-slate-950">
        <div>
          <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
            {landmark.name}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mt-1.5 line-clamp-3">
            {landmark.description}
          </p>
        </div>

        <div className="pt-2 flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium">
          <RemixIcon name="ri-map-pin-2-line" className="text-xs" />
          <span>Verified Destination Landmark</span>
        </div>
      </div>
    </div>
  );
};
