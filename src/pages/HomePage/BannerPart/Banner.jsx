import React from 'react';
import styles from './Banner.module.scss';
import mainImage from '../../../assets/images/mainImageForSlider.png';
import ShopNowButton from '../../../components/Buttons/ShopNowButton/ShopNowButton';
const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.leftSection}>
          <div className={styles.mainTitle}>Welcome to GreenShop</div>
          <h1 className={styles.title}>
            let's make a better <span>planet</span>
          </h1>
          <div className={styles.description}>
            We are an online plant shop offering a wide range of cheap and trendy plants. Use our
            plants to create an unique Urban Jungle. Order your favorite plants!
          </div>
          <div className={styles.buttonWrapper}>
            <ShopNowButton />
          </div>
        </section>
        <section className={styles.rightSection}>
          <img src={mainImage} alt="mainImageForSlider" />
        </section>
      </div>
    </div>
  );
};

export default Slider;
