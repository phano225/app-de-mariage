'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Heart,
  MessageCircle,
  Navigation,
  BookOpen,
  Users,
} from 'lucide-react';
import { BaptismConfig } from '@/data/baptism-config';

interface BaptismInvitationViewProps {
  baptism: BaptismConfig;
}

export const BaptismInvitationView: React.FC<BaptismInvitationViewProps> = ({
  baptism,
}) => {
  const whatsappHref = `https://wa.me/${baptism.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    baptism.contact.rsvpMessage
  )}`;

  return (
    <div className="w-full min-h-screen bg-[#F8FBFE] text-[#1E3A5F] selection:bg-blue-200 selection:text-blue-900 pb-20 overflow-hidden">
      {/* 1. HERO COVER SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        {/* Ambient celestial lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#B8DCFE]/50 blur-[130px]" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[#F5E6BE]/30 blur-[110px]" />
        </div>

        <div className="relative max-w-3xl w-full mx-auto flex flex-col items-center text-center z-10">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-[#D4AF37]/50 shadow-md backdrop-blur-md mb-6"
          >
            <span className="text-base">🕊️</span>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              Sacrement du Saint Baptême
            </span>
            <span className="text-base">🕊️</span>
          </motion.div>

          {/* Child Main Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-wider font-normal text-[#1E3A5F] mb-3"
          >
            {baptism.child.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg font-serif italic text-[#C5A059] mb-8 max-w-xl"
          >
            « {baptism.tagline} »
          </motion.p>

          {/* Baby Photograph in Arch with Gold Border */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-[40px] p-3 bg-gradient-to-b from-[#D4AF37]/60 via-[#B8DCFE] to-white shadow-2xl mb-8 group"
          >
            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900 border-2 border-white shadow-inner">
              <Image
                src={baptism.photo.src}
                alt={baptism.photo.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-0 inset-x-0 p-5 text-center text-white">
                <span className="font-serif text-xl tracking-wider font-semibold block">
                  {baptism.child.fullName}
                </span>
                <span className="inline-flex items-center gap-1.5 mt-1 text-xs uppercase tracking-widest text-[#F2D785] font-sans font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {baptism.eventDateFormatted.fullFrench}
                </span>
              </div>
            </div>

            {/* Floating Gold Corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-xl" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-xl" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-xl" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br-xl" />
          </motion.div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#1E3A5F]/80">
            <span className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
              {baptism.locations.church.name}
            </span>
            <span className="text-[#D4AF37]">•</span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              Office à {baptism.eventDateFormatted.time}
            </span>
          </div>
        </div>
      </section>

      {/* 2. BIBLE VERSE & SPIRITUAL THOUGHT */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 border border-[#B8DCFE] shadow-lg relative overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-[#EBF4FE] text-[#5B9FEA] flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="font-serif italic text-base sm:text-lg text-[#1E3A5F] leading-relaxed mb-3">
            {baptism.bibleVerse.verse}
          </p>
          <span className="text-xs font-sans tracking-widest uppercase font-bold text-[#C5A059]">
            — {baptism.bibleVerse.reference} —
          </span>
        </div>
      </section>

      {/* 3. INVITATION MESSAGE */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/40 shadow-xl relative">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
            <span className="text-2xl">🕊️</span>
            <div>
              <h2 className="font-serif text-2xl text-[#1E3A5F] font-bold">
                Le Sacrement de Bénédiction
              </h2>
              <p className="text-xs font-sans text-slate-400">
                Message des parents
              </p>
            </div>
          </div>

          <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#1E3A5F]/90 whitespace-pre-line">
            {baptism.invitationText}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center font-serif italic text-[#C5A059]">
            <p>{baptism.parentsMessage}</p>
          </div>
        </div>
      </section>

      {/* 4. GODPARENTS (PARRAIN & MARRAINE) */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EBF4FE] text-[#5B9FEA] text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Guides de Foi & d&apos;Amour</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
            Parrain &amp; Marraine
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {baptism.godparents.map((gp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#B8DCFE] shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7DB6F8] to-[#5B9FEA] text-white flex items-center justify-center font-serif text-xl font-bold mb-3 shadow-md">
                {gp.role === 'Parrain' ? 'P' : 'M'}
              </div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#C5A059] font-bold">
                {gp.role}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1E3A5F] mt-1 mb-2">
                {gp.name}
              </h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                {gp.message}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SCHEDULE OF THE CEREMONY */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-serif text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
            Déroulement
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
            Programme de la Journée Sacrée
          </h2>
        </div>

        <div className="space-y-4">
          {baptism.schedule.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 rounded-3xl bg-white border-2 transition-all shadow-sm ${
                item.highlight
                  ? 'border-[#7DB6F8] ring-2 ring-blue-50 shadow-md'
                  : 'border-slate-100 hover:border-[#D4AF37]/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF4FE] text-[#5B9FEA] flex items-center justify-center text-2xl shrink-0 shadow-sm">
                  {item.icon === 'church' ? '⛪' : '🥂'}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg font-bold text-[#1E3A5F]">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[#EBF4FE] text-[#1E3A5F] text-xs font-bold font-sans">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#C5A059] font-semibold mb-1">
                    📍 {item.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LOCATIONS & MAPS */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Church */}
          <div className="p-6 rounded-3xl bg-white border border-[#B8DCFE] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-wider uppercase font-bold text-[#5B9FEA]">
                Célébration Sacrée
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1E3A5F] mt-1 mb-2">
                {baptism.locations.church.name}
              </h3>
              <p className="text-xs text-slate-500 mb-2">
                {baptism.locations.church.address}, {baptism.locations.church.city}
              </p>
              <p className="text-[11px] text-[#C5A059] italic mb-4">
                💡 {baptism.locations.church.accessTip}
              </p>
            </div>
            <a
              href={baptism.locations.church.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#EBF4FE] hover:bg-[#5B9FEA] text-[#1E3A5F] hover:text-white font-sans text-xs font-bold transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Itinéraire Église</span>
            </a>
          </div>

          {/* Reception */}
          <div className="p-6 rounded-3xl bg-white border border-[#B8DCFE] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-wider uppercase font-bold text-[#C5A059]">
                Festivités & Déjeuner
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1E3A5F] mt-1 mb-2">
                {baptism.locations.reception.name}
              </h3>
              <p className="text-xs text-slate-500 mb-2">
                {baptism.locations.reception.address}, {baptism.locations.reception.city}
              </p>
              <p className="text-[11px] text-[#C5A059] italic mb-4">
                💡 {baptism.locations.reception.accessTip}
              </p>
            </div>
            <a
              href={baptism.locations.reception.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF6EB] hover:bg-[#C5A059] text-[#1E3A5F] hover:text-white font-sans text-xs font-bold transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Itinéraire Réception</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. RSVP WHATSAPP SECTION */}
      <section className="py-10 px-4 sm:px-6 max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#7DB6F8] via-[#5B9FEA] to-[#1E3A5F] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block text-3xl">🕊️</span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Confirmez votre présence
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto font-sans leading-relaxed">
              Pour nous permettre d&apos;organiser le banquet familial et réserver votre place, merci de confirmer par message WhatsApp.
            </p>

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-amber-50 text-[#1E3A5F] font-bold text-sm tracking-wider uppercase shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                <span>Confirmer sur WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-blue-200 font-sans pt-1">
              {baptism.contact.rsvpDeadline}
            </p>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="pt-8 text-center text-xs font-sans text-slate-400">
        <p className="flex items-center justify-center gap-1.5 mb-2 text-[#1E3A5F]">
          Saint Baptême de {baptism.child.fullName}
          <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
        </p>
        <p>© 2027 Famille de {baptism.child.firstName} • Faire-part propulsé par JetInvite.fun</p>
      </footer>
    </div>
  );
};
