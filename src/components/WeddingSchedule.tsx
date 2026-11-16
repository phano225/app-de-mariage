'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, PartyPopper, Clock, MapPin, ExternalLink } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface WeddingScheduleProps {
  wedding: WeddingConfig;
}

export const WeddingSchedule: React.FC<WeddingScheduleProps> = ({ wedding }) => {
  return (
    <section className="relative py-24 px-4 bg-paper-texture overflow-hidden" id="programme">
      <div className="relative max-w-4xl mx-auto z-10">
        {/* Section Pill & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wedding-green/10 border border-wedding-green/30 text-wedding-green text-xs tracking-[0.25em] uppercase font-sans mb-3"
          >
            <Clock className="w-3.5 h-3.5 text-wedding-orange" />
            <span>Déroulement officiel</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-wedding-green font-bold tracking-tight"
          >
            Programme du Mariage
          </motion.h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-wedding-gold to-transparent my-4" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm uppercase tracking-widest text-wedding-green-deep/70"
          >
            Samedi 30 Janvier 2027 • Deux temps forts inoubliables
          </motion.p>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {wedding.schedule.map((item, index) => {
            const isCivil = item.id === 'civil';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-2 shadow-card transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? 'bg-gradient-to-b from-white to-wedding-orange/5 border-wedding-orange/40'
                    : 'bg-white border-wedding-gold/40'
                }`}
              >
                {/* Top Badge Time */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-wedding-green text-wedding-gold text-sm font-semibold tracking-wider font-sans shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-wedding-orange" />
                      {item.time}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-wedding-green/5 border border-wedding-gold/30 flex items-center justify-center text-wedding-green">
                      {isCivil ? (
                        <Landmark className="w-6 h-6 text-wedding-green" />
                      ) : (
                        <PartyPopper className="w-6 h-6 text-wedding-orange" />
                      )}
                    </div>
                  </div>

                  {/* Title & Location */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-wedding-green font-bold mb-2">
                    {item.title}
                  </h3>

                  <div className="flex items-start gap-2 text-wedding-green-deep font-sans text-sm sm:text-base font-medium mt-3">
                    <MapPin className="w-4 h-4 text-wedding-orange flex-shrink-0 mt-1" />
                    <span>{item.location}</span>
                  </div>

                  <p className="mt-4 font-serif text-wedding-green-deep/80 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action: Map link */}
                <div className="mt-8 pt-6 border-t border-wedding-gold/20 flex items-center justify-between">
                  <a
                    href={item.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-wedding-orange hover:text-wedding-green transition-colors group"
                  >
                    <span>Itinéraire Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {item.coordinates && (
                    <span className="text-[11px] font-mono text-wedding-green-deep/60">
                      GPS : 5.419, -4.469
                    </span>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-wedding-gold/40 rounded-tr-md" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
