import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/icons/Logo.svg';
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import CustomNavLink from '../../CustomNavLink/CustomNavLink';
import BasketButton from '../../Buttons/BasketButton/BasketButton';
import SearchButton from '../../Buttons/SearchButton/SearchButton';
const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/plantCare', label: 'Plant Care' },
  { to: '/blogs', label: 'Blogs' },
];
const Header = () => {
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
          <BasketButton />
          <LoginButton />
        </section>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Header;
