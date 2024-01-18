import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import userSlice from './userSlice'
import { movieApi } from './movieSlice'


export const store = configureStore({
  reducer: {
    modals: modalSlice,
    user: userSlice,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(movieApi.middleware),
})