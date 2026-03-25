import Link from 'next/link'
import { cities } from '@/data/cities'
import { events } from '@/data/events'
import { categories } from '@/data/categories'
import Card from '@/components/ui/Card'

function getEventCountForCity(citySlug: string): number {
  return events.filter((e) => e.citySlug === citySlug).length
}

function getCategoriesForCity(citySlug: string): string[] {
  const cityEvents = events.filter((e) => e.citySlug === citySlug)
  const catSlugs = Array.from(new Set(cityEvents.map((e) => e.category)))
  return catSlugs
    .map((slug) => categories.find((c) => c.slug === slug)?.label)
    .filter(Boolean) as string[]
}

const activeHubSlugs = ['atlanta', 'chicago']
const activeHubs = cities.filter((c) => activeHubSlugs.includes(c.slug))
const upcomingHubs = cities.filter((c) => !activeHubSlugs.includes(c.slug))

export default function CityHubs() {
  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-surface-1">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
            By City
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            Active City <span className="text-gradient">Hubs</span>
          </h2>
        </div>

        {/* Active Hubs */}
        <div className="mb-12">
          <h3 className="text-cream/60 uppercase text-xs tracking-widest font-semibold mb-6">
            Active Hubs
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activeHubs.map((city) => {
              const count = getEventCountForCity(city.slug)
              const cityCategories = getCategoriesForCity(city.slug)

              return (
                <Link
                  key={city.slug}
                  href={`/events?city=${city.slug}`}
                  className="block group"
                >
                  <Card className="p-8 group-hover:border-secondary/50 transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <span className="text-5xl leading-none">{city.emoji}</span>
                      <div className="flex-1">
                        <h4 className="font-serif text-2xl font-bold text-cream group-hover:text-secondary transition-colors duration-300">
                          {city.label}
                        </h4>
                        <p className="text-dim text-sm mt-1">{city.state}</p>
                        <p className="text-cream/70 text-sm mt-3">
                          {count} {count === 1 ? 'event' : 'events'} listed
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {cityCategories.map((cat) => (
                            <span
                              key={cat}
                              className="bg-surface-3 text-cream/60 text-xs px-2 py-0.5 rounded"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Coming Up */}
        <div>
          <h3 className="text-cream/60 uppercase text-xs tracking-widest font-semibold mb-6">
            Coming Up
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {upcomingHubs.map((city) => {
              const count = getEventCountForCity(city.slug)

              return (
                <Link
                  key={city.slug}
                  href={`/events?city=${city.slug}`}
                  className="block group"
                >
                  <Card className="p-4 text-center group-hover:border-secondary/50 transition-all duration-300">
                    <span className="text-3xl leading-none block mb-3">{city.emoji}</span>
                    <h4 className="font-semibold text-cream group-hover:text-secondary transition-colors duration-300">
                      {city.label}
                    </h4>
                    <p className="text-dim text-sm mt-1">
                      {count} {count === 1 ? 'event' : 'events'}
                    </p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
