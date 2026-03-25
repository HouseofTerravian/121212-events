'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Gift,
  Search,
  Link as LinkIcon,
  CalendarCheck,
  Globe,
  CheckCircle,
  Send,
} from 'lucide-react'
import { categories } from '@/data/categories'
import Button from '@/components/ui/Button'
import Input, { Textarea } from '@/components/ui/Input'
import Select from '@/components/ui/Select'

interface SubmitFormData {
  eventName: string
  city: string
  category: string
  venueName: string
  venueAddress: string
  eventDate: string
  startTime: string
  ticketPrice: string
  ticketUrl: string
  description: string
  organizerName: string
  organizerEmail: string
  instagram: string
  notes: string
}

const cityOptions = [
  { value: 'atlanta-ga', label: 'Atlanta, GA' },
  { value: 'chicago-il', label: 'Chicago, IL' },
  { value: 'houston-tx', label: 'Houston, TX' },
  { value: 'dc', label: 'Washington, D.C.' },
  { value: 'miami-fl', label: 'Miami, FL' },
  { value: 'neworleans-la', label: 'New Orleans, LA' },
  { value: 'detroit-mi', label: 'Detroit, MI' },
  { value: 'other', label: 'Other' },
]

const categoryOptions = categories.map((cat) => ({
  value: cat.slug,
  label: `${cat.emoji} ${cat.label}`,
}))

const benefits = [
  {
    icon: Gift,
    title: 'Free to List',
    description: 'No fees. No catch. Just culture.',
  },
  {
    icon: Search,
    title: 'Curated Review',
    description: 'Every event is manually reviewed for quality and relevance.',
  },
  {
    icon: LinkIcon,
    title: 'Cross-Linked to City Hubs',
    description: 'Your event appears across the 121212 network.',
  },
  {
    icon: CalendarCheck,
    title: '48-Hour Review',
    description: 'We review and list within two business days.',
  },
  {
    icon: Globe,
    title: 'Growing Network',
    description: '7 cities and counting across the diaspora.',
  },
]

export default function SubmitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubmitFormData>()

  const onSubmit = async (data: SubmitFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Event submission:', data)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
              List Your Event
            </span>
            <h1 className="heading-primary text-cream mt-4 mb-6">
              Submit to <span className="text-gradient">121212.events</span>
            </h1>
            <p className="text-cream/70 text-xl leading-relaxed">
              Know an event the culture needs to know about? Tell us and we will
              get it listed.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column: Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-cream font-serif text-2xl font-semibold mb-8">
                Why List With Us
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <benefit.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-cream font-semibold mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-cream/60 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface-1 border border-border rounded-xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-cream font-serif text-2xl font-semibold mb-3">
                      Event Submitted!
                    </h3>
                    <p className="text-cream/70 text-lg">
                      We&apos;ll review within 48 hours. You&apos;ll receive a
                      confirmation email once it&apos;s live.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Event Name */}
                    <Input
                      label="Event Name"
                      placeholder="e.g. Afrobeats Summer Fest"
                      error={errors.eventName?.message}
                      {...register('eventName', {
                        required: 'Event name is required',
                      })}
                    />

                    {/* City + Category */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Select
                        label="City"
                        placeholder="Select a city"
                        options={cityOptions}
                        error={errors.city?.message}
                        {...register('city', {
                          required: 'City is required',
                        })}
                      />
                      <Select
                        label="Category"
                        placeholder="Select a category"
                        options={categoryOptions}
                        error={errors.category?.message}
                        {...register('category', {
                          required: 'Category is required',
                        })}
                      />
                    </div>

                    {/* Venue Name + Address */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Venue Name"
                        placeholder="e.g. Centennial Olympic Park"
                        error={errors.venueName?.message}
                        {...register('venueName', {
                          required: 'Venue name is required',
                        })}
                      />
                      <Input
                        label="Venue Address"
                        placeholder="Full street address"
                        error={errors.venueAddress?.message}
                        {...register('venueAddress')}
                      />
                    </div>

                    {/* Date + Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Event Date"
                        type="date"
                        error={errors.eventDate?.message}
                        {...register('eventDate', {
                          required: 'Event date is required',
                        })}
                      />
                      <Input
                        label="Start Time"
                        type="time"
                        error={errors.startTime?.message}
                        {...register('startTime')}
                      />
                    </div>

                    {/* Ticket Price + URL */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Ticket Price"
                        placeholder="e.g. $45 or Free"
                        error={errors.ticketPrice?.message}
                        {...register('ticketPrice')}
                      />
                      <Input
                        label="Ticket / RSVP Link"
                        type="url"
                        placeholder="https://..."
                        error={errors.ticketUrl?.message}
                        {...register('ticketUrl')}
                      />
                    </div>

                    {/* Description */}
                    <Textarea
                      label="Event Description"
                      placeholder="Tell us about the event, what to expect, and why people should attend..."
                      error={errors.description?.message}
                      {...register('description', {
                        required: 'Description is required',
                        minLength: {
                          value: 50,
                          message:
                            'Description must be at least 50 characters',
                        },
                      })}
                    />

                    {/* Organizer Name + Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Organizer Name"
                        placeholder="Your name or organization"
                        error={errors.organizerName?.message}
                        {...register('organizerName', {
                          required: 'Organizer name is required',
                        })}
                      />
                      <Input
                        label="Organizer Email"
                        type="email"
                        placeholder="you@example.com"
                        error={errors.organizerEmail?.message}
                        {...register('organizerEmail', {
                          required: 'Email is required',
                          pattern: {
                            value:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                    </div>

                    {/* Instagram */}
                    <Input
                      label="Instagram Handle (optional)"
                      placeholder="@yourhandle"
                      {...register('instagram')}
                    />

                    {/* Additional Notes */}
                    <Textarea
                      label="Additional Notes (optional)"
                      placeholder="Anything else we should know..."
                      {...register('notes')}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Event'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    {/* Fine Print */}
                    <p className="text-dim text-xs text-center mt-4">
                      By submitting, you confirm this event is real, accurate,
                      and appropriate for the 121212 community.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
