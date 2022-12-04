import React from "react";
import styles from "./Skill.module.scss";

type PropsType = {
  skill: string;
  description: string;
};

export const Skill: React.FC<PropsType> = ({ skill, description }) => {
  return (
    <div className={styles.skill}>
      <h3 className={styles.skill__title}>{skill}</h3>
      <p className={styles.skill__description}>{description}</p>
      <div className={styles.progress}></div>
    </div>
  );
};
