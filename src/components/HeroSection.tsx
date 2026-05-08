import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: '85vh',
        background: 'linear-gradient(135deg, #1a6b3a 0%, #155c30 100%)',
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{ border: '60px solid rgba(255,255,255,0.06)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full"
        style={{ border: '50px solid rgba(255,255,255,0.06)' }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full"
        style={{ border: '30px solid rgba(255,255,255,0.04)' }}
      />

      {/* Red top accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#c0392b]" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c0392b] inline-block flex-shrink-0" />
            Fundada em 1972 · Belo Horizonte, MG
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Soluções completas
            <br />
            em higiene e limpeza
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.90)' }}
          >
            Mais de 53 anos oferecendo produtos de qualidade para sua casa,
            empresa e indústria
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-white text-[#1a6b3a] font-semibold px-8 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-100"
            >
              Ver Catálogo
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 hover:bg-white/20"
            >
              Fale Conosco
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
