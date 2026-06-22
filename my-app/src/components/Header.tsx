'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tienda', href: '/shop' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Servicios', href: '/services' },
  { name: 'Conócenos', href: '/know-us' },
  { name: 'Wishlist', href: '/wishlist' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-evenly px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <Link href="/">
          <Image
            src="https://wiemx.com/wp-content/uploads/2025/06/wiemx_logo-e1721334141541.png"
            alt="logo"
            width={140}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* nav dekstop */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-6 text-sm font-medium text-gray-700 transition-colors hover:text-black"
              >
                {link.name}

                {/* underline */}
                <span
                  className={`
                    absolute bottom-4 left-0 h-[2.5px] w-full origin-left transition-all duration-300
                    ${
                      isActive
                        ? 'scale-x-100 bg-blue-600'
                        : 'scale-x-0 bg-gray-300 group-hover:scale-x-100'
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* boton mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center md:hidden"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* menu mobile */}
      <div
        className={`
          overflow-hidden transition-all duration-300 md:hidden
          ${mobileMenuOpen ? 'max-h-96 border-t' : 'max-h-0'}
        `}
      >
        <div className="flex flex-col px-4 py-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  border-b py-3 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-black'
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}