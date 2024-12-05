'use client'

import { useRef } from 'react'

import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

import { motion, useInView } from 'motion/react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      className="mx-auto max-w-6xl px-4"
      initial={{ x: '-10%', opacity: 0 }}
      animate={{
        x: isInView ? '0%' : '-10%',
        opacity: isInView ? 1 : 0,
      }}
      transition={{ ease: 'easeOut' }}
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Contato</h2>
      <ul className="flex flex-wrap justify-center gap-5">
        <li>
          <Link
            href="https://www.linkedin.com/in/devdavimoliveira/"
            target="_blank"
            className="flex w-[17.5rem] items-center gap-4 border-b-2 border-green-600 p-4 transition-colors duration-500 hover:bg-zinc-800"
          >
            <Linkedin size={36} className="text-green-600" />
            <div>
              <p className="font-bold">LinkedIn</p>
              <p className="text-sm text-gray-400">@devdavimoliveira</p>
            </div>
          </Link>
        </li>

        <li>
          <Link
            href="mailto:devdavimoliveira@gmail.com"
            target="_blank"
            className="flex w-[17.5rem] items-center gap-4 border-b-2 border-green-600 p-4 transition-colors duration-500 hover:bg-zinc-800"
          >
            <Mail size={36} className="text-green-600" />
            <div>
              <p className="font-bold">E-mail</p>
              <p className="text-sm text-gray-400">
                devdavimoliveira@gmail.com
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </motion.section>
  )
}
