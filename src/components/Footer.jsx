import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#020408] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-md group-hover:bg-accent-blue transition-colors duration-300">
                <span className="text-black font-bold text-lg">TL</span>
              </div>
              <span className="text-sm font-bold tracking-widest text-white uppercase">
                TrendLens
              </span>
            </Link>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Market intelligence for informed decision-making.
            </p>
          </div>

          {/* Links 1: Product */}
          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Home</Link></li>
              <li><a href="#how-it-works" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">How It Works</a></li>
              <li><Link to="/support" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Pricing & Support</Link></li>
              <li><Link to="/waitlist" className="text-slate-400 hover:text-blue-400 text-xs font-bold uppercase tracking-widest transition-colors">Early Access</Link></li>
            </ul>
          </div>

          {/* Links 2: Legal */}
          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Support & disclaimer */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Support</h4>
            <a href="mailto:support@trendlens.online" className="text-accent-blue hover:underline text-xs font-bold uppercase tracking-widest">
              support@trendlens.online
            </a>
            <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-wider font-medium">
              Trendlens provides market insights for informational purposes only and does not guarantee outcomes.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © 2026 Trendlens. Operated from Ghana.
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">System Status</a>
            <a href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Changelog</a>
            <a href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Feedback</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
