export interface WeddingScheduleItem {
  id: string;
  time: string;
  title: string;
  location: string;
  description: string;
  icon: 'civil' | 'reception' | 'party';
  coordinates?: {
    lat: number;
    lng: number;
  };
  mapUrl: string;
  highlight?: boolean;
}

export interface WeddingLocation {
  id: string;
  name: string;
  category: 'Cérémonie Civile' | 'Réception & Festivités';
  address: string;
  city: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  mapUrl: string;
  accessTip?: string;
}

export interface WeddingGalleryItem {
  id: string;
  src: string;
  thumbnail?: string;
  alt: string;
  caption: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  tag: string;
}

export interface WeddingConfig {
  slug: string;
  status: 'active' | 'archived' | 'preview';
  coupleNames: {
    bride: string;
    groom: string;
    display: string;
    initials: string;
    monogram: string;
  };
  weddingDate: string; // ISO 8601 with offset
  timeZone: string;
  eventDateFormatted: {
    fullFrench: string;
    day: string;
    dateNumber: string;
    monthFrench: string;
    year: string;
  };
  tagline: string;
  invitationText: string;
  conclusionMessage: string;
  theme: {
    primaryGreen: string;
    secondaryOrange: string;
    ivory: string;
    gold: string;
    darkGreen: string;
    lightIvory: string;
    softGreen: string;
    softOrange: string;
  };
  schedule: WeddingScheduleItem[];
  locations: WeddingLocation[];
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    rsvpMessage: string;
    contactNote: string;
  };
  gallery: WeddingGalleryItem[];
  music: {
    enabled: boolean;
    audioSrc: string;
    title: string;
    artist?: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
  };
}

export const caroleEtBenjaminWedding: WeddingConfig = {
  slug: 'carole-et-benjamin',
  status: 'active',
  coupleNames: {
    bride: 'Carole',
    groom: 'Benjamin',
    display: 'Carole & Benjamin',
    initials: 'C & B',
    monogram: 'CB',
  },
  weddingDate: '2027-01-30T11:00:00+00:00', // Africa/Abidjan (GMT/UTC+0)
  timeZone: 'Africa/Abidjan',
  eventDateFormatted: {
    fullFrench: 'Samedi 30 Janvier 2027',
    day: 'Samedi',
    dateNumber: '30',
    monthFrench: 'Janvier',
    year: '2027',
  },
  tagline: 'Célébrons ensemble notre union !',
  invitationText: `Chers parents, chers amis et chers proches,

C'est avec une immense joie et beaucoup d'émotion que nous vous invitons à partager avec nous un moment exceptionnel de notre vie : la célébration de notre union.

Votre présence à nos côtés rendra cette journée encore plus belle et inoubliable.

Nous serons très heureux de vous compter parmi nous pour célébrer cet heureux événement.

Avec tout notre amour,

Carole & Benjamin.`,
  conclusionMessage: 'Nous avons hâte de partager cette belle journée avec vous.',
  theme: {
    primaryGreen: '#174D36',
    secondaryOrange: '#E66C32',
    ivory: '#F5EBDD',
    gold: '#C6A45A',
    darkGreen: '#0E3324',
    lightIvory: '#FAF5EE',
    softGreen: '#E8F0EC',
    softOrange: '#FDF2EC',
  },
  schedule: [
    {
      id: 'civil',
      time: '11h00',
      title: 'Cérémonie civile',
      location: 'Mairie de Dabou, Côte d’Ivoire',
      description: 'Célébration officielle de l’union civile',
      icon: 'civil',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mairie+de+Dabou,+Côte+d\'Ivoire',
      highlight: false,
    },
    {
      id: 'reception',
      time: '13h00',
      title: 'Réception et début des festivités',
      location: 'Cour familiale de la mariée, Lopou, Côte d’Ivoire',
      description: 'Partage du repas, danses et réjouissances familiales',
      icon: 'reception',
      coordinates: {
        lat: 5.419569,
        lng: -4.469182,
      },
      mapUrl: 'https://www.google.com/maps?q=5.419569,-4.469182',
      highlight: true,
    },
  ],
  locations: [
    {
      id: 'mairie-dabou',
      name: 'Mairie de Dabou',
      category: 'Cérémonie Civile',
      address: 'Centre-ville de Dabou',
      city: 'Dabou',
      country: 'Côte d’Ivoire',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mairie+de+Dabou,+Côte+d\'Ivoire',
      accessTip: 'Arrivée conseillée dès 10h30 pour l’installation des invités.',
    },
    {
      id: 'cour-lopou',
      name: 'Cour familiale de la mariée',
      category: 'Réception & Festivités',
      address: 'Lopou, Département de Dabou',
      city: 'Lopou',
      country: 'Côte d’Ivoire',
      coordinates: {
        lat: 5.419569,
        lng: -4.469182,
      },
      mapUrl: 'https://www.google.com/maps?q=5.419569,-4.469182',
      accessTip: 'Coordonnées GPS directes intégrées : 5.419569, -4.469182. Suivre le guidage Google Maps.',
    },
  ],
  contact: {
    whatsappNumber: '+221770976257',
    whatsappFormatted: '+221 77 097 62 57',
    rsvpMessage: 'Bonjour Carole et Benjamin, je vous confirme ma présence à votre mariage du samedi 30 janvier 2027.',
    contactNote: 'Votre message WhatsApp sera directement adressé aux mariés pour enregistrer votre confirmation.',
  },
  gallery: [
    {
      id: 'portrait-couple',
      src: '/images/carole-benjamin/photo-1-portrait.webp',
      alt: 'Portrait de Carole et Benjamin avec ballon rouge en forme de cœur',
      caption: 'Carole & Benjamin — L’Amour à l’Honneur',
      aspectRatio: 'portrait',
      tag: 'Les Mariés',
    },
    {
      id: 'alliances-mains',
      src: '/images/carole-benjamin/photo-2-alliances.webp',
      alt: 'Mains enlacées de Carole et Benjamin avec alliance',
      caption: 'L’Alliance éternelle et la promesse mutuelle',
      aspectRatio: 'square',
      tag: 'Notre Engagement',
    },
    {
      id: 'decoration-harmonie',
      src: '/images/carole-benjamin/photo-3-decoration.webp',
      alt: 'Inspirations et harmonies de mariage vert profond et orange chaleureux',
      caption: 'Harmonie des couleurs : Vert profond, Orange chaleureux et Or',
      aspectRatio: 'landscape',
      tag: 'Le Thème',
    },
  ],
  music: {
    enabled: true,
    audioSrc: '/audio/mariage-musique.mp3',
    title: 'Douce mélodie d’amour',
    artist: 'Ambiance nuptiale & acoustique',
  },
  seo: {
    title: 'Faire-part de Mariage — Carole & Benjamin | 30 Janvier 2027',
    description: 'Invitation officielle au mariage de Carole et Benjamin le samedi 30 janvier 2027 à Dabou et Lopou, Côte d’Ivoire.',
    ogImage: '/images/carole-benjamin/og-mariage-carole-benjamin.jpg',
    url: 'https://mariage.carole-benjamin.ci',
  },
};

// Registry of weddings by slug for reusability
export const weddingRegistry: Record<string, WeddingConfig> = {
  'carole-et-benjamin': caroleEtBenjaminWedding,
};

export function getWeddingBySlug(slug: string): WeddingConfig {
  return weddingRegistry[slug] || caroleEtBenjaminWedding;
}
