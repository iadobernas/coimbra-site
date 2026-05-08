import PageHero from '@/components/PageHero'

const timeline = [
  { ano: '1972', titulo: 'Fundação', desc: 'A Coimbra nasce em Belo Horizonte com o propósito de fabricar produtos de limpeza de qualidade para o mercado mineiro.' },
  { ano: '1980s', titulo: 'Expansão', desc: 'Ampliação do portfólio e crescimento da presença no mercado comercial e industrial de Minas Gerais.' },
  { ano: '2000s', titulo: 'Modernização', desc: 'Investimento em processos industriais modernos, certificações sanitárias e desenvolvimento de novas linhas de produtos.' },
  { ano: '2024+', titulo: '+53 Anos', desc: 'Referência consolidada em higiene e limpeza, com mais de 50 produtos e atendimento a todos os segmentos.' },
]

const mvv = [
  {
    cor: '#1a6b3a',
    titulo: 'Missão',
    texto: 'Fabricar e comercializar produtos com qualidade, voltado para custo x benefício e excelência no atendimento aos nossos clientes.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    cor: '#c0392b',
    titulo: 'Visão',
    texto: 'Ser referência nacional em produtos de higiene e limpeza, reconhecida pela qualidade, inovação e compromisso com nossos clientes.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    cor: '#1a6b3a',
    titulo: 'Valores',
    texto: 'Ética, responsabilidade, respeito e honestidade como pilares de todas as nossas relações e decisões.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

const numeros = [
  { stat: '+53', label: 'Anos de Tradição', desc: 'Fundada em 1972 em Belo Horizonte, MG.' },
  { stat: '+50', label: 'Produtos', desc: 'Linha completa para todos os segmentos.' },
  { stat: '100%', label: 'Certificado', desc: 'Vigilância Sanitária em todos os produtos.' },
]

export default function QuemSomosPage() {
  return (
    <>
      <PageHero title="Quem Somos" subtitle="Mais de 53 anos de tradição em higiene e limpeza" />

      {/* ── Nossa História ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 rounded" style={{ backgroundColor: '#1a6b3a' }} />
            <h2 className="font-display text-3xl font-black text-gray-900">Nossa História</h2>
          </div>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              A <strong className="text-gray-900">Coimbra Produtos de Limpeza</strong> é uma indústria
              mineira fundada em <strong className="text-gray-900">1972</strong>, especializada na
              fabricação e comercialização de produtos de higiene e limpeza. Nascida em Belo Horizonte,
              a empresa cresceu com sólidos alicerces de qualidade e confiança.
            </p>
            <p>
              Com sede no bairro Estoril, atende clientes do uso doméstico ao industrial, com mais de
              50 produtos certificados pela Vigilância Sanitária. Nossa filosofia combina qualidade com
              custo-benefício — garantindo máximo desempenho ao melhor preço.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[#f9fafb] overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-black text-gray-900">Nossa Trajetória</h2>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            {/* Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5" style={{ backgroundColor: '#1a6b3a' }} />

            <div className="grid grid-cols-4 gap-4 relative">
              {timeline.map((item, i) => (
                <div key={item.ano} className="flex flex-col items-center text-center">
                  {/* Dot */}
                  <div
                    className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center z-10 mb-4 shadow-md"
                    style={{ backgroundColor: i % 2 === 0 ? '#1a6b3a' : '#c0392b' }}
                  >
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                  <div className="font-display font-black text-2xl mb-1" style={{ color: '#1a6b3a' }}>
                    {item.ano}
                  </div>
                  <div className="font-display font-bold text-gray-900 mb-2">{item.titulo}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-6">
            {timeline.map((item, i) => (
              <div key={item.ano} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? '#1a6b3a' : '#c0392b' }}
                  >
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 mt-2" style={{ backgroundColor: '#e5e7eb' }} />
                  )}
                </div>
                <div className="pb-6">
                  <div className="font-display font-black text-xl" style={{ color: '#1a6b3a' }}>{item.ano}</div>
                  <div className="font-display font-bold text-gray-900 mb-1">{item.titulo}</div>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Missão, Visão e Valores ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Os princípios que guiam cada decisão e cada produto que fabricamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mvv.map((item) => (
              <div
                key={item.titulo}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4"
                style={{ borderTopColor: item.cor }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: item.cor + '15', color: item.cor }}>
                  {item.icon}
                </div>
                <h3 className="font-display font-black text-xl text-gray-900 mb-3">{item.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nossos Números ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Nossos Números
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {numeros.map((n) => (
              <div key={n.label}
                className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="font-display text-5xl font-black mb-2" style={{ color: '#1a6b3a' }}>{n.stat}</div>
                <div className="w-10 h-0.5 mx-auto mb-3" style={{ backgroundColor: '#1a6b3a' }} />
                <h3 className="font-display font-black text-gray-900 text-lg mb-2">{n.label}</h3>
                <p className="text-gray-500 text-sm">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificações ──────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display font-black text-sm tracking-widest uppercase text-gray-400 mb-2">
            Certificações & Qualidade
          </p>
          <p className="font-display font-black text-xl md:text-2xl tracking-wider" style={{ color: '#1a6b3a' }}>
            ANVISA · VIGILÂNCIA SANITÁRIA · QUALIDADE GARANTIDA · DESDE 1972
          </p>
        </div>
      </section>
    </>
  )
}
