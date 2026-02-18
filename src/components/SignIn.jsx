import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { useToast } from './ui/Toast';

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      showToast('ACCESS GRANTED. INITIALIZING TERMINAL.');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full glass-card p-10 rounded-2xl border border-white/10"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-white tracking-tighter uppercase mb-2">Sign In</h1>
          <p className="text-slate-400 text-sm font-medium">Enter your credentials to access the terminal.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full bg-[#050912] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
              placeholder="operator@trendlens.com"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Password</label>
            <input 
              required
              type="password" 
              className="w-full bg-[#050912] border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <Button 
            variant="primary" 
            className="w-full py-4 uppercase tracking-widest text-xs font-bold"
            disabled={isLoading}
          >
            {isLoading ? 'ESTABLISHING CONNECTION...' : 'Initialize Session'}
          </Button>
        </form>
        
        <div className="mt-8 text-center text-xs text-slate-500 font-medium">
          Interested in access? <a href="/waitlist" className="text-accent-blue hover:underline">Apply for registry</a>
        </div>
      </motion.div>
    </div>
  );
};
