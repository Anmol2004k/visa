import React, { useState, useMemo } from 'react';
import {
  COUNTRIES_GALLERY,
  CountryDestination,
  RegionName,
  REGIONS_LIST,
} from '../data/countriesGallery';
import { CountryGalleryCard } from './CountryGalleryCard';
import { CountryDetail } from './CountryDetail';
import { CountrySearch } from './CountrySearch';
import { RegionFilter } from './RegionFilter';
import { RemixIcon } from './RemixIcon';

interface CountryGridProps {
  onOpenConsultation: (countryName: string) => void;
  initialSelectedCountryName?: string;
}

const INITIAL_DISPLAY_LIMIT = 12;

export const CountryGrid: React.FC<CountryGridProps> = ({
  onOpenConsultation,
  initialSelectedCountryName,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionName | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [activeCountry, setActiveCountry] = useState<CountryDestination | null>(() => {
    if (initialSelectedCountryName) {
      const found = COUNTRIES_GALLERY.find(
        (c) => c.name.toLowerCase() === initialSelectedCountryName.toLowerCase()
      );
      return found || null;
    }
    return null;
  });

  // Calculate destination counts per region
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    REGIONS_LIST.forEach((r) => {
      counts[r.id] = 0;
    });
    COUNTRIES_GALLERY.forEach((c) => {
      counts[c.region] = (counts[c.region] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter countries based on region and search query
  const filteredCountries = useMemo(() => {
    let list = COUNTRIES_GALLERY;

    // Filter by Region
    if (selectedRegion !== 'All') {
      list = list.filter((c) => c.region === selectedRegion);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q) ||
          c.landmarks.some((l) => l.name.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedRegion, searchQuery]);

  // Determine whether to limit displayed items
  const isFiltered = selectedRegion !== 'All' || searchQuery.trim().length > 0;
  const visibleCountries = useMemo(() => {
    if (isFiltered || showAll) {
      return filteredCountries;
    }
    return filteredCountries.slice(0, INITIAL_DISPLAY_LIMIT);
  }, [filteredCountries, isFiltered, showAll]);

  const hasMoreToDisplay = !isFiltered && filteredCountries.length > INITIAL_DISPLAY_LIMIT;

  return (
    <section
      id="countries-we-serve"
      className="scroll-mt-24 space-y-8"
      aria-labelledby="countries-gallery-title"
    >
      {/* ========================================================
          LUXURY GALLERY CONTAINER (DARK BLUE, LIGHT BLUE, WHITE)
         ======================================================== */}
      <div className="rounded-3xl bg-[#070D1B] text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-blue-900/50">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Header Title & Intro */}
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              <RemixIcon name="ri-earth-line" className="text-sm" />
              <span>International Destination Gallery</span>
            </div>

            <h2
              id="countries-gallery-title"
              className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight"
            >
              Countries We Serve
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Explore 60+ worldwide travel corridors, prestigious higher education destinations, and
              migration pathways supported by our Australian specialist team and India branch office.
            </p>
          </div>

          {/* Search Bar & Fast Stats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <CountrySearch
              value={searchQuery}
              onChange={(q) => {
                setSearchQuery(q);
                if (q) setShowAll(true);
              }}
              resultCount={filteredCountries.length}
              totalCount={COUNTRIES_GALLERY.length}
            />

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <RemixIcon name="ri-map-pin-range-line" className="text-sky-400" />
                <span className="text-white font-bold">{COUNTRIES_GALLERY.length}</span> Sovereign Destinations
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <RemixIcon name="ri-compass-3-line" className="text-sky-400" />
                <span>7 Global Regions</span>
              </span>
            </div>
          </div>

          {/* Region Tabs / Filter */}
          <div className="pt-2 border-t border-blue-900/50">
            <RegionFilter
              selectedRegion={selectedRegion}
              onSelectRegion={(reg) => {
                setSelectedRegion(reg);
                setShowAll(false);
              }}
              regionCounts={regionCounts}
            />
          </div>

          {/* ========================================================
              SQUARE-FORMAT CARD GRID (1:1 ASPECT RATIO)
             ======================================================== */}
          {filteredCountries.length === 0 ? (
            /* Empty State */
            <div className="p-10 rounded-2xl bg-[#0B1528] border border-blue-900/60 text-center space-y-3 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-sky-400">
                <RemixIcon name="ri-search-eye-line" className="text-2xl" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                No destinations found for &quot;{searchQuery}&quot;
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We assist with visa applications for all recognized jurisdictions worldwide. Get in touch with our counselors for custom destination queries.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('All');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Responsive 1:1 Aspect Ratio Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                {visibleCountries.map((country) => (
                  <CountryGalleryCard
                    key={country.id}
                    country={country}
                    onExplore={(c) => setActiveCountry(c)}
                  />
                ))}
              </div>

              {/* View All / Show Less Controls (if initial limit applies) */}
              {hasMoreToDisplay && (
                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1528] hover:bg-[#112242] border border-blue-800/80 hover:border-sky-400 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer group"
                  >
                    <span>
                      {showAll
                        ? 'Show Less Destinations'
                        : `View All ${filteredCountries.length} Countries We Serve`}
                    </span>
                    <RemixIcon
                      name={showAll ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}
                      className="text-sky-400 text-base group-hover:translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              LEGAL NOTICE & OPERATIONAL FOOTER
             ======================================================== */}
          <div className="pt-6 border-t border-blue-900/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <RemixIcon name="ri-shield-check-line" className="text-sky-400 text-base shrink-0" />
              <span>
                Accurate documentation support compliant with destination immigration frameworks and bilateral entry treaties.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-slate-200 font-medium">
              <span>🇦🇺 Australia Head Office: +61 4300 53716</span>
              <span>🇮🇳 India Branch Office: +91 98107 55659</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          ACTIVE COUNTRY DETAIL MODAL / PANEL
         ======================================================== */}
      {activeCountry && (
        <CountryDetail
          country={activeCountry}
          onClose={() => setActiveCountry(null)}
          onOpenConsultation={(cName) => {
            setActiveCountry(null);
            onOpenConsultation(cName);
          }}
        />
      )}
    </section>
  );
};
