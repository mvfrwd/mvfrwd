import React from 'react';
import { Metadata } from 'next';
import { PlaygroundClient } from '@/components/playground/PlaygroundClient';

export const metadata: Metadata = {
  title: 'Playground — Digital Concepts & Web Experiences | mvfrwd.',
  description:
    'Explore digital concepts, experimental websites, and industry-specific experiences created by mvfrwd. to demonstrate modern web capabilities.',
  alternates: {
    canonical: 'https://mvfrwd.vercel.app/playground',
  },
  openGraph: {
    title: 'The Playground | mvfrwd.',
    description:
      "Concepts, experiments, and digital experiences built by mvfrwd. to explore what's possible.",
    url: 'https://mvfrwd.vercel.app/playground',
    siteName: 'mvfrwd.',
    type: 'website',
  },
};

export default function PlaygroundPage() {
  return <PlaygroundClient />;
}