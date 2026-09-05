import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { MessageCircle, X, Send, CheckCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('University Admissions');

  const topics = [
    'University Admissions',
    'Visa File Preparation',
    'Sonipat Office Appointment',
    'US / UK Intake 2025/2026',
    'Other Inquiries',
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = userQuery.trim() || 'I would like to speak with a counselor regarding study abroad.';
    const fullText = `Hello Instant Visa Sonipat! [Topic: ${selectedTopic}]\n${cleanQuery}\n(Sent from Instant Visa Sonipat Website)`;
    const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setUserQuery('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-lg">
                  IV
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-600 rounded-full"></span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Instant Visa Sonipat</p>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-200" />
                  <span>Online Desk Counselor</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-emerald-700/50 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 text-xs text-slate-600 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 shadow-xs space-y-1">
              <p className="text-slate-800 font-medium">
                Namaste! How can our Sonipat counselor guide your study abroad journey today?
              </p>
              <p className="text-[10px] text-slate-400">
                Typically responds in a few minutes during office hours (9:30 AM – 6:30 PM).
              </p>
            </div>

            {/* Quick Topic Chips */}
            <div>
              <p className="text-[11px] font-semibold text-slate-700 mb-1.5">Select your query focus:</p>
              <div className="flex flex-wrap gap-1.5">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTopic(t)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                      selectedTopic === t
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="space-y-2 pt-1">
              <textarea
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Type your question or preferred country (e.g., 'Looking for UK Sep 2025 intake')..."
                rows={2}
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 placeholder:text-slate-400 resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Direct WhatsApp Chat</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp with Sonipat Counselor"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="sr-only">Chat with Instant Visa Sonipat on WhatsApp</span>
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        
        <MessageCircle className="w-7 h-7 text-white fill-current" />

        {/* Hover pill on desktop */}
        {!isOpen && (
          <span className="hidden lg:block absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp ({COMPANY_CONFIG.whatsappDisplay})
          </span>
        )}
      </button>
    </div>
  );
};
