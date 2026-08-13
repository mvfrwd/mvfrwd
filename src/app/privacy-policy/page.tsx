import React from 'react';
import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/ui/LegalPageLayout';
import { PRIVACY_POLICY_SECTIONS } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy | mvfrwd.',
  description: 'Privacy Policy for mvfrwd. explaining how information is handled when users interact with our website and services.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      label="LEGAL / 01"
      titleLine1="PRIVACY"
      titleLine2="POLICY."
      subtitle="Your privacy matters. Here is how mvfrwd. handles information when you interact with our digital presence."
      sections={PRIVACY_POLICY_SECTIONS}
    />
  );
}