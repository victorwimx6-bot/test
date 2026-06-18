// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">Acerca de</Link>
        <Link href="/contact">Contacto</Link>
        <Link href="/shop">Tienda</Link>
      </nav>
    </header>
  );
}