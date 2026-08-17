'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, DemoCategory, PLAYGROUND_PROJECTS } from '@/data/playground';
import { DemoCard } from './DemoCard';

export const PlaygroundClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DemoCategory>('ALL');

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PLAYGROUND_PROJECTS
      : PLAYGROUND_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="pt-36 pb-24 px-4 max-w-6xl mx-auto flex flex-col gap-20">
      {/* 1. HERO SECTION */}
      <section className="flex flex-col gap-6 border-b border-brand-off-white/10 pb-16">
        <div className="flex items-center space-x-3">
          <span className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
            // MVFRWD LAB & EXPERIMENTS
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-extrabold text-brand-off-white leading-[0.9] tracking-tight">
          THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-alt">
            PLAYGROUND.
          </span>
        </h1>

        <p className="text-brand-muted text-base md:text-xl max-w-2xl font-sans leading-relaxed mt-2">
          Concepts, experiments, and digital experiences built by mvfrwd. to explore what’s possible across different industries.
        </p>

        {/* Link to Real Client Work */}
        <div className="pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono text-brand-muted hover:text-brand-orange transition-colors"
          >
            <span>LOOKING FOR OFFICIAL CLIENT WORK? VIEW PROJECTS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 2. PHILOSOPHY STATEMENT */}
      <section className="border border-brand-off-white/10 bg-brand-near-black/60 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <span className="text-[10px] font-mono text-brand-orange tracking-widest uppercase block mb-3">
          EXPERIMENTAL POSITIONING
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-brand-off-white leading-snug mb-4">
          WE BUILD WHAT WE IMAGINE.
        </h2>
        <p className="text-brand-muted text-sm md:text-base max-w-3xl leading-relaxed">
          These aren't generic templates or downloaded themes. They are internally engineered proof-of-concepts designed to test real design systems, micro-interactions, and high-performance frontend architectures.
        </p>
      </section>

      {/* 3. CATEGORY FILTER BAR */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-brand-off-white/10 pb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-brand-off-white font-bold'
                    : 'text-brand-muted hover:text-brand-off-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="playground-filter-pill"
                    className="absolute inset-0 bg-brand-orange rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* 4. DEMO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <DemoCard key={project.slug} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. FOOTER CONVERSION CTA */}
      <section className="border-t border-brand-off-white/10 pt-20 text-center flex flex-col items-center gap-6 relative">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
          CUSTOM ENGINEERING
        </span>
        <h2 className="font-display text-4xl md:text-7xl font-extrabold text-brand-off-white leading-tight">
          DON'T SEE YOUR INDUSTRY? <br />
          <span className="text-brand-orange">GOOD. WE BUILD CUSTOM.</span>
        </h2>
        <p className="text-brand-muted text-sm md:text-base max-w-lg leading-relaxed">
          Tell us about your business, the challenge you’re solving, and what you need. We’ll figure out the architecture.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center space-x-3 bg-brand-orange hover:bg-brand-orange-alt text-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest transition-transform duration-200 hover:scale-105 mt-4"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
};