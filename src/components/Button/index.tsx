import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  [key: string]: any
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-blue-800 hover:bg-blue-500 text-white rounded p-2"
    >
      {children}
    </button>
  )
}

export default Button
