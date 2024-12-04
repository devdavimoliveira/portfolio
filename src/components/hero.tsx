'use client'

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

import developerAvatar from '@/assets/me.jpg'
import Image from 'next/image'
import { Button } from './button'

const paragraph = {
  welcome: 'Olá, meu nome é',
  developer: 'Davi Machado Oliveira.',
  role: 'Desenvolvedor Frontend',
}

export function Hero() {
  const [welcome, setWelcome] = useState('')
  const [developer, setDeveloper] = useState('')
  const [role, setRole] = useState('')

  const typewriter = useCallback(
    async (
      text: string,
      callback: Dispatch<SetStateAction<string>>,
      i = 0,
    ): Promise<void> => {
      if (i < text.length) {
        callback(text.slice(0, i + 1))
        await new Promise((resolve) => setTimeout(resolve, 100))
        await typewriter(text, callback, i + 1)
      }
    },
    [],
  )

  useEffect(() => {
    typewriter(paragraph.welcome, setWelcome)
      .then(() => typewriter(paragraph.developer, setDeveloper))
      .then(() => typewriter(paragraph.role, setRole))
  }, [typewriter])

  return (
    <section className="mx-auto my-10 flex max-w-6xl flex-col items-center justify-center gap-5 px-4 sm:flex-row sm:justify-between">
      <div className="size-[12.5rem] shrink-0 rounded-full bg-zinc-800 p-2 sm:order-1 sm:size-[17.5rem]">
        <Image
          src={developerAvatar}
          alt="avatar"
          priority
          className="size-full rounded-full object-cover"
        />
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

        <Button className="mx-auto mt-4 block px-10 sm:mx-0">
          <a
            href="/curriculo_davi_machado_oliveira.pdf"
            download="davi-machado-oliveira-curriculo"
            className="flex h-full items-center justify-center"
          >
            Currículo
          </a>
        </Button>
      </div>
    </section>
  )
}
