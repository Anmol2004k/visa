import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from '../components/RemixIcon';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  destinationCountry: string;
  visaType: string;
  travelPurpose: string;
  preferredOffice: 'India' | 'Australia';
  description: string;
  contactMethod: 'WhatsApp' | 'Email' | 'Phone Call';
}

const INITIAL_FORM_DATA: EnquiryFormData = {
  fullName: '',
  email: '',
  phone: '',
  countryOfResidence: 'India',
  destinationCountry: 'Australia',
  visaType: 'Student / Education Visa',
  travelPurpose: 'Higher Education',
  preferredOffice: 'India',
  description: '',
  contactMethod: 'WhatsApp',
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const destinationOptions = [
    'Australia',
    'Canada',
    'United Kingdom',
    'United States',
    'New Zealand',
    'Germany & Europe',
    'Singapore',
    'Other Destination',
  ];

  const visaTypeOptions = [
    'Student / Education Visa',
    'Tourist / Visitor Visa',
    'Work / Employment Visa',
    'Family Migration / Partner Visa',
    'Business / Investor Visa',
    'Other Visa Category',
  ];

  const purposeOptions = [
    'Higher Education',
    'Family Holiday / Tourism',
    'Seeking Employment Opportunities',
    'Joining Partner or Family Overseas',
    'International Business & Trade',
    'Other Travel Purpose',
  ];

  const handleChange = (
    field: keyof EnquiryFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 7) {
      setErrorMessage('Please enter a valid telephone or WhatsApp number with country code.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate secure transmission to customer management / email system
    setTimeout(() => {
      const generatedRef = `JSR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }, 700);
  };

  const handleSendWhatsAppCopy = () => {
    const text = `*JSR WORLD VISAS — ENQUIRY REFERENCE: ${referenceId}*\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Country of Residence:* ${formData.countryOfResidence}\n` +
      `*Intended Destination:* ${formData.destinationCountry}\n` +
      `*Visa Type:* ${formData.visaType}\n` +
      `*Purpose of Travel:* ${formData.travelPurpose}\n` +
      `*Preferred Office:* ${formData.preferredOffice === 'Australia' ? 'Australia Head Office (Melbourne)' : 'India Branch Office (Kundli, Sonipat)'}\n` +
      `*Preferred Contact Method:* ${formData.contactMethod}\n` +
      `*Brief Description:* ${formData.description || 'Application consultation request'}\n\n` +
      `_Submitted via jsrworldvisas.com_`;

    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setSubmitted(false);
    setReferenceId('');
  };

  return (
    <div className="space-y-14 sm:space-y-20 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
            {/* Subtle background glow effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              {/* Page identifier */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                  JSR WORLD VISAS |
                </span>
                <span className="text-slate-400 text-xs font-semibold tracking-wide">
                 LET'S START YOUR JOURNEY
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight leading-tight text-white">
                Contact JSR World Visas
              </h1>

              <div className="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p className="font-semibold text-white">
                  Planning to travel, study, work, join your family or explore international business opportunities?
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our team is here to listen to your requirements and help you understand the next steps for your visa enquiry.
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Get in touch with JSR World Visas to discuss your intended destination, visa category and application support requirements.
                </p>
              </div>

              {/* Fast Direct Action Touchpoints */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello JSR World Visas! I would like to enquire about visa application support.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"
                >
                  <RemixIcon name="ri-whatsapp-fill" className="text-lg" />
                  <span>WhatsApp Enquiry Hotline: {COMPANY_CONFIG.phone}</span>
                </a>

                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all hover:scale-[1.02]"
                >
                  <RemixIcon name="ri-phone-fill" className="text-blue-400 text-base" />
                  <span>Direct Call: {COMPANY_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL OFFICES: INDIA HEAD OFFICE & AUSTRALIA BRANCH OFFICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Registered Global Touchpoints
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            Our Two-Country Presence
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Serving clients across India, Australia, and worldwide with structured application coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Australia Head Office */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                  <RemixIcon name="ri-building-line" className="text-2xl" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
                  <span>🇦🇺</span>
                  <span>Head Office</span>
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Australia Head Office
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">
                  JSR World Visas
                </p>
              </div>

              <div className="space-y-3.5 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <RemixIcon name="ri-map-pin-2-fill" className="text-blue-600 mt-1 shrink-0 text-base" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Address</strong>
                    <p className="text-slate-600 leading-relaxed">
                      60 Corrigan Avenue, Brooklyn, Melbourne 3012 (Victoria) Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <RemixIcon name="ri-phone-fill" className="text-blue-600 mt-1 shrink-0 text-base" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Australia Phone</strong>
                    <a
                      href="tel:+61430053716"
                      className="text-blue-700 font-bold hover:underline inline-block mt-0.5"
                    >
                      +61 4300 53716
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+61430053716"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors"
                >
                  <RemixIcon name="ri-phone-line" className="text-sm" />
                  <span>Call Australia Office: +61 4300 53716</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Specialist Visa Team Base</span>
              <span className="text-blue-700 font-semibold">Melbourne 3012, Victoria</span>
            </div>
          </div>

          {/* India Branch Office */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <RemixIcon name="ri-community-line" className="text-2xl" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                  <span>🇮🇳</span>
                  <span>Branch Office</span>
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  India Branch Office
                </h3>
                <p className="text-sm font-semibold text-emerald-700 mt-0.5">
                  JSR World Visas
                </p>
              </div>

              <div className="space-y-3.5 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <RemixIcon name="ri-map-pin-2-fill" className="text-emerald-600 mt-1 shrink-0 text-base" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Address</strong>
                    <p className="text-slate-600 leading-relaxed">
                      Shop 1, c/o Mukhija Associates, Rodeo Drive, Kundli 131029 (Haryana) India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <RemixIcon name="ri-phone-fill" className="text-emerald-600 mt-1 shrink-0 text-base" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">India Phone</strong>
                    <a
                      href="tel:+919810755659"
                      className="text-emerald-700 font-bold hover:underline inline-block mt-0.5"
                    >
                      +91 98107 55659
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href="tel:+919810755659"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition-colors"
                >
                  <RemixIcon name="ri-phone-line" className="text-sm" />
                  <span>Call India</span>
                </a>
                <a
                  href={`https://wa.me/919810755659?text=${encodeURIComponent('Hello JSR World Visas India Office, I would like to inquire about visa application support.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                >
                  <RemixIcon name="ri-whatsapp-line" className="text-sm" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Registered in India</span>
              <span className="text-emerald-700 font-semibold">Kundli 131029, Sonipat</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTACT DETAILS & SOCIAL MEDIA CHANNELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Official Communication
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-slate-900">
              Contact Details & Channels
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Direct official touchpoints for JSR World Visas inquiries and communications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Australia Head Office Telephone */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <RemixIcon name="ri-phone-line" className="text-xl" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    <span>🇦🇺</span>
                    <span>Australia Phone</span>
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-base mt-0.5">
                    +61 4300 53716
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Melbourne Head Office helpline
                  </div>
                </div>
              </div>
              <a
                href="tel:+61430053716"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors"
              >
                <RemixIcon name="ri-phone-fill" className="text-sm" />
                <span>Call Australia: +61 4300 53716</span>
              </a>
            </div>

            {/* India Branch Office Telephone */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <RemixIcon name="ri-phone-line" className="text-xl" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    <span>🇮🇳</span>
                    <span>India Phone</span>
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-base mt-0.5">
                    +91 98107 55659
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Kundli Branch Office helpline
                  </div>
                </div>
              </div>
              <a
                href="tel:+919810755659"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition-colors"
              >
                <RemixIcon name="ri-phone-fill" className="text-sm" />
                <span>Call India: +91 98107 55659</span>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <RemixIcon name="ri-whatsapp-line" className="text-xl" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">WhatsApp</div>
                  <div className="font-heading font-bold text-slate-900 text-base mt-0.5">
                    {COMPANY_CONFIG.whatsappDisplay}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Official WhatsApp with country code (+91)
                  </div>
                </div>
              </div>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition-colors"
              >
                <RemixIcon name="ri-whatsapp-fill" className="text-sm" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <RemixIcon name="ri-mail-line" className="text-xl" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Address</div>
                  <div className="font-heading font-bold text-slate-900 text-base mt-0.5 break-all">
                    {COMPANY_CONFIG.email}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Official business email address
                  </div>
                </div>
              </div>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs transition-colors"
              >
                <RemixIcon name="ri-mail-send-fill" className="text-sm" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Website */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <RemixIcon name="ri-global-line" className="text-xl" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Website</div>
                  <div className="font-heading font-bold text-slate-900 text-base mt-0.5">
                    WWW.jsrworldvisas.com
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Official online portal
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('home')}
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                <RemixIcon name="ri-home-4-line" className="text-sm" />
                <span>Visit Home Portal</span>
              </button>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <RemixIcon name="ri-instagram-line" className="text-xl" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Instagram</div>
                  <div className="font-heading font-bold text-slate-900 text-base mt-0.5">
                    @jsrworldvisas
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Instagram.com/jsrworldvisas
                  </div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/jsrworldvisas?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold text-xs transition-colors"
              >
                <RemixIcon name="ri-instagram-fill" className="text-sm" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <RemixIcon name="ri-facebook-box-line" className="text-xl" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Facebook</div>
                  <div className="font-heading font-bold text-slate-900 text-base mt-0.5">
                    Facebook.com/jsrworldvisas
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Official company announcements & updates
                  </div>
                </div>
              </div>
              <a
                href="https://www.facebook.com/jsrworldvisas"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs transition-colors"
              >
                <RemixIcon name="ri-facebook-fill" className="text-sm" />
                <span>Connect on Facebook</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEND US AN ENQUIRY (FULL 10-FIELD ENQUIRY FORM + CONFIRMATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          <div className="p-6 sm:p-10 lg:p-12 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Direct Application Consultation
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                Send Us an Enquiry
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Please complete the form below with your travel plans and contact preferences. Our specialist team will review your requirements and follow up through your preferred contact method.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            
            {/* SUBMITTED CONFIRMATION STATE */}
            {submitted ? (
              <div className="max-w-2xl mx-auto text-center space-y-6 py-8">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-pulse">
                  <RemixIcon name="ri-checkbox-circle-fill" className="text-4xl" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                    Enquiry Logged Successfully
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                    Your enquiry has been received and securely forwarded to our designated customer management system.
                  </p>
                </div>

                {/* Reference Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-4 max-w-lg mx-auto">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Reference ID</span>
                    <span className="font-mono font-bold text-sm text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      {referenceId}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Intended Destination:</span>
                      <strong className="text-slate-900 font-semibold">{formData.destinationCountry}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Visa Category:</span>
                      <strong className="text-slate-900 font-semibold">{formData.visaType}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Travel Purpose:</span>
                      <strong className="text-slate-900 font-semibold">{formData.travelPurpose}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Preferred Office:</span>
                      <strong className="text-slate-900 font-semibold">
                        {formData.preferredOffice === 'India' ? 'India Head Office' : 'Australia Branch Office'}
                      </strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500 block">Preferred Contact Method:</span>
                      <strong className="text-slate-900 font-semibold">
                        {formData.contactMethod} ({formData.phone})
                      </strong>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-xs text-emerald-800 flex items-start gap-2">
                    <RemixIcon name="ri-shield-check-line" className="text-base text-emerald-600 mt-0.5 shrink-0" />
                    <span>
                      Our specialist team coordinated from Australia will review your submission and connect with you shortly.
                    </span>
                  </div>
                </div>

                {/* Forward copy via WhatsApp or reset */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleSendWhatsAppCopy}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    <RemixIcon name="ri-whatsapp-fill" className="text-base" />
                    <span>Send Copy via WhatsApp (+91 98107 55659)</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <RemixIcon name="ri-refresh-line" className="text-sm" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* ACTIVE FORM: ALL 10 FIELDS */
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                    <RemixIcon name="ri-error-warning-fill" className="text-base shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Field 1: Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      1. Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <RemixIcon name="ri-user-line" className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="e.g. Aman Sharma"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 2: Email Address */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      2. Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <RemixIcon name="ri-mail-line" className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="e.g. applicant@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Telephone or WhatsApp number */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      3. Telephone or WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <RemixIcon name="ri-phone-line" className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+91 98107 55659"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 4: Country of Residence */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      4. Country of Residence
                    </label>
                    <div className="relative">
                      <RemixIcon name="ri-flag-line" className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                      <input
                        type="text"
                        value={formData.countryOfResidence}
                        onChange={(e) => handleChange('countryOfResidence', e.target.value)}
                        placeholder="e.g. India, Australia, UAE, UK"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 5: Intended Destination Country */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      5. Intended Destination Country
                    </label>
                    <div className="relative">
                      <RemixIcon name="ri-flight-takeoff-line" className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                      <select
                        value={formData.destinationCountry}
                        onChange={(e) => handleChange('destinationCountry', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none"
                      >
                        {destinationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <RemixIcon name="ri-arrow-down-s-line" className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Field 6: Type of Visa Required */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      6. Type of Visa Required
                    </label>
                    <div className="relative">
                      <RemixIcon name="ri-passport-line" className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                      <select
                        value={formData.visaType}
                        onChange={(e) => handleChange('visaType', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none"
                      >
                        {visaTypeOptions.map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                      <RemixIcon name="ri-arrow-down-s-line" className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  
                  {/* Field 7: Purpose of Travel */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      7. Purpose of Travel
                    </label>
                    <div className="relative">
                      <RemixIcon name="ri-compass-3-line" className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                      <select
                        value={formData.travelPurpose}
                        onChange={(e) => handleChange('travelPurpose', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none"
                      >
                        {purposeOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      <RemixIcon name="ri-arrow-down-s-line" className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Field 8: Preferred Office — India or Australia */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      8. Preferred Office — India or Australia
                    </label>
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => handleChange('preferredOffice', 'Australia')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          formData.preferredOffice === 'Australia'
                            ? 'bg-blue-50 text-blue-800 border-blue-500 shadow-sm ring-1 ring-blue-500'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span>🇦🇺</span>
                        <span>Australia Head Office</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleChange('preferredOffice', 'India')}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          formData.preferredOffice === 'India'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span>🇮🇳</span>
                        <span>India Branch Office</span>
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      {formData.preferredOffice === 'Australia'
                        ? '60 Corrigan Ave, Brooklyn, Melbourne 3012 (Victoria) Australia'
                        : 'Shop 1, c/o Mukhija Associates, Rodeo Drive, Kundli 131029 (Haryana) India'}
                    </span>
                  </div>

                  {/* Field 10: Preferred Method of Contact */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      10. Preferred Method of Contact
                    </label>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {(['WhatsApp', 'Email', 'Phone Call'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => handleChange('contactMethod', method)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                            formData.contactMethod === method
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      We will reach out via {formData.contactMethod}.
                    </span>
                  </div>

                </div>

                {/* Field 9: Brief Description of the Enquiry */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    9. Brief Description of the Enquiry
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder="Please outline your travel timeline, academic or professional profile, family members accompanying, or any specific questions you have regarding your visa application..."
                    className="w-full p-4 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 text-white font-heading font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RemixIcon name="ri-loader-4-line" className="animate-spin text-lg" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send My Enquiry</span>
                        <RemixIcon name="ri-send-plane-fill" className="text-base" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* 5. OUR OFFICE LOCATIONS (DETAILED SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              International Footprint
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Our Office Locations
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our head office is in Melbourne, Victoria, Australia, and our branch office is in Kundli, Haryana, India.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our specialist visa team is based in Australia and coordinates visa application support for clients enquiring about destinations around the world.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 pt-4 border-t border-slate-800">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span>🇦🇺</span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Head Office (Australia)
                </span>
              </div>
              <p className="text-sm font-semibold text-white">
                60 Corrigan Avenue, Brooklyn, Melbourne 3012 (Victoria) Australia
              </p>
              <p className="text-xs text-blue-300">
                Phone:{' '}
                <a href="tel:+61430053716" className="font-bold underline hover:text-white">
                  +61 4300 53716
                </a>
              </p>
              <p className="text-xs text-slate-400">
                Specialist application review, guidance & international operations.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span>🇮🇳</span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Branch Office (India)
                </span>
              </div>
              <p className="text-sm font-semibold text-white">
                Shop 1, c/o Mukhija Associates, Rodeo Drive, Kundli 131029 (Haryana) India
              </p>
              <p className="text-xs text-emerald-300">
                Phone:{' '}
                <a href="tel:+919810755659" className="font-bold underline hover:text-white">
                  +91 98107 55659
                </a>
              </p>
              <p className="text-xs text-slate-400">
                Registered Indian office & direct client consultation point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOLLOW US ON SOCIAL MEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Stay Connected
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Follow Us on Social Media
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Stay connected with JSR World Visas for company announcements, visa service information, destination updates and general travel and application guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Facebook Link Card */}
            <a
              href="https://www.facebook.com/jsrworldvisas"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-slate-200 hover:border-blue-500 bg-slate-50/50 hover:bg-blue-50/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                  <RemixIcon name="ri-facebook-fill" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-sm group-hover:text-blue-700 transition-colors">
                    Facebook
                  </strong>
                  <span className="text-xs text-slate-500">
                    Facebook.com/jsrworldvisas
                  </span>
                </div>
              </div>
              <RemixIcon name="ri-arrow-right-up-line" className="text-slate-400 group-hover:text-blue-600 text-xl transition-colors" />
            </a>

            {/* Instagram Link Card */}
            <a
              href="https://www.instagram.com/jsrworldvisas?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-slate-200 hover:border-pink-500 bg-slate-50/50 hover:bg-pink-50/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                  <RemixIcon name="ri-instagram-fill" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-sm group-hover:text-pink-700 transition-colors">
                    Instagram
                  </strong>
                  <span className="text-xs text-slate-500">
                    @jsrworldvisas
                  </span>
                </div>
              </div>
              <RemixIcon name="ri-arrow-right-up-line" className="text-slate-400 group-hover:text-pink-600 text-xl transition-colors" />
            </a>

          </div>
        </div>
      </section>

      {/* 7. OUR COMMITMENT & REGULATORY NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
            <RemixIcon name="ri-shield-star-line" className="text-base" />
            <span>Our Commitment</span>
          </div>

          <div className="space-y-3 text-slate-700 text-sm leading-relaxed max-w-4xl">
            <p className="font-semibold text-slate-900 text-base">
              At JSR World Visas, we aim to provide a professional, transparent and client-focused experience.
            </p>
            <p>
              We will explain the scope of our services and applicable charges before proceeding. Visa approvals are determined by the relevant government authorities, and no individual or company can guarantee a visa outcome.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-600">
            <span className="text-slate-900 font-bold">
              JSR World Visas — Your journey. Our guidance.
            </span>
            <span className="text-slate-500">
              WWW.jsrworldvisas.com
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
