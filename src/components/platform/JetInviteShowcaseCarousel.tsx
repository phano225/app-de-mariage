'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ExternalLink,
  Play,
  Heart,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Music,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  eventType: string;
  emoji: string;
  date: string;
  location: string;
  themeColorName: string;
  themeBorder: string;
  image: string;
  description: string;
  musicTitle: string;
  features: string[];
  url: string;
  badge: string;
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'carole-et-benjamin',
    slug: 'carole-et-benjamin',
    title: 'Carole & Benjamin',
    eventType: 'Mariage Royal & Fiançailles',
    emoji: '💍',
    date: 'Samedi 30 Janvier 2027',
    location: 'Mairie de Dabou & Réception à Lopou',
    themeColorName: 'Vert Émeraude & Or Royal',
    themeBorder: '#d4af37',
    image: '/assets/C&B.jpeg',
    description:
      'Une célébration princière : ouverture interactive d’une enveloppe 3D vert émeraude scellée à la cire d’or, mélodie romantique de Stevie Wonder, galerie privée, géolocalisation GPS et confirmation RSVP sur WhatsApp.',
    musicTitle: 'Stevie Wonder — For Once In My Life',
    features: [
      'Enveloppe 3D animée avec sceau de cire « C & B »',
      'Musique d’ambiance romantique en arrière-plan',
      'Itinéraire GPS Mairie de Dabou & Cour familiale Lopou',
      'Bouton de confirmation de présence WhatsApp',
    ],
    url: '/mariage/carole-et-benjamin',
    badge: 'Démo en direct',
  },
];

export function JetInviteShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play when more than 1 project exists
  useEffect(() => {
    if (SHOWCASE_PROJECTS.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const current = SHOWCASE_PROJECTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + SHOWCASE_PROJECTS.length) % SHOWCASE_PROJECTS.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
  };

  return (
    <section
      id="exemples"
      className="py-20 lg:py-24 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 relative overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-purple-200/30 via-pink-100/20 to-amber-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-purple-800 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Nos créations & Démonstrations en direct</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Découvrez nos invitations grandeur nature
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Testez l’expérience reçue par les invités : enveloppe 3D, musique immersive, détails de l’événement et confirmation RSVP.
          </p>
        </div>

        {/* Carousel Showcase Card Container */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-purple-100/80 shadow-2xl shadow-purple-900/10 overflow-hidden hover:border-purple-200 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Preview Left / Top on mobile */}
                <div className="lg:col-span-5 relative bg-gradient-to-br from-slate-900 via-[#103928] to-slate-950 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group min-h-[380px] lg:min-h-full">
                  {/* Background photo preview */}
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  </div>

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      {current.badge}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-medium border border-white/20">
                      {current.emoji} {current.eventType}
                    </span>
                  </div>

                  {/* Center Clickable Trigger */}
                  <div className="relative z-10 text-center my-auto py-8">
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col items-center gap-3 group/play"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#7c24ec] to-[#e62576] p-0.5 shadow-2xl shadow-purple-500/50 group-hover/play:scale-110 transition-transform">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-purple-700">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                        </div>
                      </div>
                      <span className="text-white text-xs sm:text-sm font-bold tracking-wide drop-shadow group-hover/play:text-purple-200 transition-colors">
                        Cliquez pour ouvrir la démo 3D ↗
                      </span>
                    </a>
                  </div>

                  {/* Bottom Photo caption */}
                  <div className="relative z-10 text-white/90 text-xs border-t border-white/10 pt-3 flex items-center justify-between">
                    <span className="font-semibold text-amber-200">{current.themeColorName}</span>
                    <span className="text-white/60 font-mono text-[11px]">jetinvite.fun</span>
                  </div>
                </div>

                {/* Information & Details Right */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>Projet Vedette Réalisé</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {current.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 font-medium">
                      <div className="flex items-center gap-1.5 text-purple-900 font-semibold">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span>{current.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span>{current.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {current.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Fonctionnalités incluses dans cette invitation :
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {current.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Music indication */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 text-purple-800 text-xs font-medium border border-purple-100">
                      <Music className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '4s' }} />
                      <span>Musique : <strong>{current.musicTitle}</strong></span>
                    </div>
                  </div>

                  {/* Actions & Link */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#7c24ec] to-[#a838f5] hover:from-[#6b1bcf] hover:to-[#962fe0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all hover:scale-105 active:scale-95 text-center"
                    >
                      <span>Ouvrir l'invitation dans un nouvel onglet</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href="#commander"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors py-2"
                    >
                      <span>Commander la même chose</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation (if more than 1 project) */}
          {SHOWCASE_PROJECTS.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Projet précédent"
                className="w-10 h-10 rounded-full border border-purple-200 bg-white text-purple-700 flex items-center justify-center hover:bg-purple-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {SHOWCASE_PROJECTS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Aller au projet ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === currentIndex
                        ? 'w-8 bg-purple-600'
                        : 'w-2.5 bg-purple-200 hover:bg-purple-300'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Projet suivant"
                className="w-10 h-10 rounded-full border border-purple-200 bg-white text-purple-700 flex items-center justify-center hover:bg-purple-50 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
