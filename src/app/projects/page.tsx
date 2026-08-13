import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ForwardLine } from '@/components/ui/ForwardLine';

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">PORTFOLIO</span>
        <h1 className="font-display text-4xl md:text-7xl font-extrabold text-brand-off-white leading-tight">
          WE'RE JUST <br /> GETTING STARTED.
        </h1>
        <p className="text-brand-muted text-base md:text-lg">
          Every agency has a first project. We're building ours from the ground up. Your business could be the first story we tell.
        </p>
      </div>

      {/* Main Reserved Showcase Frame with Subtle Line Draw */}
      <div className="relative border border-brand-orange/40 bg-brand-near-black/80 rounded-3xl p-8 md:p-16 overflow-hidden flex flex-col justify-between min-h-[480px]">
        {/* Top Decorative Living Line */}
        <div className="absolute top-0 inset-x-8 h-4 pointer-events-none">
          <ForwardLine d="M 0 2 L 800 2" viewBox="0 0 800 4" duration={1.6} />
        </div>

        {/* Top Indicators */}
        <div className="flex justify-between items-center border-b border-brand-off-white/10 pb-6">
          <div className="flex items-center space-x-3">
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-ping" />
            <span className="text-xs font-mono text-brand-orange font-bold">PROJECT 001</span>
          </div>
          <span className="text-xs font-mono text-brand-muted tracking-widest">STATUS: RESERVED</span>
        </div>

        {/* Center Content */}
        <div className="my-12">
          <h2 className="font-display text-3xl md:text-6xl font-black text-brand-off-white mb-6">
            RESERVED FOR OUR <br /> FIRST COLLABORATION.
          </h2>
          <p className="text-brand-muted text-sm md:text-base max-w-xl leading-relaxed">
            We don't invent clients, construct fake reviews, or display stock mockups. We deliver high-impact work for real partners.
          </p>
        </div>

        {/* Action Button & Brand Asset Integration */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-brand-off-white/10">
          <Link
            href="/contact"
            className="group flex items-center space-x-3 bg-brand-orange hover:bg-brand-orange-alt text-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest transition-transform duration-200 hover:scale-105"
          >
            <span>BECOME OUR FIRST CLIENT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Image
            src="/assets/logo-secondary.png"
            alt="mvfrwd secondary logo"
            width={120}
            height={40}
            className="h-7 w-auto object-contain opacity-50"
          />
        </div>
      </div>
    </main>
  );
}