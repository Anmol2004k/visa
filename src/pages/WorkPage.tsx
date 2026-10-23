import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';
import { CountryGrid } from '../components/CountryGrid';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (country?: string) => void;
  selectedCountryId?: string;
}

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  leadQuestion?: string;
  badge: string;
  icon: string;
  bulletLead: string;
  bullets: string[];
  importantNotice?: string[];
}

const VISA_SERVICES: ServiceCategory[] = [
  {
    id: 'tourist-visitor',
    number: '01',
    title: 'Tourist and Visitor Visas',
    shortDesc: 'Comprehensive application support for holidaymakers, family reunions, and short-term visitors worldwide.',
    leadQuestion: 'Planning a holiday, visiting friends or relatives, or exploring a new country?',
    badge: 'Tourism & Leisure',
    icon: 'ri-compass-3-line',
    bulletLead: 'We provide application support for eligible visitor and tourist visa categories, including:',
    bullets: [
      'Tourist and holiday visas.',
      'Family and friends visit visas.',
      'Business visitor visas.',
      'Short-stay visitor visas.',
      'Conference and event visitor visas, where applicable.',
      'Multiple-entry visitor visas, where available.',
      'Family visit applications for parents and other eligible relatives.',
    ],
  },
  {
    id: 'student-education',
    number: '02',
    title: 'Student and Education Visas',
    shortDesc: 'Structured guidance for ambitious students entering top international colleges and universities.',
    leadQuestion: 'We support students planning to pursue educational opportunities overseas.',
    badge: 'Global Education',
    icon: 'ri-graduation-cap-line',
    bulletLead: 'Our services include:',
    bullets: [
      'Student visa application support.',
      'Supporting document checklists.',
      'Guidance on financial evidence and other documentation.',
      'Application preparation support.',
      'Eligible student dependant applications.',
      'Relevant student visa extensions or renewals, where available.',
      "Guidance on understanding the requirements associated with a destination's student visa process.",
    ],
    importantNotice: [
      'Admission to an educational institution and visa approval are separate decisions made by the relevant institutions and authorities.',
    ],
  },
  {
    id: 'partner-family',
    number: '03',
    title: 'Partner, Spouse and Family Visas',
    shortDesc: 'Compassionate assistance for uniting couples, dependent children, and parents across international borders.',
    leadQuestion: 'We assist clients exploring eligible visa pathways to join family members overseas.',
    badge: 'Family Reunification',
    icon: 'ri-heart-line',
    bulletLead: 'These include:',
    bullets: [
      'Partner and spouse visas.',
      'Fiancé(e) visas, where available.',
      'De facto partner visa pathways, where applicable.',
      'Parent visas.',
      'Child and dependent visas.',
      'Family reunion visas.',
      'Other eligible family migration categories.',
    ],
    importantNotice: [
      'Requirements vary between countries, particularly concerning relationship evidence, sponsorship, financial requirements and eligibility.',
    ],
  },
  {
    id: 'work-employment',
    number: '04',
    title: 'Work and Employment Visas',
    shortDesc: 'Application guidance for skilled professionals, intra-company transfers, and temporary international workers.',
    leadQuestion: 'For people seeking international employment opportunities, we provide support relating to eligible work visa categories, including:',
    badge: 'Careers & Mobility',
    icon: 'ri-briefcase-line',
    bulletLead: 'Eligible work visa categories include:',
    bullets: [
      'Temporary work visas.',
      'Employer-sponsored work visas.',
      'Skilled employment visa pathways.',
      'Professional and specialist occupation visas.',
      'Graduate and post-study work visas, where available.',
      'Intra-company transfer visas.',
      'Seasonal and temporary employment visas.',
      'Other eligible employment-related categories.',
    ],
    importantNotice: [
      'Employment offers, sponsorship requirements and occupational eligibility depend on the rules of the destination country.',
    ],
  },
  {
    id: 'skilled-migration',
    number: '05',
    title: 'Skilled Migration and Permanent Residency',
    shortDesc: 'Rigorous assessment coordination for points-tested and state-nominated permanent migration programs.',
    leadQuestion: "We assist clients in exploring eligible long-term migration options, subject to the destination country's rules.",
    badge: 'Permanent Residency',
    icon: 'ri-award-line',
    bulletLead: 'Services cover:',
    bullets: [
      'Skilled migration pathways.',
      'Permanent residency applications.',
      'Points-tested migration categories, where available.',
      'Employer-sponsored permanent migration.',
      'Family-based permanent migration.',
      'Relevant regional migration pathways.',
      'Permanent residence renewal or related documentation, where applicable.',
    ],
  },
  {
    id: 'business-investor',
    number: '06',
    title: 'Business, Investor and Entrepreneur Visas',
    shortDesc: 'Strategic visa solutions for commercial innovators, high-net-worth investors, and corporate delegates.',
    leadQuestion: 'For entrepreneurs, investors, business owners and professionals, we provide support for applicable business-related visa categories.',
    badge: 'Corporate & Venture',
    icon: 'ri-money-dollar-circle-line',
    bulletLead: 'These include:',
    bullets: [
      'Business visitor visas.',
      'Business establishment and entrepreneur visas.',
      'Investor visa categories, where available.',
      'Business owner migration pathways.',
      'Innovation-related visa programmes.',
      'Startup and entrepreneur programmes.',
      'International business travel.',
      'Eligible intra-company transfers.',
    ],
    importantNotice: [
      'Not every country offers all these categories, and some programmes may be restricted, changed or discontinued. We will clarify which options are available for the intended destination.',
    ],
  },
  {
    id: 'innovation-talent',
    number: '07',
    title: 'Innovation and Talent-Related Visas',
    shortDesc: 'Distinguished talent processing for leaders in technology, academia, sports, and creative arts.',
    leadQuestion: 'For eligible applicants with specialist skills, professional achievements, research experience or innovative business proposals, we can assist with enquiries concerning relevant programmes, including:',
    badge: 'Distinguished Talent',
    icon: 'ri-sparkling-2-line',
    bulletLead: 'Programmes covered include:',
    bullets: [
      'Innovation and entrepreneur pathways.',
      'Global talent programmes.',
      'Distinguished talent or exceptional achievement categories, where available.',
      'Researcher and academic pathways.',
      'Specialist professional migration options.',
    ],
    importantNotice: [
      'Eligibility depends on the particular programme and its current requirements.',
    ],
  },
  {
    id: 'transit-visas',
    number: '08',
    title: 'Transit Visas',
    shortDesc: 'Smooth documentation for international airport stopovers and connecting flights across continents.',
    leadQuestion: 'We assist with enquiries concerning:',
    badge: 'Travel Transit',
    icon: 'ri-flight-takeoff-line',
    bulletLead: 'Transit visa enquiries covered:',
    bullets: [
      'Airport transit visas.',
      'Transit visas for journeys through another country.',
      'Short-duration transit permissions.',
      'Relevant transit documentation requirements.',
    ],
    importantNotice: [
      'Transit requirements depend on nationality, route, airport, duration and destination.',
    ],
  },
  {
    id: 'medical-cultural-exchange',
    number: '09',
    title: 'Medical, Religious, Cultural and Exchange-Related Visas',
    shortDesc: 'Specialized visa preparation for medical treatment, cultural exchange, sports, and charitable missions.',
    leadQuestion: 'Where the relevant country provides such categories, our services may also cover:',
    badge: 'Specialized Categories',
    icon: 'ri-service-line',
    bulletLead: 'Covered categories include:',
    bullets: [
      'Medical treatment visas.',
      'Religious pilgrimage visas.',
      'Religious worker visas.',
      'Cultural exchange programmes.',
      'Student exchange programmes.',
      'Research and academic exchange visas.',
      'Working holiday visas, where eligible.',
    ],
  },
  {
    id: 'extensions-renewals',
    number: '10',
    title: 'Visa Extensions, Renewals and Other Applications',
    shortDesc: 'Timely in-country visa extensions, status changes, bridging visas, and renewal lodgements.',
    leadQuestion: 'Depending on the destination and the services available, we can assist with enquiries about:',
    badge: 'Status Maintenance',
    icon: 'ri-refresh-line',
    bulletLead: 'We can assist with enquiries about:',
    bullets: [
      'Eligible visa extensions.',
      'Visa renewals.',
      'Changes in visa circumstances.',
      'Reapplication following a previous refusal.',
      'Supporting documentation for new applications.',
      'Responses to requests for further information.',
      'Understanding administrative procedures relating to visa applications.',
    ],
    importantNotice: [
      'Any appeal, review or legal representation will be offered only where appropriate and through professionals authorised to provide the relevant service.',
    ],
  },
  {
    id: 'visa-refusal-support',
    number: '11',
    title: 'Visa Refusal and Further Application Support',
    shortDesc: 'Objective forensic review of refusal decision records, grounds analysis, and structured re-application strategy.',
    leadQuestion: 'A visa refusal can be disappointing and confusing. We can help clients understand the documents associated with a refusal and explore whether another application or an available review pathway may be appropriate.',
    badge: 'Decision Review',
    icon: 'ri-shield-check-line',
    bulletLead: 'Depending on the country, circumstances and applicable law, options may include:',
    bullets: [
      'Reviewing the stated reasons for refusal.',
      'Identifying documentary gaps.',
      'Organising additional supporting evidence.',
      'Preparing a fresh application where appropriate.',
      'Identifying whether a formal review or appeal pathway exists.',
      'Referring clients to an appropriately authorised immigration professional or lawyer when required.',
    ],
    importantNotice: [
      'A successful outcome cannot be guaranteed, and review rights and deadlines vary by jurisdiction.',
    ],
  },
];

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigate,
  onOpenConsultation,
  selectedCountryId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  return (
    <div className="space-y-20 pb-20 selection:bg-blue-600 selection:text-white">

      {/* ========================================================
          1. HERO SECTION: "SERVICES OFFERED"
         ======================================================== */}
      <section className="pt-8 sm:pt-14 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-100/60 via-indigo-50/30 to-transparent blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <RemixIcon name="ri-compass-3-line" className="text-sm text-blue-400" />
                <span>JSR WORLD VISAS | GLOBAL VISA SERVICES</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                  SERVICES OFFERED
                </h1>
                <p className="font-heading font-semibold text-xl sm:text-2xl text-blue-300">
                  Worldwide Visa Services for Every Stage of Your Journey
                </p>
              </div>

              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                <p>
                  At <strong className="text-white font-semibold">JSR World Visas</strong>, we provide visa application support for a wide range of travel, education, employment, family and business purposes.
                </p>
                <p>
                  Our specialist team assists clients in understanding visa categories, organising supporting documents, and navigating complex application requirements for their intended destinations.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                  <RemixIcon name="ri-information-line" className="text-amber-400 mt-0.5 shrink-0 text-sm" />
                  <span>
                    The availability of each service depends on the immigration rules of the destination country and the applicant&apos;s individual circumstances.
                  </span>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-900/40 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <RemixIcon name="ri-send-plane-fill" className="text-base" />
                  <span>Request Visa Consultation</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello JSR World Visas team, I would like to inquire about visa services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <RemixIcon name="ri-whatsapp-line" className="text-base" />
                  <span>WhatsApp: {COMPANY_CONFIG.whatsappDisplay}</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('countries-we-serve');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RemixIcon name="ri-global-line" className="text-base text-blue-400" />
                  <span>View Countries We Serve</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          2. THE 11 VISA SERVICE CATEGORIES (GRID + ACCORDIONS)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
            <RemixIcon name="ri-list-check" className="text-sm" />
            <span>Structured Service Portfolio</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Comprehensive Visa Support Across 11 Key Pathways
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Coordinated by our experienced specialist team in Australia to ensure methodical document preparation, compliant application lodging, and transparent progress updates.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VISA_SERVICES.map((srv) => {
            const isExpanded = selectedServiceId === srv.id;

            return (
              <div
                key={srv.id}
                id={srv.id}
                className={`rounded-3xl bg-white border transition-all duration-200 flex flex-col justify-between overflow-hidden ${isExpanded
                  ? 'border-blue-600 shadow-2xl ring-2 ring-blue-600/20'
                  : 'border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300'
                  }`}
              >
                {/* Header Top of Card */}
                <div className="p-7 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
                      <RemixIcon name={srv.icon} className="text-3xl" />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm font-black text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-lg border border-blue-100">
                        #{srv.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200/60">
                        {srv.badge}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-[26px] text-slate-900 leading-tight tracking-tight">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>

                  {srv.leadQuestion && (
                    <div className="p-4 sm:p-4.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-sm sm:text-base font-semibold text-blue-950 italic leading-relaxed">
                      &quot;{srv.leadQuestion}&quot;
                    </div>
                  )}

                  {/* Bullet points section */}
                  <div className="space-y-3 pt-1">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block"></span>
                      <span>{srv.bulletLead}</span>
                    </p>
                    <ul className="space-y-3 text-sm sm:text-[15px] text-slate-800">
                      {(isExpanded ? srv.bullets : srv.bullets.slice(0, 4)).map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <RemixIcon name="ri-checkbox-circle-fill" className="text-blue-600 text-lg shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium text-slate-800">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {srv.bullets.length > 4 && (
                      <button
                        onClick={() => setSelectedServiceId(isExpanded ? null : srv.id)}
                        className="text-sm font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 pt-2 cursor-pointer transition-colors"
                      >
                        <span>{isExpanded ? 'Show Less Details' : `+ ${srv.bullets.length - 4} More Categories`}</span>
                        <RemixIcon name={isExpanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} className="text-base" />
                      </button>
                    )}
                  </div>

                  {/* Important Notice presented as clean bullet points without any alert icons */}
                  {srv.importantNotice && srv.importantNotice.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-slate-800 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block"></span>
                        <span>Important Information</span>
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {srv.importantNotice.map((note, noteIdx) => (
                          <li key={noteIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                            <span className="leading-relaxed font-medium text-slate-700">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer action of card */}
                <div className="p-6 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenConsultation(srv.title)}
                    className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-blue-600 text-slate-900 hover:text-white border-2 border-slate-200 hover:border-blue-600 text-sm sm:text-base font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire About {srv.title.split(' ')[0]}</span>
                    <RemixIcon name="ri-arrow-right-line" className="text-sm" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ========================================================
          3. COUNTRIES WE SERVE: INTERNATIONAL DESTINATION GALLERY
         ======================================================== */}
      <div id="countries-we-serve-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CountryGrid
          onOpenConsultation={onOpenConsultation}
          initialSelectedCountryName={selectedCountryId}
        />
      </div>


      {/* ========================================================
          4. WHY USE JSR WORLD VISAS? (TRUST & VALUE)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <RemixIcon name="ri-shield-star-line" className="text-sm text-blue-600" />
            <span>Operational Integrity</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Why Use JSR World Visas?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We provide structured, dependable guidance with zero false promises. Here is what sets our service framework apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <RemixIcon name="ri-global-line" className="text-xl" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900">
              Comprehensive Worldwide Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We assist clients with visa pathways across all continents — including student, visitor, employment, family, skilled migration, and investor streams.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <RemixIcon name="ri-team-line" className="text-xl" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900">
              Specialist Team Based in Australia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our visa application support is coordinated by trained professionals based in Melbourne, Australia, ensuring high international operational standards.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <RemixIcon name="ri-chat-check-line" className="text-xl" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900">
              Clear & Honest Communication
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide realistic assessments without exaggerated promises. We explain eligibility criteria, potential hurdles, and genuine timelines upfront.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
              <RemixIcon name="ri-folder-check-line" className="text-xl" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900">
              Systematic Document Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tailored document checklists, meticulous indexing, and thorough verification of financial evidence, employment proofs, and relationship records.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
              <RemixIcon name="ri-building-line" className="text-xl" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900">
              Convenient Dual Points of Contact
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Reach our Australia Head Office in Melbourne or our India Branch Office in Kundli, Sonipat (Haryana) for seamless inquiries in person or remotely.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <RemixIcon name="ri-shield-check-line" className="text-xl" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900">
              Regulated Advice Coordination
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Where immigration advice or legal representation is regulated by destination authorities, that representation is provided strictly by authorised professionals.
            </p>
          </div>
        </div>
      </section>


      {/* ========================================================
          5. CTA CONSULTATION & INQUIRY PROMPT
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-14 border border-blue-800/40 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Australia & India Desks Active</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
              Ready to Discuss Your Visa Pathway?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Get in touch with JSR World Visas to explore your eligibility, required documentation, and step-by-step application plan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <RemixIcon name="ri-file-text-line" className="text-base" />
              <span>Send An Enquiry</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <RemixIcon name="ri-map-pin-line" className="text-base text-blue-300" />
              <span>Contact Global Offices</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello JSR World Visas team, I want to discuss my visa application.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center gap-2"
              title="Chat on WhatsApp"
            >
              <RemixIcon name="ri-whatsapp-line" className="text-base" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
