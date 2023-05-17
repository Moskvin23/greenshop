import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlants = createAsyncThunk('plants/fetchPlants', async (params) => {
  const { activeCategory } = params;
  const { data } = await axios.get(
    `https://644c22f44bdbc0cc3aa333ba.mockapi.io/GreenshopAPI/Plants?name=${activeCategory.id}`,
  );

  return data;
});

const initialState = {
  plants: [],
  status: 'idle' | 'loading' | 'success' | 'error',
};

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    setPlants(state, action) {
      state.plants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.status = 'loading';
        state.plants = [];
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = 'success';
        state.plants = action.payload;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.status = 'error';
        state.plants = [];
        console.log(action);
      });
  },
});

export const { setPlants } = plantsSlice.actions;
export default plantsSlice.reducer;
