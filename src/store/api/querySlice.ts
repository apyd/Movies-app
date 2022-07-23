import { createSlice } from '@reduxjs/toolkit'
import { FILTER_OPTIONS, SORT_OPTIONS } from "../../dictionary/dictionary";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface QueryState {
  searchText: string,
  filter: string,
  sort: string
}

const initialState = {
  searchText: '',
  filter: FILTER_OPTIONS[0].value,
  sort: SORT_OPTIONS[0].value
} as QueryState

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    updateSearch(state, action: PayloadAction<string>) {
      state.searchText = action.payload
    },
    updateFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload
    },
    updateSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },
  },
})

export const { updateSearch, updateFilter, updateSort } = querySlice.actions
export default querySlice.reducer