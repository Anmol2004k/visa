import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  COMPANY_CONFIG, 
  COUNTRIES_DATA, 
  SERVICES_DATA, 
  TRUST_POINTS, 
  SIMPLE_PROCESS, 
  STUDENT_STORIES 
} from '../data/config';
import { CountryCard } from '../components/CountryCard';
import { ShortEnquiryForm } from '../components/ShortEnquiryForm';
import { RemixIcon } from "../components/RemixIcon";

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'Who is the leading overseas education consultant in Sonipat?',
      a: 'Instant Visa Sonipat, conveniently situated in Model Town near Subhash Chowk, is recognized as a premier overseas education and student visa consultancy in Sonipat. We provide genuine university shortlisting, financial documentation, and visa filing with zero false promises.'
    },
    {
      q: 'Where is Instant Visa located in Sonipat?',
      a: 'Our registered counseling branch is located at SCO 42, 1st Floor, Near Subhash Chowk, Model Town Road, Sonipat, Haryana 131001 — just 5 minutes from the Sonipat Railway Station.'
    },
    {
      q: 'Which countries can I apply to through Instant Visa Sonipat?',
      a: 'We handle end-to-end undergraduate and postgraduate admissions for the USA (F-1 visa), United Kingdom (Student Route), Canada (Study Permit), Australia (Subclass 500), Germany (APS & National Visa), and New Zealand.'
    },
    {
      q: 'Does Instant Visa Sonipat charge for initial profile evaluation?',
      a: 'No. Initial profile assessment, eligibility check, and university recommendations are 100% free of charge. You can walk into our Sonipat office or contact us on WhatsApp at +91 98107 55659.'
    },
    {
      q: 'What services are provided for student visa applicants?',
      a: 'Our services include university selection, SOP and LOR writing assistance, international scholarship applications, educational loan guidance, Embassy visa file compilation, and one-on-one mock interview sessions.'
    }
  ];
  // Helper to render dynamic lucide icon by name
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <RemixIcon name="ri-graduation-cap-fill" className="text-2xl text-blue-600" />;
      case 'ShieldCheck':
        return <RemixIcon name="ri-shield-check-fill" className="text-2xl text-blue-600" />;
      case 'Compass':
        return <RemixIcon name="ri-compass-3-line" className="text-2xl text-blue-600" />;
      case 'FileText':
        return <RemixIcon name="ri-file-text-line" className="text-2xl text-blue-600" />;
      default:
        return <RemixIcon name="ri-checkbox-circle-fill" className="text-2xl text-blue-600" />;
    }
  };

  const renderTrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <RemixIcon name="ri-shield-check-fill" className="text-2xl text-emerald-600" />;
      case 'MapPin':
        return <RemixIcon name="ri-map-pin-2-fill" className="text-2xl text-emerald-600" />;
      case 'Building':
        return <RemixIcon name="ri-building-line" className="text-2xl text-emerald-600" />;
      default:
        return <RemixIcon name="ri-group-line" className="text-2xl text-emerald-600" />;
    }
  };

  const renderProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <RemixIcon name="ri-compass-3-line" className="text-xl text-white" />;
      case 'Send':
        return <RemixIcon name="ri-send-plane-fill" className="text-xl text-white" />;
      case 'FileCheck':
        return <RemixIcon name="ri-file-check-line" className="text-xl text-white" />;
      default:
        return <RemixIcon name="ri-flight-takeoff-line" className="text-xl text-white" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-28 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Strong Headline & Conversion CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Sonipat’s Premier Overseas Education Consultancy</span>
              </div>

              {/* Strong Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
                Study at Top Global Universities with Confidence.
              </h1>

              {/* Very Short Supporting Line */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Expert university admissions and student visa counseling in Sonipat for USA, UK, Canada, Australia, New Zealand & Germany.
              </p>

              {/* Primary Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <RemixIcon name="ri-sparkling-fill" className="text-amber-300 text-lg" />
                  <span>Get Free Consultation</span>
                  <RemixIcon name="ri-arrow-right-line" className="text-base group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <RemixIcon name="ri-whatsapp-fill" className="text-xl" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Fast Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <RemixIcon name="ri-checkbox-circle-fill" className="text-emerald-600 text-base shrink-0" />
                  <span>Zero Fake Documents Policy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RemixIcon name="ri-checkbox-circle-fill" className="text-emerald-600 text-base shrink-0" />
                  <span>In-Person Desk in Model Town</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RemixIcon name="ri-checkbox-circle-fill" className="text-emerald-600 text-base shrink-0" />
                  <span>Direct University Processing</span>
                </div>
              </div>

            </div>

            {/* Right: Attractive High-Res Student & Campus Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-5/4">
                <img
                  src={COMPANY_CONFIG.heroImage}
                  alt="Students studying abroad at international university"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                {/* Floating In-Person Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <RemixIcon name="ri-graduation-cap-fill" className="text-xl" />
                    </div>
                    <div>
                      <span className="block font-bold text-xs text-slate-900">
                        Model Town, Sonipat Desk
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        Next Intakes: Fall 2025 & Spring 2026
                      </span>
                    </div>
                  </div>

                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="Call Desk"
                  >
                    <RemixIcon name="ri-phone-fill" className="text-base" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STUDY ABROAD COUNTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Top Destinations
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Study Abroad Countries
          </h2>
          <p className="text-sm text-slate-500">
            Select your preferred country to see stay-back work permits and admission criteria.
          </p>
        </div>

        {/* Large Country Cards with Flag Icons & Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COUNTRIES_DATA.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              onSelect={(cId) => {
                if (onSelectCountry) onSelectCountry(cId);
                onNavigate('work');
              }}
              onInquire={(cName) => onOpenConsultation(cName)}
            />
          ))}
        </div>
      </section>

      {/* 3. WHAT WE HELP WITH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
              End-to-End Guidance
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              What We Help With
            </h2>
            <p className="text-sm text-slate-500">
              Clear, structured support from first consultation to your university arrival.
            </p>
          </div>

          {/* 5 Visual Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3 text-center sm:text-left flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto sm:mx-0">
                  {renderServiceIcon(service.icon)}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY INSTANT VISA (Only 3-4 short trust points) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block">
            The Sonipat Advantage
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Why Instant Visa
          </h2>
          <p className="text-sm text-slate-500">
            Straightforward counseling with zero false promises.
          </p>
        </div>

        {/* 4 Trust Points Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((pt) => (
            <div
              key={pt.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 hover:border-emerald-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                {renderTrustIcon(pt.icon)}
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                {pt.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SIMPLE PROCESS: Choose → Apply → Prepare → Go */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">
              Step-By-Step
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight">
              Simple 4-Step Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Your clear roadmap from Sonipat to your foreign university campus.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SIMPLE_PROCESS.map((st, idx) => (
              <div
                key={st.step}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/50 text-blue-400 font-extrabold text-xs">
                    {st.label}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                    {renderProcessIcon(st.icon)}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold text-slate-400">
                    Step 0{st.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-white">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center relative z-10">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 transition-colors shadow-md cursor-pointer"
            >
              Start Step 1: Book Profile Evaluation
            </button>
          </div>

        </div>
      </section>

      {/* 6. STUDENT / CLIENT STORIES (Short testimonials) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Real Experiences
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Student & Client Stories
          </h2>
          <p className="text-sm text-slate-500">
            Real feedback from local students guided from our Sonipat center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{story.flag}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {story.city}
                  </span>
                </div>
                {/* Short 1-2 line testimonial */}
                <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="font-bold text-xs text-slate-900">{story.name}</p>
                <p className="text-[11px] text-slate-500">{story.universityOrStatus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STRONG CTA: "Ready to Start Your Journey?" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Our senior counselors in Sonipat are ready to review your academic transcripts and map your best university options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <RemixIcon name="ri-phone-fill" className="text-emerald-600 text-base" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <RemixIcon name="ri-whatsapp-fill" className="text-base" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION: Focused on 'Overseas Education Consultant in Sonipat' */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <RemixIcon name="ri-question-answer-line" className="text-sm text-blue-600" />
            <span>Search & FAQ</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Guidance for students searching for the most dependable overseas education consultant in Sonipat.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    {item.q}
                  </span>
                  <RemixIcon
                    name={isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}
                    className="text-slate-500 text-xl transition-transform shrink-0"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. SHORT ENQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Fast Response
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Quick Study Abroad Enquiry
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Tell us which country you're aiming for and our team will get in touch directly.
          </p>
        </div>

        <ShortEnquiryForm
          title="Send Quick Enquiry"
          subtitle="Direct consultation with our Model Town, Sonipat desk."
          defaultCountry="USA"
        />
      </section>

    </div>
  );
};
