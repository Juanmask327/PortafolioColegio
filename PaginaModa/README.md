# 👗 Trendy Closet - Tienda Online de Moda

Una tienda online moderna y juvenil construida con Next.js, React y Tailwind CSS. Características búsqueda avanzada, filtros inteligentes y una interfaz fresca con colores pastel.

## ✨ Características

- **Catálogo de Productos**: 9+ productos de moda con imágenes de alta calidad
- **Búsqueda Inteligente**: Busca por nombre, categoría o características
- **Filtros Avanzados**: 
  - Por categoría (Camisetas, Pantalones, Vestidos, etc.)
  - Por rango de precio
  - Por color
  - Por talla
- **Múltiples Categorías**:
  - Colección Mujer
  - Colección Hombre
  - Accesorios
- **Ordenamiento**: Relevancia, precio (menor/mayor), calificación
- **Diseño Responsivo**: Optimizado para móvil, tablet y desktop
- **Interfaz Moderna**: Estilo fresco y juvenil con colores pastel
- **Newsletter**: Suscripción para recibir ofertas y novedades
- **Calificaciones**: Sistema de estrellas para productos

## 🎨 Diseño

### Paleta de Colores
- **Primario**: Rosa pastel suave (Morado-Rosa)
- **Secundario**: Azul pastel
- **Acento**: Amarillo pastel
- **Neutros**: Blancos, grises y negros elegantes

### Tipografía
- **Headings**: Geist (Sans Serif)
- **Body**: Geist (Sans Serif)

## 🛠️ Tecnologías

- **Framework**: Next.js 16
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4 + shadcn/ui
- **Iconos**: Lucide React
- **Imágenes**: Unsplash API

## 📁 Estructura del Proyecto

```
.
├── app/
│   ├── page.tsx                 # Página principal / Catálogo
│   ├── mujer/
│   │   └── page.tsx            # Colección Mujer
│   ├── hombre/
│   │   └── page.tsx            # Colección Hombre
│   ├── accesorios/
│   │   └── page.tsx            # Colección Accesorios
│   ├── carrito/
│   │   └── page.tsx            # Página del carrito
│   ├── layout.tsx              # Layout raíz
│   └── globals.css             # Estilos globales
├── components/
│   ├── header.tsx              # Navegación superior
│   ├── product-card.tsx        # Tarjeta de producto
│   ├── filter-sidebar.tsx      # Panel de filtros
│   ├── featured-section.tsx    # Sección de categorías destacadas
│   ├── search-bar.tsx          # Barra de búsqueda
│   └── newsletter.tsx          # Sección de suscripción
├── public/                      # Activos estáticos
└── package.json                # Dependencias del proyecto
```

## 🚀 Cómo Empezar

### Instalación

```bash
npm install
# o
pnpm install
```

### Desarrollo

```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Build para Producción

```bash
npm run build
npm start
# o
pnpm build
pnpm start
```

## 📱 Características de Usuario

### Página Principal
- Hero section con eslogan
- Sección de categorías destacadas
- Grid de productos con búsqueda en tiempo real
- Sidebar de filtros avanzados
- Newsletter para suscriptores

### Navegación
- Header sticky con logo y navegación
- Indicador de carrito de compras
- Breadcrumbs en páginas de categoría

### Producto
- Imágenes de alta calidad
- Información de categoría y color
- Precio y calificación
- Botones de favoritos y agregar al carrito (interactivos)
- Zoom en hover (escritorio)

### Filtros
- Expandibles/contraíbles
- Búsqueda multicategoría
- Rangos de precio dinámicos
- Selección de colores
- Selección de tallas
- Botón para limpiar todos los filtros

## 🔄 Flujo de Datos

- Los datos de productos se cargan como mockData
- Los filtros se actualizan en tiempo real
- La búsqueda es instantánea sin necesidad de servidor
- El estado se mantiene en componentes cliente

## 🎯 Próximas Mejoras

- Integración con base de datos para productos
- Sistema de carrito persistente
- Autenticación de usuarios
- Página de detalle del producto
- Sistema de reseñas y comentarios
- Integración de pagos
- Gestión de inventario

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

Creado con ❤️ usando v0
