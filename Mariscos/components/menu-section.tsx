const menuCategories = [
  {
    title: "Ceviches Clásicos",
    description: "La esencia del Pacífico en cada bocado",
    items: [
      { name: "Ceviche Clásico", description: "Pescado del día, limón, cebolla morada, cilantro", price: "S/ 38" },
      { name: "Ceviche Mixto", description: "Pescado, camarones, pulpo, calamar", price: "S/ 45" },
      { name: "Tiradito Nikkei", description: "Corte fino de pescado, salsa de maracuyá y ají amarillo", price: "S/ 42" },
      { name: "Leche de Tigre", description: "El elixir tradicional peruano con mariscos", price: "S/ 28" },
    ],
  },
  {
    title: "Platos Principales",
    description: "Sabores que conquistan el paladar",
    items: [
      { name: "Arroz con Mariscos", description: "Arroz cremoso con camarones, pulpo, calamar y conchas", price: "S/ 52" },
      { name: "Jalea Mixta", description: "Fritura de mariscos con yuca y salsa criolla", price: "S/ 48" },
      { name: "Parrillada de Mariscos", description: "Selección de mariscos a la parrilla para dos personas", price: "S/ 68" },
      { name: "Sudado de Pescado", description: "Pescado guisado en salsa criolla con ajíes", price: "S/ 45" },
    ],
  },
  {
    title: "Bebidas",
    description: "Acompañamientos perfectos",
    items: [
      { name: "Pisco Sour Clásico", description: "Pisco quebranta, limón, jarabe, clara de huevo", price: "S/ 25" },
      { name: "Chilcano de Pisco", description: "Pisco, ginger ale, limón, amargo de angostura", price: "S/ 22" },
      { name: "Maracuyá Sour", description: "Pisco infusionado con maracuyá fresco", price: "S/ 28" },
      { name: "Limonada Frozen", description: "Limonada helada con hierba luisa", price: "S/ 12" },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nuestra Carta
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
            Menú Destacado
          </h2>
        </div>

        {/* Menu Categories */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {menuCategories.map((category) => (
            <div key={category.title} className="bg-card p-8 lg:p-10 border border-border">
              <div className="mb-8 pb-6 border-b border-border">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-lg font-medium text-accent shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Consulta nuestra carta completa o solicita recomendaciones personalizadas
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-all duration-300"
          >
            Hacer una Reserva
          </a>
        </div>
      </div>
    </section>
  )
}
