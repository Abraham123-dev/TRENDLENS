import React from 'react';
import { Radio, Layers, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: "Step 1",
    icon: Radio,
    title: "Public Market Signals",
    description: "Trendlens continuously analyzes public activity across online platforms such as e-commerce listings, content platforms, product launches, and news sources.",
    listTitle: "These signals include:",
    listItems: [
      "Volume of activity",
      "Rate of change over time",
      "Consistency and recurrence",
      "Context around when and where interest appears"
    ],
    footer: "We look outward at the market — not into your private data."
  },
  {
    step: "Step 2",
    icon: Layers,
    title: "Signal Normalization",
    description: "Raw activity alone is noisy. Trendlens processes signals to make them comparable across platforms and time.",
    listTitle: "Answering key questions:",
    listItems: [
      "Is interest growing or fading?",
      "Is activity sustained or short-lived?",
      "Is this signal isolated or appearing across multiple sources?"
    ],
    footer: "No single platform decides the outcome."
  },
  {
    step: "Step 3",
    icon: TrendingUp,
    title: "Transparent Indicators",
    description: "Instead of predictions, Trendlens presents indicators that describe what is happening now and how it is changing.",
    listTitle: "Core Indicators:",
    listItems: [
      "Rising vs. stable vs. declining activity",
      "Sudden spikes vs. steady growth",
      "Early movement vs. late saturation"
    ],
    footer: "Trendlens does not tell you what will happen — it shows you what is happening."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <span className="text-accent-blue text-xs font-bold tracking-widest uppercase block mb-4">Methodology</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tighter">
            How TrendLens <br className="hidden md:block" /> Works
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-[#0B101B] border border-white/5 rounded-2xl p-8 hover:border-accent-blue/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-slate-300 group-hover:text-accent-blue" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                  {step.step}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight leading-none">
                {step.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium mb-8 border-b border-white/5 pb-8">
                {step.description}
              </p>

              {/* List Section */}
              <div className="flex-grow">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                  {step.listTitle}
                </h4>
                <ul className="space-y-3 mb-8">
                  {step.listItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Note */}
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 font-medium italic">
                  "{step.footer}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
