import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../constants"
import { activeCategoryIdSelector } from "./categoriesSlice"
import { plantsFilterType } from "../../enums"

export const fetchPlants = createAsyncThunk("plants/fetchPlants", async (plantsFilters) => {
  const { data } = await axios.get(`${BASE_URL}${plantsFilters}`)
  return data
})

const initialState = {
  filterBy: plantsFilterType.AllPlants,
  plants: [],
  status: "idle",
  selectedPlant: null,
}

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    setSelectedPlant: (state, action) => {
      state.selectedPlant = action.payload
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload
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

export const getFilteredPlants = (state) => {
  const activeCategoryId = activeCategoryIdSelector(state)
  return state.plants.plants.filter((plant) => plant.type === activeCategoryId?.name)
}

export const filterBySelector = (state) => {
  return state.plants.filterBy
}

export const plantsSelector = (state) => state.plants
export const getPlantsFilters = createSelector(
  [activeCategoryIdSelector, filterBySelector],
  (activeCategoryId, filterBy) => {
    const activeCategoryFilterString = activeCategoryId ? `categoryId=${activeCategoryId}` : ""
    let filterByString = ""
    if (plantsFilterType.AllPlants === filterBy) {
      filterByString = ""
    } else if (plantsFilterType.NewArrival === filterBy) {
      filterByString = `${plantsFilterType.NewArrival}=${true}`
    } else if (plantsFilterType.OnSale === filterBy) {
      filterByString = `${plantsFilterType.OnSale}=${true}`
    }
    return `?${filterByString}&${activeCategoryFilterString}`
  },
)
export const selectedPlantSelector = (state) => state.plants.selectedPlant
export const { setSelectedPlant, setFilterBy } = plantsSlice.actions
export default plantsSlice.reducer
