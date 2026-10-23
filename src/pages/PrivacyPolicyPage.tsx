import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
            <span className="text-sky-300 font-medium">Privacy Policy</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <RemixIcon name="ri-shield-keyhole-line" className="text-amber-400" />
              <span>Legal &amp; Privacy Compliance</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Last updated: October 2026 • Effective for all JSR World Visas client interactions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">1. Introduction &amp; Scope</h2>
            <p>
              <strong>JSR World Visas</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates international visa and overseas education consultancy desks located in <strong>Melbourne, Victoria, Australia</strong> (Head Office) and <strong>Kundli, District Sonipat, Haryana, India</strong> (Branch Office).
            </p>
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong>Official Registry Identifiers:</strong> Australia Business Reference: <code>[ABN: Victorian Entity Registration Placeholder]</code> • India Entity Reference: <code>[GSTIN/MSME: Haryana Branch Registration Placeholder]</code>.
            </p>
            <p>
              This Privacy Policy explains how we collect, handle, store, and safeguard your personal information when you use our website (<code>jsrworldvisas.com</code>), submit an enquiry form, or interact with our counselors via WhatsApp, telephone, or in-person visits.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">2. Information We Collect</h2>
            <p>We only collect personal information that you voluntarily choose to provide to us for visa counseling and application guidance:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, WhatsApp handle, email address, and city or country of residence.</li>
              <li><strong>Travel &amp; Migration Details:</strong> Intended destination country, visa category of interest (student, tourist, employment, partner, skilled, or business), and planned travel timelines.</li>
              <li><strong>Academic &amp; Professional Background (voluntary):</strong> Academic transcripts, course preferences, employment records, or prior visa history when submitted for eligibility evaluation.</li>
              <li><strong>Technical Metadata:</strong> Non-personally identifiable diagnostic data such as browser type, device type, and referring URL collected through standard server logs.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">3. How We Use Your Information</h2>
            <p>Your details are used strictly for legitimate advisory and administrative purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>To evaluate eligibility for requested visa categories and recommend appropriate application pathways.</li>
              <li>To respond to your inquiries via telephone, WhatsApp, or email.</li>
              <li>To compile customized document checklists and verify completeness of application evidence.</li>
              <li>To coordinate with appropriately authorised immigration professionals or lawyers where formal legal representation is regulated.</li>
              <li>We <strong>never sell, lease, or monetize</strong> your personal data to third-party commercial marketing networks.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">4. Data Retention &amp; Security Controls</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, or misuse. Transmission of form data utilizes industry-standard Transport Layer Security (TLS/HTTPS).
            </p>
            <p>
              We retain consultation records only as long as necessary to fulfill the services requested or comply with applicable legal recordkeeping requirements. Upon conclusion of service or upon client written request, sensitive documents are securely archived or deleted.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">5. Your Legal Rights</h2>
            <p>Depending on your jurisdiction, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Request a copy of the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete records.</li>
              <li>Request deletion or restricted processing of your contact details.</li>
              <li>Withdraw consent for direct communications at any time.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="font-heading font-bold text-xl text-slate-900">6. Privacy Inquiries &amp; Contact</h2>
            <p>
              For privacy-related questions, corrections, or data removal requests, please contact our designated privacy coordinator:
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800 space-y-1">
              <p><strong>Privacy Coordinator — JSR World Visas</strong></p>
              <p>Australia Office: 60 Corrigan Ave, Brooklyn, Melbourne 3012 (Victoria)</p>
              <p>India Office: Shop 1, Rodeo Drive, Kundli 131029 (Haryana)</p>
              <p>Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-blue-600 font-semibold hover:underline">{COMPANY_CONFIG.email}</a></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
