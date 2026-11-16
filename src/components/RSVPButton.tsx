'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Heart, Sparkles } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface RSVPButtonProps {
  wedding: WeddingConfig;
}

export const RSVPButton: React.FC<RSVPButtonProps> = ({ wedding }) => {
  // Format WhatsApp international link cleanly
  const rawNumber = wedding.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(wedding.contact.rsvpMessage);
  const whatsappUrl = `https://wa.me/${rawNumber}?text=${encodedMessage}`;

  return (
    <section className="relative py-24 px-4 bg-wedding-green-deep text-wedding-ivory-light overflow-hidden" id="rsvp">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-wedding-orange/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wedding-orange/20 border border-wedding-orange/40 text-wedding-orange text-xs tracking-[0.25em] uppercase font-sans mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-wedding-orange animate-pulse" />
          <span>Réponse souhaitée (RSVP)</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold-foil mb-4"
        >
          Confirmez Votre Présence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base font-serif italic text-wedding-ivory/90 max-w-xl leading-relaxed mb-10"
        >
          Votre présence est notre plus beau cadeau. Cliquez ci-dessous pour nous envoyer votre message de confirmation directement sur WhatsApp.
        </motion.p>

        {/* The Official WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white font-sans text-base sm:text-lg font-bold tracking-wide shadow-seal hover:shadow-gold hover:scale-[1.03] active:scale-98 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300 fill-current" />
            <span>Confirmer ma présence</span>
            <Heart className="w-5 h-5 text-wedding-orange fill-wedding-orange group-hover:scale-125 transition-transform duration-300" />
          </a>

          {/* Important Clarification Note */}
          <div className="mt-5 p-4 rounded-2xl bg-wedding-green/40 border border-wedding-gold/20 text-left flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-wedding-gold flex-shrink-0 mt-0.5" />
            <p className="text-xs font-sans text-wedding-ivory/80 leading-relaxed">
              <span className="font-semibold text-wedding-gold">Information importante :</span> Le bouton ouvre votre application WhatsApp avec le message prérempli vers le numéro <span className="font-mono text-wedding-orange font-semibold">{wedding.contact.whatsappFormatted}</span>. Veuillez cliquer sur &quot;Envoyer&quot; dans WhatsApp pour valider définitivement votre confirmation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
