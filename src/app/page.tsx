'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { caroleEtBenjaminWedding } from '@/data/wedding-config';
import { EnvelopeAnimation } from '@/components/EnvelopeAnimation';
import { AudioPlayer } from '@/components/AudioPlayer';
import { InvitationCover } from '@/components/InvitationCover';
import { InvitationMessage } from '@/components/InvitationMessage';
import { WeddingCountdown } from '@/components/WeddingCountdown';
import { WeddingSchedule } from '@/components/WeddingSchedule';
import { WeddingLocation } from '@/components/WeddingLocation';
import { PhotoGallery } from '@/components/PhotoGallery';
import { RSVPButton } from '@/components/RSVPButton';
import { WeddingFooter } from '@/components/WeddingFooter';
import { FloatingControls } from '@/components/FloatingControls';

export default function WeddingPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setAudioTriggered(true);
  };

  return (
    <main className="relative min-h-screen bg-wedding-green-deep text-wedding-ivory-light">
      {/* Background Music Player */}
      <AudioPlayer
        audioSrc={caroleEtBenjaminWedding.music.audioSrc}
        autoPlayTrigger={audioTriggered}
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          /* SCENE 1 & 2 : L'Arrivée et l'Ouverture de l'Enveloppe */
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="w-full"
          >
            <EnvelopeAnimation
              wedding={caroleEtBenjaminWedding}
              onOpened={handleOpenEnvelope}
            />
          </motion.div>
        ) : (
          /* SCÈNES 3 À 10 : L'EXPÉRIENCE COMPLÈTE DU FAIRE-PART */
          <motion.div
            key="invitation-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col"
          >
            {/* Scène 3 : Présentation des mariés & Couverture */}
            <InvitationCover wedding={caroleEtBenjaminWedding} />

            {/* Scène 4 : Message officiel d'invitation */}
            <InvitationMessage wedding={caroleEtBenjaminWedding} />

            {/* Scène 5 : Compte à rebours officiel */}
            <WeddingCountdown wedding={caroleEtBenjaminWedding} />

            {/* Scène 6 : Programme détaillé du mariage */}
            <WeddingSchedule wedding={caroleEtBenjaminWedding} />

            {/* Scène 7 : Localisation & Accès GPS */}
            <WeddingLocation wedding={caroleEtBenjaminWedding} />

            {/* Scène 8 : Galerie photographique interactive */}
            <PhotoGallery wedding={caroleEtBenjaminWedding} />

            {/* Scène 9 : Confirmation de présence (RSVP WhatsApp) */}
            <RSVPButton wedding={caroleEtBenjaminWedding} />

            {/* Scène 10 : Conclusion & Signature */}
            <WeddingFooter wedding={caroleEtBenjaminWedding} />

            {/* Contrôles d'accès rapide flottants */}
            <FloatingControls wedding={caroleEtBenjaminWedding} visible={isOpened} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
