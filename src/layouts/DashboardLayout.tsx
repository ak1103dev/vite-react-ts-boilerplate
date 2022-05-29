import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex space-x-2">
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
