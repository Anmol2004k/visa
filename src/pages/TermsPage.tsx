import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
            <span className="text-sky-300 font-medium">Terms &amp; Conditions</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <RemixIcon name="ri-file-list-3-line" className="text-amber-400" />
              <span>Service Agreement &amp; Terms</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Last updated: October 2026 • Governing website access and professional advisory engagements
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing the website <code>jsrworldvisas.com</code> or engaging the services of <strong>JSR World Visas</strong>, you agree to comply with and be bound by these Terms &amp; Conditions.
            </p>
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong>Corporate Entity Reference:</strong> JSR World Visas operates through our offices in Melbourne, Victoria, Australia <code>[ABN: Victorian Entity Placeholder]</code> and Kundli, District Sonipat, Haryana, India <code>[GSTIN/MSME: Haryana Branch Placeholder]</code>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">2. Scope of Services</h2>
            <p>
              JSR World Visas provides structured visa application support, educational institution counseling, document preparation assistance, checklists, and procedural guidance across 11 key visa categories.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Independent Consultancy:</strong> JSR World Visas is an independent private consultancy and is <strong>not an agency of any foreign government, embassy, high commission, or consulate</strong>.</li>
              <li><strong>No Guarantee of Visa Approval:</strong> Final visa approval, processing timelines, and grant decisions are made exclusively and sovereignly by relevant government immigration departments. JSR World Visas does not guarantee visa outcomes.</li>
              <li><strong>Authorised Representation:</strong> Where immigration advice, tribunal appeal, or legal filing is strictly regulated by law in a destination country, representation will be coordinated only through appropriately authorised and licensed professionals.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">3. Client Responsibilities &amp; Authenticity Policy</h2>
            <p>To ensure compliant processing, the client agrees to:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Provide truthful, complete, and accurate personal, educational, financial, and employment information.</li>
              <li><strong>Zero Fraudulent Document Policy:</strong> Under no circumstances does JSR World Visas prepare, accept, or submit forged, fabricated, or altered documents. Providing fraudulent documents will result in immediate termination of services with no refund.</li>
              <li>Notify counselors promptly of any changes in circumstance, travel plans, or prior refusal history.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">4. Professional Fees &amp; Statutory Charges</h2>
            <p>
              Initial profile evaluation is provided free of charge. Where formal application compilation or advisory services are contracted, our service fees will be clearly defined in an engagement invoice or service memorandum.
            </p>
            <p className="text-xs text-slate-600 bg-amber-50/60 p-3 rounded-xl border border-amber-200/80">
              <strong>Statutory Visa Application Fees:</strong> Official government filing fees, biometric fees, medical examination costs, police clearances, and third-party credential assessments are set by authorities and are strictly non-refundable.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, JSR World Visas and its representatives shall not be liable for visa delays, rejections, border entry refusals, policy amendments enacted by sovereign governments, or travel disruption.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="font-heading font-bold text-xl text-slate-900">6. Contact &amp; Legal Notices</h2>
            <p>
              For legal questions, service agreements, or formal correspondence, please reach our administrative office:
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800 space-y-1">
              <p><strong>JSR World Visas — Legal Administration</strong></p>
              <p>Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-blue-600 font-semibold hover:underline">{COMPANY_CONFIG.email}</a></p>
              <p>Head Office: 60 Corrigan Ave, Brooklyn, Melbourne 3012 (Australia) • Tel: {COMPANY_CONFIG.australiaPhone}</p>
              <p>Branch Office: Shop 1, Rodeo Drive, Kundli 131029 (India) • Tel: {COMPANY_CONFIG.indiaPhone}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
