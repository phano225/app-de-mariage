'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Flame,
  Music,
  Sparkles,
  Ticket,
  Headphones,
  CheckCircle,
} from 'lucide-react';
import { FestivalConfig } from '@/data/festival-config';

interface FestivalInvitationViewProps {
  festival: FestivalConfig;
}

export const FestivalInvitationView: React.FC<FestivalInvitationViewProps> = ({
  festival,
}) => {
  // Countdown
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(festival.eventDate).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [festival.eventDate]);

  const whatsappHref = `https://wa.me/${festival.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    festival.contact.rsvpMessage
  )}`;

  return (
    <div className="w-full min-h-screen bg-[#090214] text-white selection:bg-pink-500/30 selection:text-white pb-20 overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Neon Ambient Overlays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-purple-600/20 via-pink-600/15 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/50 text-[#FACC15] text-xs font-mono uppercase tracking-widest shadow-lg shadow-purple-900/40 mb-6"
          >
            <Flame className="w-4 h-4 text-[#EC4899] fill-[#EC4899]" />
            <span>{festival.edition} • Abidjan</span>
            <Sparkles className="w-4 h-4 text-[#FACC15]" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 via-cyan-300 to-yellow-300 tracking-tight leading-[1.15] mb-4"
          >
            {festival.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg font-bold text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            « {festival.tagline} »
          </motion.p>

          {/* HERO CONCERT PHOTO BANNER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-2xl aspect-[16/9] rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-2xl mb-8 group overflow-hidden"
          >
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950">
              <Image
                src={festival.photo.cover}
                alt="Foule en concert au Festival"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090214] via-[#090214]/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FACC15] font-bold block">
                    LIEU OFFICIEL
                  </span>
                  <span className="text-sm sm:text-base font-black text-white">
                    {festival.location.name} • {festival.location.area}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-pink-500/80 text-white text-xs font-mono font-black backdrop-blur-sm">
                  2 JOURS NON-STOP
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-200 mb-8">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#14062B] border border-purple-500/40 shadow-sm">
              <Calendar className="w-4 h-4 text-[#EC4899]" />
              <span>{festival.eventDateFormatted.fullFrench}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#14062B] border border-purple-500/40 shadow-sm">
              <Clock className="w-4 h-4 text-[#FACC15]" />
              <span>{festival.eventDateFormatted.time}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#14062B] border border-purple-500/40 shadow-sm">
              <MapPin className="w-4 h-4 text-[#06B6D4]" />
              <span>Biétry, Zone 4 • Abidjan</span>
            </div>
          </div>

          {/* COUNTDOWN TILES */}
          <div className="w-full max-w-lg bg-[#14062B] rounded-3xl p-6 border border-purple-500/30 shadow-2xl mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FACC15] mb-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Coup d&apos;envoi du Festival dans</span>
            </p>
            <div className="grid grid-cols-4 gap-3 text-center font-mono">
              <div className="bg-[#1F0D3D] rounded-2xl p-3 border border-purple-700/60">
                <span className="block text-2xl sm:text-3xl font-black text-white">{timeLeft.days}</span>
                <span className="text-[10px] text-purple-300 uppercase">Jours</span>
              </div>
              <div className="bg-[#1F0D3D] rounded-2xl p-3 border border-purple-700/60">
                <span className="block text-2xl sm:text-3xl font-black text-[#EC4899]">{timeLeft.hours}</span>
                <span className="text-[10px] text-purple-300 uppercase">Heures</span>
              </div>
              <div className="bg-[#1F0D3D] rounded-2xl p-3 border border-purple-700/60">
                <span className="block text-2xl sm:text-3xl font-black text-[#06B6D4]">{timeLeft.minutes}</span>
                <span className="text-[10px] text-purple-300 uppercase">Min</span>
              </div>
              <div className="bg-[#1F0D3D] rounded-2xl p-3 border border-purple-700/60">
                <span className="block text-2xl sm:text-3xl font-black text-[#FACC15]">{timeLeft.seconds}</span>
                <span className="text-[10px] text-purple-300 uppercase">Sec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LINE-UP ARTISTES */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-950/80 text-[#EC4899] text-xs font-mono uppercase tracking-widest mb-2 border border-purple-800">
            <Headphones className="w-3.5 h-3.5" />
            <span>Line-Up Officiel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Artistes &amp; Shows Vedettes
          </h2>
        </div>

        <div className="space-y-3.5">
          {festival.lineup.map((art) => (
            <div
              key={art.id}
              className="p-5 rounded-3xl bg-[#14062B] border border-purple-500/30 shadow-lg flex flex-wrap items-center justify-between gap-4 hover:border-[#EC4899] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                  🎧
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-white">
                    {art.name}
                  </h3>
                  <p className="text-xs font-mono text-[#06B6D4]">
                    {art.genre}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-[#200E40] text-[#FACC15] text-xs font-mono font-bold block mb-1">
                  {art.timeSlot}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {art.stage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LES 3 SCÈNES & EXPÉRIENCES */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FACC15] block mb-1">
            Les Espaces
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            3 Scènes &amp; Ambiances
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {festival.stages.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-[#14062B] border border-purple-500/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="w-7 h-7 rounded-xl bg-purple-900/80 text-pink-400 flex items-center justify-center text-xs font-mono font-black mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-black text-base text-white mb-1">
                  {st.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {st.vibe}
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#FACC15] font-bold">
                ★ {st.highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PASS VIP PERKS */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-[#14062B] rounded-3xl p-6 sm:p-8 border border-yellow-400/40 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6 border-b border-purple-800 pb-4">
            <div className="flex items-center gap-2.5">
              <Ticket className="w-6 h-6 text-[#FACC15]" />
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  {festival.ticket.passType}
                </h2>
                <p className="text-xs font-mono text-[#06B6D4]">
                  Tarif : {festival.ticket.price}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-yellow-400/20 text-[#FACC15] text-xs font-mono font-black">
              PLACES LIMITÉES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {festival.ticket.perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION & GOOGLE MAPS */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-[#14062B] rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🌴</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Lieu du Festival
              </h2>
              <p className="text-xs text-slate-400">
                {festival.location.city}, {festival.location.country}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090214] border border-purple-900 space-y-2 mb-6">
            <p className="text-base font-black text-white">
              {festival.location.name}
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              {festival.location.address} — {festival.location.area}
            </p>
            <p className="text-xs text-[#06B6D4] font-medium pt-1">
              💡 {festival.location.accessTip}
            </p>
          </div>

          <a
            href={festival.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#06B6D4] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Itinéraire Google Maps vers Biétry Wave Park</span>
          </a>
        </div>
      </section>

      {/* 6. BILLETTERIE WHATSAPP */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#2B0E50] via-[#1A0A33] to-[#2B0E50] rounded-3xl p-8 sm:p-12 border border-[#EC4899]/50 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block text-3xl">🎉</span>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Réserver votre Pass VIP par WhatsApp
            </h2>

            <p className="text-xs sm:text-sm text-purple-200 max-w-md mx-auto leading-relaxed">
              Contactez directement la billetterie officielle du festival pour réserver vos places et recevoir vos pass numériques nominatifs.
            </p>

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FACC15] to-[#FB923C] hover:from-[#FDE047] hover:to-[#F97316] text-[#090214] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#090214]" />
                <span>Réserver mon Pass Festival par WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-purple-300 pt-1">
              Infoline &amp; Billetterie : {festival.contact.whatsappFormatted}
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="pt-8 text-center text-xs font-mono text-slate-500">
        <p className="mb-1">
          {festival.title} • {festival.edition}
        </p>
        <p>© 2027 Comité d&apos;Organisation AABDF • Invitation propulsée par JetInvite.fun</p>
      </footer>
    </div>
  );
};
