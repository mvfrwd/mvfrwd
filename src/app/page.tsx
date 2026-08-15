// src/app/page.tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { BrandStatementSection } from '@/components/sections/BrandStatementSection';
import { ServicesInteractiveSection } from '@/components/sections/ServicesInteractiveSection';
import { TechCreativitySection } from '@/components/sections/TechCreativitySection';
import { ProcessTimelineSection } from '@/components/sections/ProcessTimelineSection';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'mvfrwd. — Digital Marketing & Web Development Agency',
  description:
    'mvfrwd. is a digital agency helping ambitious brands move forward through web development, digital marketing, SEO, branding, and creative digital solutions.',
  alternates: {
    canonical: 'https://mvfrwd.vercel.app',
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 md:gap-36 pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <HeroSection />
      <BrandStatementSection />
      <ServicesInteractiveSection />
      <TechCreativitySection />
      <ProcessTimelineSection />

      {/* Project 001 Teaser Section */}
      <section className="border border-white/10 rounded-2xl p-8 md:p-12 bg-black/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        <span className="text-xs font-mono tracking-widest text-brand-orange">PROJECT 001</span>
        <h2 className="text-3xl md:text-5xl font-black text-brand-off-white mt-2 mb-4 tracking-tight">
          RESERVED FOR OUR FIRST COLLABORATION.
        </h2>
        <p className="text-brand-muted max-w-xl text-sm md:text-base mb-8">
          We’re building our portfolio from the ground up. Your business could be the first story we tell.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-6 py-3 rounded-full text-xs font-bold transition-all duration-200"
        >
          <span>BECOME OUR FIRST CLIENT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Final Home Call To Action */}
      <section className="text-center py-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl font-black text-brand-off-white tracking-tight mb-6">
          YOUR NEXT MOVE <br />
          <span className="text-brand-orange">STARTS HERE.</span>
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 bg-brand-orange hover:bg-brand-orange-alt text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-all duration-200 transform hover:scale-105"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}