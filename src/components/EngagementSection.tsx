'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface EngagementSectionProps {
  wedding: WeddingConfig;
}

export const EngagementSection: React.FC<EngagementSectionProps> = ({ wedding }) => {
  return (
    <section className="relative py-20 px-4 bg-wedding-green-deep text-wedding-ivory-light overflow-hidden">
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10">
        
        {/* Photo 2 : Alliances & Hands Frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md aspect-[4/3] rounded-3xl p-3 bg-gradient-to-br from-wedding-gold/60 via-wedding-green/40 to-wedding-orange/40 shadow-2xl"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-wedding-gold/30">
            <Image
              src="/assets/C&B 2.jpeg"
              alt="Mains enlacées de Carole et Benjamin avec alliance et bague de mariage"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 450px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-sans text-wedding-ivory">
              <span className="font-serif italic text-gold-bright">L’Alliance éternelle</span>
              <span className="text-[10px] tracking-widest uppercase text-wedding-orange font-semibold">C &amp; B</span>
            </div>
          </div>
        </motion.div>

        {/* Textual Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-wedding-green/60 border border-wedding-gold/30 text-wedding-gold text-xs tracking-[0.25em] uppercase font-sans">
            <Heart className="w-3.5 h-3.5 text-wedding-orange fill-wedding-orange" />
            <span>Notre Promesse</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-gold-foil font-bold">
            Deux Mains Unies Pour Toujours
          </h2>

          <p className="font-serif text-base sm:text-lg text-wedding-ivory/90 leading-relaxed italic">
            « Devant Dieu, nos familles et nos amis, nos cœurs et nos vies s’unissent dans la fidélité, le respect et l’amour inconditionnel. »
          </p>

          <div className="pt-2 flex items-center justify-center md:justify-start gap-4 text-xs font-sans uppercase tracking-widest text-wedding-gold">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-wedding-orange" />
              Alliance &amp; Fidélité
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-wedding-orange" />
              Bénédiction
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
