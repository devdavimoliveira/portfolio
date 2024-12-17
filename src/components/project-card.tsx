'use client'

import { ComponentProps, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/utils/cn'

import { X } from 'lucide-react'

import { Button } from './button'
import * as Dialog from '@radix-ui/react-dialog'

import { Project } from '@/data/projects'

type ProjectCardProps = ComponentProps<'div'> & {
  data: Project
}

export default function ProjectCard({
  data,
  className,
  ...rest
}: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <div
          className={cn(
            'relative h-[17.5rem] cursor-pointer bg-zinc-800 transition-transform duration-500 hover:scale-105',
            className,
          )}
          {...rest}
        >
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
          <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2">
            <p className="text-center text-2xl font-bold text-white">
              {data.name}
            </p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      </Dialog.Trigger>
      <AnimatePresence>
        {dialogOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-md" />
            <Dialog.Content
              asChild
              className="fixed left-1/2 top-1/2 z-50 grid w-[90vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 grid-cols-1 gap-4 rounded-md bg-zinc-800 p-4 md:h-80 md:grid-cols-2 lg:h-[25rem]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-60 w-full sm:h-[17.5rem] md:h-full">
                  <Image src={data.image} alt={data.name} fill />
                </div>

                <div className="flex flex-col">
                  <Dialog.Title className="text-3xl font-bold">
                    {data.name}
                  </Dialog.Title>
                  <Dialog.Description className="h-40 overflow-y-auto text-lg text-gray-500">
                    {data.description}
                  </Dialog.Description>
                  <Button className="mt-4 w-full md:mt-auto">
                    <Link href={data.link}>Acessar</Link>
                  </Button>
                </div>

                <Dialog.Close asChild>
                  <Button className="absolute right-2 top-2 rounded-full border-none p-0 text-zinc-800">
                    <X size={24} />
                  </Button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
