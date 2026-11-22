export interface BaptismScheduleItem {
  id: string;
  time: string;
  title: string;
  location: string;
  description: string;
  icon: 'church' | 'dove' | 'feast';
  mapUrl: string;
  highlight?: boolean;
}

export interface Godparent {
  role: 'Parrain' | 'Marraine';
  name: string;
  message: string;
}

export interface BaptismConfig {
  slug: string;
  status: 'active' | 'preview';
  child: {
    firstName: string;
    fullName: string;
    gender: 'boy' | 'girl';
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
  bibleVerse: {
    verse: string;
    reference: string;
  };
  tagline: string;
  invitationText: string;
  parentsMessage: string;
  godparents: Godparent[];
  theme: {
    pastelBlue: string;
    softGold: string;
    pearlWhite: string;
    deepNavy: string;
    cloudBlue: string;
    skyGradient: string;
  };
  schedule: BaptismScheduleItem[];
  locations: {
    church: {
      name: string;
      address: string;
      city: string;
      mapUrl: string;
      accessTip: string;
    };
    reception: {
      name: string;
      address: string;
      city: string;
      mapUrl: string;
      accessTip: string;
    };
  };
  contact: {
    parentsNames: string;
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

export const liamBaptismConfig: BaptismConfig = {
  slug: 'liam',
  status: 'active',
  child: {
    firstName: 'Liam',
    fullName: 'Liam Emmanuel',
    gender: 'boy',
  },
  eventDate: '2027-08-15T10:30:00+00:00', // Africa/Abidjan
  timeZone: 'Africa/Abidjan',
  eventDateFormatted: {
    fullFrench: 'Dimanche 15 Août 2027',
    day: 'Dimanche',
    dateNumber: '15',
    monthFrench: 'Août',
    year: '2027',
    time: '10h30',
  },
  bibleVerse: {
    verse: '« Laissez venir à moi les petits enfants, car le Royaume des Cieux est à ceux qui leur ressemblent. »',
    reference: 'Matthieu 19:14',
  },
  tagline: 'Sous le regard bienveillant du Seigneur et dans la grâce de son amour',
  invitationText: `Chers parents, chers proches et chers amis,

C'est avec une profonde émotion et le cœur rempli d'action de grâce que nous vous convions au Saint Baptême de notre petit ange Liam Emmanuel.

En recevant ce sacrement d'eau et de lumière, Liam entre dans la grande famille de Dieu. Votre présence et vos prières à nos côtés rendront cet instant sacré encore plus mémorable.

Nous serons infiniment heureux de vous compter parmi nous pour célébrer cette bénédiction divine.`,
  parentsMessage: 'Avec toute la tendresse et la gratitude des heureux parents, Marc & Christiane.',
  godparents: [
    {
      role: 'Parrain',
      name: 'Tonton Marc-Alain',
      message: 'Un guide de bienveillance et de sagesse pour éclairer ses premiers pas dans la foi.',
    },
    {
      role: 'Marraine',
      name: 'Tantie Aurélie',
      message: 'Une présence aimante et protectrice pour l’accompagner avec douceur et tendresse.',
    },
  ],
  theme: {
    pastelBlue: '#7DB6F8',
    softGold: '#C5A059',
    pearlWhite: '#FAFBFD',
    deepNavy: '#1E3A5F',
    cloudBlue: '#EAF4FE',
    skyGradient: 'linear-gradient(180deg, #EBF5FF 0%, #FFFFFF 100%)',
  },
  schedule: [
    {
      id: 'messe',
      time: '10h30',
      title: 'Célébration du Sacrement',
      location: 'Paroisse Saint-Jean de Cocody, Abidjan',
      description: 'Messe solennelle de baptême, effusion d’eau bénite et bénédiction de Liam',
      icon: 'church',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Paroisse+Saint-Jean+de+Cocody+Abidjan',
      highlight: true,
    },
    {
      id: 'dejeuner',
      time: '13h00',
      title: 'Déjeuner Céleste & Réjouissances',
      location: 'Résidence Les Orchidées, Cocody Danga, Abidjan',
      description: 'Partage du repas de fête, découpage de la pièce montée et festivités familiales',
      icon: 'feast',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cocody+Danga+Abidjan',
      highlight: false,
    },
  ],
  locations: {
    church: {
      name: 'Paroisse Saint-Jean de Cocody',
      address: 'Boulevard de France, Cocody',
      city: 'Abidjan',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Paroisse+Saint-Jean+de+Cocody+Abidjan',
      accessTip: 'Installation conseillée à partir de 10h00 avant le début de l’office.',
    },
    reception: {
      name: 'Résidence Les Orchidées',
      address: 'Cocody Danga, près de l’Hôtel communal',
      city: 'Abidjan',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cocody+Danga+Abidjan',
      accessTip: 'Service d’accueil et parking réservé pour tous les invités.',
    },
  },
  contact: {
    parentsNames: 'Marc & Christiane',
    whatsappNumber: '+2250777620864',
    whatsappFormatted: '+225 07 77 62 08 64',
    rsvpMessage: 'Bonjour ! Nous vous confirmons avec une immense joie notre présence pour entourer d\'amour le petit Liam lors de son baptême du 15 août.',
    rsvpDeadline: 'Merci de bien vouloir confirmer votre présence avant le 25 Juillet 2027.',
  },
  photo: {
    src: '/images/demos/bapteme/baby-liam.jpg',
    alt: 'Portrait plein de douceur de bébé Liam',
    caption: 'Liam Emmanuel • Notre précieux rayon de soleil',
  },
  music: {
    enabled: true,
    audioSrc: '/audio/bapteme-musique.mp3',
    title: 'Adoration Piano Chrétien',
    artist: 'Eliyah',
  },
  seo: {
    title: '🕊️ Faire-part de Baptême — Liam Emmanuel | Démo JetInvite',
    description: 'Invitation interactive au Saint Baptême de Liam Emmanuel le dimanche 15 août 2027 à Cocody, Abidjan. Enveloppe bleu ciel pastel et or.',
    ogImage: '/images/demos/bapteme/baby-liam.jpg',
    url: 'https://jetinvite.fun/bapteme/demo',
  },
};

export const baptismRegistry: Record<string, BaptismConfig> = {
  'demo': liamBaptismConfig,
  'liam': liamBaptismConfig,
};

export function getBaptismBySlug(slug: string): BaptismConfig {
  return baptismRegistry[slug] || liamBaptismConfig;
}
