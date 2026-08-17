'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Sparkles, Layers } from 'lucide-react';
import { PlaygroundProject } from '@/data/playground';
import Image from 'next/image';

interface DemoDetailClientProps {
  project: PlaygroundProject;
}

export const DemoDetailClient: React.FC<DemoDetailClientProps> = ({ project }) => {
  return (
    <main className="pt-36 pb-24 px-4 max-w-5xl mx-auto flex flex-col gap-16">
      {/* Top Breadcrumb Navigation */}
      <div className="flex justify-between items-center border-b border-brand-off-white/10 pb-6 font-mono text-xs">
        <Link
          href="/playground"
          className="flex items-center space-x-2 text-brand-muted hover:text-brand-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO PLAYGROUND</span>
        </Link>
        <span className="text-brand-orange font-bold uppercase">{project.badge}</span>
      </div>

      {/* Header Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono text-brand-orange bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full uppercase">
            {project.category} // {project.industry}
          </span>
          <span className="text-xs font-mono text-brand-muted uppercase">
            STATUS: {project.status}
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold text-brand-off-white leading-[0.95] tracking-tight">
          {project.name}
        </h1>

        <p className="text-brand-muted text-base sm:text-xl font-sans leading-relaxed max-w-3xl">
          {project.tagline}
        </p>
      </section>

      {/* Live Demonstration Sandbox Header Box */}
      <section className="border border-brand-off-white/10 bg-brand-near-black/90 p-8 rounded-3xl flex flex-col sm:flex-row justify-between sm:items-center gap-6 backdrop-blur-md">
        <div>
          <span className="text-[10px] font-mono text-brand-muted block uppercase mb-1">
            DEMO ENVIRONMENT
          </span>
          <h3 className="font-display text-xl font-bold text-brand-off-white">
            EXPLORE THE PROTOTYPE
          </h3>
          <p className="text-xs font-mono text-brand-muted mt-1">
            {project.status === 'LIVE DEMO'
              ? 'Interactive live environment deployed.'
              : 'Interactive standalone sandbox currently in internal staging.'}
          </p>
        </div>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-brand-orange hover:bg-brand-orange-alt text-white px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-widest transition-transform duration-200 hover:scale-105 shrink-0"
          >
            <span>VIEW LIVE DEMO</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
          <div className="inline-flex items-center space-x-2 border border-brand-off-white/20 bg-white/5 text-brand-off-white px-6 py-3 rounded-full text-xs font-mono tracking-wider shrink-0 cursor-not-allowed">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>SANDBOX IN DEVELOPMENT</span>
          </div>
        )}
      </section>

      {/* Deep-Dive Grid Analysis */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Idea */}
        <div className="border border-brand-off-white/10 bg-brand-near-black/50 p-8 rounded-2xl flex flex-col gap-4">
          <div className="flex items-center space-x-2 text-brand-orange font-mono text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>THE IDEA</span>
          </div>
          <p className="text-brand-off-white/90 text-sm leading-relaxed">{project.theIdea}</p>
        </div>

        {/* Design Direction */}
        <div className="border border-brand-off-white/10 bg-brand-near-black/50 p-8 rounded-2xl flex flex-col gap-4">
          <div className="flex items-center space-x-2 text-brand-orange font-mono text-xs font-bold">
            <Layers className="w-4 h-4" />
            <span>DESIGN DIRECTION</span>
          </div>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-brand-muted">
            {project.designDirection.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-brand-orange mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features */}
        <div className="border border-brand-off-white/10 bg-brand-near-black/50 p-8 rounded-2xl flex flex-col gap-4">
          <div className="flex items-center space-x-2 text-brand-orange font-mono text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>KEY CAPABILITIES</span>
          </div>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-brand-muted">
            {project.keyFeatures.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-brand-orange mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Interactive Live Browser Frame or Screenshot */}
        <section className="w-full rounded-3xl border border-brand-off-white/10 bg-brand-near-black/90 overflow-hidden shadow-2xl">
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between border-b border-brand-off-white/10 px-6 py-4 bg-brand-black">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-xs font-mono text-brand-muted">
              {project.liveUrl || `https://mvfrwd.co/demo/${project.slug}`}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-mono text-brand-orange hover:underline flex items-center space-x-1"
              >
                <span>OPEN NEW TAB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Display Interactive iframe if liveUrl exists, or high-res Image */}
          <div className="relative w-full aspect-[16/10] bg-black">
            {project.liveUrl ? (
              <iframe
                src={project.liveUrl}
                title={`${project.name} live demo`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <span className="font-display text-4xl font-bold text-brand-off-white mb-2">{project.name}</span>
                <span className="text-xs font-mono text-brand-muted">CONCEPT PREVIEW COMING SOON</span>
              </div>
            )}
          </div>
        </section>
        
        {/* Technical Approach */}
        <div className="border border-brand-off-white/10 bg-brand-near-black/50 p-8 rounded-2xl flex flex-col gap-4">
          <div className="flex items-center space-x-2 text-brand-orange font-mono text-xs font-bold">
            <Code2 className="w-4 h-4" />
            <span>TECHNICAL ARCHITECTURE</span>
          </div>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-brand-muted">
            {project.technicalApproach.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-brand-orange mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="border border-brand-orange/40 bg-brand-near-black/90 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-8 relative overflow-hidden">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-xs font-mono text-brand-orange uppercase tracking-wider font-bold">
            LIKE THIS CONCEPT?
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-off-white leading-tight">
            LET'S BUILD YOURS.
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed">
            Your business doesn’t need another template. It needs an experience tailored to your audience and operational goals.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center space-x-3 bg-brand-orange hover:bg-brand-orange-alt text-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest transition-transform duration-200 hover:scale-105 shrink-0"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
};