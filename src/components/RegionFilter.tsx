import React from 'react';
import { RegionName, REGIONS_LIST } from '../data/countriesGallery';
import { RemixIcon } from './RemixIcon';

interface RegionFilterProps {
  selectedRegion: RegionName | 'All';
  onSelectRegion: (region: RegionName | 'All') => void;
  regionCounts: Record<string, number>;
}

export const RegionFilter: React.FC<RegionFilterProps> = ({
  selectedRegion,
  onSelectRegion,
  regionCounts,
}) => {
  const totalCount = Object.values(regionCounts).reduce((acc: number, val: number) => acc + (val || 0), 0);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
        {/* All Destinations Button */}
        <button
          type="button"
          onClick={() => onSelectRegion('All')}
          className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
            selectedRegion === 'All'
              ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold'
              : 'bg-[#0B1528] text-slate-300 border-blue-900/60 hover:bg-[#122244] hover:text-white'
          }`}
        >
          <RemixIcon name="ri-earth-line" className="text-sm" />
          <span className="whitespace-nowrap">All Destinations</span>
          <span
            className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
              selectedRegion === 'All'
                ? 'bg-white/20 text-white'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {totalCount}
          </span>
        </button>

        {/* Regional Buttons */}
        {REGIONS_LIST.map((r) => {
          const isSelected = selectedRegion === r.id;
          const count = regionCounts[r.id] || 0;

          return (
            <button
              key={r.id}
              type="button"
              onClick={() => onSelectRegion(r.id)}
              className={`shrink-0 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold'
                  : 'bg-[#0B1528] text-slate-300 border-blue-900/60 hover:bg-[#122244] hover:text-white'
              }`}
            >
              <RemixIcon name={r.icon} className="text-sm" />
              <span className="whitespace-nowrap">{r.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
