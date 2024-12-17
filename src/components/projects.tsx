'use client'

import { useRef } from 'react'

import { motion, useInView } from 'motion/react'

import ProjectCard from './project-card'

import { projects } from '@/data/projects'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      className="mx-auto my-10 max-w-6xl px-4"
      initial={{ x: '-10%', opacity: 0 }}
      animate={{
        x: isInView ? '0%' : '-10%',
        opacity: isInView ? 1 : 0,
      }}
      transition={{ ease: 'easeOut' }}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Projetos</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </motion.section>
  )
}
