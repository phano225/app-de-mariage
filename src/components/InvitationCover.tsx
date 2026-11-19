'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface InvitationCoverProps {
  wedding: WeddingConfig;
}

export const InvitationCover: React.FC<InvitationCoverProps> = ({ wedding }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-wedding-green-deep">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-wedding-green/30 blur-[100px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-wedding-orange/15 blur-[90px]" />
      </div>

      <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center text-center z-10">
        {/* Monogram Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-wedding-green/80 border border-wedding-gold/40 text-wedding-gold shadow-lg backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-wedding-orange" />
          <span className="font-serif text-sm tracking-[0.3em] uppercase text-wedding-ivory-light font-medium">
            Faire-part de Mariage
          </span>
          <Sparkles className="w-4 h-4 text-wedding-orange" />
        </motion.div>

        {/* Couple Main Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-wider font-normal text-gold-foil mb-3"
        >
          {wedding.coupleNames.display}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-serif italic text-wedding-ivory/90 mb-8 max-w-xl"
        >
          « {wedding.tagline} »
        </motion.p>

        {/* Photograph 1 Frame: Portrait with red heart balloon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-wedding-gold/50 via-wedding-green/40 to-wedding-orange/40 shadow-2xl"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-wedding-gold/30">
            {/* Main Couple Photo */}
            <Image
              src="/assets/C&B.jpeg"
              alt="Portrait officiel de Carole et Benjamin"
              fill
              priority
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Bottom Photo Caption Banner */}
            <div className="absolute bottom-0 inset-x-0 p-5 text-center flex flex-col items-center">
              <span className="font-serif text-lg tracking-widest text-wedding-ivory-light font-semibold">
                Carole &amp; Benjamin
              </span>
              <span className="inline-flex items-center gap-1.5 mt-1 text-xs uppercase tracking-widest text-wedding-orange font-medium">
                <Calendar className="w-3.5 h-3.5" />
                30 Janvier 2027 • Côte d’Ivoire
              </span>
            </div>
          </div>

          {/* Floating Decorative Gold Corners */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-wedding-gold rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-wedding-gold rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-wedding-gold rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-wedding-gold rounded-br-lg" />
        </motion.div>

        {/* Date & Location Pill Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-sans tracking-widest uppercase text-wedding-ivory/80"
        >
          <span className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-wedding-orange fill-wedding-orange" />
            Cérémonie Civile à Dabou
          </span>
          <span className="text-wedding-gold">•</span>
          <span className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-wedding-orange fill-wedding-orange" />
            Réception dans la cour familiale de Lopou
          </span>
        </motion.div>
      </div>
    </section>
  );
};
