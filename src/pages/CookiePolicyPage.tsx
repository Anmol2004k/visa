import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';

interface CookiePolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onNavigate }) => {
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
            <span className="text-sky-300 font-medium">Cookie Policy</span>
          </nav>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <RemixIcon name="ri-donut-chart-line" className="text-amber-400" />
              <span>Transparent Web Standards</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Last updated: October 2026 • Clarifying local storage and cookie usage on jsrworldvisas.com
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you visit a website. They allow the website to recognize your device, remember preferences (such as selected destinations or active tabs), and ensure smooth functionality.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">2. Categories of Cookies We Use</h2>
            <p>
              <strong>JSR World Visas</strong> uses a minimal set of cookies and local browser storage mechanisms strictly required for reliable website performance:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                  Strictly Necessary Cookies
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Essential for navigating the website, maintaining active page states, protecting contact forms against automated spam, and rendering responsive layout components.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-900 block">
                  Functional &amp; Preference Cookies
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Remember your selected destination country filter or preferred language so you do not have to reconfigure settings on each page transition.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong>Notice Regarding Behavioral Ads:</strong> We <strong>do not deploy invasive cross-site advertising trackers</strong>, nor do we sell browser behavioral data to commercial advertising brokers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">3. Third-Party Integrations</h2>
            <p>
              When using specific interactive features on our website, you may interact with trusted third-party providers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>WhatsApp Click-to-Chat:</strong> When initiating a conversation via WhatsApp links, Meta / WhatsApp handles privacy and cookies under their independent privacy terms.</li>
              <li><strong>Content Delivery Networks (CDNs):</strong> Optimized vector graphics, fonts, and flags may be cached through global CDNs (e.g. Google Fonts, FlagCDN) to guarantee rapid mobile loading.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-slate-900">4. How to Manage or Disable Cookies</h2>
            <p>
              You can control and manage cookies through your web browser settings. Most browsers allow you to block cookies, delete existing cookies, or configure alerts before a cookie is stored.
            </p>
            <p className="text-xs text-slate-500">
              Note that blocking strictly necessary technical cookies may impact the proper rendering of certain interactive elements like country filtering or enquiry submission.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="font-heading font-bold text-xl text-slate-900">5. Questions Concerning Cookie Usage</h2>
            <p>
              If you have any questions regarding our use of cookies or browser storage, please reach our technical coordination desk:
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800 space-y-1">
              <p><strong>Technical Operations — JSR World Visas</strong></p>
              <p>Email: <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-blue-600 font-semibold hover:underline">{COMPANY_CONFIG.email}</a></p>
              <p>Corporate Desk: Melbourne, Australia &amp; Kundli, Sonipat, India</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
