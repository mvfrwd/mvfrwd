import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PLAYGROUND_PROJECTS } from '@/data/playground';
import { DemoDetailClient } from '@/components/playground/DemoDetailClient';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PLAYGROUND_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PLAYGROUND_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Concept Not Found | mvfrwd.',
    };
  }

  return {
    title: `${project.name} (${project.badge}) — Demo Concept | mvfrwd.`,
    description: project.description,
    alternates: {
      canonical: `https://mvfrwd.vercel.app/playground/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} // Concept Prototype`,
      description: project.description,
      url: `https://mvfrwd.vercel.app/playground/${project.slug}`,
      type: 'article',
    },
  };
}

export default function DemoDetailPage({ params }: PageProps) {
  const project = PLAYGROUND_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <DemoDetailClient project={project} />;
}