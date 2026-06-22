"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// helpers locales
const getWishlistIds = (): number[] => {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem("wishlist") || "[]")
  } catch { return [] }
}

const setWishlistIds = (ids: number[]) => {
  localStorage.setItem("wishlist", JSON.stringify(ids))
  window.dispatchEvent(new Event("wishlist-changed"))
}

export default function ProductCard({ product }: { product: any }) {
  const [imgIdx, setImgIdx] = useState(0)
  const multi = product.images.length > 1
  const [wishlisted, setWishlisted] = useState(() => getWishlistIds().includes(product.id))

  const toggleWishlist = () => {
    const ids = getWishlistIds()
    const next = wishlisted ? ids.filter(id => id !== product.id) : [...ids, product.id]
    setWishlistIds(next)
    setWishlisted(!wishlisted)
  }

  return (
    <div className="relative flex flex-col bg-white group border border-gray-200 hover:shadow-md transition">
      {product.discount && (
        <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
          -{product.discount}%
        </span>
      )}

      {/* Botón wishlist */}
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow transition"
      >
        {wishlisted ? (
          <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-400 hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )}
      </button>

      {/* Imagen */}
      <div className="relative w-full aspect-4/3 bg-white overflow-hidden">
        <Link href={product.href} className="absolute inset-0 block z-0">
          <Image
            src={product.images[imgIdx]}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {multi && (
          <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
            <button onClick={() => setImgIdx(i => Math.max(i - 1, 0))} className="bg-black/40 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center pointer-events-auto hover:bg-black/60 transition">
              ‹
            </button>
            <button onClick={() => setImgIdx(i => Math.min(i + 1, product.images.length - 1))} className="bg-black/40 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center pointer-events-auto hover:bg-black/60 transition">
              ›
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-3 pt-3 pb-4 flex flex-col gap-0.5">
        <Link href={product.href} className="text-gray-900 text-sm font-semibold hover:text-blue-500 transition-colors">
          {product.name}
        </Link>
        <Link href={product.href} className="flex flex-col gap-0.5">
          <p className="text-gray-500 text-xs">{product.series}</p>
          <p className="text-gray-500 text-xs mb-1">{product.brand}</p>
          <p className="text-blue-500 text-sm font-semibold">
            ${product.priceMin.toLocaleString("es-MX")}.00 – ${product.priceMax.toLocaleString("es-MX")}.00
          </p>
        </Link>
        {product.colors && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.map((c: any, i: number) => (
              <span key={i} style={{ backgroundColor: c.hex }} className="w-3.5 h-3.5 rounded-full border border-gray-200" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}