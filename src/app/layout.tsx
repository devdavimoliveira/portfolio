import type { Metadata } from 'next'

import '@/styles/globals.css'

import { roboto } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'Portfólio | Davi Machado Oliveira',
  description:
    'Meu nome é Davi, desenvolvo sites com interfaces modernas com foco em desempenho, e que entregam uma boa experiência para o usuário.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  )
}
