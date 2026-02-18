import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
              <span className="text-black font-bold text-lg">TL</span>
            </div>
            <span className="text-sm font-bold tracking-widest text-white uppercase">
              TrendLens
            </span>
          </div>
          
          <div className="flex gap-8">
            <Link to="/support" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase">
              Support
            </Link>
            <a href="#" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase">
              Terms
            </a>
            <a href="#" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors uppercase">
              Privacy
            </a>
          </div>
          
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">
            © 2024 TrendLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
