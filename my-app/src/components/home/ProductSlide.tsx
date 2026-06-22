import React from "react";
import Link from "next/link";
import Product from "../../data/products";

// React.memo evita re-renderizados innecesarios en el carrusel
const ProductSlide = React.memo(({ product }: { product: Product }) => {
  // Convierte "• Pantalla chida • camara chida" en ["Pantalla chida", "camara chida"]
  const features = product.descripcion1
    .split("•")
    .map((text: string) => text.trim())
    .filter((text: string) => text.length > 0);

  return (
    <div className="w-full h-full bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-2xl">
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-64 h-64 md:w-96 md:h-96 object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-black">
        <h3 className="text-2xl md:text-4xl font-bold">{product.name}</h3>
        
        {features.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm md:text-base">
            {features.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-sm md:text-base line-clamp-4">
            {product.descripcion2}
          </p>
        )}

        <div className="pt-2">
          <span className="text-2xl font-bold">DESDE: </span>
          <span className="text-3xl text-blue-500 font-bold">
            ${product.priceMin.toLocaleString()}
          </span>
        </div>
        
        <Link
          href={product.href}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full w-full md:w-auto text-center transition-colors"
        >
          Compra ahora !
        </Link>
      </div>
    </div>
  );
});

ProductSlide.displayName = "ProductSlide";
export default ProductSlide;