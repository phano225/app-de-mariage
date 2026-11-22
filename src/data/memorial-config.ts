export interface MemorialScheduleItem {
  id: string;
  time: string;
  date: string;
  title: string;
  location: string;
  description: string;
  icon: 'vigil' | 'ceremony' | 'burial';
  mapUrl: string;
  highlight?: boolean;
}

export interface MemorialConfig {
  slug: string;
  status: 'active' | 'preview';
  deceased: {
    fullName: string;
    affectionateName: string;
    title: string;
    birthYear: number;
    deathYear: number;
    age: number;
  };
  bibleVerse: {
    verse: string;
    reference: string;
  };
  tagline: string;
  announcement: string;
  tributeQuote: string;
  familyMessage: string;
  theme: {
    darkBg: string;
    cardBg: string;
    softGold: string;
    pureWhite: string;
    mutedGray: string;
    candleGlow: string;
  };
  schedule: MemorialScheduleItem[];
  locations: {
    vigil: {
      name: string;
      address: string;
      city: string;
      mapUrl: string;
      accessTip: string;
    };
    mass: {
      name: string;
      address: string;
      city: string;
      mapUrl: string;
      accessTip: string;
    };
    burial: {
      name: string;
      address: string;
      city: string;
      mapUrl: string;
      accessTip: string;
    };
  };
  contact: {
    familyRepresentative: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    condolencesMessage: string;
    supportNote: string;
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

export const pepeKouassiMemorialConfig: MemorialConfig = {
  slug: 'pepe-kouassi',
  status: 'active',
  deceased: {
    fullName: 'Patriarche Kouassi Yao Étienne',
    affectionateName: '« Pépé Kouassi »',
    title: 'Ancien de la communauté & Patriarche de la lignée Kouassi',
    birthYear: 1942,
    deathYear: 2027,
    age: 85,
  },
  bibleVerse: {
    verse: '« J\'ai combattu le bon combat, j\'ai achevé la course, j\'ai gardé la foi. Désormais la couronne de justice m\'est réservée. »',
    reference: '2 Timothée 4:7-8',
  },
  tagline: 'Un grand baobab de sagesse et de bonté s’est endormi dans la paix du Seigneur',
  announcement: `La grande famille Kouassi à Abidjan, Bouaké, Toumodi et en diaspora,
Les enfants : Jean-Marc, Marie-Chantal, Patrick, Estelle et David,
Les petits-enfants et arrière-petits-enfants,
Les familles alliées, amies et connaissances,

Ont la profonde douleur de vous faire part du rappel à Dieu de leur bien-aimé père, grand-père, arrière-grand-père, patriarche et doyen :

Patriarche Kouassi Yao Étienne dit "Pépé Kouassi"

Endormi paisiblement dans l'espérance de la résurrection, dans sa 85ème année.`,
  tributeQuote: '« La mort n\'est pas une obscurité où l\'on se perd, mais une lampe qui s\'éteint parce que le jour est venu. Repose en paix, cher patriarche. »',
  familyMessage: 'La famille remercie chaleureusement toutes les personnes qui, de près ou de loin, s’associent à sa douleur par leurs prières, leurs marques d’affection et leur présence fraternelle.',
  theme: {
    darkBg: '#0B0D11',
    cardBg: '#13171F',
    softGold: '#C5A059',
    pureWhite: '#F7F6F2',
    mutedGray: '#8A92A0',
    candleGlow: '#FFAE42',
  },
  schedule: [
    {
      id: 'veillee',
      date: 'Jeudi 23 Septembre 2027',
      time: '19h00 – 21h30',
      title: 'Veillée Religieuse & Chants de Louange',
      location: 'Paroisse Saint-Ambroise du Jubilé, Angré, Cocody',
      description: 'Chants sacrés, prières ferventes et hommages émouvants de la communauté',
      icon: 'vigil',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Paroisse+Saint-Ambroise+du+Jubilé+Angre',
      highlight: false,
    },
    {
      id: 'levee',
      date: 'Vendredi 24 Septembre 2027',
      time: '08h30',
      title: 'Levée de Corps & Messe de Requiem',
      location: 'Salle Houphouët-Boigny d’Ivosep Treichville',
      description: 'Levée solennelle suivie de la sainte messe de requiem et bénédiction de la dépouille',
      icon: 'ceremony',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ivosep+Treichville+Abidjan',
      highlight: true,
    },
    {
      id: 'inhumation',
      date: 'Samedi 25 Septembre 2027',
      time: '11h00',
      title: 'Inhumation au Tombeau Familial',
      location: 'Cimetière municipal & familial de Toumodi',
      description: 'Dernier hommage de la terre natale et recueillement auprès de ses ancêtres',
      icon: 'burial',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Toumodi+Cote+d+Ivoire',
      highlight: false,
    },
  ],
  locations: {
    vigil: {
      name: 'Paroisse Saint-Ambroise du Jubilé',
      address: 'Angré 7ème Tranche, Cocody',
      city: 'Abidjan',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Paroisse+Saint-Ambroise+du+Jubilé+Angre',
      accessTip: 'Parking disponible dans l’enceinte paroissiale.',
    },
    mass: {
      name: 'Ivosep Treichville (Salle Félix Houphouët-Boigny)',
      address: 'Boulevard Valéry Giscard d’Estaing, Treichville',
      city: 'Abidjan',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ivosep+Treichville+Abidjan',
      accessTip: 'Arrivée recommandée à partir de 08h00 pour la signature du livre de condoléances.',
    },
    burial: {
      name: 'Cimetière de Toumodi',
      address: 'Route principale de Toumodi',
      city: 'Toumodi',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Toumodi+Cote+d+Ivoire',
      accessTip: 'Un convoi de bus pour les proches partira le samedi à 06h30 d’Abidjan.',
    },
  },
  contact: {
    familyRepresentative: 'Famille Kouassi',
    whatsappNumber: '+2250777620864',
    whatsappFormatted: '+225 07 77 62 08 64',
    condolencesMessage: 'Chère famille Kouassi, nous vous adressons nos plus sincères condoléances et prions pour le repos éternel de l\'âme de Pépé Kouassi. Que le Seigneur vous apporte paix et réconfort.',
    supportNote: 'Vos messages de sympathie et de condoléances seront transmis directement aux enfants et petits-enfants.',
  },
  photo: {
    src: '/images/demos/hommage/pepe-kouassi.jpg',
    alt: 'Portrait digne et serein du Patriarche Kouassi Yao Étienne',
    caption: 'Patriarche Kouassi Yao Étienne (1942 – 2027) • À jamais dans nos cœurs',
  },
  music: {
    enabled: true,
    audioSrc: '/audio/hommage-musique.mp3',
    title: 'Recueillement & Adoration Piano',
    artist: 'Eliyah',
  },
  seo: {
    title: '🕯️ Hommage & Obsèques — Patriarche Kouassi (« Pépé Kouassi ») | Démo JetInvite',
    description: 'Faire-part d’obsèques et hommage officiel au Patriarche Kouassi Yao Étienne (1942 – 2027). Programme des veillées, messe et recueillement.',
    ogImage: '/images/demos/hommage/pepe-kouassi.jpg',
    url: 'https://jetinvite.fun/hommage/demo',
  },
};

export const memorialRegistry: Record<string, MemorialConfig> = {
  'demo': pepeKouassiMemorialConfig,
  'pepe-kouassi': pepeKouassiMemorialConfig,
};

export function getMemorialBySlug(slug: string): MemorialConfig {
  return memorialRegistry[slug] || pepeKouassiMemorialConfig;
}
