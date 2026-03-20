'use client'

import { Search, X } from 'lucide-react'
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  initialValue?: string
}

export function SearchBar({ onSearch, initialValue = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={20} />
      <input
        type="text"
        placeholder="Buscar prendas, colores, estilos..."
        value={query}
        onChange={handleSearch}
        className="w-full bg-muted text-foreground placeholder-muted-foreground pl-12 pr-10 py-3 rounded-full border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
        >
          <X size={18} />
        </button>
      )}
    </div>
  )
}
