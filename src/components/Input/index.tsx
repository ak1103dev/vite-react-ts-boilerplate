import React from 'react'

const Input = React.forwardRef((props: any, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="border border-gray-300 rounded focus:border-blue-700 outline-0 p-2"
    />
  )
})

export default Input
