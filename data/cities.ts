export interface City {
  slug: string
  label: string
  state: string
  emoji: string
}

export const cities: City[] = [
  { slug: 'atlanta', label: 'Atlanta', state: 'GA', emoji: '\uD83C\uDFD9' },
  { slug: 'chicago', label: 'Chicago', state: 'IL', emoji: '\uD83C\uDF2C' },
  { slug: 'houston', label: 'Houston', state: 'TX', emoji: '\uD83E\uDD20' },
  { slug: 'dc', label: 'Washington D.C.', state: 'DC', emoji: '\uD83C\uDFDB' },
  { slug: 'miami', label: 'Miami', state: 'FL', emoji: '\uD83C\uDF34' },
  { slug: 'neworleans', label: 'New Orleans', state: 'LA', emoji: '\uD83C\uDFBA' },
  { slug: 'detroit', label: 'Detroit', state: 'MI', emoji: '\uD83C\uDFB5' },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug)
}
