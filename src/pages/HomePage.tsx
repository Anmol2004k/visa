import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { CountryFlag } from '../components/CountryFlag';
import { RemixIcon } from '../components/RemixIcon';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (country?: string) => void;
  onSelectCountry?: (countryId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectCountry,
}) => {
  // 1. Featured Services (8 Categories as requested)
  const servicesList = [
    {
      id: 'tourist-visitor',
      title: 'Tourist & Visitor Visas',
      description: 'Comprehensive application assistance for holidays, leisure travel, and visiting family abroad.',
      icon: 'ri-compass-3-line',
      badge: 'Tourism & Leisure',
      accentColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      id: 'student-education',
      title: 'Student Visas',
      description: 'Structured admission shortlisting, financial checklist preparation, and student visa filing.',
      icon: 'ri-graduation-cap-line',
      badge: 'Global Education',
      accentColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      id: 'partner-family',
      title: 'Family & Partner Visas',
      description: 'Compassionate assistance for uniting couples, dependent children, and parents across borders.',
      icon: 'ri-heart-line',
      badge: 'Family Reunion',
      accentColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    },
    {
      id: 'work-employment',
      title: 'Work Visas',
      description: 'Application guidance for employer-sponsored roles, temporary workers, and intra-company transfers.',
      icon: 'ri-briefcase-line',
      badge: 'Careers & Mobility',
      accentColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      id: 'skilled-migration',
      title: 'Skilled Migration',
      description: 'Points-tested assessment coordination, state nominations, and permanent residency options.',
      icon: 'ri-award-line',
      badge: 'Permanent Residency',
      accentColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'business-investor',
      title: 'Business Visas',
      description: 'Strategic visa solutions for commercial innovators, high-net-worth investors, and entrepreneurs.',
      icon: 'ri-money-dollar-circle-line',
      badge: 'Corporate & Venture',
      accentColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      id: 'extensions-renewals',
      title: 'Visa Extensions & Renewals',
      description: 'Timely in-country stay extensions, status adjustments, bridging permits, and renewal lodgements.',
      icon: 'ri-refresh-line',
      badge: 'Status Maintenance',
      accentColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
    {
      id: 'visa-refusal-support',
      title: 'Visa Refusal Support',
      description: 'Objective decision record review, documentary deficiency analysis, and re-application strategy.',
      icon: 'ri-shield-check-line',
      badge: 'Decision Review',
      accentColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
  ];

  // 2. Continuous Marquee Countries (USA, UK, Canada, Australia, NZ, Germany, France, Italy, Japan, Singapore, UAE, etc.)
  const marqueeCountries = [
    { name: 'USA', flagCode: 'us' },
    { name: 'UK', flagCode: 'gb' },
    { name: 'Canada', flagCode: 'ca' },
    { name: 'Australia', flagCode: 'au' },
    { name: 'New Zealand', flagCode: 'nz' },
    { name: 'Germany', flagCode: 'de' },
    { name: 'France', flagCode: 'fr' },
    { name: 'Italy', flagCode: 'it' },
    { name: 'Japan', flagCode: 'jp' },
    { name: 'Singapore', flagCode: 'sg' },
    { name: 'UAE', flagCode: 'ae' },
    { name: 'Switzerland', flagCode: 'ch' },
    { name: 'Ireland', flagCode: 'ie' },
    { name: 'Spain', flagCode: 'es' },
    { name: 'South Korea', flagCode: 'kr' },
    { name: 'Netherlands', flagCode: 'nl' },
  ];

  // 3. Opportunities for Every Journey (Four Audience Groups)
  const audienceGroups = [
    {
      title: 'Students',
      tagline: 'Global Education Pathways',
      description: 'End-to-end guidance for university admissions, academic documentation, SOP preparation, and student visa filing for world-renowned institutions.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Explore Student Pathways',
      actionId: 'student-education',
      badgeColor: 'bg-blue-600/90 text-white',
    },
    {
      title: 'Professionals & Workers',
      tagline: 'International Careers',
      description: 'Objective support for skilled employment visas, employer-sponsored programs, regional initiatives, and professional mobility across continents.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Explore Work Pathways',
      actionId: 'work-employment',
      badgeColor: 'bg-emerald-600/90 text-white',
    },
    {
      title: 'Travelers',
      tagline: 'Tourism & Family Reunions',
      description: 'Meticulous documentation support for holidaymakers, conference attendees, and family members visiting loved ones worldwide.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Explore Visitor Visas',
      actionId: 'tourist-visitor',
      badgeColor: 'bg-amber-600/90 text-white',
    },
    {
      title: 'Explorers & Entrepreneurs',
      tagline: 'Commercial & Global Ventures',
      description: 'Specialist assistance for commercial delegations, business innovation programs, startup visas, and international enterprise opportunities.',
      image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Explore Business Visas',
      actionId: 'business-investor',
      badgeColor: 'bg-purple-600/90 text-white',
    },
  ];

  // 4. Testimonials (Genuine & Authorised Client Feedback)
  const clientTestimonials = [
    {
      quote: 'The team provided clear and transparent checklists for my student visa application. The guidance on financial evidence and visa filing gave my family immense peace of mind.',
      author: 'Amanpreet S.',
      destination: 'United States',
      flagCode: 'us',
      category: 'F-1 Student Visa Guidance',
      verified: true,
    },
    {
      quote: 'Direct, honest communication with zero false promises. They reviewed my refusal history objectively and helped prepare a clean, thorough re-application.',
      author: 'Pooja M.',
      destination: 'United Kingdom',
      flagCode: 'gb',
      category: 'Student Route Re-Application',
      verified: true,
    },
    {
      quote: 'Coordinating between their Australia and India desks made our family visitor visa process exceptionally smooth. Highly professional and responsive counselors.',
      author: 'Rajinder K.',
      destination: 'Australia',
      flagCode: 'au',
      category: 'Visitor & Family Visa Support',
      verified: true,
    },
  ];

  const handleCountryClick = (cName: string) => {
    if (onSelectCountry) onSelectCountry(cName.toLowerCase());
    onNavigate('work');
    setTimeout(() => {
      const el = document.getElementById('countries-we-serve-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleServiceClick = (serviceId: string) => {
    onNavigate('work');
    setTimeout(() => {
      const el = document.getElementById(serviceId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 100);
  };

  // ========================================================
  // HERO CAROUSEL DATA (3 Interactive Slides)
  // ========================================================
  const heroSlides = [
    {
      id: 'study-abroad',
      category: 'Study Abroad',
      icon: 'ri-graduation-cap-line',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85',
      imageAlt: 'International students studying on a university campus',
      headline: 'Your Future Knows No Borders.',
      headlinePrefix: 'Your Future Knows ',
      headlineHighlight: 'No Borders.',
      description: 'Comprehensive university admissions, academic profile evaluation, scholarship guidance, and student visa filing for top colleges worldwide.',
      ctaText: 'Explore Student Visas',
      actionId: 'student-education',
      accentGradient: 'from-blue-300 via-sky-200 to-amber-300',
    },
    {
      id: 'work-abroad',
      category: 'Work Abroad',
      icon: 'ri-briefcase-line',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
      imageAlt: 'Professionals working in an international modern city',
      headline: 'Take Your Career Worldwide.',
      headlinePrefix: 'Take Your Career ',
      headlineHighlight: 'Worldwide.',
      description: 'Strategic assistance for employer-sponsored visas, skilled migration, intra-company transfers, and international professional career mobility.',
      ctaText: 'Explore Work Visas',
      actionId: 'work-employment',
      accentGradient: 'from-emerald-300 via-teal-200 to-amber-300',
    },
    {
      id: 'travel-world',
      category: 'Travel the World',
      icon: 'ri-compass-3-line',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=85',
      imageAlt: 'Scenic international travel destination with world travelers',
      headline: 'Discover the World with Confidence.',
      headlinePrefix: 'Discover the World ',
      headlineHighlight: 'with Confidence.',
      description: 'Thorough application preparation for holiday itineraries, leisure vacations, conference visits, and reuniting with family members abroad.',
      ctaText: 'Explore Visitor Visas',
      actionId: 'tourist-visitor',
      accentGradient: 'from-amber-300 via-rose-200 to-sky-200',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Restart autoplay smoothly on manual interaction
  const resetTimer = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    if (isPlaying && !isHovered) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5500);
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    resetTimer();
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    resetTimer();
  };

  const handleGoToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Autoplay Effect (5.5s rotation)
  useEffect(() => {
    if (isPlaying && !isHovered) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5500);
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlaying, isHovered]);

  const activeSlide = heroSlides[currentSlide];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 selection:bg-blue-600 selection:text-white">
      
      {/* ========================================================
          1. HERO SECTION (Interactive Background Carousel)
         ======================================================== */}
      <section
        role="region"
        aria-roledescription="carousel"
        aria-label="JSR World Visas Service Pathways Carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image Carousel Layers with Smooth Crossfade & Subtle Zoom */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slide.category}: Slide ${idx + 1} of ${heroSlides.length}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className={`w-full h-full object-cover object-center transition-transform duration-[6500ms] ease-out motion-reduce:transform-none ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
                {/* Deep Navy Gradient Overlays for High Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/95 via-[#0B1528]/85 to-[#070D1B]/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-transparent to-[#070D1B]/70" />
              </div>
            );
          })}

          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Previous & Next Navigation Arrows (Accessible & Touch Friendly) */}
        <button
          type="button"
          onClick={handlePrevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/60 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 hover:border-blue-400 transition-all flex items-center justify-center shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <RemixIcon name="ri-arrow-left-s-line" className="text-xl sm:text-2xl" />
        </button>

        <button
          type="button"
          onClick={handleNextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/60 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 hover:border-blue-400 transition-all flex items-center justify-center shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <RemixIcon name="ri-arrow-right-s-line" className="text-xl sm:text-2xl" />
        </button>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28 sm:py-28 space-y-6 sm:space-y-8">
          
          {/* Brand Slogan Badge (Prominent & Persistent across all 3 slides) */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-slate-100 text-xs sm:text-sm font-semibold tracking-wide shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-amber-300 font-extrabold uppercase tracking-wider text-[11px] sm:text-xs">
              JSR WORLD VISAS
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-white font-bold tracking-wide">
              &ldquo;Your Journey. Our Guidance.&rdquo;
            </span>
          </div>

          {/* Slide Category Indicator */}
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-sky-200 text-xs font-semibold uppercase tracking-wider border border-white/15">
              <RemixIcon name={activeSlide.icon} className="text-amber-400 text-sm" />
              <span>{activeSlide.category}</span>
            </span>
          </div>

          {/* Dynamic Headline per Slide with Smooth Fade */}
          <div className="min-h-[72px] sm:min-h-[110px] md:min-h-[130px] flex items-center justify-center">
            <h1
              key={`headline-${currentSlide}`}
              className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] animate-in fade-in duration-500"
            >
              {activeSlide.headlinePrefix}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeSlide.accentGradient}`}>
                {activeSlide.headlineHighlight}
              </span>
            </h1>
          </div>

          {/* Dynamic Description per Slide with Smooth Fade */}
          <div className="min-h-[48px] sm:min-h-[56px] flex items-center justify-center">
            <p
              key={`desc-${currentSlide}`}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed animate-in fade-in duration-500"
            >
              {activeSlide.description}
            </p>
          </div>

          {/* Primary Dynamic CTA + Secondary Consistent "Contact Us" CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 sm:pt-4">
            <button
              type="button"
              onClick={() => handleServiceClick(activeSlide.actionId)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-600/35 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <span>{activeSlide.ctaText}</span>
              <RemixIcon
                name="ri-arrow-right-line"
                className="text-lg group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-bold text-sm sm:text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <RemixIcon name="ri-chat-1-line" className="text-amber-400 text-lg" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Interactive Slide Controls Toolbar: Category Pills, Indicators & Pause/Play */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Interactive Category Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/15 shadow-xl">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => handleGoToSlide(idx)}
                    aria-label={`Go to ${slide.category} slide`}
                    aria-current={isActive ? 'true' : 'false'}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <RemixIcon name={slide.icon} className={isActive ? 'text-amber-300' : 'text-slate-400'} />
                    <span>{slide.category}</span>
                  </button>
                );
              })}

              {/* Pause / Play Control */}
              <div className="pl-1 sm:pl-2 ml-1 sm:ml-2 border-l border-white/15">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause automatic slide rotation' : 'Resume automatic slide rotation'}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-white/10 transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
                >
                  <RemixIcon
                    name={isPlaying ? 'ri-pause-circle-line' : 'ri-play-circle-line'}
                    className="text-lg sm:text-xl"
                  />
                </button>
              </div>
            </div>

            {/* Slide Progress Indicators (Accessible dots) */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleGoToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? 'w-6 bg-amber-400'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Credibility Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <RemixIcon name="ri-checkbox-circle-fill" className="text-emerald-400 text-sm" />
              <span>Melbourne-Coordinated Operations</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RemixIcon name="ri-checkbox-circle-fill" className="text-emerald-400 text-sm" />
              <span>Zero False Promises Policy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RemixIcon name="ri-checkbox-circle-fill" className="text-emerald-400 text-sm" />
              <span>63+ Global Destinations</span>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          2. SCROLLING COUNTRIES & FLAGS (Continuous Infinite Marquee)
         ======================================================== */}
      <section className="relative bg-[#070D1B] py-6 border-y border-blue-900/40 overflow-hidden group">
        <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-300">
              Global Destinations We Support
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-300 hidden sm:inline-block">
            Hover to pause • Click to view visa options
          </span>
        </div>

        {/* Marquee Track Container with smooth infinite loop */}
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="animate-marquee flex items-center gap-3 sm:gap-4 py-1">
            {/* Sequence 1 */}
            {marqueeCountries.map((c, idx) => (
              <button
                key={`m1-${idx}-${c.name}`}
                onClick={() => handleCountryClick(c.name)}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-semibold shrink-0 cursor-pointer shadow-xs focus:outline-none"
              >
                <CountryFlag countryName={c.name} flagCode={c.flagCode} size="sm" />
                <span>{c.name}</span>
              </button>
            ))}

            {/* Sequence 2 (Duplicated for seamless loop without visual gaps) */}
            {marqueeCountries.map((c, idx) => (
              <button
                key={`m2-${idx}-${c.name}`}
                onClick={() => handleCountryClick(c.name)}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-semibold shrink-0 cursor-pointer shadow-xs focus:outline-none"
              >
                <CountryFlag countryName={c.name} flagCode={c.flagCode} size="sm" />
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          3. OUR SERVICES (8 Premium Visual Service Cards)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <RemixIcon name="ri-passport-line" className="text-sm text-blue-600" />
            <span>Structured Service Portfolio</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Our Visa &amp; Immigration Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Methodical document preparation, compliant application lodging, and transparent progress updates across key international streams.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/70 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div className="space-y-4">
                {/* Header with icon & badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border ${srv.accentColor} transition-transform group-hover:scale-105 duration-300`}>
                    <RemixIcon name={srv.icon} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {srv.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => handleServiceClick(srv.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Explore Service</span>
                  <RemixIcon
                    name="ri-arrow-right-line"
                    className="text-xs group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>View All Services &amp; Requirements</span>
            <RemixIcon name="ri-arrow-right-line" className="text-base" />
          </button>
        </div>
      </section>


      {/* ========================================================
          4. WHO WE SERVE: "OPPORTUNITIES FOR EVERY JOURNEY"
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <RemixIcon name="ri-group-line" className="text-sm text-emerald-600" />
            <span>Audience Pathways</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Opportunities for Every Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Whether pursuing world-class degrees, advancing your global career, exploring foreign destinations, or launching business ventures.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {audienceGroups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className={`absolute bottom-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm ${group.badgeColor}`}>
                    {group.tagline}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    {group.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Card CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleServiceClick(group.actionId)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{group.ctaText}</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================
          5. EXPERIENCE & IMPACT COUNTERS (Verified & Centralized)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1528] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-900/50 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-2 mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              Verified Operational Scope
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Experience &amp; Operational Impact
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Clear, transparent statistics reflecting genuine service capabilities and physical presence.
            </p>
          </div>

          {/* 4 Counter Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_CONFIG.impactStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#070D1B]/80 rounded-2xl p-6 border border-blue-900/40 hover:border-amber-400/40 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-amber-400 flex items-center justify-center text-xl">
                  <RemixIcon name={stat.icon} />
                </div>
                <div className="space-y-1">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight block">
                    {stat.value}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-200">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote note regarding transparency */}
          <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-[11px] text-slate-400">
              Note: JSR World Visas publishes strictly verified figures without fabricated success rates or arbitrary claims.
            </p>
          </div>

        </div>
      </section>


      {/* ========================================================
          6. TESTIMONIALS: "WHAT OUR CLIENTS SAY"
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <RemixIcon name="ri-chat-check-line" className="text-sm text-blue-600" />
            <span>Client Experiences</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Genuine feedback from individuals and families guided through our Melbourne and Kundli counseling centers.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {clientTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              {/* Quote text */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    <RemixIcon name="ri-double-quotes-l" className="text-2xl text-blue-600" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <CountryFlag countryName={t.destination} flagCode={t.flagCode} size="sm" />
                    <span>{t.destination}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    {t.author}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {t.category}
                  </p>
                </div>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <RemixIcon name="ri-shield-check-fill" className="text-xs text-emerald-600" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================
          7. FINAL CALL TO ACTION (Visually Striking, Zero Forms)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#070D1B] via-[#0B1528] to-[#101D38] text-white p-8 sm:p-14 lg:p-16 border border-blue-900/60 shadow-2xl overflow-hidden text-center space-y-6 sm:space-y-8">
          
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Start With Confidence
            </span>
            
            {/* Headline */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Ready to Begin Your Global Journey?
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              Let&apos;s explore the next steps for your international plans.
            </p>
          </div>

          {/* Buttons (Three distinct CTAs as requested, ZERO forms) */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <RemixIcon name="ri-arrow-right-line" className="text-sm" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RemixIcon name="ri-mail-send-line" className="text-amber-400 text-base" />
              <span>Contact Us</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
            >
              <RemixIcon name="ri-whatsapp-fill" className="text-base text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Dual Office Note */}
          <div className="relative z-10 pt-4 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
            <span>🇦🇺 Melbourne Head Office: {COMPANY_CONFIG.australiaPhone}</span>
            <span>•</span>
            <span>🇮🇳 India Branch Office: {COMPANY_CONFIG.indiaPhone}</span>
          </div>

        </div>
      </section>

    </div>
  );
};
