'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Heart,
  Calendar,
  MapPin,
  Music,
  Palette,
  Phone,
  Mail,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Send,
  Upload,
  Info,
} from 'lucide-react';

const EVENT_TYPES = [
  { id: 'mariage', label: 'Mariage & Fiançailles', icon: Heart, defaultColor: 'green' },
  { id: 'anniversaire', label: 'Anniversaire & Jubilé', icon: Sparkles, defaultColor: 'gold' },
  { id: 'bapteme', label: 'Baptême & Naissance', icon: Sparkles, defaultColor: 'white' },
  { id: 'gala', label: 'Gala, Dîner & Célébration', icon: Sparkles, defaultColor: 'black' },
];

const THEME_COLORS = [
  { id: 'green', name: 'Vert Émeraude Royal', bg: 'bg-[#06231a]', border: 'border-[#14532d]', text: 'text-emerald-300' },
  { id: 'blue', name: 'Bleu Nuit Saphir', bg: 'bg-[#0a192f]', border: 'border-[#1e3a8a]', text: 'text-blue-300' },
  { id: 'burgundy', name: 'Bordeaux Impérial', bg: 'bg-[#2a0812]', border: 'border-[#881337]', text: 'text-rose-300' },
  { id: 'black', name: 'Noir & Or Prestige', bg: 'bg-[#0f0f10]', border: 'border-[#d4af37]', text: 'text-amber-300' },
  { id: 'white', name: 'Blanc Nacré & Or', bg: 'bg-[#f4ede4]', border: 'border-[#d4af37]', text: 'text-stone-800' },
];

