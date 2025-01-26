import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'

type ElementAs = 'button' | 'link'

type ButtonProps<T extends ElementAs> = {
  as?: T
  variant?: 'contained' | 'outlined'
} & (T extends 'link'
  ? ComponentPropsWithoutRef<typeof Link>
  : ComponentPropsWithoutRef<'button'>)

export function Button<T extends ElementAs = 'button'>({
  as = 'button' as T,
  variant = 'contained',
  className,
  ...props
}: ButtonProps<T>) {
  if (as === 'link') {
    return (
      <Link
        className={cn(
          'rounded-md border border-transparent bg-green-600 px-4 py-2 text-center text-xl font-bold text-gray-200 transition-all duration-500 hover:bg-green-500',
          {
            'border-green-600 bg-transparent text-green-600 hover:bg-green-600 hover:text-gray-200':
              variant === 'outlined',
          },
          className,
        )}
        {...(props as ComponentPropsWithoutRef<typeof Link>)}
      />
    )
  }

  return (
    <button
      className={cn(
        'rounded-md border border-transparent bg-green-600 px-4 py-2 text-xl font-bold text-gray-200 transition-all duration-500 hover:bg-green-500',
        {
          'border-green-600 bg-transparent text-green-600 hover:bg-green-600 hover:text-gray-200':
            variant === 'outlined',
        },
        className,
      )}
      {...(props as ComponentPropsWithoutRef<'button'>)}
    />
  )
}
