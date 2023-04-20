import React from 'react';
import styles from './Card.module.scss';
const Card = ({ title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export default Card;
