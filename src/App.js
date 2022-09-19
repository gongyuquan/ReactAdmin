import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './routes'
import 'antd/dist/antd.min.css';

export default function App() {
  const elements = useRoutes(routes)
  return (
    <div className='app'>
      <Link to="/admin">admin</Link><br></br>
      <Link to="/login">login</Link>

      {/* 注册路由 */}
      {elements}
    </div>
  )
}

