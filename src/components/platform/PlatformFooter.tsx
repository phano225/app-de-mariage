'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle } from 'lucide-react';

export function PlatformFooter() {
  return (
    <footer className="bg-white border-t border-purple-100 text-slate-600 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="relative h-12 w-48">
              <Image
                src="/assets/jetinvite-logo.png"
                alt="JetInvite.fun"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              La plateforme créative de faire-part et d'invitations numériques animées en quelques clics. Impressionnez vos proches dès le premier regard.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Nos Services</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#evenements" className="hover:text-purple-700 transition-colors">Mariage & Cérémonies</a>
              </li>
              <li>
                <a href="#evenements" className="hover:text-purple-700 transition-colors">Anniversaires & Jubilés</a>
              </li>
              <li>
                <a href="#evenements" className="hover:text-purple-700 transition-colors">Baptêmes & Naissances</a>
              </li>
              <li>
                <a href="#commander" className="hover:text-purple-700 transition-colors">Commander en ligne</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Support Client</h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/2250700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>Contact direct WhatsApp</span>
              </a>
              <p className="text-slate-400">Assistance disponible 7j/7 pour vos commandes.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>JetInvite.fun</strong>. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            Conçu avec <Heart className="w-3.5 h-3.5 text-[#e62576] fill-[#e62576] mx-0.5" /> pour vos plus beaux moments.
          </div>
        </div>
      </div>
    </footer>
  );
}
