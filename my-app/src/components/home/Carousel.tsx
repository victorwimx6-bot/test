"use client";

import { useState, useEffect, useMemo, ReactNode } from "react";
import Product from "../../data/products";
import { Brand } from "../../data/brands";
import ProductSlide from "./ProductSlide";

// El componente acepta O productos O marcas, nunca ambos
interface BaseCarouselProps {
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

interface ProductsCarouselProps extends BaseCarouselProps {
  products: Product[];
  brands?: never; 
}

interface BrandsCarouselProps extends BaseCarouselProps {
  brands: Brand[];
  products?: never; 
}

type CarouselProps = ProductsCarouselProps | BrandsCarouselProps;

export default function Carousel(props: CarouselProps) {
  const { autoPlay = true, interval = 3000, className = "" } = props;
  
  // Preparamos los slides una sola vez, no en cada render
  const slides = useMemo(() => {
    // Si recibimos productos, mostramos uno por serie (sin repetir)
    if ('products' in props && props.products) {
      const seenSeries = new Set();
      const featuredProducts = props.products.filter((product) => {
        const key = product.series || product.brand;
        if (!seenSeries.has(key)) {
          seenSeries.add(key);
          return true;
        }
        return false;
      });

      return featuredProducts.map((product) => (
        <ProductSlide key={product.id} product={product} />
      ));
    }

    // Si recibimos marcas, mostramos sus logos
    if ('brands' in props && props.brands) {
      return props.brands.map((brand) => (
        <div key={brand.name} className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm p-4">
          <img src={brand.imageUrl} alt={brand.altText} className="max-h-40 object-contain" loading="lazy" />
        </div>
      ));
    }

    return [];
  }, [props]); // solo se recalcula si cambian products o brands

  const [current, setCurrent] = useState<number>(0);

  // Cuando los slides cambian, volvemos al primero
  useEffect(() => {
    setCurrent(0);
  }, [slides]);

  // Autoavance automático
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return; 
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % slides.length); // avanza y vuelve al inicio
    }, interval);
    return () => clearInterval(timer); 
  }, [slides, autoPlay, interval]);

  // Si no hay nada que mostrar, no renderizamos
  if (!slides.length) return null;

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      <div className="relative h-full overflow-hidden rounded-3xl">
        {/* Todos los slides existen en el DOM, pero solo el activo se ve */}
        {slides.map((slide: ReactNode, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Flechas y puntitos solo si hay más de un slide */}
      {slides.length > 1 && (
        <>
          {/* Flecha izquierda: retrocede, si está en 0 salta al último */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
          > ❮ </button>
          
          {/* Flecha derecha: avanza, si está en el último salta al primero */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
          > ❯ </button>
          
          {/* Indicadores de posición */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_: ReactNode, index: number) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}