import React from "react";
import styles from "./infoList.module.css";

type PropsType = {
  title: string;
};

export const InfoList: React.FC<PropsType> = ({ title }) => {
  return (
    <div className={styles.infoList__text}>
      <h2 className={styles.InfoList__title}>{title}</h2>
      <ul className={styles.infoList}>
        <li className={styles.infoList__item}>
          <span className={styles.infoList__item__date}>2020-2021</span>
          <h4 className={styles.infoList__item__title}> Freelance</h4>
          <p className={styles.infoList__item__more}> Worked as freelancer</p>
        </li>
      </ul>
    </div>
  );
};
