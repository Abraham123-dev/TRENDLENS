import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Waitlist = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full glass-card p-12 rounded-3xl border border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-bold tracking-widest uppercase mb-6">
            Registry Open
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter uppercase mb-6 leading-tight">
            Apply for the <br />
            <span className="text-accent-blue">Pilot Program.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-lg font-medium">
            We are onboarding operators in cohorts to maintain data precision. Register your interest to be notified when a slot opens.
          </p>
          
          <form className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="sm:col-span-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Full name</label>
              <input 
                type="text" 
                className="w-full bg-[#050912] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
              <input 
                type="email" 
                className="w-full bg-[#050912] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Company / Role</label>
              <input 
                type="text" 
                className="w-full bg-[#050912] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
                placeholder="Founder / Growth"
              />
            </div>
            <div className="sm:col-span-2">
              <Button variant="primary" className="w-full py-4 uppercase tracking-widest text-xs font-bold">
                Submit Application
              </Button>
            </div>
          </form>
          
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold">
            Average response time: 48-72 hours
          </p>
        </div>
      </motion.div>
    </div>
  );
};
