import React from "react";
import styles from "./Project.module.css";

type PropsType = {
  project: string;
  description: string;
  tech_stack: string[];
};

export const Project: React.FC<PropsType> = ({
  project,
  description,
  tech_stack,
}) => {
  const mappedTechStack = tech_stack.map((ts) => ts + " ");
  return (
    <div className={styles.project}>
      <div className={styles.icon__wrapper}>
        <a href={"#"} className={styles.remote__hidden_btn}>
          Check out
        </a>
      </div>
      <h3 className={styles.project__title}>{project}</h3>
      <p>{mappedTechStack}</p>
      <p className={styles.project__description}>{description}</p>
    </div>
  );
};
