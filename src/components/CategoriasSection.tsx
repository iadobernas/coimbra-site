import Link from 'next/link'

const HomeIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const IndustrialIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
)

const CartIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const categorias = [
  {
    icone: <HomeIcon />,
    titulo: 'Uso Doméstico',
    descricao: 'Produtos seguros e eficientes para limpeza diária do seu lar. Qualidade que cabe no orçamento.',
    cor: '#1a6b3a',
    span: 2,
  },
  {
    icone: <BriefcaseIcon />,
    titulo: 'Uso Profissional',
    descricao: 'Linha completa para escritórios, restaurantes e comércio em geral.',
    cor: '#c0392b',
    span: 1,
  },
  {
    icone: <IndustrialIcon />,
    titulo: 'Uso Industrial',
    descricao: 'Solventes, desengraxantes e desincrustantes de alta performance industrial.',
    cor: '#1a6b3a',
    span: 1,
  },
  {
    icone: <CartIcon />,
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
              className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col border-t-4 cursor-pointer ${
                cat.span === 2 ? 'sm:col-span-2 md:col-span-2' : ''
              }`}
              style={{ borderTopColor: cat.cor }}
            >
              <div className="p-5 md:p-8 flex flex-col flex-1">
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: cat.cor + '15', color: cat.cor }}
                >
                  {cat.icone}
                </div>

                <h3 className="font-display font-black text-xl text-gray-900 mb-3">{cat.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{cat.descricao}</p>

                {/* Footer link */}
                <div
                  className="inline-flex items-center gap-1.5 font-semibold text-sm mt-6 border px-3 py-1.5 rounded-lg w-fit transition-colors duration-200"
                  style={{ borderColor: cat.cor + '40', color: cat.cor }}
                >
                  Acessar categoria
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
