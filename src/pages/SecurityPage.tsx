import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';

interface SecurityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
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
            <span className="text-sky-300 font-medium">Security &amp; Data Protection</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <RemixIcon name="ri-lock-password-line" className="text-amber-400" />
              <span>Technical &amp; Operational Controls</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Security &amp; Data Protection
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              How JSR World Visas safeguards confidential client documents and personal credentials
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">1. Our Commitment to Data Integrity</h2>
            <p>
              Visa applications involve sensitive personal documentation, including passports, civil certificates, academic records, and financial statements. <strong>JSR World Visas</strong> implements structured operational protocols and technical measures designed to protect client data across our Melbourne and Kundli counseling centers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-slate-900">2. Technical &amp; Operational Controls</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <RemixIcon name="ri-shield-check-fill" className="text-lg" />
                  <span>Transport Encryption</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All communications between your web browser and our website use modern Transport Layer Security (HTTPS/TLS) to prevent eavesdropping and data interception.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <RemixIcon name="ri-user-shared-line" className="text-lg" />
                  <span>Role-Based Access</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Client files and identity documents are accessible strictly by counselors directly assigned to your case, governed by least-privilege administrative controls.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <RemixIcon name="ri-delete-bin-line" className="text-lg" />
                  <span>Safe Document Disposal</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Physical and digital copies of supporting evidence are systematically deleted or returned following completion of application lodgement in accordance with our retention policy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <RemixIcon name="ri-device-line" className="text-lg" />
                  <span>Secure Communication</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consultation updates, checklists, and fee receipts are dispatched exclusively through verified corporate email addresses and official contact numbers.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">3. Protection Against Fraud &amp; Phishing</h2>
            <p>
              To protect yourself against fraudulent impersonation or phishing attempts:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-xs sm:text-sm">
              <li>Always verify that emails originate from <code>@jsrworldvisas.com</code>.</li>
              <li>Official helpline numbers are: Australia <code>+61 4300 53716</code> and India <code>+91 98107 55659</code>.</li>
              <li>We never request cash payments in personal bank accounts or via untraceable payment methods.</li>
              <li>Never share your original passport or confidential banking passwords over unverified channels.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="font-heading font-bold text-xl text-slate-900">4. Reporting Security Inquiries</h2>
            <p>
              If you identify a security concern, suspicious communication, or wish to request verification of a staff member, please contact:
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800 space-y-1">
              <p><strong>Security Coordination — JSR World Visas</strong></p>
              <p>Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-blue-600 font-semibold hover:underline">{COMPANY_CONFIG.email}</a></p>
              <p>Subject Line: <code>[SECURITY INQUIRY]</code></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
