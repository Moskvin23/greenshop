import React from "react"
import styles from "./FilterPlants.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { setActiveCategory, filterOptions } from "../../Redux/slices/filterSlice"

const FilterPlants = () => {
  const activeCategory = useSelector((state) => state.filter.activeCategory)
  const dispatch = useDispatch()

  const handleClick = (option) => {
    dispatch(setActiveCategory(option))
  }

  return (
    <>
      <section className={styles.middlePartOfHeader}>
        <ul>
          {filterOptions.map((option) => (
            <li
              key={option.id}
              className={option === activeCategory ? styles.active : ""}
              onClick={() => handleClick(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default FilterPlants
