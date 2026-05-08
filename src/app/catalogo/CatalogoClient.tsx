'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { produtos, categorias, categoriaBadge, type Categoria } from '@/data/produtos'

const categoriaIcones: Record<string, string> = {
  Todos: '📦',
  Automotivo: '🚗',
  Cozinha: '🍽️',
  Industrial: '🏭',
  'Limpeza e Conservação': '🧽',
  Lavanderia: '🧺',
  'Pós Obra': '🏗️',
  Químicos: '🧪',
  'Tratamento de Piso': '✨',
  Revenda: '🛒',
}

export default function CatalogoClient() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>('Todos')
  const [busca, setBusca] = useState('')

  const produtosFiltrados = useMemo(() => {
    const termo = busca.toLowerCase().trim()
    return produtos.filter((p) => {
      const matchCat = categoriaAtiva === 'Todos' || p.categoria === categoriaAtiva
      const matchSearch = !termo || p.nome.toLowerCase().includes(termo)
      return matchCat && matchSearch
    })
  }, [categoriaAtiva, busca])

  const contagemPorCategoria = useMemo(() => {
    const map: Record<string, number> = { Todos: produtos.length }
    produtos.forEach((p) => {
      map[p.categoria] = (map[p.categoria] ?? 0) + 1
    })
    return map
  }, [])

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      {/* Help banner */}
      <div className="border-b border-yellow-200 px-4 py-3" style={{ backgroundColor: '#fefce8' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm font-medium text-yellow-800">
            Precisa de ajuda para escolher? Fale com nosso especialista →
          </p>
          <a
            href="https://wa.me/5531934741533?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20escolher%20um%20produto."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-xs font-bold px-4 py-2 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#1a6b3a' }}
          >
            Chamar especialista
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-8">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
          </svg>
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar produto por nome..."
            className="w-full pl-12 pr-10 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent"
          />
          {busca && (
            <button onClick={() => setBusca('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Limpar">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category pills with icon + count */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-8">
          {categorias.map((cat) => {
            const active = categoriaAtiva === cat
            const count = contagemPorCategoria[cat] ?? 0
            return (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-display font-semibold transition-all duration-200 border ${
                  active
                    ? 'text-white border-[#1a6b3a] shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#1a6b3a] hover:text-[#1a6b3a]'
                }`}
                style={active ? { backgroundColor: '#1a6b3a' } : {}}
              >
                <span>{categoriaIcones[cat]}</span>
                <span>{cat}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-500 mb-6">
          {produtosFiltrados.length === 0
            ? 'Nenhum produto encontrado'
            : `${produtosFiltrados.length} produto${produtosFiltrados.length !== 1 ? 's' : ''} encontrado${produtosFiltrados.length !== 1 ? 's' : ''}`}
        </p>

        {/* Empty state */}
        {produtosFiltrados.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg mb-2">Nenhum produto encontrado para "{busca}"</p>
            <button
              onClick={() => { setBusca(''); setCategoriaAtiva('Todos') }}
              className="mt-3 text-sm font-semibold text-[#1a6b3a] hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Product grid */}
        {produtosFiltrados.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => {
              const badge = categoriaBadge[produto.categoria] ?? { bg: '#f3f4f6', color: '#374151' }
              const msg = encodeURIComponent(
                `Olá! Tenho interesse no produto ${produto.nome}. Gostaria de mais informações.`
              )
              const waUrl = `https://wa.me/5531934741533?text=${msg}`

              return (
                <div
                  key={produto.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#1a6b3a]/30 transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Icon area — clicks to product page */}
                  <Link href={`/catalogo/${produto.slug}`} className="block">
                    <div className="flex items-center justify-center h-28 text-5xl select-none"
                      style={{ backgroundColor: '#e8f5ee' }}>
                      <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                        {produto.icone}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className="text-xs font-display font-bold px-2.5 py-1 rounded-full w-fit mb-3"
                      style={{ backgroundColor: badge.bg, color: badge.color }}
                    >
                      {produto.categoria}
                    </span>
                    <h3 className="font-display font-black text-gray-900 text-base mb-2 leading-snug">
                      {produto.nome}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                      {produto.descricao}
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-white font-display font-bold py-2.5 px-4 rounded-xl text-sm transition-colors duration-200 hover:opacity-90"
                      style={{ backgroundColor: '#1a6b3a' }}
                    >
                      <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Solicitar Orçamento
                    </a>
                    <Link
                      href={`/catalogo/${produto.slug}`}
                      className="flex items-center justify-center gap-1 font-display font-semibold py-2 px-4 rounded-xl text-sm transition-colors duration-200 border mt-2"
                      style={{ borderColor: '#1a6b3a', color: '#1a6b3a' }}
                    >
                      Ver detalhes →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
