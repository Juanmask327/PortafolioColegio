"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Av. Mariscal La Mar 1234", "Miraflores, Lima"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+51 1 123 4567", "+51 999 888 777"],
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Vie: 12:00 - 23:00", "Sáb - Dom: 11:00 - 00:00"],
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Gracias por tu reserva! Te contactaremos pronto para confirmar.")
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
            Reserva Tu Mesa
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info & Image */}
          <div className="flex flex-col gap-12">
            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-8">
              {contactInfo.map((info) => (
                <div key={info.title}>
                  <div className="flex items-center gap-3 mb-3">
                    <info.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-medium text-foreground">{info.title}</h3>
                  </div>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Interior del restaurante"
                fill
                className="object-cover"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Síguenos:</span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-secondary p-8 lg:p-12 border border-border">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
              Haz tu reserva
            </h3>
            <p className="text-muted-foreground mb-8">
              Completa el formulario y te confirmaremos tu reserva en menos de 2 horas.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-none border-border bg-background"
                />
                <Input
                  placeholder="Tu teléfono"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="rounded-none border-border bg-background"
                />
              </div>
              <Input
                placeholder="Tu email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-none border-border bg-background"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="rounded-none border-border bg-background"
                />
                <Input
                  placeholder="Número de personas"
                  type="number"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                  className="rounded-none border-border bg-background"
                />
              </div>
              <Textarea
                placeholder="Mensaje o requerimientos especiales"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="rounded-none border-border bg-background resize-none"
              />
              <Button
                type="submit"
                className="w-full rounded-none bg-foreground text-background hover:bg-accent hover:text-foreground font-medium tracking-wider uppercase py-6"
              >
                Enviar Reserva
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
