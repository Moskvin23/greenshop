import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPlants = createAsyncThunk("plants/fetchPlants", async (params) => {
  const { activeCategory } = params
  const { data } = await axios.get(
    `https://644c22f44bdbc0cc3aa333ba.mockapi.io/GreenshopAPI/Plants?name=${activeCategory?.id}`,
  )
  sessionStorage.setItem("plants", JSON.stringify(data))
  console.log(sessionStorage.getItem("plants"))

  return data
})

const initialState = {
  plants: [],
  status: "idle" | "loading" | "success" | "error",
}

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    setPlants(state, action) {
      state.plants = action.payload
    },
    setSelectedPlant: (state, action) => {
      state.selectedPlant = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.status = "loading"
        state.plants = []
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = "success"
        state.plants = action.payload
        if (action.payload.length > 0) {
          state.selectedPlant = action.payload[0]
        }
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.status = "error"
        state.plants = []
        console.log(action)
      })
  },
})
export const selectedPlantSelector = (state) => state.plants.selectedPlant
export const plantsSelector = (state) => state.plants.plants
export const { setPlants } = plantsSlice.actions
export default plantsSlice.reducer
export const { setSelectedPlant } = plantsSlice.actions
