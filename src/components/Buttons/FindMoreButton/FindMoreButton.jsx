import React from 'react';
import styles from './FindMoreButton.module.scss';
import { HiOutlineArrowRight } from 'react-icons/hi';
const FindMoreButton = () => {
  return (
    <a className={`${styles.btn} ${styles.btnGreen}`}>
      Find More
      <HiOutlineArrowRight style={{ marginTop: '2px', width: '18px', height: '18px' }} />
    </a>
  );
};

export default FindMoreButton;
