'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ForwardLine } from '@/components/ui/ForwardLine';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-start pt-12 overflow-hidden">
      {/* Brand Tag */}
      <div className="flex items-center space-x-3 mb-6">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="h-px w-8 bg-brand-orange origin-left"
        />
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
          AGENCY // [EST. 2026]
        </span>
      </div>

      {/* Primary Logo Header Visual */}
      <div className="mb-8">
        <Image
          src="/assets/logo-primary.png"
          alt="mvfrwd primary logo"
          width={280}
          height={90}
          className="w-56 md:w-80 h-auto object-contain"
          priority
        />
      </div>

      {/* Headline Reveal */}
      <div className="overflow-hidden mb-8">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight text-brand-off-white leading-[0.9]"
        >
          YOUR BRAND'S <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-alt">
            NEXT MOVE.
          </span>
        </motion.h1>
      </div>

      {/* Lead Copy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-brand-muted text-base md:text-xl max-w-2xl font-sans leading-relaxed mb-12"
      >
        <strong className="text-brand-off-white font-semibold">mvfrwd.</strong> is a digital agency helping ambitious businesses build, market, and grow through technology, creativity, and strategy.
      </motion.p>

      {/* CTAs with Living Orange Line Guide */}
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center z-10 relative"
        >
          <Link
            href="/contact"
            className="group relative flex items-center space-x-3 bg-brand-orange hover:bg-brand-orange-alt text-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest transition-all duration-300 transform hover:scale-105"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            href="/services"
            className="flex items-center space-x-2 border border-brand-off-white/20 hover:border-brand-off-white text-brand-off-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest transition-colors duration-200"
          >
            <span>SEE WHAT WE DO</span>
          </Link>
        </motion.div>

        {/* Hero Living Orange Line vector path */}
        <div className="absolute top-1/2 left-64 right-0 h-32 -translate-y-1/2 pointer-events-none hidden lg:block">
          <ForwardLine
            d="M 0 40 Q 120 10, 240 40 T 480 40"
            viewBox="0 0 500 80"
            duration={1.4}
            delay={0.4}
            showNodes={[{ x: 480, y: 40, active: true }]}
          />
        </div>
      </div>
    </section>
  );
};