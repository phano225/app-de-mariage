'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc?: string;
  autoPlayTrigger?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc = '/audio/mariage-musique.mp3',
  autoPlayTrigger = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-play when user triggers envelope open (respects browser policy since it was triggered by a user click)
  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Browser prevented autoplay or file not found yet; remains paused
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    setHasInteracted(true);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play request failed or audio file not provided yet:', err);
          setAudioAvailable(false);
        });
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 no-print">
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="none"
        onError={() => {
          // File not provided yet; keep UI gracefully visible for when file is dropped
          setAudioAvailable(false);
        }}
        onCanPlay={() => setAudioAvailable(true)}
      />

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Couper la musique' : 'Activer la musique'}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-wedding-green-deep/90 border border-wedding-gold/40 text-wedding-gold shadow-gold backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-wedding-gold hover:text-wedding-gold-bright"
      >
        <span className="relative flex h-3 w-3">
          {isPlaying ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wedding-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-wedding-orange"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-3 w-3 bg-wedding-gold/40"></span>
          )}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-wedding-ivory/60 group-hover:text-wedding-gold" />
        )}

        <span className="text-xs font-medium tracking-wider text-wedding-ivory-light uppercase hidden sm:inline">
          {isPlaying ? 'Ambiance nuptiale' : 'Musique'}
        </span>
      </button>
    </div>
  );
};
