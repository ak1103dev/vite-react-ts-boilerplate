import {
  Routes,
  Route,
} from "react-router-dom"
import MainLayout from '../layouts/MainLayout'

import HomePage from '../pages/HomePage'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routers
