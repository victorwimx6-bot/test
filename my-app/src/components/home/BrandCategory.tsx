// src/components/home/BrandCategory.tsx
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { brands } from "../../data/brands";

interface BrandCategoryProps {
  brands?: string[]; 
}

export default function BrandCategory({ brands: brandNames }: BrandCategoryProps) {
  const filteredBrands = brandNames && brandNames.length > 0
    ? brands.filter((brand) => 
        brandNames.some(name => 
          brand.name.toLowerCase() === name.toLowerCase()
        )
      )
    : brands;

  return (
    <div className="flex justify-around flex-wrap gap-4">
      {filteredBrands.map((brand) => (
        <Link
          href={`/shop?brand=${encodeURIComponent(brand.name.toLowerCase())}`}
          key={brand.altText}
          className="block w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4"
          title={brand.name}
        >
          <Image
            src={brand.imageUrl}
            alt={brand.altText}
            width={160}
            height={160}
            className="w-full h-full object-contain"
            unoptimized
          />
        </Link>
      ))}
    </div>
  );
}