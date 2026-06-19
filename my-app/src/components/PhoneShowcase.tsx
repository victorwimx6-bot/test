import PhoneCard from "./PhoneCard";
import { products } from "../data/products";

export default function PhoneShowcase() {
  // Filtrar para mostrar solo un producto por cada series única
  const uniquePhones = products.filter((phone, index, self) =>
    index === self.findIndex((p) => p.series === phone.series)
  );

  return (
    <section className="w-full bg-[#f5f5f5] py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-gray-200 bg-white">
          {uniquePhones.map((phone) => (
            <PhoneCard
              key={phone.series}
              name={phone.series}
              image={phone.images[0]}
              href={phone.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}