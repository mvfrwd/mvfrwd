'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LEGAL_CONFIG, LegalSection } from '@/data/legal';

interface LegalPageLayoutProps {
  label: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  sections: LegalSection[];
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  label,
  titleLine1,
  titleLine2,
  subtitle,
  sections,
}) => {
  const [activeToc, setActiveToc] = useState<string>(sections[0]?.id || '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveToc(id);
    setMobileTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Offset for dynamic island navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-36 pb-24 px-4 max-w-6xl mx-auto flex flex-col gap-12">
      {/* Editorial Hero Header */}
      <section className="flex flex-col gap-4 border-b border-brand-off-white/10 pb-12">
        <div className="flex justify-between items-center font-mono text-xs">
          <span className="text-brand-orange font-bold tracking-widest uppercase">{label}</span>
          <span className="text-brand-muted">LAST UPDATED: {LEGAL_CONFIG.lastUpdated}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-brand-off-white leading-[0.95]">
          {titleLine1} <br />
          <span className="text-brand-orange">{titleLine2}</span>
        </h1>

        <p className="text-brand-muted text-sm md:text-base max-w-xl leading-relaxed mt-2">
          {subtitle}
        </p>
      </section>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <aside className="lg:col-span-4 sticky top-28 hidden lg:flex flex-col gap-4 bg-brand-near-black/60 p-6 rounded-2xl border border-brand-off-white/10 backdrop-blur-md">
          <span className="text-[11px] font-mono text-brand-orange tracking-widest uppercase font-bold">
            TABLE OF CONTENTS
          </span>
          <nav className="flex flex-col gap-2">
            {sections.map((section) => {
              const isActive = activeToc === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-xs font-mono py-1.5 px-2 rounded-md transition-colors duration-200 flex items-center justify-between ${
                    isActive
                      ? 'text-brand-off-white bg-white/5 font-bold border-l-2 border-brand-orange'
                      : 'text-brand-muted hover:text-brand-off-white'
                  }`}
                >
                  <span className="truncate">{section.title}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Accordion TOC */}
        <div className="lg:hidden border border-brand-off-white/10 bg-brand-near-black rounded-xl p-4">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex justify-between items-center text-xs font-mono text-brand-orange font-bold"
          >
            <span>TABLE OF CONTENTS</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTocOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileTocOpen && (
            <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-brand-off-white/10">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left text-xs font-mono text-brand-muted hover:text-brand-off-white py-1"
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Editorial Text Content Area */}
        <article className="lg:col-span-8 flex flex-col gap-12 text-brand-off-white/90 text-sm md:text-base leading-relaxed font-sans max-w-3xl">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4 border-b border-brand-off-white/5 pb-8 scroll-mt-32"
            >
              <h2 className="font-display text-xl md:text-2xl font-bold text-brand-off-white">
                {section.title}
              </h2>

              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-brand-muted text-xs md:text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {section.subsections?.map((sub, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-2 mt-2 bg-brand-near-black/40 p-4 rounded-xl border border-brand-off-white/5">
                  <h3 className="font-mono text-xs font-bold text-brand-off-white">{sub.subtitle}</h3>
                  <ul className="flex flex-col gap-1.5 list-disc list-inside text-xs text-brand-muted">
                    {sub.items.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>
          ))}
        </article>
      </div>
    </main>
  );
};