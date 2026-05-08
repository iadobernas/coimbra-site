interface PageHeroProps {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative py-16" style={{ backgroundColor: '#1a6b3a' }}>
      <div className="absolute top-0 inset-x-0 h-1 bg-[#c0392b]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
