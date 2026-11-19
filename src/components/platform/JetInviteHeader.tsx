'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Sparkles, Menu, X } from 'lucide-react';

export function JetInviteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-48 sm:w-56">
            <Image
              src="/assets/jetinvite-logo.png"
              alt="JetInvite.fun — Invitations & Faire-part en ligne"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <Link
            href="/"
            className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 font-bold hover:bg-purple-200 transition-colors"
          >
            Accueil
          </Link>
          <a href="#evenements" className="hover:text-purple-700 transition-colors">
            Nos invitations
          </a>
          <a href="#comment-ca-marche" className="hover:text-purple-700 transition-colors">
            Comment ça marche ?
          </a>
          <a href="#exemples" className="hover:text-purple-700 transition-colors">
            À propos
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2250700000000').replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 font-medium text-xs shadow-sm transition-all hover:shadow"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            <span>Nous écrire</span>
          </a>

          <a
            href="#commander"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7c24ec] to-[#a838f5] hover:from-[#6b1bcf] hover:to-[#962fe0] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-purple-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commander maintenant</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-purple-50"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 px-6 py-5 space-y-3 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-purple-700 font-bold text-base py-1"
          >
            Accueil
          </Link>
          <a
            href="#evenements"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-purple-700 text-base py-1"
          >
            Nos invitations
          </a>
          <a
            href="#comment-ca-marche"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-purple-700 text-base py-1"
          >
            Comment ça marche ?
          </a>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="https://wa.me/2250700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              <span>Nous écrire sur WhatsApp</span>
            </a>
            <a
              href="#commander"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-full bg-gradient-to-r from-[#7c24ec] to-[#a838f5] text-white font-bold text-sm uppercase tracking-wider shadow-md"
            >
              Commander maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
