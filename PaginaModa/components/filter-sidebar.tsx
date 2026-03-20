'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  category: string[]
  priceRange: [number, number]
  color: string[]
  size: string[]
}

const categories = ['Camisetas', 'Pantalones', 'Vestidos', 'Chaquetas', 'Zapatos']
const colors = ['Rosa', 'Azul', 'Morado', 'Amarillo', 'Blanco', 'Negro']
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'category',
  ])
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 500000],
    color: [],
    size: [],
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  const updateFilter = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const toggleArrayFilter = (
    filterType: 'category' | 'color' | 'size',
    value: string
  ) => {
    const current = filters[filterType]
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value]
    updateFilter(filterType, updated)
  }

  return (
    <aside className="w-full md:w-56 space-y-6">
      {/* Category Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full py-2 hover:text-primary transition"
        >
          <h3 className="font-semibold text-foreground">Categoría</h3>
          <ChevronDown
            size={18}
            className={`transition ${
              expandedSections.includes('category') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('category') && (
          <div className="space-y-2 mt-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      toggleArrayFilter('category', cat)
                    } else {
                      toggleArrayFilter('category', cat)
                    }
                  }}
                  className="rounded w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-foreground hover:text-primary transition">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full py-2 hover:text-primary transition"
        >
          <h3 className="font-semibold text-foreground">Precio</h3>
          <ChevronDown
            size={18}
            className={`transition ${
              expandedSections.includes('price') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('price') && (
          <div className="space-y-3 mt-3">
            <div>
              <label className="text-sm text-foreground block mb-2">
                Hasta: {new Intl.NumberFormat('es-CO', {
                  style: 'currency',
                  currency: 'COP',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(filters.priceRange[1])}
              </label>
              <input
                type="range"
                min="0"
                max="500000"
                step="10000"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  updateFilter('priceRange', [
                    filters.priceRange[0],
                    parseInt(e.target.value),
                  ])
                }
                className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
              />
            </div>
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between w-full py-2 hover:text-primary transition"
        >
          <h3 className="font-semibold text-foreground">Color</h3>
          <ChevronDown
            size={18}
            className={`transition ${
              expandedSections.includes('color') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('color') && (
          <div className="space-y-2 mt-3">
            {colors.map((col) => (
              <label key={col} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.color.includes(col)}
                  onChange={() => toggleArrayFilter('color', col)}
                  className="rounded w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-foreground hover:text-primary transition">
                  {col}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div>
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full py-2 hover:text-primary transition"
        >
          <h3 className="font-semibold text-foreground">Talla</h3>
          <ChevronDown
            size={18}
            className={`transition ${
              expandedSections.includes('size') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('size') && (
          <div className="grid grid-cols-3 gap-2 mt-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => toggleArrayFilter('size', size)}
                className={`py-2 rounded border transition text-sm font-medium ${
                  filters.size.includes(size)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-muted border-border hover:border-primary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setFilters({ category: [], priceRange: [0, 500000], color: [], size: [] })
          onFilterChange({
            category: [],
            priceRange: [0, 500000],
            color: [],
            size: [],
          })
        }}
        className="w-full py-2 px-4 bg-muted text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium"
      >
        Limpiar Filtros
      </button>
    </aside>
  )
}
