'use client'

import Link from 'next/link'
import HeroDecoration from './HeroDecoration'
import { useState, useEffect } from 'react'

const hexSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,1 59,17 59,44 30,51 1,44 1,17' fill='none' stroke='white' stroke-width='0.6' opacity='0.06'/%3E%3C/svg%3E\")"

const gradient = 'linear-gradient(135deg, #0d4a24 0%, #1a6b3a 60%, #1e7d42 100%)'

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState<string | null>(null)

  useEffect(() => {
    const img = localStorage.getItem('hero-image')
    if (img) setHeroImage(img)
  }, [])

  return (
    <section
      className="relative overflow-hidden flex flex-col min-h-screen"
      style={{
        backgroundImage: heroImage
          ? `linear-gradient(rgba(13,74,36,0.78), rgba(13,74,36,0.78)), url(${heroImage})`
          : `${hexSvg}, ${gradient}`,
        backgroundSize: heroImage ? 'cover' : 'auto',
        backgroundPosition: heroImage ? 'center' : 'auto',
      }}
    >
      {/* Red top accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#c0392b]" />

      {/* Main content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-0 w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

            {/* ── Left column (60%) ── */}
            <div className="md:col-span-3">

              {/* Pulsing badge */}
              <div
                className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="text-white text-sm font-display font-semibold tracking-wide">
                  Desde 1972 · Belo Horizonte, MG
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-display font-black text-white leading-[1.05] tracking-tight mb-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
              >
                Coimbra: tradição
                <br />
                <span className="relative inline-block text-white">
                  que limpa de verdade
                  <span
                    className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full"
                    style={{ backgroundColor: '#c0392b' }}
                  />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-white text-base md:text-xl leading-relaxed mb-8 max-w-lg opacity-80">
                Desde 1972 fabricamos produtos de limpeza em BH. Qualidade que você já conhece,
                agora mais perto de você.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 font-display font-bold px-8 py-4 rounded-xl bg-white text-[#1a6b3a] transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 text-lg shadow-lg"
                >
                  Explorar Catálogo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/5531934741533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-display font-bold px-8 py-4 rounded-xl text-white border-2 border-white/50 hover:border-white transition-all duration-200 text-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['+ 50 produtos', 'Vigilância Sanitária', 'Entrega em BH'].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-white text-sm font-medium opacity-75"
                  >
                    <span className="text-[#c0392b] font-bold opacity-100">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right column (40%) — parallax decoration ── */}
            <div className="md:col-span-2 hidden md:flex items-center justify-center h-96">
              <HeroDecoration />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative pb-8 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
