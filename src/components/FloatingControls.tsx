'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, MessageCircle, Share2, Check, ArrowUp } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface FloatingControlsProps {
  wedding: WeddingConfig;
  visible: boolean;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ wedding, visible }) => {
  const [copied, setCopied] = useState(false);

  if (!visible) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: wedding.seo.title,
          text: `Faire-part officiel du mariage de ${wedding.coupleNames.display} le ${wedding.eventDateFormatted.fullFrench}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 no-print">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className="p-3 rounded-full bg-wedding-green-deep/90 border border-wedding-gold/40 text-wedding-gold shadow-gold backdrop-blur-md hover:bg-wedding-green hover:scale-105 active:scale-95 transition-all"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Action Pills */}
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-wedding-green-deep/90 border border-wedding-gold/50 shadow-seal backdrop-blur-md">
        {/* Share Button */}
        <button
          onClick={handleShare}
          aria-label="Partager l'invitation"
          className="p-2.5 rounded-full bg-wedding-green/70 text-wedding-gold hover:text-white hover:bg-wedding-green transition-all"
          title="Partager l'invitation"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
        </button>

        {/* Souvenir PDF Link */}
        <Link
          href="/souvenir-pdf"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-wedding-green/80 text-wedding-ivory-light hover:text-wedding-gold-bright hover:bg-wedding-green text-xs font-sans font-medium transition-all"
        >
          <FileText className="w-3.5 h-3.5 text-wedding-gold" />
          <span className="hidden sm:inline">Version PDF</span>
        </Link>

        {/* Jump to RSVP */}
        <a
          href="#rsvp"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-sunset text-white text-xs font-sans font-semibold tracking-wider uppercase shadow-sm hover:scale-105 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>RSVP</span>
        </a>
      </div>
    </div>
  );
};
