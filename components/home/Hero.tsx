import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cities } from '@/data/cities'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&h=900&fit=crop"
          alt="Concert crowd at a live event"
          fill
          className="object-cover"
          priority
        />
        {/* Layer 2: Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent" />
        {/* Layer 3: Purple tint */}
        <div className="absolute inset-0 bg-purple/20 mix-blend-multiply" />
        {/* Layer 4: Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-surface-3 border border-secondary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-secondary mr-2" />
            <span className="text-secondary text-sm font-medium">
              The Official 121212 Ecosystem Events Hub
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-primary text-cream mb-6">
            Every Event{' '}
            <br />
            <span className="text-gradient">Worth Going To.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-cream/80 text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl">
            Curated Black cultural events across every city in the 121212 network.
            Music. Tech. Business. Art. Food. Community.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/events">
              <Button size="lg">
                Browse All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/events?price=free">
              <Button variant="outline" size="lg">
                Free Events Only
              </Button>
            </Link>
          </div>

          {/* City badges */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {cities.map((city) => (
              <span
                key={city.slug}
                className="bg-surface-3/80 border border-border text-cream/70 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {city.emoji} {city.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
