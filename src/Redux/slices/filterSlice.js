import { createSlice } from "@reduxjs/toolkit"

const filterOptions = [
  { id: 1, name: "All Plants" },
  { id: 2, name: "New Arrivals" },
  { id: 3, name: "Sale" },
]

const filterSlice = createSlice({
  name: "filter",
  initialState: { activeCategory: filterOptions[0] },
  plants: [],
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
  },
})

export const { setActiveCategory } = filterSlice.actions
export const selectFilterOptions = (state) => state.filter.filterOptions
export default filterSlice.reducer
export { filterOptions }
