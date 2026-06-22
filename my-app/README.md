# Proyecto Wiemx - Frontend

## Visión general
Este proyecto es una tienda de telefonía construida con Next.js 16, React 19 y Tailwind CSS. El código se organiza como una aplicación de Next.js con rutas de página en `src/app`, datos estáticos en `src/data`, y componentes reutilizables en `src/components`.

La lógica principal del proyecto se concentra en:
- filtros y ordenamiento en la tienda
- un carrito de deseos local (`wishlist`) guardado en `localStorage`
- carrusel de productos y marcas
- página de detalle de producto con galería y pestañas
- componentes interactivos con estados del cliente

> No se detectaron cambios ocultos extraños en el proyecto; la documentación se basa en la lógica visible de los archivos existentes.

## Arranque rápido
1. Instala dependencias:
```bash
npm install
```
2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura importante
- `src/app/layout.tsx`: envoltorio global, incluye `Header` y `Footer` en todas las páginas.
- `src/app/page.tsx`: página principal que combina secciones de inicio y consume datos de `products` y `brands`.
- `src/app/shop/page.tsx`: página de tienda con filtros de categoría, marca y orden.
- `src/app/shop/[slug]/page.tsx`: detalle de producto por `href`.
- `src/app/wishlist/page.tsx`: lista de productos guardados en wishlist.
- `src/components/`: componentes de UI con lógica de interacción.
- `src/data/`: datos estáticos de productos, marcas y anuncios.

## Lógica de componentes clave

### `Header.tsx`
- Usa `usePathname` para marcar la ruta activa.
- Administra el menú móvil con `useState`.
- Muestra enlaces de navegación y cambia la barra inferior según la página.

### `Footer.tsx`
- Componente de presentación con enlaces y secciones estáticas.
- No tiene lógica dinámica compleja.

### `ProductGrid.tsx`
- Determina cuántos productos mostrar según `window.matchMedia`.
- Usa paginación simple con botones "anterior" y "siguiente".
- Cambia el tamaño de página entre móvil y escritorio: 4 productos en móvil, 8 en desktop.

### `ProductCard.tsx`
- Controla el índice de la imagen mostrada con `useState`.
- Muestra botones anterior/siguiente cuando hay varias imágenes.
- Integra `WishlistButton` para agregar o quitar el producto de la wishlist.

### `WishlistButton.tsx`
- Mantiene lista de IDs en `localStorage` bajo la clave `wishlist`.
- Usa un evento personalizado `wishlist-changed` para sincronizar estados en varias instancias.
- Cambia el icono según el producto ya esté en wishlist.

### `ShopPage` (`src/app/shop/page.tsx`)
- Obtiene `brand` desde la URL con `useSearchParams`.
- Usa estados para `category`, `sort` y `brandFilter`.
- Filtra productos por marca y serie, luego ordena por precio si se solicita.
- Genera categorías únicas por serie usando `useMemo`.

### `CategoryBar.tsx` y `ShopFilters.tsx`
- Componentes de control que delegan la selección hacia `ShopPage`.
- `CategoryBar` renderiza categorías únicas y cambia el filtro.
- `ShopFilters` permite ordenar por precio o nombre.

### `Carousel.tsx`
- Componente genérico que acepta `products` o `brands`.
- Calculo de slides con `useMemo`.
- Auto-play con `setInterval` y controles manuales.
- Resetea posición cuando cambian los slides.

### `ProductSlide.tsx`
- Muestra un producto destacado dentro del carrusel.
- Extrae características de `descripcion1` separando por `•`.
- Muestra precio y enlace al detalle del producto.

### `PhoneShowcase.tsx`
- Selecciona un producto único por cada `series`.
- Muestra una colección de tarjetas de producto sin repetidos por serie.

### `IphoneTemplate.tsx`
- Añade un efecto de parallax usando `requestAnimationFrame` en scroll.
- Renderiza una galería de imágenes de teléfono y una lista de especificaciones.
- Incluye una tarjeta CTA con precio y botón.

### `ProductDetailPage` (`src/app/shop/[slug]/page.tsx`)
- Busca el producto por `href` basado en `slug`.
- Renderiza galería táctil con swipe en móvil y miniaturas.
- Muestra detalles del producto, colores y un botón de compra.
- Implementa pestañas con contenido de descripción y calidad.

### `WishlistPage.tsx`
- Lee IDs de wishlist desde `localStorage` y los mantiene en estado.
- Escucha `wishlist-changed` para actualizar automáticamente la vista.
- Si no hay productos, muestra un mensaje de lista vacía.

### `Contact.tsx`
- Usa un estado booleano para abrir/cerrar un modal.
- Renderiza un iframe de Google Maps y un formulario de contacto.
- No envía datos a un backend; el formulario solo previene el envío por defecto.

### `FAQ.tsx`
- Controla el acordeón con un índice activo.
- Alterna la visibilidad de cada respuesta.

### `Services.tsx`, `Garantia.tsx`, `Privacidad.tsx`, `KnowUs.tsx`
- Componentes principalmente estáticos.
- `KnowUs` agrega contenido dinámico desde arrays de datos para misión, visión y proveedores.
- No incluyen lógica compleja, solo renderizado de listas.

## Datos del proyecto

### `src/data/products.ts`
- Define los productos con campos como `id`, `name`, `series`, `brand`, `images`, `priceMin`, `priceMax`, `discount`, `descripcion1`, `descripcion2`, `href`.
- `descripcion1` se usa como lista de características cuando aparece en el carrusel o en detalle.
- `href` define la ruta dinámica del producto en `/shop/[slug]`.

### `src/data/brands.ts`
- Datos simples de marcas con `name`, `url`, `imageUrl`, `altText`.
- Se usa en el carrusel de marcas y en las categorías de marca.

### `src/data/anuncios.ts`
- Contiene URLs de imágenes para anuncios relacionados con Mercado Libre.

## Observaciones finales
- La lógica principal del proyecto está en los componentes que usan estado de cliente y `localStorage`.
- El código no oculta comportamientos ni acciones adicionales fuera de los componentes revisados.
- Si buscas cambios generados por IA, la mayor parte de la lógica actual es coherente con una tienda de venta de teléfonos en línea y no hay código invisible en archivos no revisados.

---

## Ejecución
```bash
npm install
npm run dev
```

