import { Hero } from '@/components/hero'
import { AboutMe } from '@/components/about-me'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Contact />
    </main>
  )
}
