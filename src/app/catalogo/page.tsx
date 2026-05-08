import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CatalogoClient from './CatalogoClient'

export const metadata: Metadata = {
  title: 'Catálogo de Produtos | Coimbra',
  description:
    'Mais de 50 produtos de higiene e limpeza para uso doméstico, profissional e industrial. Desinfetantes, detergentes, desengraxantes e muito mais.',
}

export default function CatalogoPage() {
  return (
    <>
      <PageHero
        title="Catálogo de Produtos"
        subtitle="Mais de 50 produtos para todos os segmentos"
      />
      <section className="bg-[#f9fafb] min-h-screen">
        <CatalogoClient />
      </section>
    </>
  )
}
