'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ConferenceConfig } from '@/data/conference-config';
import { ConferenceBadgeAnimation } from '@/components/conference/ConferenceBadgeAnimation';
import { ConferenceInvitationView } from '@/components/conference/ConferenceInvitationView';
import { AudioPlayer } from '@/components/AudioPlayer';

interface ConferencePageClientProps {
  conference: ConferenceConfig;
}

export function ConferencePageClient({ conference }: ConferencePageClientProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenConference = () => {
    setIsOpened(true);
    setAudioTriggered(true);
  };

  return (
    <main className="relative min-h-screen bg-[#0A192F] text-slate-100">
      <AudioPlayer
        audioSrc={conference.music.audioSrc}
        autoPlayTrigger={audioTriggered}
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="badge-animation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="w-full"
          >
            <ConferenceBadgeAnimation
              conference={conference}
              onOpened={handleOpenConference}
            />
          </motion.div>
        ) : (
          <motion.div
            key="conference-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <ConferenceInvitationView conference={conference} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
