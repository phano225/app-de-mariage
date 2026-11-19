import React from 'react';
import { Metadata } from 'next';
import { JetInviteHeader } from '@/components/platform/JetInviteHeader';
import { JetInviteHero } from '@/components/platform/JetInviteHero';
import { JetInviteEvents } from '@/components/platform/JetInviteEvents';
import { JetInviteShowcaseCarousel } from '@/components/platform/JetInviteShowcaseCarousel';
import { JetInviteHowItWorks } from '@/components/platform/JetInviteHowItWorks';
import { JetInviteOrderSection } from '@/components/platform/JetInviteOrderSection';
import { PlatformFooter } from '@/components/platform/PlatformFooter';

export const metadata: Metadata = {
  title: 'JetInvite.fun — Invitations & Faire-part en ligne en quelques clics !',
  description:
    'Créez et commandez votre invitation personnalisée en ligne : Mariage, Anniversaire, Baptême, Graduation, Cérémonie... Commande simple, design sur mesure et livraison rapide.',
  openGraph: {
    title: 'JetInvite.fun — Invitations & Faire-part en ligne en quelques clics !',
    description:
      'Mariage, Anniversaire, Baptême, Graduation, Cérémonie... Commandez votre invitation personnalisée et recevez-la rapidement.',
    url: 'https://jetinvite.fun',
    siteName: 'JetInvite',
    images: [
      {
        url: '/assets/jetinvite-logo.png',
        width: 1200,
        height: 630,
        alt: 'JetInvite.fun',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf7fd] text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <JetInviteHeader />
      <JetInviteHero />
      <JetInviteEvents />
      <JetInviteShowcaseCarousel />
      <JetInviteHowItWorks />
      <JetInviteOrderSection />
      <PlatformFooter />
    </main>
  );
}
