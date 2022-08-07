import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'languages',
}

export const filterSlice = createSlice({
  name: 'filterType',
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { changeSort } = filterSlice.actions

export default filterSlice.reducer