import Image from "next/image"

const features = [
  {
    number: "01",
    title: "Mariscos Frescos",
    description:
      "Directo del Pacífico a tu mesa. Pescado y mariscos capturados diariamente para garantizar la máxima frescura en cada plato.",
  },
  {
    number: "02",
    title: "Chefs Expertos",
    description:
      "Nuestro equipo de chefs especializados en cocina peruana y fusión marina crea platos únicos y memorables con técnicas ancestrales.",
  },
  {
    number: "03",
    title: "Experiencia Única",
    description:
      "Un ambiente sofisticado donde la tradición se encuentra con la innovación. Cada visita es un viaje sensorial inolvidable.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nuestra Esencia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
              Tradición y pasión por el mar
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde 2010, Mariscos del Pacífico ha sido el destino predilecto para los amantes 
              de la cocina marina peruana. Cada plato cuenta una historia de tradición, 
              frescura y dedicación artesanal.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/seafood-display.jpg"
              alt="Selección de mariscos frescos"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/chef-preparing.jpg"
              alt="Chef preparando ceviche"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.number} className="group">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl font-medium text-muted-foreground/30 group-hover:text-accent transition-colors duration-300">
                  {feature.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
