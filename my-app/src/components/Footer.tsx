import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B3B82] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
        {/* Contacto */}
        <div>
          <img src="https://wiemx.com/wp-content/uploads/2025/06/wiemx_logo-e1721334141541.png" alt="logo" className="w-40 mb-4" />

          <p className="text-sm mb-4">Venta de telefonía a mayoreo</p>

          <div className="space-y-3 text-sm">
            <Item icon="https://wiemx.com/wp-content/uploads/2021/08/wd-cursor-dark.svg" text="Av. José González..." />
            <Item icon="https://wiemx.com/wp-content/uploads/2021/08/wd-phone-dark.svg" text="+52 378 116 5102" />
            <Item icon="https://wiemx.com/wp-content/uploads/2021/08/wd-envelope-dark.svg" text="admin@wiemx.com" />
          </div>
        </div>

        {/* Redes */}
        <div>
          <h3 className="font-semibold mb-4">
            Redes sociales
          </h3>

          <div className="flex align-center w-48">
            {/* aquí luego pones SVG o imágenes */}
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="facebook" className="h-13 w-10 m-0 cursor-pointer"/>
            <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="instagram" className="h-13 w-10 m-0 cursor-pointer" />
            <img src="https://www.logo.wine/a/logo/TikTok/TikTok-Logo.wine.svg" alt="tiktok" className="h-13 w-10 m-0 cursor-pointer" />
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Información legal</h3>

          <ItemLink
            icon="https://wiemx.com/wp-content/uploads/2025/06/politicas-icono-25x25.webp"
            text="Política de privacidad"
            href="/privacidad"
          />

          <ItemLink
            icon="https://wiemx.com/wp-content/uploads/2025/06/politicas-icono-25x25.webp"
            text="Política de garantía"
            href="/garantia"
          />
        </div>

        {/* Ayuda */}
        <div>
          <h3 className="font-semibold mb-4">Seguridad</h3>

          <ItemLink
            icon="https://wiemx.com/wp-content/uploads/2025/06/chat-25x25.webp"
            text="Preguntas frecuentes"
            href="/faq"
          />

          <ItemLink
            icon="https://wiemx.com/wp-content/uploads/2025/06/chat-25x25.webp"
            text="Contáctanos"
            href="/contacto"
          />
        </div>

        {/* Empresa */}
        <div>
          <h3 className="font-semibold mb-4">Sobre nosotros</h3>

          <ItemLink
            icon="https://wiemx.com/wp-content/uploads/2025/06/mano-25x25.png"
            text="WieMX"
            href="/nosotros"
          />

          <ItemLink
            icon="https://wiemx.com/wp-content/uploads/2025/06/reparacion-de-telefonos-25x25.png"
            text="Service Center"
            href="/service-center"
          />

          <Item
            icon="https://www.iconpacks.net/icons/1/free-star-icon-984-thumb.png"
            text="Garantía en todos nuestros equipos"
          />
        </div>
      </div>

      <div className="border-t border-blue-800 py-4 text-center text-sm">
        © 2025 WieMX. Todos los derechos reservados
      </div>
    </footer>
  );
}

function Item({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex gap-2 items-center mb-3">
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function ItemLink({
  icon,
  text,
  href,
}: {
  icon: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex gap-2 items-center mb-3 hover:text-blue-300 transition"
    >
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-sm">{text}</span>
    </Link>
  );
}