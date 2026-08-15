import React from 'react';
import { Metadata } from 'next';
import { ContactFormSection } from '@/components/sections/ContactFormSection';

export const metadata: Metadata = {
  title: "Contact mvfrwd. — Let's Move Your Brand Forward",
  description:
    'Ready to initiate your next project? Get in touch with mvfrwd. to build your website, expand your digital marketing, or elevate your brand.',
  alternates: {
    canonical: 'https://mvfrwd.vercel.app/contact',
  },
};

export default function ContactPage() {
  return <ContactFormSection />;
}