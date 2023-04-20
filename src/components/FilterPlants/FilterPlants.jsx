import React, { useState } from 'react';
import styles from './FilterPlants.module.scss';
const plants = [
  { id: 1, name: 'All Plants' },
  { id: 2, name: 'New Arrivals' },
  { id: 3, name: 'Sale' },
];
const FilterPlants = () => {
  const [activeCategory, setActiveCategory] = useState(plants[0]);
  const handleClick = (plants) => {
    setActiveCategory(plants);
  };
  return (
    <>
      <section className={styles.middlePartOfHeader}>
        <ul>
          {plants.map((plant) => (
            <li
              key={plant.id}
              className={plant === activeCategory ? styles.active : ''}
              onClick={() => handleClick(plant)}>
              {plant.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FilterPlants;
