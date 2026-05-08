'use client'

import { useState, useEffect, useRef } from 'react'

interface Stat {
  prefix?: string
  value: number
  suffix: string
  label: string
  sublabel?: string
  isText?: boolean
  textValue?: string
}

const stats: Stat[] = [
  { prefix: '+', value: 53, suffix: '', label: 'Anos de Tradição', sublabel: 'Fundada em 1972' },
  { prefix: '+', value: 50, suffix: '', label: 'Produtos', sublabel: 'No catálogo completo' },
  { value: 100, suffix: '%', label: 'Certificado', sublabel: 'Vigilância Sanitária' },
  { value: 0, suffix: '', label: 'BH · MG', sublabel: 'Belo Horizonte', isText: true, textValue: 'BH' },
]

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started || target === 0) return
    let frame = 0
    const totalFrames = Math.round(duration / 16)
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (frame >= totalFrames) {
        setCount(target)
        clearInterval(timer)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return count
}

function StatCard({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.isText ? 0 : stat.value, 1800, started)
  return (
    <div className="text-center py-2 md:py-0 md:px-8">
      <div className="font-display text-4xl md:text-6xl font-black leading-none mb-2" style={{ color: '#1a6b3a' }}>
        {stat.isText ? stat.textValue : `${stat.prefix ?? ''}${count}${stat.suffix}`}
      </div>
      <div className="w-8 h-0.5 mx-auto mb-2" style={{ backgroundColor: '#1a6b3a' }} />
      <div className="font-display font-bold text-gray-900 text-base md:text-lg">{stat.label}</div>
      {stat.sublabel && (
        <div className="text-gray-400 text-xs md:text-sm mt-0.5">{stat.sublabel}</div>
      )}
    </div>
  )
}

export default function StatsSection() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-white py-10 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Mobile: 2x2 grid | Desktop: 4 in a row with dividers */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
        <div className="hidden md:flex items-center divide-x divide-gray-200">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1">
              <StatCard stat={stat} started={started} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
