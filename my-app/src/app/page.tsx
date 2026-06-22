import BrandCategory from "../components/home/BrandCategory";
import Carousel from "../components/home/Carousel";
import PhoneShowcase from "../components/PhoneShowcase";
import MeritsGrid from "../components/home/MeritsGrid";
import MercadoAdds from "../components/home/MercadoAdds";
import ProductGrid from "../components/ProductGrid";
import IphoneTemplate from "../components/home/IphoneTemplate";
import { brands } from "../data/brands";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="w-full bg-black pb-8">
        <h1 className="text-3xl font-bold text-white text-center py-3">SMARTPHONES PREMIUM</h1>
        <h2 className="text-xl text-blue-600 text-center pb-6">ENVIO GRATIS Y GARANTIA EXTENDIDA</h2>
        <div className="px-4 md:px-0">
          {/* Carrusel 1: 1 producto por serie */}
          <Carousel products={products} className="h-[600px] md:h-[650px]" />
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-15 w-full text-white text-lg md:text-2xl pt-8">
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

      {/* Carrusel 2: Solo marcas */}
      <div className=" mb-10">
        <h2 className="text-2xl text-center font-semibold text-white mb-6">EMPRESAS Y MARCAS CON LAS QUE TRABAJAMOS</h2>
        <Carousel brands={brands} className="h-48 md:h-64" />
      </div>
    </main>
  );
}