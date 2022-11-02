import React from "react";
import styles from "./Footer.module.css";
import containerStyles from "../common/styles/Container.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${containerStyles.container} ${styles.footer__container}`}
      >
        <h2 className={styles.title}>Mykhailo Sokolenko</h2>
        <ul className={styles.socials}>
          <li>
            <a className={styles.socials__link} href="#">
              facebook
            </a>
          </li>
          <li>
            <a className={styles.socials__link} href="#">
              github
            </a>
          </li>
          <li>
            <a className={styles.socials__link} href="#">
              linkedIn
            </a>
          </li>
          <li>
            <a className={styles.socials__link} href="#">
              Instagram
            </a>
          </li>
        </ul>
        <p>© 2022 All rights reserved</p>
      </div>
    </footer>
  );
};
