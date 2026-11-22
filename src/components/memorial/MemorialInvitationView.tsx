'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  MessageCircle,
  Navigation,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { MemorialConfig } from '@/data/memorial-config';

interface MemorialInvitationViewProps {
  memorial: MemorialConfig;
}

export const MemorialInvitationView: React.FC<MemorialInvitationViewProps> = ({
  memorial,
}) => {
  const [candlesLitCount, setCandlesLitCount] = useState(148);
  const [hasLit, setHasLit] = useState(false);

  const handleLightCandle = () => {
    if (!hasLit) {
      setCandlesLitCount((prev) => prev + 1);
      setHasLit(true);
    }
  };

  const whatsappHref = `https://wa.me/${memorial.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    memorial.contact.condolencesMessage
  )}`;

  return (
    <div className="w-full min-h-screen bg-[#0B0D11] text-[#F7F6F2] selection:bg-amber-500/30 selection:text-white pb-20 overflow-hidden font-sans">
      {/* 1. HERO COVER SECTION */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        {/* Ambient Dark Warm Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FFAE42]/10 blur-[150px]" />
        </div>

        <div className="relative max-w-3xl w-full mx-auto flex flex-col items-center text-center z-10">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-[#C5A059]/40 shadow-sm backdrop-blur-md mb-6"
          >
            <span className="text-sm">🕯️</span>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#C5A059] font-medium">
              Hommage &amp; Obsèques Officielles
            </span>
            <span className="text-sm">🕯️</span>
          </motion.div>

          {/* Deceased Full Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-wider font-normal text-[#F7F6F2] mb-2 leading-tight"
          >
            {memorial.deceased.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl font-serif italic text-[#C5A059] mb-4"
          >
            {memorial.deceased.affectionateName}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xs sm:text-sm font-sans tracking-[0.25em] text-[#8A92A0] uppercase mb-8"
          >
            {memorial.deceased.birthYear} — {memorial.deceased.deathYear} • 85 Ans d&apos;Amour et de Dévouement
          </motion.p>

          {/* DIGNIFIED PORTRAIT FRAME */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-[36px] p-3 bg-gradient-to-b from-[#C5A059]/60 via-[#1A1D24] to-[#0B0D11] shadow-2xl mb-8 group"
          >
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#10131A] border border-[#C5A059]/40 shadow-inner">
              <Image
                src={memorial.photo.src}
                alt={memorial.photo.alt}
                fill
                priority
                className="object-cover grayscale contrast-110 opacity-90 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-0 inset-x-0 p-5 text-center text-white">
                <span className="font-serif text-lg tracking-wider text-[#F7F6F2] block">
                  {memorial.deceased.fullName}
                </span>
                <span className="text-xs text-[#C5A059] font-serif italic mt-0.5 block">
                  Repose en paix dans la grâce divine
                </span>
              </div>
            </div>

            {/* Subtle Gold Corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#C5A059] rounded-tl-xl" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#C5A059] rounded-tr-xl" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#C5A059] rounded-bl-xl" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#C5A059] rounded-br-xl" />
          </motion.div>

          {/* Virtual Candle Counter Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col items-center gap-2"
          >
            <button
              onClick={handleLightCandle}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-serif uppercase tracking-widest transition-all ${
                hasLit
                  ? 'bg-[#FFAE42]/20 border border-[#FFAE42] text-[#FFAE42] shadow-[0_0_15px_rgba(255,174,66,0.3)]'
                  : 'bg-white/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/50 text-[#F7F6F2] hover:text-[#FFAE42]'
              }`}
            >
              <span>🕯️</span>
              <span>
                {hasLit
                  ? 'Votre bougie est allumée'
                  : 'Allumer une bougie en son hommage'}
              </span>
            </button>
            <span className="text-[11px] text-[#8A92A0] font-sans">
              {candlesLitCount} bougies allumées en souvenir de Pépé Kouassi
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. BIBLE VERSE & SERENE THOUGHT */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto text-center">
        <div className="bg-[#13171F] rounded-3xl p-8 border border-white/10 shadow-lg relative overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-white/5 text-[#C5A059] flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="font-serif italic text-base sm:text-lg text-[#F7F6F2] leading-relaxed mb-3">
            {memorial.bibleVerse.verse}
          </p>
          <span className="text-xs font-sans tracking-widest uppercase font-semibold text-[#C5A059]">
            — {memorial.bibleVerse.reference} —
          </span>
        </div>
      </section>

      {/* 3. OFFICIAL FAMILY ANNOUNCEMENT */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="bg-[#13171F] rounded-3xl p-6 sm:p-10 border border-[#C5A059]/40 shadow-xl relative">
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
            <span className="text-xl">🕊️</span>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#F7F6F2] font-normal">
                Faire-Part Officiel de la Famille
              </h2>
              <p className="text-xs text-[#8A92A0]">
                Rappel à Dieu
              </p>
            </div>
          </div>

          <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#F7F6F2]/90 whitespace-pre-line">
            {memorial.announcement}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center font-serif italic text-sm text-[#C5A059]">
            <p>{memorial.tributeQuote}</p>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMME DES OBSÈQUES */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-serif text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-1">
            Cérémonies
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F7F6F2]">
            Programme des Obsèques
          </h2>
        </div>

        <div className="space-y-4">
          {memorial.schedule.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-3xl bg-[#13171F] border transition-all shadow-sm ${
                item.highlight
                  ? 'border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                  : 'border-white/10 hover:border-[#C5A059]/40'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 text-[#C5A059] flex items-center justify-center text-2xl shrink-0">
                  {item.icon === 'vigil' && '🕯️'}
                  {item.icon === 'ceremony' && '⛪'}
                  {item.icon === 'burial' && '🕊️'}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg font-normal text-[#F7F6F2]">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[#C5A059] text-xs font-sans font-medium">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#FFAE42] font-medium mb-1">
                    📅 {item.date} • 📍 {item.location}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8A92A0] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LOCATIONS & MAPS */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Vigil */}
          <div className="p-5 rounded-3xl bg-[#13171F] border border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#C5A059] font-medium">
                Veillée
              </span>
              <h3 className="font-serif text-base font-normal text-[#F7F6F2] mt-1 mb-1">
                {memorial.locations.vigil.name}
              </h3>
              <p className="text-xs text-[#8A92A0] mb-3">
                {memorial.locations.vigil.address}
              </p>
            </div>
            <a
              href={memorial.locations.vigil.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-[#C5A059]/20 text-[#C5A059] font-sans text-xs font-medium transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Itinéraire</span>
            </a>
          </div>

          {/* Mass */}
          <div className="p-5 rounded-3xl bg-[#13171F] border border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#C5A059] font-medium">
                Levée &amp; Messe
              </span>
              <h3 className="font-serif text-base font-normal text-[#F7F6F2] mt-1 mb-1">
                {memorial.locations.mass.name}
              </h3>
              <p className="text-xs text-[#8A92A0] mb-3">
                {memorial.locations.mass.address}
              </p>
            </div>
            <a
              href={memorial.locations.mass.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-[#C5A059]/20 text-[#C5A059] font-sans text-xs font-medium transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Itinéraire</span>
            </a>
          </div>

          {/* Burial */}
          <div className="p-5 rounded-3xl bg-[#13171F] border border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#C5A059] font-medium">
                Inhumation
              </span>
              <h3 className="font-serif text-base font-normal text-[#F7F6F2] mt-1 mb-1">
                {memorial.locations.burial.name}
              </h3>
              <p className="text-xs text-[#8A92A0] mb-3">
                {memorial.locations.burial.city}
              </p>
            </div>
            <a
              href={memorial.locations.burial.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-[#C5A059]/20 text-[#C5A059] font-sans text-xs font-medium transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Itinéraire</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. CONDOLENCES WHATSAPP SECTION */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-b from-[#171B24] to-[#10131A] rounded-3xl p-8 sm:p-12 text-[#F7F6F2] border border-[#C5A059]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block text-3xl">🕊️</span>

            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
              Adresser un message de condoléances
            </h2>

            <p className="text-xs sm:text-sm text-[#8A92A0] max-w-md mx-auto font-sans leading-relaxed">
              Vos marques d&apos;affection et vos messages de soutien apportent paix et réconfort à la famille éplorée.
            </p>

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D11] font-serif font-bold text-sm tracking-wider uppercase shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#0B0D11]" />
                <span>Envoyer des condoléances par WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-[#8A92A0] font-sans pt-1">
              {memorial.contact.supportNote}
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="pt-8 text-center text-xs font-sans text-[#8A92A0]/60">
        <p className="flex items-center justify-center gap-1.5 mb-2 text-[#8A92A0]">
          En mémoire éternelle de {memorial.deceased.fullName}
          <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
        </p>
        <p>© 2027 Famille Kouassi • Faire-part mémorial propulsé par JetInvite.fun</p>
      </footer>
    </div>
  );
};
