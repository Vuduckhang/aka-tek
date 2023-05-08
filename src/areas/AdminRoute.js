import React from 'react'
// lib
import { Route, Routes } from 'react-router-dom'
// routes
import ShoppingCart from '../features/shoppingCart'
import CheckOut from '../features/checkOut'

const AdminRoute = (props) => {
  return (
    <Routes>
      <Route path={'/'} element={<ShoppingCart {...props} />} />
      <Route path={'/check-out'} element={<CheckOut {...props} />} />
    </Routes>
  )
}

export default AdminRoute
