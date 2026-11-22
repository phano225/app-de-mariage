'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { WeddingConfig } from '@/data/wedding-config';

interface EnvelopeAnimationProps {
  wedding: WeddingConfig;
  onOpened: () => void;
}

export const EnvelopeAnimation: React.FC<EnvelopeAnimationProps> = ({
  wedding,
  onOpened,
}) => {
  const [stage, setStage] = useState<'closed' | 'opening' | 'opened'>('closed');

  const triggerOpen = () => {
    if (stage !== 'closed') return;
    setStage('opening');

    try {
      confetti({
        particleCount: 60,
        spread: 75,
        origin: { y: 0.55 },
        colors: ['#C6A45A', '#E66C32', '#F5EBDD', '#DFBE72'],
        ticks: 200,
        gravity: 0.8,
        scalar: 0.95,
      });
    } catch {
      // fallback
    }

    setTimeout(() => {
      setStage('opened');
      onOpened();
    }, 2400);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-emerald-luxury select-none">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-wedding-green/20 blur-[130px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-wedding-orange/10 blur-[120px]" />
      </div>

      {/* Header Haute Papeterie */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6 sm:mb-8 z-10 max-w-sm sm:max-w-md px-4 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[1px] bg-wedding-gold/40" />
          <span className="font-serif text-[11px] sm:text-xs tracking-[0.3em] uppercase text-wedding-gold font-medium">
            Faire-Part Officiel
          </span>
          <div className="w-8 h-[1px] bg-wedding-gold/40" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wider text-gold-foil font-normal">
          {wedding.coupleNames.display}
        </h1>

        <p className="mt-1 text-xs font-sans tracking-[0.25em] text-wedding-ivory/80 uppercase">
          {wedding.eventDateFormatted.fullFrench}
        </p>
      </motion.div>

      {/* ENVELOPE (Pure Geometric Centering) */}
      <div className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[420px] aspect-[1.4/1] flex items-center justify-center z-20">
        {/* Shadow */}
        <div className="absolute inset-x-6 -bottom-4 h-6 bg-black/60 rounded-full blur-xl" />

        {/* Envelope Shell */}
        <div className="relative w-full h-full rounded-2xl bg-[#092218] border border-wedding-gold/50 shadow-envelope overflow-visible">
          
          {/* 1. LA CARTE INTÉRIEURE (S'élève majestueusement) */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={
              stage === 'opening'
                ? { y: -190, opacity: 1 }
                : { y: 0, opacity: 0 }
            }
            transition={{ duration: 1.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-3 sm:inset-x-5 top-3 bottom-3 rounded-xl bg-paper-texture border-2 border-wedding-gold/70 shadow-2xl p-4 flex flex-col items-center justify-center text-center z-25"
          >
            {/* Photo du Couple */}
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-wedding-gold shadow-md mb-2">
              <Image
                src={wedding.gallery[0]?.src || '/images/demos/mariage/cover.jpg'}
                alt={wedding.coupleNames.display}
                fill
                sizes="88px"
                className="object-cover object-top"
                priority
              />
            </div>

            <p className="font-serif text-[10px] tracking-[0.25em] uppercase text-wedding-gold-dark font-bold">
              Invitation d’Honneur
            </p>
            <h2 className="font-serif text-lg sm:text-2xl text-wedding-green font-bold tracking-wide">
              {wedding.coupleNames.display}
            </h2>
            <div className="w-12 h-[1.5px] bg-wedding-orange my-1.5 rounded-full" />
            <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-wedding-green-deep/90 font-medium">
              {wedding.eventDateFormatted.fullFrench}
            </p>
            <p className="font-sans text-[9px] uppercase tracking-widest text-wedding-orange font-semibold">
              {wedding.locations[0]?.name ? `${wedding.locations[0].name} • ${wedding.locations[0].city}` : 'Côte d’Ivoire'}
            </p>
          </motion.div>

          {/* 2. LE CORPS DE L'ENVELOPPE (Plis géométriques convergeant à 50% 50%) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-20">
            {/* Pli gauche */}
            <div
              className="absolute inset-0 bg-[#0F3525] border-r border-wedding-gold/25"
              style={{
                clipPath: 'polygon(0% 0%, 0% 100%, 50% 50%)',
                filter: 'drop-shadow(2px 0 4px rgba(0,0,0,0.3))',
              }}
            />
            {/* Pli droit */}
            <div
              className="absolute inset-0 bg-[#0F3525] border-l border-wedding-gold/25"
              style={{
                clipPath: 'polygon(100% 0%, 100% 100%, 50% 50%)',
                filter: 'drop-shadow(-2px 0 4px rgba(0,0,0,0.3))',
              }}
            />
            {/* Pli bas */}
            <div
              className="absolute inset-0 bg-[#0B2C1F] border-t border-wedding-gold/35"
              style={{
                clipPath: 'polygon(0% 100%, 100% 100%, 50% 50%)',
                filter: 'drop-shadow(0 -3px 6px rgba(0,0,0,0.35))',
              }}
            />
          </div>

          {/* 3. LE RABAT SUPÉRIEUR (Point à 50% 50%, s'ouvre vers le haut) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={
              stage === 'opening'
                ? {
                    rotateX: 180,
                    zIndex: 5,
                    transition: { duration: 0.85, ease: 'easeInOut' },
                  }
                : { rotateX: 0 }
            }
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-x-0 top-0 h-full pointer-events-none z-30"
          >
            <div
              className="w-full h-full bg-[#174D36] border-b border-wedding-gold/60"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 50%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
              }}
            />
          </motion.div>

          {/* 4. LE SCEAU DE CIRE (Positionné STRICTEMENT au centre absolu dans un conteneur non-altéré) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center pointer-events-auto">
            <AnimatePresence>
              {stage === 'closed' && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.4, opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.25 }}
                  onClick={triggerOpen}
                  className="cursor-pointer group select-none"
                  title="Cliquer pour ouvrir"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full wax-seal flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 active:scale-95 shadow-seal">
                    <div className="w-full h-full rounded-full wax-seal-inner border border-wedding-gold/70 flex flex-col items-center justify-center text-center">
                      {/* Monogramme C & B rigoureusement centré */}
                      <div className="flex items-center justify-center gap-1 leading-none">
                        <span className="font-serif text-sm sm:text-base font-bold text-wedding-ivory-light">
                          {wedding.coupleNames.bride.charAt(0)}
                        </span>
                        <span className="text-[10px] text-wedding-gold font-light">&amp;</span>
                        <span className="font-serif text-sm sm:text-base font-bold text-wedding-ivory-light">
                          {wedding.coupleNames.groom.charAt(0)}
                        </span>
                      </div>
                      <span className="text-[8px] font-sans tracking-[0.2em] uppercase text-wedding-gold font-semibold mt-1">
                        {wedding.eventDateFormatted.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BOUTON HAUTE PAPETERIE */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 text-center z-10 w-full max-w-xs"
      >
        <button
          onClick={triggerOpen}
          disabled={stage !== 'closed'}
          className="group relative w-full inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-wedding-gold/70 bg-[#0E3324] hover:bg-wedding-gold text-wedding-ivory-light hover:text-[#0E3324] font-serif text-sm tracking-[0.25em] uppercase shadow-lg transition-all duration-300 active:scale-95 disabled:opacity-50"
        >
          <span>Ouvrir l&apos;Invitation</span>
        </button>

        <p className="mt-2.5 text-[11px] font-serif italic tracking-wider text-wedding-ivory/70">
          Touchez l&apos;enveloppe pour découvrir le faire-part
        </p>
      </motion.div>
    </div>
  );
};
