import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
      </ul>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
