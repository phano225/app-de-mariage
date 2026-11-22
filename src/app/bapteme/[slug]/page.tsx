import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { baptismRegistry, getBaptismBySlug } from '@/data/baptism-config';
import { BaptismPageClient } from './BaptismPageClient';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(baptismRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const baptism = getBaptismBySlug(slug);

  if (!baptism) {
    return {
      title: 'Faire-part de Baptême Introuvable',
    };
  }

  return {
    title: baptism.seo.title,
    description: baptism.seo.description,
    openGraph: {
      title: baptism.seo.title,
      description: baptism.seo.description,
      images: [
        {
          url: baptism.seo.ogImage,
          width: 1200,
          height: 630,
          alt: baptism.photo.alt,
        },
      ],
      type: 'website',
      url: baptism.seo.url,
      locale: 'fr_FR',
      siteName: 'JetInvite.fun',
    },
    twitter: {
      card: 'summary_large_image',
      title: baptism.seo.title,
      description: baptism.seo.description,
      images: [baptism.seo.ogImage],
    },
  };
}

export default async function BaptismPage({ params }: Props) {
  const { slug } = await params;
  const baptism = getBaptismBySlug(slug);

  if (!baptism) {
    notFound();
  }

  return <BaptismPageClient baptism={baptism} />;
}
