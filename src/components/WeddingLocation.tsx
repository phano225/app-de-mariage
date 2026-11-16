'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink, ShieldCheck } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface WeddingLocationProps {
  wedding: WeddingConfig;
}

export const WeddingLocation: React.FC<WeddingLocationProps> = ({ wedding }) => {
  return (
    <section className="relative py-24 px-4 bg-wedding-green-deep text-wedding-ivory-light overflow-hidden" id="localisation">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-wedding-green/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wedding-green/60 border border-wedding-gold/30 text-wedding-gold text-xs tracking-[0.25em] uppercase font-sans mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-wedding-orange" />
            <span>Accès &amp; Itinéraires</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold-foil"
          >
            Lieux de la Célébration
          </motion.h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-wedding-gold to-transparent my-4" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm font-sans tracking-widest text-wedding-ivory/80 uppercase max-w-xl"
          >
            Rejoignez-nous en toute sérénité grâce au guidage GPS Google Maps direct
          </motion.p>
        </div>

        {/* Two Distinct Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wedding.locations.map((loc, index) => {
            const isReception = loc.id === 'cour-lopou';

            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative rounded-3xl p-8 sm:p-10 bg-wedding-green/30 border border-wedding-gold/30 shadow-card backdrop-blur-md flex flex-col justify-between group hover:border-wedding-gold/70 transition-all duration-300"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-wedding-orange font-semibold">
                      {loc.category}
                    </span>
                    <MapPin className="w-5 h-5 text-wedding-gold group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Name & City */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-wedding-ivory font-bold mb-2">
                    {loc.name}
                  </h3>

                  <p className="text-sm font-sans text-wedding-ivory/70 mb-4">
                    {loc.address} • {loc.city}, {loc.country}
                  </p>

                  {/* Access Tip */}
                  {loc.accessTip && (
                    <p className="text-xs font-serif italic text-wedding-ivory/80 leading-relaxed mb-6">
                      💡 {loc.accessTip}
                    </p>
                  )}
                </div>

                {/* Primary Action Button */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-wedding-orange to-wedding-orange-warm text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-seal hover:shadow-gold hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Ouvrir l&apos;itinéraire Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* Border ornament */}
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-wedding-gold/40 rounded-br-md" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
