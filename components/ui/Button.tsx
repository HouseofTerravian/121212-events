'use client'

import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center'

    const variants = {
      primary: 'bg-secondary hover:bg-secondary-dark text-primary-dark font-bold hover:shadow-lg hover:shadow-secondary/20',
      outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-dark',
      ghost: 'text-cream hover:text-secondary',
    }

    const sizes = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-8 text-base',
      lg: 'py-4 px-10 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
