import React from 'react';
import { Search, Layers, Zap, Target, BarChart2 } from 'lucide-react';

export const Problem = () => {
  return (
    <section id="problem" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="mb-8">
          <span className="text-accent-blue text-xs font-bold tracking-widest uppercase">The Problem</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[0.95] tracking-tighter uppercase">
              Noise is the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 italic pr-2">
                Deciding
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 italic">
                Factor.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-400 mb-12 leading-relaxed font-medium">
              Most founders fail because they decide with incomplete information. Guru hype and TikTok trends are not market signals.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[#0B101B] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/30 transition-colors">
                  <Target className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Precision Shortfall</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Guesswork leads to wasted capital and development leak.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[#0B101B] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/30 transition-colors">
                  <BarChart2 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Hype Saturation</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Following influencers puts you in already saturated markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 justify-center mt-8 lg:mt-0">
            
            {/* Card 1 */}
            <div className="group bg-[#050912] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-accent-blue/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 text-accent-blue">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Observation</h4>
                  <p className="text-slate-400 text-sm">Capturing public activity across fragmented sources.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#050912] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-accent-blue/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 text-accent-blue">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Aggregation</h4>
                  <p className="text-slate-400 text-sm">Normalizing data into comparable market segments.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#050912] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-accent-blue/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0 text-accent-blue">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Analysis</h4>
                  <p className="text-slate-400 text-sm">Decoding growth rates without anecdotal bias.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
