export interface FestivalArtist {
  id: string;
  name: string;
  genre: string;
  timeSlot: string;
  stage: string;
}

export interface FestivalConfig {
  slug: string;
  status: 'active' | 'preview';
  title: string;
  edition: string;
  tagline: string;
  description: string;
  eventDate: string; // ISO 8601
  timeZone: string;
  eventDateFormatted: {
    fullFrench: string;
    dates: string;
    time: string;
    year: string;
  };
  theme: {
    darkBg: string;
    neonPurple: string;
    neonPink: string;
    neonCyan: string;
    neonYellow: string;
    cardBg: string;
  };
  lineup: FestivalArtist[];
  stages: {
    name: string;
    vibe: string;
    highlight: string;
  }[];
  ticket: {
    passType: string;
    ticketNumber: string;
    price: string;
    holderName: string;
    perks: string[];
  };
  location: {
    name: string;
    area: string;
    address: string;
    city: string;
    country: string;
    mapUrl: string;
    accessTip: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    rsvpMessage: string;
  };
  photo: {
    cover: string;
    artist: string;
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

export const aabdfFestivalConfig: FestivalConfig = {
  slug: 'abidjan-afro-beats',
  status: 'active',
  title: 'Abidjan Afro Beats & Dance Festival',
  edition: 'Édition 2027 • Nuit Étoilée',
  tagline: 'La plus grande célébration de musique afro, d’amapiano et de danses urbaines d’Afrique de l’Ouest !',
  description: `Deux nuits féeriques au bord de la lagune Ébrié avec les meilleurs DJs, artistes et danseurs du continent. Show lumière immersif, village gastronomique géant, scènes électrisantes et ambiance garantie jusqu'au lever du soleil.`,
  eventDate: '2027-11-20T16:00:00+00:00', // Africa/Abidjan
  timeZone: 'Africa/Abidjan',
  eventDateFormatted: {
    fullFrench: 'Samedi 20 & Dimanche 21 Novembre 2027',
    dates: '20 - 21 Novembre 2027',
    time: 'De 16h00 jusqu’à l’aube',
    year: '2027',
  },
  theme: {
    darkBg: '#090214',
    neonPurple: '#8B5CF6',
    neonPink: '#EC4899',
    neonCyan: '#06B6D4',
    neonYellow: '#FACC15',
    cardBg: '#130A24',
  },
  lineup: [
    {
      id: 'artist-1',
      name: 'All Stars Afro Beats Live',
      genre: 'Afro-Pop & Coupé-Décalé',
      timeSlot: '20h30 – 22h00',
      stage: 'Scène Principale Laguna',
    },
    {
      id: 'artist-2',
      name: 'Johannesburg Amapiano Sound',
      genre: 'Amapiano Sunset & Deep Bass',
      timeSlot: '22h15 – 00h30',
      stage: 'Arena Amapiano',
    },
    {
      id: 'artist-3',
      name: 'DJ Night Session & Afro House',
      genre: 'Afro-Electronic & Tribal Beats',
      timeSlot: '00h45 – 03h30',
      stage: 'Scène Principale Laguna',
    },
    {
      id: 'artist-4',
      name: 'Battle Panafricain de Danse Urbaine',
      genre: 'Chorégraphies & Freestyle',
      timeSlot: '17h00 – 19h30',
      stage: 'Urban Dance Stage',
    },
  ],
  stages: [
    {
      name: 'Main Stage Laguna',
      vibe: 'Méga scène en bord d’eau avec écrans LED géants et pyrotechnie',
      highlight: 'Live concerts & shows vedettes',
    },
    {
      name: 'Amapiano Sound Arena',
      vibe: 'Ambiance lounge et sound-system immersif sous les palmiers',
      highlight: 'DJs sets & sunset vibe',
    },
    {
      name: 'Village Gastronomique & Chill',
      vibe: 'Saveurs africaines, grillades ivoiriennes, cocktails exotiques & créateurs',
      highlight: 'Food court & détente',
    },
  ],
  ticket: {
    passType: 'PASS VIP GOLD • COUPE-FILE',
    ticketNumber: 'AABDF-2027-VIP-7709',
    price: '25 000 FCFA',
    holderName: 'Festivalier VIP',
    perks: [
      'Accès prioritaire coupe-file sans file d’attente',
      'Espace VIP surélevé avec vue panoramique sur la scène',
      'Accès au Bar Lounge VIP & 1 boisson offerte',
      'Bracelet collector connecté du Festival',
    ],
  },
  location: {
    name: 'Espace Lagunaire Wave Park',
    area: 'Biétry, Zone 4',
    address: 'Boulevard de Marseille, en bordure de lagune',
    city: 'Abidjan',
    country: 'Côte d’Ivoire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bietry+Abidjan+Cote+d+Ivoire',
    accessTip: 'Parking sécurisé et dépose-minute VTC / taxis organisée à l’entrée principale.',
  },
  contact: {
    whatsappNumber: '+2250777620864',
    whatsappFormatted: '+225 07 77 62 08 64',
    rsvpMessage: 'Bonjour ! Je souhaite réserver mon PASS VIP pour le Abidjan Afro Beats & Dance Festival (AABDF 2027).',
  },
  photo: {
    cover: '/images/demos/festival/festival-cover.jpg',
    artist: '/images/demos/festival/festival-artist.jpg',
  },
  music: {
    enabled: true,
    audioSrc: '/audio/mariage-musique.mp3',
    title: 'Afro Beats Festival Anthem',
    artist: 'Abidjan Sound System',
  },
  seo: {
    title: '🎸 Abidjan Afro Beats & Dance Festival 2027 | Démo JetInvite',
    description: 'Invitation et Pass VIP interactif pour le Abidjan Afro Beats & Dance Festival à Biétry, Abidjan. Line-up d’artistes et billetterie WhatsApp.',
    ogImage: '/images/demos/festival/festival-cover.jpg',
    url: 'https://jetinvite.fun/festival/demo',
  },
};

export const festivalRegistry: Record<string, FestivalConfig> = {
  'demo': aabdfFestivalConfig,
  'abidjan-afro-beats': aabdfFestivalConfig,
};

export function getFestivalBySlug(slug: string): FestivalConfig {
  return festivalRegistry[slug] || aabdfFestivalConfig;
}
