import { ComponentProps } from 'react'
import Image, { StaticImageData } from 'next/image'

import { cn } from '@/utils/cn'

type ProjectCardProps = ComponentProps<'div'> & {
  data: {
    name: string
    image: string | StaticImageData
  }
}

export default function ProjectCard({
  data,
  className,
  ...rest
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'relative h-[17.5rem] bg-zinc-800 transition-transform duration-500 hover:scale-105',
        className,
      )}
      {...rest}
    >
      <Image src={data.image} alt={data.name} fill className="object-cover" />
      <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2">
        <p className="text-center text-2xl font-bold text-white">{data.name}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  )
}
