interface LegalLayoutProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export default function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 md:px-8 bg-surface-1">
        <div className="container-custom mx-auto text-center">
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
            Legal
          </span>
          <h1 className="heading-primary text-cream mt-4 mb-4">
            {title}
          </h1>
          <p className="text-cream/60 text-base">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="legal-content space-y-10">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-cream font-serif text-2xl font-semibold mb-4">
        {title}
      </h2>
      <div className="text-cream/70 text-base leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  )
}
