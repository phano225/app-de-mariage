'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const PLANS = [
  {
    name: 'Formule Essentielle',
    price: '25 000 FCFA',
    priceEur: '39 €',
    description: 'Idéal pour les événements intimistes, anniversaires et fiançailles.',
    popular: false,
    features: [
      'Enveloppe 3D animée interactive',
      'Sceau de cire avec vos initiales',
      'Programme & Lieux de célébration',
      'Boutons Google Maps 1-clic',
      'Confirmation de présence RSVP WhatsApp',
      'Lien personnalisé jetinvite.fun/...',
      'Livraison sous 48h',
    ],
    cta: 'Choisir la Formule Essentielle',
  },
  {
    name: 'Formule Prestige Royal',
    price: '45 000 FCFA',
    priceEur: '69 €',
    description: 'La formule plébiscitée par nos mariés. L\'expérience complète sans compromis.',
    popular: true,
    features: [
      'Tout ce qui est inclus dans Essentielle',
      'Bande sonore / Musique romantique au choix',
      'Compte à rebours dynamique en direct',
      'Galerie Photos privée (jusqu’à 8 photos HD)',
      'Faire-part Souvenir A4 téléchargeable (PDF)',
      'Modifications illimitées avant validation',
      'Livraison express sous 24h chrono',
    ],
    cta: 'Commander la Formule Prestige',
  },
  {
    name: 'Formule Sur-Mesure VIP',
    price: '75 000 FCFA',
    priceEur: '115 €',
    description: 'Pour les mariages d\'envergure, galas et cérémonies sur plusieurs jours.',
    popular: false,
    features: [
      'Tout ce qui est inclus dans Prestige',
      'Design graphique et animations 100% sur mesure',
      'Multi-célébrations (Traditionnel + Civil + Religieux)',
      'Code QR personnalisé haute résolution pour vos cartons physiques',
      'Support dédié WhatsApp direct avec le designer',
      'Conservation du lien en ligne à vie',
    ],
    cta: 'Demander un devis VIP',
  },
];

export function PricingSection() {
  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-stone-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Tarifs clairs et transparents
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-bold tracking-tight">
            Des tarifs accessibles pour un résultat d'exception
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Un paiement unique par événement, sans abonnement, avec invités illimités.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-stone-900 to-emerald-950/70 border-2 border-amber-400 shadow-2xl shadow-amber-500/10 lg:-translate-y-2'
                  : 'bg-stone-900/80 border border-stone-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md">
                  ★ Le plus populaire
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-100">{plan.name}</h3>
                  <p className="text-stone-400 text-xs mt-2 leading-relaxed">{plan.description}</p>
                </div>

                <div className="border-y border-stone-800/80 py-4">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-200">
                    {plan.price}
                  </div>
                  <div className="text-xs text-stone-400 mt-1">soit environ {plan.priceEur}</div>
                </div>

                <ul className="space-y-3 text-sm text-stone-300">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="#commander"
                  className={`block w-full py-3.5 rounded-full text-center font-bold text-xs uppercase tracking-wider transition-all ${
                    plan.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-lg shadow-amber-500/20 hover:scale-105'
                      : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
