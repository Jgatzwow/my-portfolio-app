import React from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.header__nav}>
      <ul className={styles.header__nav_list}>
        <li className={styles.header__nav__list_item}>
          <a href="#">Main</a>
        </li>
        <li className={styles.header__nav__list_item}>
          <a href="#">Skills</a>
        </li>
        <li className={styles.header__nav__list_item}>
          <a href="">Pet Projects</a>
        </li>
        <li className={styles.header__nav__list_item}>
          <a href="">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};
