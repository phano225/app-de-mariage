'use client';

import React from 'react';
import { ShoppingCart, Edit3, Image as ImageIcon, MessageCircle, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '1',
    title: 'Choisissez votre événement',
    icon: ShoppingCart,
  },
  {
    step: '2',
    title: 'Remplissez vos informations',
    icon: Edit3,
  },
  {
    step: '3',
    title: 'Validez votre commande',
    icon: ImageIcon,
  },
  {
    step: '4',
    title: 'Finalisez sur WhatsApp',
    icon: MessageCircle,
  },
];

export function JetInviteHowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] bg-gradient-to-r from-[#2c0e52] via-[#431475] to-[#2c0e52] text-white p-5 sm:p-7 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Title */}
          <div className="text-center lg:text-left shrink-0">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Comment ça marche ?
            </h3>
          </div>

          {/* 4 Steps */}
          <div className="w-full flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex items-center justify-center gap-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-11 h-11 rounded-full bg-purple-700/80 border border-purple-400/30 flex items-center justify-center mb-1.5 shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-bold text-purple-100 leading-tight">
                      {s.step}. {s.title}
                    </span>
                  </div>

                  {idx < STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-purple-300/40 shrink-0 ml-auto" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
