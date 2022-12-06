import React from "react";
import styles from "./educationList.module.scss";

type PropsType = {
  data: {
    id: number;
    data: string;
    title: string;
    org: string;
    desc: string;
  }[];
};

export const EducationList: React.FC<PropsType> = ({ data }) => {
  const mappedListItem = data.map((item) => {
    return (
      <li key={item.id}>
        <span className={styles.infoList__item__date}>{item.data}</span>
        <div>
          <span className={styles.knowledge__title}>{item.title}</span>
          <span className={styles.separator}></span>
          <span className={styles.knowledge__title}>{item.org}</span>
        </div>
        <p className={styles.infoList__item__more}>{item.desc}</p>
      </li>
    );
  });
  return (
    <div className={styles.infoList__text}>
      <h2 className={styles.infoList__title}>Education</h2>
      <ul className={styles.infoList}>{mappedListItem}</ul>
    </div>
  );
};
