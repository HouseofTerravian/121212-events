'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface FormData {
  email: string
}

export default function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitError(null)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Newsletter signup:', data.email)
      setIsSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center space-x-2 text-secondary">
        <CheckCircle className="h-5 w-5" />
        <span>Thanks for subscribing!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
      </div>
      <Button type="submit" disabled={isSubmitting} size="md">
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        <Send className="ml-2 h-4 w-4" />
      </Button>
      {submitError && <p className="text-sm text-red-500 mt-1">{submitError}</p>}
    </form>
  )
}
