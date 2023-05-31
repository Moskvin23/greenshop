import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "./slices/categoriesSlice"
import sizeReducer from "./slices/sizeSlice"
import plantsSlice from "./slices/plantsSlice"
import slideReducer from "./slices/sliderSlice"
import filterReducer from "./slices/filterSlice"
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    size: sizeReducer,
    plants: plantsSlice,
    slider: slideReducer,
    filter: filterReducer,
  },
})
