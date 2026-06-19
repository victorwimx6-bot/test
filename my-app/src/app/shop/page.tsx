"use client"

import { useMemo, useState } from "react"
import ProductGrid from "../../components/ProductGrid"
import ShopFilters from "../../components/shop/ShopFilters"
import CategoryBar from "../../components/shop/CategoryBar"
import { products } from "../../data/products"

const normalize = (str: string) =>
  str.trim().toLowerCase()

export default function ShopPage() {
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("default")

  // generar categorías automáticamente desde products
  const categories = useMemo(() => {
    const map = new Map()

    products.forEach((product) => {
      const key = normalize(product.series)

      if (!map.has(key)) {
        map.set(key, {
          key,
          label: product.series,
          image: product.images[0],   // reutilizar imagen existente
        })
      }
    })

    return Array.from(map.values())
  }, [])

  const filteredProducts = useMemo(() => {
    let data = [...products]

    if (category !== "all") {
      data = data.filter(
        (p) => normalize(p.series) === category
      )
    }

    switch (sort) {
      case "price-low":
        data.sort((a,b) => a.priceMin - b.priceMin)
        break

      case "price-high":
        data.sort((a,b) => b.priceMax - a.priceMax)
        break
    }

    return data
  }, [category, sort])

  return (
    <section>

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