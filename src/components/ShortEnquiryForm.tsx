import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

interface ShortEnquiryFormProps {
  title?: string;
  subtitle?: string;
  defaultCountry?: string;
  onSuccess?: () => void;
}

export const ShortEnquiryForm: React.FC<ShortEnquiryFormProps> = ({
  title = 'Send Quick Enquiry',
  subtitle = 'Leave your details below. Our Sonipat counselor will contact you within 2 hours.',
  defaultCountry = 'USA',
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(defaultCountry);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const countries = ['USA', 'UK', 'Canada', 'Australia', 'New Zealand', 'Germany'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setError('');
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleSendWhatsApp = () => {
    const text = `*New Study Abroad Enquiry*\n*Name:* ${name}\n*Phone:* ${phone}\n*Country:* ${country}\n*Message:* ${message || 'Need university guidance.'}`;
    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-4 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-slate-900">
          Enquiry Received!
        </h3>
        <p className="text-sm text-slate-600">
          Thank you, <strong>{name}</strong>. Our senior Sonipat counselor will call you shortly regarding your <strong>{country}</strong> application.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleSendWhatsApp}
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp Now</span>
          </button>
          <button
            onClick={() => {
              setSubmitted(false);
              setName('');
              setPhone('');
              setMessage('');
            }}
            className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs transition-colors cursor-pointer"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-xl mx-auto space-y-5">
      <div className="space-y-1">
        <h3 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
            {error}
          </div>
        )}

        {/* 1. Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
          />
        </div>

        {/* 2. Phone */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXX XXXXX"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
          />
        </div>

        {/* 3. Preferred Country */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Preferred Country *
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 cursor-pointer"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Message / Course of Interest
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. Interested in MS in Computer Science for Fall 2025"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Send Free Enquiry</span>
        </button>

        <p className="text-[11px] text-center text-slate-400">
          🔒 Zero spam • Your information is strictly used for counseling
        </p>
      </form>
    </div>
  );
};
