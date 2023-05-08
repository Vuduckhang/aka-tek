import React from 'react'
// lib
import { Route, Routes } from 'react-router-dom'
// routes
import Home from '../features/home'

const AdminRoute = (props) => {
  return (
    <Routes>
      <Route path={'/'} element={<Home {...props} />} />
    </Routes>
  )
}

export default AdminRoute