export function OrderWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'mariage',
    names: '',
    date: '',
    time: '',
    ceremonyLocation: '',
    receptionLocation: '',
    message: '',
    envelopeColor: 'green',
    sealInitials: '',
    musicTitle: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    rsvpPhone: '',
    additionalNotes: '',
  });

  const [orderSent, setOrderSent] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Generate WhatsApp order message
  const handleFinalizeWhatsApp = () => {
    const selectedColor = THEME_COLORS.find((c) => c.id === formData.envelopeColor)?.name || formData.envelopeColor;
    const selectedEvent = EVENT_TYPES.find((e) => e.id === formData.eventType)?.label || formData.eventType;

    const text = `Bonjour l'équipe JetInvite ! 👋\n\nJe souhaite commander un faire-part numérique animé d'exception sur *jetinvite.fun* :\n\n` +
      `📌 *Type d'événement :* ${selectedEvent}\n` +
      `✨ *Héros du jour / Titre :* ${formData.names || 'Non précisé'}\n` +
      `📅 *Date :* ${formData.date || 'À définir'} à ${formData.time || '11h00'}\n` +
      `📍 *Cérémonie :* ${formData.ceremonyLocation || 'Non précisé'}\n` +
      `🥂 *Réception :* ${formData.receptionLocation || 'Non précisé'}\n` +
      `🎨 *Thème / Couleur d'enveloppe :* ${selectedColor}\n` +
      `🔤 *Initiales du Sceau :* ${formData.sealInitials || 'Selon les prénoms'}\n` +
      `🎵 *Musique souhaitée :* ${formData.musicTitle || 'Au choix de l’équipe'}\n\n` +
      `👤 *Commanditaire :* ${formData.clientName}\n` +
      `📱 *WhatsApp Contact :* ${formData.clientPhone}\n` +
      `📲 *WhatsApp pour RSVP des invités :* ${formData.rsvpPhone || formData.clientPhone}\n` +
      `📧 *Email :* ${formData.clientEmail || 'Non précisé'}\n` +
      (formData.additionalNotes ? `📝 *Notes :* ${formData.additionalNotes}\n` : '') +
      `\nJe suis prêt(e) à vous transmettre les photos et à finaliser ma commande. Merci !`;

    const encoded = encodeURIComponent(text);
    // WhatsApp destination number (Studio JetInvite)
    const targetNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2250777620864';
    const cleanNumber = targetNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setOrderSent(true);
  };

  return (
    <section id="commander" className="py-20 lg:py-28 bg-stone-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Création Simple & Rapide
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-bold tracking-tight">
            Commandez votre faire-part en ligne
          </h2>
          <p className="text-stone-300 text-base max-w-xl mx-auto">
            Remplissez ce formulaire en 2 minutes. Notre studio prépare votre animation sur-mesure et vous livre votre lien personnalisé sous 24h à 72h.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-stone-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm relative">
          {/* Step Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
              <span className={currentStep >= 1 ? 'text-amber-400 font-bold' : ''}>1. Événement</span>
              <span className={currentStep >= 2 ? 'text-amber-400 font-bold' : ''}>2. Célébration</span>
              <span className={currentStep >= 3 ? 'text-amber-400 font-bold' : ''}>3. Personnalisation</span>
              <span className={currentStep >= 4 ? 'text-amber-400 font-bold' : ''}>4. Validation</span>
            </div>
            <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1 : Type d'événement */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-2xl text-stone-100 font-bold">
                  Quel événement souhaitez-vous célébrer ?
                </h3>
                <p className="text-sm text-stone-400">
                  Choisissez le format qui correspond à votre célébration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {EVENT_TYPES.map((type) => {
                    const isSelected = formData.eventType === type.id;
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => updateField('eventType', type.id)}
                        className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-400 text-stone-100 shadow-lg shadow-amber-500/10'
                            : 'bg-stone-950/50 border-stone-800 text-stone-300 hover:border-stone-700'
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? 'bg-amber-500 text-stone-950'
                              : 'bg-stone-800 text-stone-300'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-semibold text-base text-stone-100">{type.label}</div>
                          <div className="text-xs text-stone-400">Enveloppe animée + RSVP</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4">
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Noms ou Prénoms à l'honneur (ex: Carole & Benjamin, ou Sarah)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Joël & Sandrine"
                    value={formData.names}
                    onChange={(e) => updateField('names', e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-base"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 2 : Célébration (Date, Heure, Lieux) */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-2xl text-stone-100 font-bold">
                  Date & Lieux de la célébration
                </h3>
                <p className="text-sm text-stone-400">
                  Ces informations permettront de configurer le compte à rebours et les boutons Google Maps.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Date de l'événement
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateField('date', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Heure de début
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => updateField('time', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Lieu de la Cérémonie (Mairie, Église, Salle)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Mairie de Dabou ou Paroisse Saint-Jean"
                    value={formData.ceremonyLocation}
                    onChange={(e) => updateField('ceremonyLocation', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Lieu de la Réception / Festivités
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Espace Prestige Lopou, Abidjan"
                    value={formData.receptionLocation}
                    onChange={(e) => updateField('receptionLocation', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                    Citation ou mot personnel pour les invités (optionnel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Deux cœurs, une seule promesse pour l'éternité..."
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 3 : Personnalisation visuelle & Audio */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-2xl text-stone-100 font-bold">
                  Personnalisation & Ambiance
                </h3>
                <p className="text-sm text-stone-400">
                  Choisissez la couleur de l'enveloppe, les initiales du sceau et votre musique de fond.
                </p>

                {/* Couleur enveloppe */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-3">
                    Couleur de l'enveloppe 3D
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {THEME_COLORS.map((color) => {
                      const isSelected = formData.envelopeColor === color.id;
                      return (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => updateField('envelopeColor', color.id)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'border-amber-400 bg-amber-500/10 text-stone-100'
                              : 'border-stone-800 bg-stone-950/60 text-stone-300 hover:border-stone-700'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full ${color.bg} border ${color.border} shrink-0`} />
                          <span className="text-sm font-medium">{color.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Initiales du Sceau de Cire
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="Ex: C & B ou 2027"
                      value={formData.sealInitials}
                      onChange={(e) => updateField('sealInitials', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm font-mono uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Musique de fond (Titre ou Artiste)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Stevie Wonder - For Once In My Life"
                      value={formData.musicTitle}
                      onChange={(e) => updateField('musicTitle', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200">
                  <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Vos photos haute définition :</strong> Vous pourrez envoyer vos photos (photo principale et galerie) directement par WhatsApp dès la confirmation de la commande.
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4 : Coordonnées & Validation */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-2xl text-stone-100 font-bold">
                  Vos coordonnées de livraison
                </h3>
                <p className="text-sm text-stone-400">
                  Où devons-nous vous transmettre le lien final prêt à être envoyé à vos invités ?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Stéphane Assamoi"
                      value={formData.clientName}
                      onChange={(e) => updateField('clientName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Votre Numéro WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +225 07 00 00 00 00"
                      value={formData.clientPhone}
                      onChange={(e) => updateField('clientPhone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Numéro WhatsApp pour les RSVP des invités
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: +225 05 00 00 00 00 (si différent)"
                      value={formData.rsvpPhone}
                      onChange={(e) => updateField('rsvpPhone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-mono mb-2">
                      Adresse Email (optionnelle)
                    </label>
                    <input
                      type="email"
                      placeholder="Ex: contact@exemple.com"
                      value={formData.clientEmail}
                      onChange={(e) => updateField('clientEmail', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 focus:outline-none text-stone-100 text-sm"
                    />
                  </div>
                </div>

                {/* Récapitulatif Box */}
                <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2 text-xs text-stone-300">
                  <div className="font-semibold text-amber-300 text-sm uppercase tracking-wider">
                    Récapitulatif de votre commande :
                  </div>
                  <div>• <strong>Événement :</strong> {formData.names || 'À définir'} ({formData.eventType})</div>
                  <div>• <strong>Date :</strong> {formData.date || 'À définir'} {formData.time ? `à ${formData.time}` : ''}</div>
                  <div>• <strong>Enveloppe :</strong> {THEME_COLORS.find((c) => c.id === formData.envelopeColor)?.name}</div>
                  <div>• <strong>Lien généré :</strong> jetinvite.fun/mariage/{formData.names ? formData.names.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'votre-nom'}</div>
                  <div className="pt-2 text-emerald-400 font-medium">✓ Délai de confection : 24h à 72h chrono</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-stone-800">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95"
              >
                <span>Continuer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalizeWhatsApp}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-stone-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer ma commande via WhatsApp</span>
              </button>
            )}
          </div>

          {orderSent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm text-center font-medium"
            >
              🎉 Votre commande a été transmise ! Notre équipe prend contact avec vous sur WhatsApp pour finaliser vos photos et lancer la confection de votre lien.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
