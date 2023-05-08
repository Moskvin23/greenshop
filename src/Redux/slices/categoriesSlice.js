import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [
      { id: 1, nameCategory: 'House Plants', quantity: 33, active: true },
      { id: 2, nameCategory: 'Potter Plants', quantity: 12, active: false },
      { id: 3, nameCategory: 'Seeds', quantity: 65, active: false },
      { id: 4, nameCategory: 'Small Plants', quantity: 39, active: false },
      { id: 5, nameCategory: 'Big Plants', quantity: 23, active: false },
      { id: 6, nameCategory: 'Succulents', quantity: 17, active: false },
      { id: 7, nameCategory: 'Terrariums', quantity: 19, active: false },
      { id: 8, nameCategory: 'Gardening', quantity: 13, active: false },
      { id: 9, nameCategory: 'Accessories', quantity: 18, active: false },
    ],
    activeCategory: null,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.list.forEach((category) => {
        if (category.id === action.payload.id) {
          category.active = true;
          state.activeCategory = category;
        } else {
          category.active = false;
        }
      });
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
