import Image from 'next/image'
import Link from 'next/link'

export function FeaturedSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Colecciones Destacadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Link href="/mujer" className="group cursor-pointer">
            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden mb-4">
              <Image
                src="/images/banner-mujer.jpg"
                alt="Colección Mujer"
                fill
                loading="eager"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Colección Mujer</span>
              </div>
            </div>
            <p className="text-center text-foreground font-semibold">
              Descubre nuestras mejores prendas
            </p>
          </Link>

          {/* Feature Card 2 */}
          <Link href="/hombre" className="group cursor-pointer">
            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden mb-4">
              <Image
                src="/images/banner-hombre.jpg"
                alt="Colección Hombre"
                fill
                loading="eager"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Colección Hombre</span>
              </div>
            </div>
            <p className="text-center text-foreground font-semibold">
              Estilo clásico y moderno
            </p>
          </Link>

          {/* Feature Card 3 */}
          <Link href="/accesorios" className="group cursor-pointer">
            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden mb-4">
              <Image
                src="/images/banner-accesorios.jpg"
                alt="Accesorios"
                fill
                loading="eager"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Accesorios</span>
              </div>
            </div>
            <p className="text-center text-foreground font-semibold">
              Complementos perfectos
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
