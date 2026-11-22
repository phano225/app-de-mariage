import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Alex_Brush } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alex-brush',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#174D36',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'JetInvite.fun — Invitations & Faire-part en ligne en quelques clics !',
  description:
    'Créez et commandez votre invitation personnalisée en ligne : Mariage, Anniversaire, Baptême, Hommage, Conférence, Festival... Design sur mesure et livraison rapide.',
  metadataBase: new URL('https://jetinvite.fun'),
  openGraph: {
    title: 'JetInvite.fun — Invitations & Faire-part en ligne en quelques clics !',
    description:
      'Créez et commandez votre invitation personnalisée en ligne : Mariage, Anniversaire, Baptême, Hommage, Conférence, Festival... Design sur mesure et livraison rapide.',
    url: 'https://jetinvite.fun',
    siteName: 'JetInvite.fun',
    images: [
      {
        url: '/assets/jetinvite-logo.png',
        width: 1200,
        height: 630,
        alt: 'JetInvite.fun — Invitations en ligne',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JetInvite.fun — Invitations & Faire-part en ligne',
    description:
      'Invitations interactives pour Mariage, Anniversaire, Baptême, Hommage, Conférence et Festival.',
    images: ['/assets/jetinvite-logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} ${alexBrush.variable} scroll-smooth`}
    >
      <body className="bg-wedding-green-deep text-wedding-ivory-light antialiased font-sans selection:bg-wedding-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
