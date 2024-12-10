import { Hero } from '@/components/hero'
import { AboutMe } from '@/components/about-me'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
