import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import {
  ABOUT_PRINCIPLES,
  THINKING_COLUMNS,
  JOURNEY_TIMELINE,
  CULTURE_POINTS
} from '@/data/siteContent';
import { FounderSection } from '@/components/sections/FounderSection';

export const metadata: Metadata = {
  title: 'About mvfrwd. — The Team Behind the Move',
  description:
    'Meet the team behind mvfrwd. — a technology-driven digital agency founded by builders bringing together web engineering, marketing, and creative strategy.',
  alternates: {
    canonical: 'https://mvfrwd.vercel.app/about',
  },
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col gap-28">
      {/* 1. HERO */}
      <section className="flex flex-col gap-6">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">ABOUT MVFRWD.</span>
        <h1 className="font-display text-5xl md:text-8xl font-extrabold text-brand-off-white leading-[0.95]">
          WE'RE MOVING <br />
          <span className="text-brand-orange">FORWARD.</span>
        </h1>
        <p className="text-brand-muted text-base md:text-xl max-w-2xl leading-relaxed mt-2">
          "mvfrwd. started with a simple idea: Good digital work should help businesses move forward."
        </p>
      </section>

      {/* 2. OUR STORY */}
      <section className="border-t border-brand-off-white/10 pt-16 flex flex-col gap-8">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">01 // OUR STORY</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <h2 className="lg:col-span-6 font-display text-3xl md:text-5xl font-extrabold text-brand-off-white">
            EVERYTHING STARTS WITH A FIRST MOVE.
          </h2>
          <div className="lg:col-span-6 flex flex-col gap-4 text-brand-muted text-sm md:text-base leading-relaxed">
            <p>
              mvfrwd. began with a group of college friends who shared a common interest in technology, design, marketing, and building digital systems.
            </p>
            <p>
              Instead of waiting for the perfect moment or pretending to have decades of legacy infrastructure, we decided to make the first move and build something authentic.
            </p>
            <p className="text-brand-off-white font-medium">
              That move became mvfrwd.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY WE STARTED */}
      <section className="border-t border-brand-off-white/10 pt-16 flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">02 // WHY MVFRWD.</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-off-white">
            NO MORE ISOLATED SILOS.
          </h2>
        </div>
        <p className="text-brand-muted text-sm md:text-base max-w-2xl">
          We wanted to build an agency where technology, creativity, marketing, and strategy don't operate in separate rooms.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-6 font-mono text-xs md:text-lg text-brand-off-white bg-brand-near-black p-8 rounded-2xl border border-brand-off-white/10">
          <span className="bg-white/5 px-4 py-2 rounded-lg">WEB</span>
          <span className="text-brand-orange">+</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg">DESIGN</span>
          <span className="text-brand-orange">+</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg">MARKETING</span>
          <span className="text-brand-orange">+</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg">STRATEGY</span>
          <span className="text-brand-orange">+</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg">AI</span>
          <span className="text-brand-orange">=</span>
          <span className="bg-brand-orange text-white font-bold px-5 py-2 rounded-lg">FORWARD</span>
        </div>
      </section>

      {/* 4. WHAT WE BELIEVE */}
      <section className="border-t border-brand-off-white/10 pt-16 flex flex-col gap-12">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">03 // WHAT WE BELIEVE</span>
        <div className="flex flex-col divide-y divide-brand-off-white/10">
          {ABOUT_PRINCIPLES.map((principle) => (
            <div key={principle.number} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <span className="md:col-span-2 font-mono text-xs text-brand-orange">{principle.number}</span>
              <h3 className="md:col-span-5 font-display text-xl md:text-3xl font-bold text-brand-off-white">
                {principle.title}
              </h3>
              <p className="md:col-span-5 text-brand-muted text-sm leading-relaxed">
                {principle.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW WE THINK */}
      <section className="border-t border-brand-off-white/10 pt-16 flex flex-col gap-12">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">04 // HOW WE THINK</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THINKING_COLUMNS.map((item) => (
            <div key={item.category} className="border border-brand-off-white/10 bg-brand-near-black p-8 rounded-2xl flex flex-col justify-between min-h-[220px]">
              <span className="text-xs font-mono text-brand-orange font-bold">{item.category}</span>
              <p className="text-brand-off-white text-sm leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR JOURNEY */}
      <section className="border-t border-brand-off-white/10 pt-16 flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">05 // OUR JOURNEY</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-off-white">
            THE JOURNEY STARTS NOW.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {JOURNEY_TIMELINE.map((step) => (
            <div key={step.phase} className="border border-brand-off-white/10 p-4 rounded-xl bg-black/40 flex flex-col gap-3">
              <span className="text-[10px] font-mono text-brand-orange">{step.phase}</span>
              <span className="font-display text-sm font-bold text-brand-off-white">{step.label}</span>
              <span className="text-[9px] font-mono text-brand-muted">{step.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOUNDER SECTION */}
      <FounderSection />

      {/* 8. CULTURE */}
      <section className="border-t border-brand-off-white/10 pt-16 flex flex-col gap-8">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">07 // HOW WE WORK</span>
        <div className="flex flex-wrap gap-4">
          {CULTURE_POINTS.map((point, idx) => (
            <span key={idx} className="font-display text-2xl md:text-4xl font-extrabold text-brand-off-white border border-brand-off-white/10 bg-brand-near-black px-6 py-4 rounded-2xl">
              {point}
            </span>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="border-t border-brand-off-white/10 pt-16 text-center flex flex-col items-center gap-6 relative">
        <div className="flex items-center space-x-3 mb-2">
          <span className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
            WE'RE JUST GETTING STARTED.
          </span>
          <span className="h-px w-8 bg-brand-orange" />
        </div>

        <h2 className="font-display text-4xl md:text-7xl font-extrabold text-brand-off-white leading-tight">
          WHAT'S YOUR <br />
          <span className="text-brand-orange">NEXT MOVE?</span>
        </h2>
        
        <p className="text-brand-muted text-sm md:text-base max-w-md">
          There's a lot ahead. And we're only on our first move. We've made ours — now let's help you make yours.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center space-x-3 bg-brand-orange hover:bg-brand-orange-alt text-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest transition-transform duration-200 hover:scale-105 mt-2"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}