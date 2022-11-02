import React from "react";
import styles from "./Skill.module.css";

type PropsType = {
  skill: string;
  description: string;
  image: string;
};

export const Skill: React.FC<PropsType> = ({ skill, description, image }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.icon__wrapper}>
        <img className={styles.icon} src={image} alt="some pic" />
      </div>
      <h3 className={styles.skill__title}>{skill}</h3>
      <p className={styles.skill__description}>{description}</p>
    </div>
  );
};
