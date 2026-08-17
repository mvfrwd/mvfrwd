'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PlaygroundProject } from '@/data/playground';

interface DemoCardProps {
  project: PlaygroundProject;
  index: number;
}

export const DemoCard: React.FC<DemoCardProps> = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col justify-between border border-brand-off-white/10 bg-brand-near-black/70 hover:border-brand-orange/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Top Meta Info */}
      <div className="flex justify-between items-center pb-4 border-b border-brand-off-white/10 font-mono text-xs">
        <div className="flex items-center space-x-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <span className="text-brand-orange font-bold tracking-wider">{project.badge}</span>
        </div>
        <span className="text-brand-muted uppercase text-[10px] tracking-widest">
          {project.category} // {project.industry}
        </span>
      </div>

      {/* Interactive Browser Window Mockup Shell */}
      <div className="my-6 w-full rounded-2xl border border-brand-off-white/10 bg-black/60 p-4 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
        {/* Browser Top Controls */}
        <div className="flex items-center justify-between border-b border-brand-off-white/5 pb-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] font-mono text-brand-muted/70 truncate max-w-[180px]">
            mvfrwd://demo/{project.slug}
          </span>
          <span className="text-[9px] font-mono text-brand-orange uppercase border border-brand-orange/30 bg-brand-orange/10 px-2 py-0.5 rounded">
            {project.status}
          </span>
        </div>

        {/* Center Mockup Visual Representation */}
        <div className="py-8 flex flex-col items-center justify-center text-center gap-2 group-hover:scale-105 transition-transform duration-500">
          <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-off-white tracking-tight">
            {project.name}
          </span>
          <span className="text-xs font-mono text-brand-muted max-w-xs">{project.tagline}</span>
        </div>

        {/* Bottom Ambient Accent Line */}
        <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-0 group-hover:w-full bg-brand-orange transition-all duration-500" />
        </div>
      </div>

      {/* Body & Description */}
      <div className="flex flex-col gap-4">
        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{project.description}</p>

        {/* Bottom Action Footer */}
        <div className="pt-4 border-t border-brand-off-white/10 flex justify-between items-center">
          <span className="text-[11px] font-mono text-brand-muted group-hover:text-brand-off-white transition-colors">
            INTERNAL EXPERIMENT
          </span>

          <Link
            href={`/playground/${project.slug}`}
            className="inline-flex items-center space-x-2 bg-white/5 hover:bg-brand-orange text-brand-off-white hover:text-white px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300"
          >
            <span>EXPLORE</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};