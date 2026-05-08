import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import SegmentosSection from '@/components/SegmentosSection'
import CategoriasSection from '@/components/CategoriasSection'
import PorQueSection from '@/components/PorQueSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="py-3 px-4 text-center" style={{ backgroundColor: '#0d4a24' }}>
        <p className="text-xs tracking-widest uppercase font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Atendemos Belo Horizonte e região &nbsp;·&nbsp; Mais de 53 anos no mercado &nbsp;·&nbsp; Frete para todo o Brasil
        </p>
      </div>
      <StatsSection />
      <SegmentosSection />
      <CategoriasSection />
      <PorQueSection />
      <CTASection />
    </>
  )
}
