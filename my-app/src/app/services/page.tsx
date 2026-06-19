import Image from 'next/image';

// Datos de los servicios extraídos del HTML
const SERVICES = [
  {
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/movil-80x80.png', 
    title: 'Cambio de Pantalla',
    description: 'En caso de una pantalla dañada o no oficial nosotros hacemos cambios de pantalla por otra nueva, original y en buen estado.'
  },
  {
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/camara-trasera-80x80.png',
    title: 'Cámara sucia o dañada',
    description: 'Nos aseguramos de que las cámaras de cada equipo estén funcionando correctamente y estén en buen estado. Si no pasa la prueba tenemos el equipo para repararlas, limpiarlas o remplazarlas por otra original.'
  },
  {
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/bateria-del-telefono-80x80.png',
    title: 'Cambio de Batería',
    description: 'Ya sea un equipo reciente o ya de años anteriores, a todos se les puede degradar la batería. Cambiamos la batería por una nueva de la mejor calidad.'
  },
  {
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/simbolo-de-interfaz-de-voz-de-microfono-en-la-pantalla-del-telefono-80x80.png',
    title: 'Cambio de micrófono',
    description: 'Algunos equipos pueden tener el micrófono dañado causando problemas como voz entrecortada o que no nos escuchen. Nosotros revisamos y reparamos esto.'
  },
  {
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/icon4-80x80.png',
    title: 'Cambio de centro de carga',
    description: 'En caso de que un teléfono no detecte uno o varios cargadores es señal de que necesita un cambio de centro de carga por uno nuevo.'
  },
  {
    icon: 'https://wiemx.com/wp-content/uploads/2025/06/icono5-60x80.png',
    title: 'Liberación de teléfonos',
    description: 'La red puede estar bloqueada por región y nosotros nos encargamos de liberarlos.'
  }
];

export default function Services() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      
      {/* Título Principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        Conoce nuestro proceso
      </h1>

      {/* Subtítulo */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h4 className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
          Sabemos que los accidentes suceden en el momento más inesperado, así como lo importante que son nuestros dispositivos para la vida moderna. Por eso debemos comprometernos en la revisión de los equipos antes de que lleguen a tus manos.
        </h4>
      </div>

      {/* Título del Grid de Reparaciones (extraído del HTML original) */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-[#2b5cb4]">
          Reparaciones que hacemos a cada equipo que lo requiera.
        </h3>
      </div>

      {/* Grid de Servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 relative mb-4 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-bold text-[#2b5cb4] mb-3 text-center">
              {service.title}
            </h4>
            <p className="text-gray-600 text-sm text-center leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Sección de Herramientas (Video y Texto) */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2b5cb4] mb-6">
            Contamos con las herramientas más avanzadas para garantizar equipos en excelente estado
          </h2>
        </div>
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-black">
          <video 
            className="w-full h-auto object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src="https://wiemx.com/wp-content/uploads/2025/06/LASER-PHONE-MACHINE.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>

      {/* Título de Certificaciones */}
      <div className="text-center mb-10">
        <h3 className="text-xl font-bold text-[#2b5cb4]">
          Reparaciones profesionales
        </h3>
      </div>

      {/* Sección de Certificación ISO 9001 */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="w-48 h-48 md:w-56 md:h-56 relative shrink-0">
          <Image
            src="https://wiemx.com/wp-content/uploads/2025/06/9001-certificacion-500x500.png" // Reemplaza con la ruta real
            alt="Certificación ISO 9001:2015"
            fill
            sizes="(max-width: 768px) 192px, 224px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <blockquote className="text-xl font-bold text-gray-900 italic">
            <p>¡Comprometidos con la Excelencia!</p>
          </blockquote>
          <p className="text-gray-700 leading-relaxed">
            En nuestra empresa nos enorgullece contar con la certificación <strong className="text-[#2b5cb4]">ISO 9001:2015</strong>, un reconocimiento internacional que respalda nuestro compromiso con la calidad, la mejora continua y la satisfacción de nuestros clientes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ser parte de nuestro equipo significa integrarse a una organización con procesos sólidos, bien estructurados y orientados a la excelencia operativa. Aquí, cada colaborador contribuye a un entorno de trabajo profesional, enfocado en resultados, innovación y mejora constante.
          </p>
        </div>
      </div>

      {/* CTA Final (Basado en el elemento oculto del HTML original) */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <h3 className="text-2xl font-bold text-[#2b5cb4]">
          Cotiza o agenda directamente
        </h3>
        <a 
          href="/contact" 
          className="bg-[#2b5cb4] text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg hover:bg-[#1e4391] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out"
        >
          Hazlo aquí
        </a>
      </div>

    </section>
  );
}