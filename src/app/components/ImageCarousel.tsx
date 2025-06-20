'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

type ImageCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false,
    dragFree: false,
    duration: 20,
    align: 'center',
    inViewThreshold: 0.7
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClicking, setIsClicking] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi && !isClicking) {
      setIsClicking(true);
      emblaApi.scrollPrev();
      setTimeout(() => setIsClicking(false), 250);
    }
  }, [emblaApi, isClicking]);

  const scrollNext = useCallback(() => {
    if (emblaApi && !isClicking) {
      setIsClicking(true);
      emblaApi.scrollNext();
      setTimeout(() => setIsClicking(false), 250);
    }
  }, [emblaApi, isClicking]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);

    let autoplay: NodeJS.Timeout;
    let userInteractionTimeout: NodeJS.Timeout;

    const startAutoplay = () => {
      autoplay = setInterval(() => {
        if (!isClicking) {
          emblaApi.scrollNext();
        }
      }, 3500);
    };

    const stopAutoplay = () => {
      if (autoplay) clearInterval(autoplay);
    };

    const handleUserInteraction = () => {
      stopAutoplay();
      clearTimeout(userInteractionTimeout);
      userInteractionTimeout = setTimeout(() => {
        startAutoplay();
      }, 2000);
    };

    // Écouter les interactions utilisateur
    emblaApi.on('pointerDown', handleUserInteraction);

    // Démarrer l'autoplay
    startAutoplay();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('pointerDown', handleUserInteraction);
      stopAutoplay();
      clearTimeout(userInteractionTimeout);
    };
  }, [emblaApi, onSelect, isClicking]);

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
      {/* Carrousel */}
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full will-change-transform transition-transform ease-out">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] relative h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading={index <= 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Flèches de navigation */}
      <button
        onClick={scrollPrev}
        disabled={isClicking}
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hidden md:block ${isClicking ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Image précédente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        disabled={isClicking}
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hidden md:block ${isClicking ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Image suivante"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicateurs de progression simplifiés */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 px-4 py-2 rounded-full z-10">
        <span className="text-white text-sm font-medium">
          {selectedIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
} 