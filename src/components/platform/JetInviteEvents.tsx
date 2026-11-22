'use client';

import React from 'react';
import { Cake, GraduationCap, CalendarDays, MoreHorizontal } from 'lucide-react';

export function JetInviteEvents() {
  return (
    <section id="evenements" className="py-12 bg-[#faf7fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1e0e3e] tracking-tight">
            Des invitations pour <span className="text-[#7c24ec]">tous vos événements</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Quel que soit votre moment spécial, nous créons l'invitation parfaite.
          </p>
        </div>

        {/* 6 Category Pills matching the 6 live demos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {/* 1. Mariage */}
          <a
            href="/mariage/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-2.5 transition-colors">
              <span className="text-2xl">💍</span>
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Mariage
            </span>
            <span className="text-[10px] text-purple-600 font-semibold mt-0.5 opacity-80 group-hover:opacity-100">
              Voir la démo →
            </span>
          </a>

          {/* 2. Anniversaire */}
          <a
            href="/anniversaire/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center mb-2.5 transition-colors text-pink-500">
              <Cake className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Anniversaire
            </span>
            <span className="text-[10px] text-pink-600 font-semibold mt-0.5 opacity-80 group-hover:opacity-100">
              Voir la démo →
            </span>
          </a>

          {/* 3. Baptême */}
          <a
            href="/bapteme/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center mb-2.5 transition-colors">
              <span className="text-2xl">🕊️</span>
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Baptême
            </span>
            <span className="text-[10px] text-sky-600 font-semibold mt-0.5 opacity-80 group-hover:opacity-100">
              Voir la démo →
            </span>
          </a>

          {/* 4. Hommage & Obsèques */}
          <a
            href="/hommage/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-stone-100 group-hover:bg-stone-200 flex items-center justify-center mb-2.5 transition-colors">
              <span className="text-2xl">🕯️</span>
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Hommage / Obsèques
            </span>
            <span className="text-[10px] text-stone-600 font-semibold mt-0.5 opacity-80 group-hover:opacity-100">
              Voir la démo →
            </span>
          </a>

          {/* 5. Conférence Pro */}
          <a
            href="/conference/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center mb-2.5 transition-colors text-[#7c24ec]">
              <CalendarDays className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Conférence / Pro
            </span>
            <span className="text-[10px] text-purple-600 font-semibold mt-0.5 opacity-80 group-hover:opacity-100">
              Voir la démo →
            </span>
          </a>

          {/* 6. Festival & Soirée */}
          <a
            href="/festival/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 group-hover:bg-fuchsia-100 flex items-center justify-center mb-2.5 transition-colors">
              <span className="text-2xl">🎸</span>
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Festival &amp; Soirée
            </span>
            <span className="text-[10px] text-fuchsia-600 font-semibold mt-0.5 opacity-80 group-hover:opacity-100">
              Voir la démo →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
