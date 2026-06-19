import Image from 'next/image';

// Datos extraídos y estructurados del HTML
const DATA = {
  mission: {
    subtitle: 'Te contamos',
    title: 'Nuestra misión',
    image: 'https://wiemx.com/wp-content/uploads/2025/06/man-adjusting-hi-sleeves-to-prepare-for-a-business-meeting-classy-fashion-suit-blue-suit-x-leather_t20_K6QRG0-580x580.jpeg',
    paragraphs: [
      'Ser la empresa que da soluciones integrales y personalizadas a tu negocio, nuestro compromiso es que tengas la mejor experiencia de compra, nuestro equipo esta comprometido con tu satisfacción, para generar alianzas comerciales que nos fortalezcan.'
    ],
    list: [
      'Tener siempre precios competitivos.',
      'Pedidos y etiquetado personalizado.',
      'Garantía y seguimiento de los productos vendidos.',
      'Servicio de preventa en necesidades concretas.',
      'Seguimiento posventa en tus compras.'
    ]
  },
  vision: {
    subtitle: 'Esta es nuestra',
    title: 'Visión',
    image: 'https://wiemx.com/wp-content/uploads/2025/06/woman-use-of-laptop-computer-and-cellphone-M5HYMEM-scaled-1-580x580.jpeg',
    paragraphs: [
      'El negocio de la telefonía es basto y complejo y con cada año que pasa aumentan demandas específicas y necesidades nuevas, nosotros no creemos que las situaciones a las que el futuro nos exponga, sea un problema, no creemos en problemas si no más bien en retos y las soluciones que existen para ellos, queremos entender y tratar a cada cliente de manera individual entendiendo que cada cliente es diferente y con necesidades específicas, cada mercado y cada región tiene que ser tratado acorde a sus necesidades.',
      'Queremos seguir evolucionando, mejorando y adaptándonos a todos los cambios que están por venir, la telefonía es un negocio de constante actualización así que consideramos que tendremos que reinventarnos constantemente.'
    ]
  },
  business: [
    {
      title: 'Surtido a Tiendas',
      image: 'https://wiemx.com/wp-content/uploads/2025/06/istockphoto-490910270-612x612-1.jpg',
      text: 'Trabajamos directamente con comercios físicos que necesitan mantener su inventario abastecido. Nuestro sistema permite a los dueños de tienda realizar pedidos recurrentes o personalizados según la demanda de su negocio. Ofrecemos atención personalizada, asesoría en productos y envíos eficientes para asegurar que tu tienda nunca se quede sin mercancía.'
    },
    {
      title: 'Venta Online',
      image: 'https://wiemx.com/wp-content/uploads/2025/06/Logistica-entrega-pedidos-400x265.jpg',
      text: 'Nuestra tienda en línea está diseñada para que cualquier cliente pueda realizar compras de manera rápida y segura. Solo necesitas registrarte, elegir los productos que desees y completar el pago. Una vez confirmado, procesamos el envío a cualquier parte del país. Ideal para compradores individuales o quienes buscan adquirir un producto sin salir de casa.'
    },
    {
      title: 'Venta por Mayoreo',
      image: 'https://wiemx.com/wp-content/uploads/2025/06/1571039116-empaquetado-pc-components-ecommerce-inteligente-sostenible-logistica-1-400x265.webp',
      text: 'Este método está enfocado en clientes que desean adquirir grandes cantidades para revender o abastecer sus propias operaciones. Ofrecemos precios preferenciales por volumen, listas de productos al por mayor y condiciones especiales para clientes frecuentes. Puedes solicitar una cotización o generar pedidos directamente a través de nuestros canales especializados.'
    }
  ],
  providers: [
    { name: 'Assurant', image: 'https://wiemx.com/wp-content/uploads/2025/06/0x0.png' },
    { name: 'AT&T', image: 'https://wiemx.com/wp-content/uploads/2025/06/Att-300x285-1.png' },
    { name: 'Verizon', image: 'https://wiemx.com/wp-content/uploads/2025/06/Verizon-Logo-2015-768x432.png' }
  ]
};

export default function KnowUs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      
      {/* --- NUESTRA MISIÓN --- */}
      {/* 
        Layout: Mobile (Text Top, Image Bottom) | Desktop (Image Left, Text Right).
        DOM Order: Text, Image.
        Mobile: flex-col -> Text top, Image bottom.
        Desktop: md:flex-row-reverse -> last DOM element (Image) moves to the left. 
      */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16 mb-20">
        {/* Imagen */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full aspect-square max-w-145 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <Image
              src={DATA.mission.image}
              alt="Nuestra misión"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-[#2b5cb4] font-semibold text-sm uppercase tracking-wider mb-2">
            {DATA.mission.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b5cb4] mb-6">
            {DATA.mission.title}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {DATA.mission.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {DATA.mission.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* --- VISIÓN --- */}
      {/* 
        Layout: Mobile (Text Top, Image Bottom) | Desktop (Text Left, Image Right).
        DOM Order: Text, Image.
        Mobile: flex-col -> Text top, Image bottom.
        Desktop: md:flex-row -> Text left, Image right.
      */}
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-20">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-[#2b5cb4] font-semibold text-sm uppercase tracking-wider mb-2">
            {DATA.vision.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b5cb4] mb-6">
            {DATA.vision.title}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {DATA.vision.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <div className="relative w-full aspect-square max-w-145 rounded-xl overflow-hidden shadow-md bg-gray-100">
            <Image
              src={DATA.vision.image}
              alt="Nuestra visión"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* --- NUESTRO NEGOCIO --- */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2b5cb4] mb-10">
          Nuestro negocio
        </h2>
        
        {/* Grid Responsivo: 1 columna en móvil, 3 columnas en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {DATA.business.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 group">
              <div className="relative w-full aspect-1.5/1 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2b5cb4] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- NUESTROS PROVEEDORES --- */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2b5cb4] mb-8">
          Nuestros proveedores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-items-center rounded-2xl p-8">
          {DATA.providers.map((provider, index) => (
            <div key={index} className="relative w-[20vw] h-[15vw] md:w-[15vw] md:h-[10vw]">
              <Image
                src={provider.image}
                alt={provider.name}
                fill
                sizes="(max-width: 768px) 20vw, 15vw"
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- CTA FINAL --- */}
      <div className="flex flex-col items-center justify-center gap-6 py-8 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2b5cb4] text-center">
          ¿Quieres trabajar con nosotros?
        </h2>
        <a 
          href="/contact"
          className="inline-block px-12 py-4 rounded-full border-2 border-[#2b5cb4] text-[#2b5cb4] font-medium text-lg hover:bg-[#2b5cb4] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Contáctanos
        </a>
      </div>

    </section>
  );
}