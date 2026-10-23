import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from "../components/RemixIcon";

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const whyChooseItems = [
    {
      title: 'Australia-Based Specialist Team',
      desc: 'Our visa team is based in Australia and coordinates application support.',
      icon: 'ri-team-fill',
      tag: 'Key Advantage',
      color: 'blue'
    },
    {
      title: 'Worldwide Destinations',
      desc: 'Assistance for a broad range of countries across the globe.',
      icon: 'ri-global-line',
      tag: 'Global Reach',
      color: 'indigo'
    },
    {
      title: 'Multiple Visa Categories',
      desc: 'Support for tourism, education, family, employment, business and other visa categories.',
      icon: 'ri-passport-line',
      tag: 'All Pathways',
      color: 'emerald'
    },
    {
      title: 'Personalised Service',
      desc: "We take into account each client's destination, travel purpose and circumstances.",
      icon: 'ri-user-star-line',
      tag: 'Custom Plan',
      color: 'amber'
    },
    {
      title: 'Document Preparation Support',
      desc: 'Assistance with organising information and supporting documentation.',
      icon: 'ri-file-text-line',
      tag: 'Meticulous',
      color: 'purple'
    },
    {
      title: 'Clear Communication',
      desc: 'We explain the process, requirements and next steps as clearly as possible.',
      icon: 'ri-message-3-line',
      tag: 'Transparency',
      color: 'cyan'
    },
    {
      title: 'Two-Country Presence',
      desc: 'Our head office in India and branch office in Australia support our international service operations.',
      icon: 'ri-building-2-line',
      tag: 'India & Australia',
      color: 'rose'
    }
  ];

  const visaCategories = [
    {
      title: 'Higher Education & Study Visas',
      subtitle: 'Pursuing global degrees & qualifications',
      icon: 'ri-graduation-cap-line',
      iconBg: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Employment & Work Pathways',
      subtitle: 'Seeking international employment opportunities',
      icon: 'ri-briefcase-line',
      iconBg: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Family & Partner Migration',
      subtitle: 'Joining partner, parents, or family overseas',
      icon: 'ri-parent-line',
      iconBg: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Tourism & Family Holidays',
      subtitle: 'Exploring world destinations & leisure travel',
      icon: 'ri-plane-line',
      iconBg: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'International Business Visas',
      subtitle: 'Exploring cross-border trade & commercial ventures',
      icon: 'ri-community-line',
      iconBg: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO HEADER: JSR WORLD VISAS */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl p-8 sm:p-14 lg:p-16 border border-slate-800">
            {/* Background ambient accents */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl space-y-6">
              
              {/* Brand Tagline Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <RemixIcon name="ri-compass-3-line" className="text-sm text-blue-400" />
                <span>JSR WORLD VISAS | YOUR JOURNEY. OUR GUIDANCE.</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
                Your World, Your Opportunities, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300">Our Guidance.</span>
              </h1>

              {/* Welcome Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Welcome to <strong className="text-white font-semibold">JSR World Visas</strong>, your partner for worldwide visa application support. We assist individuals, families, students, professionals and businesses in exploring international travel, education, employment, family migration and business opportunities.
              </p>

              {/* Registered Presence Badge: Kundli (Sonipat) & Melbourne (Australia) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 text-xl font-bold">
                    🇮🇳
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-300 block">
                      Registered in India — Head Office
                    </span>
                    <p className="text-xs text-slate-200 font-medium mt-0.5">
                      Kundli, District Sonipat, Haryana 131029, India
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-xl font-bold">
                    🇦🇺
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block">
                      Branch Office — Australia
                    </span>
                    <p className="text-xs text-slate-200 font-medium mt-0.5">
                      Melbourne, Victoria, Australia
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal statement highlight */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 to-slate-800/60 border border-blue-500/20 text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-blue-300 font-semibold">Our Goal:</strong> To make the visa application journey clearer, more organised and easier to navigate by providing personalised assistance, practical guidance and professional support tailored to each client's requirements.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RemixIcon name="ri-calendar-check-line" className="text-base" />
                  <span>Request Visa Consultation</span>
                </button>
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello JSR World Visas! I would like to inquire about visa application support.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
                >
                  <RemixIcon name="ri-whatsapp-fill" className="text-lg" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => onNavigate('work')}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer"
                >
                  <span>Explore Destinations</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & CLIENT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Identity
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                Who We Are
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              <strong>JSR World Visas</strong> is an international visa consultancy business supporting clients with visa applications for destinations around the world.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We understand that every applicant has a different purpose for travelling. Whether you are planning a family holiday, pursuing higher education, seeking employment opportunities, joining your partner or family overseas, or exploring international business opportunities, our team aims to help you understand the relevant application process.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200 text-slate-700 text-sm font-medium">
              We believe in <strong className="text-slate-900">clear communication</strong>, <strong className="text-slate-900">attention to detail</strong>, <strong className="text-slate-900">responsible guidance</strong> and a <strong className="text-slate-900">client-focused approach</strong>.
            </div>
          </div>

          {/* Right: Who We Assist (Visa Purpose Categories) */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Who We Assist Across Destinations
            </span>
            {visaCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-xs flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl ${cat.iconBg}`}>
                  <RemixIcon name={cat.icon} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. OUR BIGGEST STRENGTH — SPECIALIST TEAM BASED IN AUSTRALIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl border border-blue-800/40">
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              <RemixIcon name="ri-award-fill" className="text-sm" />
              <span>Core Advantage</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Our Biggest Strength — Our Specialist Team Based in Australia
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Our specialist visa team is based in Australia, and our visa application support is coordinated by trained and experienced professionals based in Australia.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              This is an important part of our service model. Our team focuses on understanding the requirements of each destination, helping clients organise supporting documents, preparing applications within the agreed scope of service, and communicating the next steps clearly.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We aim to provide clients with a convenient point of contact and a more structured application experience, whether they are applying for a visa to Australia or another country.
            </p>

            {/* Regulatory Notice Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-start gap-3">
              <RemixIcon name="ri-shield-check-fill" className="text-emerald-400 text-2xl shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                Where immigration advice or legal representation is regulated, that advice or representation will be provided only by appropriately authorised professionals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR MISSION & OUR VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl">
                <RemixIcon name="ri-flag-2-line" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Purpose & Purposefulness
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our mission is to help people explore international opportunities through reliable information, careful application preparation and personalised customer support.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We strive to make international travel, study, work and family-related visa processes more accessible by helping clients understand the requirements and responsibilities associated with their applications.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-700">
              <RemixIcon name="ri-check-line" className="text-base" />
              <span>Reliable Information • Careful Preparation • Personal Support</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl">
                <RemixIcon name="ri-eye-line" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Future Horizon
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our vision is to establish <strong>JSR World Visas</strong> as a trusted international visa services brand, connecting people with opportunities across countries and continents through professional service, transparent communication and a commitment to responsible practices.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
              <RemixIcon name="ri-check-line" className="text-base" />
              <span>Trusted Global Brand • Cross-Continent Opportunities</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE JSR WORLD VISAS? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <RemixIcon name="ri-star-smile-line" className="text-sm" />
              <span>Distinctive Strengths</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Why Choose JSR World Visas?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Discover what sets our international visa support model apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all shadow-xs flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <RemixIcon name={item.icon} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. OUR COMMITMENT TO CLIENTS & DUAL PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
              Ethical & Transparent Service
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Our Commitment to Clients
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-semibold">
              At JSR World Visas, we believe every application deserves careful attention.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We aim to provide clear information about our services, applicable fees, required documents and the scope of assistance before proceeding. Visa eligibility and decisions remain subject to the laws and assessment procedures of the relevant government authority.
            </p>
          </div>

          {/* Slogan Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">
                The JSR World Visas Promise
              </span>
              <p className="font-heading font-extrabold text-lg sm:text-2xl text-white">
                “Your journey. Our guidance. Your world of possibilities.”
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
              >
                Schedule Consultation
              </button>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border border-white/20"
              >
                <RemixIcon name="ri-phone-line" className="text-base" />
                <span>Call Kundli Office</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
