'use client'

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

import code from '@/assets/code.svg'
import Image from 'next/image'
import { Button } from './button'

const paragraph = {
  welcome: 'Olá, meu nome é',
  developer: 'Davi Machado Oliveira.',
  role: 'Desenvolvedor Web',
}

export function Hero() {
  const [welcome, setWelcome] = useState('')
  const [developer, setDeveloper] = useState('')
  const [role, setRole] = useState('')

  const typewriter = useCallback(
    async (
      text: string,
      setText: Dispatch<SetStateAction<string>>,
    ): Promise<void> => {
      for (let i = 0; i <= text.length; i++) {
        setText(text.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    },
    [],
  )

  useEffect(() => {
    async function runTypewriter() {
      await typewriter(paragraph.welcome, setWelcome)
      await typewriter(paragraph.developer, setDeveloper)
      await typewriter(paragraph.role, setRole)
    }

    runTypewriter()
  }, [typewriter])

  function handleCVDownload() {
    const link = document.createElement('a')
    link.href = '/curriculo_davi_machado_oliveira.pdf'
    link.download = 'davi-machado-oliveira-curriculo'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="inicio"
      className="mx-auto my-10 flex max-w-6xl flex-col items-center justify-center gap-5 px-4 sm:flex-row sm:justify-between"
    >
      <div className="flex size-[11.25rem] shrink-0 items-center justify-center rounded-full bg-zinc-800 sm:order-1 sm:size-[13.75rem]">
        <div className="relative size-[6.25rem] sm:size-[7.5rem]">
          <Image
            src={code}
            alt="code"
            priority
            fill
            className="size-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="w-full sm:w-auto">
        <p className="text-center sm:text-left">
          <span className="text-3xl sm:text-4xl">{welcome}</span>
          <br />
          <span className="text-3xl font-bold text-green-600 sm:text-4xl">
            {developer}
          </span>
          <br />
          <span className="text-base sm:text-xl">{role}</span>
        </p>

        <Button
          type="button"
          variant="outlined"
          className="mx-auto mt-4 block px-10 sm:mx-0"
          onClick={handleCVDownload}
        >
          Currículo
        </Button>
      </div>
    </section>
  )
}
