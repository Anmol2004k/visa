import React from 'react';
import { RemixIcon } from './RemixIcon';

interface CountrySearchProps {
  value: string;
  onChange: (query: string) => void;
  resultCount?: number;
  totalCount?: number;
}

export const CountrySearch: React.FC<CountrySearchProps> = ({
  value,
  onChange,
  resultCount,
  totalCount,
}) => {
  return (
    <div className="w-full max-w-md">
      <div className="relative group">
        <label htmlFor="country-search-input" className="sr-only">
          Search destination country
        </label>
        <RemixIcon
          name="ri-search-2-line"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-400 text-base transition-colors"
        />
        <input
          id="country-search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search destination (e.g., Australia, Germany, UAE, Japan)..."
          className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#0B1528] border border-blue-900/60 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 shadow-inner transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <RemixIcon name="ri-close-line" className="text-base" />
          </button>
        )}
      </div>

      {/* Live Search Status */}
      {value.trim() && typeof resultCount === 'number' && (
        <p className="mt-2 text-xs text-slate-400 flex items-center justify-between px-1">
          <span>
            Found <span className="font-semibold text-sky-300 font-mono">{resultCount}</span> of{' '}
            <span className="font-mono">{totalCount}</span> destinations
          </span>
          {resultCount === 0 && (
            <span className="text-sky-300 font-medium">Try another country name</span>
          )}
        </p>
      )}
    </div>
  );
};
