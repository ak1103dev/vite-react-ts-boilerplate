import { ReactNode } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props {
  onSubmit: (data: any) => void
  children: ReactNode
  schema: any
}

const Form = ({ onSubmit, children, schema }: Props) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
