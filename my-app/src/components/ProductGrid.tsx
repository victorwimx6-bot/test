"use client"

import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const ChevronL = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ChevronR = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const DESKTOP_PAGE = 8
const MOBILE_PAGE = 4
const BREAKPOINT = "(min-width: 768px)"

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(BREAKPOINT)
    setIsDesktop(mql.matches)

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mql.addEventListener("change", handler)

    return () => mql.removeEventListener("change", handler)
  }, [])

  return isDesktop
}

type Product = {
  id: number
  name: string
  series: string
  brand: string
  images: string[]
  priceMin: number
  priceMax: number
  discount?: number
  href: string
  colors?: { hex: string }[]
}

type Props = {
  products: Product[]
}

export default function ProductGrid({ products = [] }: Props) {
  const isDesktop = useIsDesktop()
  const pageSize = isDesktop ? DESKTOP_PAGE : MOBILE_PAGE

  const totalPages = Math.max(1, Math.ceil(products.length / pageSize))
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (page > totalPages - 1) setPage(0)
  }, [totalPages, page])

  const needsPagination = totalPages > 1
  const canPrev = page > 0
  const canNext = page < totalPages - 1

  const start = page * pageSize
  const items = products.slice(start, start + pageSize)

  return (
    <section className="w-full py-8 bg-white">
      <div className="relative px-8">
        {needsPagination && (
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={!canPrev}
            aria-label="Página anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronL />
          </button>
        )}

        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {needsPagination && (
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!canNext}
            aria-label="Página siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronR />
          </button>
        )}
      </div>
    </section>
  )
}