import React from "react";
import styles from "./Home.module.css";
import containerStyles from "../common/styles/Container.module.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.main}>
      <div className={`${containerStyles.container} ${styles.main__container}`}>
        <div className={styles.text}>
          <h3 className={styles.home__greeting}>HI THERE!</h3>
          <h1 className={styles.home__title}>I am Mykhailo</h1>
          <p className={styles.home__info}>
            Front-end Developer based in Kiev, Ukraine. I strive to build
            responsive, and beautiful web applications through carefully crafted
            code and user-centric design.
          </p>
          <div>
            <NavLink className={styles.home__link} to="/about">
              More about me
            </NavLink>
            <NavLink
              className={`${styles.home__link} + ' ' + ${styles.home__link_diff}`}
              to="/projects"
            >
              Portfolio
            </NavLink>
          </div>
        </div>
        <div className={styles.photo__wrap}>
          <img
            className={styles.photo}
            src={
              "https://media.vanityfair.com/photos/570ff3254ec6412621943609/master/pass/four-avatar-sequels-james-cameron.jpg"
            }
            alt="My picture"
          />
        </div>
      </div>
    </div>
  );
};
