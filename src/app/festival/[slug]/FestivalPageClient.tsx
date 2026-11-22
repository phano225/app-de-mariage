'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FestivalConfig } from '@/data/festival-config';
import { FestivalTicketAnimation } from '@/components/festival/FestivalTicketAnimation';
import { FestivalInvitationView } from '@/components/festival/FestivalInvitationView';
import { AudioPlayer } from '@/components/AudioPlayer';

interface FestivalPageClientProps {
  festival: FestivalConfig;
}

export function FestivalPageClient({ festival }: FestivalPageClientProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenFestival = () => {
    setIsOpened(true);
    setAudioTriggered(true);
  };

  return (
    <main className="relative min-h-screen bg-[#090214] text-white">
      <AudioPlayer
        audioSrc={festival.music.audioSrc}
        autoPlayTrigger={audioTriggered}
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="ticket-animation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="w-full"
          >
            <FestivalTicketAnimation
              festival={festival}
              onOpened={handleOpenFestival}
            />
          </motion.div>
        ) : (
          <motion.div
            key="festival-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <FestivalInvitationView festival={festival} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
