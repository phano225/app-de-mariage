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
  ShieldCheck,
  Briefcase,
  Users,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { ConferenceConfig } from '@/data/conference-config';

interface ConferenceInvitationViewProps {
  conference: ConferenceConfig;
}

export const ConferenceInvitationView: React.FC<ConferenceInvitationViewProps> = ({
  conference,
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
      const target = new Date(conference.eventDate).getTime();
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
  }, [conference.eventDate]);

  const whatsappHref = `https://wa.me/${conference.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    conference.contact.rsvpMessage
  )}`;

  return (
    <div className="w-full min-h-screen bg-[#0A192F] text-slate-100 selection:bg-cyan-500/30 selection:text-white pb-20 overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-[#00D2D3]/40 text-[#00D2D3] text-xs font-mono uppercase tracking-widest shadow-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#00D2D3]" />
            <span>{conference.edition} • Sommet Panafricain</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            {conference.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            « {conference.tagline} »
          </motion.p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-300 mb-10">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#132238] border border-slate-700 shadow-sm">
              <Calendar className="w-4 h-4 text-[#00D2D3]" />
              <span>{conference.eventDateFormatted.fullFrench}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#132238] border border-slate-700 shadow-sm">
              <Clock className="w-4 h-4 text-[#00D2D3]" />
              <span>{conference.eventDateFormatted.time}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#132238] border border-slate-700 shadow-sm">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Sofitel Hôtel Ivoire • Abidjan</span>
            </div>
          </div>

          {/* COUNTDOWN TILES */}
          <div className="w-full max-w-lg bg-[#0E1E34] rounded-3xl p-6 border border-cyan-500/30 shadow-2xl mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-[#00D2D3] mb-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Ouverture des sessions dans</span>
            </p>
            <div className="grid grid-cols-4 gap-3 text-center font-mono">
              <div className="bg-[#132845] rounded-2xl p-3 border border-slate-700">
                <span className="block text-2xl sm:text-3xl font-black text-white">{timeLeft.days}</span>
                <span className="text-[10px] text-slate-400 uppercase">Jours</span>
              </div>
              <div className="bg-[#132845] rounded-2xl p-3 border border-slate-700">
                <span className="block text-2xl sm:text-3xl font-black text-[#00D2D3]">{timeLeft.hours}</span>
                <span className="text-[10px] text-slate-400 uppercase">Heures</span>
              </div>
              <div className="bg-[#132845] rounded-2xl p-3 border border-slate-700">
                <span className="block text-2xl sm:text-3xl font-black text-white">{timeLeft.minutes}</span>
                <span className="text-[10px] text-slate-400 uppercase">Min</span>
              </div>
              <div className="bg-[#132845] rounded-2xl p-3 border border-slate-700">
                <span className="block text-2xl sm:text-3xl font-black text-[#00D2D3]">{timeLeft.seconds}</span>
                <span className="text-[10px] text-slate-400 uppercase">Sec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-[#132238] rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#00D2D3]/10 text-[#00D2D3] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                À propos du Forum
              </h2>
              <p className="text-xs text-slate-400">
                Cadre stratégique panafricain
              </p>
            </div>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {conference.overview}
          </p>
        </div>
      </section>

      {/* 3. SPEAKERS & KEYNOTES */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/60 text-[#00D2D3] text-xs font-mono uppercase tracking-widest mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Intervenants d&apos;Honneur</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Speakers Panafricains
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {conference.speakers.map((sp) => (
            <div
              key={sp.id}
              className="p-5 rounded-3xl bg-[#132238] border border-slate-700 shadow-xl flex flex-col justify-between group hover:border-[#00D2D3]/50 transition-colors"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-slate-700">
                  <Image
                    src={sp.photo}
                    alt={sp.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-black text-base leading-snug">{sp.name}</h3>
                    <p className="text-xs text-[#00D2D3] font-medium">{sp.title}</p>
                  </div>
                </div>

                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  {sp.company}
                </p>

                {sp.keynoteTitle && (
                  <p className="text-xs text-slate-300 italic border-l-2 border-[#D4AF37] pl-2 py-0.5">
                    « {sp.keynoteTitle} »
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AGENDA / PROGRAMME */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D2D3] block mb-1">
            Agenda Officiel
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Programme des Deux Journées
          </h2>
        </div>

        <div className="space-y-4">
          {conference.agenda.map((item) => (
            <div
              key={item.id}
              className={`p-5 sm:p-6 rounded-3xl bg-[#132238] border transition-all ${
                item.highlight
                  ? 'border-[#00D2D3] shadow-[0_0_15px_rgba(0,210,211,0.15)]'
                  : 'border-slate-700 hover:border-slate-500'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#1E3E62] text-[#00D2D3] text-xs font-mono font-bold">
                  {item.time}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {item.type} • {item.location}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-white mb-1">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LOCATION & ACCREDITATION */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-[#132238] rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🏛️</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Lieu du Forum
              </h2>
              <p className="text-xs text-slate-400">
                {conference.location.city}, {conference.location.country}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E1E34] border border-slate-700 space-y-2 mb-6">
            <p className="text-base font-black text-white">
              {conference.location.name}
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              {conference.location.venue} — {conference.location.address}
            </p>
            <p className="text-xs text-[#00D2D3] font-medium pt-1">
              💡 {conference.location.accessTip}
            </p>
          </div>

          <a
            href={conference.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#00D2D3] to-[#00A8FF] hover:from-[#00B9BA] hover:to-[#0091DF] text-[#0A192F] font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Itinéraire Google Maps vers le Sofitel Ivoire</span>
          </a>
        </div>
      </section>

      {/* 6. RSVP & ACCREDITATION WHATSAPP */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#0E233F] via-[#132845] to-[#0E233F] rounded-3xl p-8 sm:p-12 border border-[#00D2D3]/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block text-3xl">🎫</span>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Obtenir son Accréditation &amp; Pass Délégué
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Confirmez votre participation auprès du secrétariat général du Forum pour recevoir votre badge nominatif officiel.
            </p>

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00D2D3] hover:bg-[#00E5E6] text-[#0A192F] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#0A192F]" />
                <span>Confirmer mon inscription sur WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-slate-400 pt-1">
              Contact Secrétariat : {conference.contact.whatsappFormatted} • {conference.contact.email}
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="pt-8 text-center text-xs font-mono text-slate-500">
        <p className="mb-1">
          {conference.title} • {conference.acronym}
        </p>
        <p>© 2027 Secrétariat Exécutif du Forum • Invitation propulsée par JetInvite.fun</p>
      </footer>
    </div>
  );
};
