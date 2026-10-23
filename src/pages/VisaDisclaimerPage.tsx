import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';

interface VisaDisclaimerPageProps {
  onNavigate: (page: PageId) => void;
}

export const VisaDisclaimerPage: React.FC<VisaDisclaimerPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Header Banner */}
      <section className="bg-[#0B1528] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-blue-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-sky-300 font-medium">Visa Disclaimer</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <RemixIcon name="ri-information-line" className="text-amber-400" />
              <span>Regulatory Disclosure</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Visa Disclaimer &amp; Regulatory Notice
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Clear legal disclosure on consultancy boundaries, government authority, and representation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* Important Highlight Box with clean bullet points and calm blue styling */}
          <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200/80 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
              <span>Essential Summary</span>
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <span><strong>Independent Status:</strong> JSR World Visas is a private consultancy and is not affiliated with, endorsed by, or an agency of any embassy, high commission, or government department.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <span><strong>No Guarantee of Approval:</strong> All visa grant and refusal decisions are made solely by the authorized immigration officers of the destination country. No private entity can guarantee visa approval.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <span><strong>Authorised Representation:</strong> Where destination laws require registered immigration legal practitioners (e.g. OMARA in Australia, OISC in the UK), representation is facilitated strictly through appropriately authorised professionals.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">1. Nature of Consultancy Services</h2>
            <p>
              <strong>JSR World Visas</strong> provides administrative guidance, educational shortlisting, checklist preparation, indexing of financial evidence, and application lodgement coordination.
            </p>
            <p>
              Our counseling team assists applicants in understanding complex foreign entry requirements, university admission benchmarks, and procedural checklists. We do not issue visa grants, work permits, or residence cards.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">2. Sovereign Authority Decisions</h2>
            <p>
              Immigration laws, visa quota allocations, eligibility thresholds, and processing durations are determined exclusively by sovereign government authorities, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
              <li>Department of Home Affairs (Australia)</li>
              <li>Immigration, Refugees and Citizenship Canada (IRCC)</li>
              <li>United Kingdom Visas and Immigration (UKVI)</li>
              <li>United States Department of State &amp; USCIS</li>
              <li>Federal Foreign Office &amp; Ausländerbehörde (Germany)</li>
              <li>Immigration New Zealand (INZ)</li>
            </ul>
            <p>
              JSR World Visas has no influence over visa officers, biometric scheduling wait times, security background checks, or statutory decision outcomes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">3. Refusal Decisions &amp; Review Rights</h2>
            <p>
              If a visa application is refused, our team can help review the refusal notification decision record to identify stated grounds. Statutory appeal rights, administrative review procedures, or fresh lodgements depend strictly on local immigration law and cannot guarantee a reversed decision.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">4. Genuine Documentation Policy</h2>
            <p>
              All clients must provide authentic, legitimate, and verifiable documentation. Presenting fraudulent bank certificates, forged academic credentials, or false employment records constitutes a criminal violation under international laws and leads to immediate disqualification and long-term entry bans.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="font-heading font-bold text-xl text-slate-900">5. Further Inquiries</h2>
            <p>
              For clarification regarding our advisory framework or regulatory compliance, please contact our administrative desk:
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <p><strong>Compliance Administration — JSR World Visas</strong></p>
              <p>Melbourne Office: 60 Corrigan Ave, Brooklyn, Melbourne 3012 (Australia)</p>
              <p>Kundli Office: Shop 1, Rodeo Drive, Kundli 131029 (India)</p>
              <p>Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-blue-600 font-semibold hover:underline">{COMPANY_CONFIG.email}</a></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
