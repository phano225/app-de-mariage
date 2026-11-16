import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { weddingRegistry, getWeddingBySlug } from '@/data/wedding-config';
import WeddingPageClient from './WeddingPageClient';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(weddingRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const wedding = getWeddingBySlug(params.slug);
  if (!wedding) return {};

  return {
    title: wedding.seo.title,
    description: wedding.seo.description,
    openGraph: {
      title: wedding.seo.title,
      description: wedding.seo.description,
      images: [wedding.seo.ogImage],
    },
  };
}

export default function DynamicWeddingPage({ params }: Props) {
  const wedding = getWeddingBySlug(params.slug);

  if (!wedding) {
    notFound();
  }

  return <WeddingPageClient wedding={wedding} />;
}
