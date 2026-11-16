'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WeddingConfig } from '@/data/wedding-config';
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

interface Props {
  wedding: WeddingConfig;
}

export default function WeddingPageClient({ wedding }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setAudioTriggered(true);
  };

  return (
    <main className="relative min-h-screen bg-wedding-green-deep text-wedding-ivory-light">
      <AudioPlayer
        audioSrc={wedding.music.audioSrc}
        autoPlayTrigger={audioTriggered}
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="w-full"
          >
            <EnvelopeAnimation
              wedding={wedding}
              onOpened={handleOpenEnvelope}
            />
          </motion.div>
        ) : (
          <motion.div
            key="invitation-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col"
          >
            <InvitationCover wedding={wedding} />
            <InvitationMessage wedding={wedding} />
            <WeddingCountdown wedding={wedding} />
            <WeddingSchedule wedding={wedding} />
            <WeddingLocation wedding={wedding} />
            <PhotoGallery wedding={wedding} />
            <RSVPButton wedding={wedding} />
            <WeddingFooter wedding={wedding} />
            <FloatingControls wedding={wedding} visible={isOpened} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
