import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { birthdayRegistry, getBirthdayBySlug } from '@/data/birthday-config';
import { BirthdayPageClient } from './BirthdayPageClient';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(birthdayRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const birthday = getBirthdayBySlug(slug);

  if (!birthday) {
    return {
      title: 'Invitation Anniversaire Introuvable',
    };
  }

  return {
    title: birthday.seo.title,
    description: birthday.seo.description,
    openGraph: {
      title: birthday.seo.title,
      description: birthday.seo.description,
      images: [
        {
          url: birthday.seo.ogImage,
          width: 1200,
          height: 630,
          alt: birthday.photo.alt,
        },
      ],
      type: 'website',
      url: birthday.seo.url,
      locale: 'fr_FR',
      siteName: 'JetInvite.fun',
    },
    twitter: {
      card: 'summary_large_image',
      title: birthday.seo.title,
      description: birthday.seo.description,
      images: [birthday.seo.ogImage],
    },
  };
}

export default async function BirthdayPage({ params }: Props) {
  const { slug } = await params;
  const birthday = getBirthdayBySlug(slug);

  if (!birthday) {
    notFound();
  }

  return <BirthdayPageClient birthday={birthday} />;
}
