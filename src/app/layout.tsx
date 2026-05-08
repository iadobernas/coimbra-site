import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coimbra | Tudo para Limpeza - Produtos de Higiene desde 1972',
  description:
    'Indústria mineira especializada em produtos de higiene e limpeza desde 1972. Mais de 50 produtos para uso doméstico, profissional e industrial. Belo Horizonte, MG.',
  keywords:
    'produtos de limpeza, higiene, detergente, desinfetante, BH, Belo Horizonte, limpeza industrial, limpeza profissional, Coimbra',
  openGraph: {
    title: 'Coimbra | Tudo para Limpeza',
    description: 'Mais de 53 anos fabricando produtos de higiene e limpeza em Belo Horizonte.',
    url: 'https://coimbra-site-production.up.railway.app',
    siteName: 'Coimbra Produtos de Limpeza',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
    >
      <body className="flex flex-col min-h-full bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
