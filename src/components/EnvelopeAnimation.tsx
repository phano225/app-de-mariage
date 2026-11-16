'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
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

    // Trigger subtle, elegant gold and orange confetti burst
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#C6A45A', '#E66C32', '#F5EBDD', '#DFBE72'],
        ticks: 180,
        gravity: 0.8,
        scalar: 0.9,
      });
    } catch {
      // Confetti is a visual enhancement, fails gracefully if canvas unsupported
    }

    // Complete animation sequence timing
    setTimeout(() => {
      setStage('opened');
      onOpened();
    }, 1800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-emerald-luxury">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-wedding-green/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-wedding-orange/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-wedding-gold/10 blur-3xl" />
      </div>

      {/* Header Intro Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-8 z-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wedding-green-deep/80 border border-wedding-gold/30 text-wedding-gold text-xs tracking-[0.25em] uppercase font-sans shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-wedding-orange animate-pulse" />
          Faire-part officiel de mariage
          <Sparkles className="w-3.5 h-3.5 text-wedding-orange animate-pulse" />
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif tracking-wider text-gold-foil">
          {wedding.coupleNames.display}
        </h1>
        <p className="mt-1 text-sm font-sans tracking-widest text-wedding-ivory/80 uppercase">
          {wedding.eventDateFormatted.fullFrench}
        </p>
      </motion.div>

      {/* Interactive Envelope Container */}
      <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] flex items-center justify-center z-20 perspective-[1000px]">
        {/* ENVELOPE SHADOW */}
        <div className="absolute inset-x-8 bottom-2 h-10 bg-black/40 rounded-full blur-xl transform scale-95" />

        {/* ENVELOPE WRAPPER */}
        <motion.div
          animate={
            stage === 'opening'
              ? { scale: [1, 1.03, 0.98, 1], y: [0, -10, 10, 0] }
              : {}
          }
          transition={{ duration: 1.2 }}
          className="relative w-full h-full rounded-2xl shadow-envelope overflow-hidden border border-wedding-gold/40 bg-wedding-green-deep"
        >
          {/* Inner Card that slides up */}
          <motion.div
            initial={{ y: 0 }}
            animate={stage === 'opening' ? { y: -220, opacity: 1 } : { y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-6 top-6 bottom-6 rounded-xl bg-paper-texture border border-wedding-gold/50 shadow-card p-6 flex flex-col items-center justify-center text-center z-10"
          >
            <div className="w-12 h-12 rounded-full border border-wedding-gold/40 flex items-center justify-center mb-2 text-wedding-gold">
              <Heart className="w-6 h-6 text-wedding-orange fill-wedding-orange/30" />
            </div>
            <p className="font-serif text-xs tracking-[0.3em] uppercase text-wedding-green-deep font-semibold">
              Union Sacrée
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-wedding-green font-bold tracking-wide mt-1">
              {wedding.coupleNames.display}
            </h2>
            <div className="w-16 h-0.5 bg-wedding-gold my-2" />
            <p className="font-sans text-[11px] uppercase tracking-widest text-wedding-green-deep/70">
              Samedi 30 Janvier 2027
            </p>
            <p className="font-sans text-[10px] uppercase tracking-wider text-wedding-orange font-medium mt-1">
              Dabou &amp; Lopou
            </p>
          </motion.div>

          {/* Envelope Pocket Body (Bottom and side folds) */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Left triangle flap */}
            <div
              className="absolute left-0 bottom-0 top-0 w-1/2 bg-wedding-green border-r border-wedding-gold/30"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                boxShadow: 'inset 0 0 25px rgba(0,0,0,0.4)',
              }}
            />
            {/* Right triangle flap */}
            <div
              className="absolute right-0 bottom-0 top-0 w-1/2 bg-wedding-green border-l border-wedding-gold/30"
              style={{
                clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                boxShadow: 'inset 0 0 25px rgba(0,0,0,0.4)',
              }}
            />
            {/* Bottom triangle flap */}
            <div
              className="absolute inset-x-0 bottom-0 h-3/5 bg-wedding-green-deep border-t border-wedding-gold/40"
              style={{
                clipPath: 'polygon(0 100%, 50% 25%, 100% 100%)',
                boxShadow: '0 -4px 15px rgba(0,0,0,0.3)',
              }}
            />
          </div>

          {/* Top Flap (Rabat) that folds open */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={
              stage === 'opening'
                ? {
                    rotateX: 180,
                    zIndex: 5,
                    transition: { duration: 0.8, ease: 'easeInOut' },
                  }
                : { rotateX: 0 }
            }
            style={{ transformOrigin: 'top center' }}
            className="absolute inset-x-0 top-0 h-1/2 z-30"
          >
            <div
              className="w-full h-full bg-wedding-green-light border-b border-wedding-gold/60 shadow-lg"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
              }}
            />
          </motion.div>

          {/* WAX SEAL (Sceau de cire orangé & doré) */}
          <AnimatePresence>
            {stage === 'closed' && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer group"
                onClick={triggerOpen}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full wax-seal flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110">
                  {/* Wax scalloped edges */}
                  <div className="w-full h-full rounded-full wax-seal-inner border-2 border-wedding-gold/60 flex flex-col items-center justify-center text-center">
                    <span className="font-serif text-base sm:text-lg font-bold text-wedding-ivory-light tracking-wider drop-shadow-md">
                      {wedding.coupleNames.initials}
                    </span>
                    <span className="text-[9px] font-sans tracking-widest uppercase text-wedding-gold-bright font-semibold">
                      2027
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Button Invitation to open */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 text-center z-10"
      >
        <button
          onClick={triggerOpen}
          disabled={stage !== 'closed'}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-sunset text-white font-sans font-semibold text-base sm:text-lg tracking-wider uppercase shadow-seal hover:shadow-gold hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
        >
          <Sparkles className="w-5 h-5 text-wedding-ivory group-hover:rotate-12 transition-transform duration-300" />
          <span>Ouvrir mon invitation</span>
          <Heart className="w-5 h-5 text-wedding-ivory group-hover:scale-125 fill-current transition-transform duration-300" />
        </button>
        <p className="mt-3 text-xs font-sans tracking-widest text-wedding-ivory/60 uppercase">
          Cliquez pour découvrir le faire-part interactif
        </p>
      </motion.div>
    </div>
  );
};
