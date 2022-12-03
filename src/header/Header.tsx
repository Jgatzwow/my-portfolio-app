import React, { useState } from "react";
import styles from "./header.module.css";
import containerStyles from "../common/styles/Container.module.css";
import { NavBar } from "../nav/NavBar";

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const animatedNavClassName = !toggle
    ? styles.nav__links__closed
    : styles.nav__links__opened;
  const animatedBurgerClassName = styles.burger;

  const onBurgerClickHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const onBurgerClickHandler1 = () => {
    setToggle(true);
  };

  return (
    <header className={styles.header}>
      <div onClick={onBurgerClickHandler} className={animatedBurgerClassName}>
        <div className={styles.lines__wrapper}>
          {!toggle && (
            <>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </>
          )}
          {toggle && (
            <>
              <div
                onClick={onBurgerClickHandler1}
                className={styles.burger__none}
              ></div>
            </>
          )}
        </div>
      </div>
      <NavBar toggle={toggle} />
    </header>
  );
};
