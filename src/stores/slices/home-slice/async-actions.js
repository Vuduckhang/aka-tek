import { createAsyncThunk } from '@reduxjs/toolkit'
import { notification } from 'antd'

const getHome = createAsyncThunk('home/getHome', async () => {
  try {
    return 'Home'
  } catch (error) {
    console.log('error.......', error)
    notification.error({
      message: 'Loading home failed',
    })
  }
})

export { getHome }
