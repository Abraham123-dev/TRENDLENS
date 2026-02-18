import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, ShieldQuestion } from 'lucide-react';

export const Support = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent-blue text-xs font-bold tracking-widest uppercase block mb-4">Support Center</span>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tighter uppercase mb-6">How can we <br /><span className="text-accent-blue">Assist</span> you?</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Mail,
              title: "Email Support",
              desc: "Get in touch with our team for technical assistance.",
              action: "support@trendlens.com"
            },
            {
              icon: MessageSquare,
              title: "Live Terminal",
              desc: "Quick questions about features or market signals.",
              action: "Open Terminal"
            },
            {
              icon: ShieldQuestion,
              title: "Documentation",
              desc: "Learn how to interpret market baseline data.",
              action: "View Docs"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-accent-blue/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg uppercase tracking-tight mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">{item.desc}</p>
              <button className="text-xs font-bold text-white uppercase tracking-widest hover:text-accent-blue transition-colors">
                {item.action} →
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass-card p-10 rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How often is data updated?", a: "Signals are normalized in real-time and dashboard metrics are updated every 6 hours." },
              { q: "Can I export market reports?", a: "Yes, PDF and JSON exports are available for all Phase 1 Pilot members." },
              { q: "What sources do you monitor?", a: "We analyze over 50 public platforms including major e-commerce hubs and content networks." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-6">
                <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-3">{faq.q}</h4>
                <p className="text-slate-400 text-sm font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
