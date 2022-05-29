import Button from '../../components/Button'
import Form from '../../components/Form'
import FormItem from '../../components/Form/FormItem'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'

const schema = yup
  .object({
    username: yup.string().required('Please input your username'),
    password: yup.string().required('Please input your password'),
  })
  .required()

const LoginPage = () => {
  const navigate = useNavigate()

  const onLogin = (data: any) => {
    if (data.username === 'admin' && data.password === 'nimda') {
      alert('login success')
      navigate('/dashboard')
    } else {
      alert('login failed')
    }
  }
  return (
    <Form onSubmit={onLogin} schema={schema}>
      <FormItem name="username">
        <Input />
      </FormItem>
      <FormItem name="password">
        <Input type="password" />
      </FormItem>
      <Button type="submit">Login</Button>
    </Form>
  )
}

export default LoginPage
