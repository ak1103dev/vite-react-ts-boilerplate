import Button from '../../components/Button'
import Form from '../../components/Form'
import FormItem from '../../components/Form/FormItem'
import * as yup from 'yup'

const schema = yup
  .object({
    username: yup.string().required('Please input your username'),
    password: yup.string().required('Please input your password'),
  })
  .required()

const LoginPage = () => {
  const onLogin = (data: any) => {
    if (data.username === 'admin' && data.password === 'nimda') {
      alert('login success')
    } else {
      alert('login failed')
    }
  }
  return (
    <Form onSubmit={onLogin} schema={schema}>
      <FormItem name="username">
        <input />
      </FormItem>
      <FormItem name="password">
        <input type="password" />
      </FormItem>
      <Button type="submit">Login</Button>
    </Form>
  )
}

export default LoginPage
