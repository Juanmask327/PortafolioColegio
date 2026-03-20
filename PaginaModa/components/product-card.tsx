'use client'

import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  color?: string
  rating?: number
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  color,
  rating = 4.5,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div
        className="relative aspect-square bg-muted rounded-2xl overflow-hidden mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Action Buttons Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3 transition">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white rounded-full p-3 hover:bg-primary hover:text-white transition"
            >
              <Heart
                size={20}
                className={isFavorite ? 'fill-current' : ''}
              />
            </button>
            <button className="bg-white rounded-full p-3 hover:bg-primary hover:text-white transition">
              <ShoppingCart size={20} />
            </button>
          </div>
        )}

        {/* Favorite Button (Always visible on mobile) */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="md:hidden absolute top-3 right-3 bg-white rounded-full p-2 shadow-md"
        >
          <Heart
            size={18}
            className={isFavorite ? 'fill-accent text-accent' : ''}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          {category}
        </p>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition">
          {name}
        </h3>
        {color && (
          <p className="text-sm text-muted-foreground">Color: {color}</p>
        )}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            {new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs ${
                  i < Math.floor(rating)
                    ? 'text-accent'
                    : 'text-muted'
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
