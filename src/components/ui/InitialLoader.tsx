'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InitialLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast dynamic loader logic tied to window ready state
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        // Accelerate increment naturally
        const diff = Math.floor(Math.random() * 25) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-brand-near-black flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Top Brand Marker */}
          <div className="flex justify-between items-center text-[10px] font-mono text-brand-muted tracking-widest">
            <span>MVFRWD // BRAND INITIALIZATION</span>
            <span>[2026]</span>
          </div>

          {/* Center Brand Sequence */}
          <div className="flex flex-col items-center justify-center gap-6 my-auto">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-7xl font-extrabold text-brand-off-white tracking-tight"
            >
              mvfrwd.
            </motion.h1>

            {/* Dynamic Progress Indicator */}
            <div className="w-full max-w-md flex flex-col gap-2">
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-brand-orange"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-brand-muted">
                <span>{progress < 100 ? 'LOADING ASSETS' : 'MOVE FORWARD.'}</span>
                <span className="text-brand-orange font-bold">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center text-[10px] font-mono text-brand-muted tracking-widest">
            MOVEMENT. PROGRESS. MOMENTUM.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};