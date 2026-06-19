// src/app/page.tsx
import BrandCategory from "../components/home/BrandCategory";
import Carousel from "../components/home/Carousel";
import PhoneShowcase from "../components/PhoneShowcase";
import MeritsGrid from "../components/home/MeritsGrid";
import MercadoAdds from "../components/home/MercadoAdds";
import ProductGrid from "../components/home/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Carousel />
      <BrandCategory />
      <PhoneShowcase />
      <MeritsGrid />
      <MercadoAdds />
      <p className="font-bold text-center text-2xl mt-5">NUESTROS PRODUCTOS</p>
      <ProductGrid />
    </main>
  );
}