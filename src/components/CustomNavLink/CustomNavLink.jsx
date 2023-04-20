import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './CustomNavLink.module.scss';

const CustomNavLink = ({ to, activeClassName, children }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === to);
  }, [location.pathname, to]);

  return (
    <Link to={to} className={`${styles.link} ${isActive ? activeClassName : ''}`}>
      {children}
      {isActive && <div className={styles.underline} />}
    </Link>
  );
};

export default CustomNavLink;
