import React, { Fragment } from 'react'
import AdminRoute from './AdminRoute'
import { isMobileOnly } from 'react-device-detect'

const AdminArea = (props) => {
  return (
    <Fragment>
      <AdminRoute {...props} isMobile={isMobileOnly} />
    </Fragment>
  )
}

export default AdminArea
