import { createSlice } from '@reduxjs/toolkit';
import { productCategory } from '../../components/enums';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [
      // { id: 1, name: productCategory.housePlant, active: true },
      { id: 1, name: 'House Plant', active: true, quantity: 1 },
      { id: 2, name: 'Potted Plants', active: false, quantity: 0 },
      { id: 3, name: 'Seeds', active: false, quantity: 0 },
      { id: 4, name: 'Small Plants', active: false, quantity: 2 },
      { id: 5, name: 'Big Plants', active: false, quantity: 1 },
      { id: 6, name: 'Succulents', active: false, quantity: 3 },
      { id: 7, name: 'Terrariums', active: false, quantity: 1 },
      { id: 8, name: 'Gardening', active: false, quantity: 1 },
      { id: 9, name: 'Accessories', active: false, quantity: 0 },
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

export const activeCategorySelector = (state) => state.categories.activeCategory;

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
