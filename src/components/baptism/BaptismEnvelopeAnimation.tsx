'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { BaptismConfig } from '@/data/baptism-config';

interface BaptismEnvelopeAnimationProps {
  baptism: BaptismConfig;
  onOpened: () => void;
}

export const BaptismEnvelopeAnimation: React.FC<BaptismEnvelopeAnimationProps> = ({
  baptism,
  onOpened,
}) => {
  const [stage, setStage] = useState<'closed' | 'opening' | 'opened'>('closed');

  const triggerOpen = () => {
    if (stage !== 'closed') return;
    setStage('opening');

    try {
      // Celestial gold and pearlescent white confetti
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#F5E6BE', '#B8DCFE', '#FFFFFF', '#7DB6F8'],
        ticks: 240,
        gravity: 0.7,
        scalar: 0.9,
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
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-b from-[#EBF4FE] via-[#F7FAFE] to-[#FAF8F3] select-none">
      {/* Background celestial glow & soft clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#B8DCFE]/40 blur-[130px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[#F5E6BE]/30 blur-[120px]" />
      </div>

      {/* Header Pill & Title */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6 sm:mb-8 z-10 max-w-sm sm:max-w-md px-4 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C5A059]/40 shadow-sm backdrop-blur-sm mb-3">
          <span className="text-base">🕊️</span>
          <span className="font-serif text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#C5A059] font-bold">
            Saint Baptême
          </span>
          <span className="text-base">🕊️</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-[#1E3A5F] font-normal">
          {baptism.child.fullName}
        </h1>

        <p className="mt-1 text-xs font-sans tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
          {baptism.eventDateFormatted.fullFrench}
        </p>
      </motion.div>

      {/* PASTEL BLUE & GOLD ENVELOPE */}
      <div className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[420px] aspect-[1.4/1] flex items-center justify-center z-20">
        {/* Shadow */}
        <div className="absolute inset-x-6 -bottom-4 h-6 bg-[#1E3A5F]/15 rounded-full blur-xl" />

        {/* Envelope Shell */}
        <div className="relative w-full h-full rounded-2xl bg-[#5B9FEA] border-2 border-[#D4AF37]/50 shadow-2xl overflow-visible">
          {/* 1. INTERIOR CARD (Rises gracefully) */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={
              stage === 'opening'
                ? { y: -190, opacity: 1 }
                : { y: 0, opacity: 0 }
            }
            transition={{ duration: 1.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-3 sm:inset-x-5 top-3 bottom-3 rounded-xl bg-gradient-to-b from-white to-[#F8FBFE] border-2 border-[#D4AF37]/60 shadow-2xl p-4 flex flex-col items-center justify-center text-center z-25"
          >
            {/* Baby Portrait */}
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md mb-2 ring-2 ring-[#B8DCFE]">
              <Image
                src={baptism.photo.src}
                alt={baptism.photo.alt}
                fill
                sizes="88px"
                className="object-cover object-top"
                priority
              />
            </div>

            <p className="font-serif text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-bold">
              Bénédiction Sacrée
            </p>
            <h2 className="font-serif text-lg sm:text-2xl text-[#1E3A5F] font-bold tracking-wide">
              {baptism.child.fullName}
            </h2>
            <div className="w-12 h-[1.5px] bg-[#D4AF37] my-1.5 rounded-full" />
            <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1E3A5F]/80 font-medium">
              {baptism.eventDateFormatted.fullFrench}
            </p>
            <p className="font-sans text-[9px] uppercase tracking-widest text-[#5B9FEA] font-bold">
              {baptism.locations.church.name}
            </p>
          </motion.div>

          {/* 2. ENVELOPE BODY FOLDS */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-20">
            {/* Left fold */}
            <div
              className="absolute inset-0 bg-[#72ACF0] border-r border-[#D4AF37]/30"
              style={{
                clipPath: 'polygon(0% 0%, 0% 100%, 50% 50%)',
                filter: 'drop-shadow(2px 0 4px rgba(0,0,0,0.1))',
              }}
            />
            {/* Right fold */}
            <div
              className="absolute inset-0 bg-[#72ACF0] border-l border-[#D4AF37]/30"
              style={{
                clipPath: 'polygon(100% 0%, 100% 100%, 50% 50%)',
                filter: 'drop-shadow(-2px 0 4px rgba(0,0,0,0.1))',
              }}
            />
            {/* Bottom fold */}
            <div
              className="absolute inset-0 bg-[#5A99E5] border-t border-[#D4AF37]/40"
              style={{
                clipPath: 'polygon(0% 100%, 100% 100%, 50% 50%)',
                filter: 'drop-shadow(0 -3px 6px rgba(0,0,0,0.15))',
              }}
            />
          </div>

          {/* 3. TOP FLAP WITH GOLD EMBOSSED SEAL */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={
              stage === 'opening'
                ? { rotateX: 180, zIndex: 10 }
                : { rotateX: 0, zIndex: 30 }
            }
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: 'top center' }}
            className="absolute inset-x-0 top-0 h-1/2 pointer-events-none z-30"
          >
            <div
              className="w-full h-full bg-[#82B9F6] border-b border-[#D4AF37]/50"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))',
              }}
            />
          </motion.div>

          {/* 4. CELESTIAL GOLD SEAL WITH DOVE */}
          <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-auto">
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
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#C5A059] via-[#F2D785] to-[#C5A059] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 active:scale-95 shadow-xl border-2 border-white">
                  <div className="w-full h-full rounded-full border border-[#8C6D2B] flex flex-col items-center justify-center text-center bg-[#E5C16C]">
                    <span className="text-xl sm:text-2xl drop-shadow-sm">🕊️</span>
                    <span className="text-[7px] font-sans tracking-[0.2em] uppercase text-[#543F14] font-bold mt-0.5">
                      GRÂCE
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* CALL TO ACTION BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 text-center z-10 w-full max-w-xs"
      >
        <button
          onClick={triggerOpen}
          disabled={stage !== 'closed'}
          className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#D4AF37] bg-white hover:bg-gradient-to-r hover:from-[#7DB6F8] hover:to-[#5B9FEA] text-[#1E3A5F] hover:text-white font-serif text-sm tracking-[0.25em] uppercase shadow-lg transition-all duration-300 active:scale-95 disabled:opacity-50"
        >
          <span>Ouvrir le Faire-Part</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        </button>

        <p className="mt-2.5 text-[11px] font-serif italic tracking-wider text-[#1E3A5F]/70">
          Touchez le sceau pour découvrir l&apos;invitation
        </p>
      </motion.div>
    </div>
  );
};
