import Link from 'next/link'

const categorias = [
  {
    icone: '🏠',
    titulo: 'Uso Doméstico',
    descricao: 'Produtos seguros e eficientes para limpeza diária do seu lar. Qualidade que cabe no orçamento.',
    cor: '#1a6b3a',
    span: 2,
  },
  {
    icone: '💼',
    titulo: 'Uso Profissional',
    descricao: 'Linha completa para escritórios, restaurantes e comércio em geral.',
    cor: '#c0392b',
    span: 1,
  },
  {
    icone: '🏭',
    titulo: 'Uso Industrial',
    descricao: 'Solventes, desengraxantes e desincrustantes de alta performance industrial.',
    cor: '#1a6b3a',
    span: 1,
  },
  {
    icone: '🛒',
    titulo: 'Revenda',
    descricao: 'Condições especiais para distribuidores e revendedores. Estoque completo e preço competitivo.',
    cor: '#c0392b',
    span: 2,
  },
]

export default function CategoriasSection() {
  return (
    <section className="bg-[#f9fafb] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c0392b] font-display font-bold text-sm tracking-widest uppercase mb-3">
            Categorias
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900">
            Nossos{' '}
            <span style={{ color: '#1a6b3a' }}>Produtos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <Link
              href="/catalogo"
              key={cat.titulo}
              className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col border-t-4 ${
                cat.span === 2 ? 'md:col-span-2' : ''
              }`}
              style={{ borderTopColor: cat.cor }}
            >
              <div className="p-8 flex flex-col flex-1">
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: cat.cor + '15' }}
                >
                  {cat.icone}
                </div>

                <h3 className="font-display font-black text-xl text-gray-900 mb-3">{cat.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{cat.descricao}</p>

                {/* Footer link */}
                <div
                  className="flex items-center gap-1 font-semibold text-sm mt-6 transition-gap duration-200"
                  style={{ color: cat.cor }}
                >
                  Ver produtos
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
