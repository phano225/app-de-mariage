'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Send,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

const EVENT_CHOICES = [
  { id: 'mariage', label: 'Mariage & Fiançailles', emoji: '💍' },
  { id: 'anniversaire', label: 'Anniversaire', emoji: '🎂' },
  { id: 'bapteme', label: 'Baptême & Naissance', emoji: '✝️' },
  { id: 'graduation', label: 'Graduation / Diplôme', emoji: '🎓' },
  { id: 'pro', label: 'Événement Pro / Gala', emoji: '📅' },
  { id: 'autre', label: 'Autre événement', emoji: '✨' },
];

const THEME_PALETTES = [
  { id: 'royal-green', name: 'Vert Émeraude & Or Royal', color: '#103928', border: '#d4af37' },
  { id: 'sapphire-blue', name: 'Bleu Nuit Saphir & Or', color: '#0a192f', border: '#d4af37' },
  { id: 'burgundy', name: 'Bordeaux Velours & Or', color: '#3b0d18', border: '#d4af37' },
  { id: 'pearl-gold', name: 'Blanc Nacré & Or Pastel', color: '#faf6f0', border: '#c5a059' },
  { id: 'purple-pink', name: 'Violet & Rose JetInvite', color: '#3d1366', border: '#e62576' },
];

const DURATION_OPTIONS = [
  { id: '1m', label: '1 mois après l’événement (Recommandé)', description: 'Idéal pour le jour J et les remerciements' },
  { id: '3m', label: '3 mois après l’événement', description: 'Pour conserver les photos et souvenirs en ligne' },
  { id: '6m', label: '6 mois (Formule Prolongée)', description: 'Archivage longue durée' },
];

