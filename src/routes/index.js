import { Navigate } from 'react-router-dom'
import Admin from '../pages/admin/Admin'
import Login from '../pages/login/Login'

const routes = [
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Navigate to="/login" />
  }
]

export default routes