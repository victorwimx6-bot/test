"use client";

import { useState, useEffect, useMemo, ReactNode } from "react";
import Product from "../../data/products";
import { Brand } from "../../data/brands";
import ProductSlide from "./ProductSlide";

// Configuración de props con sobrecarga para evitar errores de tipos
interface BaseCarouselProps {
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

interface ProductsCarouselProps extends BaseCarouselProps {
  products: Product[];
  brands?: never; // Si usas products, no permitimos brands
}

interface BrandsCarouselProps extends BaseCarouselProps {
  brands: Brand[];
  products?: never; // Si usas brands, no permitimos products
}

type CarouselProps = ProductsCarouselProps | BrandsCarouselProps;

export default function Carousel(props: CarouselProps) {
  const { autoPlay = true, interval = 3000, className = "" } = props;
  
  // La lógica de mapeo y filtrado se hace 100% dentro de este useMemo
  const slides = useMemo(() => {
    // CASO 1: Nos pasaron productos (Carrusel principal)
    if ('products' in props && props.products) {
      // Filtro interno para obtener solo 1 producto por serie
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

    // CASO 2: Nos pasaron marcas (Carrusel secundario)
    if ('brands' in props && props.brands) {
      return props.brands.map((brand) => (
        <div key={brand.name} className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm p-4">
          <img src={brand.imageUrl} alt={brand.altText} className="max-h-40 object-contain" loading="lazy" />
        </div>
      ));
    }

    return [];
  }, [props]); // Se recalcula si cambian los productos o marcas

  const [current, setCurrent] = useState<number>(0);

  // Reinicia el carrusel si cambian los slides
  useEffect(() => {
    setCurrent(0);
  }, [slides]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides, autoPlay, interval]);

  if (!slides.length) return null;

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      <div className="relative h-full overflow-hidden rounded-3xl">
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

      {/* Controles */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
          > ❮ </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
          > ❯ </button>
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