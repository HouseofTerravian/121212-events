'use client'

import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-cream/70 mb-2 text-sm font-medium">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 bg-surface-2 border border-border rounded-md
            text-cream placeholder-dim/50
            focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
            transition-colors duration-200
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

export function Textarea({
  label,
  error,
  className = '',
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-cream/70 mb-2 text-sm font-medium">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 bg-surface-2 border border-border rounded-md
          text-cream placeholder-dim/50
          focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
          transition-colors duration-200 min-h-[120px]
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
