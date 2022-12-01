import React from "react";
import { Socials } from "../../../Footer/Socials";
import styles from "./getInTouch.module.css";

export const GetInTouch = () => {
  return (
    <div className={styles.getInTouchWrapper}>
      <ul>
        <li>
          <span>Phone</span>
          <h6>+380 99 008 44 59</h6>
        </li>
        <li>
          <span>Email</span>
          <h6>mihasokol1993@gmail.com</h6>
        </li>
        <li>
          <span>Facebook</span>
          <h6>Mykhailo Sokolenko</h6>
        </li>
        <li>
          <span>Linkedin</span>
          <h6>Mykhailo Sokolenko</h6>
        </li>
      </ul>
      <Socials />
    </div>
  );
};
