// src/app/shop/[slug]/page.tsx
"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "../../../data/products"

// 1. SUBCOMPONENTE: GALERÍA DE IMÁGENES INTERACTIVA (DESKTOP: BOTONES / MÓVIL: SWIPE)
function ProductGallery({ images, discount, name }: { images: string[]; discount?: number; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  // Captura de gestos táctiles para celular (Arrastrar/Deslizar)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50  // derecha
    const isRightSwipe = distance < -50 // izquierda

    if (isLeftSwipe) handleNext()
    if (isRightSwipe) handlePrev()

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Contenedor Principal de la Imagen */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full aspect-square border border-gray-100 rounded-xl bg-white flex items-center justify-center overflow-hidden select-none touch-pan-y"
      >
        {discount && (
          <span className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        <Image 
          src={images[currentIndex]} 
          alt={name} 
          fill 
          className="object-contain p-6 pointer-events-none" 
          priority 
        />

        {/* BOTONES IZQUIERDA / DERECHA: Solo visibles en Desktop (md:flex), ocultos en celular (hidden) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border border-gray-200 rounded-full w-9 h-9 items-center justify-center shadow-sm transition active:scale-95 z-10"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button 
              onClick={handleNext}
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border border-gray-200 rounded-full w-9 h-9 items-center justify-center shadow-sm transition active:scale-95 z-10"
              aria-label="Siguiente imagen"
            >
              ›
            </button>
          </>
        )}
      </div>
      
      {/* Miniaturas inferiores */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 border-2 rounded-lg overflow-hidden bg-white transition flex-shrink-0 ${
                currentIndex === idx ? "border-blue-500 scale-102" : "border-gray-200 opacity-70"
              }`}
            >
              <Image src={img} alt={`Miniatura ${idx}`} fill className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// 2. SUBCOMPONENTE: DETALLES ESENCIALES Y COMPRA
function ProductInfo({ product }: { product: any }) {
  const features = product.descripcion1 ? product.descripcion1.split("•").map((f: string) => f.trim()).filter(Boolean) : []

  return (
    <div className="flex flex-col gap-4 text-gray-800">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">{product.name}</h1>
        <div className="mt-2 flex items-baseline gap-3 text-xl font-bold text-blue-600">
          <span>${product.priceMin.toLocaleString("es-MX")}.00 – ${product.priceMax.toLocaleString("es-MX")}.00</span>
        </div>
      </div>

      {features.length > 0 && (
        <ul className="space-y-1 text-xs sm:text-sm text-gray-500 border-t border-b border-gray-100 py-3">
          {features.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span>•</span> <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {product.colors && (
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
          <span>Colores:</span>
          <div className="flex gap-1.5">
            {product.colors.map((c: any, i: number) => (
              <span key={i} style={{ backgroundColor: c.hex }} className="w-4 h-4 rounded-full border border-gray-300 shadow-sm" />
            ))}
          </div>
        </div>
      )}

      <button 
        onClick={() => alert(`Pedido: ${product.name}`)}
        className="w-full sm:w-fit px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all text-sm mt-2"
      >
        Comprar Ahora
      </button>

      <div className="text-xs text-gray-400 space-y-1 border-t border-gray-100 pt-3 mt-2">
        <p><span className="font-medium text-gray-600">SKU:</span> PROD-{product.id}</p>
        <p><span className="font-medium text-gray-600">Categoría:</span> {product.series}</p>
        <p><span className="font-medium text-gray-600">Marca:</span> {product.brand}</p>
      </div>
    </div>
  )
}

// 3. SUBCOMPONENTE: PESTAÑAS (DESCRIPCIÓN EXTENDIDA)
function ProductTabs({ descripcion2 }: { descripcion2?: string }) {
  const [activeTab, setActiveTab] = useState("desc")

  return (
    <div className="mt-8 border-t border-gray-200">
      <div className="flex gap-6 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-400">
        <button onClick={() => setActiveTab("desc")} className={`py-3 relative ${activeTab === "desc" ? "text-blue-600" : ""}`}>
          Descripción
          {activeTab === "desc" && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-600" />}
        </button>
        <button onClick={() => setActiveTab("cal")} className={`py-3 relative ${activeTab === "cal" ? "text-blue-600" : ""}`}>
          Información sobre calidad
          {activeTab === "cal" && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-600" />}
        </button>
      </div>

      <div className="py-4 text-sm text-gray-600 max-w-3xl">
        {activeTab === "desc" ? (
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900">Descripción General</h3>
            <p className="leading-relaxed whitespace-pre-line">{descripcion2 || "Sin descripción disponible."}</p>
          </div>
        ) : (
          <p>Garantía directa de fábrica. Todos los dispositivos cuentan con certificación técnica de componentes.</p>
        )}
      </div>
    </div>
  )
}

// ORQUESTADOR PRINCIPAL
export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = products.find((p) => p.href === `/shop/${slug}`)

  if (!product) {
    return <div className="p-12 text-center text-gray-500 font-medium">Producto no encontrado.</div>
  }

  return (
    <div className="bg-white min-h-screen pb-8">
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-xs text-gray-400 flex gap-1.5">
        <Link href="/" className="hover:text-gray-600">Inicio</Link> <span>/</span>
        <span>{product.series}</span> <span>/</span>
        <span className="text-gray-600 font-medium">{product.name}</span>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ProductGallery images={product.images} discount={product.discount} name={product.name} />
          <ProductInfo product={product} />
        </div>
        <ProductTabs descripcion2={product.descripcion2} />
      </main>
    </div>
  )
}