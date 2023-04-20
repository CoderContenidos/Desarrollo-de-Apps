import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/counter/counterSlice'
import shopReducer from '../features/shop/shopSlice'
import cartReducer from '../features/shop/cartSlice'
import { shopApi } from '../services/shopService'

const store = configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch);

export default store
