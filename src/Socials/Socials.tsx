import React from "react";
import styles from "./socials.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

export const Socials = () => {
  return (
    <footer className={styles.socials__wrapper}>
      <h3 className={styles.title}>Social Profiles</h3>
      <ul className={styles.socials}>
        <li>
          <a
            className={styles.socials__link}
            href="https://www.facebook.com/profile.php?id=100088502794813"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a
            className={styles.socials__link}
            href="https://github.com/Jgatzwow"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a className={styles.socials__link} href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            className={styles.socials__link}
            href="https://www.linkedin.com/in/mykhailo-sokolenko-9514a4244/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
