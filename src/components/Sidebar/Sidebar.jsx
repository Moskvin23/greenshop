import styles from "./Sidebar.module.scss"
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider"
import FilterButton from "../Buttons/FilterButton/FilterButton"
import { useSelector, useDispatch } from "react-redux"
import { activeCategoryIdSelector, setActiveCategoryId } from "../../Redux/slices/categoriesSlice"
import { setActiveSizeCategory } from "../../Redux/slices/sizeSlice"
import { plantsSelector } from "../../Redux/slices/plantsSlice.js"
const Sidebar = () => {
  const dispatch = useDispatch()
  const plants = useSelector(plantsSelector)
  const categories = useSelector((state) => state.categories.list)
  const activeCategoryId = useSelector(activeCategoryIdSelector)
  const size = useSelector((state) => state.size.list)
  const activeSizeCategory = useSelector((state) => state.size.activeSizeCategory)
  // useEffect(() => {
  //   if (!activeCategory) {
  //     dispatch(setActiveCategory({ id: categories[0].id }))
  //   }
  // }, [activeCategory, categories, dispatch])

  const handleClickCategory = (category) => {
    dispatch(setActiveCategoryId(category.id))
  }

  const handleClickSizeCategory = (size) => {
    dispatch(setActiveSizeCategory({ id: size.id }))
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.categoriesSelector}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={category.id === activeCategoryId ? styles.active : ""}
              onClick={() => handleClickCategory(category)}>
              {category.name}
              <span>({category.quantity})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.priceRangeSelector}>
        <h2>Price Range</h2>
        <div className={styles.MultiRangeSlider}>
          <MultiRangeSlider
            min={0}
            max={300}
            value={{ min: plants.price, max: plants.price }}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
        </div>
      </div>
      <FilterButton />
      <div className={styles.sizeSelector}>
        <h2>Size</h2>
        <ul>
          {size.map((size) => (
            <li
              key={size.id}
              className={size === activeSizeCategory?.id ? styles.active : ""}
              onClick={() => handleClickSizeCategory(size)}>
              {size.name}
              <span>({size.quantity})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
