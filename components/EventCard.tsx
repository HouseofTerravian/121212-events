import Link from 'next/link'
import { MapPin, Calendar } from 'lucide-react'
import { Event } from '@/data/events'
import { getCategoryBySlug } from '@/data/categories'
import Card, { CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const category = getCategoryBySlug(event.catSlug)

  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <Card className="flex flex-col h-full group-hover:border-secondary/60 group-hover:shadow-lg group-hover:shadow-secondary/10 transition-all duration-300">
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-surface-3 to-surface-1 flex items-center justify-center flex-shrink-0">
              <span className="text-5xl leading-none">{event.emoji}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-end">
              {event.featured && (
                <span className="bg-secondary/90 text-primary-dark text-xs font-bold px-2 py-0.5 rounded">
                  Featured
                </span>
              )}
              {category && (
                <span className="bg-purple/20 text-purple-light text-xs font-medium px-2 py-0.5 rounded">
                  {category.label}
                </span>
              )}
              {event.free && (
                <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-0.5 rounded">
                  Free
                </span>
              )}
            </div>
          </div>

          <h3 className="font-serif text-lg font-semibold text-cream group-hover:text-secondary transition-colors duration-300 mb-2">
            {event.name}
          </h3>

          <div className="flex items-center gap-1.5 text-dim text-sm mb-3">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">
              {event.venue} &middot; {event.city}, {event.state}
            </span>
          </div>

          <p className="text-cream/70 text-sm line-clamp-2 flex-1">
            {event.description}
          </p>
        </div>

        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-dim text-sm">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-3">
            {event.free ? (
              <>
                <span className="text-green-400 text-sm font-semibold">Free</span>
                <Button variant="outline" size="sm">
                  RSVP Free
                </Button>
              </>
            ) : (
              <>
                <span className="text-secondary text-sm font-semibold">
                  {event.price}
                </span>
                <Button size="sm">Get Tickets</Button>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
