import React, { ReactElement } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  children: ReactElement
  name: string
}

const FormItem = ({ children, name }: Props) => {
  const methods = useFormContext()

  return (
    <div>
      {React.cloneElement(children, { ...methods.register(name) })}
      {methods.formState.errors[name] && (
        <div>{methods.formState.errors[name]?.message}</div>
      )}
    </div>
  )
}

export default FormItem
