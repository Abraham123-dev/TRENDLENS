import React from 'react';
import { cn } from '../../../utils.js/cn';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed rounded-md";
  
  const variants = {
    primary: "bg-[#0055FF] hover:bg-[#0044CC] text-white shadow-[0_0_20px_-5px_rgba(0,85,255,0.4)] border border-transparent",
    secondary: "bg-surfaceHighlight text-white hover:bg-surfaceHighlight/80 border border-white/5",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/5",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
