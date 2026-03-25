import { events } from '@/data/events'

export interface Category {
  slug: string
  label: string
  emoji: string
}

export const categories: Category[] = [
  { slug: 'music', label: 'Music', emoji: '\uD83C\uDFB5' },
  { slug: 'business', label: 'Business', emoji: '\uD83D\uDCBC' },
  { slug: 'culture', label: 'Culture', emoji: '\u270A' },
  { slug: 'art', label: 'Art', emoji: '\uD83C\uDFA8' },
  { slug: 'tech', label: 'Tech', emoji: '\uD83D\uDCBB' },
  { slug: 'food', label: 'Food', emoji: '\uD83C\uDF7D' },
  { slug: 'fashion', label: 'Fashion', emoji: '\uD83D\uDC57' },
  { slug: 'wellness', label: 'Wellness', emoji: '\u2728' },
  { slug: 'comedy', label: 'Comedy', emoji: '\uD83C\uDFA4' },
  { slug: 'film', label: 'Film', emoji: '\uD83C\uDFAC' },
  { slug: 'education', label: 'Education', emoji: '\uD83D\uDCDA' },
  { slug: 'community', label: 'Community', emoji: '\uD83C\uDFD8' },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug)
}

export function getEventCountByCategory(catSlug: string): number {
  return events.filter((event) => event.catSlug === catSlug).length
}
