'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ConferenceConfig } from '@/data/conference-config';

interface ConferenceBadgeAnimationProps {
  conference: ConferenceConfig;
  onOpened: () => void;
}

export const ConferenceBadgeAnimation: React.FC<ConferenceBadgeAnimationProps> = ({
  conference,
  onOpened,
}) => {
  const [scanned, setScanned] = useState(false);

  const handleScanBadge = () => {
    if (scanned) return;
    setScanned(true);

    setTimeout(() => {
      onOpened();
    }, 2200);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-b from-[#0A192F] via-[#0E233F] to-[#071120] text-white select-none">
      {/* Background Tech Mesh & Cyan Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#00D2D3]/10 blur-[130px]" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[#1E3E62]/30 blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      </div>

      {/* Header Pill & Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6 sm:mb-8 z-10 max-w-lg px-4 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-[#00D2D3]/40 text-[#00D2D3] text-xs font-mono uppercase tracking-widest shadow-sm mb-3">
          <ShieldCheck className="w-4 h-4 text-[#00D2D3]" />
          <span>Accréditation Officielle • {conference.acronym}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
          {conference.title}
        </h1>

        <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-300">
          {conference.edition} • {conference.eventDateFormatted.dates}
        </p>
      </motion.div>

      {/* 3D VIP LANYARD & BADGE */}
      <div className="relative w-full max-w-[300px] xs:max-w-[320px] aspect-[3/4.6] flex flex-col items-center z-20">
        {/* Lanyard Top Strap */}
        <div className="w-12 h-14 bg-gradient-to-b from-[#1E3E62] to-[#0A192F] border-x border-[#00D2D3]/30 flex items-center justify-center relative shadow-md">
          {/* Metallic Clip */}
          <div className="absolute -bottom-2 w-8 h-4 rounded-sm bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 border border-slate-500 shadow-md flex items-center justify-center">
            <div className="w-4 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>

        {/* BADGE CARD HOLDER */}
        <div
          onClick={handleScanBadge}
          className="relative w-full rounded-3xl p-1 bg-gradient-to-b from-[#00D2D3]/60 via-[#1E3E62] to-[#00D2D3]/40 shadow-2xl cursor-pointer group mt-1"
          title="Touchez pour valider votre accès au Forum"
        >
          {/* Acrylic Badge Body */}
          <div className="relative w-full rounded-[22px] bg-[#0E1E34] border border-cyan-500/30 p-5 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Holographic light reflection sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Scanning Laser Line */}
            <motion.div
              animate={{ y: [0, 260, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D2D3] to-transparent shadow-[0_0_8px_#00D2D3] pointer-events-none z-30"
            />

            {/* Top Pass Type Header */}
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00D2D3] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#00D2D3] font-bold">
                  {conference.badge.passType}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                2027
              </span>
            </div>

            {/* Event Name in Badge */}
            <div className="my-4 text-center z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                {conference.acronym}
              </span>
              <h2 className="text-sm font-black text-white leading-snug">
                {conference.title}
              </h2>
              <span className="text-[10px] text-slate-400 block mt-1">
                Sofitel Hôtel Ivoire • Abidjan
              </span>
            </div>

            {/* QR Code & Scan Hologram */}
            <div className="relative my-2 p-3 rounded-2xl bg-white border-2 border-[#00D2D3] shadow-lg flex flex-col items-center justify-center z-10 mx-auto w-32 aspect-square">
              {scanned ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex flex-col items-center text-emerald-600"
                >
                  <CheckCircle2 className="w-14 h-14 stroke-[2.5]" />
                  <span className="text-[9px] font-mono font-black mt-1">
                    VALIDE
                  </span>
                </motion.div>
              ) : (
                <>
                  <QrCode className="w-20 h-20 text-[#0A192F]" />
                  <span className="text-[8px] font-mono text-slate-600 font-bold mt-1">
                    {conference.badge.accessCode}
                  </span>
                </>
              )}
            </div>

            {/* Badge Holder Details */}
            <div className="mt-3 pt-3 border-t border-slate-700/60 text-center z-10">
              <p className="text-xs font-black text-white">
                {conference.badge.holderName}
              </p>
              <p className="text-[10px] text-[#00D2D3] font-medium">
                {conference.badge.holderRole}
              </p>
              <p className="text-[9px] font-mono text-slate-400 mt-1">
                ID : {conference.badge.accessCode}
              </p>
            </div>
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
          onClick={handleScanBadge}
          disabled={scanned}
          className="group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00D2D3] to-[#00A8FF] hover:from-[#00B9BA] hover:to-[#0091DF] text-[#0A192F] font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <span>{scanned ? 'Badge Validé...' : 'Activer mon Badge VIP'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-2 text-xs font-mono text-slate-400">
          Touchez le badge pour accéder au programme complet
        </p>
      </motion.div>
    </div>
  );
};
