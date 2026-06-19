"use client"; // Necesario por el uso de useState

import React from 'react';

// Datos de preguntas frecuentes extraídos del HTML
const FAQS = [
  {
    question: '¿Por qué comprar o escoger a Wiemx?',
    answer: 'Con mas de 15 años de experiencia en el medio, cientos de mayoristas confían en nosotros, al comprar en Wiemx estas escogiendo comprar en un lugar que ofrece calidad y seguridad a sus clientes, contamos con ubicación física. lo mejor de todo nuestra variedad y precios son los más competitivos del mercado.'
  },
  {
    question: '¿Los teléfonos que venden son nuevos y cuentan con Garantía?',
    answer: 'Así es como mayoristas ofrecemos 3 meses de garantía en todos los equipos que comercializamos, no ofrecemos mas dado que nuestro servicio está enfocado a que el equipo se revisa a su llegada el 99% de las fallas de un equipo se detecta en los primeros 5 días de usos. Algunos equipos cuentan con garantía de 1 año directamente con el fabricante, al momento de la compra se revisaría dependiendo el modelo que se adquiera. Para más información respecto a la garantía revisar la póliza de garantía que puedes revisar en nuestra página web.'
  },
  {
    question: '¿Qué es un equipo seminuevo y por qué debería considerar comprar uno?',
    answer: 'Los equipos seminuevos que manejamos en Wiemx son equipos que fueron exhibidos en tiendas o utilizados por otras personas, pero se encuentran en bunas condiciones, estos equipos son revisados con un método riguroso y se elimina la información previa que tenía, dejando el equipo en configuración de fabrica para que pueda ser usado nuevamente. Al comprar un equipo seminuevo no solo ayudas al medioambiente, sino que también puedes ahorrar hasta 50% en el precio original del equipo. Los equipos seminuevos cuentan también con 90 días de garantía.'
  },
  {
    question: '¿En qué presentación entregan los teléfonos y con que accesorios vienen?',
    answer: 'En el caso de equipos nuevo los equipos vienen como el fabricante los empaca si el fabricante incluyo cargador audífonos y otros accesorios, nuestros equipos vendrán de la misma manera.\n\nEn el caso de los equipos seminuevos regularmente se entregan en una caja genérica sin accesorios, si el cliente lo requiere se incluye cargador y cable por un costo extra.'
  },
  {
    question: '¿Por qué no ofrecen pago directo en línea?',
    answer: 'Al ser una empresa mayorista nuestros inventarios son muy cambiantes con lo cual las cantidades disponibles día con día pueden varear, por ello preferimos tener un acercamiento directo al cliente confirmar su orden y después proceder al pago.\n\nAliquam quam at et in ipsum at venenatis a eget dignissim aliquam tincidunt ultrices lacus ad consectetur imperdiet sem suspendisse ante a dapibus potenti.Eu parturient parturient magnis tempus molestie augue quam vulputate hac facilisis est nisl pretium a cursus.'
  },
  {
    question: '¿Qué tipo de pago aceptan?',
    answer: 'Puede ser una transferencia o deposito a nuestra cuenta, también contamos con pago a través de PayPal. Si requieres factura podemos facturar tu compra.'
  },
  {
    question: '¿Como envían o como puedo recoger mi teléfono y cuanto tarda en procesarse un pedido?',
    answer: 'Podemos enviar equipos a toda la república, regularmente utilizamos Estafeta, pero podemos utilizar el método que el cliente requiera, los clientes pagan el envió de su mercancía, podemos cotizar el envió antes de que se realice la compra. Otra opción seria recoger directamente en nuestra ubicación física si el cliente es de la zona. Un pedido tarda en procesarse 2 días a partir de recibir el pago y el tiempo de entrega dependerá de la paquetería servicio de 2 a 4 días regularmente dependiendo la zona en que viva el cliente.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 font-sans bg-white">
      
      {/* Encabezado del componente */}
      <div className="text-center mb-10">
        {/* Subtítulo */}
        <div className="text-[#2b5cb4] font-semibold text-sm uppercase tracking-wider mb-2">
          Estas son
        </div>
        
        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2b5cb4] mb-3">
          Preguntas frecuentes
        </h2>
        
        {/* Texto descriptivo */}
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Si no encuentras tu duda aquí, puedes enviarnos un mensaje dando clic aquí.
        </p>
      </div>

      {/* Acordeón */}
      <div className="divide-y divide-gray-200 border-t border-gray-200">
        {FAQS.map((faq, index) => {
          const isOpen = activeIndex === index;
          
          return (
            <div key={index} className="py-4">
              {/* Título / Botón */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-[#2b5cb4] transition-colors pr-4">
                  {faq.question}
                </span>
                
                {/* Icono Chevron */}
                <span className={`shrink-0 w-6 h-6 text-gray-500 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>

              {/* Contenido colapsable con transición */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-200 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}