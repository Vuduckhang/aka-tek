import { createSlice } from '@reduxjs/toolkit'
import { getHome } from './async-actions'

const initialState = {
  products: [],
}

export const homeSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHome.fulfilled, (state, action) => {
      state.home = action.payload
    })
  },
})

const homeReducer = homeSlice.reducer

export { homeReducer, getHome }
