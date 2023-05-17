import { createSlice } from '@reduxjs/toolkit';
import { productCategory } from '../../components/enums';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [
      // { id: 1, name: productCategory.housePlant, active: true },
      { id: 1, name: 'House Plant', active: true },
      { id: 2, name: 'Potted Plants', active: false },
      { id: 3, name: 'Seeds', active: false },
      { id: 4, name: 'Small Plants', active: false },
      { id: 5, name: 'Big Plants', active: false },
      { id: 6, name: 'Succulents', active: false },
      { id: 7, name: 'Terrariums', active: false },
      { id: 8, name: 'Gardening', active: false },
      { id: 9, name: 'Accessories', active: false },
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
    updateCategoryQuantity: (state, action) => {
      state.list.forEach((category) => {
        const categoryCards = action.payload.filter((card) => card.name === category.id);
        category.quantity = categoryCards.length;
      });
    },
  },
});

export const { setActiveCategory, updateCategoryQuantity } = categoriesSlice.actions;

export default categoriesSlice.reducer;
