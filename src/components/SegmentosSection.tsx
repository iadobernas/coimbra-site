'use client'

import Link from 'next/link'

const segmentos = [
  {
    bg: '#f0f7f3',
    iconoBg: '#1a6b3a',
    icone: '🏠',
    tag: 'Residencial',
    titulo: 'Para a sua casa',
    descricao:
      'Produtos seguros e eficientes formulados para o uso diário na sua casa. Limpadores multiuso, desinfetantes, detergentes e muito mais — tudo com qualidade que sua família merece.',
    items: ['Desinfetantes', 'Detergentes', 'Limpadores multiuso', 'Perfumadores'],
    imgSide: 'right',
  },
  {
    bg: '#ffffff',
    iconoBg: '#c0392b',
    icone: '🏢',
    tag: 'Comercial',
    titulo: 'Para empresas',
    descricao:
      'Soluções profissionais para escritórios, restaurantes, hotéis e estabelecimentos comerciais. Performance industrial com custo acessível para manter seu negócio sempre impecável.',
    items: ['Desengordurantes', 'Limpadores industriais', 'Higiene profissional', 'Descartáveis'],
    imgSide: 'left',
  },
  {
    bg: '#f0f7f3',
    iconoBg: '#1a6b3a',
    icone: '🏭',
    tag: 'Industrial',
    titulo: 'Para indústrias',
    descricao:
      'Formulações de alta performance para os mais exigentes ambientes industriais. Solventes, desengraxantes e desincrustantes certificados pela Vigilância Sanitária.',
    items: ['Desengraxantes dielétricos', 'Solventes industriais', 'Desincrustantes', 'Químicos especiais'],
    imgSide: 'right',
  },
]

export default function SegmentosSection() {
  return (
    <section className="overflow-hidden">
      {/* Section header */}
      <div className="bg-white py-10 md:py-16 px-4 sm:px-6 text-center border-b border-gray-100">
        <p className="text-[#c0392b] font-display font-bold text-sm tracking-widest uppercase mb-3">
          Segmentos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-black text-gray-900">
          Uma solução para{' '}
          <span style={{ color: '#1a6b3a' }}>cada necessidade</span>
        </h2>
      </div>

      {segmentos.map((seg) => {
        const textCol = (
          <div className="flex flex-col justify-center py-10 md:py-16 px-6 md:px-16">
            {/* Mobile icon (small, centred above text) */}
            <div className="md:hidden flex justify-center mb-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md"
                style={{ backgroundColor: seg.iconoBg }}
              >
                {seg.icone}
              </div>
            </div>

            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit"
              style={{ backgroundColor: seg.iconoBg + '20', color: seg.iconoBg }}
            >
              {seg.tag}
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-black text-gray-900 mb-3">
              {seg.titulo}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">{seg.descricao}</p>
            <ul className="space-y-1.5 mb-6">
              {seg.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: seg.iconoBg }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 font-semibold border-2 px-5 py-2.5 rounded-xl w-fit transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base"
              style={{ borderColor: seg.iconoBg, color: seg.iconoBg }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = seg.iconoBg
                el.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'transparent'
                el.style.color = seg.iconoBg
              }}
            >
              Ver produtos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )

        // Desktop only: the large icon panel
        const visualCol = (
          <div
            className="hidden md:flex items-center justify-center"
            style={{ backgroundColor: seg.iconoBg + '15' }}
          >
            <div
              className="w-48 h-48 md:w-56 md:h-56 rounded-3xl flex items-center justify-center shadow-2xl"
              style={{ backgroundColor: seg.iconoBg }}
            >
              <span className="text-8xl">{seg.icone}</span>
            </div>
          </div>
        )

        const isLeft = seg.imgSide === 'left'

        return (
          <div
            key={seg.titulo}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ backgroundColor: seg.bg }}
          >
            {isLeft ? <>{visualCol}{textCol}</> : <>{textCol}{visualCol}</>}
          </div>
        )
      })}
    </section>
  )
}
