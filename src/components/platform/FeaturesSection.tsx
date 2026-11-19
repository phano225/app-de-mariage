'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Music,
  MapPin,
  Clock,
  MessageCircle,
  FileDown,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: "Enveloppe 3D & Sceau de Cire",
    description: "Une animation interactive d'ouverture qui plonge immédiatement vos invités dans la féerie de votre événement.",
    badge: "Effet Waouh",
  },
  {
    icon: Music,
    title: "Bande Sonore Personnalisée",
    description: "Laissez retentir votre chanson d'amour ou morceau fétiche dès que l'invité touche l'enveloppe.",
    badge: "Émotion",
  },
  {
    icon: MapPin,
    title: "Boutons Google Maps 1-Clic",
    description: "Plus aucun invité perdu : un simple clic sur leur téléphone ouvre l'itinéraire GPS précis jusqu'au lieu.",
    badge: "Pratique",
  },
  {
    icon: MessageCircle,
    title: "Confirmation RSVP WhatsApp",
    description: "Les invités confirment leur présence instantanément par WhatsApp avec un message clair et structuré.",
    badge: "Temps réel",
  },
  {
    icon: Clock,
    title: "Compte à Rebours Dynamique",
    description: "Un compte à rebours précis jusqu'au grand jour, pour faire monter l'excitation auprès de vos proches.",
    badge: "Interactif",
  },
  {
    icon: FileDown,
    title: "Faire-part Souvenir PDF A4",
    description: "Une version imprimable haute définition téléchargeable en un clic, à conserver précieusement dans un album.",
    badge: "Inoubliable",
  },
];

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-20 lg:py-28 bg-stone-900/60 border-y border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            L'excellence du faire-part digital
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-bold tracking-tight">
            Tout ce dont vous avez besoin pour un événement inoubliable
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Combinez la beauté de la tradition avec la puissance du numérique. Partagez votre lien en un message WhatsApp ou SMS à tous vos invités.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-stone-800 text-amber-300/90 border border-stone-700">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-100 mb-2 group-hover:text-amber-200 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
