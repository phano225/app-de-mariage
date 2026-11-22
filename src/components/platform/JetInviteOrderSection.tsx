'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Heart,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Palette,
  Pipette,
  Music,
  Eye,
  Check,
  User,
  Phone,
} from 'lucide-react';

export interface EventTypeConfig {
  id: string;
  label: string;
  emoji: string;
  slugPrefix: string;
  nameLabel: string;
  namePlaceholder: string;
  place1Label: string;
  place1Placeholder: string;
  place2Label?: string;
  place2Placeholder?: string;
  accessoryLabel: string;
  accessoryPlaceholder: string;
  accessoryDefault: string;
  musicSuggestions: string[];
  defaultMusic: string;
}

const EVENT_CHOICES: EventTypeConfig[] = [
  {
    id: 'mariage',
    label: 'Mariage & Fiançailles',
    emoji: '💍',
    slugPrefix: 'mariage',
    nameLabel: 'Prénoms des futurs mariés',
    namePlaceholder: 'Ex: Aïcha & Ibrahim',
    place1Label: 'Lieu de la Cérémonie (Mairie, Église, Mosquée...)',
    place1Placeholder: 'Ex: Mairie de Cocody & Jardins de Cocody, Abidjan',
    place2Label: 'Lieu de Réception / Soirée de Mariage',
    place2Placeholder: 'Ex: Sofitel Hôtel Ivoire, Salle des Fêtes',
    accessoryLabel: 'Initiales du Sceau de cire doré',
    accessoryPlaceholder: 'Ex: A & I',
    accessoryDefault: 'Initiales des mariés',
    musicSuggestions: [
      'Daphne — Jusqu’à la gare',
      'Ed Sheeran — Perfect',
      'Tayc — Le Temps (Acoustique)',
      'Fally Ipupa — Un coup',
    ],
    defaultMusic: 'Daphne — Jusqu’à la gare',
  },
  {
    id: 'anniversaire',
    label: 'Anniversaire',
    emoji: '🎂',
    slugPrefix: 'anniversaire',
    nameLabel: 'Prénom & Âge de la personne célébrée',
    namePlaceholder: 'Ex: Malika, 8 ans ou Cédric, 30 ans',
    place1Label: 'Lieu de la fête / du goûter d’anniversaire',
    place1Placeholder: 'Ex: Espace Kids Paradise, Riviera Golf, Abidjan',
    place2Label: 'Thème de la fête ou du gâteau',
    place2Placeholder: 'Ex: Pop & Confettis, Super-héros, Afro-Chic, Princesse...',
    accessoryLabel: 'Texte d’ouverture de la boîte cadeau 3D',
    accessoryPlaceholder: 'Ex: JOYEUX ANNIVERSAIRE ou MALIKA 8 ANS',
    accessoryDefault: 'Joyeux Anniversaire !',
    musicSuggestions: [
      'Naza — Happy Birthday',
      'Stevie Wonder — Happy Birthday',
      'Koffi Olomidé — Loi',
      'Asake — Lonely At The Top',
    ],
    defaultMusic: 'Naza — Happy Birthday',
  },
  {
    id: 'bapteme',
    label: 'Baptême & Naissance',
    emoji: '🕊️',
    slugPrefix: 'bapteme',
    nameLabel: 'Prénom de l’enfant ou du baptisé',
    namePlaceholder: 'Ex: Liam Emmanuel',
    place1Label: 'Lieu de la Célébration (Paroisse / Église / Temple)',
    place1Placeholder: 'Ex: Paroisse Saint-Jean de Cocody, Abidjan',
    place2Label: 'Lieu du repas de fête / réception familiale',
    place2Placeholder: 'Ex: Résidence familiale, Cocody Danga, Abidjan',
    accessoryLabel: 'Symbole sacré du sceau céleste',
    accessoryPlaceholder: 'Ex: Colombe de Paix, Croix Dorée, Ange Gardien',
    accessoryDefault: 'Colombe Dorée Céleste',
    musicSuggestions: [
      'Eliyah — Adoration Piano Chrétien',
      'Hillsong — Ce nom si merveilleux (Instrumental)',
      'Morijah — Reconnaissance',
      'Dena Mwana — Saint-Esprit',
    ],
    defaultMusic: 'Eliyah — Adoration Piano Chrétien',
  },
  {
    id: 'hommage',
    label: 'Hommage & Obsèques',
    emoji: '🕯️',
    slugPrefix: 'hommage',
    nameLabel: 'Nom complet de l’illustre défunt(e)',
    namePlaceholder: 'Ex: Patriarche Kouassi Yao Étienne dit « Pépé Kouassi »',
    place1Label: 'Lieu de la Veillée ou Ivosep',
    place1Placeholder: 'Ex: Salle Félix Houphouët-Boigny, Ivosep Treichville',
    place2Label: 'Lieu d’Inhumation / Dernière demeure',
    place2Placeholder: 'Ex: Cimetière de Williamsville ou Terre ancestrale à Toumodi',
    accessoryLabel: 'Symbole du Recueillement & Mémoire',
    accessoryPlaceholder: 'Ex: Bougie Éternelle, Flamme de Paix, Croix du Souvenir',
    accessoryDefault: 'Bougie Commémorative Éternelle',
    musicSuggestions: [
      'Eliyah — Recueillement & Adoration Piano',
      'Chant d’Espérance & Paix Éternelle (Violon & Piano)',
      'Amazing Grace (Instrumental doux)',
    ],
    defaultMusic: 'Eliyah — Recueillement & Adoration Piano',
  },
  {
    id: 'conference',
    label: 'Conférence & Sommet Pro',
    emoji: '💼',
    slugPrefix: 'conference',
    nameLabel: 'Nom du Forum, Conférence ou Sommet',
    namePlaceholder: 'Ex: Forum des Bâtisseurs & Entrepreneurs Africains (FBEA 2027)',
    place1Label: 'Palais des Congrès, Hôtel ou Centre d’Affaires',
    place1Placeholder: 'Ex: Palais des Congrès du Sofitel Hôtel Ivoire, Abidjan',
    place2Label: 'Salle spécifique ou Foyer B2B',
    place2Placeholder: 'Ex: Grand Foyer des Bâtisseurs & Salle Balafon',
    accessoryLabel: 'Intitulé & Catégorie du Badge d’Accès VIP',
    accessoryPlaceholder: 'Ex: PASS DÉLÉGUÉ VIP, ACCRÉDITATION OFFICIELLE',
    accessoryDefault: 'PASS DÉLÉGUÉ VIP',
    musicSuggestions: [
      'Meliodia AI — On Bouge (Urban Tech Beat)',
      'Executive Inspiration — Ambient Synth',
      'Innovation Panafricaine (Corporate Flow)',
    ],
    defaultMusic: 'Meliodia AI — On Bouge',
  },
  {
    id: 'festival',
    label: 'Festival & Soirée Concert',
    emoji: '🎸',
    slugPrefix: 'festival',
    nameLabel: 'Nom du Festival, Concert ou Soirée Événement',
    namePlaceholder: 'Ex: Abidjan Afro Beats & Dance Festival 2027',
    place1Label: 'Lieu de l’Événement, Scène ou Plage / Espace Lagunaire',
    place1Placeholder: 'Ex: Espace Lagunaire Wave Park, Biétry, Abidjan',
    place2Label: 'Dress code ou Ambiance recommandée',
    place2Placeholder: 'Ex: Tenue festive Afro-Chic & Électro, Luminescente',
    accessoryLabel: 'Intitulé du Billet Holographique / Pass',
    accessoryPlaceholder: 'Ex: PASS VIP LOUNGE, BILLET GOLD FULL PASS',
    accessoryDefault: 'PASS VIP COLLECTOR',
    musicSuggestions: [
      'Meliodia AI — Amapiano Beat Drop',
      'Burna Boy — Last Last (Instrumental)',
      'Rema — Calm Down (Festival Mix)',
      'Amapiano Pulse Abidjan',
    ],
    defaultMusic: 'Meliodia AI — Amapiano Beat Drop',
  },
  {
    id: 'autre',
    label: 'Autre Célébration (Gala, Diplôme, Retraite)',
    emoji: '✨',
    slugPrefix: 'mariage',
    nameLabel: 'Nom ou Intitulé de votre célébration',
    namePlaceholder: 'Ex: Soirée de Gala des Diplômés 2027',
    place1Label: 'Lieu principal de l’événement',
    place1Placeholder: 'Ex: Espace Prestige Riviera, Cocody, Abidjan',
    place2Label: 'Lieu de cocktail ou dîner',
    place2Placeholder: 'Ex: Salon VIP Les Perles',
    accessoryLabel: 'Détail ou Sceau de personnalisation',
    accessoryPlaceholder: 'Ex: Sceau officiel en or ou initiales',
    accessoryDefault: 'Sceau d’Or Personnalisé',
    musicSuggestions: [
      'Ambiance Fest Joyeuse & Élégante',
      'Musique au choix du client',
    ],
    defaultMusic: 'Ambiance Festive & Élégante',
  },
];

