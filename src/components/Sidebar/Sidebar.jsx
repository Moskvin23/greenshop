import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider';
import FilterButton from '../Buttons/FilterButton/FilterButton';

const categories = [
  { id: 1, name: 'House Plants', quantity: 33 },
  { id: 2, name: 'Potter Plants', quantity: 12 },
  { id: 3, name: 'Seeds', quantity: 65 },
  { id: 4, name: 'Small Plants', quantity: 39 },
  { id: 5, name: 'Big Plants', quantity: 23 },
  { id: 6, name: 'Succulents', quantity: 17 },
  { id: 7, name: 'Terrariums', quantity: 19 },
  { id: 8, name: 'Gardening', quantity: 13 },
  { id: 9, name: 'Accessories', quantity: 18 },
];
const size = [
  { id: 1, name: 'Small', quantity: 119 },
  { id: 2, name: 'Medium', quantity: 86 },
  { id: 3, name: 'Large', quantity: 78 },
];

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSizeCategory, setActiveSizeCategory] = useState(size[0]);

  const handleClickCategory = (plant) => {
    setActiveCategory(plant);
  };
  const handleClickSizeCategory = (size) => {
    setActiveSizeCategory(size);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.categoriesSelector}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={category === activeCategory ? styles.active : ''}
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
            max={1250}
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
              className={size === activeSizeCategory ? styles.active : ''}
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
