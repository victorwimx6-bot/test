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
    <main className="min-h-screen p-8">
      <Carousel />
      <BrandCategory brands={["Samsung", "Apple"]} />
      <PhoneShowcase />
      <MeritsGrid />
      <MercadoAdds />
      <ProductGrid products={products} />
      <IphoneTemplate />
      <Carousel images={brands.map((brand) => brand.imageUrl)} />
    </main>
  );
}