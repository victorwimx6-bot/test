// src/data/products.ts
export interface ProductColor {
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  series: string;
  brand: string;
  images: string[];
  priceMin: number;
  priceMax: number;
  colors?: ProductColor[];
  discount?: number;
  descripcion1: string;
  descripcion2: string;
  descripcion3: string;
  wishlist: boolean;
  href: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "IPhone 13 Pro",
    series: "Iphone 13 Series",
    brand: "Apple",
    images: ["https://pngimg.com/uploads/iphone_13/iphone_13_PNG27.png"],
    priceMin: 6700, priceMax: 12000,
    colors: [{ hex: "#38BDF8" }, { hex: "#86EFAC" }, { hex: "#94A3B8" }, { hex: "#E2E8F0" }, { hex: "#4ADE80" }],
    descripcion1: "• Pantalla chida • camara chida • bateria chida",
    descripcion2: "El Samsung Galaxy S25 Ultra representa la cúspide de la ingeniería en smartphones Android. Forjado en Titanio de alta resistencia y equipado con la pantalla Gorilla Armor que elimina hasta el 75% de los reflejos, este equipo está diseñado para quienes ven su teléfono como su principal herramienta de trabajo. Gracias a la integración profunda de Galaxy AI y el procesador Snapdragon de 3 nanómetros, el S25 Ultra ofrece una fluidez sin precedentes en edición de video 8K, multitarea pesada y traducción de voz instantánea.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/iphone-13-pro",
  },
  {
    id: 2,
    name: "IPhone 13",
    series: "Iphone 13 Series",
    brand: "Apple",
    images: ["https://pngimg.com/uploads/iphone_13/iphone_13_PNG27.png"],
    priceMin: 6700, priceMax: 8200,
    colors: [{ hex: "#38BDF8" }, { hex: "#1E293B" }, { hex: "#DC2626" }, { hex: "#4ADE80" }, { hex: "#86EFAC" }],
    descripcion1: "• seguridad, • es el 13",
    descripcion2: "El iPhone 13 te ofrece potencia, eficiencia y un diseño moderno que destaca en cualquier lugar. Con su chip A15 Bionic y pantalla Super Retina XDR, este smartphone combina velocidad, colores vibrantes y una experiencia fluida en todo momento. Ya sea para redes sociales, grabar contenido o trabajar desde tu teléfono, el iPhone 13 está listo para todo.\n\n Sus cámaras avanzadas permiten capturar fotos espectaculares con poca luz, grabar videos con efecto Cinemático y editar como un profesional. Además, su batería está diseñada para durar más que nunca, para que vivas tu día sin preocupaciones. \n\nDisponible en colores vibrantes como rosa, azul, verde y más, y con opciones de almacenamiento para cada tipo de usuario, el iPhone 13 es el equilibrio perfecto entre elegancia y potencia.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/iphone-13",
  },
  {
    id: 3,
    name: "IPhone 13 Mini",
    series: "Iphone 13 Series",
    brand: "Apple",
    images: [
      "https://pngimg.com/uploads/iphone_13/iphone_13_PNG27.png",
      "https://pngimg.com/uploads/iphone_13/iphone_13_PNG3.png",
    ],
    priceMin: 6700, priceMax: 8200,
    colors: [{ hex: "#38BDF8" }, { hex: "#1E293B" }, { hex: "#DC2626" }, { hex: "#4ADE80" }],
    descripcion1: "• el mismo que el 13 pero en mini",
    descripcion2: "El iPhone 13 te ofrece potencia, eficiencia y un diseño moderno que destaca en cualquier lugar. Con su chip A15 Bionic y pantalla Super Retina XDR, este smartphone combina velocidad, colores vibrantes y una experiencia fluida en todo momento. Ya sea para redes sociales, grabar contenido o trabajar desde tu teléfono, el iPhone 13 está listo para todo.\n\n Sus cámaras avanzadas permiten capturar fotos espectaculares con poca luz, grabar videos con efecto Cinemático y editar como un profesional. Además, su batería está diseñada para durar más que nunca, para que vivas tu día sin preocupaciones. \n\nDisponible en colores vibrantes como rosa, azul, verde y más, y con opciones de almacenamiento para cada tipo de usuario, el iPhone 13 es el equilibrio perfecto entre elegancia y potencia.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/iphone-13-mini",
  },
  {
    id: 4,
    name: "IPhone 13 Pro Max",
    series: "Iphone 13 Series",
    brand: "Apple",
    images: ["https://pngimg.com/uploads/iphone_13/iphone_13_PNG27.png"],
    priceMin: 6700, priceMax: 12000,
    colors: [{ hex: "#38BDF8" }, { hex: "#86EFAC" }, { hex: "#94A3B8" }, { hex: "#E2E8F0" }, { hex: "#4ADE80" }],
    descripcion1: "• el 13 pero pro • pro bien pro",
    descripcion2: "Descubre el iPhone 13 Pro, el dispositivo ideal para quienes buscan rendimiento profesional, cámaras avanzadas y una experiencia premium. A diferencia del iPhone 13 estándar, el 13 Pro cuenta con materiales más resistentes, una pantalla más fluida y opciones de almacenamiento que alcanzan hasta 1 TB, perfectas para creadores de contenido, fotógrafos y usuarios exigentes.\n\nCon su acabado en acero inoxidable y colores exclusivos como Sierra Blue y Alpine Green, el iPhone 13 Pro combina diseño de lujo con tecnología de punta. El nuevo chip A15 Bionic con GPU de 5 núcleos te brinda potencia para juegos, edición de video y multitareas sin esfuerzo.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/iphone-13-pro-max",
  },
  {
    id: 5,
    name: "iPhone 16 Pro",
    series: "Iphone 16 Series",
    brand: "Apple",
    images: ["https://pngimg.com/uploads/iphone16/iphone16_PNG2.png"],
    priceMin: 14000, priceMax: 18000,
    discount: 5,
    descripcion1: "• el 16 pro • mas pro que el no pro",
    descripcion2: "Rendimiento y Diseño de Vanguardia El iPhone 16 Pro es el primer modelo diseñado desde su arquitectura para potenciar Apple Intelligence. Su estructura de titanio grado 5 no solo ofrece una relación peso/dureza inigualable, sino que presenta un acabado microarenado sofisticado y resistente. \n\nPantalla Super Retina XDR Sin Límites Gracias a una innovadora tecnología de redirección de píxeles, logramos los bordes más delgados en la historia de Apple. Disfruta de una pantalla de 6.3 pulgadas más grande y envolvente, sin sacrificar la comodidad al sostenerlo. \n\nPotencia Privada y Personal Disponible en cuatro acabados exclusivos, incluyendo el nuevo Titanio del Desierto. Un dispositivo diseñado para ser personal, privado y extremadamente poderoso.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/iphone-16-pro",
  },
  {
    id: 6,
    name: "Samsung Galaxy Z Flip 7",
    series: "Samsung Galaxy Flip",
    brand: "Samsung",
    images: ["https://m.media-amazon.com/images/I/51mdPnQu3WL._AC_UF1000,1000_QL80_.jpg"],
    priceMin: 10500, priceMax: 13800,
    discount: 29,
    descripcion1: "• flip 7 • no es flip 6",
    descripcion2: "El Samsung Galaxy Z Flip 7 redefine la experiencia de los smartphones compactos. Diseñado para quienes buscan portabilidad sin sacrificar rendimiento de clase mundial, este equipo combina un chasis premium con el ecosistema de inteligencia artificial más avanzado del mercado. Su nueva pantalla exterior de 4.1 pulgadas permite gestionar notificaciones, responder mensajes y capturar selfies de alta resolución sin necesidad de abrir el dispositivo.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/samsung-galaxy-z-flip-7",
  },
  {
    id: 7,
    name: "Samsung Galaxy Z Fold 7",
    series: "Samsung Galaxy Fold",
    brand: "Samsung",
    images: ["https://m.media-amazon.com/images/I/61dTYlJ3o5L.jpg"],
    priceMin: 18000, priceMax: 22000,
    discount: 12,
    descripcion1: "• fold 7 • color negro",
    descripcion2: "El Samsung Galaxy Z Fold 7 representa la máxima evolución en dispositivos plegables. Construido por primera vez con un chasis de titanio ultraligero y una bisagra rediseñada que elimina el pliegue central, este equipo es a la vez un smartphone premium y una tablet de alto rendimiento. Integrado nativamente con la última generación de Galaxy AI, transforma la manera en que trabajas, traduciendo llamadas en tiempo real, resumiendo documentos extensos y ofreciendo una multitarea de hasta cuatro ventanas simultáneas sin latencia.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/samsung-galaxy-z-fold-7",
  },
  {
    id: 8,
    name: "Iphone 17 Pro Max",
    series: "iPhone 17 Series",
    brand: "Apple",
    images: ["https://pngimg.com/uploads/iphone17/iphone17_PNG27.png"],
    priceMin: 20000, priceMax: 24000,
    discount: 6,
    descripcion1: "• el 17 pro • mas pro que el no pro",
    descripcion2: "El iPhone 17 Pro Max llega para redefinir lo que un smartphone puede hacer. Forjado en Titanio de grado aeroespacial, este equipo no solo es más resistente, sino sorprendentemente ligero. En su interior, el nuevo chip A19 Pro impulsa la segunda generación de Apple Intelligence, permitiendo una interacción fluida, edición de video profesional en tiempo real y una gestión de batería líder en la industria. Es la herramienta definitiva para creadores de contenido, ejecutivos y entusiastas de la tecnología que exigen el rendimiento más alto del mercado.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/iphone-17-pro-max",
  },
    {
    id: 9,
    name: "Samsung Galaxy S23 Ultra",
    series: "Samsung Galaxy Ultra",
    brand: "Samsung",
    images: ["https://static.vecteezy.com/system/resources/previews/022/722/945/non_2x/samsung-galaxy-s23-ultra-transparent-image-free-png.png"],
    priceMin: 20000, priceMax: 24000,
    discount: 6,
    descripcion1: "• la mejor de la gama • camara increible",
    descripcion2: "El Samsung Galaxy 23 Ultra representa la cúspide de la ingeniería en smartphones Android. Forjado en Titanio de alta resistencia y equipado con la pantalla Gorilla Armor que elimina hasta el 75% de los reflejos, este equipo está diseñado para quienes ven su teléfono como su principal herramienta de trabajo. Gracias a la integración profunda de Galaxy AI y el procesador Snapdragon de 3 nanómetros, el S25 Ultra ofrece una fluidez sin precedentes en edición de video 8K, multitarea pesada y traducción de voz instantánea.",
    descripcion3: "",
    wishlist: false,
    href: "/shop/samsung-galaxy-s23-ultra",
  },
]