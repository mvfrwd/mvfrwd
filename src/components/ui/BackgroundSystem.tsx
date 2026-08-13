'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundSystem: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-brand-black">
      {/* Editorial Structural Guidelines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 grid grid-cols-4 md:grid-cols-12 h-full opacity-20">
        <div className="border-r border-brand-off-white/10 h-full" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="border-r border-brand-off-white/10 h-full" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="border-r border-brand-off-white/10 h-full" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="border-r border-brand-off-white/10 h-full hidden md:block" />
        <div className="h-full" />
      </div>

      {/* Dynamic Directional Draw Lines */}
      <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 100 0 L 100 1000 M 500 200 L 500 1200 M 1100 0 L 1100 800"
          stroke="#FF4B2B"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Coordinate Technical Markers */}
      <div className="absolute top-12 left-6 text-[9px] font-mono text-brand-muted tracking-widest opacity-40">
        SYS_POS // [22.3072° N, 73.1812° E]
      </div>
      <div className="absolute bottom-12 right-6 text-[9px] font-mono text-brand-muted tracking-widest opacity-40">
        MoVeFoRWarD // v 1.0.0
      </div>

      {/* Micro Grain Texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
    </div>
  );
};