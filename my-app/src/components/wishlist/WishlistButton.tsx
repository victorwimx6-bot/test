"use client"

import { useState, useEffect } from "react"

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

type Props = {
  productId: number
  className?: string
}

export default function WishlistButton({ productId, className = "w-8 h-8" }: Props) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    setIsWishlisted(getWishlistIds().includes(productId))
    const handler = () => setIsWishlisted(getWishlistIds().includes(productId))
    window.addEventListener("wishlist-changed", handler)
    return () => window.removeEventListener("wishlist-changed", handler)
  }, [productId])

  const toggle = () => {
    const ids = getWishlistIds()
    const next = ids.includes(productId) ? ids.filter(id => id !== productId) : [...ids, productId]
    setWishlistIds(next)
    setIsWishlisted(!isWishlisted)
  }

  return (
    <button
      onClick={toggle}
      className={`${className} flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow transition`}
      aria-label={isWishlisted ? "Quitar de wishlist" : "Agregar a wishlist"}
    >
      {isWishlisted ? (
        <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-400 hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )}
    </button>
  )
}