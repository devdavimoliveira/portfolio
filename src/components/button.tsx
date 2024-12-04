import { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'contained' | 'outlined'
}

export function Button({
  children,
  variant = 'contained',
  className,
  ...rest
}: ButtonProps) {
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
      {...rest}
    >
      {children}
    </button>
  )
}
