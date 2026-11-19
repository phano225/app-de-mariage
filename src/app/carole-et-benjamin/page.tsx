import React from 'react';
import { Metadata } from 'next';
import { caroleEtBenjaminWedding } from '@/data/wedding-config';
import WeddingPageClient from '@/app/mariage/[slug]/WeddingPageClient';

export const metadata: Metadata = {
  title: caroleEtBenjaminWedding.seo.title,
  description: caroleEtBenjaminWedding.seo.description,
  openGraph: {
    title: caroleEtBenjaminWedding.seo.title,
    description: caroleEtBenjaminWedding.seo.description,
    images: [caroleEtBenjaminWedding.seo.ogImage],
  },
};

export default function CaroleEtBenjaminDirectPage() {
  return <WeddingPageClient wedding={caroleEtBenjaminWedding} />;
}
