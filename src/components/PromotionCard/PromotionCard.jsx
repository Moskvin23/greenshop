import React from 'react';
import styles from './PromotionCard.module.scss';
import FindMoreButton from '../Buttons/FindMoreButton/FindMoreButton';
import plant1 from '../../assets/images/plantForPromotionComponent.png';
const PromotionCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionWithImage}>
        <img src={plant1} alt="plant1" />
      </div>
      <div className={styles.sectionWithTitleDescriptionButton}>
        <h2>Summer cactus & succulents</h2>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
        <FindMoreButton />
      </div>
    </div>
  );
};

export default PromotionCard;
