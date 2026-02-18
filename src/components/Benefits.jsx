import React from 'react';
import { CheckCircle2, Zap, Shield, Eye } from 'lucide-react';

const benefits = [
  "Reduce guesswork by validating ideas with real data",
  "See momentum before the competition catches on",
  "Make confident decisions backed by structured insights",
  "Identify niche opportunities in crowded markets",
  "Save hundreds of hours on manual market research"
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
              Why TrendLens?
            </h2>
            <p className="text-lg text-slate-400 mb-8 font-medium">
              We built TrendLens for founders who want to move fast and break things—intelligently.
            </p>
            
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent-blue flex-shrink-0 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 text-lg group-hover:text-white transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-surface border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-1">10x</div>
                  <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Faster Research</div>
                </div>
                <div className="bg-gradient-to-br from-accent-blue to-accent-darkBlue p-6 rounded-2xl text-white shadow-[0_0_30px_-10px_rgba(46,144,250,0.5)]">
                  <Eye className="w-8 h-8 text-white/80 mb-4" />
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-white/80 font-bold text-[10px] uppercase tracking-widest">Market Monitoring</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#0F172A] border border-white/5 p-6 rounded-2xl text-white hover:bg-white/5 transition-colors">
                  <Shield className="w-8 h-8 text-emerald-400 mb-4" />
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Data Sources</div>
                </div>
                <div className="bg-surface border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="mb-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">High</div>
                  <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Signal Clarity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
