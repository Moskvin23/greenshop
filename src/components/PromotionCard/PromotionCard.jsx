import React from 'react';
import styles from './PromotionCard.module.scss';
import FindMoreButton from '../Buttons/FindMoreButton/FindMoreButton';
import plant1 from '../../assets/images/plantForPromotionComponent.png';
import { useNavigate } from 'react-router-dom';
const PromotionCard = () => {
  const navigate = useNavigate();
  const handleFindMoreClick = () => {
    navigate('/plantCare');
  };
  return (
    <div className={styles.container}>
      <div className={styles.sectionWithImage}>
        <img
          src={plant1}
          alt="plant1"
          style={{ cursor: 'pointer' }}
          onClick={handleFindMoreClick}
        />
      </div>
      <div className={styles.sectionWithTitleDescriptionButton}>
        <h2>Summer cactus & succulents</h2>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
        <div onClick={handleFindMoreClick}>
          <FindMoreButton />
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
