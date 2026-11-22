'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Ticket, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { FestivalConfig } from '@/data/festival-config';

interface FestivalTicketAnimationProps {
  festival: FestivalConfig;
  onOpened: () => void;
}

export const FestivalTicketAnimation: React.FC<FestivalTicketAnimationProps> = ({
  festival,
  onOpened,
}) => {
  const [activated, setActivated] = useState(false);

  const handleActivateTicket = () => {
    if (activated) return;
    setActivated(true);

    try {
      // Neon festival colors confetti
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#EC4899', '#06B6D4', '#FACC15', '#10B981'],
        ticks: 260,
        gravity: 0.8,
        scalar: 1.1,
      });
    } catch {
      // fallback
    }

    setTimeout(() => {
      onOpened();
    }, 2300);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-b from-[#090214] via-[#14062B] to-[#06010F] text-white select-none">
      {/* Background Neon Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 rounded-full bg-purple-600/25 blur-[120px]" />
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-pink-600/20 blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
      </div>

      {/* Floating party emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden text-2xl">
        <motion.span
          animate={{ y: [-8, 8, -8], rotate: [-10, 10, -10] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-16 left-12"
        >
          🎧
        </motion.span>
        <motion.span
          animate={{ y: [8, -8, 8], rotate: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-24 right-12"
        >
          ⚡
        </motion.span>
        <motion.span
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3.8, repeat: Infinity }}
          className="absolute bottom-20 left-16"
        >
          🔥
        </motion.span>
        <motion.span
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4.2, repeat: Infinity }}
          className="absolute bottom-24 right-16"
        >
          ✨
        </motion.span>
      </div>

      {/* Header Pill & Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6 sm:mb-8 z-10 max-w-lg px-4 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/50 text-[#FACC15] text-xs font-mono uppercase tracking-widest shadow-lg shadow-purple-900/40 mb-3">
          <Flame className="w-4 h-4 text-[#EC4899] fill-[#EC4899]" />
          <span>Billet Électronique Officiel</span>
          <Sparkles className="w-4 h-4 text-[#FACC15]" />
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 tracking-tight leading-tight">
          {festival.title}
        </h1>

        <p className="mt-1 text-xs sm:text-sm font-bold text-slate-300">
          {festival.edition} • {festival.eventDateFormatted.dates}
        </p>
      </motion.div>

      {/* 3D HOLOGRAPHIC VIP CONCERT TICKET */}
      <div className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[390px] aspect-[1.8/1] flex items-center justify-center z-20">
        <div
          onClick={handleActivateTicket}
          className="relative w-full rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-400 to-yellow-400 shadow-2xl cursor-pointer group"
          title="Touchez pour valider votre entrée au festival"
        >
          {/* Ticket Body */}
          <div className="relative w-full rounded-[22px] bg-[#120726] border border-purple-500/40 p-4 sm:p-5 flex items-stretch justify-between overflow-hidden shadow-inner">
            {/* Holographic light reflection sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Left Main Ticket Info */}
            <div className="flex-1 pr-4 border-r-2 border-dashed border-purple-500/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-black uppercase text-[#FACC15] tracking-widest">
                    {festival.ticket.passType}
                  </span>
                  <span className="text-[9px] font-mono text-purple-300">
                    {festival.eventDateFormatted.year}
                  </span>
                </div>

                <h2 className="text-sm sm:text-base font-black text-white leading-tight">
                  {festival.title}
                </h2>
                <p className="text-[10px] text-pink-300 font-semibold mt-0.5">
                  Espace Lagunaire Wave Park • Biétry
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-purple-900/80 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">
                  {festival.eventDateFormatted.time}
                </span>
                <span className="text-emerald-400 font-black">
                  {festival.ticket.price}
                </span>
              </div>
            </div>

            {/* Right Perforated Stub / Barcode */}
            <div className="w-20 pl-3 flex flex-col items-center justify-between text-center">
              {activated ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="my-auto flex flex-col items-center text-emerald-400"
                >
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  <span className="text-[8px] font-mono font-black mt-1">
                    ENTRÉE OK
                  </span>
                </motion.div>
              ) : (
                <>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-[#EC4899] font-black rotate-90 my-auto">
                    ADMIT ONE
                  </span>
                  <div className="w-full flex justify-between gap-0.5 h-10 items-end opacity-80">
                    <span className="w-1 h-8 bg-white" />
                    <span className="w-0.5 h-6 bg-white" />
                    <span className="w-1.5 h-10 bg-white" />
                    <span className="w-0.5 h-5 bg-white" />
                    <span className="w-1 h-9 bg-white" />
                    <span className="w-0.5 h-7 bg-white" />
                  </div>
                  <span className="text-[7px] font-mono text-slate-400 mt-1">
                    {festival.ticket.ticketNumber.slice(-8)}
                  </span>
                </>
              )}
            </div>

            {/* Half circles on top & bottom of the perforated line */}
            <div className="absolute top-0 right-[88px] -translate-y-1/2 w-4 h-4 rounded-full bg-[#090214] border-b border-purple-500/40" />
            <div className="absolute bottom-0 right-[88px] translate-y-1/2 w-4 h-4 rounded-full bg-[#090214] border-t border-purple-500/40" />
          </div>
        </div>
      </div>

      {/* CALL TO ACTION BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 text-center z-10 w-full max-w-xs"
      >
        <button
          onClick={handleActivateTicket}
          disabled={activated}
          className="group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#06B6D4] hover:from-[#DB2777] hover:to-[#0891B2] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <Ticket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span>{activated ? 'Billet Validé...' : 'Valider mon Billet VIP'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-2 text-xs font-mono text-purple-300/80">
          Touchez le billet pour voir le Line-up &amp; les artistes
        </p>
      </motion.div>
    </div>
  );
};
