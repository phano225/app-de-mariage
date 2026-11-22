'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { MemorialConfig } from '@/data/memorial-config';

interface MemorialCandleAnimationProps {
  memorial: MemorialConfig;
  onOpened: () => void;
}

export const MemorialCandleAnimation: React.FC<MemorialCandleAnimationProps> = ({
  memorial,
  onOpened,
}) => {
  const [lit, setLit] = useState(false);

  const handleLightCandle = () => {
    if (lit) return;
    setLit(true);

    setTimeout(() => {
      onOpened();
    }, 2400);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-b from-[#0B0D11] via-[#10131A] to-[#07080B] text-[#F7F6F2] select-none">
      {/* Ambient background light when candle is lit */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={
            lit
              ? { scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }
              : { scale: 1, opacity: 0.1 }
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FFAE42]/25 blur-[120px]"
        />
      </div>

      {/* Header Pill & Dignified Title */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 z-10 max-w-sm sm:max-w-md px-4 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A059]/40 shadow-sm backdrop-blur-sm mb-4">
          <span className="text-sm">🕯️</span>
          <span className="font-serif text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#C5A059] font-medium">
            Faire-Part d&apos;Hommage &amp; d&apos;Obsèques
          </span>
          <span className="text-sm">🕯️</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wider text-[#F7F6F2] font-normal leading-tight">
          {memorial.deceased.fullName}
        </h1>

        <p className="mt-1 text-sm sm:text-base font-serif italic text-[#C5A059]">
          {memorial.deceased.affectionateName}
        </p>

        <p className="mt-2 text-xs font-sans tracking-[0.25em] text-[#8A92A0] uppercase">
          {memorial.deceased.birthYear} — {memorial.deceased.deathYear} • 85 Ans
        </p>
      </motion.div>

      {/* INTERACTIVE MEMORIAL CANDLE */}
      <div className="relative w-full max-w-[280px] aspect-[4/5] flex flex-col items-center justify-center z-20">
        <div
          onClick={handleLightCandle}
          className="relative cursor-pointer group flex flex-col items-center justify-center p-4"
          title="Touchez pour allumer la flamme du souvenir"
        >
          {/* THE FLAME */}
          <div className="relative w-12 h-20 flex items-center justify-center mb-1">
            {lit ? (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.08, 0.96, 1.04, 1],
                  opacity: 1,
                  y: [-1, 1, -1],
                }}
                transition={{
                  scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative flex items-center justify-center"
              >
                {/* Outer Glow */}
                <div className="absolute w-24 h-24 rounded-full bg-[#FFAE42]/40 blur-xl animate-pulse" />
                {/* Yellow Flame */}
                <div
                  className="w-8 h-16 bg-gradient-to-t from-[#E65100] via-[#FFAE42] to-[#FFF9C4] rounded-[50%_50%_35%_35%] shadow-[0_0_20px_#FFAE42]"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 174, 66, 0.9))',
                  }}
                />
                {/* Core White/Blue Flame */}
                <div className="absolute bottom-1 w-3 h-6 bg-gradient-to-t from-[#64B5F6] via-white to-transparent rounded-[50%_50%_30%_30%] opacity-90" />
              </motion.div>
            ) : (
              /* Wick when unlit */
              <div className="flex flex-col items-center">
                <div className="w-1 h-5 bg-[#3A3D45] rounded-full mb-1 group-hover:bg-[#FFAE42] transition-colors" />
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#FFAE42]/80 group-hover:text-[#FFAE42] font-semibold animate-bounce">
                  ✨ Toucher
                </span>
              </div>
            )}
          </div>

          {/* CANDLE BODY */}
          <div className="relative w-24 sm:w-28 h-40 rounded-t-xl rounded-b-2xl bg-gradient-to-r from-[#EDE8DC] via-[#FAF7F0] to-[#E3DDCF] shadow-2xl border border-white/20 flex flex-col items-center justify-between p-3 overflow-hidden">
            {/* Wax drips texture */}
            <div className="w-full flex justify-around opacity-40">
              <div className="w-2 h-4 bg-white rounded-b-full" />
              <div className="w-2.5 h-7 bg-white rounded-b-full" />
              <div className="w-1.5 h-3 bg-white rounded-b-full" />
            </div>

            {/* Medallion on Candle with Cross & Initials */}
            <div className="w-12 h-12 rounded-full border border-[#C5A059]/70 bg-gradient-to-tr from-[#1A1D24] to-[#2B303C] flex flex-col items-center justify-center text-center shadow-inner">
              <span className="text-xs text-[#C5A059] font-serif">✝</span>
              <span className="text-[8px] font-serif tracking-widest uppercase text-[#F7F6F2] font-bold">
                P.K
              </span>
            </div>

            {/* Bottom brass ring */}
            <div className="w-full h-2 rounded-full bg-gradient-to-r from-[#C5A059] via-[#F2D785] to-[#C5A059] opacity-80" />
          </div>

          {/* CANDLE STAND / BRASS BASE */}
          <div className="w-36 sm:w-40 h-4 rounded-full bg-gradient-to-r from-[#8C6D2B] via-[#D4AF37] to-[#8C6D2B] shadow-xl border-t border-white/30 -mt-1.5" />
          <div className="w-28 sm:w-32 h-2.5 rounded-full bg-[#543F14] shadow-md -mt-1" />
        </div>
      </div>

      {/* CALL TO ACTION BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-center z-10 w-full max-w-xs"
      >
        <button
          onClick={handleLightCandle}
          disabled={lit}
          className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#C5A059]/60 bg-[#13171F] hover:bg-[#C5A059] text-[#F7F6F2] hover:text-[#0B0D11] font-serif text-sm tracking-[0.2em] uppercase shadow-lg transition-all duration-300 active:scale-95 disabled:opacity-50"
        >
          <span>{lit ? 'Flamme Allumée...' : 'Allumer la Bougie'}</span>
          <span className="text-xs">🕯️</span>
        </button>

        <p className="mt-2.5 text-[11px] font-serif italic tracking-wider text-[#8A92A0]">
          {lit
            ? 'Recueillement en mémoire de Pépé Kouassi...'
            : 'Touchez la bougie pour allumer la flamme du souvenir'}
        </p>
      </motion.div>
    </div>
  );
};
