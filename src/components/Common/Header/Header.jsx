import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/icons/Logo.svg';
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import CustomNavLink from '../../CustomNavLink/CustomNavLink';
import BasketButton from '../../Buttons/BasketButton/BasketButton';
import SearchButton from '../../Buttons/SearchButton/SearchButton';
import { useNavigate } from 'react-router-dom';
const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/plantCare', label: 'Plant Care' },
  { to: '/blogs', label: 'Blogs' },
];
const Header = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleBasketClick = () => {
    navigate('/basket');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.leftPartOfHeader}>
          <img src={logo} alt="logo" />
        </section>
        <section className={styles.middlePartOfHeader}>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <CustomNavLink exact to={link.to} activeClassName={styles.active}>
                  {link.label}
                </CustomNavLink>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.rightPartOfHeader}>
          <SearchButton />
          <div onClick={handleBasketClick}>
            <BasketButton />
          </div>
          <div onClick={handleLoginClick}>
            <LoginButton />
          </div>
        </section>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Header;
