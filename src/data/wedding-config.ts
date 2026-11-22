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
      src: '/assets/C&B.jpeg',
      alt: 'Portrait officiel de Carole et Benjamin',
      caption: 'Carole & Benjamin — L’Amour à l’Honneur',
      aspectRatio: 'portrait',
      tag: 'Les Mariés',
    },
    {
      id: 'alliances-mains',
      src: '/assets/C&B 2.jpeg',
      alt: 'Mains enlacées de Carole et Benjamin avec alliance et bague en diamant',
      caption: 'L’Alliance éternelle et la promesse mutuelle',
      aspectRatio: 'landscape',
      tag: 'Notre Engagement',
    },
  ],
  music: {
    enabled: true,
    audioSrc: '/audio/mariage-musique.mp3',
    title: 'Jusqu’à la gare',
    artist: 'Daphne',
  },
  seo: {
    title: 'Faire-part de Mariage — Carole & Benjamin | 30 Janvier 2027',
    description: 'Invitation officielle au mariage de Carole et Benjamin le samedi 30 janvier 2027 à Dabou et Lopou, Côte d’Ivoire.',
    ogImage: '/images/carole-benjamin/og-mariage-carole-benjamin.jpg',
    url: 'https://app-de-mariage.vercel.app',
  },
};

export const demoWeddingConfig: WeddingConfig = {
  slug: 'demo',
  status: 'active',
  coupleNames: {
    bride: 'Aïcha',
    groom: 'Ibrahim',
    display: 'Aïcha & Ibrahim',
    initials: 'A & I',
    monogram: 'AI',
  },
  weddingDate: '2027-12-18T14:00:00+00:00', // Africa/Abidjan (GMT/UTC+0)
  timeZone: 'Africa/Abidjan',
  eventDateFormatted: {
    fullFrench: 'Samedi 18 Décembre 2027',
    day: 'Samedi',
    dateNumber: '18',
    monthFrench: 'Décembre',
    year: '2027',
  },
  tagline: 'L’Amour est une promesse éternelle',
  invitationText: `Chers parents, chers amis et chers proches,

C'est avec une immense joie et une émotion profonde que nous vous convions à célébrer l'union de nos deux cœurs et de nos familles.

Votre présence, vos sourires et vos bénédictions feront de cette journée un souvenir précieux gravé à jamais dans notre mémoire.

Nous serons très honorés de vous compter parmi nous pour célébrer ce moment exceptionnel.

Avec tout notre amour,

Aïcha & Ibrahim.`,
  conclusionMessage: 'Nous avons hâte de partager ce jour béni avec vous.',
  theme: {
    primaryGreen: '#0B2219',
    secondaryOrange: '#D4AF37',
    ivory: '#F9F6F0',
    gold: '#D4AF37',
    darkGreen: '#061610',
    lightIvory: '#FCFBF8',
    softGreen: '#EBF4F0',
    softOrange: '#FAF4E8',
  },
  schedule: [
    {
      id: 'civil',
      time: '14h00',
      title: 'Bénédiction Nuptiale & Cérémonie',
      location: 'Grand Salon Sofitel Hôtel Ivoire, Cocody',
      description: 'Célébration officielle et échange des vœux et alliances',
      icon: 'civil',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sofitel+Abidjan+Hotel+Ivoire',
      highlight: false,
    },
    {
      id: 'reception',
      time: '18h00',
      title: 'Dîner de Gala & Soirée Dansante',
      location: 'Espace Étoilé des Jardins de Cocody, Abidjan',
      description: 'Cocktail de bienvenue, banquet gastronomique et réjouissances',
      icon: 'reception',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cocody+Abidjan+Cote+d+Ivoire',
      highlight: true,
    },
  ],
  locations: [
    {
      id: 'ceremonie-sofitel',
      name: 'Sofitel Hôtel Ivoire',
      category: 'Cérémonie Civile',
      address: 'Boulevard Hassan II, Cocody',
      city: 'Abidjan',
      country: 'Côte d’Ivoire',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sofitel+Abidjan+Hotel+Ivoire',
      accessTip: 'Parking sécurisé disponible. Arrivée recommandée dès 13h30.',
    },
    {
      id: 'reception-jardins',
      name: 'Les Jardins de Cocody',
      category: 'Réception & Festivités',
      address: 'Cocody Ambassades',
      city: 'Abidjan',
      country: 'Côte d’Ivoire',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cocody+Abidjan+Cote+d+Ivoire',
      accessTip: 'Service voiturier disponible à l’entrée de l’espace.',
    },
  ],
  contact: {
    whatsappNumber: '+2250777620864',
    whatsappFormatted: '+225 07 77 62 08 64',
    rsvpMessage: 'Bonjour Aïcha et Ibrahim, je vous confirme avec joie ma présence à votre mariage du samedi 18 décembre 2027.',
    contactNote: 'Confirmation de présence souhaitée pour l\'organisation du banquet.',
  },
  gallery: [
    {
      id: 'portrait-couple-demo',
      src: '/images/demos/mariage/cover.jpg',
      alt: 'Portrait officiel de mariage Aïcha et Ibrahim',
      caption: 'Aïcha & Ibrahim — Félicité & Élégance',
      aspectRatio: 'portrait',
      tag: 'Les Mariés',
    },
  ],
  music: {
    enabled: true,
    audioSrc: '/audio/mariage-musique.mp3',
    title: 'Jusqu’à la gare',
    artist: 'Daphne',
  },
  seo: {
    title: 'Faire-part de Mariage — Aïcha & Ibrahim | Démo JetInvite',
    description: 'Exemple d’invitation numérique animée pour mariage avec enveloppe 3D, musique et confirmation WhatsApp.',
    ogImage: '/images/demos/mariage/cover.jpg',
    url: 'https://jetinvite.fun/mariage/demo',
  },
};

// Registry of weddings by slug for reusability
export const weddingRegistry: Record<string, WeddingConfig> = {
  'demo': demoWeddingConfig,
  'aicha-et-ibrahim': demoWeddingConfig,
  'carole-et-benjamin': caroleEtBenjaminWedding,
};

export function getWeddingBySlug(slug: string): WeddingConfig {
  return weddingRegistry[slug] || demoWeddingConfig;
}
