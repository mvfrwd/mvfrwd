// src/components/ui/ScrollProgress.tsx
'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 w-[2px] bg-brand-orange z-50 origin-top pointer-events-none"
      style={{ scaleY }}
    />
  );
};