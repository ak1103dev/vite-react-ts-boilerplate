import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/login')}>Login</Button>
      <Button>Signup</Button>
    </div>
  )
}

export default HomePage
