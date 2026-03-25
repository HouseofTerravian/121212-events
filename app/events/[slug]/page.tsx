import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Tag,
  Globe,
  ExternalLink,
} from 'lucide-react'
import { events, getEventBySlug, getRelatedEvents } from '@/data/events'
import { getCategoryBySlug } from '@/data/categories'
import EventCard from '@/components/EventCard'
import Button from '@/components/ui/Button'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: 'Event Not Found | 121212.events' }
  return {
    title: `${event.name} | 121212.events`,
    description: event.description,
  }
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const category = getCategoryBySlug(event.catSlug)
  const relatedEvents = getRelatedEvents(event, 3)
  const mapsQuery = encodeURIComponent(event.address)

  return (
    <>
      {/* Back Navigation */}
      <section className="pt-24 pb-4 px-4 md:px-8 bg-background-dark">
        <div className="container-custom mx-auto">
          <Link
            href="/events"
            className="inline-flex items-center text-cream/70 hover:text-secondary transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
        </div>
      </section>

      {/* Event Detail */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Badges */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {event.featured && (
                  <span className="bg-secondary/90 text-primary-dark text-sm font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                {category && (
                  <span className="bg-purple/20 text-purple-light text-sm font-medium px-3 py-1 rounded-full">
                    {category.emoji} {category.label}
                  </span>
                )}
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  event.free
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-surface-3 text-cream/70'
                }`}>
                  {event.free ? 'Free' : event.price}
                </span>
              </div>

              {/* Event Name */}
              <h1 className="heading-secondary text-cream mb-8">
                {event.name}
              </h1>

              {/* Meta Grid */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center text-cream/70">
                  <Calendar className="h-5 w-5 mr-2 text-secondary" />
                  <div>
                    <p className="text-cream/50 text-xs uppercase tracking-wider">Date</p>
                    <p className="text-cream font-medium">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center text-cream/70">
                  <Clock className="h-5 w-5 mr-2 text-secondary" />
                  <div>
                    <p className="text-cream/50 text-xs uppercase tracking-wider">Time</p>
                    <p className="text-cream font-medium">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center text-cream/70">
                  <MapPin className="h-5 w-5 mr-2 text-secondary" />
                  <div>
                    <p className="text-cream/50 text-xs uppercase tracking-wider">Location</p>
                    <p className="text-cream font-medium">{event.city}, {event.state}</p>
                  </div>
                </div>
                <div className="flex items-center text-cream/70">
                  {event.free ? (
                    <Tag className="h-5 w-5 mr-2 text-secondary" />
                  ) : (
                    <DollarSign className="h-5 w-5 mr-2 text-secondary" />
                  )}
                  <div>
                    <p className="text-cream/50 text-xs uppercase tracking-wider">Price</p>
                    <p className="text-cream font-medium">{event.free ? 'Free' : event.price}</p>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-10">
                <h2 className="text-cream font-serif text-xl font-semibold mb-4">
                  About This Event
                </h2>
                <div className="text-cream/80 text-base leading-relaxed space-y-4">
                  {event.description.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-10">
                <h2 className="text-cream font-serif text-xl font-semibold mb-4">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-2 text-cream/70 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Venue Section */}
              <div>
                <h2 className="text-cream font-serif text-xl font-semibold mb-4">
                  Venue
                </h2>
                <div className="bg-surface-1 border border-border rounded-lg p-6">
                  <p className="text-cream font-semibold mb-1">{event.venue}</p>
                  <p className="text-cream/70 text-sm mb-4">{event.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-secondary-light text-sm font-medium transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface-1 border border-border rounded-xl p-6 sticky top-24 space-y-6">
                {/* Ticket / RSVP CTA */}
                {event.free ? (
                  <a
                    href={event.ticketUrl || '#'}
                    target={event.ticketUrl ? '_blank' : undefined}
                    rel={event.ticketUrl ? 'noopener noreferrer' : undefined}
                  >
                    <Button className="w-full" size="lg" variant="outline">
                      RSVP Free
                    </Button>
                  </a>
                ) : (
                  <div>
                    <p className="text-3xl font-bold text-secondary mb-4">{event.price}</p>
                    <a
                      href={event.ticketUrl || '#'}
                      target={event.ticketUrl ? '_blank' : undefined}
                      rel={event.ticketUrl ? 'noopener noreferrer' : undefined}
                    >
                      <Button className="w-full" size="lg">
                        Get Tickets
                      </Button>
                    </a>
                  </div>
                )}

                {/* Venue Mini Card */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-cream font-semibold text-sm">{event.venue}</p>
                      <p className="text-cream/50 text-sm">{event.address}</p>
                    </div>
                  </div>
                </div>

                {/* Hub Link */}
                {event.hub && (
                  <div className="border-t border-border pt-6">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">Part of</p>
                        <a
                          href={`https://${event.hub}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary-light text-sm font-medium transition-colors duration-300"
                        >
                          {event.hub}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="section-padding bg-surface-1">
          <div className="container-custom mx-auto">
            <h2 className="heading-secondary text-cream mb-8">
              More Events in{' '}
              <span className="text-gradient">{event.city}</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((related) => (
                <EventCard key={related.id} event={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
