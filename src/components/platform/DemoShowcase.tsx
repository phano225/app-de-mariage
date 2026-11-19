'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ExternalLink, Play, CheckCircle } from 'lucide-react';

export function DemoShowcase() {
  return (
    <section id="demo" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-stone-900 via-emerald-950/40 to-stone-900 rounded-3xl border border-amber-500/30 p-8 sm:p-12 lg:p-16 relative shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Exemple en production réelle
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-bold tracking-tight">
                Le mariage royal de Carole & Benjamin
              </h2>

              <p className="text-stone-300 text-base leading-relaxed">
                Découvrez grandeur nature ce que reçoivent vos invités. Dès qu'ils ouvrent le lien, l'enveloppe verte émeraude scellée à la cire dorée s'ouvre avec la mélodie romantique de Stevie Wonder, révélant la carte officielle et tous les détails de la célébration.
              </p>

              <div className="space-y-3 pt-2 text-sm text-stone-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sceau de cire sur-mesure aux initiales <strong>« C & B 2027 »</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Boutons de géolocalisation pour la <strong>Mairie de Dabou</strong> et la <strong>Réception à Lopou</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Galerie photo privée et confirmation de présence WhatsApp</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/mariage/carole-et-benjamin"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span>Tester l'invitation en direct</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </Link>

                <span className="text-xs text-stone-400 font-mono">
                  URL : jetinvite.fun/mariage/carole-et-benjamin
                </span>
              </div>
            </div>

            {/* Right preview thumbnail */}
            <div className="lg:col-span-5 flex justify-center">
              <Link
                href="/mariage/carole-et-benjamin"
                target="_blank"
                className="group relative block w-full max-w-sm rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-amber-400"
              >
                <div className="relative aspect-[3/4] w-full bg-stone-950">
                  <Image
                    src="/assets/C&B.jpeg"
                    alt="Mariage Carole et Benjamin"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Badge & Overlay CTA */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center mb-3 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <span className="text-amber-200 font-serif font-bold text-lg">
                      Ouvrir le faire-part interactif
                    </span>
                    <span className="text-xs text-stone-400 mt-1">
                      Cliquez pour voir l'animation 3D
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
