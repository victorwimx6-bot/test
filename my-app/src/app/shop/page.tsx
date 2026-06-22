// src/app/shop/page.tsx (o donde tengas ShopPage)
"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import ProductGrid from "../../components/ProductGrid"
import ShopFilters from "../../components/shop/ShopFilters"
import CategoryBar from "../../components/shop/CategoryBar"
import { products } from "../../data/products"

const normalize = (str: string) =>
  str.trim().toLowerCase()

export default function ShopPage() {
  const searchParams = useSearchParams()
  const brandFromUrl = searchParams.get("brand")
  
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("default")
  const [brandFilter, setBrandFilter] = useState<string | null>(brandFromUrl)

  // Actualizar brandFilter si cambia la URL
  // Nota: esto es útil si el usuario navega dentro de /shop
  
  const categories = useMemo(() => {
    const map = new Map()

    products.forEach((product) => {
      const key = normalize(product.series)

      if (!map.has(key)) {
        map.set(key, {
          key,
          label: product.series,
          image: product.images[0],
        })
      }
    })

    return Array.from(map.values())
  }, [])

  const filteredProducts = useMemo(() => {
    let data = [...products]

    // Filtro por marca
    if (brandFilter) {
      data = data.filter(
        (p) => normalize(p.brand) === brandFilter
      )
    }

    // Filtro por categoría (serie)
    if (category !== "all") {
      data = data.filter(
        (p) => normalize(p.series) === category
      )
    }

    switch (sort) {
      case "price-low":
        data.sort((a, b) => a.priceMin - b.priceMin)
        break

      case "price-high":
        data.sort((a, b) => b.priceMax - a.priceMax)
        break
    }

    return data
  }, [category, sort, brandFilter])

  return (
    <section>
      {/* Mostrar el filtro de marca activo si existe */}
      {brandFilter && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-gray-600">
            Filtrando por marca: <strong className="capitalize">{brandFilter}</strong>
          </span>
          <button
            onClick={() => setBrandFilter(null)}
            className="text-xs text-blue-600 hover:underline"
          >
            Limpiar filtro
          </button>
        </div>
      )}

      <CategoryBar
        categories={categories}
        selected={category}
        onChange={setCategory}
      />

      <ShopFilters
        sort={sort}
        setSort={setSort}
      />

      <ProductGrid
        products={filteredProducts}
      />
    </section>
  )
}