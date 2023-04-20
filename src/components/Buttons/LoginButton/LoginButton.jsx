import React from 'react';
import styles from './LoginButton.module.scss';
import LoginLogo from '../../../assets/icons/Logout.svg';
const LoginButton = () => {
  return (
    <a className={`${styles.btn} ${styles.btnGreen}`}>
      <img src={LoginLogo} />
      Login
    </a>
  );
};

export default LoginButton;
