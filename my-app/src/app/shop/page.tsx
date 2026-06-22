// src/app/shop/page.tsx (o donde tengas ShopPage)
"use client"

import { useMemo, useState, useEffect } from "react"
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
  const seriesFromUrl = searchParams.get("series")

  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("default")
  const [brandFilter, setBrandFilter] = useState<string | null>(brandFromUrl)

  // Sincroniza la categoría seleccionada con el parámetro "series" de la URL
  useEffect(() => {
    if (seriesFromUrl) {
      setCategory(normalize(seriesFromUrl))
    } else {
      setCategory("all")
    }
  }, [seriesFromUrl])

  // Construye las categorías a partir de la data (series únicas)
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

  // Filtrado y ordenamiento de productos
  const filteredProducts = useMemo(() => {
    let data = [...products]

    // Filtro por marca (si existe)
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

    // Ordenamiento
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
      {/* Indicador de filtro por marca activo */}
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

      {/* Barra de categorías (series) */}
      <CategoryBar
        categories={categories}
        selected={category}
        onChange={setCategory}
      />

      {/* Filtros de orden */}
      <ShopFilters
        sort={sort}
        setSort={setSort}
      />

      {/* Grid de productos */}
      <ProductGrid
        products={filteredProducts}
      />
    </section>
  )
}