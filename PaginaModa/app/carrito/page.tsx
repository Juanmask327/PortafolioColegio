'use client'

import { Header } from '@/components/header'
import { ShoppingCart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8"
        >
          <ArrowLeft size={18} />
          <span>Volver a tienda</span>
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
            <ShoppingCart size={32} className="text-primary" />
            Mi Carrito de Compras
          </h1>

          <div className="bg-muted rounded-2xl p-12 text-center space-y-4">
            <ShoppingCart size={48} className="text-muted-foreground mx-auto" />
            <h2 className="text-2xl font-semibold text-foreground">
              Tu carrito está vacío
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Explora nuestras colecciones y encuentra las prendas perfectas
              para tu estilo
            </p>
            <Link
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-medium mt-4"
            >
              Seguir Comprando
            </Link>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Envío Gratis</p>
              <p className="font-semibold text-foreground">
                Compras desde $50
              </p>
            </div>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Devolución Fácil
              </p>
              <p className="font-semibold text-foreground">30 días</p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Garantía
              </p>
              <p className="font-semibold text-foreground">100% Seguro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
