import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../../assets/icons/Logo.svg';
import location from '../../../assets/icons/Location.svg';
import calling from '../../../assets/icons/Calling.svg';
import message from '../../../assets/icons/Message.svg';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}></div>
      <div className={styles.middleSection}>
        <img src={logo} alt="logo" />
        <p>
          <img src={location} alt="location logo" style={{ width: '20px', height: '20px' }} />
          70 West Buckingham Ave. Farmingdale, NY 11735
        </p>
        <p>
          <img src={message} alt="message logo" style={{ width: '20px', height: '20px' }} />
          contact@greenshop.com
        </p>
        <p>
          <img src={calling} alt="calling logo" style={{ width: '20px', height: '20px' }} />
          +88 01911 717 490
        </p>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.leftPart}>
          <div className={styles.firstSection}>
            <h4>My Account</h4>
            <ul>
              <li>My Account</li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
          </div>
          <div className={styles.secondSection}>
            <h4>Help & Guide</h4>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
              <li>How to Return</li>
            </ul>
          </div>
          <div className={styles.thirdSection}>
            <h4>Categories</h4>
            <ul>
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>
        </div>
        <div className={styles.leftPart}>
          <div className={styles.fourthSection}>
            <div>
              <h4>Social Media</h4>
            </div>
            <div>
              <h4>We accept</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
