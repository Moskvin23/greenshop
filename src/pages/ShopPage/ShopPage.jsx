import React, { useState } from 'react';
import styles from './ShopPage.module.scss';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import pic from '../../assets/images/imagesForCards/Plant1.png';
const items = [
  { id: 1, name: 'Product Description' },
  { id: 2, name: 'Reviews' },
];
const ShopPage = ({ title, price }) => {
  const [activeCategory, setActiveCategory] = useState(items[0]);
  const handleClick = (items) => {
    setActiveCategory(items);
  };

  console.log(title, price);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.plantOverview}>
          <div className={styles.leftSection}>
            <div className={styles.col1}>
              <img src={pic} alt="image" />
              <img src={pic} alt="image" />
              <img src={pic} alt="image" />
              <img src={pic} alt="image" />
            </div>
            <div className={styles.col2}>
              <img src={pic} alt="image" />
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.topOfRightSection}>
              <h1></h1>
              <div className={styles.priceAndReview}>
                <p className={styles.price}></p>
                <p>Some Review</p>
              </div>
            </div>
            <div className={styles.borderForRightSection}></div>
            <h5 className={styles.shortDescription}>Short Description:</h5>
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off
              the ground. The ceramic cylinder planters come with a wooden stand to help elevate
              your plants off the ground.
            </p>
            <h5 className={styles.size}>Size:</h5>
            <div>S M L XL</div>
            <div className={styles.increment}>Increment and decrement buy now and add card</div>
            <div>
              <p>
                Categories: <span>Potter Plants</span>
              </p>
              <p>
                Tags: <span>Home,Garden,Plants</span>
              </p>
              <h5 className={styles.shareThisProducts}>Share this products: </h5>
            </div>
          </div>
        </div>
        <div className={styles.plantItems}>
          <div className={styles.items}>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className={item === activeCategory ? styles.active : ''}
                  onClick={() => handleClick(item)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.productDescription}>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off
            the ground. The ceramic cylinder planters come with a wooden stand to help elevate your
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
            Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
            cursus eu, suscipit id nulla.
            <br />
            <br />
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum
            turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce
            aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue
            nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
            lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
            Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus,
            in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand
            to help elevate your plants off the ground.
          </p>
          <h5 className={styles.titleForProductDescription}>Living Room:</h5>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off
            the ground. The ceramic cylinder planters come with a wooden stand to help elevate your
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h5 className={styles.titleForProductDescription}>Dining Room:</h5>
          <p>
            The benefits of houseplants are endless. In addition to cleaning the air of harmful
            toxins, they can help to improve your mood, reduce stress and provide you with better
            sleep. Fill every room of your home with houseplants and their restorative qualities
            will improve your life.
          </p>
          <h5 className={styles.titleForProductDescription}>Office:</h5>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off
            the ground. The ceramic cylinder planters come with a wooden stand to help elevate your
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
