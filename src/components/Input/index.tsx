import React from 'react'

const Input = React.forwardRef((props: any, ref) => {
  return <input ref={ref} {...props} />
})

export default Input
