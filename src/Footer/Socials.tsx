import React from "react";
import styles from "./socials.module.css";

export const Socials = () => {
  return (
    <footer className={styles.socials__wrapper}>
      <h3>Social Profiles</h3>
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
    </footer>
  );
};
