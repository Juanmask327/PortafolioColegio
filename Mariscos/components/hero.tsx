import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ceviche.jpg"
          alt="Ceviche artesanal premium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-white/80">
            Cevichería Premium
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] tracking-tight text-balance">
            El Sabor del Océano
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Descubre la auténtica cocina de mariscos frescos del Pacífico. 
            Ceviches, tiraditos y platos tradicionales preparados con la mejor materia prima.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase border border-white bg-white text-foreground hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Explorar Menú
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase border border-white/50 text-white hover:border-white hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Reservar Mesa
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link
          href="#nosotros"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Descubre más</span>
          <ArrowDown className="animate-bounce" size={20} />
        </Link>
      </div>
    </section>
  )
}
