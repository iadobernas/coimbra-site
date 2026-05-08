'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { produtos, type Produto } from '@/data/produtos'

export default function AdminDashboard() {
  const router = useRouter()
  const [authChecked, setAuthChecked] = useState(false)
  const [busca, setBusca] = useState('')

  // Hero image
  const [heroImage, setHeroImage] = useState<string | null>(null)
  const [heroPreview, setHeroPreview] = useState<string | null>(null)
  const heroInputRef = useRef<HTMLInputElement>(null)

  // Product images: slug → base64
  const [productImages, setProductImages] = useState<Record<string, string>>({})
  const [productPreviews, setProductPreviews] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!localStorage.getItem('admin-auth')) {
      router.replace('/admin')
      return
    }
    setAuthChecked(true)

    const hero = localStorage.getItem('hero-image')
    if (hero) setHeroImage(hero)

    const imgs: Record<string, string> = {}
    produtos.forEach((p) => {
      const img = localStorage.getItem(`produto-img-${p.slug}`)
      if (img) imgs[p.slug] = img
    })
    setProductImages(imgs)
  }, [router])

  function handleLogout() {
    localStorage.removeItem('admin-auth')
    router.push('/admin')
  }

  function handleHeroSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setHeroPreview(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  function handleHeroSave() {
    if (!heroPreview) return
    localStorage.setItem('hero-image', heroPreview)
    setHeroImage(heroPreview)
    setHeroPreview(null)
  }

  function handleHeroRemove() {
    localStorage.removeItem('hero-image')
    setHeroImage(null)
    setHeroPreview(null)
  }

  function handleProductSelect(slug: string, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) =>
      setProductPreviews((prev) => ({ ...prev, [slug]: ev.target?.result as string }))
    reader.readAsDataURL(file)
  }

  function handleProductSave(slug: string) {
    const preview = productPreviews[slug]
    if (!preview) return
    localStorage.setItem(`produto-img-${slug}`, preview)
    setProductImages((prev) => ({ ...prev, [slug]: preview }))
    setProductPreviews((prev) => {
      const next = { ...prev }
      delete next[slug]
      return next
    })
  }

  function handleProductRemove(slug: string) {
    localStorage.removeItem(`produto-img-${slug}`)
    setProductImages((prev) => {
      const next = { ...prev }
      delete next[slug]
      return next
    })
  }

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase().trim())
  )

  if (!authChecked) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin header */}
      <div className="px-4 py-4 shadow-sm" style={{ backgroundColor: '#0d4a24' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png.png"
              alt="Coimbra"
              width={120}
              height={40}
              style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <span className="text-white/80 text-sm font-display font-bold hidden sm:block">
              Painel Administrativo
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sair
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* ── Seção 1: Imagem principal ───────────────────────────────── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display font-black text-lg text-gray-900 mb-1">
            Imagem Principal do Site
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Substitui o fundo do hero na página inicial. Tamanho recomendado: 1920×1080px.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div
              className="w-full sm:w-64 h-40 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 border-2 border-dashed"
              style={{
                backgroundColor: '#0d4a24',
                borderColor: heroPreview || heroImage ? '#1a6b3a' : '#e5e7eb',
              }}
            >
              {heroPreview || heroImage ? (
                <img
                  src={heroPreview ?? heroImage!}
                  alt="Preview hero"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white/30 text-xs text-center px-4">
                  Sem imagem personalizada
                </span>
              )}
            </div>

            <div className="space-y-3">
              <input
                ref={heroInputRef}
                type="file"
                accept="image/*"
                onChange={handleHeroSelect}
                className="hidden"
              />
              <button
                onClick={() => heroInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors bg-[#1a6b3a] hover:bg-[#155c30]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Trocar Imagem
              </button>

              {heroPreview && (
                <div className="flex gap-2">
                  <button
                    onClick={handleHeroSave}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#1a6b3a] hover:bg-[#155c30] transition-colors"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => setHeroPreview(null)}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              )}

              {heroImage && !heroPreview && (
                <button
                  onClick={handleHeroRemove}
                  className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
                >
                  Remover imagem atual
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ── Seção 2: Imagens dos produtos ──────────────────────────── */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-display font-black text-lg text-gray-900 mb-1">
            Imagens dos Produtos
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            {produtos.length} produtos cadastrados.
          </p>

          <div className="relative max-w-sm mb-6">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
            </svg>
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar produto por nome..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {produtosFiltrados.map((produto) => (
              <ProductCard
                key={produto.slug}
                produto={produto}
                savedImage={productImages[produto.slug]}
                preview={productPreviews[produto.slug]}
                onSelect={(e) => handleProductSelect(produto.slug, e)}
                onSave={() => handleProductSave(produto.slug)}
                onCancel={() =>
                  setProductPreviews((prev) => {
                    const next = { ...prev }
                    delete next[produto.slug]
                    return next
                  })
                }
                onRemove={() => handleProductRemove(produto.slug)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function ProductCard({
  produto,
  savedImage,
  preview,
  onSelect,
  onSave,
  onCancel,
  onRemove,
}: {
  produto: Produto
  savedImage?: string
  preview?: string
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSave: () => void
  onCancel: () => void
  onRemove: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const displayImage = preview ?? savedImage

  return (
    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex flex-col">
      <div
        className="w-full aspect-square rounded-lg overflow-hidden flex items-center justify-center mb-2 text-3xl"
        style={{ backgroundColor: '#e8f5ee' }}
      >
        {displayImage ? (
          <img src={displayImage} alt={produto.nome} className="w-full h-full object-cover" />
        ) : (
          <span>{produto.icone}</span>
        )}
      </div>

      <p className="text-xs font-display font-bold text-gray-900 mb-0.5 leading-snug line-clamp-2" title={produto.nome}>
        {produto.nome}
      </p>
      <p className="text-xs text-gray-400 mb-3 truncate">{produto.categoria}</p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onSelect}
        className="hidden"
      />

      {preview ? (
        <div className="flex gap-1.5 mt-auto">
          <button
            onClick={onSave}
            className="flex-1 py-1.5 text-xs font-semibold text-white rounded-lg bg-[#1a6b3a] hover:bg-[#155c30] transition-colors"
          >
            Salvar
          </button>
          <button
            onClick={onCancel}
            className="flex-1 py-1.5 text-xs font-semibold text-gray-600 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
        </div>
      ) : (
        <div className="mt-auto space-y-1">
          <button
            onClick={() => inputRef.current?.click()}
            className="w-full py-1.5 text-xs font-semibold rounded-lg border transition-colors"
            style={{ borderColor: '#1a6b3a', color: '#1a6b3a' }}
          >
            {savedImage ? 'Trocar foto' : '+ Foto'}
          </button>
          {savedImage && (
            <button
              onClick={onRemove}
              className="w-full py-1 text-xs text-red-400 hover:text-red-600 transition-colors"
            >
              Remover
            </button>
          )}
        </div>
      )}
    </div>
  )
}
