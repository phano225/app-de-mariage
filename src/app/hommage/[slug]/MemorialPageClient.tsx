'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MemorialConfig } from '@/data/memorial-config';
import { MemorialCandleAnimation } from '@/components/memorial/MemorialCandleAnimation';
import { MemorialInvitationView } from '@/components/memorial/MemorialInvitationView';
import { AudioPlayer } from '@/components/AudioPlayer';

interface MemorialPageClientProps {
  memorial: MemorialConfig;
}

export function MemorialPageClient({ memorial }: MemorialPageClientProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenMemorial = () => {
    setIsOpened(true);
    setAudioTriggered(true);
  };

  return (
    <main className="relative min-h-screen bg-[#0B0D11] text-[#F7F6F2]">
      <AudioPlayer
        audioSrc={memorial.music.audioSrc}
        autoPlayTrigger={audioTriggered}
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="candle-animation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
            className="w-full"
          >
            <MemorialCandleAnimation
              memorial={memorial}
              onOpened={handleOpenMemorial}
            />
          </motion.div>
        ) : (
          <motion.div
            key="memorial-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <MemorialInvitationView memorial={memorial} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
