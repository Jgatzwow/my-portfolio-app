import React from "react";
import styles from "./header.module.css";
import containerStyles from "../common/styles/Container.module.css";
import { NavBar } from "../nav/NavBar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={`${containerStyles.container} ${styles.header__container}`}
      >
        <NavBar />
      </div>
    </header>
  );
};
