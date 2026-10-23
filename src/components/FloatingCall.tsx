import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { RemixIcon } from './RemixIcon';

export const FloatingCall: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {/* Quick Direct Call Modal / Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  JSR
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-blue-700 rounded-full"></span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">{COMPANY_CONFIG.name}</p>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <RemixIcon name="ri-checkbox-circle-fill" className="text-xs text-emerald-300" />
                  <span>Direct Calling Desk</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close call options"
            >
              <RemixIcon name="ri-close-line" className="text-lg" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 text-xs text-slate-600 space-y-3">
            <p className="text-slate-800 font-medium">
              Speak directly with our senior visa advisors. Choose your preferred office line:
            </p>

            {/* Office 1: India Branch Office */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🇮🇳</span>
                  <span className="font-bold text-slate-900 text-xs">India Branch Office</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono font-medium">
                  {COMPANY_CONFIG.indiaPhone}
                </p>
                <p className="text-[10px] text-slate-400">
                  Rodeo Drive, Kundli (Haryana)
                </p>
              </div>
              <a
                href={`tel:${COMPANY_CONFIG.indiaPhoneRaw}`}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
              >
                <RemixIcon name="ri-phone-fill" className="text-xs" />
                <span>Call</span>
              </a>
            </div>

            {/* Office 2: Australia Head Office */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🇦🇺</span>
                  <span className="font-bold text-slate-900 text-xs">Australia Head Office</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono font-medium">
                  {COMPANY_CONFIG.australiaPhone}
                </p>
                <p className="text-[10px] text-slate-400">
                  Brooklyn, Melbourne (Victoria)
                </p>
              </div>
              <a
                href={`tel:${COMPANY_CONFIG.australiaPhoneRaw}`}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
              >
                <RemixIcon name="ri-phone-fill" className="text-xs" />
                <span>Call</span>
              </a>
            </div>

            {/* Operating Hours Note */}
            <div className="text-[11px] text-slate-500 bg-blue-50/70 p-2.5 rounded-xl border border-blue-100 flex items-start gap-2">
              <RemixIcon name="ri-time-line" className="text-blue-600 shrink-0 text-sm mt-0.5" />
              <span>
                Office hours: Mon – Sat 9:30 AM – 6:30 PM (IST) &amp; Australian business hours (AEST).
              </span>
            </div>

            {/* Direct Quick Dial */}
            <a
              href={`tel:${COMPANY_CONFIG.indiaPhoneRaw}`}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-xs"
            >
              <RemixIcon name="ri-phone-fill" className="text-sm" />
              <span>Tap to Call Primary Desk ({COMPANY_CONFIG.indiaPhone})</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Call Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Direct Call JSR World Visas Desk"
        className="group relative flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <span className="sr-only">Direct Call JSR World Visas</span>
        
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
        </span>
        
        <RemixIcon name="ri-phone-fill" className="text-2xl text-white" />

        {/* Hover pill on desktop (expanding to the right) */}
        {!isOpen && (
          <span className="hidden lg:block absolute left-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call Us ({COMPANY_CONFIG.indiaPhone})
          </span>
        )}
      </button>
    </div>
  );
};
