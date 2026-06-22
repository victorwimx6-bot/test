// src/components/MeritsGrid.tsx
import Image from 'next/image';

const merits = [
  {
    img: "https://wiemx.com/wp-content/uploads/2025/06/caja-60x60-1-50x50.png",
    title: "Envío Seguro",
    desc: "Empaque profesional y envío garantizado a todo México"
  },
  {
    img: "https://wiemx.com/wp-content/uploads/2025/06/garantia-60x60-1.png",
    title: "Garantía Extendida",
    desc: "Todos nuestros productos cuentan con garantía de fábrica"
  },
  {
    img: "https://wiemx.com/wp-content/uploads/2025/06/10149288-60x60.png",
    title: "Soporte Técnico",
    desc: "Asistencia personalizada para todos nuestros clientes"
  },
  {
    img: "https://wiemx.com/wp-content/uploads/2025/06/caja-60x60-1-50x50.png",
    title: "Mejor Precio",
    desc: "Precios competitivos y ofertas exclusivas en línea"
  },
  {
    img: "https://wiemx.com/wp-content/uploads/2025/06/garantia-60x60-1.png",
    title: "Calidad Premium",
    desc: "Productos con certificación y estándares de calidad"
  },
  {
    img: "https://wiemx.com/wp-content/uploads/2025/06/10149288-60x60.png",
    title: "Entrega Express",
    desc: "Despacho en 24 horas hábiles a principales ciudades"
  }
];

export default function MeritsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {merits.map((item, i) => (
        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
          <Image src={item.img} alt={item.title} width={40} height={40} className="shrink-0" unoptimized
          />
          <div>
            <h3 className="font-semibold text-sm">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}