'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc?: string;
  autoPlayTrigger?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc = '/audio/mariage-musique.mp3',
  autoPlayTrigger = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userManuallyPaused = useRef(false);

  // Démarre la lecture si l'utilisateur n'a pas explicitement coupé la musique
  const startPlayback = () => {
    if (userManuallyPaused.current) return;
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Si le navigateur bloque l'autoplay direct sans geste préalable,
        // les écouteurs d'interaction ci-dessous prendront le relais immédiatement.
      });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 1. Tenter de lancer le son immédiatement au chargement de la page
    startPlayback();

    // 2. Déclencheur au premier geste utilisateur (clic, tap, touche) si la politique du navigateur restreint le direct
    const handleFirstInteraction = () => {
      startPlayback();
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [audioSrc]);

  // Si un déclencheur explicite survient (ex: ouverture de l'enveloppe)
  useEffect(() => {
    if (autoPlayTrigger) {
      startPlayback();
    }
  }, [autoPlayTrigger]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      userManuallyPaused.current = true;
    } else {
      userManuallyPaused.current = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play request failed:', err);
        });
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 no-print">
      <audio
        ref={audioRef}
        src={audioSrc}
        autoPlay
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          if (audioRef.current?.paused) setIsPlaying(false);
        }}
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
