'use client'

import { useState, useEffect } from 'react'

export default function HeroDecoration() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24
      const y = (e.clientY / window.innerHeight - 0.5) * 24
      setOffset({ x, y })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const ease = (factor: number) => ({
    transform: `translate(${offset.x * factor}px, ${offset.y * factor}px)`,
    transition: 'transform 0.15s ease-out',
  })

  return (
    <div className="relative flex items-center justify-center w-full h-80 md:h-full select-none">
      {/* Outermost ring */}
      <div
        className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-white/10"
        style={ease(0.15)}
      />
      {/* Second ring */}
      <div
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/15"
        style={ease(0.3)}
      />
      {/* Third ring */}
      <div
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-white/20"
        style={ease(0.5)}
      />
      {/* Filled disc */}
      <div
        className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full bg-white/10"
        style={ease(0.7)}
      />
      {/* Inner accent disc */}
      <div
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/15"
        style={ease(0.9)}
      />
      {/* Center content */}
      <div
        className="relative z-10 text-center text-white"
        style={ease(1.1)}
      >
        <div className="font-display text-7xl md:text-8xl font-black leading-none tracking-tighter">
          53
        </div>
        <div className="text-base md:text-lg font-medium tracking-[0.2em] uppercase mt-1 text-white/80">
          anos
        </div>
      </div>

      {/* Decorative dots */}
      <div
        className="absolute top-8 right-12 w-3 h-3 rounded-full bg-[#c0392b]"
        style={ease(1.4)}
      />
      <div
        className="absolute bottom-12 left-8 w-2 h-2 rounded-full bg-white/40"
        style={ease(1.6)}
      />
      <div
        className="absolute top-1/2 right-4 w-1.5 h-1.5 rounded-full bg-white/30"
        style={ease(1.2)}
      />
    </div>
  )
}
