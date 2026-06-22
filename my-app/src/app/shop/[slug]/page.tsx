"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "../../../data/products"
import WishlistButton from "../../../components/wishlist/WishlistButton"

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

function ProductGallery({ images, discount, name }: { images: string[]; discount?: number; name: string }) {
  const [idx, setIdx] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const prev = () => setIdx((i) => (i > 0 ? i - 1 : images.length - 1))
  const next = () => setIdx((i) => (i < images.length - 1 ? i + 1 : 0))

  const onTouchEnd = () => {
    if (touchStart && touchEnd) {
      const d = touchStart - touchEnd
      if (d > 50) next()
      if (d < -50) prev()
    }
    setTouchStart(null); setTouchEnd(null)
  }

  const navBtn = "hidden md:flex absolute top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border border-gray-200 rounded-full w-9 h-9 items-center justify-center shadow-sm transition active:scale-95 z-10 cursor-pointer"

  return (
    <div className="flex flex-col gap-3">
      <div
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
        onTouchEnd={onTouchEnd}
        className="relative w-full aspect-square border border-gray-100 rounded-xl bg-white flex items-center justify-center overflow-hidden select-none touch-pan-y"
      >
        {discount && (
          <span className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        <Image src={images[idx]} alt={name} fill className="object-contain p-6 pointer-events-none" priority />
        {images.length > 1 && (
          <>
            <button onClick={prev} className={cx(navBtn, "left-3")} aria-label="Imagen anterior">‹</button>
            <button onClick={next} className={cx(navBtn, "right-3")} aria-label="Siguiente imagen">›</button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto py-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={cx(
                "relative w-16 h-16 border-2 rounded-lg overflow-hidden bg-white transition shrink-0 cursor-pointer",
                i === idx ? "border-blue-500 scale-102" : "border-gray-200 opacity-70"
              )}
            >
              <Image src={img} alt={`Miniatura ${i}`} fill className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProductInfo({ product }: { product: any }) {
  const features = product.descripcion1?.split("•").map((f: string) => f.trim()).filter(Boolean) ?? []

  return (
    <div className="flex flex-col gap-4 text-gray-800">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">{product.name}</h1>
          <WishlistButton productId={product.id} className="w-10 h-10" />
        </div>
        <p className="mt-2 text-xl font-bold text-blue-600">
          ${product.priceMin.toLocaleString("es-MX")}.00 – ${product.priceMax.toLocaleString("es-MX")}.00
        </p>
      </div>

      {features.length > 0 && (
        <ul className="space-y-1 text-xs sm:text-sm text-gray-500 border-t border-b border-gray-100 py-3">
          {features.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-2"><span>•</span><span>{f}</span></li>
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
        className="w-full sm:w-fit px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all text-sm mt-2 cursor-pointer"
      >
        Comprar Ahora
      </button>

      <dl className="text-xs text-gray-400 space-y-1 border-t border-gray-100 pt-3 mt-2">
        {[["SKU", `PROD-${product.id}`], ["Categoría", product.series], ["Marca", product.brand]].map(([k, v]) => (
          <div key={k}><span className="font-medium text-gray-600">{k}:</span> {v}</div>
        ))}
      </dl>
    </div>
  )
}

function ProductTabs({ descripcion2 }: { descripcion2?: string }) {
  const [tab, setTab] = useState("desc")
  const tabs = [["desc", "Descripción"], ["cal", "Información sobre calidad"]]

  return (
    <div className="mt-8 border-t border-gray-200">
      <div className="flex gap-6 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-400">
        {tabs.map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} className={cx("cursor-pointer py-3 relative", tab === id && "text-blue-600")}>
            {label}
            {tab === id && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-600" />}
          </button>
        ))}
      </div>
      <div className="py-4 text-sm text-gray-600 max-w-3xl">
        {tab === "desc" ? (
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

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = products.find((p) => p.href === `/shop/${slug}`)

  if (!product) return <div className="p-12 text-center text-gray-500 font-medium">Producto no encontrado.</div>

  return (
    <div className="bg-white min-h-screen pb-8">
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-xs text-gray-400 flex gap-1.5">
        <Link href="/" className="hover:text-gray-600">Inicio</Link>
        <span>/</span><span>{product.series}</span>
        <span>/</span><span className="text-gray-600 font-medium">{product.name}</span>
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