import React from 'react'
// lib
import { Route, Routes } from 'react-router-dom'
// routes
import ShoppingCart from '../features/shoppingCart'

const AdminRoute = (props) => {
  return (
    <Routes>
      <Route path={'/'} element={<ShoppingCart {...props} />} />
    </Routes>
  )
}

export default AdminRoute
