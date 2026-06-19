'use client';

import { useEffect, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    fullUrl: 'https://wiemx.com/wp-content/uploads/2025/06/hq720.jpg',
    thumbUrl: 'https://wiemx.com/wp-content/uploads/2025/06/hq720-620x350.jpg',
    alt: 'hq720',
    width: 686,
    height: 386,
  },
  {
    id: 2,
    fullUrl: 'https://wiemx.com/wp-content/uploads/2025/06/Apple-iPhone-16-wind-noise-reduction-240909_571x321.jpg.large_.jpg',
    thumbUrl: 'https://wiemx.com/wp-content/uploads/2025/06/Apple-iPhone-16-wind-noise-reduction-240909_571x321.jpg.large_-620x350.jpg',
    alt: 'Apple-iPhone-16-wind-noise-reduction',
    width: 1920,
    height: 1080,
  },
  {
    id: 3,
    fullUrl: 'https://wiemx.com/wp-content/uploads/2025/06/maxresdefault.jpg',
    thumbUrl: 'https://wiemx.com/wp-content/uploads/2025/06/maxresdefault-620x350.jpg',
    alt: 'maxresdefault',
    width: 1280,
    height: 720,
  },
];

const specsData = [
  {
    id: 'pantalla',
    title: 'Pantalla',
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/pantalla-size-50x50.png',
    items: [
      'Tipo: Super Retina XDR OLED',
      'Tamaño: 6.1" (~86% pantalla sobre cuerpo)',
      'Resolución: 1 179 × 2 556 px (~461 ppi)',
    ],
  },
  {
    id: 'cpu',
    title: 'CPU / GPU / RAM',
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/cpu-icon-50x50.png',
    items: [
      'Chip: Apple A18 (TSMC 3 nm), CPU hexacore (2×4.04 GHz + 4×2.20 GHz)',
      'GPU de 5 núcleos y NPU de 16 núcleos',
      'RAM: 8 GB LPDDR5X',
    ],
  },
  {
    id: 'usb',
    title: 'USB',
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/usb-type-50x50.png',
    items: ['USB Tipo-C'],
  },
  {
    id: 'bateria',
    title: 'Batería',
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/bateria-50x50.png',
    items: [
      'Capacidad: ≈3 561 mAh',
      'Carga: MagSafe 25 W (50% en 30 min), Qi2 15 W',
    ],
  },
  {
    id: 'memoria',
    title: 'Capacidad de memoria',
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/micro-sd-50x50.png',
    items: ['Versiones disponibles: 128, 256 y 512 GB'],
  },
  {
    id: 'camara',
    title: 'Cámara',
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/camara-50x50.png',
    items: [
      'Trasera: 48 MP f/1.6 con OIS y Dual‑Pixel PDAF',
      'Grabación: 4K hasta 60 fps, 240 fps en 1080p, Dolby Vision HDR',
      'Frontal: 12 MP f/1.9, autofocus, grabación 4K',
    ],
  },
];

const IphoneTemplate = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iphoneRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current || !iphoneRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalRange = windowHeight + rect.height;
        const currentProgress = (windowHeight - rect.top) / totalRange;

        const maxOffset = 180;
        const parallaxValue = (currentProgress - 0.5) * 2 * maxOffset;

        iphoneRef.current.style.transform = `translateY(${parallaxValue}px) scale(1.05)`;
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center px-2 py-4 overflow-hidden w-full bg-white select-none"
    >
      {/* Contenedor Maestro Extendido */}
      <div className="w-full max-w-[1500px] flex flex-col items-center gap-4 md:gap-6">
        
        {/* Grid de Imágenes de la Galería */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          {galleryImages.map((image) => (
            <div key={image.id} className="w-full aspect-video overflow-hidden rounded-md">
              <a
                href={image.fullUrl}
                data-width={image.width}
                data-height={image.height}
                data-index={image.id}
                className="block w-full h-full"
              >
                <img
                  src={image.thumbUrl}
                  alt={image.alt}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                />
              </a>
            </div>
          ))}
        </div>

        {/* iPhone Principal Interactivo (Parallax Invertido y Amplio) */}
        <div className="w-[85%] sm:w-[65%] md:w-[48%] max-w-[680px] text-center relative mt-2 z-10">
          <img
            ref={iphoneRef}
            src="https://wiemx.com/wp-content/uploads/2025/06/iphone-16-transparente-e1750110168653.png"
            alt="iPhone 16"
            className="w-full h-auto block drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] relative will-change-transform"
            style={{
              transform: 'translateY(0px) scale(1.05)',
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>

        {/* NUEVA SECCIÓN: Especificaciones Técnicas (Optimizada desde Cero) */}
        <div className="w-full mt-10 md:mt-16 border-t border-gray-100 pt-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center tracking-tight mb-8 md:mb-12">
            Especificaciones técnicas
          </h3>

          {/* Grid Principal Dividido: Especificaciones (Izquierda) + Tarjeta de Compra (Derecha) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start w-full px-2">
            
            {/* Bloque de Especificaciones (Ocupa 3 de 4 columnas en pantallas grandes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-3 gap-6 md:gap-8">
              {specsData.map((spec) => (
                <div key={spec.id} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-50 rounded-xl p-1">
                    <img
                      src={spec.icon}
                      alt={spec.title}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      {spec.title}
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      {spec.items.map((item, idx) => (
                        <p key={idx} className="leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tarjeta de Compra / CTA (Ocupa 1 columna fija) */}
            <div className="lg:col-span-1 w-full bg-gray-50/70 border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-36 h-auto mb-4 flex items-center justify-center">
                <img
                  src="https://wiemx.com/wp-content/uploads/2025/06/Apple-iPhone-16-Logo-2024-205x217.png"
                  alt="Apple iPhone 16 Logo"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                Ya disponible
              </p>
              <p className="text-3xl font-extrabold text-[#2a61b4] mb-5">
                $6799.00
              </p>
              <a
                href="/shop"
                className="w-full inline-block bg-[#2a61b4] hover:bg-[#1e4887] text-white font-medium text-sm py-3 px-6 rounded-full transition-colors shadow-sm tracking-wide"
              >
                Comprar ahora
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default IphoneTemplate;