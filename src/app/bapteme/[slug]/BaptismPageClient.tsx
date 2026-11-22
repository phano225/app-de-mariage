'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BaptismConfig } from '@/data/baptism-config';
import { BaptismEnvelopeAnimation } from '@/components/baptism/BaptismEnvelopeAnimation';
import { BaptismInvitationView } from '@/components/baptism/BaptismInvitationView';
import { AudioPlayer } from '@/components/AudioPlayer';

interface BaptismPageClientProps {
  baptism: BaptismConfig;
}

export function BaptismPageClient({ baptism }: BaptismPageClientProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setAudioTriggered(true);
  };

  return (
    <main className="relative min-h-screen bg-[#F8FBFE] text-[#1E3A5F]">
      <AudioPlayer
        audioSrc={baptism.music.audioSrc}
        autoPlayTrigger={audioTriggered}
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-baptism"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="w-full"
          >
            <BaptismEnvelopeAnimation
              baptism={baptism}
              onOpened={handleOpenEnvelope}
            />
          </motion.div>
        ) : (
          <motion.div
            key="invitation-view-baptism"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <BaptismInvitationView baptism={baptism} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
