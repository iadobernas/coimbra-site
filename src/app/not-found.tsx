import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center bg-white" style={{ minHeight: '60vh' }}>
      {/* 404 number */}
      <div
        className="font-display font-black leading-none mb-6 select-none"
        style={{
          fontSize: 'clamp(6rem, 20vw, 14rem)',
          color: '#1a6b3a',
          opacity: 0.12,
          position: 'absolute',
          pointerEvents: 'none',
        }}
      >
        404
      </div>

      {/* Icon */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10"
        style={{ backgroundColor: '#e8f5ee' }}
      >
        <svg className="w-10 h-10" style={{ color: '#1a6b3a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Text */}
      <div className="relative z-10 max-w-lg">
        <p
          className="font-display font-black text-6xl md:text-8xl mb-4"
          style={{ color: '#1a6b3a' }}
        >
          404
        </p>
        <h1 className="font-display font-black text-2xl md:text-3xl text-gray-900 mb-3">
          Página não encontrada
        </h1>
        <p className="text-gray-500 text-lg mb-10">
          A página que você procura não existe ou foi movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-display font-bold px-8 py-4 rounded-xl text-white text-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: '#1a6b3a' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Voltar para o Início
          </Link>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 font-display font-bold px-8 py-4 rounded-xl border-2 text-lg transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{ borderColor: '#1a6b3a', color: '#1a6b3a' }}
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  )
}
