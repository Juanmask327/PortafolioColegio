import Link from "next/link"
import { Instagram, Facebook, MapPin } from "lucide-react"

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4">
              Mariscos del Pacífico
            </h3>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Desde 2010, llevando los sabores más frescos del océano a tu mesa. 
              Una experiencia gastronómica única en el corazón de Lima.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">
              Visítanos
            </h4>
            <div className="flex items-start gap-3 text-background/70 text-sm">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              <div>
                <p>Av. Mariscal La Mar 1234</p>
                <p>Miraflores, Lima, Perú</p>
              </div>
            </div>
            <p className="mt-4 text-background/70 text-sm">
              Reservas: +51 1 123 4567
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Mariscos del Pacífico. Todos los derechos reservados.
            </p>
            <p className="text-background/40 text-xs">
              Diseñado con pasión por el mar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
