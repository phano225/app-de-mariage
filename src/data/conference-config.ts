export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  keynoteTitle?: string;
}

export interface ConferenceSession {
  id: string;
  time: string;
  title: string;
  type: 'Keynote' | 'Panel' | 'Networking' | 'Pitch';
  speakerNames?: string[];
  location: string;
  description: string;
  highlight?: boolean;
}

export interface ConferenceConfig {
  slug: string;
  status: 'active' | 'preview';
  title: string;
  acronym: string;
  edition: string;
  tagline: string;
  overview: string;
  eventDate: string; // ISO 8601
  timeZone: string;
  eventDateFormatted: {
    fullFrench: string;
    dates: string;
    year: string;
    time: string;
  };
  theme: {
    primaryNavy: string;
    royalBlue: string;
    electricCyan: string;
    pureWhite: string;
    slateCard: string;
    goldAccent: string;
  };
  speakers: Speaker[];
  agenda: ConferenceSession[];
  location: {
    name: string;
    venue: string;
    address: string;
    city: string;
    country: string;
    mapUrl: string;
    accessTip: string;
  };
  badge: {
    passType: string;
    badgeNumber: string;
    holderName: string;
    holderRole: string;
    company: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    rsvpMessage: string;
    email: string;
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

export const fbeaConferenceConfig: ConferenceConfig = {
  slug: 'forum-batisseurs',
  status: 'active',
  title: 'Forum des Bâtisseurs & Entrepreneurs Africains',
  acronym: 'FBEA 2027',
  edition: '5ème Édition Panafricaine',
  tagline: 'Bâtir l’Afrique de demain : Innovation, Souveraineté & Croissance Durable',
  overview: `Le Forum des Bâtisseurs & Entrepreneurs Africains réunit les plus grands décideurs, investisseurs, industriels et fondateurs de startups du continent pour deux journées stratégiques d'échanges, d'accords d'affaires et d'inspiration panafricaine.`,
  eventDate: '2027-10-14T08:30:00+00:00', // Africa/Abidjan
  timeZone: 'Africa/Abidjan',
  eventDateFormatted: {
    fullFrench: 'Jeudi 14 & Vendredi 15 Octobre 2027',
    dates: '14 - 15 Octobre 2027',
    year: '2027',
    time: '08h30 - 18h00',
  },
  theme: {
    primaryNavy: '#0A192F',
    royalBlue: '#1E3E62',
    electricCyan: '#00D2D3',
    pureWhite: '#FFFFFF',
    slateCard: '#132238',
    goldAccent: '#D4AF37',
  },
  speakers: [
    {
      id: 'speaker-1',
      name: 'Dr. Aminata Traoré',
      title: 'Présidente & Fondatrice',
      company: 'Panafrican Venture Partners',
      photo: '/images/demos/conference/conference-keynote.jpg',
      keynoteTitle: 'Keynote Inaugurale : L\'indépendance économique africaine par la technologie',
    },
    {
      id: 'speaker-2',
      name: 'Jean-Luc Kouamé',
      title: 'Directeur Général',
      company: 'Bâtisseurs d’Afrique Infrastructure Group',
      photo: '/images/demos/conference/speaker-male.jpg',
      keynoteTitle: 'Panel BTP : Les corridors logistiques et l’industrialisation régionale',
    },
  ],
  agenda: [
    {
      id: 'session-1',
      time: '08h30 – 09h30',
      title: 'Accueil des Délégués & Networking Café',
      type: 'Networking',
      location: 'Grand Foyer du Palais des Congrès',
      description: 'Enregistrement, remise des badges connectés et premier tour des stands exposants.',
      highlight: false,
    },
    {
      id: 'session-2',
      time: '09h30 – 11h00',
      title: 'Cérémonie d’Ouverture & Keynote Inaugurale',
      type: 'Keynote',
      speakerNames: ['Dr. Aminata Traoré'],
      location: 'Auditorium Principal Félix Houphouët-Boigny',
      description: 'Discours institutionnel et feuille de route pour l’accélération de l’entrepreneuriat à l’échelle du continent.',
      highlight: true,
    },
    {
      id: 'session-3',
      time: '11h30 – 13h00',
      title: 'Panel Stratégique : Souveraineté Industrielle & Financement Local',
      type: 'Panel',
      speakerNames: ['Jean-Luc Kouamé', 'Invités d’honneur'],
      location: 'Salle Plénière A',
      description: 'Débat avec les directeurs généraux de banques de développement et chefs d’entreprises industrielles.',
      highlight: true,
    },
    {
      id: 'session-4',
      time: '13h00 – 14h30',
      title: 'Déjeuner Exécutif & Sessions B2B Privées',
      type: 'Networking',
      location: 'Espace Salons VIP Sofitel Ivoire',
      description: 'Rencontres one-to-one ciblées entre investisseurs et porteurs de projets à fort impact.',
      highlight: false,
    },
    {
      id: 'session-5',
      time: '15h00 – 17h30',
      title: 'Pitchs Panafricains & Remise des Prix de l’Innovation',
      type: 'Pitch',
      location: 'Auditorium Principal',
      description: 'Présentation des 10 pépites africaines de l’année suivie du cocktail de clôture dînatoire.',
      highlight: true,
    },
  ],
  location: {
    name: 'Palais des Congrès du Sofitel Hôtel Ivoire',
    venue: 'Auditorium & Espaces Salons',
    address: 'Boulevard Hassan II, Cocody',
    city: 'Abidjan',
    country: 'Côte d’Ivoire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sofitel+Abidjan+Hotel+Ivoire',
    accessTip: 'Accès sécurisé réservé aux détenteurs de badge. Parking VIP et service voiturier assurés.',
  },
  badge: {
    passType: 'PASS DÉLÉGUÉ VIP',
    badgeNumber: 'DÉLÉGUÉ-N°0842',
    holderName: 'M. / Mme le Délégué(e)',
    holderRole: 'Décideur / Entrepreneur Panafricain',
    company: 'Entreprise & Institution Partenaire',
  },
  contact: {
    whatsappNumber: '+2250777620864',
    whatsappFormatted: '+225 07 77 62 08 64',
    rsvpMessage: 'Bonjour ! Je souhaite confirmer mon inscription et obtenir mon Pass Délégué pour le Forum des Bâtisseurs & Entrepreneurs Africains (FBEA 2027).',
    email: 'contact@fbea-summit.com',
  },
  music: {
    enabled: true,
    audioSrc: '/audio/conference-musique.mp3',
    title: 'On Bouge (Urban Tech & Business Beat)',
    artist: 'Meliodia AI',
  },
  seo: {
    title: '💼 Forum des Bâtisseurs & Entrepreneurs Africains — FBEA 2027 | Démo JetInvite',
    description: 'Invitation officielle et Pass d’accès VIP au Forum des Bâtisseurs & Entrepreneurs Africains au Sofitel Hôtel Ivoire Abidjan.',
    ogImage: '/images/demos/conference/conference-keynote.jpg',
    url: 'https://jetinvite.fun/conference/demo',
  },
};

export const conferenceRegistry: Record<string, ConferenceConfig> = {
  'demo': fbeaConferenceConfig,
  'forum-batisseurs': fbeaConferenceConfig,
};

export function getConferenceBySlug(slug: string): ConferenceConfig {
  return conferenceRegistry[slug] || fbeaConferenceConfig;
}
