import React from 'react';
import { PageId } from '../types';
import { RemixIcon } from '../components/RemixIcon';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50/60 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto text-3xl font-black">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for does not exist or has been relocated within JSR World Visas.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <RemixIcon name="ri-home-4-line" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={() => onNavigate('sitemap')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <RemixIcon name="ri-node-tree" />
            <span>View Sitemap</span>
          </button>
        </div>
      </div>
    </div>
  );
};
