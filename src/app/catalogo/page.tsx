import PageHero from '@/components/PageHero'
import CatalogoClient from './CatalogoClient'

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