export interface PalettePreset {
  id: string;
  name: string;
  primaryColor: string;
  accentColor: string;
  tag: string;
}

const PRESET_PALETTES: PalettePreset[] = [
  { id: 'emerald-gold', name: 'Vert Émeraude & Or Royal', primaryColor: '#103928', accentColor: '#D4AF37', tag: 'Royal & Prestige' },
  { id: 'sapphire-blue', name: 'Bleu Nuit Saphir & Or', primaryColor: '#0A192F', accentColor: '#D4AF37', tag: 'Élégance Suprême' },
  { id: 'burgundy-gold', name: 'Bordeaux Velours & Or', primaryColor: '#58111A', accentColor: '#D4AF37', tag: 'Romantique Chic' },
  { id: 'pearl-gold', name: 'Blanc Nacré & Or Doux', primaryColor: '#F8F9FA', accentColor: '#C5A059', tag: 'Pureté & Céleste' },
  { id: 'orange-sunset', name: 'Orange Solaire & Or', primaryColor: '#FF6B35', accentColor: '#D4AF37', tag: 'Festif & Chaleureux' },
  { id: 'yellow-gold', name: 'Jaune Soleil & Or', primaryColor: '#FFD166', accentColor: '#C5A059', tag: 'Pop & Lumineux' },
  { id: 'sky-blue', name: 'Bleu Ciel Pastel & Or', primaryColor: '#7DB6F8', accentColor: '#D4AF37', tag: 'Douceur & Baptême' },
  { id: 'pop-pink', name: 'Rose Bonbon & Jaune Pop', primaryColor: '#FF2E93', accentColor: '#FFD166', tag: 'Enfant & Énergie' },
  { id: 'royal-purple', name: 'Violet Impérial & Rose', primaryColor: '#6C2BD9', accentColor: '#EC4899', tag: 'Signature JetInvite' },
  { id: 'pure-gold', name: 'Or Impérial Pur', primaryColor: '#D4AF37', accentColor: '#103928', tag: 'Luxe & Grandeur' },
  { id: 'memorial-black', name: 'Noir Sobre & Or Solennel', primaryColor: '#18181B', accentColor: '#C5A059', tag: 'Dignité & Paix' },
  { id: 'electric-cyan', name: 'Cyan Électrique & Navy', primaryColor: '#00D2D3', accentColor: '#0A192F', tag: 'High-Tech & B2B' },
];

