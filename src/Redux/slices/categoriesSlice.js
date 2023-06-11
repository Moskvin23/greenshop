import { createSlice } from "@reduxjs/toolkit"

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [
      { id: 1, name: "House Plant", quantity: 1 },
      { id: 2, name: "Potted Plants", quantity: 0 },
      { id: 3, name: "Seeds", quantity: 0 },
      { id: 4, name: "Small Plants", quantity: 2 },
      { id: 5, name: "Big Plants", quantity: 1 },
      { id: 6, name: "Succulents", quantity: 3 },
      { id: 7, name: "Terrariums", quantity: 1 },
      { id: 8, name: "Gardening", quantity: 1 },
      { id: 9, name: "Accessories", quantity: 0 },
    ],
    activeCategoryId: undefined,
  },
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload
    },
  },
})

export const activeCategoryIdSelector = (state) => {
  return state.categories.activeCategoryId
}

export const { setActiveCategoryId } = categoriesSlice.actions

export default categoriesSlice.reducer
