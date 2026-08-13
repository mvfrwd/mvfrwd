import React from 'react';
import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/ui/LegalPageLayout';
import { TERMS_CONDITIONS_SECTIONS } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions | mvfrwd.',
  description: 'Terms and Conditions governing the use of the mvfrwd. website and digital services.',
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      label="LEGAL / 02"
      titleLine1="TERMS &"
      titleLine2="CONDITIONS."
      subtitle="The terms that govern your use of the mvfrwd. website and our digital services."
      sections={TERMS_CONDITIONS_SECTIONS}
    />
  );
}