'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { AnimatePresence, motion } from 'motion/react'

type OverlayMenuProps = {
  isOpen: boolean
  onOpenChange: (state: boolean) => void
}

export function OverlayMenu({ isOpen, onOpenChange }: OverlayMenuProps) {
  useEffect(() => {
    const body = document.querySelector('body')

    if (body) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth

      if (isOpen) {
        body.style.paddingRight = `${scrollbarWidth}px`
        body.style.overflow = 'hidden'
      }

      return () => {
        body.style.paddingRight = '0px'
        document.body.style.overflow = 'visible'
      }
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute h-screen w-full bg-zinc-900/50 backdrop-blur-md"
          onClick={() => onOpenChange(false)}
        >
          <div className="mx-auto mt-20 max-w-6xl">
            <ul className="flex flex-col items-center gap-16">
              <li>
                <Link
                  href="#inicio"
                  className="text-3xl font-bold transition-colors duration-500 hover:text-green-600"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre-mim"
                  className="text-3xl font-bold transition-colors duration-500 hover:text-green-600"
                >
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link
                  href="#conhecimentos"
                  className="text-3xl font-bold transition-colors duration-500 hover:text-green-600"
                >
                  Conhecimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="text-3xl font-bold transition-colors duration-500 hover:text-green-600"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-3xl font-bold transition-colors duration-500 hover:text-green-600"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
