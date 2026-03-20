'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { ProductCard } from '@/components/product-card'
import { FilterSidebar, FilterState } from '@/components/filter-sidebar'
import { Search, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Mock products for men's collection - Precios en COP
const menProducts = [
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
    id: '8',
    name: 'Botines Negros',
    price: 349900,
    category: 'Zapatos',
    color: 'Negro',
    image: '/images/botines-negros.jpg',
    rating: 4.9,
  },
  {
    id: '10',
    name: 'Polera Gris Clásica',
    price: 99900,
    category: 'Camisetas',
    color: 'Gris',
    image: '/images/polera-gris.jpg',
    rating: 4.3,
  },
  {
    id: '11',
    name: 'Pantalón Chino Beige',
    price: 189900,
    category: 'Pantalones',
    color: 'Beige',
    image: '/images/pantalon-beige.jpg',
    rating: 4.4,
  },
  {
    id: '12',
    name: 'Chaqueta Negra Elegante',
    price: 379900,
    category: 'Chaquetas',
    color: 'Negro',
    image: '/images/chaqueta-negra.jpg',
    rating: 4.8,
  },
]

export default function MenPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 500000],
    color: [],
    size: [],
  })
  const [sortBy, setSortBy] = useState('relevance')

  const filteredProducts = useMemo(() => {
    let results = menProducts

    if (searchTerm) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (filters.category.length > 0) {
      results = results.filter((product) =>
        filters.category.includes(product.category)
      )
    }

    results = results.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    )

    if (filters.color.length > 0) {
      results = results.filter((product) =>
        filters.color.includes(product.color)
      )
    }

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

      {/* Breadcrumb */}
      <div className="border-b border-border py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft size={18} />
            <span>Volver</span>
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Colección Hombre
          </h1>
          <p className="text-lg text-muted-foreground">
            Estilo clásico y moderno para ti
          </p>
        </div>
      </section>

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
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No encontramos productos que coincidan
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
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
