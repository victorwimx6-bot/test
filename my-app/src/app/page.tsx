// src/app/page.tsx
import Carousel from "../components/Carousel";
import PhoneShowcase from "../components/PhoneShowcase";
import { images } from "../data/anuncios";


export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Carousel images={images} />
      <div className="flex justify-around">
        <a href="https://tuenlace.com">
        <img 
          src="https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/360_197_1.png?$720_N_PNG$" 
          alt="descripción"
          className="w-64 h-64 object-cover rounded-lg hover:opacity-80 transition-opacity"
        />
        </a>
        <a href="https://tuenlace.com">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jQZWa_tY5btzxuniasKP1ch-REklhkNtxUbSLYZ95cjeSrXfZI0NV2Tn&s=10$" 
            alt="descripción"
            className="w-64 h-64 object-cover rounded-lg hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
      <PhoneShowcase />
    </main>
  );
}