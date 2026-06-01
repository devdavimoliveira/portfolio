'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      id="sobre-mim"
      ref={ref}
      className="mx-4 my-10 max-w-6xl border-b border-green-600 min-[1152px]:mx-auto"
      initial={{ x: '-10%', opacity: 0 }}
      animate={{
        x: isInView ? '0%' : '-10%',
        opacity: isInView ? 1 : 0,
      }}
      transition={{ ease: 'easeOut' }}
    >
      <h2 className="mb-5 text-center text-3xl font-bold">Sobre mim</h2>
      <p className="mx-auto mb-10 w-full text-center text-lg md:w-[58%]">
        {`Desenvolvedor Web com experiência em React.js, Next.js, JavaScript,
        TypeScript, TailwindCSS, CSS-in-JS, entre outras tecnologias.
        Além de também possuir experiência no desenvolvimento Back-end com Fastify e NestJS.
        Formado em Sistemas de Informação.`}
      </p>
    </motion.section>
  )
}
