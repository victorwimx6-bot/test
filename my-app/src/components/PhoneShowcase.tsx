import PhoneCard from "./PhoneCard";
import { phoneCategories } from "../data/phoneCategories";

export default function PhoneShowcase() {
  return (
    <section className="w-full bg-[#f5f5f5] py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-gray-200 bg-white">
          {phoneCategories.map((phone) => (
            <PhoneCard
              key={phone.name}
              name={phone.name}
              image={phone.image}
              href={phone.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}