import { Roboto, Open_Sans as OpenSans } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const openSans = OpenSans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export { roboto, openSans }
