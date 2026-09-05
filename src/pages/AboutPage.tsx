import React from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { 
  ShieldCheck, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Clock, 
  Building,
  Sparkles,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. SHORT VISUAL HERO */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl">
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Building className="w-3.5 h-3.5" />
                <span>Model Town, Sonipat Desk</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
                Ethical Overseas Education Advisory in Haryana.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                We help students and families across Sonipat, Panipat, and Delhi-NCR secure direct university admissions and navigate embassy visas with absolute transparency.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Meet Our Counselors</span>
                </button>
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Helpline</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL TRUST SPLIT: Counselor Photo + 4 Key Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
              <img
                src={COMPANY_CONFIG.counselorImage}
                alt="Instant Visa Sonipat Counselor discussing with student"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-blue-300 block">Personalized 1-on-1 Guidance</span>
                <p className="text-sm font-semibold">Face-to-face consultation at our Sonipat Center</p>
              </div>
            </div>
          </div>

          {/* 4 Trust Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Standards
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Built on Trust & Zero Misrepresentation
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Zero Fake Documents</h3>
                <p className="text-xs text-slate-500">
                  Strictly authentic transcripts and legal financial verification protecting your visa record.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Direct University Processing</h3>
                <p className="text-xs text-slate-500">
                  Direct institutional applications without costly intermediate brokers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Local Physical Center</h3>
                <p className="text-xs text-slate-500">
                  Conveniently situated in Model Town, Sonipat. Students & parents are always welcome.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Embassy Mock Studio</h3>
                <p className="text-xs text-slate-500">
                  Intensive visa officer simulation drills for US F-1, UK, and German APS processes.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SONIPAT CENTER CARD & INSTANT CTAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Visit Our Center
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
              Sonipat Counseling Center
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              {COMPANY_CONFIG.officeAddress} ({COMPANY_CONFIG.landmarkNote})
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500 pt-1">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{COMPANY_CONFIG.workingHours}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
