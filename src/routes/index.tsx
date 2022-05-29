import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routers
