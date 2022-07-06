import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { apiSlice } from './api/apiSlice'
import querySliceReducer, { QueryState } from './api/querySlice'

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  querySlice: querySliceReducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "development" ? false : true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const querySelector = (state: { querySlice: QueryState }) => state.querySlice;
