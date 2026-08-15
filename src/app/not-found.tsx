import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | mvfrwd.',
  description: 'The requested page could not be located.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center">
      <div className="flex flex-col items-center gap-6 max-w-lg">
        <Image
          src="/assets/logo-primary.png"
          alt="mvfrwd. primary logo"
          width={140}
          height={44}
          className="h-9 w-auto object-contain mb-2"
          priority
        />
        <span className="text-xs font-mono text-brand-orange border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 rounded-full font-bold">
          ERROR 404
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold text-brand-off-white leading-tight">
          THIS PAGE DOES NOT EXIST.
        </h1>
        <p className="text-brand-muted text-sm leading-relaxed">
          The link you followed may be broken or the URL may have moved. Let’s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center space-x-2 bg-brand-orange hover:bg-brand-orange-alt text-white px-7 py-3.5 rounded-full text-xs font-mono font-bold tracking-widest transition-transform duration-200 hover:scale-105"
        >
          <span>RETURN HOME</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}