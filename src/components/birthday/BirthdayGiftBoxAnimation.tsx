'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Cake, Gift, PartyPopper } from 'lucide-react';
import { BirthdayConfig } from '@/data/birthday-config';

interface BirthdayGiftBoxAnimationProps {
  birthday: BirthdayConfig;
  onOpened: () => void;
}

export const BirthdayGiftBoxAnimation: React.FC<BirthdayGiftBoxAnimationProps> = ({
  birthday,
  onOpened,
}) => {
  const [stage, setStage] = useState<'closed' | 'opening' | 'opened'>('closed');

  const triggerOpen = () => {
    if (stage !== 'closed') return;
    setStage('opening');

    // Confetti burst from multiple angles
    try {
      // Center burst
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: birthday.theme.confettiColors,
        ticks: 250,
        gravity: 0.8,
        scalar: 1.1,
      });

      // Left blast
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: 0.1, y: 0.7 },
          colors: birthday.theme.confettiColors,
        });
      }, 250);

      // Right blast
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: 0.9, y: 0.7 },
          colors: birthday.theme.confettiColors,
        });
      }, 400);
    } catch {
      // fallback
    }

    setTimeout(() => {
      setStage('opened');
      onOpened();
    }, 2500);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-b from-[#FFF5FA] via-[#FFFDF5] to-[#F3F8FF] select-none">
      {/* Decorative floating balloons background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-10, 15, -10], rotate: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-pink-300/30 blur-2xl"
        />
        <motion.div
          animate={{ y: [10, -15, 10], rotate: [4, -4, 4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-12 w-52 h-52 rounded-full bg-yellow-300/30 blur-2xl"
        />
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-10 left-1/4 w-60 h-60 rounded-full bg-cyan-300/25 blur-3xl"
        />
      </div>

      {/* Floating mini party icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden text-2xl sm:text-3xl">
        <motion.span
          animate={{ y: [-6, 6, -6], rotate: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-12 left-8 sm:left-24"
        >
          🎈
        </motion.span>
        <motion.span
          animate={{ y: [6, -6, 6], rotate: [0, -20, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-24 right-10 sm:right-28"
        >
          🧁
        </motion.span>
        <motion.span
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-12"
        >
          ⭐
        </motion.span>
        <motion.span
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 3.8, repeat: Infinity }}
          className="absolute bottom-24 right-12"
        >
          🎉
        </motion.span>
      </div>

      {/* Header Pill & Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6 sm:mb-8 z-10 max-w-sm sm:max-w-md px-4 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-[#FF2E93] text-xs font-black tracking-wider uppercase mb-3 shadow-sm">
          <PartyPopper className="w-4 h-4 text-[#FF2E93]" />
          <span>Grande Fête d&apos;Anniversaire</span>
          <Sparkles className="w-4 h-4 text-[#FFD100]" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
          {birthday.celebrant.firstName} fête ses{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E93] via-[#FFD100] to-[#00D2D3]">
            {birthday.celebrant.ageFormatted} !
          </span>
        </h1>

        <p className="mt-1 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
          {birthday.eventDateFormatted.fullFrench} • {birthday.eventDateFormatted.time}
        </p>
      </motion.div>

      {/* INTERACTIVE 3D POP GIFT BOX */}
      <div className="relative w-full max-w-[320px] xs:max-w-[350px] aspect-square flex items-center justify-center z-20">
        {/* Soft shadow */}
        <div className="absolute inset-x-8 -bottom-3 h-8 bg-pink-900/15 rounded-full blur-xl" />

        {/* The Card emerging from the Gift Box */}
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={
            stage === 'opening'
              ? { y: -140, opacity: 1, scale: 1 }
              : { y: 0, opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-4 top-2 bottom-6 rounded-3xl bg-white border-4 border-[#FFD100] shadow-2xl p-4 flex flex-col items-center justify-center text-center z-25 overflow-hidden"
        >
          {/* Confetti border accent */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#FF2E93] via-[#FFD100] via-[#00D2D3] to-[#845EC2]" />

          {/* Child's photo in a colorful circle */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#FF2E93] shadow-lg mb-2 ring-4 ring-pink-100">
            <Image
              src={birthday.photo.src}
              alt={birthday.photo.alt}
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#FF2E93] bg-pink-50 px-2.5 py-0.5 rounded-full mb-1">
            <Cake className="w-3.5 h-3.5" />
            <span>Invitation Magique</span>
          </div>

          <h2 className="font-black text-2xl text-slate-800 tracking-tight">
            {birthday.celebrant.firstName}
          </h2>

          <div className="flex items-center gap-1.5 my-1">
            <span className="w-6 h-1 rounded-full bg-[#FFD100]" />
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF2E93] to-[#FFD100] text-white text-xs font-black shadow-sm">
              {birthday.celebrant.age} ANS
            </span>
            <span className="w-6 h-1 rounded-full bg-[#00D2D3]" />
          </div>

          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
            {birthday.location.name}
          </p>
        </motion.div>

        {/* 3D GIFT BOX BODY & LID */}
        <div
          onClick={triggerOpen}
          className="relative w-64 h-64 sm:w-72 sm:h-72 cursor-pointer group flex flex-col items-center justify-end z-20"
          title="Clique pour déballer le cadeau !"
        >
          {/* GIFT LID (Flies away when clicked) */}
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              stage === 'opening'
                ? { y: -160, rotate: -25, opacity: 0 }
                : { y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative w-64 sm:w-72 h-16 rounded-2xl bg-gradient-to-r from-[#FFD100] via-[#FFE259] to-[#FFD100] border-2 border-amber-300 shadow-xl flex items-center justify-center -mb-2 z-30 group-hover:scale-105 transition-transform"
          >
            {/* Ribbon Knot on top of Lid */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center">
              {/* Left loop */}
              <div className="w-7 h-9 rounded-full border-4 border-[#00D2D3] bg-cyan-100 rotate-[-35deg] -mr-1.5 shadow-md" />
              {/* Knot center */}
              <div className="w-6 h-6 rounded-full bg-[#00D2D3] border-2 border-white shadow-lg z-10 flex items-center justify-center">
                <Gift className="w-3.5 h-3.5 text-white" />
              </div>
              {/* Right loop */}
              <div className="w-7 h-9 rounded-full border-4 border-[#00D2D3] bg-cyan-100 rotate-[35deg] -ml-1.5 shadow-md" />
            </div>

            {/* Vertical ribbon on lid */}
            <div className="w-8 h-full bg-[#00D2D3] shadow-sm flex items-center justify-center" />
          </motion.div>

          {/* GIFT BOX MAIN BODY */}
          <div className="relative w-56 sm:w-64 h-48 sm:h-52 rounded-b-3xl bg-gradient-to-b from-[#FF2E93] to-[#D81B60] border-4 border-pink-400/80 shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
            {/* Polka Dots texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px] opacity-25" />

            {/* Vertical Turquoise Ribbon */}
            <div className="w-10 h-full bg-gradient-to-b from-[#00D2D3] to-[#00A8A9] shadow-md flex items-center justify-center z-10">
              <span className="text-white text-lg font-black font-mono">★</span>
            </div>

            {/* Horizontal Turquoise Ribbon */}
            <div className="absolute inset-x-0 h-10 bg-gradient-to-r from-[#00D2D3] to-[#00A8A9] shadow-md flex items-center justify-center z-10" />

            {/* Center Tag Badge */}
            <div className="relative z-20 px-3.5 py-1.5 rounded-xl bg-white border-2 border-[#FFD100] shadow-lg flex items-center gap-1.5 group-hover:rotate-3 transition-transform">
              <span className="text-sm">🎈</span>
              <span className="text-xs font-black text-slate-800 tracking-wider">
                OUVRE-MOI !
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ACTION BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 text-center z-10 w-full max-w-xs"
      >
        <button
          onClick={triggerOpen}
          disabled={stage !== 'closed'}
          className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#FF5E97] to-[#FFD100] hover:from-[#E01E7E] hover:to-[#E6BC00] text-white font-black text-sm tracking-wider uppercase shadow-xl shadow-pink-500/30 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <Gift className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
          <span>Déballer l&apos;Invitation</span>
          <Sparkles className="w-4 h-4 text-white" />
        </button>

        <p className="mt-2 text-xs font-bold text-pink-600/80">
          Touche la boîte cadeau pour découvrir la fête !
        </p>
      </motion.div>
    </div>
  );
};
