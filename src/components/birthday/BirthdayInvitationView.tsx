'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PartyPopper,
  Sparkles,
  Cake,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Gift,
  Smile,
  Heart,
  Music,
  Share2,
  Navigation,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BirthdayConfig } from '@/data/birthday-config';

interface BirthdayInvitationViewProps {
  birthday: BirthdayConfig;
}

export const BirthdayInvitationView: React.FC<BirthdayInvitationViewProps> = ({
  birthday,
}) => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(birthday.eventDate).getTime();
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
  }, [birthday.eventDate]);

  const triggerConfettiBlast = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: birthday.theme.confettiColors,
      });
    } catch {
      // fallback
    }
  };

  const whatsappHref = `https://wa.me/${birthday.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    birthday.contact.rsvpMessage
  )}`;

  return (
    <div className="w-full min-h-screen bg-[#FFF7FB] text-slate-800 selection:bg-pink-300 selection:text-pink-900 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Floating Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-pink-200/50 via-yellow-100/40 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto z-10 flex flex-col items-center">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-pink-200 text-[#FF2E93] text-xs font-black uppercase tracking-wider shadow-sm mb-6"
          >
            <PartyPopper className="w-4 h-4 text-[#FF2E93]" />
            <span>Fête d&apos;Anniversaire Exclusive</span>
            <Sparkles className="w-4 h-4 text-[#FFD100]" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
          >
            {birthday.celebrant.firstName} fête ses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E93] via-[#FF8E53] to-[#FFD100]">
              {birthday.celebrant.ageFormatted} !
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl font-bold text-slate-600 max-w-xl mx-auto mb-8"
          >
            « {birthday.tagline} »
          </motion.p>

          {/* Large Child Photograph Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-[36px] p-3.5 bg-gradient-to-tr from-[#FF2E93] via-[#FFD100] to-[#00D2D3] shadow-2xl mb-8 group"
          >
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-slate-900 border-2 border-white shadow-inner">
              <Image
                src={birthday.photo.src}
                alt={birthday.photo.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

              {/* Age Badge Floating */}
              <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF2E93] to-[#FFD100] text-white flex flex-col items-center justify-center font-black border-2 border-white shadow-lg rotate-12">
                <span className="text-lg leading-none">8</span>
                <span className="text-[9px] uppercase tracking-wider">Ans</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-center text-white">
                <h3 className="text-xl font-black">{birthday.celebrant.fullName}</h3>
                <p className="text-xs font-bold text-yellow-300 mt-0.5">
                  {birthday.eventDateFormatted.fullFrench} à {birthday.eventDateFormatted.time}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Date & Location Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-700 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-pink-100 shadow-sm">
              <Calendar className="w-4 h-4 text-[#FF2E93]" />
              <span>{birthday.eventDateFormatted.fullFrench}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-yellow-100 shadow-sm">
              <Clock className="w-4 h-4 text-[#FFD100]" />
              <span>{birthday.eventDateFormatted.time}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-cyan-100 shadow-sm">
              <MapPin className="w-4 h-4 text-[#00D2D3]" />
              <span>{birthday.location.name}</span>
            </div>
          </div>

          {/* COUNTDOWN TILES */}
          <div className="w-full max-w-md bg-white rounded-3xl p-5 border-2 border-pink-100 shadow-xl mb-6">
            <p className="text-xs font-black uppercase tracking-wider text-[#FF2E93] mb-3 flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Compte à rebours avant la fête</span>
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-pink-50 rounded-2xl p-2.5 border border-pink-100">
                <span className="block text-2xl font-black text-[#FF2E93]">{timeLeft.days}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Jours</span>
              </div>
              <div className="bg-yellow-50 rounded-2xl p-2.5 border border-yellow-100">
                <span className="block text-2xl font-black text-[#E6BC00]">{timeLeft.hours}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Heures</span>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-2.5 border border-cyan-100">
                <span className="block text-2xl font-black text-[#00A8A9]">{timeLeft.minutes}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Min</span>
              </div>
              <div className="bg-purple-50 rounded-2xl p-2.5 border border-purple-100">
                <span className="block text-2xl font-black text-[#845EC2]">{timeLeft.seconds}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Sec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INVITATION MESSAGE SECTION */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-yellow-200 shadow-xl overflow-hidden">
          {/* Top color bar */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#FF2E93] via-[#FFD100] to-[#00D2D3]" />

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💌</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Le mot de {birthday.celebrant.firstName}
            </h2>
          </div>

          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium whitespace-pre-line">
            {birthday.invitationText}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={triggerConfettiBlast}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pink-50 hover:bg-pink-100 text-[#FF2E93] text-xs font-black transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD100]" />
              <span>Lancer des confettis ! 🎉</span>
            </button>

            <span className="text-xs font-black text-slate-400">
              #Malika8Ans
            </span>
          </div>
        </div>
      </section>

      {/* 3. SCHEDULE OF SURPRISES */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-100 text-[#E6BC00] text-xs font-black uppercase tracking-wider mb-2">
            <Cake className="w-3.5 h-3.5" />
            <span>Programme des surprises</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Une après-midi pleine d&apos;aventures
          </h2>
        </div>

        <div className="space-y-3.5">
          {birthday.schedule.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 sm:p-5 rounded-2xl bg-white border-2 transition-all shadow-sm ${
                item.highlight
                  ? 'border-[#FF2E93] ring-2 ring-pink-100 shadow-md'
                  : 'border-slate-100 hover:border-yellow-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-black text-xl shadow-sm ${
                    item.highlight
                      ? 'bg-gradient-to-tr from-[#FF2E93] to-[#FF8E53] text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {item.icon === 'welcome' && '🎉'}
                  {item.icon === 'games' && '🏰'}
                  {item.icon === 'cake' && '🎂'}
                  {item.icon === 'gift' && '🎁'}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-black text-base text-slate-900">
                      {item.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-black">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. LOCATION & GOOGLE MAPS */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cyan-100 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📍</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Lieu de la fête
              </h2>
              <p className="text-xs font-bold text-slate-400">
                {birthday.location.city}, {birthday.location.country}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2 mb-6">
            <p className="text-base font-black text-slate-800">
              {birthday.location.name}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {birthday.location.address}
            </p>
            <p className="text-xs font-bold text-cyan-700 pt-1">
              💡 {birthday.location.accessTip}
            </p>
          </div>

          <a
            href={birthday.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00D2D3] to-[#00A8A9] hover:from-[#00B9BA] hover:to-[#009192] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Itinéraire Google Maps</span>
          </a>
        </div>
      </section>

      {/* 5. PARENTS NOTE */}
      <section className="py-4 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-purple-50 border border-purple-100 text-purple-900 text-xs sm:text-sm font-medium">
          <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <p>{birthday.parentsNote}</p>
        </div>
      </section>

      {/* 6. RSVP WHATSAPP SECTION */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#FF2E93] via-[#FF5E97] to-[#FF8E53] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Confetti dot patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-block text-3xl">🎂</span>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Confirmer la présence de votre enfant
            </h2>

            <p className="text-xs sm:text-sm text-pink-100 max-w-md mx-auto font-medium">
              Pour nous aider à préparer les gâteaux, les boissons et les sachets surprises nominatifs, merci de confirmer par WhatsApp.
            </p>

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-yellow-50 text-[#FF2E93] font-black text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                <span>Confirmer sur WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-pink-100 font-bold pt-1">
              {birthday.contact.rsvpDeadline}
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="pt-8 text-center text-xs font-bold text-slate-400">
        <p className="flex items-center justify-center gap-1.5 mb-2 text-slate-500">
          Grande Célébration des 8 ans de {birthday.celebrant.firstName}
          <Heart className="w-3.5 h-3.5 text-[#FF2E93] fill-[#FF2E93]" />
        </p>
        <p>© 2027 Famille de {birthday.celebrant.firstName} • Invitation propulsée par JetInvite.fun</p>
      </footer>
    </div>
  );
};
