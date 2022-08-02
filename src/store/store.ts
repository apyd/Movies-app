import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './api/apiSlice'

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'development'
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
