import css from '@/assets/css3.svg'
import html from '@/assets/html5.svg'
import javascript from '@/assets/javascript.svg'
import typescript from '@/assets/typescript.svg'
import reactJs from '@/assets/react-js.svg'
import nextJs from '@/assets/next-js.svg'
import reactQuery from '@/assets/react-query.svg'
import tailwind from '@/assets/tailwind-css.svg'
import styledComponents from '@/assets/styled-components.svg'
import sass from '@/assets/sass.svg'
import node from '@/assets/node.svg'
import prisma from '@/assets/prisma.svg'

import { SkillCard } from './skill-card'

export function Skills() {
  return (
    <section className="mx-auto my-10 max-w-6xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold">Conhecimentos</h2>
      <div className="grid grid-cols-[repeat(auto-fill,120px)] justify-center gap-10">
        <SkillCard name="HTML5" source={html} alt="HTML" />
        <SkillCard name="CSS3" source={css} alt="CSS" />
        <SkillCard name="JavaScript" source={javascript} alt="Javascript" />
        <SkillCard name="TypeScript" source={typescript} alt="Typescript" />
        <SkillCard name="React.js" source={reactJs} alt="React.js" />
        <SkillCard name="Next.js" source={nextJs} alt="Next.js" />
        <SkillCard name="React Query" source={reactQuery} alt="React Query" />
        <SkillCard name="Tailwind CSS" source={tailwind} alt="TailwindCSS" />
        <SkillCard
          name="CSS-in-JS"
          source={styledComponents}
          alt="Styled-Components"
        />
        <SkillCard name="SASS" source={sass} alt="Sass" />
        <SkillCard name="Node.js" source={node} alt="Node.js" />
        <SkillCard name="Prisma" source={prisma} alt="Prisma" />
      </div>
    </section>
  )
}
