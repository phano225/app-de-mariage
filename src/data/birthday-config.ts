export interface BirthdayScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: 'welcome' | 'games' | 'cake' | 'party' | 'gift';
  highlight?: boolean;
}

export interface BirthdayConfig {
  slug: string;
  status: 'active' | 'preview';
  celebrant: {
    firstName: string;
    fullName: string;
    age: number;
    ageFormatted: string;
  };
  eventDate: string; // ISO 8601
  timeZone: string;
  eventDateFormatted: {
    fullFrench: string;
    day: string;
    dateNumber: string;
    monthFrench: string;
    year: string;
    time: string;
  };
  tagline: string;
  invitationText: string;
  parentsNote: string;
  theme: {
    primaryPink: string;
    brightYellow: string;
    turquoise: string;
    purple: string;
    lightBg: string;
    cardBg: string;
    confettiColors: string[];
  };
  schedule: BirthdayScheduleItem[];
  location: {
    name: string;
    address: string;
    city: string;
    country: string;
    mapUrl: string;
    accessTip: string;
  };
  contact: {
    parentName: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    rsvpMessage: string;
    rsvpDeadline: string;
  };
  photo: {
    src: string;
    alt: string;
    caption: string;
  };
  music: {
    enabled: boolean;
    audioSrc: string;
    title: string;
    artist: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
  };
}

export const malikaBirthdayConfig: BirthdayConfig = {
  slug: 'malika-8-ans',
  status: 'active',
  celebrant: {
    firstName: 'Malika',
    fullName: 'Malika',
    age: 8,
    ageFormatted: '8 ans',
  },
  eventDate: '2027-07-24T14:30:00+00:00', // Africa/Abidjan
  timeZone: 'Africa/Abidjan',
  eventDateFormatted: {
    fullFrench: 'Samedi 24 Juillet 2027',
    day: 'Samedi',
    dateNumber: '24',
    monthFrench: 'Juillet',
    year: '2027',
    time: '14h30',
  },
  tagline: 'Une journée magique pleine de rires, de jeux et de surprises !',
  invitationText: `Coucou les copains et les copines !

Je fête enfin mes 8 ans et j'ai tellement hâte de célébrer cette journée magique avec vous tous !

Au programme : château gonflable, chasse au trésor, gâteau géant, musique, bonbons et plein d'aventures inoubliables.

Venez prêts à vous amuser et à danser !`,
  parentsNote: 'Chers parents : Les enfants seront encadrés par des animateurs qualifiés. Un espace détente avec rafraîchissements est à votre disposition.',
  theme: {
    primaryPink: '#FF2E93',
    brightYellow: '#FFD100',
    turquoise: '#00D2D3',
    purple: '#845EC2',
    lightBg: '#FFF7FB',
    cardBg: '#FFFFFF',
    confettiColors: ['#FF2E93', '#FFD100', '#00D2D3', '#845EC2', '#FF9671', '#00C9A7'],
  },
  schedule: [
    {
      id: 'accueil',
      time: '14h30',
      title: 'Accueil & Maquillage festif',
      description: 'Arrivée des copains, remise des chapeaux de fête et atelier maquillage pailleté',
      icon: 'welcome',
      highlight: false,
    },
    {
      id: 'jeux',
      time: '15h30',
      title: 'Grands jeux & Chasse au trésor',
      description: 'Château gonflable, course en sacs, jeux en équipe et énigmes amusantes',
      icon: 'games',
      highlight: true,
    },
    {
      id: 'gateau',
      time: '16h45',
      title: 'Le gâteau magique & les bougies',
      description: 'Chanson d’anniversaire en chœur, découpage du super gâteau et ouverture des cadeaux',
      icon: 'cake',
      highlight: true,
    },
    {
      id: 'boum',
      time: '17h30',
      title: 'Mini-Boum & Sachets surprises',
      description: 'Piste de danse animée par DJ Kids et distribution des surprises pour tous les invités',
      icon: 'gift',
      highlight: false,
    },
  ],
  location: {
    name: 'Espace Récréatif Kids Paradise',
    address: 'Riviera Golf, près du Club House',
    city: 'Abidjan',
    country: 'Côte d’Ivoire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Riviera+Golf+Abidjan',
    accessTip: 'Entrée sécurisée avec parking gratuit pour les parents.',
  },
  contact: {
    parentName: 'Maman de Malika',
    whatsappNumber: '+2250777620864',
    whatsappFormatted: '+225 07 77 62 08 64',
    rsvpMessage: 'Bonjour ! Je vous confirme avec plaisir la présence de mon enfant à l\'anniversaire de Malika le 24 juillet.',
    rsvpDeadline: 'Réponse souhaitée avant le 10 Juillet 2027 pour réserver le sachet surprise de chaque enfant.',
  },
  photo: {
    src: '/images/demos/anniversaire/malika-photo.jpg',
    alt: 'Malika toute joyeuse pour ses 8 ans',
    caption: 'Malika • 8 ans de sourires et de bonheur',
  },
  music: {
    enabled: true,
    audioSrc: '/audio/anniversaire-musique.mp3',
    title: 'Happy Birthday Kids Party',
    artist: 'Festive Vibes',
  },
  seo: {
    title: '🎉 Invitation Anniversaire — Malika a 8 ans !',
    description: 'Viens fêter les 8 ans de Malika le samedi 24 juillet 2027 à Abidjan ! Jeux, gâteau, cadeaux et surprises.',
    ogImage: '/images/demos/anniversaire/malika-photo.jpg',
    url: 'https://jetinvite.fun/anniversaire/demo',
  },
};

export const birthdayRegistry: Record<string, BirthdayConfig> = {
  'demo': malikaBirthdayConfig,
  'malika-8-ans': malikaBirthdayConfig,
};

export function getBirthdayBySlug(slug: string): BirthdayConfig {
  return birthdayRegistry[slug] || malikaBirthdayConfig;
}
