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
    <div className="flex-1 text-center px-4 md:px-8 first:pl-0 last:pr-0">
      <div className="font-display text-5xl md:text-6xl font-black text-[#1a6b3a] leading-none mb-2">
        {stat.isText ? stat.textValue : `${stat.prefix ?? ''}${count}${stat.suffix}`}
      </div>
      <div className="w-8 h-0.5 bg-[#1a6b3a] mx-auto mb-3" />
      <div className="font-display font-bold text-gray-900 text-lg">{stat.label}</div>
      {stat.sublabel && (
        <div className="text-gray-400 text-sm mt-0.5">{stat.sublabel}</div>
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
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200 gap-8 sm:gap-0">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