export function JetInviteOrderSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'mariage',
    titleOrNames: '',
    date: '',
    time: '',
    ceremonyPlace: '',
    receptionPlace: '',
    themeColor: 'royal-green',
    sealInitials: '',
    musicChoice: '',
    hostingDuration: '1m',
    clientName: '',
    clientWhatsapp: '',
    rsvpWhatsapp: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderRef, setOrderRef] = useState<string | null>(null);

  const update = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSendWhatsApp = async () => {
    if (!formData.clientName.trim() || !formData.clientWhatsapp.trim()) {
      alert('Veuillez renseigner votre nom et votre numéro WhatsApp avant de valider.');
      return;
    }

    setIsSubmitting(true);
    let generatedRef = '';

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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

    const eventName = EVENT_CHOICES.find((e) => e.id === formData.eventType)?.label || formData.eventType;
    const themeName = THEME_PALETTES.find((t) => t.id === formData.themeColor)?.name || formData.themeColor;
    const durationLabel = DURATION_OPTIONS.find((d) => d.id === formData.hostingDuration)?.label || formData.hostingDuration;

    const message = `Bonjour l'équipe JetInvite ! 👋\n\n` +
      `Je souhaite commander une invitation numérique animée sur *jetinvite.fun* :\n\n` +
      (generatedRef ? `🏷️ *Numéro de commande :* #${generatedRef}\n` : '') +
      `🎉 *Type d'événement :* ${eventName}\n` +
      `✨ *Titre / Noms à l'honneur :* ${formData.titleOrNames || 'Non précisé'}\n` +
      `📅 *Date de l'événement :* ${formData.date || 'À définir'} à ${formData.time || '11h00'}\n` +
      `📍 *Lieu Cérémonie :* ${formData.ceremonyPlace || 'À préciser'}\n` +
      `🥂 *Lieu Réception :* ${formData.receptionPlace || 'À préciser'}\n` +
      `🎨 *Style de couleur :* ${themeName}\n` +
      `🔤 *Initiales pour le sceau :* ${formData.sealInitials || 'Selon les prénoms'}\n` +
      `🎵 *Musique souhaitée :* ${formData.musicChoice || 'Au choix du studio'}\n` +
      `⏳ *Durée d'hébergement :* ${durationLabel}\n\n` +
      `👤 *Commanditaire :* ${formData.clientName}\n` +
      `📱 *Mon WhatsApp :* ${formData.clientWhatsapp}\n` +
      `📲 *WhatsApp pour RSVP :* ${formData.rsvpWhatsapp || formData.clientWhatsapp}\n` +
      (formData.notes ? `📝 *Remarques :* ${formData.notes}\n` : '') +
      `\nJe suis prêt(e) à vous transmettre les photos nécessaires et à finaliser ma commande. Merci !`;

    const encoded = encodeURIComponent(message);
    const targetNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2250700000000';
    const cleanNumber = targetNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="commander" className="py-20 bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formulaire de commande direct</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Commandez votre invitation en ligne
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Remplissez les détails de votre célébration. Votre invitation animée sera confectionnée sous 24h à 48h.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5 p-6 sm:p-10 relative">
          {/* Progress Steps Header */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-6">
            <span className={step >= 1 ? 'text-purple-700' : ''}>1. Événement</span>
            <span className={step >= 2 ? 'text-purple-700' : ''}>2. Détails & Lieux</span>
            <span className={step >= 3 ? 'text-purple-700' : ''}>3. Ambiance & Durée</span>
            <span className={step >= 4 ? 'text-purple-700' : ''}>4. Validation</span>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#7c24ec] to-[#e62576] transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  Quel est le type de votre événement ?
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {EVENT_CHOICES.map((choice) => (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => update('eventType', choice.id)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                        formData.eventType === choice.id
                          ? 'border-purple-600 bg-purple-50/70 text-purple-950 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span className="text-2xl mb-2">{choice.emoji}</span>
                      <span className="font-bold text-xs sm:text-sm">{choice.label}</span>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Prénoms ou Titre à l'honneur (ex: Awa & Olivier, ou Anniversaire de Sonia)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carole & Benjamin"
                    value={formData.titleOrNames}
                    onChange={(e) => update('titleOrNames', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-800 text-sm outline-none"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  Date & Lieux de célébration
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Date de l'événement
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => update('date', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Heure de début
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => update('time', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Lieu principal ou Cérémonie
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Mairie de Cocody, Abidjan"
                    value={formData.ceremonyPlace}
                    onChange={(e) => update('ceremonyPlace', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Lieu de Réception / Soirée
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Espace Prestige Riviera, Abidjan"
                    value={formData.receptionPlace}
                    onChange={(e) => update('receptionPlace', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  Personnalisation & Durée d'hébergement
                </h3>

                {/* Couleur de l'enveloppe */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                    Style & Couleur de l'enveloppe
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {THEME_PALETTES.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => update('themeColor', t.id)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                          formData.themeColor === t.id
                            ? 'border-purple-600 bg-purple-50/70 font-bold'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className="w-6 h-6 rounded-full border shadow-sm shrink-0"
                          style={{ backgroundColor: t.color, borderColor: t.border }}
                        />
                        <span className="text-xs text-slate-800">{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Initiales du Sceau de cire
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="Ex: A & O"
                      value={formData.sealInitials}
                      onChange={(e) => update('sealInitials', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none uppercase font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Musique de fond (Titre ou Artiste)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Ed Sheeran - Perfect"
                      value={formData.musicChoice}
                      onChange={(e) => update('musicChoice', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                    />
                  </div>
                </div>

                {/* DURÉE D'HÉBERGEMENT DU LIEN EN LIGNE (Validé par le client) */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2">
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
                            ? 'border-purple-600 bg-purple-50/60 shadow-sm'
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

            {/* STEP 4 */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  Vos coordonnées pour la livraison du lien
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Stéphane Assamoi"
                      value={formData.clientName}
                      onChange={(e) => update('clientName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Votre Numéro WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +225 07 00 00 00 00"
                      value={formData.clientWhatsapp}
                      onChange={(e) => update('clientWhatsapp', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Numéro WhatsApp pour recevoir les confirmations RSVP des invités
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: +225 05 00 00 00 00 (laissez vide si identique)"
                    value={formData.rsvpWhatsapp}
                    onChange={(e) => update('rsvpWhatsapp', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 text-slate-800 text-sm outline-none"
                  />
                </div>

                {/* Recap Box */}
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/60 text-xs text-purple-950 space-y-1.5">
                  <div className="font-bold text-purple-900 text-sm">Récapitulatif express :</div>
                  <div>• <strong>Célébration :</strong> {formData.titleOrNames || 'À définir'} ({formData.eventType})</div>
                  <div>• <strong>Date :</strong> {formData.date || 'À définir'} {formData.time ? `à ${formData.time}` : ''}</div>
                  <div>• <strong>Lien généré :</strong> jetinvite.fun/mariage/{formData.titleOrNames ? formData.titleOrNames.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'votre-nom'}</div>
                  <div>• <strong>Durée :</strong> {DURATION_OPTIONS.find((d) => d.id === formData.hostingDuration)?.label}</div>
                  <div className="pt-2 text-emerald-700 font-bold">✓ Livraison express du lien : 24h à 48h chrono</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons Footer */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
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
