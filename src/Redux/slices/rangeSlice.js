import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  min: 0,
  max: 0,
}

const rangeSlice = createSlice({
  name: "range",
  initialState,
  reducers: {
    setRange: (state, action) => {
      state.min = action.payload.min
      state.max = action.payload.max
    },
  },
})

export const { setRange } = rangeSlice.actions
export default rangeSlice.reducer
