import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={styles.header__nav}>
      <ul className={styles.header__nav_list}>
        <li className={styles.header__nav__list_item}>
          <NavLink className={styles.header__nav__link} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.header__nav__list_item}>
          <NavLink className={styles.header__nav__link} to="/about">
            About Me
          </NavLink>
        </li>
        <li className={styles.header__nav__list_item}>
          <NavLink className={styles.header__nav__link} to="/projects">
            Portfolio
          </NavLink>
        </li>
        <li className={styles.header__nav__list_item}>
          <NavLink className={styles.header__nav__link} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
