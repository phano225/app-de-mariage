import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { conferenceRegistry, getConferenceBySlug } from '@/data/conference-config';
import { ConferencePageClient } from './ConferencePageClient';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(conferenceRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const conference = getConferenceBySlug(slug);

  if (!conference) {
    return {
      title: 'Invitation Conférence Introuvable',
    };
  }

  return {
    title: conference.seo.title,
    description: conference.seo.description,
    openGraph: {
      title: conference.seo.title,
      description: conference.seo.description,
      images: [
        {
          url: conference.seo.ogImage,
          width: 1200,
          height: 630,
          alt: conference.title,
        },
      ],
      type: 'website',
      url: conference.seo.url,
      locale: 'fr_FR',
      siteName: 'JetInvite.fun',
    },
    twitter: {
      card: 'summary_large_image',
      title: conference.seo.title,
      description: conference.seo.description,
      images: [conference.seo.ogImage],
    },
  };
}

export default async function ConferencePage({ params }: Props) {
  const { slug } = await params;
  const conference = getConferenceBySlug(slug);

  if (!conference) {
    notFound();
  }

  return <ConferencePageClient conference={conference} />;
}
