// src/components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import { images as defaultImages } from "../../data/anunciosNav";

interface CarouselProps {
  images?: string[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({
  images = defaultImages,
  autoPlay = true,
  interval = 3000,
}: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  // Si cambia el arreglo de imágenes (por ejemplo, otro <Carousel images={...} />
  // montado en la misma página), reinicia el índice para no quedar fuera de rango.
  useEffect(() => {
    setCurrent(0);
  }, [images]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, autoPlay, interval]);

  if (!images.length) return null;

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
              index === current ? "opacity-100" : "opacity-0"
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

      {/* Botones — solo si hay más de una imagen */}
      {images.length > 1 && (
        <>
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
                  index === current ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// como se hace un carousel que sea muy responsive, en todas las pantallas se desplace en automatico, en pantalla gradnes tiene botones de desplazamiento,  pero en tables y celulares se desaparecen y se arrastran con el touch, no olvidar que se desplaza a la derecha en automatico siempre, ete carousel no es 100% imagen, el carousel que quieren es para mostrar un ceular random de cara serie, su descripcion, boton de compra con acceso directo la publicacion del celular en especifico que se busco