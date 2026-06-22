"use client"

import { useEffect, useState } from "react"
import { products } from "../../data/products"
import ProductGrid from "../../components/ProductGrid"

const getWishlistIds = (): number[] => {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem("wishlist") || "[]")
  } catch { return [] }
}

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState<number[]>(getWishlistIds)

  useEffect(() => {
    const handler = () => setWishlistIds(getWishlistIds())
    window.addEventListener("wishlist-changed", handler)
    return () => window.removeEventListener("wishlist-changed", handler)
  }, [])

  const wishlistProducts = products.filter(p => wishlistIds.includes(p.id))

  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Mi Wishlist</h1>
      {wishlistProducts.length > 0 ? (
        <ProductGrid products={wishlistProducts} />
      ) : (
        <div className="text-center text-gray-500 py-20">
          <svg className="mx-auto w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p className="text-lg">Aún no tienes productos en tu wishlist</p>
          <p className="mt-2 text-sm">Explora la tienda y agrega tus favoritos</p>
        </div>
      )}
    </section>
  )
}