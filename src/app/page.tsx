import HeroSection from '@/components/HeroSection'

const categories = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Uso Doméstico',
    description: 'Produtos eficientes e seguros para a limpeza do seu lar com praticidade e economia.',
    borderColor: '#1a6b3a',
    iconColor: '#1a6b3a',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Uso Profissional',
    description: 'Linha completa para escritórios, restaurantes, hotéis e estabelecimentos comerciais.',
    borderColor: '#1a6b3a',
    iconColor: '#1a6b3a',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Uso Industrial',
    description: 'Soluções de alta performance para ambientes industriais e de grande porte.',
    borderColor: '#c0392b',
    iconColor: '#c0392b',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Revenda',
    description: 'Condições especiais para distribuidores e revendedores com estoque e preço competitivo.',
    borderColor: '#c0392b',
    iconColor: '#c0392b',
  },
]

const differentials = [
  {
    stat: '+53',
    label: 'Anos de Experiência',
    description: 'Fundada em 1972, somos referência consolidada em higiene e limpeza em Minas Gerais.',
  },
  {
    stat: '+50',
    label: 'Produtos no Catálogo',
    description: 'Linha completa cobrindo todos os segmentos: doméstico, profissional e industrial.',
  },
  {
    stat: '100%',
    label: 'Certificado pela Vigilância Sanitária',
    description: 'Todos os produtos passam por rigoroso controle de qualidade e possuem certificação oficial.',
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Soluções para cada necessidade
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Do uso doméstico ao industrial, temos o produto certo para você
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href="/catalogo"
                className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                style={{ borderLeft: `4px solid ${cat.borderColor}` }}
              >
                <div
                  className="mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: cat.iconColor }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Coimbra?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Mais de meio século de tradição e qualidade a serviço da sua limpeza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((diff) => (
              <div
                key={diff.label}
                className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-5xl font-bold mb-3" style={{ color: '#1a6b3a' }}>
                  {diff.stat}
                </div>
                <div className="w-10 h-0.5 mx-auto mb-3" style={{ backgroundColor: '#1a6b3a' }} />
                <h3 className="font-bold text-gray-900 text-lg mb-3">{diff.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
