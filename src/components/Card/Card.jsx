import React from 'react';
import styles from './Card.module.scss';
import pic2 from '../../assets/images/Plant2.png';
import icon1 from '../../assets/icons/iconsForCard/backgroundForIcons.png';
import basket from '../../assets/icons/iconsForCard/basket.svg';
import like from '../../assets/icons/iconsForCard/like.svg';
import search from '../../assets/icons/iconsForCard/search.svg';

const Card = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardWithImage}>
          <img alt="somePicture" src={pic2} className={styles.plantPicture} />
          <div className={styles.backgroundForIcons}>
            <img src={icon1} alt="icon1" className={styles.background} />
            <img src={icon1} alt="icon1" className={styles.background} />
            <img src={icon1} alt="icon1" className={styles.background} />
          </div>
          <div className={styles.icons}>
            <img src={basket} alt="icon1" className={styles.icon} />
            <img src={like} alt="icon1" className={styles.icon2} />
            <img src={search} alt="icon1" className={styles.icon3} />
          </div>
        </div>
        <div className={styles.cardTitleWithPrice}>
          <h2 className={styles.title}>Barberton Daisy</h2>
          <p className={styles.price}>$119.00</p>
        </div>
      </div>
    </>
  );
};

export default Card;
