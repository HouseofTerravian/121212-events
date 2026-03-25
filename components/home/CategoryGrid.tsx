import Link from 'next/link'
import { categories, getEventCountByCategory } from '@/data/categories'
import Card from '@/components/ui/Card'

export default function CategoryGrid() {
  return (
    <section className="section-padding bg-background-dark">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
            By Category
          </span>
          <h2 className="heading-secondary text-cream mt-4">
            What Are You <span className="text-gradient">Into?</span>
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category) => {
            const count = getEventCountByCategory(category.slug)

            return (
              <Link
                key={category.slug}
                href={`/events?cat=${category.slug}`}
                className="block group"
              >
                <Card className="p-6 text-center h-full group-hover:border-secondary/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-surface-3 to-surface-2 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl leading-none">{category.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-cream text-sm mb-1">
                    {category.label}
                  </h3>
                  <p className="text-dim text-sm">
                    {count} {count === 1 ? 'event' : 'events'}
                  </p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
