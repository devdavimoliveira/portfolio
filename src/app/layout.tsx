import type { Metadata } from 'next'

import '@/styles/globals.css'

import { roboto } from '@/styles/fonts'

import { Header } from '@/components/_layout/header'
import { Footer } from '@/components/_layout/footer'

import { WithContext, Person } from 'schema-dts'

export const metadata: Metadata = {
  title: 'Portfólio | Davi Machado Oliveira',
  description:
    'Meu nome é Davi, desenvolvo sites com interfaces modernas com foco em desempenho, e que entregam uma boa experiência para o usuário.',
}

const jsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Davi Machado Oliveira',
  jobTitle: 'Desenvolvedor Web',
  url: process.env.WEBSITE_URL,
  sameAs: ['https://www.linkedin.com/in/devdavimoliveira'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
