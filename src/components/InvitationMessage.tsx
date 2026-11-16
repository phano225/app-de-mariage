'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface InvitationMessageProps {
  wedding: WeddingConfig;
}

export const InvitationMessage: React.FC<InvitationMessageProps> = ({ wedding }) => {
  return (
    <section className="relative py-20 px-4 bg-paper-texture overflow-hidden">
      {/* Background Decorative Gold Accents */}
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-wedding-green-deep to-transparent pointer-events-none opacity-20" />
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-wedding-green-deep to-transparent pointer-events-none opacity-20" />

      <div className="relative max-w-3xl mx-auto z-10">
        {/* Card Enclosure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-white/90 rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-wedding-gold/40 shadow-card text-wedding-green-deep backdrop-blur-sm"
        >
          {/* Top Decorative Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-wedding-orange/10 border border-wedding-orange/30 flex items-center justify-center text-wedding-orange mb-3">
              <Quote className="w-5 h-5 fill-wedding-orange/20" />
            </div>
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-wedding-gold-dark font-semibold">
              Notre Invitation
            </span>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-wedding-gold to-transparent my-3" />
          </div>

          {/* Salutation */}
          <h2 className="font-serif text-2xl sm:text-3xl text-wedding-green font-semibold text-center mb-6">
            Chers parents, chers amis et chers proches,
          </h2>

          {/* Invitation Body Paragraphs */}
          <div className="space-y-5 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-wedding-green-deep/90 text-center">
            <p>
              C&apos;est avec une immense joie et beaucoup d&apos;émotion que nous vous invitons à partager avec nous un moment exceptionnel de notre vie : <span className="font-semibold text-wedding-green">la célébration de notre union</span>.
            </p>
            <p>
              Votre présence à nos côtés rendra cette journée encore plus belle et inoubliable.
            </p>
            <p>
              Nous serons très heureux de vous compter parmi nous pour célébrer cet heureux événement.
            </p>
          </div>

          {/* Signoff */}
          <div className="mt-10 pt-6 border-t border-wedding-gold/30 flex flex-col items-center text-center">
            <p className="font-serif italic text-base sm:text-lg text-wedding-orange font-medium">
              Avec tout notre amour,
            </p>
            <p className="font-script text-3xl sm:text-4xl text-wedding-green font-normal mt-2 tracking-wide">
              {wedding.coupleNames.display}
            </p>
          </div>

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-wedding-gold/50" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-wedding-gold/50" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-wedding-gold/50" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-wedding-gold/50" />
        </motion.div>
      </div>
    </section>
  );
};