const DURATION_OPTIONS = [
  { id: '1m', label: '1 mois après l’événement (Recommandé)', description: 'Idéal pour le jour J, les invitations et les remerciements des invités' },
  { id: '3m', label: '3 mois après l’événement', description: 'Pour conserver les photos souvenirs, messages et vidéos en ligne' },
  { id: '6m', label: '6 mois (Formule Prolongée)', description: 'Archivage longue durée pour toute la famille et les partenaires' },
];

export function JetInviteOrderSection() {
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    eventType: 'mariage',
    titleOrNames: '',
    date: '',
    time: '11:00',
    ceremonyPlace: '',
    receptionPlace: '',
    // Colors
    selectedPaletteId: 'emerald-gold',
    customPrimaryColor: '#103928',
    customAccentColor: '#D4AF37',
    isCustomColor: false,
    // Customization & accessory
    accessoryValue: '',
    musicChoice: '',
    hostingDuration: '1m',
    // Client Info
    clientName: '',
    clientWhatsapp: '',
    rsvpWhatsapp: '',
    notes: '',
  });

  // Validation Errors state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [stepErrorMessage, setStepErrorMessage] = useState<string | null>(null);

  // Submission State
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderRef, setOrderRef] = useState<string | null>(null);

  // Active event configuration
  const currentEvent = EVENT_CHOICES.find((e) => e.id === formData.eventType) || EVENT_CHOICES[0];

  const update = (field: string, val: any) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    // Clear error on edit
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    setStepErrorMessage(null);
  };

  // Change Event Type Handler
  const handleSelectEventType = (typeId: string) => {
    const ev = EVENT_CHOICES.find((e) => e.id === typeId) || EVENT_CHOICES[0];
    update('eventType', typeId);
    // Suggest relevant default music & accessory if currently empty
    if (!formData.musicChoice || formData.musicChoice === currentEvent.defaultMusic) {
      update('musicChoice', ev.defaultMusic);
    }
  };

  // Select Preset Palette
  const handleSelectPalette = (palette: PalettePreset) => {
    setFormData((prev) => ({
      ...prev,
      selectedPaletteId: palette.id,
      customPrimaryColor: palette.primaryColor,
      customAccentColor: palette.accentColor,
      isCustomColor: false,
    }));
  };

  // Handle Custom Color Pick
  const handleCustomPrimaryColorChange = (hex: string) => {
    setFormData((prev) => ({
      ...prev,
      customPrimaryColor: hex,
      isCustomColor: true,
      selectedPaletteId: 'custom',
    }));
  };

  const handleCustomAccentColorChange = (hex: string) => {
    setFormData((prev) => ({
      ...prev,
      customAccentColor: hex,
      isCustomColor: true,
      selectedPaletteId: 'custom',
    }));
  };

  // Validation Logic per step
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.titleOrNames.trim()) {
        newErrors.titleOrNames = `Veuillez renseigner ${currentEvent.nameLabel.toLowerCase()}.`;
      } else if (formData.titleOrNames.trim().length < 2) {
        newErrors.titleOrNames = 'Le nom doit comporter au moins 2 caractères.';
      }
    } else if (currentStep === 2) {
      if (!formData.date.trim()) {
        newErrors.date = 'Veuillez sélectionner la date de votre événement.';
      }
      if (!formData.time.trim()) {
        newErrors.time = 'Veuillez préciser l’heure de début.';
      }
      if (!formData.ceremonyPlace.trim()) {
        newErrors.ceremonyPlace = `Veuillez indiquer le lieu principal (${currentEvent.place1Label}).`;
      }
    } else if (currentStep === 3) {
      // Step 3 always has valid color defaults, accessory can fallback
    } else if (currentStep === 4) {
      if (!formData.clientName.trim() || formData.clientName.trim().length < 2) {
        newErrors.clientName = 'Veuillez renseigner votre nom et prénom complets.';
      }
      const cleanPhone = formData.clientWhatsapp.replace(/[^0-9+]/g, '');
      if (!cleanPhone || cleanPhone.length < 8) {
        newErrors.clientWhatsapp = 'Veuillez renseigner un numéro WhatsApp valide (au moins 8 chiffres).';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.values(newErrors)[0];
      setStepErrorMessage(firstError);
      return false;
    }

    setStepErrorMessage(null);
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  };

  const handlePrevStep = () => {
    setStepErrorMessage(null);
    setStep((s) => s - 1);
  };

  // Submit & Send to WhatsApp
  const handleSendWhatsApp = async () => {
    if (!validateStep(4)) {
      return;
    }

    setIsSubmitting(true);
    let generatedRef = '';

    const effectiveAccessory = formData.accessoryValue.trim() || currentEvent.accessoryDefault;
    const effectiveMusic = formData.musicChoice.trim() || currentEvent.defaultMusic;

    const payload = {
      eventType: formData.eventType,
      titleOrNames: formData.titleOrNames,
      date: formData.date,
      time: formData.time,
      ceremonyPlace: formData.ceremonyPlace,
      receptionPlace: formData.receptionPlace || null,
      themeColor: formData.isCustomColor
        ? `Personnalisé (${formData.customPrimaryColor} & ${formData.customAccentColor})`
        : PRESET_PALETTES.find((p) => p.id === formData.selectedPaletteId)?.name || formData.selectedPaletteId,
      sealInitials: effectiveAccessory,
      musicChoice: effectiveMusic,
      hostingDuration: formData.hostingDuration,
      clientName: formData.clientName,
      clientWhatsapp: formData.clientWhatsapp,
      rsvpWhatsapp: formData.rsvpWhatsapp || formData.clientWhatsapp,
      notes: `Détails Événement : ${currentEvent.label} | Accessoire : ${effectiveAccessory} | Couleurs : ${formData.customPrimaryColor} / ${formData.customAccentColor}`,
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success && data.orderRef) {
        generatedRef = data.orderRef;
        setOrderRef(data.orderRef);
      }
    } catch (err) {
      console.error('Erreur enregistrement commande:', err);
    } finally {
      setIsSubmitting(false);
    }

    const durationLabel = DURATION_OPTIONS.find((d) => d.id === formData.hostingDuration)?.label || formData.hostingDuration;
    const colorLabel = formData.isCustomColor
      ? `Personnalisée (Primaire: ${formData.customPrimaryColor}, Accent: ${formData.customAccentColor})`
      : PRESET_PALETTES.find((p) => p.id === formData.selectedPaletteId)?.name || 'Sur-mesure';

    const message =
      `Bonjour l'équipe JetInvite ! 👋\n\n` +
      `Je souhaite commander une invitation numérique animée sur *jetinvite.fun* :\n\n` +
      (generatedRef ? `🏷️ *Numéro de commande :* #${generatedRef}\n` : '') +
      `✨ *Événement :* ${currentEvent.emoji} ${currentEvent.label}\n` +
      `👑 *À l'honneur :* ${formData.titleOrNames}\n` +
      `📅 *Date :* ${formData.date} à ${formData.time}\n` +
      `📍 *${currentEvent.place1Label} :* ${formData.ceremonyPlace}\n` +
      (formData.receptionPlace ? `🥂 *${currentEvent.place2Label || 'Réception'} :* ${formData.receptionPlace}\n` : '') +
      `🎨 *Thème Couleurs :* ${colorLabel}\n` +
      `🔤 *${currentEvent.accessoryLabel} :* ${effectiveAccessory}\n` +
      `🎵 *Musique souhaitée :* ${effectiveMusic}\n` +
      `⏳ *Hébergement :* ${durationLabel}\n\n` +
      `👤 *Commanditaire :* ${formData.clientName}\n` +
      `📱 *Mon WhatsApp :* ${formData.clientWhatsapp}\n` +
      `📲 *WhatsApp RSVP Invités :* ${formData.rsvpWhatsapp || formData.clientWhatsapp}\n` +
      (formData.notes ? `📝 *Notes particulières :* ${formData.notes}\n` : '') +
      `\nJe suis prêt(e) à vous transmettre les photos nécessaires pour lancer la création. Merci !`;

    const encoded = encodeURIComponent(message);
    const targetNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2250777620864';
    const cleanNumber = targetNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  // Dynamic preview demo slug
  const previewSlug = formData.titleOrNames
    ? formData.titleOrNames
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    : 'votre-nom';

  return (
    <section id="commander" className="py-20 bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formulaire de commande interactif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Configurez votre invitation en ligne
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Remplissez les informations de votre événement. Votre faire-part interactif sera prêt en 24h à 48h chrono.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5 p-6 sm:p-10 relative">
          {/* Progress Steps Header */}
          <div className="grid grid-cols-4 text-center text-xs font-bold text-slate-400 mb-5 gap-1">
            <div className={`flex flex-col items-center gap-1 ${step >= 1 ? 'text-purple-700' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-500'}`}>1</span>
              <span className="hidden sm:inline">1. Événement</span>
              <span className="sm:hidden">Événement</span>
            </div>
            <div className={`flex flex-col items-center gap-1 ${step >= 2 ? 'text-purple-700' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-500'}`}>2</span>
              <span className="hidden sm:inline">2. Détails & Lieux</span>
              <span className="sm:hidden">Lieux</span>
            </div>
            <div className={`flex flex-col items-center gap-1 ${step >= 3 ? 'text-purple-700' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-500'}`}>3</span>
              <span className="hidden sm:inline">3. Ambiance & Couleurs</span>
              <span className="sm:hidden">Style</span>
            </div>
            <div className={`flex flex-col items-center gap-1 ${step >= 4 ? 'text-purple-700' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono ${step >= 4 ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-500'}`}>4</span>
              <span className="hidden sm:inline">4. Validation</span>
              <span className="sm:hidden">Envoi</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#7c24ec] to-[#e62576] transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: ÉVÉNEMENT & NOMS */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Quel est le type de votre événement ?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Sélectionnez la catégorie pour adapter automatiquement le design, les animations et les formulaires.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {EVENT_CHOICES.map((choice) => (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => handleSelectEventType(choice.id)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                        formData.eventType === choice.id
                          ? 'border-purple-600 bg-purple-50/80 text-purple-950 shadow-sm ring-2 ring-purple-600/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span className="text-2xl mb-2">{choice.emoji}</span>
                      <span className="font-bold text-xs sm:text-sm">{choice.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {currentEvent.nameLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={currentEvent.namePlaceholder}
                    value={formData.titleOrNames}
                    onChange={(e) => update('titleOrNames', e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-slate-800 text-sm outline-none transition-all ${
                      errors.titleOrNames
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                    }`}
                  />
                  {errors.titleOrNames && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.titleOrNames}</span>
                    </p>
                  )}
                  <p className="text-[11px] text-slate-400 mt-1">
                    Ces prénoms ou ce titre figureront sur la couverture et dans le lien personnalisé de votre invitation.
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DÉTAILS & LIEUX CONTEXTUALISÉS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-2">
                    <span>{currentEvent.emoji}</span>
                    <span>{currentEvent.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Date & Lieux de célébration
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Indiquez la programmation horaire et les coordonnées géographiques pour vos invités.
                  </p>
                </div>

                {/* Date & Heure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Date de l'événement <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => update('date', e.target.value)}
                        className={`w-full px-4 py-3.5 rounded-xl border text-slate-800 text-sm outline-none transition-all ${
                          errors.date
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                            : 'border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Heure de début / Rassemblement <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => update('time', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl border text-slate-800 text-sm outline-none transition-all ${
                        errors.time
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                      }`}
                    />
                    {errors.time && (
                      <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.time}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Lieu Principal Contextualisé */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {currentEvent.place1Label} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder={currentEvent.place1Placeholder}
                      value={formData.ceremonyPlace}
                      onChange={(e) => update('ceremonyPlace', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl border text-slate-800 text-sm outline-none transition-all ${
                        errors.ceremonyPlace
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                      }`}
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                  </div>
                  {errors.ceremonyPlace && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.ceremonyPlace}</span>
                    </p>
                  )}
                  <p className="text-[11px] text-slate-400 mt-1">
                    Un bouton de guidage GPS automatique (Google Maps) sera relié directement à cette adresse.
                  </p>
                </div>

                {/* Lieu Secondaire / Thème Contextualisé */}
                {currentEvent.place2Label && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      {currentEvent.place2Label} <span className="text-slate-400 font-normal">(Optionnel)</span>
                    </label>
                    <input
                      type="text"
                      placeholder={currentEvent.place2Placeholder}
                      value={formData.receptionPlace}
                      onChange={(e) => update('receptionPlace', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-800 text-sm outline-none transition-all"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 3: COULEURS, SÉLECTEUR PERSONNALISÉ & AMBIANCE */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-7"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Style, Couleurs & Ambiance
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Sélectionnez une palette prédéfinie ou ajustez vos couleurs au doigt ou à la souris grâce au sélecteur interactif.
                  </p>
                </div>

                {/* DOUBLE SÉLECTEUR DE COULEURS */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Palette className="w-4 h-4 text-purple-600" />
                      <span>1. Nuancier Express (12 teintes phares)</span>
                    </label>
                    {formData.isCustomColor && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                        Couleur personnalisée active
                      </span>
                    )}
                  </div>

                  {/* Grille des 12 teintes prédéfinies cliquables */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {PRESET_PALETTES.map((p) => {
                      const isSelected = !formData.isCustomColor && formData.selectedPaletteId === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleSelectPalette(p)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                            isSelected
                              ? 'border-purple-600 bg-purple-50/70 ring-2 ring-purple-600/30 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div
                            className="w-7 h-7 rounded-full shrink-0 border-2 shadow-inner flex items-center justify-center"
                            style={{
                              backgroundColor: p.primaryColor,
                              borderColor: p.accentColor,
                            }}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold text-slate-800 truncate leading-tight">
                              {p.name.split('&')[0]}
                            </p>
                            <p className="text-[10px] text-slate-400 truncate">
                              {p.accentColor === '#D4AF37' ? '& Or' : p.tag}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* SÉLECTEUR INTERACTIF DE COULEUR PERSONNALISÉE (Color Picker) */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-purple-50/50 border border-purple-100 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <Pipette className="w-4 h-4 text-purple-600" />
                          <span>2. Sélecteur Libre (Souris / Tactile)</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Choisissez précisément n'importe quelle nuance sur mesure.
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Pick Couleur Principale */}
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor="colorPickerPrimary"
                            className="w-10 h-10 rounded-xl cursor-pointer border-2 border-white shadow-md flex items-center justify-center relative overflow-hidden transition-transform hover:scale-110 active:scale-95"
                            style={{ backgroundColor: formData.customPrimaryColor }}
                            title="Cliquez pour ouvrir la palette de couleur principale"
                          >
                            <input
                              id="colorPickerPrimary"
                              type="color"
                              value={formData.customPrimaryColor}
                              onChange={(e) => handleCustomPrimaryColorChange(e.target.value)}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                          </label>
                          <div className="text-left">
                            <div className="text-[10px] uppercase font-bold text-slate-500">Fond / Enveloppe</div>
                            <div className="text-xs font-mono font-bold text-slate-800">{formData.customPrimaryColor}</div>
                          </div>
                        </div>

                        {/* Pick Couleur d'Accent */}
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor="colorPickerAccent"
                            className="w-10 h-10 rounded-xl cursor-pointer border-2 border-white shadow-md flex items-center justify-center relative overflow-hidden transition-transform hover:scale-110 active:scale-95"
                            style={{ backgroundColor: formData.customAccentColor }}
                            title="Cliquez pour ouvrir la palette de couleur d'accent (dorure / texte)"
                          >
                            <input
                              id="colorPickerAccent"
                              type="color"
                              value={formData.customAccentColor}
                              onChange={(e) => handleCustomAccentColorChange(e.target.value)}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                          </label>
                          <div className="text-left">
                            <div className="text-[10px] uppercase font-bold text-slate-500">Dorure / Accent</div>
                            <div className="text-xs font-mono font-bold text-slate-800">{formData.customAccentColor}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Aperçu en direct de l'invitation */}
                    <div
                      className="p-4 rounded-xl border transition-all duration-300 flex items-center justify-between"
                      style={{
                        backgroundColor: formData.customPrimaryColor,
                        borderColor: formData.customAccentColor,
                      }}
                    >
                      <div className="space-y-0.5">
                        <span
                          className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/20"
                          style={{ color: formData.customAccentColor }}
                        >
                          Aperçu en direct
                        </span>
                        <div
                          className="font-serif font-bold text-base"
                          style={{ color: formData.customAccentColor }}
                        >
                          {formData.titleOrNames || currentEvent.namePlaceholder}
                        </div>
                        <div className="text-[11px] text-white/90">
                          {currentEvent.label} — {formData.date || 'Date à définir'}
                        </div>
                      </div>

                      <div
                        className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs shadow-lg"
                        style={{
                          borderColor: formData.customAccentColor,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: formData.customAccentColor,
                        }}
                      >
                        {formData.accessoryValue.slice(0, 3) || currentEvent.emoji}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessoire & Musique */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      {currentEvent.accessoryLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={currentEvent.accessoryPlaceholder}
                      value={formData.accessoryValue}
                      onChange={(e) => update('accessoryValue', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-800 text-sm outline-none uppercase font-mono transition-all"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Par défaut : <em>{currentEvent.accessoryDefault}</em>
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Musique de fond (Titre ou Artiste)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={`Ex: ${currentEvent.defaultMusic}`}
                        value={formData.musicChoice}
                        onChange={(e) => update('musicChoice', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-800 text-sm outline-none transition-all"
                      />
                      <Music className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                    {/* Suggestions express en 1 clic */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] text-slate-400 font-semibold self-center">Idées :</span>
                      {currentEvent.musicSuggestions.slice(0, 2).map((sug, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => update('musicChoice', sug)}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                        >
                          {sug.split('—')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DURÉE D'HÉBERGEMENT DU LIEN EN LIGNE */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Durée de maintien du lien en ligne
                    </label>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-mono">
                      Politique d'hébergement
                    </span>
                  </div>
                  <div className="space-y-2">
                    {DURATION_OPTIONS.map((d) => (
                      <label
                        key={d.id}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.hostingDuration === d.id
                            ? 'border-purple-600 bg-purple-50/60 shadow-sm ring-1 ring-purple-600/20'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="hostingDuration"
                          value={d.id}
                          checked={formData.hostingDuration === d.id}
                          onChange={() => update('hostingDuration', d.id)}
                          className="mt-1 text-purple-600 focus:ring-purple-500"
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-800">{d.label}</div>
                          <div className="text-[11px] text-slate-500">{d.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Passé ce délai, le lien est désactivé et archivé pour préserver les ressources.</span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 4: COORDONNÉES & VALIDATION FINALE */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Vos coordonnées pour la livraison
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Notre équipe vous contactera sur WhatsApp pour valider la maquette sous 24h à 48h.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Votre Nom & Prénom <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Ex: Stéphane Assamoi"
                        value={formData.clientName}
                        onChange={(e) => update('clientName', e.target.value)}
                        className={`w-full px-4 py-3.5 rounded-xl border text-slate-800 text-sm outline-none transition-all ${
                          errors.clientName
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                            : 'border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                        }`}
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                    {errors.clientName && (
                      <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.clientName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Votre Numéro WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="Ex: +225 07 77 62 08 64"
                        value={formData.clientWhatsapp}
                        onChange={(e) => update('clientWhatsapp', e.target.value)}
                        className={`w-full px-4 py-3.5 rounded-xl border text-slate-800 text-sm outline-none transition-all ${
                          errors.clientWhatsapp
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                            : 'border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                    </div>
                    {errors.clientWhatsapp && (
                      <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.clientWhatsapp}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Numéro WhatsApp pour recevoir les confirmations RSVP des invités
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: +225 05 00 00 00 00 (laissez vide si identique au vôtre)"
                    value={formData.rsvpWhatsapp}
                    onChange={(e) => update('rsvpWhatsapp', e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-800 text-sm outline-none transition-all"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    C'est ce numéro qui sera contacté directement lorsque vos invités cliqueront sur « Confirmer ma présence ».
                  </p>
                </div>

                {/* RÉCAPITULATIF DYNAMIQUE EXPRESS */}
                <div className="p-5 rounded-2xl bg-purple-50/80 border border-purple-200 text-xs text-purple-950 space-y-2">
                  <div className="font-bold text-purple-900 text-sm flex items-center justify-between border-b border-purple-200/60 pb-2">
                    <span>Récapitulatif de votre commande :</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-200/60 text-purple-800 font-mono font-bold">
                      {currentEvent.emoji} {currentEvent.label}
                    </span>
                  </div>
                  <div>• <strong>Titre à l'honneur :</strong> {formData.titleOrNames || 'Non précisé'}</div>
                  <div>• <strong>Date & Heure :</strong> {formData.date || 'À définir'} à {formData.time}</div>
                  <div>• <strong>Lieu principal :</strong> {formData.ceremonyPlace || 'À préciser'}</div>
                  {formData.receptionPlace && (
                    <div>• <strong>{currentEvent.place2Label || 'Lieu secondaire'} :</strong> {formData.receptionPlace}</div>
                  )}
                  <div className="flex items-center gap-2">
                    <span>• <strong>Palette de couleur :</strong></span>
                    <div
                      className="w-4 h-4 rounded-full border border-black/20"
                      style={{ backgroundColor: formData.customPrimaryColor }}
                    />
                    <span className="font-mono text-[11px]">
                      {formData.isCustomColor ? `${formData.customPrimaryColor} & ${formData.customAccentColor}` : PRESET_PALETTES.find((p) => p.id === formData.selectedPaletteId)?.name}
                    </span>
                  </div>
                  <div>• <strong>{currentEvent.accessoryLabel} :</strong> {formData.accessoryValue || currentEvent.accessoryDefault}</div>
                  <div>• <strong>Musique :</strong> {formData.musicChoice || currentEvent.defaultMusic}</div>
                  <div>• <strong>Lien généré :</strong> <span className="font-mono text-purple-700 underline">jetinvite.fun/{currentEvent.slugPrefix}/{previewSlug}</span></div>
                  <div>• <strong>Durée d'hébergement :</strong> {DURATION_OPTIONS.find((d) => d.id === formData.hostingDuration)?.label}</div>
                  <div className="pt-2 text-emerald-700 font-bold border-t border-purple-200/60 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Livraison express du lien : sous 24h à 48h chrono avec garantie de conformité</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BANDEAU D'ERREUR D'ÉTAPE */}
          {stepErrorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{stepErrorMessage}</span>
            </motion.div>
          )}

          {/* Buttons Footer */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Continuer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleSendWhatsApp}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{isSubmitting ? 'Enregistrement en cours...' : 'Envoyer ma commande sur WhatsApp'}</span>
              </button>
            )}
          </div>

          {submitted && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center space-y-1">
              <div>
                🎉 Votre commande {orderRef && <span className="font-bold underline">#{orderRef}</span>} a été enregistrée avec succès dans notre base de données !
              </div>
              <div className="text-[11px] text-emerald-700">
                L'application WhatsApp s'est ouverte pour finaliser votre transmission. Nous prenons le relais immédiatement !
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
