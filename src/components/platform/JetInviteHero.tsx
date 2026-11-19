'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket, Play, Zap, Palette, Clock } from 'lucide-react';

export function JetInviteHero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16 bg-[#fbf9fe]">
      {/* Background with the silky lavender texture and ambient soft lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg-podium.jpg"
          alt="Ambiance JetInvite"
          fill
          priority
          className="object-cover object-top opacity-60 pointer-events-none"
        />
        {/* Soft gradient overlays to blend seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9fe] via-[#fbf9fe]/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/70 text-[#7c24ec] text-xs font-bold tracking-wide">
              <Zap className="w-3.5 h-3.5 fill-[#7c24ec]" />
              <span>Rapide • Personnalisé • Professionnel</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e0e3e] tracking-tight leading-[1.14]">
              Créez votre invitation<br />
              en ligne en{' '}
              <span className="text-[#d81b60]">
                quelques clics !
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Mariage, Anniversaire, Baptême, Graduation, Cérémonie, Événement professionnel... Commandez votre invitation personnalisée et recevez-la rapidement.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#commander"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7c24ec] to-[#9d34da] hover:from-[#6b1bcf] hover:to-[#8c2ac4] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-purple-500/30 transition-all hover:scale-105 active:scale-95"
              >
                <Rocket className="w-4 h-4" />
                <span>Passer une commande</span>
              </a>

              <Link
                href="/mariage/carole-et-benjamin"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-[#1e0e3e] border border-purple-200 font-bold text-xs sm:text-sm shadow-sm transition-all hover:border-purple-300"
              >
                <div className="w-5 h-5 rounded-full border border-purple-400 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-[#1e0e3e] text-[#1e0e3e] ml-0.5" />
                </div>
                <span>Voir des exemples</span>
              </Link>
            </div>

            {/* 3 Value badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Zap className="w-3 h-3 fill-current" />
                </div>
                <span>Commande simple</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[#7c24ec]">
                  <Palette className="w-3 h-3" />
                </div>
                <span>Design sur mesure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <Clock className="w-3 h-3" />
                </div>
                <span>Livraison rapide</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Perfectly blended Phone & 3D Cards WITHOUT ANY BOX OR BLACK BORDER */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[534/385]">
              <Image
                src="/assets/hero-phone-cards.png"
                alt="Smartphone JetInvite sur podium avec invitations 3D"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
