import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../../assets/icons/Logo.svg';
import location from '../../../assets/icons/Location.svg';
import calling from '../../../assets/icons/Calling.svg';
import message from '../../../assets/icons/Message.svg';
import facebook from '../../../assets/icons/iconsForFooter/FacebookFooterIcon.png';
import instagram from '../../../assets/icons/iconsForFooter/InstagramFooterIcon.png';
import twitter from '../../../assets/icons/iconsForFooter/TwitterFooterIcon.png';
import linkedin from '../../../assets/icons/iconsForFooter/INFooterIcon.png';
import youtube from '../../../assets/icons/iconsForFooter/YoutubeFooterIcon.png';
import payPal from '../../../assets/images/PayPalImage.png';
import plantIcon1 from '../../../assets/icons/iconsForFooter/FooterIconplant1.png';
import plantIcon2 from '../../../assets/icons/iconsForFooter/FooterIconplant2.png';
import plantIcon3 from '../../../assets/icons/iconsForFooter/FooterIconplant3.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.leftPart}>
          <div className={styles.firstSection}>
            <img src={plantIcon1} alt="plantIcon1" />
            <h4>Garden Care</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className={styles.secondSection}>
            <img src={plantIcon2} alt="plantIcon2" />
            <h4>Plant Renovation</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className={styles.thirdSection}>
            <img src={plantIcon3} alt="plantIcon3" />
            <h4>Watering Graden</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
        </div>

        <div className={styles.fourthSection}>
          <h4>Would you like to join newsletters?</h4>
          <input />
          <p>
            We usually post offers and challenges in newsletter. We're your online houseplant
            destination. We offer a wide range of houseplants and accessories shipped directly from
            our (green)house to yours!
          </p>
        </div>
      </div>
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
        <div className={styles.fourthSection}>
          <h4>Social Media</h4>
          <div className={styles.socialIcons}>
            <a>
              <img src={facebook} alt="facebookLogo" />
            </a>
            <a>
              <img src={instagram} alt="instagramLogo" />
            </a>

            <a>
              <img src={twitter} alt="twitterLogo" />
            </a>
            <a>
              <img src={linkedin} alt="linkedinLogo" />
            </a>
            <a>
              <img src={youtube} alt="youtubeLogo" />
            </a>
          </div>

          <h4>We accept</h4>
          <img src={payPal} alt="payPal" style={{ width: '225px' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
