import React from 'react';
import styles from './Banner.module.scss';
import ShopNowButton from '../../../components/Buttons/ShopNowButton/ShopNowButton';
import { dotSlide } from '../../../Redux/slices/sliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { sliderData } from './sliderData';

const Banner = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log(slideIndex);
  const dispatch = useDispatch();

  return (
    <>
      {sliderData.map((slide) => {
        return (
          <div
            key={slide.id}
            className={
              parseInt(slide.id) === slideIndex ? styles.slideActive : styles.slideInactive
            }>
            <div className={styles.wrapper}>
              <div className={styles.container}>
                <section className={styles.leftSection}>
                  <div className={styles.mainTitle}>Welcome to GreenShop</div>
                  <h1 className={styles.title}>
                    let's make a better <span>planet</span>
                  </h1>
                  <div className={styles.description}>
                    {parseInt(slide.id) === slideIndex && slide.description}
                  </div>
                  <div className={styles.buttonWrapper}>
                    <ShopNowButton />
                  </div>
                </section>
                <section className={styles.rightSection}>
                  {parseInt(slide.id) === slideIndex && (
                    <img src={slide.img} alt="imageForSlider"></img>
                  )}
                </section>
              </div>
            </div>
            <div className={styles.dotContainer}>
              {sliderData.map((dot, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`${styles.dot} ${
                        index === slideIndex ? styles.activeDot : styles.inactiveDot
                      }`}
                      onClick={() => dispatch(dotSlide(index))}></div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Banner;
