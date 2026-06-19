// src/components/home/ProductCard.tsx
"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProductCard({ product }: { product: any }) {
  const [imgIdx, setImgIdx] = useState(0)
  const multi = product.images.length > 1

  return (
    <div className="
    relative 
    flex 
    flex-col 
    bg-white 
    group
    border
    border-gray-200
    hover:shadow-md
    transition
    ">
      {product.discount && (
        <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
          -{product.discount}%
        </span>
      )}

      <div className="relative w-full aspect-4/3 bg-white overflow-hidden">
        <Image src={product.images[imgIdx]} alt={product.name} fill className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" />

        {multi && (
          <>
            <button onClick={() => setImgIdx(i => Math.max(i - 1, 0))} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-0.5">
            </button>
            <button onClick={() => setImgIdx(i => Math.min(i + 1, product.images.length - 1))} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-0.5">
            </button>
          </>
        )}
      </div>

      <div className="px-3 pt-3 pb-4 flex flex-col gap-0.5">
        <Link href={product.href} className="text-gray-900 text-sm font-semibold hover:text-blue-500 transition-colors">{product.name}</Link>
        <p className="text-gray-500 text-xs">{product.series}</p>
        <p className="text-gray-500 text-xs mb-1">{product.brand}</p>
        <p className="text-blue-500 text-sm font-semibold">
          ${product.priceMin.toLocaleString("es-MX")}.00 – ${product.priceMax.toLocaleString("es-MX")}.00
        </p>
        {product.colors && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.map((c: any, i: number) => (
              <span key={i} style={{ backgroundColor: c.hex }} className="w-3.5 h-3.5 rounded-full border border-white/20" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}