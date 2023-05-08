import { createSlice } from '@reduxjs/toolkit';

const sizeSlice = createSlice({
  name: 'size',
  initialState: {
    list: [
      { id: 1, name: 'Small', quantity: 119, active: false },
      { id: 2, name: 'Medium', quantity: 86, active: false },
      { id: 3, name: 'Large', quantity: 78, active: false },
    ],
    activeSizeCategory: null,
  },
  reducers: {
    setActiveSizeCategory: (state, action) => {
      state.list.forEach((size) => {
        if (size.id === action.payload.id) {
          size.active = true;
          state.activeSizeCategory = size;
        } else {
          size.active = false;
        }
      });
    },
  },
});

export const { setActiveSizeCategory } = sizeSlice.actions;

export default sizeSlice.reducer;
