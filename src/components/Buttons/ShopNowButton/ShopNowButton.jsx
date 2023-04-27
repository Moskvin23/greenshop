import React from 'react';
import styles from './ShopNowButton.module.scss';
const FilterButton = () => {
  return <a className={`${styles.btn} ${styles.btnGreen}`}>Shop now</a>;
};

export default FilterButton;
