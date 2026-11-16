import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Alex_Brush } from 'next/font/google';
import './globals.css';
import { caroleEtBenjaminWedding } from '@/data/wedding-config';

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
  title: caroleEtBenjaminWedding.seo.title,
  description: caroleEtBenjaminWedding.seo.description,
  authors: [{ name: 'Carole & Benjamin' }],
  metadataBase: new URL('https://mariage-carole-benjamin.ci'),
  openGraph: {
    title: caroleEtBenjaminWedding.seo.title,
    description: caroleEtBenjaminWedding.seo.description,
    url: 'https://mariage-carole-benjamin.ci',
    siteName: 'Mariage Carole & Benjamin',
    images: [
      {
        url: caroleEtBenjaminWedding.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Faire-part de Mariage Carole & Benjamin',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: caroleEtBenjaminWedding.seo.title,
    description: caroleEtBenjaminWedding.seo.description,
    images: [caroleEtBenjaminWedding.seo.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
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
