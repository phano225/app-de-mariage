'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { WeddingConfig } from '@/data/wedding-config';

interface PhotoGalleryProps {
  wedding: WeddingConfig;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ wedding }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = wedding.gallery;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [selectedIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section className="relative py-24 px-4 bg-paper-texture overflow-hidden" id="galerie">
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wedding-green/10 border border-wedding-green/30 text-wedding-green text-xs tracking-[0.25em] uppercase font-sans mb-3"
          >
            <Camera className="w-3.5 h-3.5 text-wedding-orange" />
            <span>Galerie Souvenir</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-wedding-green font-bold tracking-tight"
          >
            Instants Précieux
          </motion.h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-wedding-gold to-transparent my-4" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm uppercase tracking-widest text-wedding-green-deep/70 max-w-lg"
          >
            Les visuels officiels de {wedding.coupleNames.display} • Cliquez pour agrandir
          </motion.p>
        </div>

        {/* Gallery Grid (Balanced 2-photo authentic layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-wedding-green-deep border border-wedding-gold/40 shadow-card hover:shadow-gold hover:border-wedding-gold transition-all duration-500 flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-wedding-green-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-wedding-orange text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-wedding-gold/40 text-wedding-gold-bright text-[11px] font-sans uppercase tracking-widest">
                  {item.tag}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-center border-t border-wedding-gold/20 text-center">
                <p className="font-serif text-base font-semibold text-wedding-green">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-wedding-orange text-white transition-colors duration-200"
              aria-label="Fermer la vue plein écran"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-wedding-gold text-white transition-colors duration-200"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Navigation Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-wedding-gold text-white transition-colors duration-200"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Active Image Container */}
            <div
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] sm:h-[75vh]">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption & Counter */}
              <div className="mt-4 text-center">
                <p className="font-serif text-lg sm:text-xl text-wedding-ivory-light">
                  {images[selectedIndex].caption}
                </p>
                <p className="font-sans text-xs tracking-widest text-wedding-gold uppercase mt-1">
                  Photo {selectedIndex + 1} sur {images.length} • {images[selectedIndex].tag}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
