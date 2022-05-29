import Button from '../../components/Button'
import Form from '../../components/Form'
import FormItem from '../../components/Form/FormItem'

const LoginPage = () => {
  const onLogin = (data: any) => {
    if (data.username === 'admin' && data.password === 'nimda') {
      alert('login success')
    } else {
      alert('login failed')
    }
  }
  return (
    <Form onSubmit={onLogin}>
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
