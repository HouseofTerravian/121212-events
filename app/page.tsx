import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import FeaturedEvents from '@/components/home/FeaturedEvents'
import CategoryGrid from '@/components/home/CategoryGrid'
import CityHubs from '@/components/home/CityHubs'
import NewsletterForm from '@/components/NewsletterForm'
import Button from '@/components/ui/Button'

const submitBenefits = [
  'Reach thousands of engaged community members',
  'Featured placement for standout events',
  'Cross-promotion across the 121212 ecosystem',
  'Free listing for community and nonprofit events',
  'Analytics dashboard to track engagement',
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Featured Events */}
      <FeaturedEvents />

      {/* Category Grid */}
      <CategoryGrid />

      {/* City Hubs */}
      <CityHubs />

      {/* Submit CTA */}
      <section className="section-padding bg-gradient-to-br from-surface-1 via-purple-dim/20 to-surface-1">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary text-cream mb-4">
                Got an Event{' '}
                <span className="text-gradient">Worth Sharing?</span>
              </h2>
              <p className="text-cream/70 text-lg mb-8">
                List your event on the largest curated Black cultural events platform
                in the 121212 network.
              </p>
              <ul className="space-y-4 mb-8">
                {submitBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-secondary" />
                    </div>
                    <span className="text-cream/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/submit">
                  <Button size="lg">
                    Submit Your Event
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-secondary/20 via-purple/20 to-crimson/20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-secondary/10 via-purple/10 to-crimson/10 flex items-center justify-center">
                  <span className="text-7xl">&#9733;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Stay in the <span className="text-gradient">Loop</span>
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-xl mx-auto">
            Get the best events delivered to your inbox every week. Never miss
            what matters.
          </p>
          <NewsletterForm />
          <p className="text-dim text-xs mt-4">
            Join 10,000+ subscribers across the 121212 network.
          </p>
        </div>
      </section>
    </main>
  )
}
