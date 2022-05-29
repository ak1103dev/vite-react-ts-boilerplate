import { ReactNode } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

interface Props {
  onSubmit: (data: any) => void
  children: ReactNode
}

const Form = ({ onSubmit, children }: Props) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
