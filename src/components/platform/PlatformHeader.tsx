'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Send, Menu, X } from 'lucide-react';

export function PlatformHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-950/85 border-b border-amber-500/20 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <span className="font-serif font-bold text-stone-950 text-xl tracking-tighter">JI</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                JetInvite
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
                .fun
              </span>
            </div>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest hidden sm:block">
              Faire-part & Invitations d'Exception
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#demo" className="hover:text-amber-300 transition-colors">
            Démo Interactive
          </a>
          <a href="#fonctionnalites" className="hover:text-amber-300 transition-colors">
            Fonctionnalités
          </a>
          <a href="#tarifs" className="hover:text-amber-300 transition-colors">
            Tarifs
          </a>
          <a href="#commander" className="hover:text-amber-300 transition-colors">
            Commander
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/mariage/demo"
            target="_blank"
            className="text-xs px-4 py-2 rounded-full border border-stone-700 hover:border-amber-500/50 text-stone-300 hover:text-amber-200 transition-colors"
          >
            Tester l'expérience
          </Link>
          <a
            href="#commander"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            Créer mon invitation
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-stone-400 hover:text-amber-300 focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-b border-amber-500/20 px-6 py-6 space-y-4">
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-300 text-base font-medium"
          >
            Démo Interactive
          </a>
          <a
            href="#fonctionnalites"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-300 text-base font-medium"
          >
            Fonctionnalités
          </a>
          <a
            href="#tarifs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-300 text-base font-medium"
          >
            Tarifs
          </a>
          <a
            href="#commander"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-300 text-base font-medium"
          >
            Commander
          </a>
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <Link
              href="/mariage/demo"
              target="_blank"
              className="text-center py-2.5 rounded-full border border-stone-700 text-stone-200 text-sm"
            >
              Tester l'expérience en direct
            </Link>
            <a
              href="#commander"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-full bg-amber-500 text-stone-950 font-bold text-sm uppercase tracking-wider"
            >
              Créer mon invitation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
