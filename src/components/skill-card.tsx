import { ComponentProps } from 'react'
import Image from 'next/image'

import { twMerge } from 'tailwind-merge'

type SkillCardProps = ComponentProps<'div'> & {
  name: string
  source: string
  alt: string
}

export function SkillCard({
  name,
  source,
  alt,
  className,
  ...props
}: SkillCardProps) {
  return (
    <div
      className={twMerge(
        'flex size-[130px] flex-col items-center justify-center gap-5 border border-zinc-700 bg-zinc-800 transition-all duration-500 hover:border-green-600',
        className,
      )}
      {...props}
    >
      <p className="font-bold text-green-600">{name}</p>
      <Image src={source} alt={alt} className="size-10" />
    </div>
  )
}
