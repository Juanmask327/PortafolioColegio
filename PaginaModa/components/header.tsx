'use client'

import Link from 'next/link'
import { ShoppingBag, Search } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Trendy Closet
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/mujer" className="text-foreground hover:text-primary transition">
              Mujer
            </Link>
            <Link href="/hombre" className="text-foreground hover:text-primary transition">
              Hombre
            </Link>
            <Link href="/accesorios" className="text-foreground hover:text-primary transition">
              Accesorios
            </Link>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Search size={20} className="text-foreground" />
            </button>
            <Link
              href="/carrito"
              className="relative p-2 hover:bg-muted rounded-lg transition"
            >
              <ShoppingBag size={20} className="text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
