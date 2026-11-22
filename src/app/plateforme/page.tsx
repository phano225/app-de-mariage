import React from 'react';
import { Metadata } from 'next';
import { PlatformHeader } from '@/components/platform/PlatformHeader';
import { HeroSection } from '@/components/platform/HeroSection';
import { DemoShowcase } from '@/components/platform/DemoShowcase';
import { FeaturesSection } from '@/components/platform/FeaturesSection';
import { OrderWizard } from '@/components/platform/OrderWizard';
import { PricingSection } from '@/components/platform/PricingSection';
import { PlatformFooter } from '@/components/platform/PlatformFooter';

export const metadata: Metadata = {
  title: 'JetInvite.fun — Faire-part & Invitations Numériques Animées d\'Exception',
  description:
    'Créez et commandez des faire-part numériques animés avec ouverture 3D d\'enveloppe, sceau de cire personnalisé, musique romantique, itinéraire Google Maps et confirmation RSVP WhatsApp.',
  openGraph: {
    title: 'JetInvite.fun — Faire-part & Invitations Numériques Animées d\'Exception',
    description:
      'Sublimez vos événements avec un faire-part animé d\'exception. Enveloppe 3D, musique, itinéraire GPS et RSVP WhatsApp en 1 clic.',
    url: 'https://jetinvite.fun',
    siteName: 'JetInvite',
    images: [
      {
        url: '/images/demos/mariage/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'JetInvite.fun — Faire-part d\'exception',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <PlatformHeader />
      <HeroSection />
      <DemoShowcase />
      <FeaturesSection />
      <OrderWizard />
      <PricingSection />
      <PlatformFooter />
    </main>
  );
}
