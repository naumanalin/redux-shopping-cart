import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    productList: productSlice,
    cart: cartReducer
  },
})