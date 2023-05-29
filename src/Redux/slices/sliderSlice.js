import { createSlice } from '@reduxjs/toolkit';
import { sliderData } from '../../pages/HomePage/BannerPart/sliderData';

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
    length: sliderData.length,
  },
  reducers: {
    dotSlide(state, action) {
      const slide = action.payload;
      state.value = slide;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
