import React from "react";
import { Socials } from "../../../Socials/Socials";
import styles from "./getInTouch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

export const GetInTouch = () => {
  return (
    <div className={styles.getInTouchWrapper}>
      <ul className={styles.getInTouch__List}>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Phone</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faPhone} /> +380 99 008 44 59
          </h6>
        </li>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Email</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faEnvelope} />{" "}
            mihasokol1993@gmail.com
          </h6>
        </li>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Facebook</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faFacebook} />
            /MykhailoSokolenko
          </h6>
        </li>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Telegram</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#ffb400" icon={faTelegram} />
            @MichaelSokolenko
          </h6>
        </li>
      </ul>
      <Socials />
    </div>
  );
};
