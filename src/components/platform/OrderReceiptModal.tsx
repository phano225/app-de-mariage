'use client';

import React from 'react';
import Image from 'next/image';
import {
  Printer,
  X,
  CheckCircle2,
  Calendar,
  MapPin,
  Clock,
  Phone,
  User,
  Music,
  Palette,
  Sparkles,
  ShieldCheck,
  FileText,
  Download,
} from 'lucide-react';

export interface OrderReceiptData {
  orderRef: string;
  createdAt: string;
  clientName: string;
  clientWhatsapp: string;
  rsvpWhatsapp: string;
  eventType: string;
  eventName: string;
  eventEmoji: string;
  titleOrNames: string;
  date: string;
  time: string;
  ceremonyPlace: string;
  receptionPlace?: string;
  colorTheme: string;
  accessoryLabel: string;
  accessoryValue: string;
  musicChoice: string;
  durationLabel: string;
  price: string;
  previewUrl: string;
}

interface OrderReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: OrderReceiptData;
}

export function OrderReceiptModal({ isOpen, onClose, data }: OrderReceiptModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:static print:overflow-visible">
      {/* Container Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:rounded-none">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-xs uppercase tracking-wider">
              Reçu Officiel de Commande JetInvite
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body (A4 Style) */}
        <div className="p-6 sm:p-10 space-y-6 text-slate-800 print:p-8">
          
          {/* Header Receipt */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-slate-100">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/assets/jetinvite-logo.png"
                  alt="JetInvite Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight font-serif">
                  JetInvite Studio
                </h2>
                <p className="text-[11px] text-slate-500 font-mono">
                  Invitations & Faire-part Numériques Animés • jetinvite.fun
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold text-xs border border-emerald-200">
                COMMANDE ENREGISTRÉE
              </span>
              <p className="text-xs font-mono font-bold text-purple-900">
                N° : #{data.orderRef}
              </p>
              <p className="text-[10px] text-slate-400 font-mono">
                Émis le : {data.createdAt}
              </p>
            </div>
          </div>

          {/* Customer & Event Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Box 1: Client Info */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-900">
                <User className="w-3.5 h-3.5 text-purple-600" />
                <span>Donneur d'ordre</span>
              </div>
              <div className="text-xs space-y-1">
                <div><strong>Nom & Prénom :</strong> {data.clientName}</div>
                <div><strong>WhatsApp Client :</strong> {data.clientWhatsapp}</div>
                <div><strong>WhatsApp pour RSVP :</strong> {data.rsvpWhatsapp || data.clientWhatsapp}</div>
              </div>
            </div>

            {/* Box 2: Event Info */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-900">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Événement commandé</span>
              </div>
              <div className="text-xs space-y-1">
                <div><strong>Catégorie :</strong> {data.eventEmoji} {data.eventName}</div>
                <div><strong>À l'honneur :</strong> {data.titleOrNames}</div>
                <div><strong>Date & Heure :</strong> {data.date} à {data.time}</div>
              </div>
            </div>
          </div>

          {/* Event Details Table */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs uppercase tracking-wider text-slate-700">
              Spécifications de la confection
            </div>
            <div className="p-4 space-y-2 text-xs divide-y divide-slate-100">
              <div className="pt-1 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-slate-500">Lieu Principal (GPS) :</span>
                <span className="font-semibold text-slate-900 sm:text-right">{data.ceremonyPlace}</span>
              </div>
              {data.receptionPlace && (
                <div className="pt-2 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500">Lieu Secondaire / Réception :</span>
                  <span className="font-semibold text-slate-900 sm:text-right">{data.receptionPlace}</span>
                </div>
              )}
              <div className="pt-2 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-slate-500">Thème & Couleurs :</span>
                <span className="font-semibold text-slate-900 sm:text-right">{data.colorTheme}</span>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-slate-500">{data.accessoryLabel} :</span>
                <span className="font-semibold text-slate-900 sm:text-right">{data.accessoryValue}</span>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-slate-500">Bande sonore / Musique :</span>
                <span className="font-semibold text-slate-900 sm:text-right">{data.musicChoice}</span>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-slate-500">Lien web réservé :</span>
                <span className="font-mono font-bold text-purple-700 sm:text-right">{data.previewUrl}</span>
              </div>
            </div>
          </div>

          {/* Pricing & Billing Box */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-purple-900">
                Formule retenue : {data.durationLabel}
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Paiement et validation finale après confirmation de votre maquette sur WhatsApp.
              </p>
            </div>
            <div className="text-right sm:text-right">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Montant Total</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-purple-950">
                {data.price}
              </span>
            </div>
          </div>

          {/* Commitments & Guarantee Shield */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Garanties & Engagements de Service JetInvite</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-amber-950/90 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span><strong>Délai garanti :</strong> Maquette prête sous 24h à 72h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span><strong>Photos HD :</strong> Jusqu’à 6 photos sublimées incluses</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span><strong>Réajustements :</strong> Retouches gratuites avant diffusion</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span><strong>Invités illimités :</strong> Aucun surcoût de partages</span>
              </div>
            </div>
          </div>

          {/* Footer & Certification Stamp */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-[10px] text-slate-400 space-y-0.5">
              <p>JetInvite CI • Société de Création Numérique Panafricaine • Abidjan, Côte d'Ivoire</p>
              <p>Contact Support & Designer : <strong>+225 07 77 62 08 64</strong> • contact@jetinvite.fun</p>
            </div>

            {/* Official Digital Seal */}
            <div className="px-4 py-2 rounded-xl border-2 border-dashed border-amber-500/60 bg-amber-50/40 text-amber-900 text-center shrink-0">
              <div className="text-[9px] font-mono uppercase tracking-widest font-black">
                ★ CERTIFIÉ JETINVITE ★
              </div>
              <div className="text-[10px] font-bold font-serif">
                AUTHENTIQUE & ENREGISTRÉ
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions (Hidden on print) */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between print:hidden">
          <p className="text-[11px] text-slate-500">
            Ce document fait foi de votre commande officielle auprès de JetInvite.
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger mon Reçu PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
