import PageHero from '@/components/PageHero'

const mvv = [
  {
    title: 'Missão',
    text: 'Fabricar e comercializar produtos com qualidade, voltado para custo x benefício e excelência no atendimento aos nossos clientes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Visão',
    text: 'Ser referência nacional em produtos de higiene e limpeza, reconhecida pela qualidade, inovação e compromisso com nossos clientes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Valores',
    text: 'Ética, responsabilidade, respeito e honestidade como pilares de todas as nossas relações e decisões.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
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

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        title="Quem Somos"
        subtitle="Mais de 53 anos de tradição em higiene e limpeza"
      />

      {/* Nossa História */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 rounded" style={{ backgroundColor: '#1a6b3a' }} />
            <h2 className="text-3xl font-bold text-gray-900">Nossa História</h2>
          </div>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              A <strong className="text-gray-900">Coimbra Produtos de Limpeza</strong> é uma indústria
              mineira fundada em <strong className="text-gray-900">1972</strong>, há mais de 53 anos
              especializada na fabricação e comercialização de produtos de higiene e limpeza. Nascida em
              Belo Horizonte, a empresa cresceu com sólidos alicerces de qualidade e confiança,
              tornando-se referência no setor em Minas Gerais.
            </p>
            <p>
              Com sede no bairro Estoril, em Belo Horizonte, a Coimbra atende a uma ampla gama de
              clientes — do uso doméstico ao industrial —, oferecendo soluções eficientes para diferentes
              necessidades de limpeza. Nosso portfólio conta com mais de 50 produtos, todos desenvolvidos
              com rigoroso controle de qualidade e certificados pela Vigilância Sanitária.
            </p>
            <p>
              Ao longo de décadas, mantivemos o compromisso de combinar qualidade com custo-benefício,
              garantindo que cada produto entregue o máximo de desempenho ao melhor preço. Essa filosofia
              nos permitiu conquistar a fidelidade de clientes domésticos, profissionais e industriais
              em todo o estado.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-4 sm:px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Os princípios que guiam cada decisão e cada produto que fabricamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mvv.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4"
                style={{ borderTopColor: '#1a6b3a' }}
              >
                <div className="mb-4" style={{ color: '#1a6b3a' }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Números */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Números
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Décadas de experiência refletidas em resultados concretos
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

      {/* Nossa Equipe */}
      <section className="py-20 px-4 sm:px-6 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 rounded" style={{ backgroundColor: '#1a6b3a' }} />
            <h2 className="text-3xl font-bold text-gray-900">Nossa Equipe</h2>
          </div>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Nossa equipe é composta por profissionais qualificados e comprometidos com a qualidade em
              cada etapa do processo — da formulação dos produtos ao atendimento ao cliente. Valorizamos
              o conhecimento técnico aliado ao calor humano do atendimento mineiro.
            </p>
            <p>
              Com décadas de experiência acumulada, nosso time garante que cada produto saia da fábrica
              dentro dos mais rigorosos padrões de qualidade, segurança e eficácia, sempre de olho nas
              necessidades reais dos nossos clientes.
            </p>
            <p>
              Acreditamos que uma empresa é feita pelas pessoas que a constroem. Por isso, investimos
              continuamente no desenvolvimento das nossas equipes, criando um ambiente de trabalho pautado
              nos nossos valores: ética, responsabilidade, respeito e honestidade.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
