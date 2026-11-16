'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Printer, ArrowLeft, Calendar, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface SouvenirPDFViewProps {
  wedding: WeddingConfig;
}

export const SouvenirPDFView: React.FC<SouvenirPDFViewProps> = ({ wedding }) => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 py-6 sm:py-12 px-4 print:p-0 print:bg-white">
      {/* Top action bar (hidden on print) */}
      <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between no-print">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-medium text-wedding-green hover:text-wedding-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au faire-part interactif</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-wedding-green text-wedding-ivory-light font-sans text-sm font-semibold shadow-md hover:bg-wedding-green-deep hover:shadow-lg transition-all"
        >
          <Printer className="w-4 h-4 text-wedding-gold" />
          <span>Imprimer / Enregistrer en PDF</span>
        </button>
      </div>

      {/* PDF SOUVENIR CARD (A4 Proportion Luxury Wedding Card) */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200 print:shadow-none print:border-none print:max-w-none">
        <div className="p-8 sm:p-14 border-[12px] border-wedding-ivory relative">
          {/* Subtle inner gold frame */}
          <div className="border border-wedding-gold/60 p-6 sm:p-10 relative">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-wedding-orange font-semibold">
                Invitation de Mariage • Souvenir Officiel
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif text-wedding-green font-bold tracking-wider mt-2 mb-1">
                {wedding.coupleNames.display}
              </h1>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-wedding-green-deep/70">
                {wedding.eventDateFormatted.fullFrench}
              </p>
              <div className="w-24 h-0.5 bg-wedding-gold mx-auto mt-4" />
            </div>

            {/* Main Portrait */}
            <div className="relative w-44 h-56 mx-auto rounded-xl overflow-hidden border-2 border-wedding-gold/50 shadow-md mb-8">
              <Image
                src="/images/carole-benjamin/photo-1-portrait.webp"
                alt="Portrait Carole et Benjamin"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Official Text */}
            <div className="text-center mb-10 max-w-xl mx-auto space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-wedding-green">
                Chers parents, chers amis et chers proches,
              </h2>
              <p className="font-serif text-sm sm:text-base leading-relaxed text-neutral-800">
                C&apos;est avec une immense joie et beaucoup d&apos;émotion que nous vous invitons à partager avec nous un moment exceptionnel de notre vie : <strong className="text-wedding-green">la célébration de notre union</strong>.
              </p>
              <p className="font-serif text-sm sm:text-base leading-relaxed text-neutral-800">
                Votre présence à nos côtés rendra cette journée encore plus belle et inoubliable.
              </p>
              <p className="font-serif text-sm sm:text-base leading-relaxed text-neutral-800">
                Nous serons très heureux de vous compter parmi nous pour célébrer cet heureux événement.
              </p>
              <p className="font-serif italic text-sm sm:text-base text-wedding-orange font-medium pt-2">
                Avec tout notre amour,<br />
                <span className="font-script text-2xl text-wedding-green font-normal not-italic">
                  {wedding.coupleNames.display}
                </span>
              </p>
            </div>

            {/* Schedule & Practical info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-wedding-gold/30">
              {/* Civil Ceremony */}
              <div className="p-4 rounded-xl bg-wedding-ivory/30 border border-wedding-gold/30">
                <div className="flex items-center gap-2 text-wedding-green font-bold text-sm mb-1">
                  <Clock className="w-4 h-4 text-wedding-orange" />
                  <span>11h00 — Cérémonie civile</span>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-neutral-700 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-wedding-orange flex-shrink-0 mt-0.5" />
                  <span>Mairie de Dabou, Côte d’Ivoire</span>
                </div>
              </div>

              {/* Reception */}
              <div className="p-4 rounded-xl bg-wedding-ivory/30 border border-wedding-gold/30">
                <div className="flex items-center gap-2 text-wedding-green font-bold text-sm mb-1">
                  <Clock className="w-4 h-4 text-wedding-orange" />
                  <span>13h00 — Réception &amp; Festivités</span>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-neutral-700 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-wedding-orange flex-shrink-0 mt-0.5" />
                  <span>Cour familiale de la mariée, Lopou</span>
                </div>
              </div>
            </div>

            {/* RSVP & Warm Footer */}
            <div className="mt-8 pt-6 border-t border-wedding-gold/30 text-center">
              <p className="text-xs uppercase tracking-widest text-wedding-green font-semibold mb-1">
                Confirmation de Présence (RSVP)
              </p>
              <p className="text-xs text-neutral-700">
                WhatsApp : <span className="font-mono font-semibold text-wedding-orange">{wedding.contact.whatsappFormatted}</span>
              </p>
              <p className="font-serif italic text-sm text-neutral-800 mt-4">
                « {wedding.conclusionMessage} »
              </p>
            </div>

            {/* Corner frames */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-wedding-gold" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-wedding-gold" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-wedding-gold" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-wedding-gold" />
          </div>
        </div>
      </div>
    </div>
  );
};
