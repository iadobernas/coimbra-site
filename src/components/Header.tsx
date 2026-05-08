'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <div className="hidden md:block h-10 text-white text-xs" style={{ backgroundColor: '#0d4a24' }}>
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <span className="font-medium tracking-wide text-white/70">
            Seg a Sex &nbsp;·&nbsp; 08h às 18h
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+5531934741533" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (31) 93474-1533
            </a>
            <a href="mailto:vendas@coimbra.ind.br" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              vendas@coimbra.ind.br
            </a>
          </div>
        </div>
      </div>

      {/* ── Main header ─────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md backdrop-blur-sm' : 'border-b border-gray-100'
        }`}
        style={{ height: 72 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png.png"
              alt="Coimbra Produtos de Limpeza"
              width={180}
              height={56}
              style={{ height: '52px', width: 'auto' }}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative group py-1 font-display font-semibold text-sm tracking-wide transition-colors duration-200 ${
                    active ? 'text-[#1a6b3a]' : 'text-gray-600 hover:text-[#1a6b3a]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#1a6b3a] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5531934741533"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-display font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#1a6b3a' }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 md:hidden transition-all duration-300"
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className="fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 md:hidden shadow-2xl transition-transform duration-300 ease-in-out flex flex-col"
        style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100" style={{ backgroundColor: '#0d4a24' }}>
          <Image
            src="/logo.png.png"
            alt="Coimbra"
            width={120}
            height={40}
            style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)' }}
            className="object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Fechar menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-4 rounded-xl font-display font-bold text-lg transition-all duration-200"
                style={{
                  color: active ? '#1a6b3a' : '#374151',
                  backgroundColor: active ? '#e8f5ee' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-4 pb-6 space-y-3">
          <a
            href="https://wa.me/5531934741533"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl w-full"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chamar no WhatsApp
          </a>
          <div className="text-center text-xs text-gray-400">
            Seg a Sex · 08h às 18h
          </div>
        </div>
      </div>
    </>
  )
}
