import React, { ReactNode } from 'react'
// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form'

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode
  methods: UseFormReturn<any>
  onSubmit?: VoidFunction
}

export default function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <Form {...methods}>
      <form
        onSubmit={onSubmit}
        style={{
          width: '100%',          
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        {children}
      </form>
    </Form>
  )
}
