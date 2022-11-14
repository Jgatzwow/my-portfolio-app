import React from "react";
import styles from "./Main.module.css";
import containerStyles from "../common/styles/Container.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={`${containerStyles.container} ${styles.main__container}`}>
        <div className={styles.text}>
          <span>Greetings</span>
          <h1>I am Michael</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.photo}></div>
      </div>
    </div>
  );
};
