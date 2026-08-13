'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { FOUNDERS_DATA, Founder } from '@/data/founders';

export const FounderSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll position across the founder storytelling block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const step = 1 / FOUNDERS_DATA.length;
    const current = Math.min(
      Math.floor(latest / step),
      FOUNDERS_DATA.length - 1
    );
    if (current !== activeIndex && current >= 0) {
      setActiveIndex(current);
    }
  });

  return (
    <section className="border-t border-brand-off-white/10 pt-20 flex flex-col gap-12">
      {/* SECTION HEADER */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center space-x-3">
          <span className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
            06 // THE FOUNDERS
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-7xl font-extrabold text-brand-off-white leading-[0.95]">
          THE PEOPLE <br />
          <span className="text-brand-orange">BEHIND THE MOVE.</span>
        </h2>
        <p className="text-brand-muted text-sm md:text-base font-mono mt-2">
          Different minds. One direction. Forward.
        </p>
      </div>

      {/* DYNAMIC PROGRESS INDICATOR */}
      <div className="flex items-center space-x-4 border-y border-brand-off-white/10 py-4 font-mono text-xs">
        {FOUNDERS_DATA.map((founder, idx) => {
          const isActive = activeIndex === idx;
          return (
            <React.Fragment key={founder.id}>
              <button
                onClick={() => {
                  setActiveIndex(idx);
                  const el = document.getElementById(`founder-scroll-target-${idx}`);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center space-x-2 transition-colors duration-300 ${
                  isActive ? 'text-brand-orange font-bold' : 'text-brand-muted hover:text-brand-off-white'
                }`}
              >
                <span>{founder.id}</span>
                <span className="hidden md:inline text-[10px]">{founder.name}</span>
              </button>
              {idx < FOUNDERS_DATA.length - 1 && (
                <div className="flex-1 h-px bg-brand-off-white/10 relative overflow-hidden">
                  {isActive && (
                    <motion.div
                      layoutId="founder-progress-line"
                      className="absolute inset-0 bg-brand-orange"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* DESKTOP STICKY SCROLL CONTAINER */}
      <div ref={containerRef} className="hidden lg:block relative min-h-[300vh]">
        <div className="sticky top-28 h-[calc(100vh-8rem)] grid grid-cols-12 gap-12 items-center">
          {/* LEFT: EDITORIAL PHOTO DISPLAY */}
          <div className="col-span-5 relative h-full max-h-[560px] w-full rounded-2xl overflow-hidden border border-brand-off-white/10 bg-brand-near-black group">
            {FOUNDERS_DATA.map((founder, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.div
                  key={founder.id}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.05,
                    x: isActive ? 0 : 20
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.1 : 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Subtle Grayscale & Contrast Photo Treatment */}
                  <div className="relative w-full h-full aspect-[4/5] grayscale hover:grayscale-0 contrast-[1.05] transition-all duration-700">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback placeholder styling if graphic asset is missing
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Fallback visual indicator if photograph is not uploaded yet */}
                    <div className="absolute inset-0 bg-brand-near-black border border-dashed border-brand-off-white/20 flex flex-col justify-center items-center p-6 text-center z-[-1]">
                      <span className="font-mono text-xs text-brand-orange mb-2">[ {founder.id} / PHOTOGRAPH ]</span>
                      <span className="font-display text-lg font-bold text-brand-off-white">{founder.name}</span>
                      <span className="text-xs text-brand-muted font-mono mt-1">/public/images/founders/founder-{founder.id}.jpg</span>
                    </div>

                    {/* Subtle Orange Accent Stroke Overlay */}
                    <div className="absolute inset-0 border border-brand-orange/0 group-hover:border-brand-orange/40 transition-colors duration-500 rounded-2xl pointer-events-none" />
                  </div>

                  {/* Interactive Floating Arrow Badge */}
                  <div className="absolute bottom-4 right-4 bg-brand-black/80 backdrop-blur-md border border-brand-off-white/10 px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-[10px] font-mono text-brand-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>MOVE</span>
                    <ArrowUpRight className="w-3 h-3 text-brand-orange" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: EDITORIAL FOUNDER INFORMATION */}
          <div className="col-span-7 flex flex-col justify-center h-full">
            {FOUNDERS_DATA.map((founder, idx) => {
              const isActive = activeIndex === idx;
              if (!isActive) return null;
              return (
                <motion.div
                  key={founder.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-brand-off-white/10 pb-4">
                    <span className="font-mono text-xs text-brand-orange font-bold">
                      {founder.id} / 0{FOUNDERS_DATA.length}
                    </span>
                    <span className="font-mono text-xs text-brand-muted uppercase">
                      {founder.role}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl font-extrabold text-brand-off-white">
                    {founder.name}
                  </h3>

                  {/* Prominent Editorial Quote */}
                  <blockquote className="font-display text-2xl md:text-3xl font-extrabold text-brand-off-white leading-snug border-l-2 border-brand-orange pl-6 py-1 my-2">
                    "{founder.quote}"
                  </blockquote>

                  <p className="text-brand-muted text-sm leading-relaxed max-w-xl">
                    {founder.bio}
                  </p>

                  <div className="bg-brand-near-black border border-brand-off-white/10 p-5 rounded-xl flex flex-col gap-1 max-w-xl">
                    <span className="text-[10px] font-mono text-brand-orange tracking-widest uppercase">FOCUS & PERSPECTIVE</span>
                    <p className="text-xs text-brand-off-white leading-relaxed">{founder.about}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4 pt-2">
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 text-xs font-mono text-brand-muted hover:text-brand-orange transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LINKEDIN</span>
                      </a>
                    )}
                    {founder.instagram && (
                      <a
                        href={founder.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 text-xs font-mono text-brand-muted hover:text-brand-orange transition-colors"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>INSTAGRAM</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Hidden scroll-trigger anchor points */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {FOUNDERS_DATA.map((_, idx) => (
            <div key={idx} id={`founder-scroll-target-${idx}`} className="h-1/4 w-full" />
          ))}
        </div>
      </div>

      {/* MOBILE & TABLET STACKED STORYTELLING LAYOUT */}
      <div className="flex lg:hidden flex-col gap-16">
        {FOUNDERS_DATA.map((founder) => (
          <div
            key={founder.id}
            id={`founder-mobile-${founder.id}`}
            className="flex flex-col gap-6 border-b border-brand-off-white/10 pb-12"
          >
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-brand-orange font-bold">{founder.id} / 0{FOUNDERS_DATA.length}</span>
              <span className="text-brand-muted uppercase">{founder.role}</span>
            </div>

            {/* Mobile Portrait Frame */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-brand-off-white/10 bg-brand-near-black">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="100vw"
                className="object-cover grayscale contrast-[1.05]"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-brand-near-black border border-dashed border-brand-off-white/20 flex flex-col justify-center items-center p-6 text-center z-[-1]">
                <span className="font-mono text-xs text-brand-orange mb-2">[ {founder.id} / PHOTOGRAPH ]</span>
                <span className="font-display text-base font-bold text-brand-off-white">{founder.name}</span>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-brand-off-white">
              {founder.name}
            </h3>

            <blockquote className="font-display text-xl font-bold text-brand-off-white leading-snug border-l-2 border-brand-orange pl-4 py-1">
              "{founder.quote}"
            </blockquote>

            <p className="text-brand-muted text-xs leading-relaxed">
              {founder.bio}
            </p>

            <div className="bg-brand-near-black border border-brand-off-white/10 p-4 rounded-xl flex flex-col gap-1">
              <span className="text-[9px] font-mono text-brand-orange tracking-widest uppercase">FOCUS</span>
              <p className="text-xs text-brand-off-white">{founder.about}</p>
            </div>

            <div className="flex items-center space-x-4 pt-1">
              {founder.linkedin && (
                <a href={founder.linkedin} target="_blank" rel="noreferrer" className="text-xs font-mono text-brand-muted hover:text-brand-orange flex items-center space-x-1">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              )}
              {founder.instagram && (
                <a href={founder.instagram} target="_blank" rel="noreferrer" className="text-xs font-mono text-brand-muted hover:text-brand-orange flex items-center space-x-1">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>INSTAGRAM</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};