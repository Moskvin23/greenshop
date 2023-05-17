import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider';
import FilterButton from '../Buttons/FilterButton/FilterButton';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../Redux/slices/categoriesSlice';
import { setActiveSizeCategory } from '../../Redux/slices/sizeSlice';
import { useEffect } from 'react';

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const size = useSelector((state) => state.size.list);
  const activeSizeCategory = useSelector((state) => state.size.activeSizeCategory);

  useEffect(() => {
    if (!activeCategory) {
      dispatch(setActiveCategory({ id: categories[0].id }));
    }
  }, [activeCategory, categories, dispatch]);

  const handleClickCategory = (category) => {
    dispatch(setActiveCategory({ id: category.id }));
  };

  const handleClickSizeCategory = (size) => {
    dispatch(setActiveSizeCategory({ id: size }));
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.categoriesSelector}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={category.id === activeCategory?.id ? styles.active : ''}
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
            value={{ min: priceRange.min, max: priceRange.max }}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
        </div>
      </div>
      <FilterButton onChange={(value) => setPriceRange(value)} />
      <div className={styles.sizeSelector}>
        <h2>Size</h2>
        <ul>
          {size.map((size) => (
            <li
              key={size.id}
              className={size === activeSizeCategory?.id ? styles.active : ''}
              onClick={() => handleClickSizeCategory(size)}>
              {size.name}
              <span>({size.quantity})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
