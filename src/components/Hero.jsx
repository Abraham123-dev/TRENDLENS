import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1221] border border-accent-blue/20 text-accent-blue text-[10px] font-bold tracking-widest uppercase mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></div>
              <span>Phase 1 Pilot Program // Open for Registry</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] lg:leading-[0.9] mb-8 text-white"
            >
              DECODE THE <br />
              MARKET <br />
              <span className="text-[#0055FF]">BASELINE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-400 mb-12 leading-relaxed max-w-xl font-medium"
            >
              Professional market intelligence for operators who need clear signals to decide what to build, sell, or ignore.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                className="text-base px-8 py-4 w-full sm:w-auto"
                onClick={() => navigate('/waitlist')}
              >
                Join Waitlist
              </Button>
            </motion.div>
          </div>

          {/* Right Visual - Holographic Globe Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B101B] to-transparent rounded-3xl border border-white/5 overflow-hidden">
              {/* Abstract Digital Grid/Globe Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px]">
                  {/* Outer Rings */}
                  <div className="absolute inset-0 border border-accent-blue/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border border-accent-blue/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  
                  {/* Inner Globe Grid */}
                  <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,85,255,0.2),transparent_60%)] border border-accent-blue/30 backdrop-blur-sm">
                    <div className="absolute inset-0 opacity-30" 
                         style={{
                           backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                           backgroundSize: '20px 20px'
                         }}>
                    </div>
                  </div>

                  {/* Connecting Nodes */}
                  <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-accent-blue/50 to-transparent"></div>
                  <div className="absolute bottom-1/3 left-0 w-40 h-px bg-gradient-to-r from-accent-blue/50 to-transparent"></div>
                  
                  {/* Floating Data Points */}
                  <div className="absolute top-10 right-20 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                  <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-accent-blue rounded-full shadow-[0_0_10px_#2E90FA]"></div>
                </div>
              </div>
              
              {/* Feedback Button Overlay */}
              <div className="absolute bottom-6 right-6">
                <button className="flex items-center gap-2 bg-[#5B45FF] hover:bg-[#4A35EE] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Feedback
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
