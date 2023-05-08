import React, { useState } from 'react';
import styles from './PlantCard.module.scss';

import icon1 from '../../assets/icons/iconsForCard/backgroundForIcons.png';
import basket from '../../assets/icons/iconsForCard/basket.svg';
import like from '../../assets/icons/iconsForCard/like.svg';
import search from '../../assets/icons/iconsForCard/search.svg';
import { useNavigate } from 'react-router-dom';

const PlantCard = ({ title, image, price }) => {
  const navigate = useNavigate();
  const handleBasketClick = () => {
    navigate('/basket');
  };
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleSearchHover = () => {
    setIsImageHovered(true);
  };

  const handleSearchLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.cardWithImage} ${isImageHovered ? styles.hovered : ''}`}
          onMouseEnter={handleSearchHover}
          onMouseLeave={handleSearchLeave}>
          <img alt="somePicture" src={image} className={styles.plantPicture} />
          <div className={styles.backgroundForIcons}>
            <img src={icon1} alt="icon1" className={styles.background} />
            <img src={icon1} alt="icon1" className={styles.background} />
            <img src={icon1} alt="icon1" className={styles.background} />
          </div>
          <div className={styles.icons}>
            <img src={basket} alt="icon1" className={styles.icon} onClick={handleBasketClick} />
            <img src={like} alt="icon1" className={styles.icon2} />
            <img src={search} alt="icon1" className={styles.icon3} />
          </div>
        </div>
        <div className={styles.cardTitleWithPrice}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </>
  );
};

export default PlantCard;
