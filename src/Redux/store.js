import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import sizeReducer from './slices/sizeSlice';
import plantsSlice from './slices/plantsSlice';
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    size: sizeReducer,
    plants: plantsSlice,
  },
});
