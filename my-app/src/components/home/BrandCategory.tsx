// src/components/home/BrandCategory.tsx
import Image from 'next/image';
import { brands } from "../../data/brands";

export default function BrandCategory() {
  return (
    <div className="flex justify-around">
      {brands.map((phone) => (
        <a 
        href={phone.url}
        key={phone.altText}
        className="block w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4"
      >
        <Image
          src={phone.imageUrl}
          alt={phone.altText}
          width={160}
          height={160}
          className="w-full h-full object-contain"
          unoptimized
        />
      </a>
      ))}
    </div>
  );
}