import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedEvents } from '@/data/events'
import EventCard from '@/components/EventCard'
import Button from '@/components/ui/Button'

export default function FeaturedEvents() {
  const featuredEvents = getFeaturedEvents().slice(0, 8)

  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-primary/20">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
              Don&apos;t Miss
            </span>
            <h2 className="heading-secondary text-cream mt-4">
              Featured <span className="text-gradient">Events</span>
            </h2>
            <p className="text-cream/70 mt-4 max-w-xl text-lg">
              Curated highlights from across the network.
            </p>
          </div>
          <Link href="/events" className="mt-6 md:mt-0">
            <Button variant="outline">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
