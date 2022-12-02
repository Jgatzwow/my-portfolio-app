import React, { useState } from "react";
import styles from "./header.module.css";
import containerStyles from "../common/styles/Container.module.css";
import { NavBar } from "../nav/NavBar";

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const animatedNavClassName = !toggle
    ? styles.nav__links__closed
    : styles.nav__links__opened;
  const animatedBurgerClassName = !toggle ? styles.burger : styles.burger__none;

  const onBurgerClickHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const onBurgerMouseLeaveHandler = () => {
    setTimeout(onBurgerMouseOverHandler, 5000);
  };

  const onBurgerMouseOverHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <header className={styles.header}>
      <div
        className={`${containerStyles.container} ${styles.header__container}`}
      >
        {/*<div
          onMouseEnter={onBurgerMouseLeaveHandler}
          onMouseOver={onBurgerMouseOverHandler}
          onClick={onBurgerClickHandler}
          className={animatedBurgerClassName}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>*/}
        <NavBar />
      </div>
    </header>
  );
};
