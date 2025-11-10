'use client'

import css from '@/assets/css.svg'
import html from '@/assets/html.svg'
import javascript from '@/assets/javascript.svg'
import typescript from '@/assets/typescript.svg'
import reactJs from '@/assets/react.svg'
import nextJs from '@/assets/nextjs.svg'
import tailwind from '@/assets/tailwindcss.svg'
import styledComponents from '@/assets/styled-components.png'
import sass from '@/assets/sass.svg'
import node from '@/assets/nodejs.svg'
import prisma from '@/assets/prisma.svg'
import tanstack from '@/assets/tanstack.png'
import vite from '@/assets/vite.svg'

import { motion, useInView } from 'motion/react'

import { SkillCard } from './skill-card'
import { useRef } from 'react'

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      id="conhecimentos"
      ref={ref}
      className="mx-auto my-10 max-w-6xl px-4"
      initial={{ x: '-10%', opacity: 0 }}
      animate={{
        x: isInView ? '0%' : '-10%',
        opacity: isInView ? 1 : 0,
      }}
      transition={{ ease: 'easeOut' }}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Conhecimentos</h2>
      <div className="grid grid-cols-[repeat(auto-fill,120px)] justify-center gap-10">
        <SkillCard name="HTML5" source={html} alt="HTML" />
        <SkillCard name="CSS3" source={css} alt="CSS" />
        <SkillCard name="JavaScript" source={javascript} alt="Javascript" />
        <SkillCard name="TypeScript" source={typescript} alt="Typescript" />
        <SkillCard name="React.js" source={reactJs} alt="React.js" />
        <SkillCard name="Next.js" source={nextJs} alt="Next.js" />
        <SkillCard name="Vite" source={vite} alt="Vite" />
        <SkillCard
          name="Tanstack Query"
          source={tanstack}
          alt="Tanstack Query"
        />
        <SkillCard
          name="Tanstack Router"
          source={tanstack}
          alt="Tanstack Router"
        />
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
    </motion.section>
  )
}
