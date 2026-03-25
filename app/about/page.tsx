import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
            About This Platform
          </span>
          <h1 className="heading-primary text-cream mt-4 mb-6 max-w-4xl mx-auto">
            Why <span className="text-gradient">121212.events</span> Exists
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Because Black culture deserves a dedicated, curated platform that
            treats every gathering, festival, and meetup with the respect and
            visibility it has earned.
          </p>
        </div>
      </section>

      {/* Lead Paragraph */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-cream/80 leading-relaxed mb-16">
              121212.events is the curated events arm of the 121212 ecosystem
              &mdash; a network of platforms built to serve, celebrate, and
              circulate within the Black community. We exist because too many
              incredible events go unnoticed, buried in algorithmic feeds or
              scattered across a dozen different platforms. We built one place
              where the culture can find what matters.
            </p>

            {/* What We List */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                What We <span className="text-gradient">List</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                We curate events across every category that matters to the
                community: live music festivals and intimate jazz nights, tech
                conferences and coding bootcamps, business expos and pitch
                competitions, art exhibitions and gallery walks, food festivals
                and restaurant weeks, film screenings and documentary premieres,
                comedy showcases and day parties, wellness retreats and yoga
                festivals, fashion shows and sneaker conventions, HBCU sporting
                events, educational workshops, and community celebrations.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                If it brings the community together, elevates Black culture, or
                creates opportunity for Black people, it belongs on this
                platform.
              </p>
            </div>

            {/* How It Works */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Every event on 121212.events is manually reviewed by our team
                before it goes live. We do not use algorithms to determine what
                gets listed. We do not accept paid placements or sponsored
                listings. If an event meets our quality and relevance standards,
                it gets featured &mdash; period.
              </p>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                Submitting an event is free and takes less than five minutes.
                Once submitted, our team reviews it within 48 hours. If
                approved, the event goes live on the platform and is
                cross-linked across the 121212 network, including relevant city
                hubs.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                We believe in merit-based curation. The best events rise to the
                top because they deserve to, not because someone paid for the
                privilege.
              </p>
            </div>

            {/* Cities We Cover */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                Cities We <span className="text-gradient">Cover</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                We currently list events across seven cities with strong Black
                cultural scenes: Atlanta, Chicago, Houston, Washington D.C.,
                Miami, New Orleans, and Detroit. Atlanta and Chicago are our most
                active hubs with dedicated city pages on the 121212 community
                platform.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                We are expanding. As the community grows and more organizers
                submit events, we will open additional city hubs across the
                country and eventually across the diaspora. If your city is not
                listed yet, submit your events anyway &mdash; demand drives
                expansion.
              </p>
            </div>

            {/* The 121212 Ecosystem */}
            <div className="mb-14">
              <h2 className="heading-secondary text-cream mb-6">
                The 121212 <span className="text-gradient">Ecosystem</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed mb-4">
                121212.events is one node in a larger network designed to serve
                the Black community across culture, commerce, and connection.
                Events listed here are cross-linked with city hubs on
                121212.community, reviewed on 121212.reviews, and connected to
                the broader 121212 marketplace.
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                The ecosystem is built on a simple premise: when Black dollars,
                attention, and community circulate within Black-owned platforms,
                everyone benefits. Every event you attend through this platform
                strengthens that circle.
              </p>
            </div>

            {/* Submit an Event */}
            <div>
              <h2 className="heading-secondary text-cream mb-6">
                Submit an <span className="text-gradient">Event</span>
              </h2>
              <p className="text-cream/70 text-base leading-relaxed">
                If you are an event organizer, a community leader, or just
                someone who knows about a gathering the culture needs to hear
                about, we want to hear from you. Submitting is free, review is
                fast, and your event gets visibility across the entire 121212
                network. Help us build the most comprehensive directory of Black
                cultural events in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-secondary text-cream mb-4">
            Ready to List Your <span className="text-gradient">Event</span>?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Free to submit. Reviewed in 48 hours. Seen across the network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/submit">
              <Button size="lg">
                Submit an Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="outline" size="lg">
                Browse Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
