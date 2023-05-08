import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import sizeReducer from './slices/sizeSlice';
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    size: sizeReducer,
  },
});
