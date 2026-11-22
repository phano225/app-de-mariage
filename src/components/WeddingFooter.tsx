'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface WeddingFooterProps {
  wedding: WeddingConfig;
}

export const WeddingFooter: React.FC<WeddingFooterProps> = ({ wedding }) => {
  return (
    <footer className="relative py-24 px-4 bg-emerald-luxury text-wedding-ivory-light border-t border-wedding-gold/30 overflow-hidden">
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        {/* Monogram Seal Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-16 h-16 rounded-full border-2 border-wedding-gold/60 flex items-center justify-center bg-wedding-green-deep/80 shadow-gold mb-6"
        >
          <span className="font-serif text-xl font-bold text-gold-bright tracking-wider">
            {wedding.coupleNames.monogram}
          </span>
        </motion.div>

        {/* Warm Conclusion Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gold-foil max-w-2xl leading-relaxed mb-6"
        >
          « {wedding.conclusionMessage} »
        </motion.p>

        {/* Names */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl text-wedding-ivory-light tracking-wide mb-4"
        >
          {wedding.coupleNames.display}
        </motion.h3>

        {/* Date and Location recap */}
        <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-wedding-orange font-semibold mb-8">
          Samedi 30 Janvier 2027 • Dabou &amp; Lopou, Côte d’Ivoire
        </p>

        {/* Divider */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mb-8" />

        {/* Legal & Platform credit */}
        <div className="flex flex-col items-center gap-2 text-[11px] font-sans text-wedding-ivory/50">
          <p className="flex items-center gap-1.5">
            Célébration d’Amour &amp; d’Union perpétuelle
            <Heart className="w-3 h-3 text-wedding-orange fill-wedding-orange" />
          </p>
          <p>© {wedding.eventDateFormatted.year} {wedding.coupleNames.display} • Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
