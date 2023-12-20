// Footer.js
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerColumn}>
        <div className={styles.footerLogo}>Your Logo</div>
        <ul className={styles.footerList}>
          <li className={styles.footerListItem}>Terms of Use</li>
          <li className={styles.footerListItem}>Privacy Agreement</li>
          <li className={styles.footerListItem}>About</li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <p className={styles.footerText}>Rights reserved &copy; 2023 Your Company</p>
        <p className={styles.footerText}>Advertise with us</p>
      </div>
    </footer>
  );
};

export default Footer;
