import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../constants"
import { activeCategoryIdSelector } from "./categoriesSlice"

export const fetchPlants = createAsyncThunk("plants/fetchPlants", async (activeCategoryId) => {
  const { data } = await axios.get(
    `${BASE_URL}?categoryId=${activeCategoryId ? activeCategoryId : ""}`,
  )
  return data
})

const initialState = {
  filterBy: undefined,
  plants: [],
  status: "idle",
  selectedPlant: undefined,
}

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
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
      .addCase(fetchPlants.rejected, (state) => {
        state.status = "error"
        state.plants = []
      })
  },
})

export const filteredPlantsSelector = (state) => {
  const activeCategoryId = activeCategoryIdSelector(state)
  return state.plants.plants.filter((plant) => plant.type === activeCategoryId?.name)
}

export const plantsSelector = (state) => state.plants
export const selectedPlantSelector = (state) => state.plants.selectedPlant
export const { setSelectedPlant } = plantsSlice.actions
export default plantsSlice.reducer
