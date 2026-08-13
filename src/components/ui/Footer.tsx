import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-off-white/10 pt-16 pb-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Primary Branding */}
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
          <Image
            src="/assets/logo-primary.png"
            alt="mvfrwd primary logo"
            width={140}
            height={44}
            className="h-9 w-auto object-contain self-start"
          />
          <p className="text-xs font-mono text-brand-orange tracking-widest">MOVE FORWARD.</p>
          <p className="text-xs text-brand-muted max-w-sm leading-relaxed">
            A technology and creative agency focused on helping ambitious brands grow through web engineering, digital marketing, and AI integration.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-mono text-brand-off-white font-bold mb-2 tracking-wider">NAVIGATION</span>
          <Link href="/" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">Home</Link>
          <Link href="/about" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">About</Link>
          <Link href="/services" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">Services</Link>
          <Link href="/projects" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">Projects</Link>
          <Link href="/contact" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">Contact</Link>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-mono text-brand-off-white font-bold mb-2 tracking-wider">CONNECT</span>
          <a href="https://instagram.com/mvfrwd.co" target="_blank" rel="noreferrer" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">Instagram</a>
          <a href="https://linkedin.com/company/mvfrwd" target="_blank" rel="noreferrer" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">LinkedIn</a>
          <a href="https://github.com/mvfrwdco" target="_blank" rel="noreferrer" className="text-xs text-brand-muted hover:text-brand-orange transition-colors">GitHub</a>
          <a href="mailto:mvfrwdco@gmail.com" className="text-xs text-brand-orange font-mono font-bold mt-2">mvfrwdco@gmail.com</a>
        </div>
      </div>

      <div className="border-t border-brand-off-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-brand-muted">
        <p>© 2026 mvfrwd. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-brand-off-white transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-brand-off-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};