'use client';

import React from 'react';

export const TechCreativitySection: React.FC = () => {
  return (
    <section className="py-12 border-t border-brand-off-white/10">
      <div className="flex flex-col gap-6">
        <span className="text-xs font-mono text-brand-orange tracking-widest">03 // TECHNOLOGY</span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-off-white leading-tight">
          BUILT WITH PRECISION.
          <br />
          <span className="text-brand-muted">DRIVEN BY RESULTS.</span>
        </h2>
        <p className="text-brand-muted text-sm md:text-base max-w-2xl leading-relaxed">
          We use modern web technologies, data analytics, and AI-powered systems to build digital experiences that perform at the highest level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="border border-brand-off-white/10 rounded-xl p-6 bg-brand-near-black/40">
            <span className="text-xs font-mono text-brand-orange">NEXT.JS</span>
            <p className="text-brand-muted text-xs mt-2 leading-relaxed">High-performance React frameworks for blazing-fast web applications.</p>
          </div>
          <div className="border border-brand-off-white/10 rounded-xl p-6 bg-brand-near-black/40">
            <span className="text-xs font-mono text-brand-orange">FRAMER MOTION</span>
            <p className="text-brand-muted text-xs mt-2 leading-relaxed">Smooth, production-ready animations that feel natural and premium.</p>
          </div>
          <div className="border border-brand-off-white/10 rounded-xl p-6 bg-brand-near-black/40">
            <span className="text-xs font-mono text-brand-orange">TAILWIND CSS</span>
            <p className="text-brand-muted text-xs mt-2 leading-relaxed">Utility-first styling for rapid, consistent, and scalable design systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
