'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'CONTACT', path: '/contact' },
];

export const DynamicIslandNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        layout
        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
        className={`pointer-events-auto relative flex items-center justify-between rounded-full border border-brand-off-white/10 bg-brand-near-black/90 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          isScrolled 
            ? 'w-full max-w-2xl px-4 py-1.5 shadow-2xl shadow-black/80' 
            : 'w-full max-w-4xl px-5 py-2.5'
        }`}
      >
        {/* Primary Logo */}
        <Link href="/" className="relative flex items-center shrink-0 pr-2">
          <Image
            src="/assets/logo-navbar.png"
            alt="mvfrwd. primary logo"
            width={120}
            height={36}
            className="h-7 md:h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-1.5 text-[10px] lg:text-[11px] font-mono tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-brand-off-white' : 'text-brand-muted hover:text-brand-off-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="island-active-indicator"
                    className="absolute inset-0 bg-white/5 rounded-full border border-brand-orange/50"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Direct CTA Button */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="group relative flex items-center space-x-1 overflow-hidden rounded-full border border-brand-orange bg-brand-orange/10 px-3.5 py-1.5 text-[10px] lg:text-[11px] font-mono font-bold text-brand-off-white transition-all duration-300 hover:bg-brand-orange hover:text-white"
          >
            <span>INITIATE</span>
            <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 text-brand-off-white hover:text-brand-orange"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="pointer-events-auto absolute top-16 inset-x-4 rounded-3xl border border-brand-off-white/10 bg-brand-near-black/95 backdrop-blur-2xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-mono tracking-widest ${
                    pathname === item.path ? 'text-brand-orange font-bold' : 'text-brand-off-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-brand-off-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-brand-orange px-5 py-3 text-xs font-mono font-bold text-white"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};