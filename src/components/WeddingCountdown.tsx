'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Sparkles } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface WeddingCountdownProps {
  wedding: WeddingConfig;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const WeddingCountdown: React.FC<WeddingCountdownProps> = ({ wedding }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date(wedding.weddingDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPast: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [wedding.weddingDate]);

  const timeUnits = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 px-4 bg-wedding-green-deep text-wedding-ivory-light overflow-hidden">
      {/* Subtle gold grid/pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C6A45A_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wedding-green/60 border border-wedding-gold/30 text-wedding-gold text-xs tracking-[0.25em] uppercase font-sans mb-4"
        >
          <Clock className="w-3.5 h-3.5 text-wedding-orange" />
          <span>Compte à rebours officiel</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold-foil mb-3"
        >
          {timeLeft.isPast ? "Le Grand Jour est Arrivé !" : "Chaque Seconde Nous Rapproche"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base font-sans tracking-widest text-wedding-ivory/80 uppercase mb-12"
        >
          {wedding.eventDateFormatted.fullFrench} • 11h00 (Heure d’Abidjan)
        </motion.p>

        {/* Countdown Grid */}
        {mounted && !timeLeft.isPast ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-wedding-green/40 border border-wedding-gold/30 shadow-card backdrop-blur-md group hover:border-wedding-gold/70 transition-all duration-300"
              >
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-wedding-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gold-bright tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] text-wedding-ivory/70 group-hover:text-wedding-orange transition-colors">
                  {unit.label}
                </span>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-2 w-8 h-0.5 bg-wedding-orange/40 rounded-full" />
              </motion.div>
            ))}
          </div>
        ) : mounted && timeLeft.isPast ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-3xl bg-wedding-green/60 border border-wedding-gold/50 shadow-seal text-center max-w-xl"
          >
            <Sparkles className="w-10 h-10 text-wedding-orange mx-auto mb-3 animate-bounce" />
            <h3 className="font-serif text-2xl sm:text-3xl text-gold-foil font-bold mb-2">
              Nous célébrons notre union aujourd’hui !
            </h3>
            <p className="font-sans text-sm sm:text-base text-wedding-ivory/90">
              Merci à chacun de vous pour vos prières, vos vœux d&apos;amour et votre présence inestimable à nos côtés.
            </p>
          </motion.div>
        ) : (
          /* Placeholder while mounting */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl opacity-30">
            {['Jours', 'Heures', 'Minutes', 'Secondes'].map((lbl) => (
              <div key={lbl} className="p-6 rounded-2xl bg-wedding-green/40 border border-wedding-gold/20 flex flex-col items-center">
                <span className="font-serif text-4xl font-bold text-gold-bright">--</span>
                <span className="mt-2 text-xs uppercase tracking-widest text-wedding-ivory/70">{lbl}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Note */}
        <div className="mt-10 flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-wedding-ivory/60">
          <Heart className="w-3.5 h-3.5 text-wedding-orange fill-wedding-orange" />
          <span>Fêtez avec nous en direct depuis la Côte d’Ivoire</span>
          <Heart className="w-3.5 h-3.5 text-wedding-orange fill-wedding-orange" />
        </div>
      </div>
    </section>
  );
};
