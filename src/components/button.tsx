import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'>

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-md bg-green-600 px-4 py-2 text-xl font-bold text-gray-200 transition-all duration-500 hover:bg-green-500',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
