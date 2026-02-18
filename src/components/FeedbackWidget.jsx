import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { useToast } from './ui/Toast';

export const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      showToast('FEEDBACK TRANSMITTED');
      setFeedback('');
      setIsSubmitting(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 glass-card rounded-2xl p-6 shadow-2xl border border-white/10"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Share Experience</h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="How is your experience with the app?"
                className="w-full bg-[#050912] border border-white/5 rounded-lg p-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue/50 transition-colors h-24 resize-none"
                required
              />
              <Button 
                variant="primary" 
                className="w-full py-2.5 text-[10px] font-bold tracking-widest uppercase"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'TRANSMITTING...' : 'SEND FEEDBACK'}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors duration-300"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </motion.button>
    </div>
  );
};
