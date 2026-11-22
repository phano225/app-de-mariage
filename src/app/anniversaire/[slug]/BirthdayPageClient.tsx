'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BirthdayConfig } from '@/data/birthday-config';
import { BirthdayGiftBoxAnimation } from '@/components/birthday/BirthdayGiftBoxAnimation';
import { BirthdayInvitationView } from '@/components/birthday/BirthdayInvitationView';
import { AudioPlayer } from '@/components/AudioPlayer';

interface BirthdayPageClientProps {
  birthday: BirthdayConfig;
}

export function BirthdayPageClient({ birthday }: BirthdayPageClientProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenGift = () => {
    setIsOpened(true);
    setAudioTriggered(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FFF7FB] text-slate-900">
      <AudioPlayer
        audioSrc={birthday.music.audioSrc}
        autoPlayTrigger={audioTriggered}
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="gift-box"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.7, ease: 'easeInOut' } }}
            className="w-full"
          >
            <BirthdayGiftBoxAnimation
              birthday={birthday}
              onOpened={handleOpenGift}
            />
          </motion.div>
        ) : (
          <motion.div
            key="invitation-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <BirthdayInvitationView birthday={birthday} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
