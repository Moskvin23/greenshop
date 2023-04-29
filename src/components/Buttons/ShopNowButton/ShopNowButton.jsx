import React from 'react';
import styles from './ShopNowButton.module.scss';
const ShopNowButton = () => {
  const handleClick = () => {
    const middleSection = document.querySelector('#middleSection');
    middleSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <a className={`${styles.btn} ${styles.btnGreen}`} onClick={handleClick}>
      Shop now
    </a>
  );
};

export default ShopNowButton;
