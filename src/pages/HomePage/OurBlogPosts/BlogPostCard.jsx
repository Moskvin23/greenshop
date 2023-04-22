import React from 'react';
import styles from './BlogPostCard.module.scss';
import pic from '../../../assets/images/02.png';
import { HiOutlineArrowRight } from 'react-icons/hi';
const BlogPostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardImage} style={{ backgroundImage: `url(${pic})` }}></div>
      <div className={styles.cardContent}>
        <h2>Top 10 Succulents for Your Home</h2>
        <p>Best in hanging baskets. Prefers medium to high light.</p>
        <a className={styles.readMore}>
          Read More
          <HiOutlineArrowRight style={{ marginTop: '2px' }} />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
