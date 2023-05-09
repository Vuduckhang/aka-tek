import React from 'react'
// lib
import { Route, Routes } from 'react-router-dom'
// routes
import ShoppingCart from '../features/shoppingCart'
import CheckOut from '../features/checkOut'
import ThankYou from '../features/thankYou'

const AdminRoute = (props) => {
  return (
    <Routes>
      <Route path={'/'} element={<ShoppingCart {...props} />} />
      <Route path={'/check-out'} element={<CheckOut {...props} />} />
      <Route path={'/thank-you'} element={<ThankYou {...props} />} />
    </Routes>
  )
}

export default AdminRoute
