// src/app/page.tsx
import BrandCategory from "../components/home/BrandCategory";
import Carousel from "../components/home/Carousel";
import PhoneShowcase from "../components/PhoneShowcase";
import MeritsGrid from "../components/home/MeritsGrid";
import MercadoAdds from "../components/home/MercadoAdds";
import ProductGrid from "../components/ProductGrid";
import IphoneTemplate from "../components/home/IphoneTemplate";
import { brands } from "../data/brands"
import { products } from "../data/products"

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="h-150 w-full bg-black ">
        <h1 className="text-3xl font-bold text-white text-center py-3">SMARTPHONES PREMIUM</h1>
        <h2 className="text-xl text-blue-600 text-center pb-10">ENVIO GRATIS Y GARANTIA EXTENDIDA</h2>
        <Carousel />
        <ul className="flex items-center justify-center gap-15 w-full text-white text-2xl pt-8">
          <li>🔷 Cupones</li>
          <li>🔷 Contactanos</li>
          <li>🔷 Más ofertas</li>
        </ul>
      </nav>
      <BrandCategory brands={["Samsung", "Apple"]} />
      <PhoneShowcase />
      <MeritsGrid />
      <MercadoAdds />
      <ProductGrid products={products} />
      <IphoneTemplate />
      <h2 className="text-2xl text-center font-semibold mt-4">EMPRESAS Y MARCAS CON LAS QUE TRABAJAMOS</h2>
      <Carousel images={brands.map((brand) => brand.imageUrl)} />
    </main>
  );
}