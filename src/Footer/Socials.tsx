import React from "react";
import styles from "./socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

export const Socials = () => {
  return (
    <footer className={styles.socials__wrapper}>
      <h3>Social Profiles</h3>
      <ul className={styles.socials}>
        <li>
          <a className={styles.socials__link} href="#">
            <FontAwesomeIcon border icon={faFacebook} />
          </a>
        </li>
        <li>
          <a className={styles.socials__link} href="#">
            <FontAwesomeIcon border icon={faGithub} />
          </a>
        </li>
        <li>
          <a className={styles.socials__link} href="#">
            <FontAwesomeIcon border icon={faInstagram} />
          </a>
        </li>
        <li>
          <a className={styles.socials__link} href="#">
            <FontAwesomeIcon border icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
