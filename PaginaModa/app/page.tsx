'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { ProductCard } from '@/components/product-card'
import { FilterSidebar, FilterState } from '@/components/filter-sidebar'
import { FeaturedSection } from '@/components/featured-section'
import { NewsletterSection } from '@/components/newsletter'
import { Search } from 'lucide-react'

// Mock product data - Precios en COP (Pesos Colombianos)
const mockProducts = [
  {
    id: '1',
    name: 'Camiseta Básica Rosa',
    price: 89900,
    category: 'Camisetas',
    color: 'Rosa',
    image: '/images/camiseta-rosa.jpg',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Pantalón Palazzo Azul',
    price: 179900,
    category: 'Pantalones',
    color: 'Azul',
    image: '/images/pantalon-azul.jpg',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Vestido Morado Elegante',
    price: 259900,
    category: 'Vestidos',
    color: 'Morado',
    image: '/images/vestido-morado.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Chaqueta Denim',
    price: 229900,
    category: 'Chaquetas',
    color: 'Azul',
    image: '/images/chaqueta-denim.jpg',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Zapatillas Blancas',
    price: 299900,
    category: 'Zapatos',
    color: 'Blanco',
    image: '/images/zapatillas-blancas.jpg',
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Falda Mini Rosa Pastel',
    price: 129900,
    category: 'Faldas',
    color: 'Rosa',
    image: '/images/falda-rosa.jpg',
    rating: 4.3,
  },
  {
    id: '7',
    name: 'Top Amarillo Fluido',
    price: 99900,
    category: 'Camisetas',
    color: 'Amarillo',
    image: '/images/top-amarillo.jpg',
    rating: 4.4,
  },
  {
    id: '8',
    name: 'Botines Negros',
    price: 349900,
    category: 'Zapatos',
    color: 'Negro',
    image: '/images/botines-negros.jpg',
    rating: 4.9,
  },
  {
    id: '9',
    name: 'Blusa Blanca Casual',
    price: 119900,
    category: 'Camisetas',
    color: 'Blanco',
    image: '/images/blusa-blanca.jpg',
    rating: 4.2,
  },
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 500000],
    color: [],
    size: [],
  })
  const [sortBy, setSortBy] = useState('relevance')

  const filteredProducts = useMemo(() => {
    let results = mockProducts

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (filters.category.length > 0) {
      results = results.filter((product) =>
        filters.category.includes(product.category)
      )
    }

    // Filter by price
    results = results.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    )

    // Filter by color
    if (filters.color.length > 0) {
      results = results.filter((product) =>
        filters.color.includes(product.color)
      )
    }

    // Sort
    if (sortBy === 'price-low') {
      results.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      results.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    return results
  }, [searchTerm, filters, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Descubre Tu Estilo
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Las últimas tendencias de moda con un toque fresco y juvenil para
            tu guardarropa
          </p>
        </div>
      </section>

      <FeaturedSection />

      {/* Search Bar */}
      <div className="sticky top-20 z-40 bg-background border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-muted text-foreground placeholder-muted-foreground pl-10 pr-4 py-3 rounded-full border border-border focus:outline-none focus:border-primary transition"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-56 flex-shrink-0">
            <FilterSidebar onFilterChange={setFilters} />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} productos encontrados
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-muted text-foreground px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary transition text-sm"
              >
                <option value="relevance">Relevancia</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Calificación</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No encontramos productos que coincidan con tu búsqueda
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setFilters({
                      category: [],
                      priceRange: [0, 500000],
                      color: [],
                      size: [],
                    })
                  }}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <NewsletterSection />

      {/* Footer */}
      <footer className="bg-primary/10 border-t border-border mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Trendy Closet</h4>
              <p className="text-sm text-muted-foreground">
                Tu tienda online de moda con los mejores estilos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Compra</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Nuevas Colecciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Ofertas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Rebajas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Devoluciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2024 Trendy Closet. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
