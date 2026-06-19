"use client"; // <--- ESTA LÍNEA ES OBLIGATORIA PARA USAR HOOKS

import React from 'react';

// Datos extraídos del HTML para mantener el componente limpio
const CONTACT_INFO = {
  address: 'Av. José González Carnicerito 558 int 1, Tepatitlán de Morelos, Jal.',
  phone: '+52 378 116 5102',
  email: 'admin@wiemx.com',
  mapTitle: 'Wiemx Oficina',
  mapSrc: 'https://maps.google.com/maps?q=wiemx&t=m&z=16&output=embed&iwloc=near'
};

// Icono SVG ultra ligero para el botón de cerrar
const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Contact() {
  // Estado simple para el modal sin usar librerías externas pesadas
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 font-sans">
      
      {/* Título Principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Encuentra nuestra oficina
      </h2>

      {/* Mapa Google */}
      <div className="w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md bg-gray-100 mb-16">
        <iframe
          title={CONTACT_INFO.mapTitle}
          src={CONTACT_INFO.mapSrc}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* Grid de Información (Dirección, Teléfono, Email) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center">
        
        {/* Dirección */}
        <div className="flex flex-col items-center group">
          <h3 className="text-3xl font-bold text-[#2b5cb4] mb-3 transition-colors group-hover:text-[#1e4391]">
            Dirección
          </h3>
          <p className="text-base font-medium text-gray-900 max-w-xs leading-relaxed">
            {CONTACT_INFO.address}
          </p>
        </div>

        {/* Teléfono */}
        <div className="flex flex-col items-center group border-l-0 md:border-l md:border-gray-200 md:pl-10">
          <h3 className="text-3xl font-bold text-[#2b5cb4] mb-3 transition-colors group-hover:text-[#1e4391]">
            Teléfono / whatsapp
          </h3>
          <a 
            href={`https://wa.me/52${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-900 hover:text-[#2b5cb4] transition-colors"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center group border-l-0 md:border-l md:border-gray-200 md:pl-10">
          <h3 className="text-3xl font-bold text-[#2b5cb4] mb-3 transition-colors group-hover:text-[#1e4391]">
            Email
          </h3>
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="text-base font-medium text-gray-900 hover:text-[#2b5cb4] transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>

      {/* Sección de Contacto Directo (Botón) */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-3xl font-bold text-[#2b5cb4]">
          Contáctanos directamente.
        </h3>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2b5cb4] text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg hover:bg-[#1e4391] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out"
        >
          Desde aquí.
        </button>
      </div>

      {/* MODAL (Formulario) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300"
            role="dialog"
            aria-modal="true"
          >
            {/* Encabezado del Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">Envíanos un mensaje</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-colors"
                aria-label="Cerrar formulario"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Cuerpo del Formulario */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5cb4] focus:border-transparent outline-none transition-all" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5cb4] focus:border-transparent outline-none transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Número de teléfono</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5cb4] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto de tu mensaje</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5cb4] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5cb4] focus:border-transparent outline-none transition-all resize-y" required></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#2b5cb4] text-white font-semibold py-3 rounded-lg hover:bg-[#1e4391] shadow-md transition-all disabled:opacity-70"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}