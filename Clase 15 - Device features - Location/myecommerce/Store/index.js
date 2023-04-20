import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/counter/counterSlice'
import shopReducer from '../features/shop/shopSlice'
import cartReducer from '../features/shop/cartSlice'
import authReducer from '../features/auth/authSlice'
import { shopApi } from '../services/realtimeDatabaseService'
import { authApi } from '../services/authService'

const store = configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: 
    (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware),  
})

setupListeners(store.dispatch);

export default store
