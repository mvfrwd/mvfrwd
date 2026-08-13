'use client';

import React, { useRef } from 'react';
import { PROCESS_STEPS } from '@/data/siteContent';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const ProcessTimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 40%']
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative flex flex-col gap-12 py-8">
      {/* Section Tag */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
          04 // METHODOLOGY
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-off-white">
          HOW WE MOVE.
        </h2>
      </div>

      <div className="relative">
        {/* Living Orange Line Track across steps */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <svg viewBox="0 0 1000 400" fill="none" className="w-full h-full overflow-visible">
            {/* Ambient Dash Background Path */}
            <path
              d="M 160 80 Q 330 20 500 80 T 840 80 Q 840 240 500 240 T 160 240"
              stroke="#FF4B2B"
              strokeWidth="1.5"
              strokeOpacity="0.15"
              strokeDasharray="4 6"
            />
            {/* Scroll-linked Active Draw Line */}
            <motion.path
              d="M 160 80 Q 330 20 500 80 T 840 80 Q 840 240 500 240 T 160 240"
              stroke="#FF4B2B"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: shouldReduceMotion ? 1 : pathLength }}
            />
          </svg>
        </div>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {PROCESS_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border border-brand-off-white/10 rounded-xl p-6 bg-brand-near-black/80 backdrop-blur-sm relative flex flex-col justify-between hover:border-brand-orange/50 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono bg-brand-orange/10 border border-brand-orange/30 text-brand-orange px-2.5 py-1 rounded font-bold">
                  STEP {item.step}
                </span>
                <span className="text-brand-muted text-xs font-mono">0{index + 1}/06</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-brand-off-white mb-2 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};