'use client';

import { useEffect, useRef, useState } from 'react';

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
    fullUrl:
      'https://wiemx.com/wp-content/uploads/2025/06/Apple-iPhone-16-wind-noise-reduction-240909_571x321.jpg.large_.jpg',
    thumbUrl:
      'https://wiemx.com/wp-content/uploads/2025/06/Apple-iPhone-16-wind-noise-reduction-240909_571x321.jpg.large_-620x350.jpg',
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

const IphoneTemplate = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const sectionCenter = rect.top + rect.height / 2;
        const windowCenter = windowHeight / 2;
        const distanceFromCenter = sectionCenter - windowCenter;
        
        const maxOffset = 80;
        const parallaxValue = (distanceFromCenter / windowHeight) * maxOffset;
        const clampedValue = Math.max(-maxOffset, Math.min(maxOffset, parallaxValue));
        
        setOffsetY(clampedValue);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative flex justify-center items-center bg-[#f5f5f7] py-8 px-4 sm:py-16 sm:px-8 overflow-visible min-h-screen"
    >
      <div
        className="w-full max-w-[1400px] flex flex-col items-center gap-8"
        style={{ perspective: '800px', WebkitPerspective: '800px' }}
      >
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
          {galleryImages.map((image) => (
            <div key={image.id} className="w-full aspect-[16/9] overflow-hidden rounded-xl">
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
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Floating iPhone Image with Parallax Effect */}
        <div className="w-full max-w-[600px] sm:max-w-[700px] text-center relative mt-4">
          <img
            src="https://wiemx.com/wp-content/uploads/2025/06/iphone-16-transparente-e1750110168653.png"
            alt="iPhone 16"
            className="w-full h-auto block drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10"
            style={{
              transform: `translateY(${offsetY}px)`,
              transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IphoneTemplate;