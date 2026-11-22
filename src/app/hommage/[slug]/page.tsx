import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { memorialRegistry, getMemorialBySlug } from '@/data/memorial-config';
import { MemorialPageClient } from './MemorialPageClient';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(memorialRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const memorial = getMemorialBySlug(slug);

  if (!memorial) {
    return {
      title: 'Faire-part d’Hommage Introuvable',
    };
  }

  return {
    title: memorial.seo.title,
    description: memorial.seo.description,
    openGraph: {
      title: memorial.seo.title,
      description: memorial.seo.description,
      images: [
        {
          url: memorial.seo.ogImage,
          width: 1200,
          height: 630,
          alt: memorial.photo.alt,
        },
      ],
      type: 'website',
      url: memorial.seo.url,
      locale: 'fr_FR',
      siteName: 'JetInvite.fun',
    },
    twitter: {
      card: 'summary_large_image',
      title: memorial.seo.title,
      description: memorial.seo.description,
      images: [memorial.seo.ogImage],
    },
  };
}

export default async function MemorialPage({ params }: Props) {
  const { slug } = await params;
  const memorial = getMemorialBySlug(slug);

  if (!memorial) {
    notFound();
  }

  return <MemorialPageClient memorial={memorial} />;
}
