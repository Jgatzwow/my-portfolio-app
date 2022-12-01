import React from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.header__nav}>
      <ul className={styles.header__nav_list}>
        <li className={styles.header__nav__list_item}>
          <a className={styles.header__nav__link} href="#">
            Main
          </a>
        </li>
        <li className={styles.header__nav__list_item}>
          <a className={styles.header__nav__link} href="#">
            Skills
          </a>
        </li>
        <li className={styles.header__nav__list_item}>
          <a className={styles.header__nav__link} href="">
            Pet Projects
          </a>
        </li>
        <li className={styles.header__nav__list_item}>
          <a className={styles.header__nav__link} href="">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
