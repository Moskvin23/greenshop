import React, { useState } from 'react';
import styles from './SortingCards.module.scss';
import stroke from '../../assets/icons/Stroke 1.svg';

const SortingCards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sortByContainer}>
        <span>Sort by: Default sorting</span>
        <img
          src={stroke}
          alt="stroke"
          style={{ cursor: 'pointer', marginLeft: '8px' }}
          className={isFlipped ? styles.flipped : ''}
          onClick={handlePopupToggle}
        />
      </div>
      {isPopupOpen && <div className={styles.popup}>Popup content</div>}
    </div>
  );
};

export default SortingCards;
