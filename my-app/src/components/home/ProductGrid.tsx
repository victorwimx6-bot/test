// src/components/home/ProductGrid.tsx
"use client"
import { useState } from "react"
import { products } from "../../data/products"
import ProductCard from "./ProductCard"

const ChevronL = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
)
const ChevronR = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
)

// Desktop: 8 por página (4x2), Mobile: 4 por página (2x2)
const DESKTOP_PAGE = 8
const MOBILE_PAGE = 4

export default function ProductGrid() {
  const [page, setPage] = useState(0)

  // Detectar cuántos mostrar según breakpoint no es posible en SSR,
  // así que usamos CSS para ocultar/mostrar y paginamos sobre 8 siempre,
  // pero en mobile solo los primeros 4 de esos 8 son visibles via grid.
  // En su lugar: paginamos por 4 y en desktop mostramos 2 páginas juntas.

  const totalPages = Math.ceil(products.length / MOBILE_PAGE)
  const canPrev = page > 0
  const canNext = page < totalPages - 1

  // En mobile: página actual (4 items)
  // En desktop: página actual + siguiente (8 items, 2 páginas a la vez)
  const mobileStart = page * MOBILE_PAGE
  const mobileItems = products.slice(mobileStart, mobileStart + MOBILE_PAGE)

  // Para desktop agrupamos de 8 en 8 (páginas de a 2)
  const desktopPage = Math.floor(page / 2)
  const desktopStart = desktopPage * DESKTOP_PAGE
  const desktopItems = products.slice(desktopStart, desktopStart + DESKTOP_PAGE)

  return (
    <section className="w-full py-8 bg-white">
      <h2 className="text-center text-2xl font-bold text-blue-500 tracking-widest mb-8 uppercase">
        Nuestros Productos
      </h2>

      <div className="relative px-8">
        {/* Flecha izquierda */}
        <button
          onClick={() => setPage(p => p - 1)}
          disabled={!canPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white disabled:opacity-20 transition-colors"
        >
          <ChevronL />
        </button>

        {/* Mobile: 2x2 */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {mobileItems.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Desktop: 4x2 */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {desktopItems.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={!canNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white disabled:opacity-20 transition-colors"
        >
          <ChevronR />
        </button>
      </div>

      {/* Dots indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === page ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  )
}