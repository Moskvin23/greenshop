import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPlants, getFilteredPlants, getPlantsFilters } from "../../Redux/slices/plantsSlice"
import PlantCard from "./PlantCard"
import PlantCardSkeleton from "./Skeleton"
import styles1 from "../../pages/HomePage/HomePage.module.scss"
// import { activeCategoryIdSelector } from "../../Redux/slices/categoriesSlice"
import FilterPlants from "../FilterPlants/FilterPlants"
import SortingCards from "../SortingCards/SortingCards"
import styles from "./PlantList.module.scss"

const PlantList = () => {
  let { status } = useSelector((state) => state.plants)
  const plantsFilters = useSelector(getPlantsFilters)
  const filteredPlants = useSelector(getFilteredPlants)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlants(plantsFilters))
  }, [plantsFilters, dispatch])

  return (
    <>
      <div className={styles.topOfListCards}>
        <FilterPlants />
        <SortingCards />
      </div>
      <div className={styles1.listCards}>
        {status === "error" ? (
          <div>
            <h2>Oops, something went wrong...</h2>
          </div>
        ) : status === "loading" ? (
          [...new Array(9)].map((_, index) => <PlantCardSkeleton key={index} />)
        ) : filteredPlants.length === 0 ? (
          <div>
            <h2>There are currently no plants from this category</h2>
          </div>
        ) : (
          filteredPlants.map((plant, index) => <PlantCard plant={plant} key={index} />)
        )}
      </div>
    </>
  )
}

export default PlantList
