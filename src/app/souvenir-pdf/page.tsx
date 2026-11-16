import React from 'react';
import { Metadata } from 'next';
import { SouvenirPDFView } from '@/components/SouvenirPDFView';
import { caroleEtBenjaminWedding } from '@/data/wedding-config';

export const metadata: Metadata = {
  title: 'Version PDF Souvenir — Carole & Benjamin',
  description: 'Version imprimable et téléchargeable du faire-part de mariage de Carole et Benjamin.',
};

export default function SouvenirPage() {
  return <SouvenirPDFView wedding={caroleEtBenjaminWedding} />;
}
