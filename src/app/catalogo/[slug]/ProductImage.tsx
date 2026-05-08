'use client'

import { useState, useEffect } from 'react'

interface Props {
  slug: string
  icone: string
  categoria: string
  badge: { bg: string; color: string }
}

export default function ProductImage({ slug, icone, categoria, badge }: Props) {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    const img = localStorage.getItem(`produto-img-${slug}`)
    if (img) setImage(img)
  }, [slug])

  return (
    <div
      className="w-full aspect-square max-w-md mx-auto rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#e8f5ee' }}
    >
      {image ? (
        <img src={image} alt={icone} className="w-full h-full object-cover" />
      ) : (
        <>
          <span className="text-[8rem] leading-none select-none">{icone}</span>
          <p className="text-gray-400 text-sm mt-4 font-medium">Foto em breve</p>
        </>
      )}
      <span
        className="absolute top-4 left-4 text-xs font-display font-bold px-3 py-1.5 rounded-full"
        style={{ backgroundColor: badge.bg, color: badge.color }}
      >
        {categoria}
      </span>
    </div>
  )
}
