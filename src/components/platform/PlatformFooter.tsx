'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Mail } from 'lucide-react';

export function PlatformFooter() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl text-amber-200">JetInvite</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
                .fun
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Le premier studio digital dédié à la création de faire-part et d'invitations animées d'exception. Épatez vos invités avant même le jour J.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#demo" className="hover:text-amber-300 transition-colors">Démo Interactive</a>
              </li>
              <li>
                <a href="#fonctionnalites" className="hover:text-amber-300 transition-colors">Fonctionnalités</a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-amber-300 transition-colors">Tarifs & Offres</a>
              </li>
              <li>
                <a href="#commander" className="hover:text-amber-300 transition-colors">Commander en ligne</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-200">Contact Studio</h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/2250700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Assistance WhatsApp 7j/7</span>
              </a>
              <p className="text-stone-500">Service disponible partout dans le monde.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} <strong>JetInvite.fun</strong>. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            Conçu avec <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" /> pour vos moments magiques.
          </div>
        </div>
      </div>
    </footer>
  );
}
