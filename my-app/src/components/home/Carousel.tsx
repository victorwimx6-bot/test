// src/components/Carousel.tsx
"use client";

import { useState, useEffect } from 'react';
import { images } from "../../data/anunciosNav";

interface CarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({ 
  autoPlay = true, 
  interval = 3000 
}: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, autoPlay, interval]);

  const goToSlide = (index: number): void => {
    setCurrent(index);
  };

  const prevSlide = (): void => {
    setCurrent((prev: number) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrent((prev: number) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((img: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover" 
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        aria-label="Anterior"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        aria-label="Siguiente"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_: string, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}