'use client';

import React, { useState } from 'react';
import { SERVICES_DATA } from '@/data/siteContent';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const ServicesInteractiveSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(SERVICES_DATA[0].id);

  return (
    <section className="flex flex-col gap-12 py-12 border-t border-brand-off-white/10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono text-brand-orange tracking-widest">
          02 // CAPABILITIES
        </span>
        <h2 className="font-display text-3xl md:text-6xl font-extrabold text-brand-off-white">
          WHAT’S YOUR NEXT MOVE?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Services List */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-brand-off-white/10">
          {SERVICES_DATA.map((service) => {
            const isActive = activeId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className="py-6 cursor-pointer group transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-6">
                    <span className={`font-mono text-xs ${isActive ? 'text-brand-orange' : 'text-brand-muted'}`}>
                      {service.number}
                    </span>
                    <h3 className={`font-display text-xl md:text-3xl font-bold transition-colors duration-200 ${
                      isActive ? 'text-brand-off-white' : 'text-brand-muted group-hover:text-brand-off-white'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'text-brand-orange translate-x-1 -translate-y-1' : 'text-brand-muted opacity-0 group-hover:opacity-100'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="lg:col-span-5 border border-brand-off-white/10 rounded-2xl p-8 bg-brand-near-black/80 backdrop-blur-sm sticky top-28">
          <AnimatePresence mode="wait">
            {SERVICES_DATA.filter((s) => s.id === activeId).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-brand-orange">{service.number} // CAPABILITY</span>
                </div>
                <h4 className="font-display text-2xl font-bold text-brand-off-white">{service.title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed">{service.description}</p>
                
                <div className="pt-4 border-t border-brand-off-white/10 flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-brand-muted tracking-widest">DELIVERABLES</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {service.details.map((detail, idx) => (
                      <span key={idx} className="text-[11px] font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-md text-brand-off-white">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="pt-4">
        <Link href="/services" className="text-xs font-mono font-bold text-brand-orange flex items-center space-x-2 hover:underline">
          <span>VIEW FULL CAPABILITY CATALOG</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};