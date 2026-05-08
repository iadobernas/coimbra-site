const hexPattern =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,1 59,17 59,44 30,51 1,44 1,17' fill='none' stroke='white' stroke-width='0.6' opacity='0.12'/%3E%3C/svg%3E\")"

const diferenciais = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    titulo: 'Qualidade Certificada',
    texto: 'Todos os nossos produtos são certificados pela Vigilância Sanitária e passam por rigoroso controle de qualidade em cada etapa da fabricação.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: 'Mais de 53 Anos',
    texto: 'Fundada em 1972, somos referência em Minas Gerais há mais de meio século. Experiência e tradição que se traduzem em confiança a cada produto.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: 'Atendimento Especializado',
    texto: 'Nossa equipe está pronta para indicar a solução ideal para cada necessidade — do uso doméstico ao industrial, com agilidade e expertise técnica.',
  },
]

export default function PorQueSection() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-28"
      style={{ backgroundColor: '#0d4a24', backgroundImage: hexPattern }}
    >
      {/* Red top accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#c0392b]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <p className="text-[#c0392b] font-display font-bold text-sm tracking-widest uppercase mb-3">
            Nossos Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-3">
            Por que escolher a Coimbra?
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto hidden sm:block">
            Mais de meio século fabricando produtos de qualidade para quem exige o melhor
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-14">
          {diferenciais.map((d) => (
            <div
              key={d.titulo}
              className="rounded-2xl p-5 md:p-8 border md:backdrop-blur-sm md:transition-all md:duration-300 md:hover:-translate-y-1"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.15)',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                {d.icon}
              </div>
              <h3 className="font-display font-black text-xl text-white mb-3">{d.titulo}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{d.texto}</p>
            </div>
          ))}
        </div>

        {/* Certification strip */}
        <div
          className="rounded-2xl px-8 py-5 text-center border"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <p className="font-display font-black text-xs md:text-sm tracking-widest md:tracking-[0.3em] uppercase text-white/50">
            ANVISA · VIGILÂNCIA SANITÁRIA · QUALIDADE GARANTIDA · DESDE 1972
          </p>
        </div>
      </div>
    </section>
  )
}
