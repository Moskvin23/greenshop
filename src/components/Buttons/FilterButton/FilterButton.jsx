import React from 'react';
import styles from './FilterButton.module.scss';
const FilterButton = () => {
  return <a className={`${styles.btn} ${styles.btnGreen}`}>Filter</a>;
};

export default FilterButton;
