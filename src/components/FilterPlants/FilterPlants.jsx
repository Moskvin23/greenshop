import React from "react"
import styles from "./FilterPlants.module.scss"
import { plantsFilterLabel, plantsFilterType } from "../../enums"
import { useDispatch, useSelector } from "react-redux"
import { setFilterBy } from "../../Redux/slices/plantsSlice"

const FilterPlants = () => {
  const activeCategory = useSelector((state) => state.plants.filterBy)
  const dispatch = useDispatch()

  const handleClick = (filterBy) => {
    dispatch(setFilterBy(filterBy))
  }
  return (
    <>
      <section className={styles.middlePartOfHeader}>
        <ul>
          {Object.values(plantsFilterType).map((plant) => (
            <li
              key={plant}
              className={plant === activeCategory ? styles.active : ""}
              onClick={() => handleClick(plant)}>
              {plantsFilterLabel[plant]}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default FilterPlants
