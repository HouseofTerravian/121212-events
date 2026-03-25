'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { events } from '@/data/events'
import { categories } from '@/data/categories'
import { cities } from '@/data/cities'
import EventCard from '@/components/EventCard'
import Button from '@/components/ui/Button'

function EventsContent() {
  const searchParams = useSearchParams()
  const [activeCity, setActiveCity] = useState('all')
  const [activeCat, setActiveCat] = useState('all')
  const [activePrice, setActivePrice] = useState('all')

  useEffect(() => {
    const cityParam = searchParams.get('city')
    const catParam = searchParams.get('cat')
    const priceParam = searchParams.get('price')
    if (cityParam) setActiveCity(cityParam)
    if (catParam) setActiveCat(catParam)
    if (priceParam) setActivePrice(priceParam)
  }, [searchParams])

  const filteredEvents = events.filter((event) => {
    if (activeCity !== 'all' && event.citySlug !== activeCity) return false
    if (activeCat !== 'all' && event.catSlug !== activeCat) return false
    if (activePrice === 'free' && !event.free) return false
    if (activePrice === 'paid' && event.free) return false
    return true
  })

  const resetFilters = () => {
    setActiveCity('all')
    setActiveCat('all')
    setActivePrice('all')
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              All Events
            </span>
            <h1 className="heading-secondary text-cream mt-4 mb-4">
              Browse <span className="text-gradient">Events</span>
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Curated Black cultural events across the diaspora. Filter by city, category, or price to find exactly what you are looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-[73px] z-40 bg-background-dark border-b border-border py-4 px-4 md:px-8">
        <div className="container-custom mx-auto space-y-4">
          {/* City Filters */}
          <div>
            <span className="text-dim text-xs font-semibold tracking-wider uppercase mb-2 block">
              City
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCity('all')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCity === 'all'
                    ? 'bg-secondary text-primary-dark'
                    : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                }`}
              >
                All Cities
              </button>
              {cities.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => setActiveCity(city.slug)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCity === city.slug
                      ? 'bg-secondary text-primary-dark'
                      : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                  }`}
                >
                  {city.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <span className="text-dim text-xs font-semibold tracking-wider uppercase mb-2 block">
              Category
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCat('all')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCat === 'all'
                    ? 'bg-secondary text-primary-dark'
                    : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCat(cat.slug)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCat === cat.slug
                      ? 'bg-secondary text-primary-dark'
                      : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filters */}
          <div>
            <span className="text-dim text-xs font-semibold tracking-wider uppercase mb-2 block">
              Price
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All' },
                { key: 'free', label: 'Free' },
                { key: 'paid', label: 'Paid' },
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setActivePrice(option.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activePrice === option.key
                      ? 'bg-secondary text-primary-dark'
                      : 'bg-surface-2 text-cream/70 hover:bg-surface-3'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <p className="text-dim mb-8">
            Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-cream/70 text-lg mb-6">
                No events match those filters yet.
              </p>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Know an Event That <span className="text-gradient">Belongs Here</span>?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            We list every event worth going to. If you know one we are missing, submit it and we will review it within 48 hours.
          </p>
          <Link href="/submit">
            <Button size="lg">
              Submit an Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default function EventsPage() {
  return (
    <Suspense fallback={
      <div className="pt-28 pb-12 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              All Events
            </span>
            <h1 className="heading-secondary text-cream mt-4 mb-4">
              Browse <span className="text-gradient">Events</span>
            </h1>
            <p className="text-cream/70 text-lg">Loading events...</p>
          </div>
        </div>
      </div>
    }>
      <EventsContent />
    </Suspense>
  )
}
