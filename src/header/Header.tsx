import React from "react";
import styles from "./header.module.css";
import { NavBar } from "../nav/NavBar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};
