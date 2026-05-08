'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className={`group fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full border-2 border-[#1a6b3a] bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#1a6b3a] ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <svg
        className="w-5 h-5 text-[#1a6b3a] group-hover:text-white transition-colors duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
