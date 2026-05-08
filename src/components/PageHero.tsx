interface PageHeroProps {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundColor: '#0d4a24',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,1 59,17 59,44 30,51 1,44 1,17' fill='none' stroke='white' stroke-width='0.6' opacity='0.08'/%3E%3C/svg%3E\")",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-[#c0392b]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg font-display font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
