import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tighter uppercase mb-8 leading-[0.9]">
            Join the <br />
            <span className="text-accent-blue">Pilot.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mb-12 font-medium max-w-xl mx-auto">
            TrendLens is an operator tool, not an influencer platform. Apply for our pilot cohort today.
          </p>
          
          <Button 
            variant="primary" 
            className="text-base px-10 py-5 group"
            onClick={() => window.location.href = '/waitlist'}
          >
            Apply for Access
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
