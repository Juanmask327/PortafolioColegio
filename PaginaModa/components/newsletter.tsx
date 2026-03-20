'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-t border-b border-border py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <Mail className="text-primary" size={24} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-muted-foreground">
            Recibe las últimas tendencias y ofertas exclusivas directamente en tu inbox
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="flex gap-2">
          <div className="flex-1">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-background text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition font-medium flex items-center gap-2 whitespace-nowrap"
          >
            <Send size={18} />
            <span className="hidden sm:inline">Suscribirse</span>
          </button>
        </form>

        {subscribed && (
          <p className="text-center mt-4 text-accent font-medium">
            ¡Gracias por suscribirte!
          </p>
        )}
      </div>
    </section>
  )
}
