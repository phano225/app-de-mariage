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

        {/* 6 Category Pills matching the mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {/* 1. Mariage */}
          <a
            href="#commander"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-2.5 transition-colors">
              <span className="text-2xl">💍</span>
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Mariage
            </span>
          </a>

          {/* 2. Anniversaire */}
          <a
            href="#commander"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center mb-2.5 transition-colors text-pink-500">
              <Cake className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Anniversaire
            </span>
          </a>

          {/* 3. Baptême */}
          <a
            href="#commander"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center mb-2.5 transition-colors">
              <span className="text-2xl">✝️</span>
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Baptême
            </span>
          </a>

          {/* 4. Graduation */}
          <a
            href="#commander"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mb-2.5 transition-colors text-indigo-600">
              <GraduationCap className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Graduation
            </span>
          </a>

          {/* 5. Événement pro */}
          <a
            href="#commander"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center mb-2.5 transition-colors text-[#7c24ec]">
              <CalendarDays className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Événement pro
            </span>
          </a>

          {/* 6. Autres événements */}
          <a
            href="#commander"
            className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center mb-2.5 transition-colors text-slate-600">
              <MoreHorizontal className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="font-bold text-slate-800 text-xs group-hover:text-[#7c24ec] transition-colors">
              Autres événements
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
