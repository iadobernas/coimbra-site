---
name: next-component-coimbra
description: Criação e edição de componentes React/Next.js para o projeto Coimbra. Use esta skill SEMPRE que o usuário pedir para criar um novo componente, seção, página ou editar um componente existente no site da Coimbra. Garante que os componentes sigam os padrões do projeto: TypeScript, Tailwind, cores da marca, mobile-first e uso correto de 'use client'.
---

# Criação de Componentes — Projeto Coimbra

## Checklist Obrigatório

Antes de criar qualquer componente, verifique:

- [ ] O componente usa interatividade? (eventos, estado, refs) → adicionar `'use client'` na primeira linha
- [ ] As cores usam os valores oficiais da marca?
- [ ] O layout é mobile-first?
- [ ] Tem tipagem TypeScript correta?
- [ ] Links externos têm `target="_blank" rel="noopener noreferrer"`?

## Template Base — Componente Interativo

```tsx
'use client'

import { useState } from 'react'

interface Props {
  // defina as props aqui
}

export default function NomeComponente({ }: Props) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* conteúdo */}
      </div>
    </section>
  )
}
```

## Template Base — Componente Estático (Server Component)

```tsx
export default function NomeComponente() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* conteúdo */}
      </div>
    </section>
  )
}
```

## Cores — Classes Tailwind Customizadas

Como as cores da Coimbra são customizadas, use sempre valores diretos:

```tsx
// Verde escuro principal
className="bg-[#1a6b3a] text-white"

// Verde muito escuro (seções de destaque)
className="bg-[#0d4a24] text-white"

// Verde claro (fundos alternativos)
className="bg-[#f0f7f3]"

// Vermelho (detalhes e destaques)
className="text-[#c0392b] border-[#c0392b]"
```

## Padrões de Layout

### Container padrão
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Grid responsivo
```tsx
// 1 coluna mobile → 2 tablet → 3 desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// 1 coluna mobile → 2 desktop
className="grid grid-cols-1 md:grid-cols-2 gap-8"
```

### Card padrão
```tsx
<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 hover:-translate-y-2 p-6">
```

### Botão primário (verde)
```tsx
<button className="bg-[#1a6b3a] text-white px-8 py-3 rounded-lg 
                   font-semibold hover:bg-[#0d4a24] transition-all 
                   duration-300 cursor-pointer">
  Texto do Botão
</button>
```

### Botão secundário (outline)
```tsx
<button className="border-2 border-[#1a6b3a] text-[#1a6b3a] px-8 py-3 
                   rounded-lg font-semibold hover:bg-[#1a6b3a] 
                   hover:text-white transition-all duration-300 cursor-pointer">
  Texto do Botão
</button>
```

### Título de seção padrão
```tsx
<div className="text-center mb-12">
  <span className="text-[#c0392b] font-semibold text-sm uppercase tracking-wider">
    Label da Seção
  </span>
  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
    Título da <span className="text-[#1a6b3a]">Seção</span>
  </h2>
  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
    Subtítulo descritivo
  </p>
</div>
```

## Animações com Intersection Observer

Para animações ao scroll (sem bibliotecas externas):

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'

export default function ComponenteAnimado() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* conteúdo */}
    </div>
  )
}
```

⚠️ **Importante:** No mobile, NUNCA use animações com delay — aplique `opacity-100 translate-y-0` diretamente em telas menores que md:

```tsx
className={`transition-all duration-700 md:${
  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}
```

## Botão WhatsApp

```tsx
<a
  href="https://wa.me/5531934741533?text=Olá! Gostaria de mais informações."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 
             rounded-lg font-semibold hover:bg-[#1ea855] transition-all duration-300"
>
  WhatsApp
</a>
```
