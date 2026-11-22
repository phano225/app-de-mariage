import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { festivalRegistry, getFestivalBySlug } from '@/data/festival-config';
import { FestivalPageClient } from './FestivalPageClient';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(festivalRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const festival = getFestivalBySlug(slug);

  if (!festival) {
    return {
      title: 'Billet Festival Introuvable',
    };
  }

  return {
    title: festival.seo.title,
    description: festival.seo.description,
    openGraph: {
      title: festival.seo.title,
      description: festival.seo.description,
      images: [
        {
          url: festival.seo.ogImage,
          width: 1200,
          height: 630,
          alt: festival.title,
        },
      ],
      type: 'website',
      url: festival.seo.url,
      locale: 'fr_FR',
      siteName: 'JetInvite.fun',
    },
    twitter: {
      card: 'summary_large_image',
      title: festival.seo.title,
      description: festival.seo.description,
      images: [festival.seo.ogImage],
    },
  };
}

export default async function FestivalPage({ params }: Props) {
  const { slug } = await params;
  const festival = getFestivalBySlug(slug);

  if (!festival) {
    notFound();
  }

  return <FestivalPageClient festival={festival} />;
}
