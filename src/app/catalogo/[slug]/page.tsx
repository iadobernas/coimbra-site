import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { produtos, categoriaBadge } from '@/data/produtos'
import ProductActions from './ProductActions'

export async function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const produto = produtos.find((p) => p.slug === slug)
  if (!produto) return {}
  return {
    title: `${produto.nome} | Coimbra Produtos de Limpeza`,
    description: produto.finalidade,
  }
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const produto = produtos.find((p) => p.slug === slug)
  if (!produto) notFound()

  const badge = categoriaBadge[produto.categoria] ?? { bg: '#f3f4f6', color: '#374151' }

  const relacionados = produtos
    .filter((p) => p.categoria === produto.categoria && p.slug !== produto.slug)
    .slice(0, 3)

  return (
    <>
      {/* ── Breadcrumb hero ──────────────────────────────────────────── */}
      <section
        className="relative py-10 px-4 sm:px-6"
        style={{
          backgroundColor: '#0d4a24',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,1 59,17 59,44 30,51 1,44 1,17' fill='none' stroke='white' stroke-width='0.6' opacity='0.07'/%3E%3C/svg%3E\")",
        }}
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-[#c0392b]" />
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-3 flex-wrap" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-white transition-colors">Catálogo</Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-white transition-colors">{produto.categoria}</Link>
            <span>/</span>
            <span className="text-white">{produto.nome}</span>
          </nav>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white">{produto.nome}</h1>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left — image placeholder */}
            <div>
              <div
                className="w-full aspect-square max-w-md mx-auto rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: '#e8f5ee' }}
              >
                <span className="text-[8rem] leading-none select-none">{produto.icone}</span>
                <p className="text-gray-400 text-sm mt-4 font-medium">Foto em breve</p>
                {/* Category badge overlay */}
                <span
                  className="absolute top-4 left-4 text-xs font-display font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: badge.bg, color: badge.color }}
                >
                  {produto.categoria}
                </span>
              </div>
            </div>

            {/* Right — product info */}
            <div className="flex flex-col">
              <h2 className="font-display font-black text-3xl text-gray-900 mb-2">{produto.nome}</h2>

              {/* Price */}
              <p className="text-2xl font-bold mb-5" style={{ color: '#1a6b3a' }}>
                {produto.preco}
              </p>

              {/* Finalidade */}
              <div className="flex items-start gap-3 p-4 rounded-xl mb-5" style={{ backgroundColor: '#f0f7f3' }}>
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1a6b3a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 text-sm leading-relaxed">{produto.finalidade}</p>
              </div>

              {/* Diluição */}
              {produto.diluicao && (
                <div className="flex items-start gap-3 p-4 rounded-xl mb-5 border border-blue-100" style={{ backgroundColor: '#eff6ff' }}>
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <div>
                    <p className="text-blue-800 font-semibold text-xs uppercase tracking-wide mb-1">Diluição recomendada</p>
                    <p className="text-blue-700 text-sm">{produto.diluicao}</p>
                  </div>
                </div>
              )}

              {/* Actions (client component) */}
              <ProductActions produto={produto} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Detail sections ──────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-3">

          <DetailSection title="Descrição">
            <p className="text-gray-600 leading-relaxed">{produto.descricao}</p>
          </DetailSection>

          <DetailSection title="Benefícios">
            <ul className="space-y-2">
              {produto.beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold" style={{ backgroundColor: '#1a6b3a' }}>✓</span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Indicações de Uso">
            <ul className="space-y-2">
              {produto.indicacoes.map((ind) => (
                <li key={ind} className="flex items-center gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1a6b3a' }} />
                  {ind}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Modo de Usar">
            <p className="text-gray-600 leading-relaxed">{produto.modoDeUsar}</p>
          </DetailSection>

          <DetailSection title="Composição">
            <div className="flex flex-wrap gap-2">
              {produto.composicao.map((c) => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600">{c}</span>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="⚠ Precauções de Segurança">
            <div className="rounded-xl p-4" style={{ backgroundColor: '#fefce8' }}>
              <ul className="space-y-2">
                {produto.precaucoes.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-yellow-800">
                    <span className="flex-shrink-0 mt-0.5">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </DetailSection>

          <DetailSection title="Embalagens Disponíveis">
            <div className="flex flex-wrap gap-2">
              {produto.embalagens.map((e) => (
                <span
                  key={e}
                  className="px-4 py-2 rounded-lg border-2 font-medium text-sm"
                  style={{ borderColor: '#1a6b3a', color: '#1a6b3a' }}
                >
                  {e}
                </span>
              ))}
            </div>
          </DetailSection>

          {produto.principioAtivo && (
            <DetailSection title="Princípio Ativo">
              <p className="text-gray-700">{produto.principioAtivo}</p>
            </DetailSection>
          )}
        </div>
      </section>

      {/* ── Related products ─────────────────────────────────────────── */}
      {relacionados.length > 0 && (
        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-display font-black text-2xl text-gray-900 mb-8">
              Outros produtos de{' '}
              <span style={{ color: '#1a6b3a' }}>{produto.categoria}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relacionados.map((rel) => {
                const relBadge = categoriaBadge[rel.categoria] ?? { bg: '#f3f4f6', color: '#374151' }
                return (
                  <Link
                    key={rel.slug}
                    href={`/catalogo/${rel.slug}`}
                    className="group bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1a6b3a]/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
                  >
                    <div className="h-32 flex items-center justify-center text-4xl" style={{ backgroundColor: '#e8f5ee' }}>
                      {rel.icone}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full w-fit mb-2"
                        style={{ backgroundColor: relBadge.bg, color: relBadge.color }}
                      >
                        {rel.categoria}
                      </span>
                      <h4 className="font-display font-black text-gray-900 text-base mb-1 leading-snug">{rel.nome}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed flex-1">{rel.descricao}</p>
                      <p className="font-bold mt-3 text-sm" style={{ color: '#1a6b3a' }}>
                        Ver detalhes →
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" open={title === 'Descrição' || title === 'Benefícios'}>
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-display font-bold text-gray-900 select-none list-none hover:bg-gray-50 transition-colors">
        {title}
        <svg
          className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6">{children}</div>
    </details>
  )
}
