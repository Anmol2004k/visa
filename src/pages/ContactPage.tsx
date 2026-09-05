import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { ShortEnquiryForm } from '../components/ShortEnquiryForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ExternalLink,
  Sparkles,
  Building
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. VISUAL HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl">
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Model Town, Sonipat</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
                Contact Our Sonipat Counseling Center.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Connect with our senior counselors by phone, WhatsApp, or walk into our Model Town office with your academic marksheets for an on-the-spot evaluation.
              </p>

              {/* Fast Direct Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="px-6 py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-2 shadow-md hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Now: {COMPANY_CONFIG.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION: Contact Details Card + Short Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Sonipat Office Touchpoints */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Physical Desk Location
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Instant Visa Sonipat
                </h2>
              </div>

              {/* Detail Items */}
              <div className="space-y-5 text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-slate-900 font-bold">Office Address</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {COMPANY_CONFIG.officeAddress}
                    </p>
                    <p className="text-[11px] text-blue-600 font-medium">
                      ({COMPANY_CONFIG.landmarkNote})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Phone Desk</strong>
                    <a
                      href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                      className="text-xs text-slate-700 font-semibold hover:text-blue-600 transition-colors"
                    >
                      {COMPANY_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">WhatsApp Direct</strong>
                    <a
                      href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-600 font-semibold hover:underline"
                    >
                      {COMPANY_CONFIG.whatsappDisplay} (Click to Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Admissions Email</strong>
                    <a
                      href={`mailto:${COMPANY_CONFIG.email}`}
                      className="text-xs text-slate-700 font-medium hover:text-blue-600 transition-colors"
                    >
                      {COMPANY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Counseling Hours</strong>
                    <span className="text-xs text-slate-600 block">
                      {COMPANY_CONFIG.workingHours}
                    </span>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_CONFIG.officeAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
              </div>

            </div>

          </div>

          {/* Right: Short Enquiry Form */}
          <div className="lg:col-span-7">
            <ShortEnquiryForm
              title="Send Us a Message"
              subtitle="Fill in 4 quick fields and our counselor will call you directly."
              defaultCountry="USA"
            />
          </div>

        </div>
      </section>

    </div>
  );
};
