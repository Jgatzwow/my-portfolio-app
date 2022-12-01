import React from "react";
import styles from "./Home.module.css";
import containerStyles from "../common/styles/Container.module.css";

export const Home = () => {
  return (
    <div className={styles.main}>
      <div className={`${containerStyles.container} ${styles.main__container}`}>
        <div className={styles.text}>
          <h3 className={styles.home__greeting}>HI THERE!</h3>
          <h1 className={styles.home__title}>I am Michael</h1>
          <p className={styles.home__info}>
            Front-end Developer based in Kiev, Ukraine. I strive to build
            responsive, and beautiful web applications through carefully crafted
            code and user-centric design.
          </p>
          <div>
            <a className={styles.home__link} href="#">
              More about me
            </a>
            <a
              className={`${styles.home__link} + ' ' + ${styles.home__link_diff}`}
              href="#"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div className={styles.photo__wrap}>
          <img className={styles.photo} src={""} alt="My picture" />
        </div>
      </div>
    </div>
  );
};
