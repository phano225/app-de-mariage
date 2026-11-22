'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Heart, MapPin, Music } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-700/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Prop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Studio d'invitations numériques d'exception</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-100 font-bold tracking-tight leading-[1.15]">
              Sublimez vos événements avec un{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                faire-part animé
              </span>{' '}
              qui marque les esprits.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Oubliez les PDF statiques et les messages WhatsApp ordinaires. Offrez à vos invités une{' '}
              <strong className="text-amber-200 font-medium">ouverture d'enveloppe 3D magique</strong>, un sceau de cire à vos initiales, votre musique préférée, un itinéraire Google Maps direct et la confirmation RSVP en 1 clic.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Livré en 24h à 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Lien personnalisé unique</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Accessible sur mobile, tablette & PC</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#commander"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Commander mon invitation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/mariage/demo"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-400/50 text-sm font-medium transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Voir la démo en direct</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px]">
              {/* Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 via-emerald-600/30 to-amber-300/40 rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse" />

              {/* Smartphone Frame */}
              <div className="relative bg-stone-950 rounded-[40px] border-[6px] border-stone-800 shadow-2xl overflow-hidden aspect-[9/18] flex flex-col">
                {/* Speaker Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-stone-800 rounded-full z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-stone-900 mr-2" />
                  <div className="w-10 h-1 bg-stone-700 rounded-full" />
                </div>

                {/* Inside Screen Content (Mini Wedding Invitation Preview) */}
                <div className="relative flex-1 bg-gradient-to-b from-stone-950 via-emerald-950/70 to-stone-950 p-6 flex flex-col justify-between text-center overflow-hidden">
                  <div className="pt-6 space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-amber-300/80 font-mono">
                      FAIRE-PART OFFICIEL
                    </p>
                    <h3 className="font-serif text-2xl text-amber-100 font-bold tracking-tight">
                      Aïcha & Ibrahim
                    </h3>
                    <p className="text-[11px] text-amber-200/70">Samedi 18 Décembre 2027</p>
                  </div>

                  {/* Envelope representation with seal */}
                  <div className="relative my-auto w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-950 border border-amber-500/30 shadow-2xl flex items-center justify-center overflow-hidden group">
                    {/* Flap outlines */}
                    <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                    
                    {/* Simulated wax seal */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-amber-300 shadow-lg shadow-amber-950/80 border-2 border-amber-200/60 flex items-center justify-center text-stone-950 font-serif font-black text-xs tracking-wider">
                      A & I
                    </div>

                    <div className="absolute bottom-2 text-[9px] uppercase tracking-wider text-amber-200/70 font-mono">
                      Toucher pour ouvrir
                    </div>
                  </div>

                  {/* Bottom Features pill */}
                  <div className="space-y-2 pt-2">
                    <div className="grid grid-cols-3 gap-1.5 text-[9px] text-stone-300">
                      <div className="bg-stone-900/80 rounded-lg py-1.5 px-1 border border-stone-800 flex flex-col items-center">
                        <Music className="w-3 h-3 text-amber-400 mb-0.5" />
                        <span>Musique</span>
                      </div>
                      <div className="bg-stone-900/80 rounded-lg py-1.5 px-1 border border-stone-800 flex flex-col items-center">
                        <MapPin className="w-3 h-3 text-amber-400 mb-0.5" />
                        <span>GPS Maps</span>
                      </div>
                      <div className="bg-stone-900/80 rounded-lg py-1.5 px-1 border border-stone-800 flex flex-col items-center">
                        <Heart className="w-3 h-3 text-amber-400 mb-0.5" />
                        <span>RSVP Direct</span>
                      </div>
                    </div>

                    <Link
                      href="/mariage/demo"
                      target="_blank"
                      className="block w-full py-2 rounded-lg bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20"
                    >
                      Tester la démo en live →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
