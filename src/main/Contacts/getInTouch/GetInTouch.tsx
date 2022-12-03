import React from "react";
import { Socials } from "../../../Socials/Socials";
import styles from "./getInTouch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export const GetInTouch = () => {
  return (
    <div className={styles.getInTouchWrapper}>
      <ul>
        <li>
          <span className={styles.getInTouch__span}>Phone</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faPhone} /> +380 99 008 44 59
          </h6>
        </li>
        <li>
          <span className={styles.getInTouch__span}>Email</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faEnvelope} />{" "}
            mihasokol1993@gmail.com
          </h6>
        </li>
        <li>
          <span className={styles.getInTouch__span}>Facebook</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faFacebook} />{" "}
            https://www.facebook.com/profile.php?id=100088502794813
          </h6>
        </li>
        <li className={styles.getInTouch__span}>
          <span>Linkedin</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faLinkedin} />{" "}
            https://www.linkedin.com/in/mykhailo-sokolenko-9514a4244/
          </h6>
        </li>
      </ul>
      <Socials />
    </div>
  );
};
